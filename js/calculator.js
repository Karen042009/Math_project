/* 
 * CALCULATOR.JS
 * Enhanced with Formula Solver and Advanced Visualizer (Venn 2/3 sets)
 */

/* ----------------------------------------------------
   1. CALCULATOR MODES & TABS
   ---------------------------------------------------- */
// Unified mode: Standard is default. "Step-by-Step" is triggered via the Formula Dropdown below.
function toggleFormulaPanel() {
    const panel = document.getElementById('calc-formula-container');
    const btn = document.getElementById('btn-formula-drawer'); // Updated ID

    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        if(btn) btn.classList.add('active');
    } else {
        panel.style.display = 'none';
        if(btn) btn.classList.remove('active');
    }
}

function switchCalcTab(tab) {
    document.querySelectorAll('.calc-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.calc-pad').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });

    const btn = document.querySelector(`.calc-tab[onclick*="'${tab}'"]`);
    if (btn) btn.classList.add('active');

    // Explicitly handle keypad visibility
    const panel = document.getElementById(`calc-pad-${tab}`);
    if (panel) {
        panel.classList.add('active');
        panel.style.display = 'grid';
    }
}

/* ----------------------------------------------------
   2. STANDARD CALCULATOR LOGIC
   ---------------------------------------------------- */
function addToCalc(val) {
    const input = document.getElementById('calc-input');
    if (!input) return;
    input.focus();
    // Insert at cursor
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.setRangeText(val, start, end, 'end');
}

function clearCalc() {
    document.getElementById('calc-input').value = '';
    const ui = window.probabilityData?.ui || { calc_result_label: { hy: 'Արդյունք՝' } };
    const lang = currentLang || 'hy';
    const label = ui.calc_result_label[lang] || 'Result:';
    document.getElementById('calc-result').innerText = `${label} 0`;
}

function backspaceCalc() {
    const input = document.getElementById('calc-input');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    if (start === end) {
        if (start > 0) {
            input.value = input.value.slice(0, start - 1) + input.value.slice(end);
            input.selectionStart = input.selectionEnd = start - 1;
        }
    } else {
        input.value = input.value.slice(0, start) + input.value.slice(end);
        input.selectionStart = input.selectionEnd = start;
    }
}

async function calculateResult() {
    const input = document.getElementById('calc-input');
    const resultDisplay = document.getElementById('calc-result');
    let expr = input.value;

    if (!expr) return;

    // Helpers
    const factorial = (n) => {
        if (n < 0) return NaN;
        if (n === 0 || n === 1) return 1;
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        return res;
    };
    const P = (n, r) => factorial(n) / factorial(n - r);
    const C = (n, r) => factorial(n) / (factorial(r) * factorial(n - r));

    // Cleanup
    let processed = expr.replace(/(\d+)!/g, 'factorial($1)');
    const replacements = [
        [/×/g, '*'], [/÷/g, '/'], [/−/g, '-'],
        [/∩/g, '*'], [/∪/g, '+'],
        [/√/g, 'Math.sqrt'],
        [/π/g, 'Math.PI'],
        [/∞/g, 'Infinity'],
        [/e/g, 'Math.E'],
        [/\^/g, '**'],
        [/log\(/g, 'Math.log10('],
        [/ln\(/g, 'Math.log('],
        [/sin\(/g, 'Math.sin('],
        [/cos\(/g, 'Math.cos('],
        [/tan\(/g, 'Math.tan('],
        [/abs\(/g, 'Math.abs('],
        [/sqrt\(/g, 'Math.sqrt(']
    ];

    replacements.forEach(([reg, rep]) => {
        processed = processed.replace(reg, rep);
    });

    try {
        const safeEval = new Function('P', 'C', 'factorial', 'Math', `
            "use strict";
            return (${processed});
        `);
        const res = safeEval(P, C, factorial, Math);

        if (isNaN(res) || res === undefined) throw new Error("NaN");
        const lang = currentLang || 'hy';
        const label = window.probabilityData?.ui?.calc_result_label[lang] || 'Result:';
        resultDisplay.innerText = `${label} ${parseFloat(res.toFixed(6))}`;
        resultDisplay.style.color = 'var(--accent-gold)';
    } catch (e) {
        resultDisplay.innerText = "Error (Invalid Syntax)";
        resultDisplay.style.color = 'red';
    }
}

/* ----------------------------------------------------
   3. FORMULA SOLVER LOGIC
   ---------------------------------------------------- */
function renderFormulaInputs() {
    const type = document.getElementById('formula-select').value;
    const container = document.getElementById('formula-inputs');
    container.innerHTML = '';

    if (type === 'bernoulli') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                <label>n (Trials): <input type="number" id="f-n" class="ai-select" value="10"></label>
                <label>k (Successes): <input type="number" id="f-k" class="ai-select" value="5"></label>
                <label>p (Prob): <input type="number" id="f-p" class="ai-select" value="0.5" step="0.1"></label>
            </div>
        `;
    } else if (type === 'bayes') {
        container.innerHTML = `
            <p style="margin-bottom:10px; color:#aaa;">P(H|E) = P(E|H)P(H) / [P(E|H)P(H) + P(E|not H)P(not H)]</p>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <label>P(H) (Prior): <input type="number" id="f-ph" class="ai-select" value="0.01" step="0.01"></label>
                <label>P(E|H) (True Pos): <input type="number" id="f-peh" class="ai-select" value="0.99" step="0.01"></label>
                <label>P(E|¬H) (False Pos): <input type="number" id="f-penh" class="ai-select" value="0.05" step="0.01"></label>
            </div>
        `;
    } else if (type === 'combinations') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <label>n (Total): <input type="number" id="f-n" class="ai-select" value="5"></label>
                <label>k (Choose): <input type="number" id="f-k" class="ai-select" value="3"></label>
            </div>
        `;
    } else if (type === 'permutations') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr; gap:10px;">
                <label>n (Total): <input type="number" id="f-n" class="ai-select" value="5"></label>
            </div>
        `;
    } else if (type === 'poisson') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <label>λ (Lambda): <input type="number" id="f-lam" class="ai-select" value="3"></label>
                <label>k (Events): <input type="number" id="f-k" class="ai-select" value="2"></label>
            </div>
        `;
    } else if (type === 'normal_calc') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <label>μ (Mean): <input type="number" id="f-mu" class="ai-select" value="100"></label>
                <label>σ (StdDev): <input type="number" id="f-sigma" class="ai-select" value="15"></label>
                <label>x (Value): <input type="number" id="f-x" class="ai-select" value="115"></label>
            </div>
        `;
    }
}

function solveFormulaWithSteps() {
    const type = document.getElementById('formula-select').value;
    const out = document.getElementById('formula-steps');

    // Helpers
    const factorial = (n) => {
        if (n < 0) return 0;
        let r = 1; for (let i = 2; i <= n; i++) r *= i;
        return r;
    };
    const C = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));
    // Standard Normal CDF approximation
    const phi = (z) => {
        const p = 0.3275911;
        const a1=0.254829592, a2=-0.284496736, a3=1.421413741, a4=-1.453152027, a5=1.061405429;
        const sign = z < 0 ? -1 : 1; 
        const mag = Math.abs(z);
        const t = 1.0 / (1.0 + p * mag);
        const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-mag * mag);
        return 0.5 * (1 + sign * y);
    }

    let html = '';

    if (type === 'bernoulli') {
        const n = parseInt(document.getElementById('f-n').value);
        const k = parseInt(document.getElementById('f-k').value);
        const p = parseFloat(document.getElementById('f-p').value);
        const q = 1 - p;

        const comb = C(n, k);
        const res = comb * Math.pow(p, k) * Math.pow(q, n - k);

        html = `
            <p><strong>Formula:</strong> P_n(k) = C(${n}, ${k}) · p^k · q^{n-k}</p>
            <p>1. Calculate C(${n}, ${k}) = ${n}! / (${k}! · ${n - k}!) = <strong>${comb}</strong></p>
            <p>2. Calculate p^k = ${p}^${k} ≈ ${Math.pow(p, k).toFixed(5)}</p>
            <p>3. Calculate q^{n-k} = ${q.toFixed(2)}^${n - k} ≈ ${Math.pow(q, n - k).toFixed(5)}</p>
            <p style="color:var(--accent-gold); margin-top:10px;">Result: ${res.toFixed(6)}</p>
        `;

    } else if (type === 'bayes') {
        const ph = parseFloat(document.getElementById('f-ph').value);
        const peh = parseFloat(document.getElementById('f-peh').value);
        const penh = parseFloat(document.getElementById('f-penh').value);
        const pnh = 1 - ph;

        const num = ph * peh;
        const den = (ph * peh) + (pnh * penh);
        const res = num / den;

        html = `
            <p><strong>Formula:</strong> P(H|E) = [P(H)P(E|H)] / P(E)</p>
            <p>1. Numerator: ${ph} * ${peh} = <strong>${num.toFixed(5)}</strong></p>
            <p>2. Denominator (Total Prob): (${ph}*${peh}) + (${pnh.toFixed(2)}*${penh}) = <strong>${den.toFixed(5)}</strong></p>
            <p style="color:var(--accent-gold); margin-top:10px;">Result: ${res.toFixed(6)}</p>
        `;
    } else if (type === 'combinations') {
        const n = parseInt(document.getElementById('f-n').value);
        const k = parseInt(document.getElementById('f-k').value);
        const res = C(n, k);
        html = `<p>${n}! / (${k}!(${n}-${k})!) = <strong>${res}</strong></p>`;
    } else if (type === 'normal_calc') {
         const mu = parseFloat(document.getElementById('f-mu').value);
         const s = parseFloat(document.getElementById('f-sigma').value);
         const x = parseFloat(document.getElementById('f-x').value);
         const z = (x - mu) / s;
         const p = phi(z);
         
         html = `
            <p><strong>Task:</strong> Find P(X < ${x})</p>
            <p>1. Calculate Z-score: Z = (x - μ) / σ</p>
            <p>Z = (${x} - ${mu}) / ${s} = <strong>${z.toFixed(4)}</strong></p>
            <p>2. Lookup Z-table (or approx): Φ(${z.toFixed(2)})</p>
            <p style="color:var(--accent-gold); margin-top:10px;">Result: P(X < ${x}) ≈ ${p.toFixed(5)}</p>
            <p style="font-size:0.8rem; color:#888;">(This means ${ (p*100).toFixed(2) }% of data is below ${x})</p>
         `;
    }

    out.innerHTML = html;
    if (window.MathJax) MathJax.typesetPromise([out]);
}

/* ----------------------------------------------------
   4. VISUALIZER LOGIC (Updated VENN)
   ---------------------------------------------------- */
function updateVisualizer() {
    const type = document.getElementById('dist-select').value;
    const paramsDiv = document.getElementById('dist-params');
    const analysisPanel = document.getElementById('dist-analysis');
    
    // Hide analysis initially when switching modes
    if(analysisPanel) analysisPanel.style.display = 'none';
    if(paramsDiv) paramsDiv.innerHTML = '';

    if (type === 'normal') {
        paramsDiv.innerHTML = `
            <div class="param-group">
                <label>μ</label> <input type="number" id="param-mu" value="0" style="width:40px">
            </div>
            <div class="param-group">
                <label>σ</label> <input type="number" id="param-sigma" value="1" step="0.1" style="width:40px">
            </div>
            <div class="param-group">
                <label>Min</label> <input type="number" id="param-a" value="-1" style="width:40px">
            </div>
            <div class="param-group">
                <label>Max</label> <input type="number" id="param-b" value="1" style="width:40px">
            </div>
        `;
    } else if (type === 'venn') {
        paramsDiv.innerHTML = `
            <div class="param-group" style="padding:0; background:none; border:none;">
                <select id="venn-sets" onchange="renderVennInputs()" class="modern-select">
                    <option value="2">2 Sets (A, B)</option>
                    <option value="3">3 Sets (A, B, C)</option>
                </select>
            </div>
            <div id="venn-vals" style="display:flex; flex-wrap:wrap; gap:10px;"></div>
            
            <!-- Set Operations Highlights -->
            <div style="width:100%; margin-top:10px; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">
                <label style="color:#aaa; font-size:0.8rem; display:block; margin-bottom:5px;">Highlight Operations:</label>
                <div style="display:flex; gap:5px; flex-wrap:wrap;">
                    <button class="op-btn" onclick="drawGraph('union')">A ∪ B</button>
                    <button class="op-btn" onclick="drawGraph('intersection')">A ∩ B</button>
                    <button class="op-btn" onclick="drawGraph('onlyA')">A \\ B</button>
                    <button class="op-btn" onclick="drawGraph('onlyB')">B \\ A</button>
                    <button class="op-btn" onclick="drawGraph('complement')">(A ∪ B)'</button>
                </div>
            </div>
        `;
        renderVennInputs();
    } else if (type === 'tree') {
        paramsDiv.innerHTML = `
            <div class="param-group">
                <label>Steps</label> <input type="number" id="tree-steps" value="3" min="1" max="5" style="width:40px">
            </div>
            <div class="param-group">
                <label>p</label> <input type="number" id="tree-p" value="0.5" step="0.1" style="width:50px">
            </div>
        `;
    }
}

function renderVennInputs() {
    const count = document.getElementById('venn-sets').value;
    const div = document.getElementById('venn-vals');
    if (!div) return;

    if (count === '2') {
        div.innerHTML = `
            <div class="param-group"><label>|A|</label> <input type="number" id="v-a" value="50"></div>
            <div class="param-group"><label>|B|</label> <input type="number" id="v-b" value="40"></div>
            <div class="param-group"><label>|A∩B|</label> <input type="number" id="v-ab" value="10"></div>
            <div class="param-group"><label>Total</label> <input type="number" id="v-total" value="100"></div>
        `;
    } else {
        div.innerHTML = `
             <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px; font-size:0.8rem;">
                <div class="param-group"><label>|A|</label> <input type="number" id="v-a" value="30"></div>
                <div class="param-group"><label>|B|</label> <input type="number" id="v-b" value="30"></div>
                <div class="param-group"><label>|C|</label> <input type="number" id="v-c" value="30"></div>
                <div class="param-group"><label>|AB|</label> <input type="number" id="v-ab" value="10"></div>
                <div class="param-group"><label>|AC|</label> <input type="number" id="v-ac" value="10"></div>
                <div class="param-group"><label>|BC|</label> <input type="number" id="v-bc" value="10"></div>
                <div class="param-group"><label>|ABC|</label> <input type="number" id="v-abc" value="5"></div>
                <div class="param-group"><label>Total</label> <input type="number" id="v-total" value="100"></div>
            </div>
        `;
    }
}

function drawGraph(highlightMode = null) {
    const type = document.getElementById('dist-select').value;
    const canvas = document.getElementById('lab-canvas');
    if (!canvas) return;

    // High-DPI
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width;
    const h = rect.height;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#fff';

    // Show Analysis
    const analysisPanel = document.getElementById('dist-analysis');
    if(analysisPanel) analysisPanel.style.display = 'block';

    if (type === 'normal') {
        drawNormal(ctx, w, h);
    } else if (type === 'venn') {
        drawVenn(ctx, w, h, highlightMode);
    } else if (type === 'tree') {
        drawTree(ctx, w, h);
    }
}

// Helper for Normal Dist
function erf(x) {
    const sign = x < 0 ? -1 : 1;
    const ax = Math.abs(x);
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
    const p = 0.3275911;
    const t = 1.0 / (1.0 + p * ax);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
    return sign * y;
}
function normCdf(x, mu, sigma) {
    const z = (x - mu) / (sigma * Math.sqrt(2));
    return 0.5 * (1 + erf(z));
}

function drawNormal(ctx, w, h) {
    const mu = parseFloat(document.getElementById('param-mu')?.value || 0);
    const sigma = parseFloat(document.getElementById('param-sigma')?.value || 1);
    let a = parseFloat(document.getElementById('param-a')?.value);
    let b = parseFloat(document.getElementById('param-b')?.value);

    // Auto-defaults if empty
    if (isNaN(a)) a = mu - sigma;
    if (isNaN(b)) b = mu + sigma;

    // Ensure a < b
    if (a > b) [a, b] = [b, a];

    const pdf = (x) => (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mu) / sigma) ** 2);

    const minX = mu - 4 * sigma, maxX = mu + 4 * sigma;
    const range = maxX - minX;

    // Draw Base Line
    ctx.beginPath();
    ctx.moveTo(0, h - 30);
    ctx.lineTo(w, h - 30);
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Draw Curve
    const maxY = pdf(mu);
    const safeMaxY = maxY || 1;

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#9d4edd'; // Neon Purple

    for (let px = 0; px <= w; px++) {
        const x = minX + (px / w) * range;
        const y = pdf(x);
        const py = (h - 30) - (y / safeMaxY) * (h - 60);
        if (px === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Shade Area [a, b]
    const getPx = (val) => ((Math.max(minX, Math.min(maxX, val)) - minX) / range) * w;

    ctx.beginPath();
    const startPx = getPx(a);
    const endPx = getPx(b);

    ctx.moveTo(startPx, h - 30);
    for (let px = Math.floor(startPx); px <= Math.ceil(endPx); px++) {
        const x = minX + (px / w) * range;
        const y = pdf(x);
        const py = (h - 30) - (y / safeMaxY) * (h - 60);
        ctx.lineTo(px, py);
    }
    ctx.lineTo(endPx, h - 30);
    ctx.fillStyle = 'rgba(247, 37, 133, 0.3)';
    ctx.fill();

    // Calculate Area
    const p = Math.max(0, Math.min(1, normCdf(b, mu, sigma) - normCdf(a, mu, sigma)));
    const out = document.getElementById('dist-output');
    if (out) {
        out.innerHTML = `<div><strong>P(${a} ≤ X ≤ ${b}) = ${p.toFixed(5)}</strong></div>`;
    }
}

function drawVenn(ctx, w, h, highlight = null) {
    const sets = document.getElementById('venn-sets').value;
    const out = document.getElementById('dist-output');
    
    ctx.lineWidth = 2;
    ctx.font = '14px Inter, sans-serif';
    ctx.textAlign = 'center';

    const cx = w / 2, cy = h / 2;
    
    // Colors
    const colBase = 'rgba(255, 255, 255, 0.05)';
    const colA = 'rgba(247, 37, 133, 0.6)';
    const colB = 'rgba(76, 201, 240, 0.6)';
    const colMix = 'rgba(157, 78, 221, 0.6)';

    if (sets === '2') {
        const nA = parseInt(document.getElementById('v-a').value) || 0;
        const nB = parseInt(document.getElementById('v-b').value) || 0;
        const nAB = parseInt(document.getElementById('v-ab').value) || 0;
        const total = parseInt(document.getElementById('v-total').value) || 100;

        // Calculations
        const onlyA = nA - nAB;
        const onlyB = nB - nAB;
        const union = nA + nB - nAB;
        const none = total - union;

        const r = 100;
        const c1x = cx - 60;
        const c2x = cx + 60;

        // Determine highlights
        const isUnion = highlight === 'union';
        const isInter = highlight === 'intersection';
        const isOnlyA = highlight === 'onlyA';
        const isOnlyB = highlight === 'onlyB';
        const isComp = highlight === 'complement';

        // Draw Universe
        ctx.strokeStyle = '#555';
        ctx.strokeRect(cx - 250, cy - 180, 500, 360);
        ctx.fillStyle = '#aaa';
        ctx.fillText(`U = ${total}`, cx - 230, cy - 160);

        if (isComp) {
             ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
             ctx.fillRect(cx - 250, cy - 180, 500, 360);
        }

        // Draw Base Circles
        // Left
        ctx.beginPath(); 
        ctx.arc(c1x, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = (highlight && !isComp) ? colBase : 'rgba(247, 37, 133, 0.1)';
        ctx.fill();
        ctx.strokeStyle = '#fff'; 
        ctx.stroke();

        // Right
        ctx.beginPath(); 
        ctx.arc(c2x, cy, r, 0, 2 * Math.PI);
        ctx.fillStyle = (highlight && !isComp) ? colBase : 'rgba(76, 201, 240, 0.1)';
        ctx.fill();
        ctx.stroke();

        // Highlights - Simple Overlays
        if (isUnion || isOnlyA) {
            ctx.beginPath(); ctx.arc(c1x, cy, r, 0, 2 * Math.PI);
            ctx.fillStyle = colA; ctx.fill(); 
        }

        if (isUnion || isOnlyB) {
            ctx.beginPath(); ctx.arc(c2x, cy, r, 0, 2 * Math.PI);
            ctx.fillStyle = colB; ctx.fill();
        }
        
        // Correct Overlaps
        // If Only A: Erase B part
        if (isOnlyA) {
             ctx.save();
             ctx.beginPath(); ctx.arc(c2x, cy, r, 0, 2 * Math.PI);
             ctx.globalCompositeOperation = 'destination-out';
             ctx.fill();
             ctx.restore();
        }
        // If Only B: Erase A part
        if (isOnlyB) {
             ctx.save();
             ctx.beginPath(); ctx.arc(c1x, cy, r, 0, 2 * Math.PI);
             ctx.globalCompositeOperation = 'destination-out';
             ctx.fill();
             ctx.restore();
        }
        
        // Intersection (Draw on top if needed)
        if (isInter) {
            ctx.save();
            ctx.beginPath(); ctx.arc(c1x, cy, r, 0, 2 * Math.PI);
            ctx.clip();
            ctx.beginPath(); ctx.arc(c2x, cy, r, 0, 2 * Math.PI);
            ctx.fillStyle = colMix; 
            ctx.fill();
            ctx.restore();
        }

        // Re-Stroke
        ctx.strokeStyle = '#fff';
        ctx.beginPath(); ctx.arc(c1x, cy, r, 0, 2 * Math.PI); ctx.stroke();
        ctx.beginPath(); ctx.arc(c2x, cy, r, 0, 2 * Math.PI); ctx.stroke();

        // Labels
        ctx.fillStyle = '#fff';
        ctx.fillText(`A only: ${onlyA}`, c1x - 30, cy);
        ctx.fillText(`B only: ${onlyB}`, c2x + 30, cy);
        ctx.fillText(`Both: ${nAB}`, cx, cy);

        // Analysis
        out.innerHTML = `
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                <div class="${isOnlyA?'highlight-text':''}">P(A) = ${(nA/total).toFixed(3)}</div>
                <div class="${isOnlyB?'highlight-text':''}">P(B) = ${(nB/total).toFixed(3)}</div>
                <div class="${isUnion?'highlight-text':''}">P(A ∪ B) = ${(union/total).toFixed(3)}</div>
                <div class="${isInter?'highlight-text':''}">P(A ∩ B) = ${(nAB/total).toFixed(3)}</div>
                <div>P(A|B) = ${(nB>0 ? nAB/nB : 0).toFixed(3)}</div>
                <div>P(Only A) = ${onlyA}/${total} = <strong>${(onlyA/total).toFixed(3)}</strong></div>
            </div>
        `;

    } else {
        // Fallback for 3 sets
         const nA = parseInt(document.getElementById('v-a').value) || 0;
        const nB = parseInt(document.getElementById('v-b').value) || 0;
        const nC = parseInt(document.getElementById('v-c').value) || 0;
        const nAB = parseInt(document.getElementById('v-ab').value) || 0;
        const nAC = parseInt(document.getElementById('v-ac').value) || 0;
        const nBC = parseInt(document.getElementById('v-bc').value) || 0;
        const nABC = parseInt(document.getElementById('v-abc').value) || 0;
        const total = parseInt(document.getElementById('v-total').value) || 100;

        // Visual Layout
        const r = 90;
        const ax = cx, ay = cy - 50;
        const bx = cx - 55, by = cy + 40;
        const ccx = cx + 55, ccy = cy + 40;

        // Draw A
        ctx.beginPath(); ctx.arc(ax, ay, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(247, 37, 133, 0.3)'; ctx.fill(); ctx.stroke();
        ctx.fillStyle='#fff'; ctx.fillText('A', ax, ay - 40);

        // Draw B
        ctx.beginPath(); ctx.arc(bx, by, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(76, 201, 240, 0.3)'; ctx.fill(); ctx.stroke();
        ctx.fillStyle='#fff'; ctx.fillText('B', bx - 50, by);

        // Draw C
        ctx.beginPath(); ctx.arc(ccx, ccy, r, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 214, 10, 0.3)'; ctx.fill(); ctx.stroke();
        ctx.fillStyle='#fff'; ctx.fillText('C', ccx + 50, ccy);

        // Simplified Analysis for 3 sets
        out.innerHTML = `
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                 <div>P(A) = ${(nA/total).toFixed(3)}</div>
                 <div>P(B) = ${(nB/total).toFixed(3)}</div>
                 <div>P(C) = ${(nC/total).toFixed(3)}</div>
                 <div>P(A∩B∩C) = ${(nABC/total).toFixed(3)}</div>
                 <div>P(A∪B∪C) = ${( (nA+nB+nC - nAB - nAC - nBC + nABC)/total ).toFixed(3)}</div>
            </div>
        `;
    }
}

function drawTree(ctx, w, h) {
    const steps = parseInt(document.getElementById('tree-steps')?.value || 3);
    const p = parseFloat(document.getElementById('tree-p')?.value || 0.5);
    const q = 1 - p;

    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;

    const startX = 50;
    const startY = h / 2;
    const layerWidth = (w - 100) / steps;

    function drawBranch(x, y, level, probSoFar) {
        if (level === steps) {
            // Leaf node: Probability
            ctx.fillStyle = '#ffd60a';
            ctx.fillText(probSoFar.toFixed(4), x + 20, y);
            return;
        }

        const nextX = x + layerWidth;
        const offset = (h / 2) / Math.pow(2, level + 1);
        
        // Up branch (Success/P)
        const yUp = y - offset;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nextX, yUp);
        ctx.strokeStyle = 'rgba(76, 201, 240, 0.6)'; // Blue
        ctx.stroke();

        // Label P
        ctx.fillStyle = '#4cc9f0';
        ctx.fillText(p, (x + nextX) / 2, (y + yUp) / 2 - 10);
        
        drawBranch(nextX, yUp, level + 1, probSoFar * p);

        // Down branch (Failure/Q)
        const yDown = y + offset;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nextX, yDown);
        ctx.strokeStyle = 'rgba(247, 37, 133, 0.6)'; // Pink
        ctx.stroke();

        // Label Q
        ctx.fillStyle = '#f72585';
        ctx.fillText(q.toFixed(2), (x + nextX) / 2, (y + yDown) / 2 + 10);

        drawBranch(nextX, yDown, level + 1, probSoFar * q);
    }

    // Root
    ctx.beginPath();
    ctx.arc(startX, startY, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();

    drawBranch(startX, startY, 0, 1);
}

// Initial mode
setCalcMode('std');
