/* --- LAB / CALCULATOR LOGIC --- */

function addToCalc(val) {
    const input = document.getElementById('calc-input');
    if (!input) return;
    input.focus();
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.setRangeText(val, start, end, 'end');
}

function clearCalc() {
    document.getElementById('calc-input').value = '';
    const ui = window.probabilityData.ui;
    const lang = currentLang || 'hy';
    document.getElementById('calc-result').innerText = `${ui.calc_result_label[lang]} 0`;
}

function backspaceCalc() {
    const input = document.getElementById('calc-input');
    input.value = input.value.slice(0, -1);
}

async function calculateResult() {
    const input = document.getElementById('calc-input');
    const resultDisplay = document.getElementById('calc-result');
    let expr = input.value;

    if (!expr) return;

    // Local Math Functions
    const factorial = (n) => {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };

    const P = (n, r) => factorial(n) / factorial(n - r);
    const C = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

    // Pre-process expression for JS Eval
    // Replace P(n,r) -> P(n,r) (handled by wrapper)
    // Replace n! -> factorial(n)
    
    // Simple regex for factorial: (\d+)! -> factorial($1)
    let processed = expr.replace(/(\d+)!/g, 'factorial($1)');
    // Replace special symbols
    processed = processed.replace(/×/g, '*').replace(/÷/g, '/');
    processed = processed.replace(/∩/g, '*'); // Intersection often modeled as multiplication in independent events (heuristically)
    processed = processed.replace(/∪/g, '+'); // Union often sum (heuristically)
    // Constants
    processed = processed.replace(/π/g, 'Math.PI');
    processed = processed.replace(/sqrt\(/g, 'Math.sqrt(');
    
    try {
        // Safe evaluation wrapper
        const safeEval = new Function('P', 'C', 'factorial', 'Math', `
            "use strict";
            return (${processed});
        `);
        
        const res = safeEval(P, C, factorial, Math);
        
        if (isNaN(res) || res === undefined) throw new Error("NaN");
        const ui = window.probabilityData.ui;
        const lang = currentLang || 'hy';
        resultDisplay.innerText = `${ui.calc_result_label[lang]} ${parseFloat(res.toFixed(6))}`;
        resultDisplay.style.color = 'var(--accent-gold)';

    } catch (e) {
        // Fallback to AI!
        const lang = currentLang || 'hy';
        resultDisplay.innerText = lang === 'hy' ? "Վերլուծություն..." : (lang === 'ru' ? "Анализ..." : "Analyzing complexity...");
        resultDisplay.style.color = '#4cc9f0';
        
        try {
            // Assumes solveWithAI is available globally (from ai.js)
            const aiRes = await solveWithAI(expr);
            const lang = currentLang || 'hy';
            resultDisplay.innerText = `AI ${window.probabilityData.ui.calc_result_label[lang]} ${aiRes}`;
        } catch (aiError) {
             const lang = currentLang || 'hy';
             resultDisplay.innerText = lang === 'hy' ? "Սխալ" : (lang === 'ru' ? "Ошибка" : "Error");
             resultDisplay.style.color = 'red';
        }
    }
}

/* --- VISUALIZER LOGIC (Canvas) --- */
function updateVisualizer() {
    const type = document.getElementById('dist-select').value;
    const paramsDiv = document.getElementById('dist-params');
    const out = document.getElementById('dist-output');
    if (out) out.innerHTML = '';
    
    if (type === 'normal') {
        paramsDiv.innerHTML = `
            <label>μ: <input type="number" id="param-mu" value="0"></label>
            <label>σ: <input type="number" id="param-sigma" value="1"></label>
            <label>a: <input type="number" id="param-a" value="-1"></label>
            <label>b: <input type="number" id="param-b" value="1"></label>
        `;
    } else if (type === 'venn') {
        const lang = currentLang || 'hy';
        paramsDiv.innerHTML = `
          <label style="min-width: 220px;">
            ${lang === 'hy' ? 'Գործողություն՝' : (lang === 'ru' ? 'Операция:' : 'Op:')}
            <select id="venn-op">
              <option value="intersect">A ∩ B</option>
              <option value="union">A ∪ B</option>
              <option value="a_only">A \\ B</option>
              <option value="b_only">B \\ A</option>
            </select>
          </label>
        `;
    } else if (type === 'tree') {
        const lang = currentLang || 'hy';
        paramsDiv.innerHTML = `
          <label>${lang === 'hy' ? 'Քայլեր՝' : (lang === 'ru' ? 'Шаги:' : 'Steps:')} <input type="number" id="tree-steps" value="3" min="1" max="6"></label>
          <label>p: <input type="number" id="tree-p" value="0.6" min="0" max="1" step="0.01"></label>
        `;
    }
}

// Error function approximation (Abramowitz–Stegun 7.1.26)
function erf(x) {
    const sign = x < 0 ? -1 : 1;
    const ax = Math.abs(x);
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
    const p = 0.3275911;
    const t = 1.0 / (1.0 + p * ax);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
    return sign * y;
}

function normPdf(x, mu, sigma) {
    const z = (x - mu) / sigma;
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z);
}

function normCdf(x, mu, sigma) {
    const z = (x - mu) / (sigma * Math.SQRT2);
    return 0.5 * (1 + erf(z));
}

function drawGraph() {
    const type = document.getElementById('dist-select').value;
    const canvas = document.getElementById('lab-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Clear
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#fff';

    if (type === 'normal') {
        const muInput = document.getElementById('param-mu');
        const sigmaInput = document.getElementById('param-sigma');
        const mu = muInput ? (parseFloat(muInput.value) || 0) : 0;
        const sigmaRaw = sigmaInput ? (parseFloat(sigmaInput.value) || 1) : 1;
        const sigma = sigmaRaw > 0 ? sigmaRaw : 1;
        const aInput = document.getElementById('param-a');
        const bInput = document.getElementById('param-b');
        let a = aInput ? parseFloat(aInput.value) : mu - sigma;
        let b = bInput ? parseFloat(bInput.value) : mu + sigma;
        if (!Number.isFinite(a)) a = mu - sigma;
        if (!Number.isFinite(b)) b = mu + sigma;
        if (a > b) [a, b] = [b, a];
        
        // Draw Axis
        ctx.beginPath();
        ctx.moveTo(0, h - 30);
        ctx.lineTo(w, h - 30);
        ctx.strokeStyle = '#aaa';
        ctx.stroke();

        // Draw Bell Curve
        ctx.beginPath();
        ctx.strokeStyle = '#9d4edd'; // Neon Purple
        ctx.lineWidth = 3;

        // X range: mu - 4sigma to mu + 4sigma mapped to 0..w
        const minX = mu - 4 * sigma;
        const maxX = mu + 4 * sigma;
        
        for (let pixelX = 0; pixelX <= w; pixelX++) {
            // map pixelX to mathX
            const mathX = minX + (pixelX / w) * (maxX - minX);
            
            const y = normPdf(mathX, mu, sigma);
            
            // Map mathY to pixelY (scale up)
            // Max Y is at x=mu, y ~ 0.4/sigma
            const maxY = (1 / (sigma * Math.sqrt(2 * Math.PI)));
            // Avoid div by zero visual glitch
            const safeMaxY = maxY > 0.0001 ? maxY : 1; 
            
            const pixelY = (h - 30) - (y / safeMaxY) * (h - 60);

            if (pixelX === 0) ctx.moveTo(pixelX, pixelY);
            else ctx.lineTo(pixelX, pixelY);
        }
        ctx.stroke();

        // Shade area between a and b
        const clamp = (x) => Math.min(maxX, Math.max(minX, x));
        const aC = clamp(a);
        const bC = clamp(b);
        const aPx = ((aC - minX) / (maxX - minX)) * w;
        const bPx = ((bC - minX) / (maxX - minX)) * w;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(aPx, h - 30);
        for (let pixelX = Math.floor(aPx); pixelX <= Math.ceil(bPx); pixelX++) {
            const mathX = minX + (pixelX / w) * (maxX - minX);
            const y = normPdf(mathX, mu, sigma);
            const maxY = (1 / (sigma * Math.sqrt(2 * Math.PI)));
            const safeMaxY = maxY > 0.0001 ? maxY : 1;
            const pixelY = (h - 30) - (y / safeMaxY) * (h - 60);
            ctx.lineTo(pixelX, pixelY);
        }
        ctx.lineTo(bPx, h - 30);
        ctx.closePath();
        ctx.fillStyle = 'rgba(247, 37, 133, 0.22)'; // pink-magenta fill
        ctx.fill();
        ctx.restore();
        
        // Labels
        ctx.font = "12px sans-serif";
        ctx.fillText(`μ=${mu}`, w/2, h-10);

        const out = document.getElementById('dist-output');
        if (out) {
            const p = Math.max(0, Math.min(1, normCdf(b, mu, sigma) - normCdf(a, mu, sigma)));
            out.innerHTML = `<div><strong>P(${a.toFixed(3)} \\le X \\le ${b.toFixed(3)})</strong> = ${p.toFixed(6)}</div>`;
            if (window.MathJax) MathJax.typesetPromise([out]);
        }

    } else if (type === 'venn') {
        // Venn with selectable operation
        const op = (document.getElementById('venn-op')?.value) || 'intersect';
        const r = 80;
        const ax = w/2 - 55, bx = w/2 + 55, cy = h/2;

        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = '#000';
        ctx.fillRect(0,0,w,h);

        // Base outlines
        const drawCircle = (x, y) => {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2*Math.PI);
            ctx.strokeStyle = 'rgba(255,255,255,0.8)';
            ctx.lineWidth = 2;
            ctx.stroke();
        };
        drawCircle(ax, cy);
        drawCircle(bx, cy);

        // Region fill using compositing
        const fillA = () => {
            ctx.beginPath(); ctx.arc(ax, cy, r, 0, 2*Math.PI);
            ctx.fillStyle = 'rgba(157, 78, 221, 0.55)';
            ctx.fill();
        };
        const fillB = () => {
            ctx.beginPath(); ctx.arc(bx, cy, r, 0, 2*Math.PI);
            ctx.fillStyle = 'rgba(255, 214, 10, 0.35)';
            ctx.fill();
        };

        if (op === 'union') {
            fillA(); fillB();
        } else if (op === 'intersect') {
            // A then intersect with B
            ctx.save();
            fillA();
            ctx.globalCompositeOperation = 'source-in';
            fillB();
            ctx.restore();
        } else if (op === 'a_only') {
            // A minus B
            ctx.save();
            fillA();
            ctx.globalCompositeOperation = 'destination-out';
            fillB();
            ctx.restore();
        } else if (op === 'b_only') {
            ctx.save();
            fillB();
            ctx.globalCompositeOperation = 'destination-out';
            fillA();
            ctx.restore();
        }

        // Labels
        ctx.fillStyle = '#fff';
        ctx.font = "16px sans-serif";
        ctx.fillText("A", ax - r - 10, cy);
        ctx.fillText("B", bx + r - 5, cy);
    } else if (type === 'tree') {
        const stepsRaw = parseInt(document.getElementById('tree-steps')?.value ?? '3', 10);
        const steps = Math.max(1, Math.min(6, Number.isFinite(stepsRaw) ? stepsRaw : 3));
        let p = parseFloat(document.getElementById('tree-p')?.value ?? '0.6');
        if (!Number.isFinite(p)) p = 0.6;
        p = Math.max(0, Math.min(1, p));

        ctx.fillStyle = '#000';
        ctx.fillRect(0,0,w,h);

        // Build binary tree layout
        const marginX = 30;
        const marginY = 25;
        const usableW = w - marginX * 2;
        const levelGapX = usableW / (steps + 1);
        const topY = marginY;
        const bottomY = h - marginY;

        // Node positions: level l has 2^l nodes
        const nodes = [];
        for (let l = 0; l <= steps; l++) {
            const count = 2 ** l;
            const x = marginX + l * levelGapX;
            for (let i = 0; i < count; i++) {
                const y = topY + (i + 0.5) * ((bottomY - topY) / count);
                nodes.push({ l, i, x, y });
            }
        }

        const getNode = (l, i) => nodes.find(n => n.l === l && n.i === i);

        // Draw edges
        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth = 2;
        ctx.font = '12px sans-serif';
        for (let l = 0; l < steps; l++) {
            const count = 2 ** l;
            for (let i = 0; i < count; i++) {
                const parent = getNode(l, i);
                const left = getNode(l + 1, i * 2);
                const right = getNode(l + 1, i * 2 + 1);

                // left edge (success)
                ctx.beginPath();
                ctx.moveTo(parent.x, parent.y);
                ctx.lineTo(left.x, left.y);
                ctx.stroke();

                // right edge (fail)
                ctx.beginPath();
                ctx.moveTo(parent.x, parent.y);
                ctx.lineTo(right.x, right.y);
                ctx.stroke();

                // labels near edges
                ctx.fillStyle = 'rgba(76, 201, 240, 0.9)';
                ctx.fillText(`p=${p.toFixed(2)}`, (parent.x + left.x)/2 - 12, (parent.y + left.y)/2 - 6);
                ctx.fillStyle = 'rgba(247, 37, 133, 0.9)';
                ctx.fillText(`q=${(1-p).toFixed(2)}`, (parent.x + right.x)/2 - 12, (parent.y + right.y)/2 + 14);
            }
        }

        // Draw nodes + leaf probabilities
        for (const n of nodes) {
            ctx.beginPath();
            ctx.arc(n.x, n.y, 5, 0, 2*Math.PI);
            ctx.fillStyle = (n.l === steps) ? 'rgba(255, 214, 10, 0.9)' : 'rgba(157, 78, 221, 0.9)';
            ctx.fill();
        }

        // Leaf probs for binomial-style counting of successes along path:
        // leaf index i in [0,2^steps) corresponds to binary choices: left=0, right=1.
        // We'll interpret left as "success" with prob p, right as "fail" with q.
        const out = document.getElementById('dist-output');
        if (out) {
            const lang = currentLang || 'hy';
            const treeDesc = {
                hy: `<strong>Բինար ծառ</strong> ${steps} քայլերով: Ձախ ճյուղի հավան. = p, աջ ճյուղի հավան. = q:`,
                en: `<strong>Binary tree</strong> with ${steps} steps. Left branch prob = p, right branch prob = q.`,
                ru: `<strong>Бинарное дерево</strong> с ${steps} шагами. Вер. левой ветви = p, пр. ветви = q.`
            };
            out.innerHTML = `<div>${treeDesc[lang]}</div>`;
        }

        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.font = '12px sans-serif';
        for (let i = 0; i < 2 ** steps; i++) {
            const leaf = getNode(steps, i);
            if (!leaf) continue;
            // successes = count of 0 bits if we map left=0? easier: define success when bit=0.
            let successes = 0;
            for (let b = 0; b < steps; b++) {
                const bit = (i >> (steps - 1 - b)) & 1;
                if (bit === 0) successes++;
            }
            const fails = steps - successes;
            const prob = Math.pow(p, successes) * Math.pow(1 - p, fails);
            ctx.fillText(prob.toFixed(4), leaf.x + 10, leaf.y + 4);
        }
    }
}
