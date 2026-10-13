/*
 * SIMULATIONS.JS — Monte Carlo Interactive Simulations
 * 1. Galton Board (Bean Machine) — demonstrates CLT
 * 2. Monty Hall Problem — demonstrates probability paradox
 * 3. Buffon's Needle — estimates π
 */

/* ============================================================
 * SIMULATION SELECTOR
 * ============================================================ */
let currentSim = 'integral';

function showSimulation(simId, btnEl) {
    currentSim = simId;
    document.querySelectorAll('.sim-tab-btn').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    document.querySelectorAll('.sim-panel').forEach(p => {
        p.style.display = 'none';
    });
    const panel = document.getElementById('sim-' + simId);
    if (panel) {
        panel.style.display = 'block';
        panel.classList.add('fade-in-up');
        setTimeout(() => panel.classList.remove('fade-in-up'), 600);
    }

    if (simId === 'integral') initIntegralSim();
    if (simId === 'galton') initGalton();
    if (simId === 'buffon') initBuffon();
    if (simId === 'coin') initCoin();
    if (simId === 'dice') initDice();
    if (typeof typesetVisibleMath === 'function') typesetVisibleMath();
}

function updateSimDescriptions() {
    const ui = window.probabilityData.ui;
    const lang = currentLang || 'en';

    // Update Monty Hall dynamic texts based on state
    const msgEl = document.getElementById('monty-message');
    if (msgEl) {
        if (montyState === 'choose') {
            msgEl.innerText = ui.monty_choose_door[lang];
        } else if (montyState === 'revealed') {
            const msgTemplate = {
                hy: `Դուռ ${montyRevealedDoor + 1}-ի հետևում 🐐 է։ <br><strong>Ուզո՞ւմ եք ՓՈԽԵԼ, թե՞ ՄՆԱԼ։</strong>`,
                en: `Door ${montyRevealedDoor + 1} has a 🐐! <br><strong>Do you want to SWITCH or STAY?</strong>`,
                ru: `За дверью ${montyRevealedDoor + 1} 🐐! <br><strong>Желаете СМЕНИТЬ или ОСТАВИТЬ?</strong>`
            };
            msgEl.innerHTML = msgTemplate[lang];
        } else {
            // Leave result texts alone
        }
    }

    // Refresh dynamic stats
    updateMontyStats();
    updateGaltonStats();
    updateBuffonStats();
    if (typeof updateCoinStats === 'function') updateCoinStats();
    if (typeof updateDiceStats === 'function') updateDiceStats();
    if (typeof updateIntegralStats === 'function') updateIntegralStats();

    // Refresh Monte Carlo select options
    const mcFuncSelect = document.getElementById('mc-func-select');
    if (mcFuncSelect) {
        const funcLabels = {
            'x2': { hy: 'f(x) = x² [0, 1] (Ճշգրիտ՝ 1/3)', en: 'f(x) = x² [0, 1] (Exact: 1/3)', ru: 'f(x) = x² [0, 1] (Точно: 1/3)' },
            'sin': { hy: 'f(x) = sin(x) [0, π] (Ճշգրիտ՝ 2.0)', en: 'f(x) = sin(x) [0, π] (Exact: 2.0)', ru: 'f(x) = sin(x) [0, π] (Точно: 2.0)' },
            'quarter_circle': { hy: 'f(x) = √(1 - x²) [0, 1] (Ճշգրիտ՝ π/4)', en: 'f(x) = √(1 - x²) [0, 1] (Exact: π/4)', ru: 'f(x) = √(1 - x²) [0, 1] (Точно: π/4)' },
            'exp': { hy: 'f(x) = e^(-x) [0, 2] (Ճշգրիտ՝ 1 - e⁻²)', en: 'f(x) = e^(-x) [0, 2] (Exact: 1 - e⁻²)', ru: 'f(x) = e^(-x) [0, 2] (Точно: 1 - e⁻²)' },
            'inv_quad': { hy: 'f(x) = 1 / (1 + x²) [0, 1] (Ճշգրիտ՝ π/4)', en: 'f(x) = 1 / (1 + x²) [0, 1] (Exact: π/4)', ru: 'f(x) = 1 / (1 + x²) [0, 1] (Точно: π/4)' },
            'parabola_inv': { hy: 'f(x) = 4 - x² [0, 2] (Ճշգրիտ՝ 16/3)', en: 'f(x) = 4 - x² [0, 2] (Exact: 16/3)', ru: 'f(x) = 4 - x² [0, 2] (Точно: 16/3)' },
            'poly': { hy: 'f(x) = x³ - 2x + 3 [0, 2] (Ճշգրիտ՝ 6.0)', en: 'f(x) = x³ - 2x + 3 [0, 2] (Exact: 6.0)', ru: 'f(x) = x³ - 2x + 3 [0, 2] (Точно: 6.0)' }
        };
        for (let i = 0; i < mcFuncSelect.options.length; i++) {
            const opt = mcFuncSelect.options[i];
            if (funcLabels[opt.value] && funcLabels[opt.value][lang]) {
                opt.text = funcLabels[opt.value][lang];
            }
        }
    }

    const mcPointsTarget = document.getElementById('mc-points-target');
    if (mcPointsTarget) {
        const pointLabels = {
            '500': { hy: '500 կետ', en: '500 points', ru: '500 точек' },
            '1000': { hy: '1,000 կետ', en: '1,000 points', ru: '1 000 точек' },
            '5000': { hy: '5,000 կետ', en: '5,000 points', ru: '5 000 точек' },
            '10000': { hy: '10,000 կետ', en: '10,000 points', ru: '10 000 точек' },
            '50000': { hy: '50,000 կետ', en: '50,000 points', ru: '50 000 точек' }
        };
        for (let i = 0; i < mcPointsTarget.options.length; i++) {
            const opt = mcPointsTarget.options[i];
            if (pointLabels[opt.value] && pointLabels[opt.value][lang]) {
                opt.text = pointLabels[opt.value][lang];
            }
        }
    }
}


/* ============================================================
 * 0. MONTE CARLO INTEGRATION SIMULATION (ENHANCED)
 * Supports Hit-or-Miss and Sample Mean methods, dynamic bounds,
 * negative/signed functions, error tracking, and persistent state.
 * ============================================================ */
const MC_FUNCTIONS = {
    'x2': {
        name: 'f(x) = x²',
        f: (x) => x * x,
        defaultA: 0,
        defaultB: 1,
        exact: (a, b) => (Math.pow(b, 3) - Math.pow(a, 3)) / 3,
        badge: 'f(x) = x²'
    },
    'sin': {
        name: 'f(x) = sin(x)',
        f: (x) => Math.sin(x),
        defaultA: 0,
        defaultB: Math.PI,
        exact: (a, b) => Math.cos(a) - Math.cos(b),
        badge: 'f(x) = sin(x)'
    },
    'quarter_circle': {
        name: 'f(x) = √(1 - x²)',
        f: (x) => {
            if (x < -1 || x > 1) return NaN;
            return Math.sqrt(1 - x * x);
        },
        defaultA: 0,
        defaultB: 1,
        exact: (a, b) => {
            const clampedA = Math.max(-1, Math.min(1, a));
            const clampedB = Math.max(-1, Math.min(1, b));
            const F = (x) => 0.5 * (x * Math.sqrt(Math.max(0, 1 - x * x)) + Math.asin(x));
            return F(clampedB) - F(clampedA);
        },
        badge: 'f(x) = √(1 - x²)'
    },
    'exp': {
        name: 'f(x) = e^(-x)',
        f: (x) => Math.exp(-x),
        defaultA: 0,
        defaultB: 2,
        exact: (a, b) => Math.exp(-a) - Math.exp(-b),
        badge: 'f(x) = e^(-x)'
    },
    'inv_quad': {
        name: 'f(x) = 1 / (1 + x²)',
        f: (x) => 1 / (1 + x * x),
        defaultA: 0,
        defaultB: 1,
        exact: (a, b) => Math.atan(b) - Math.atan(a),
        badge: 'f(x) = 1 / (1 + x²)'
    },
    'parabola_inv': {
        name: 'f(x) = 4 - x²',
        f: (x) => 4 - x * x,
        defaultA: 0,
        defaultB: 2,
        exact: (a, b) => (4 * b - Math.pow(b, 3) / 3) - (4 * a - Math.pow(a, 3) / 3),
        badge: 'f(x) = 4 - x²'
    },
    'poly': {
        name: 'f(x) = x³ - 2x + 3',
        f: (x) => Math.pow(x, 3) - 2 * x + 3,
        defaultA: 0,
        defaultB: 2,
        exact: (a, b) => (Math.pow(b, 4) / 4 - Math.pow(b, 2) + 3 * b) - (Math.pow(a, 4) / 4 - Math.pow(a, 2) + 3 * a),
        badge: 'f(x) = x³ - 2x + 3'
    }
};

function getMcFunctionBounds(def, a, b) {
    let minVal = 0;
    let maxVal = 0;
    const steps = 120;
    const minX = Math.min(a, b);
    const maxX = Math.max(a, b);
    for (let i = 0; i <= steps; i++) {
        const x = minX + (i / steps) * (maxX - minX);
        const y = def.f(x);
        if (Number.isFinite(y)) {
            minVal = Math.min(minVal, y);
            maxVal = Math.max(maxVal, y);
        }
    }
    let minY = minVal < 0 ? minVal * 1.1 : 0;
    let maxY = maxVal > 0 ? maxVal * 1.1 : 0.5;
    if (maxY <= minY) maxY = minY + 1;
    return { minY, maxY };
}

let mcCanvas = null;
let mcCtx = null;
let mcConvCanvas = null;
let mcConvCtx = null;
let mcRunning = false;
let mcPaused = false;
let mcAnimId = null;
let mcFuncKey = 'x2';
let mcMethod = 'hit_or_miss';
let mcA = 0;
let mcB = 1;
let mcMinY = 0;
let mcMaxY = 1.05;
let mcTargetN = 1000;
let mcCurrentN = 0;
let mcCurrentNin = 0;
let mcSumY = 0;
let mcSumY2 = 0;
let mcPointsList = [];
let mcConvergenceHistory = [];

function updateMcButtonStates() {
    const btnStart = document.getElementById('mc-btn-start');
    const btnPause = document.getElementById('mc-btn-pause');
    const btnResume = document.getElementById('mc-btn-resume');
    const btnReset = document.getElementById('mc-btn-reset');

    if (btnStart) btnStart.disabled = mcRunning;
    if (btnPause) btnPause.disabled = !mcRunning || mcPaused;
    if (btnResume) btnResume.disabled = mcRunning;
    if (btnReset) btnReset.disabled = false;
}

function initIntegralSim() {
    mcCanvas = document.getElementById('mc-integral-canvas');
    mcConvCanvas = document.getElementById('mc-convergence-canvas');
    if (!mcCanvas || !mcConvCanvas) return;

    mcCtx = mcCanvas.getContext('2d');
    mcConvCtx = mcConvCanvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const w = mcCanvas.offsetWidth || 560;
    const h = mcCanvas.offsetHeight || 380;
    mcCanvas.width = w * dpr;
    mcCanvas.height = h * dpr;
    mcCtx.scale(dpr, dpr);

    const cw = mcConvCanvas.offsetWidth || 560;
    const ch = mcConvCanvas.offsetHeight || 160;
    mcConvCanvas.width = cw * dpr;
    mcConvCanvas.height = ch * dpr;
    mcConvCtx.scale(dpr, dpr);

    const sel = document.getElementById('mc-func-select');
    if (sel) mcFuncKey = sel.value;
    const def = MC_FUNCTIONS[mcFuncKey] || MC_FUNCTIONS['x2'];

    const inA = document.getElementById('mc-bound-a');
    const inB = document.getElementById('mc-bound-b');
    if (inA) mcA = parseFloat(inA.value);
    if (inB) mcB = parseFloat(inB.value);
    if (isNaN(mcA)) mcA = def.defaultA;
    if (isNaN(mcB)) mcB = def.defaultB;

    const bounds = getMcFunctionBounds(def, mcA, mcB);
    mcMinY = bounds.minY;
    mcMaxY = bounds.maxY;

    const methodSel = document.getElementById('mc-method-select');
    if (methodSel) mcMethod = methodSel.value || 'hit_or_miss';

    const targetSel = document.getElementById('mc-points-target');
    if (targetSel) mcTargetN = parseInt(targetSel.value) || 1000;

    const badge = document.getElementById('mc-func-badge');
    if (badge) badge.innerText = def.badge;

    updateMcButtonStates();
    updateIntegralStats();
    drawIntegralCanvas();
    drawConvergenceCanvas();
}

function mcChangeMethod(m) {
    mcMethod = m || 'hit_or_miss';
    mcReset();
}

function mcChangeFunction() {
    const sel = document.getElementById('mc-func-select');
    if (!sel) return;
    mcFuncKey = sel.value;
    const def = MC_FUNCTIONS[mcFuncKey];
    if (!def) return;

    mcA = def.defaultA;
    mcB = def.defaultB;
    const inA = document.getElementById('mc-bound-a');
    const inB = document.getElementById('mc-bound-b');
    if (inA) inA.value = mcA;
    if (inB) inB.value = Math.round(mcB * 1000) / 1000;

    const bounds = getMcFunctionBounds(def, mcA, mcB);
    mcMinY = bounds.minY;
    mcMaxY = bounds.maxY;

    const badge = document.getElementById('mc-func-badge');
    if (badge) badge.innerText = def.badge;

    mcReset();
}

function mcUpdateBounds() {
    const inA = document.getElementById('mc-bound-a');
    const inB = document.getElementById('mc-bound-b');
    if (inA) mcA = parseFloat(inA.value);
    if (inB) mcB = parseFloat(inB.value);

    if (isNaN(mcA)) mcA = 0;
    if (isNaN(mcB) || mcB === mcA) mcB = mcA + 1;

    // Check quarter circle domain
    if (mcFuncKey === 'quarter_circle') {
        if (mcA < -1 || mcB > 1) {
            alert('√(1 - x²) ֆունկցիան սահմանված է միայն [-1, 1] միջակայքում։');
            mcA = Math.max(-1, Math.min(1, mcA));
            mcB = Math.max(-1, Math.min(1, mcB));
            if (inA) inA.value = mcA;
            if (inB) inB.value = mcB;
        }
    }

    const def = MC_FUNCTIONS[mcFuncKey] || MC_FUNCTIONS['x2'];
    const bounds = getMcFunctionBounds(def, mcA, mcB);
    mcMinY = bounds.minY;
    mcMaxY = bounds.maxY;

    mcReset();
}

function mcUpdateTarget() {
    const targetSel = document.getElementById('mc-points-target');
    if (targetSel) mcTargetN = parseInt(targetSel.value) || 1000;
}

function mcStart() {
    if (mcRunning && !mcPaused) return;

    if (!mcPaused) {
        mcCurrentN = 0;
        mcCurrentNin = 0;
        mcSumY = 0;
        mcSumY2 = 0;
        mcPointsList = [];
        mcConvergenceHistory = [];
    }

    mcRunning = true;
    mcPaused = false;
    updateMcButtonStates();

    if (mcAnimId) cancelAnimationFrame(mcAnimId);
    mcLoop();
}

function mcPause() {
    mcPaused = true;
    mcRunning = false;
    updateMcButtonStates();
    if (mcAnimId) cancelAnimationFrame(mcAnimId);
}

function mcResume() {
    if (mcCurrentN >= mcTargetN) {
        mcTargetN += 1000;
        const targetSel = document.getElementById('mc-points-target');
        if (targetSel) {
            for (let i = 0; i < targetSel.options.length; i++) {
                if (parseInt(targetSel.options[i].value) >= mcTargetN) {
                    targetSel.selectedIndex = i;
                    mcTargetN = parseInt(targetSel.options[i].value);
                    break;
                }
            }
        }
    }
    mcRunning = true;
    mcPaused = false;
    updateMcButtonStates();
    if (mcAnimId) cancelAnimationFrame(mcAnimId);
    mcLoop();
}

function mcReset() {
    mcRunning = false;
    mcPaused = false;
    if (mcAnimId) cancelAnimationFrame(mcAnimId);

    mcCurrentN = 0;
    mcCurrentNin = 0;
    mcSumY = 0;
    mcSumY2 = 0;
    mcPointsList = [];
    mcConvergenceHistory = [];

    updateMcButtonStates();
    updateIntegralStats();
    drawIntegralCanvas();
    drawConvergenceCanvas();
}

function mcLoop() {
    if (!mcRunning || mcPaused) return;

    const speedSlider = document.getElementById('mc-speed-slider');
    const speed = speedSlider ? parseInt(speedSlider.value) : 35;
    const batchSize = Math.max(1, Math.round(Math.pow(speed / 10, 2.2)));

    const def = MC_FUNCTIONS[mcFuncKey] || MC_FUNCTIONS['x2'];
    const remaining = mcTargetN - mcCurrentN;
    const toGen = Math.min(batchSize, remaining);

    const boxH = mcMaxY - mcMinY;
    const boxW = mcB - mcA;

    for (let i = 0; i < toGen; i++) {
        const rx = mcA + Math.random() * boxW;
        const fy = def.f(rx);

        if (mcMethod === 'hit_or_miss') {
            const ry = mcMinY + Math.random() * boxH;
            let inside = false;
            let hitScore = 0;

            if (fy >= 0) {
                if (ry >= 0 && ry <= fy) {
                    inside = true;
                    hitScore = 1;
                }
            } else {
                if (ry <= 0 && ry >= fy) {
                    inside = true;
                    hitScore = -1;
                }
            }

            mcCurrentN++;
            mcCurrentNin += hitScore;

            if (mcPointsList.length > 1500) mcPointsList.shift();
            mcPointsList.push({ x: rx, y: ry, inside: inside });

            if (mcCurrentN <= 100 || mcCurrentN % Math.max(1, Math.floor(mcTargetN / 120)) === 0 || mcCurrentN === mcTargetN) {
                const currentEst = boxW * boxH * (mcCurrentNin / mcCurrentN);
                mcConvergenceHistory.push({ n: mcCurrentN, est: currentEst });
            }
        } else {
            // SAMPLE MEAN METHOD: I_N = (b - a)/N * sum f(X_i)
            if (Number.isFinite(fy)) {
                mcCurrentN++;
                mcSumY += fy;
                mcSumY2 += fy * fy;

                if (mcPointsList.length > 1500) mcPointsList.shift();
                mcPointsList.push({ x: rx, y: fy, inside: true });

                if (mcCurrentN <= 100 || mcCurrentN % Math.max(1, Math.floor(mcTargetN / 120)) === 0 || mcCurrentN === mcTargetN) {
                    const currentEst = boxW * (mcSumY / mcCurrentN);
                    mcConvergenceHistory.push({ n: mcCurrentN, est: currentEst });
                }
            }
        }
    }

    updateIntegralStats();
    drawIntegralCanvas();
    drawConvergenceCanvas();

    if (mcCurrentN >= mcTargetN) {
        mcRunning = false;
        mcPaused = false;
        updateMcButtonStates();
        return;
    }

    mcAnimId = requestAnimationFrame(mcLoop);
}

function updateIntegralStats() {
    const def = MC_FUNCTIONS[mcFuncKey] || MC_FUNCTIONS['x2'];
    const exactVal = def.exact(mcA, mcB);
    const boxW = mcB - mcA;
    const boxH = mcMaxY - mcMinY;

    let approx = null;
    let ratio = null;
    let absErr = null;
    let stdErr = null;

    if (mcCurrentN > 0) {
        if (mcMethod === 'hit_or_miss') {
            ratio = mcCurrentNin / mcCurrentN;
            approx = boxW * boxH * ratio;
            const p = Math.abs(ratio);
            stdErr = (boxW * boxH) * Math.sqrt(Math.max(0, p * (1 - p)) / mcCurrentN);
        } else {
            const meanY = mcSumY / mcCurrentN;
            approx = boxW * meanY;
            const variance = Math.max(0, (mcSumY2 / mcCurrentN) - Math.pow(meanY, 2));
            stdErr = Math.abs(boxW) * Math.sqrt(variance / mcCurrentN);
            ratio = meanY;
        }
        absErr = Math.abs(approx - exactVal);
    }

    const elN = document.getElementById('mc-stat-n');
    const elNin = document.getElementById('mc-stat-nin');
    const elRatio = document.getElementById('mc-stat-ratio');
    const elExact = document.getElementById('mc-stat-exact');
    const elApprox = document.getElementById('mc-stat-approx');
    const elAbsErr = document.getElementById('mc-stat-abs-err');
    const elStdErr = document.getElementById('mc-stat-stderr');

    if (elN) elN.innerText = mcCurrentN > 0 ? mcCurrentN.toLocaleString() : '0';
    if (elNin) {
        if (mcMethod === 'sample_mean') elNin.innerText = mcCurrentN > 0 ? mcCurrentN.toLocaleString() : '—';
        else elNin.innerText = mcCurrentN > 0 ? mcCurrentNin.toLocaleString() : '—';
    }
    if (elRatio) elRatio.innerText = ratio !== null ? ratio.toFixed(4) : '—';
    if (elExact) elExact.innerText = Number.isFinite(exactVal) ? exactVal.toFixed(6) : '—';
    if (elApprox) elApprox.innerText = approx !== null ? approx.toFixed(6) : '—';
    if (elAbsErr) elAbsErr.innerText = absErr !== null ? absErr.toFixed(6) : '—';
    if (elStdErr) elStdErr.innerText = stdErr !== null ? stdErr.toFixed(6) : '—';
}

function drawIntegralCanvas() {
    if (!mcCanvas || !mcCtx) return;
    const w = mcCanvas.offsetWidth || 560;
    const h = mcCanvas.offsetHeight || 380;
    const dpr = window.devicePixelRatio || 1;

    if (mcCanvas.width !== w * dpr || mcCanvas.height !== h * dpr) {
        mcCanvas.width = w * dpr;
        mcCanvas.height = h * dpr;
        mcCtx.setTransform(1, 0, 0, 1, 0, 0);
        mcCtx.scale(dpr, dpr);
    }

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const bgCol = isLight ? '#ffffff' : '#080214';
    const axisCol = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.2)';
    const textCol = isLight ? '#334155' : 'rgba(255, 255, 255, 0.7)';
    const gridCol = isLight ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.03)';

    mcCtx.fillStyle = bgCol;
    mcCtx.fillRect(0, 0, w, h);

    const padLeft = 55;
    const padRight = 30;
    const padTop = 30;
    const padBottom = 42;
    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    const toPxX = (x) => padLeft + ((x - mcA) / (mcB - mcA)) * plotW;
    const toPxY = (y) => padTop + plotH - ((y - mcMinY) / (mcMaxY - mcMinY)) * plotH;

    // Grid lines
    mcCtx.strokeStyle = gridCol;
    mcCtx.lineWidth = 1;
    for (let i = 1; i <= 4; i++) {
        const gy = padTop + (plotH / 5) * i;
        mcCtx.beginPath();
        mcCtx.moveTo(padLeft, gy);
        mcCtx.lineTo(padLeft + plotW, gy);
        mcCtx.stroke();

        const gx = padLeft + (plotW / 5) * i;
        mcCtx.beginPath();
        mcCtx.moveTo(gx, padTop);
        mcCtx.lineTo(gx, padTop + plotH);
        mcCtx.stroke();
    }

    // Bounding Box [a, b] x [minY, maxY]
    if (mcMethod === 'hit_or_miss') {
        mcCtx.strokeStyle = '#facc15';
        mcCtx.lineWidth = 1.5;
        mcCtx.setLineDash([5, 4]);
        mcCtx.strokeRect(padLeft, padTop, plotW, plotH);
        mcCtx.setLineDash([]);
    }

    const def = MC_FUNCTIONS[mcFuncKey] || MC_FUNCTIONS['x2'];
    const zeroY = toPxY(0);

    // Shaded area under curve
    mcCtx.beginPath();
    mcCtx.moveTo(toPxX(mcA), zeroY);
    const steps = 180;
    for (let i = 0; i <= steps; i++) {
        const x = mcA + (i / steps) * (mcB - mcA);
        const y = def.f(x);
        if (Number.isFinite(y)) {
            mcCtx.lineTo(toPxX(x), toPxY(y));
        }
    }
    mcCtx.lineTo(toPxX(mcB), zeroY);
    mcCtx.closePath();

    const areaGrad = mcCtx.createLinearGradient(0, padTop, 0, padTop + plotH);
    areaGrad.addColorStop(0, isLight ? 'rgba(124, 58, 237, 0.22)' : 'rgba(168, 85, 247, 0.25)');
    areaGrad.addColorStop(1, isLight ? 'rgba(56, 189, 248, 0.08)' : 'rgba(56, 189, 248, 0.05)');
    mcCtx.fillStyle = areaGrad;
    mcCtx.fill();

    // Curve
    mcCtx.beginPath();
    let started = false;
    for (let i = 0; i <= steps; i++) {
        const x = mcA + (i / steps) * (mcB - mcA);
        const y = def.f(x);
        if (Number.isFinite(y)) {
            const px = toPxX(x);
            const py = toPxY(y);
            if (!started) { mcCtx.moveTo(px, py); started = true; }
            else mcCtx.lineTo(px, py);
        }
    }
    mcCtx.strokeStyle = '#38bdf8';
    mcCtx.lineWidth = 2.5;
    mcCtx.stroke();

    // Plotted points
    for (let i = 0; i < mcPointsList.length; i++) {
        const pt = mcPointsList[i];
        const px = toPxX(pt.x);
        const py = toPxY(pt.y);

        mcCtx.fillStyle = pt.inside ? '#10b981' : '#f43f5e';
        mcCtx.beginPath();
        mcCtx.arc(px, py, 2.2, 0, Math.PI * 2);
        mcCtx.fill();
    }

    // Axes
    mcCtx.strokeStyle = axisCol;
    mcCtx.lineWidth = 1.5;
    mcCtx.beginPath();
    mcCtx.moveTo(padLeft, padTop - 10);
    mcCtx.lineTo(padLeft, padTop + plotH);
    mcCtx.moveTo(padLeft, zeroY);
    mcCtx.lineTo(padLeft + plotW + 15, zeroY);
    mcCtx.stroke();

    // Ticks & Labels
    mcCtx.fillStyle = textCol;
    mcCtx.font = '11px sans-serif';
    mcCtx.textAlign = 'center';
    mcCtx.fillText(mcA.toFixed(2), toPxX(mcA), zeroY + 16);
    mcCtx.fillText(mcB.toFixed(2), toPxX(mcB), zeroY + 16);

    mcCtx.textAlign = 'right';
    mcCtx.fillText(mcMaxY.toFixed(2), padLeft - 8, padTop + 4);
    mcCtx.fillText(mcMinY.toFixed(2), padLeft - 8, padTop + plotH);
    if (mcMinY < 0 && mcMaxY > 0) {
        mcCtx.fillText('0', padLeft - 8, zeroY + 4);
    }

    mcCtx.textAlign = 'left';
    mcCtx.fillStyle = '#38bdf8';
    mcCtx.fillText(`y [${mcMinY.toFixed(1)}, ${mcMaxY.toFixed(1)}]`, padLeft + 6, padTop - 12);
    mcCtx.fillText('x', padLeft + plotW + 20, zeroY + 4);

    // Legend
    mcCtx.textAlign = 'left';
    mcCtx.font = '10px sans-serif';
    if (mcMethod === 'hit_or_miss') {
        mcCtx.fillStyle = '#10b981';
        mcCtx.fillRect(w - 180, padTop - 18, 10, 10);
        mcCtx.fillStyle = textCol;
        mcCtx.fillText('Hit (y ≤ f(x))', w - 165, padTop - 9);

        mcCtx.fillStyle = '#f43f5e';
        mcCtx.fillRect(w - 95, padTop - 18, 10, 10);
        mcCtx.fillStyle = textCol;
        mcCtx.fillText('Miss', w - 80, padTop - 9);
    } else {
        mcCtx.fillStyle = '#10b981';
        mcCtx.fillRect(w - 180, padTop - 18, 10, 10);
        mcCtx.fillStyle = textCol;
        mcCtx.fillText('Ընտրանք (Sample point)', w - 165, padTop - 9);
    }
}

function drawConvergenceCanvas() {
    if (!mcConvCanvas || !mcConvCtx) return;
    const w = mcConvCanvas.offsetWidth || 560;
    const h = mcConvCanvas.offsetHeight || 160;
    const dpr = window.devicePixelRatio || 1;

    if (mcConvCanvas.width !== w * dpr || mcConvCanvas.height !== h * dpr) {
        mcConvCanvas.width = w * dpr;
        mcConvCanvas.height = h * dpr;
        mcConvCtx.setTransform(1, 0, 0, 1, 0, 0);
        mcConvCtx.scale(dpr, dpr);
    }

    const isLight = document.documentElement.getAttribute('data-theme') === 'light';
    const bgCol = isLight ? '#ffffff' : '#080214';
    const axisCol = isLight ? '#94a3b8' : 'rgba(255, 255, 255, 0.2)';
    const textCol = isLight ? '#334155' : 'rgba(255, 255, 255, 0.7)';

    mcConvCtx.fillStyle = bgCol;
    mcConvCtx.fillRect(0, 0, w, h);

    const padLeft = 55;
    const padRight = 30;
    const padTop = 15;
    const padBottom = 30;
    const plotW = w - padLeft - padRight;
    const plotH = h - padTop - padBottom;

    const def = MC_FUNCTIONS[mcFuncKey] || MC_FUNCTIONS['x2'];
    const exact = def.exact(mcA, mcB);

    let minY = exact * 0.5;
    let maxY = exact * 1.5;
    if (exact === 0 || !Number.isFinite(exact)) { minY = -1; maxY = 1; }
    for (const pt of mcConvergenceHistory) {
        if (pt.est < minY) minY = pt.est * 0.9;
        if (pt.est > maxY) maxY = pt.est * 1.1;
    }
    if (maxY <= minY) maxY = minY + 1;

    const toPxX = (n) => padLeft + (n / mcTargetN) * plotW;
    const toPxY = (val) => padTop + plotH - ((val - minY) / (maxY - minY)) * plotH;

    mcConvCtx.strokeStyle = axisCol;
    mcConvCtx.lineWidth = 1;
    mcConvCtx.beginPath();
    mcConvCtx.moveTo(padLeft, padTop);
    mcConvCtx.lineTo(padLeft, padTop + plotH);
    mcConvCtx.lineTo(padLeft + plotW, padTop + plotH);
    mcConvCtx.stroke();

    if (Number.isFinite(exact)) {
        const exactPy = toPxY(exact);
        mcConvCtx.strokeStyle = '#facc15';
        mcConvCtx.lineWidth = 1.5;
        mcConvCtx.setLineDash([6, 4]);
        mcConvCtx.beginPath();
        mcConvCtx.moveTo(padLeft, exactPy);
        mcConvCtx.lineTo(padLeft + plotW, exactPy);
        mcConvCtx.stroke();
        mcConvCtx.setLineDash([]);
        mcConvCtx.fillStyle = textCol;
        mcConvCtx.font = '10px sans-serif';
        mcConvCtx.textAlign = 'right';
        mcConvCtx.fillText(exact.toFixed(3), padLeft - 6, exactPy + 4);
    }

    if (mcConvergenceHistory.length > 1) {
        mcConvCtx.beginPath();
        for (let i = 0; i < mcConvergenceHistory.length; i++) {
            const pt = mcConvergenceHistory[i];
            const px = toPxX(pt.n);
            const py = toPxY(pt.est);
            if (i === 0) mcConvCtx.moveTo(px, py);
            else mcConvCtx.lineTo(px, py);
        }
        mcConvCtx.strokeStyle = '#38bdf8';
        mcConvCtx.lineWidth = 2;
        mcConvCtx.stroke();
    }

    mcConvCtx.fillStyle = textCol;
    mcConvCtx.font = '10px sans-serif';
    mcConvCtx.textAlign = 'right';
    mcConvCtx.fillText(maxY.toFixed(2), padLeft - 6, padTop + 10);
    mcConvCtx.fillText(minY.toFixed(2), padLeft - 6, padTop + plotH);

    mcConvCtx.textAlign = 'center';
    mcConvCtx.fillText('0', padLeft, padTop + plotH + 16);
    mcConvCtx.fillText(mcTargetN.toLocaleString(), padLeft + plotW, padTop + plotH + 16);
    mcConvCtx.fillText('N (Trials)', padLeft + plotW / 2, padTop + plotH + 16);
}

window.mcChangeMethod = mcChangeMethod;


// Window resize listener to keep canvases crisp
window.addEventListener('resize', () => {
    if (currentSim === 'integral') {
        drawIntegralCanvas();
        drawConvergenceCanvas();
    }
});

// Global exports
window.initIntegralSim = initIntegralSim;
window.mcStart = mcStart;
window.mcPause = mcPause;
window.mcResume = mcResume;
window.mcReset = mcReset;
window.mcChangeFunction = mcChangeFunction;
window.mcUpdateBounds = mcUpdateBounds;
window.mcUpdateTarget = mcUpdateTarget;
window.updateIntegralStats = updateIntegralStats;



/* ============================================================
 * 1. GALTON BOARD (Bean Machine)
 * ============================================================ */
let galtonCanvas, galtonCtx;
let galtonPegs = [];
let galtonBalls = [];
let galtonBins = [];
let galtonRows = 12;
let galtonAnimating = false;
let galtonAnimId = null;
let galtonBallsToAdd = 0;
let galtonFrameCount = 0;

function initGalton() {
    galtonCanvas = document.getElementById('galton-canvas');
    if (!galtonCanvas) return;
    galtonCtx = galtonCanvas.getContext('2d');

    // Set canvas size
    galtonCanvas.width = galtonCanvas.offsetWidth || 600;
    galtonCanvas.height = galtonCanvas.offsetHeight || 500;

    galtonRows = parseInt(document.getElementById('galton-rows')?.value) || 12;
    galtonPegs = [];
    galtonBalls = [];
    galtonBins = new Array(galtonRows + 1).fill(0);
    galtonBallsToAdd = 0;
    galtonFrameCount = 0;

    // Build pegs
    const w = galtonCanvas.width;
    const h = galtonCanvas.height;
    const pegAreaTop = 60;
    const pegAreaBottom = h * 0.6;
    const pegSpacingY = (pegAreaBottom - pegAreaTop) / galtonRows;
    const pegSpacingX = (w - 80) / galtonRows;

    for (let row = 0; row < galtonRows; row++) {
        const numPegs = row + 1;
        const y = pegAreaTop + row * pegSpacingY;
        const startX = w / 2 - (numPegs - 1) * pegSpacingX / 2;
        for (let col = 0; col < numPegs; col++) {
            galtonPegs.push({
                x: startX + col * pegSpacingX,
                y: y,
                r: 3
            });
        }
    }

    drawGaltonFrame();
}

function dropGaltonBalls(count) {
    galtonBallsToAdd += count;
    if (!galtonAnimating) {
        galtonAnimating = true;
        galtonAnimate();
    }
}

function resetGalton() {
    if (galtonAnimId) cancelAnimationFrame(galtonAnimId);
    galtonAnimating = false;
    galtonBalls = [];
    galtonBins = new Array(galtonRows + 1).fill(0);
    galtonBallsToAdd = 0;
    galtonFrameCount = 0;
    drawGaltonFrame();
    updateGaltonStats();
}

function galtonAnimate() {
    const w = galtonCanvas.width;
    const h = galtonCanvas.height;

    galtonFrameCount++;

    // Add new balls (stagger them)
    if (galtonBallsToAdd > 0 && galtonFrameCount % 2 === 0) {
        const pegAreaTop = 60;
        galtonBalls.push({
            x: w / 2 + (Math.random() - 0.5) * 4,
            y: 15,
            vx: 0,
            vy: 1.5,
            r: 4,
            settled: false,
            bin: -1,
            color: `hsl(${270 + Math.random() * 60}, 80%, ${55 + Math.random() * 20}%)`
        });
        galtonBallsToAdd--;
    }

    // Physics step
    // Physics step
    const pegAreaBottom = h * 0.6;
    const binAreaTop = pegAreaBottom + 20;
    const gravity = 0.15;

    // Get controls (with safe defaults if elements don't exist)
    const speedMult = parseInt(document.getElementById('galton-speed')?.value || '3');
    const elasticity = parseFloat(document.getElementById('galton-bounce')?.value || '0.6');

    // Multi-step for speed
    const steps = speedMult || 3;

    for (let s = 0; s < steps; s++) {
        for (let i = galtonBalls.length - 1; i >= 0; i--) {
            const ball = galtonBalls[i];

            ball.vy += gravity;
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Peg collision
            for (const peg of galtonPegs) {
                const dx = ball.x - peg.x;
                const dy = ball.y - peg.y;
                const distSq = dx * dx + dy * dy;
                const minDist = ball.r + peg.r + 1;

                if (distSq < minDist * minDist) {
                    const dist = Math.sqrt(distSq);
                    const nx = dx / dist; // Normal X
                    const ny = dy / dist; // Normal Y

                    // Reflect velocity: v_new = (v - 2 * (v . n) * n) * elasticity
                    const dot = ball.vx * nx + ball.vy * ny;

                    // Add some random divergence for the "branching" effect
                    const randX = (Math.random() - 0.5) * 0.8;

                    ball.vx = (ball.vx - 2 * dot * nx) * elasticity + randX;
                    ball.vy = (ball.vy - 2 * dot * ny) * elasticity;

                    // Ensure the ball moves away from the peg to prevent sticking
                    const overlap = minDist - dist;
                    ball.x += nx * overlap;
                    ball.y += ny * overlap;

                    // Minimal vertical push to keep it moving down
                    if (ball.vy < 0.5) ball.vy += 0.5;
                }
            }

            // Wall bounds
            if (ball.x < ball.r) {
                ball.x = ball.r;
                ball.vx *= -0.6;
            }
            if (ball.x > w - ball.r) {
                ball.x = w - ball.r;
                ball.vx *= -0.6;
            }

            // Settle in bin (Count and remove)
            if (ball.y >= h - ball.r - 2) {
                const binWidth = w / (galtonRows + 1);
                let binIdx = Math.floor(ball.x / binWidth);
                binIdx = Math.max(0, Math.min(galtonRows, binIdx));

                galtonBins[binIdx]++;
                galtonBalls.splice(i, 1);
            }
        }
    }

    drawGaltonFrame();
    updateGaltonStats();

    // Continue animation if needed
    const stillActive = galtonBalls.length > 0 || galtonBallsToAdd > 0;
    if (stillActive) {
        galtonAnimId = requestAnimationFrame(galtonAnimate);
    } else {
        galtonAnimating = false;
    }
}

function drawGaltonFrame() {
    if (!galtonCtx) return;
    const ctx = galtonCtx;
    const w = galtonCanvas.width;
    const h = galtonCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Background
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    if (theme === 'light') {
        bg.addColorStop(0, '#f1f5f9');
        bg.addColorStop(1, '#ffffff');
    } else {
        bg.addColorStop(0, '#0a0514');
        bg.addColorStop(1, '#140a1e');
    }
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Bin separators
    const theme_border = theme === 'light' ? 'rgba(124, 58, 237, 0.15)' : 'rgba(157, 78, 221, 0.2)';
    ctx.strokeStyle = theme_border;
    ctx.lineWidth = 1;
    const binWidth = w / (galtonRows + 1); // Define binWidth here
    for (let i = 0; i <= galtonRows + 1; i++) {
        ctx.beginPath();
        ctx.moveTo(i * binWidth, h * 0.6 + 20);
        ctx.lineTo(i * binWidth, h);
        ctx.stroke();
    }

    // Draw Pegs
    const peg_color = theme === 'light' ? '#7c3aed' : '#a855f7';
    ctx.fillStyle = peg_color;
    for (const peg of galtonPegs) {
        ctx.beginPath();
        ctx.arc(peg.x, peg.y, peg.r, 0, Math.PI * 2);
        ctx.fill();
        if (theme === 'dark') {
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(168, 85, 247, 0.5)';
        }
    }
    ctx.shadowBlur = 0;

    // Draw Balls
    for (const ball of galtonBalls) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
        ctx.fillStyle = ball.color || '#9d4edd';
        ctx.fill();
        // Subtle glow
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r + 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(157, 78, 221, 0.15)';
        ctx.fill();
    }

    // Draw bin counts
    // Draw bin counts
    ctx.fillStyle = '#4cc9f0';
    ctx.font = 'bold 16px Inter, sans-serif'; // Larger, bolder font
    ctx.textAlign = 'center';
    for (let i = 0; i <= galtonRows; i++) {
        if (galtonBins[i] > 0) {
            // Draw count inside the bin area, slightly up from bottom
            ctx.fillText(galtonBins[i], i * binWidth + binWidth / 2, h - 8);
        }
    }

    // Funnel at top
    ctx.beginPath();
    ctx.moveTo(w / 2 - 40, 0);
    ctx.lineTo(w / 2 - 8, 45);
    ctx.lineTo(w / 2 + 8, 45);
    ctx.lineTo(w / 2 + 40, 0);
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw theoretical curve
    const settledCount = galtonBins.reduce((a, b) => a + b, 0);
    if (settledCount > 20) {
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(247, 37, 133, 0.5)';
        ctx.setLineDash([5, 5]);
        ctx.lineWidth = 3;

        const binWidth = w / (galtonRows + 1);
        const ballDiam = 9; // Approx
        const n = galtonRows;
        const p = 0.5;
        const mu = n * p;
        const sigma = Math.sqrt(n * p * (1 - p));

        for (let x = 0; x <= w; x++) {
            const binX = x / binWidth - 0.5;
            // Normal approximation to binomial
            const exponent = -Math.pow(binX - mu, 2) / (2 * Math.pow(sigma, 2));
            const y_theo = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(exponent);

            // Scale y_theo: total balls * y_theo * ball height
            const pixelY = h - 10 - (settledCount * y_theo * ballDiam * 1.5);

            if (x === 0) ctx.moveTo(x, pixelY);
            else ctx.lineTo(x, pixelY);
        }
        ctx.stroke();
        ctx.setLineDash([]);
    }
}

function updateGaltonStats() {
    const settledCount = galtonBins.reduce((a, b) => a + b, 0);
    const totalBalls = galtonBalls.length + settledCount; // Active + Settled

    // Advanced Stats Calculation
    let mean = 0, stdDev = 0;
    if (settledCount > 0) {
        // Calculate Mean (Average Bin Index)
        const sum = galtonBins.reduce((acc, count, idx) => acc + (idx * count), 0);
        mean = sum / settledCount;

        // Calculate StdDev
        const variance = galtonBins.reduce((acc, count, idx) => acc + (count * Math.pow(idx - mean, 2)), 0) / settledCount;
        stdDev = Math.sqrt(variance);
    }

    // Update UI
    const totalEl = document.getElementById('galton-total-balls');
    const finishedEl = document.getElementById('galton-finished-balls');
    const meanEl = document.getElementById('galton-mean');
    const stdEl = document.getElementById('galton-std');

    if (totalEl) totalEl.innerText = totalBalls;
    if (finishedEl) finishedEl.innerText = settledCount;
    if (meanEl) meanEl.innerText = mean.toFixed(2);
    if (stdEl) stdEl.innerText = stdDev.toFixed(2);

    // Legacy support (if old container exists)
    const statsEl = document.getElementById('galton-stats');
    if (statsEl) {
        statsEl.style.display = 'none'; // Hide legacy
    }
}

/* ============================================================
 * 2. MONTY HALL PROBLEM
 * ============================================================ */
let montyDoors = [0, 0, 0]; // 0 = goat, 1 = car
let montyState = 'choose'; // choose -> revealed -> result
let montyCarPosition = 0;
let montyPlayerChoice = -1;
let montyRevealedDoor = -1;
let montyStats = { switchWin: 0, switchLose: 0, stayWin: 0, stayLose: 0, total: 0 };

function initMonty() {
    montyStats = { switchWin: 0, switchLose: 0, stayWin: 0, stayLose: 0, total: 0 };
    montyNewGame();
    updateMontyStats();
}

function montyNewGame() {
    montyState = 'choose';
    montyCarPosition = Math.floor(Math.random() * 3);
    montyDoors = [0, 0, 0];
    montyDoors[montyCarPosition] = 1;
    montyPlayerChoice = -1;
    montyRevealedDoor = -1;
    renderMontyDoors();
    const ui = window.probabilityData.ui;
    const lang = currentLang || 'en';
    document.getElementById('monty-message').innerText = ui.monty_choose_door[lang];
}

function montyChooseDoor(doorIndex) {
    if (montyState !== 'choose') return;

    montyPlayerChoice = doorIndex;
    montyState = 'revealed';

    // Host reveals a goat door (not player's choice, not the car)
    const options = [0, 1, 2].filter(d => d !== montyPlayerChoice && d !== montyCarPosition);
    montyRevealedDoor = options[Math.floor(Math.random() * options.length)];

    renderMontyDoors();
    const ui = window.probabilityData.ui;
    const lang = currentLang || 'en';
    const msgTemplate = {
        hy: `Դուռ ${montyRevealedDoor + 1}-ի հետևում 🐐 է։ <br><strong>Ուզո՞ւմ եք ՓՈԽԵԼ, թե՞ ՄՆԱԼ։</strong>`,
        en: `Door ${montyRevealedDoor + 1} has a 🐐! <br><strong>Do you want to SWITCH or STAY?</strong>`,
        ru: `За дверью ${montyRevealedDoor + 1} 🐐! <br><strong>Желаете СМЕНИТЬ или ОСТАВИТЬ?</strong>`
    };
    document.getElementById('monty-message').innerHTML = msgTemplate[lang];
    document.getElementById('monty-actions').style.display = 'flex';
}

function montyDecision(shouldSwitch) {
    montyState = 'result';
    document.getElementById('monty-actions').style.display = 'none';

    let finalChoice = montyPlayerChoice;
    if (shouldSwitch) {
        finalChoice = [0, 1, 2].find(d => d !== montyPlayerChoice && d !== montyRevealedDoor);
    }

    const won = montyDoors[finalChoice] === 1;
    montyStats.total++;

    if (shouldSwitch) {
        if (won) montyStats.switchWin++;
        else montyStats.switchLose++;
    } else {
        if (won) montyStats.stayWin++;
        else montyStats.stayLose++;
    }

    montyPlayerChoice = finalChoice;
    renderMontyDoors(true);
    updateMontyStats();

    const lang = currentLang || 'en';
    const winMsg = {
        hy: `🎉 <strong style="color:#a855f7">Դուք ՀԱՂԹԵՑԻՔ 🚗-ն։</strong> (${shouldSwitch ? 'փոխելով' : 'մնալով'})`,
        en: `🎉 <strong style="color:#a855f7">You WON the 🚗!</strong> (You ${shouldSwitch ? 'switched' : 'stayed'})`,
        ru: `🎉 <strong style="color:#a855f7">Вы ВЫИГРАЛИ 🚗!</strong> (${shouldSwitch ? 'сменив' : 'оставив'})`
    };
    const loseMsg = {
        hy: `😔 <strong style="color:#f72585">Դուք ստացաք 🐐:</strong> (${shouldSwitch ? 'փոխելով' : 'մնալով'})`,
        en: `😔 <strong style="color:#f72585">You got a 🐐!</strong> (You ${shouldSwitch ? 'switched' : 'stayed'})`,
        ru: `😔 <strong style="color:#f72585">Вы получили 🐐!</strong> (${shouldSwitch ? 'сменив' : 'оставив'})`
    };

    document.getElementById('monty-message').innerHTML = won ? winMsg[lang] : loseMsg[lang];

    setTimeout(montyNewGame, 2000);
}

function montyAutoRun(count) {
    for (let i = 0; i < count; i++) {
        const car = Math.floor(Math.random() * 3);
        const pick = Math.floor(Math.random() * 3);
        const options = [0, 1, 2].filter(d => d !== pick && d !== car);
        const revealed = options[Math.floor(Math.random() * options.length)];
        const switched = [0, 1, 2].find(d => d !== pick && d !== revealed);

        montyStats.total++;
        if (switched === car) montyStats.switchWin++;
        else montyStats.switchLose++;
        if (pick === car) montyStats.stayWin++;
        else montyStats.stayLose++;
    }
    updateMontyStats();

    const lang = currentLang || 'en';
    const simMsg = {
        hy: `<strong>Սիմուլյացիա է արվել ${count} խաղ:</strong> Ստուգեք արդյունքները ստորև:`,
        en: `<strong>Simulated ${count} games!</strong> Check the results below.`,
        ru: `<strong>Просимулировано ${count} игр!</strong> Проверьте результаты ниже.`
    };
    document.getElementById('monty-message').innerHTML = simMsg[lang];
}

function renderMontyDoors(showAll) {
    const container = document.getElementById('monty-doors');
    if (!container) return;

    container.innerHTML = [0, 1, 2].map(i => {
        let cls = 'door';
        let content = `<span class="door-number">${i + 1}</span><span class="door-content">🚪</span>`;

        if (i === montyPlayerChoice) cls += ' selected';
        if (showAll || i === montyRevealedDoor) {
            cls += ' open';
            content = `<span class="door-number">${i + 1}</span><span class="door-content">${montyDoors[i] === 1 ? '🚗' : '🐐'}</span>`;
        }

        return `<div class="${cls}" onclick="montyChooseDoor(${i})">${content}</div>`;
    }).join('');
}

function updateMontyStats() {
    const switchTotal = montyStats.switchWin + montyStats.switchLose;
    const stayTotal = montyStats.stayWin + montyStats.stayLose;
    const switchPct = switchTotal > 0 ? ((montyStats.switchWin / switchTotal) * 100).toFixed(1) : '0.0';
    const stayPct = stayTotal > 0 ? ((montyStats.stayWin / stayTotal) * 100).toFixed(1) : '0.0';

    const statsEl = document.getElementById('monty-stats');
    if (statsEl) {
        const ui = window.probabilityData.ui;
        const lang = currentLang || 'en';
        statsEl.innerHTML = `
            <p>${ui.stat_total_games[lang]} <span>${montyStats.total}</span></p>
            <p>${ui.stat_switch_wins[lang]} <span>${montyStats.switchWin} / ${switchTotal}</span></p>
            <p>${ui.stat_stay_wins[lang]} <span>${montyStats.stayWin} / ${stayTotal}</span></p>
        `;
    }

    // Bar charts
    const switchBar = document.getElementById('monty-switch-bar');
    const stayBar = document.getElementById('monty-stay-bar');
    const switchLabel = document.getElementById('monty-switch-pct');
    const stayLabel = document.getElementById('monty-stay-pct');

    if (switchBar) switchBar.style.width = switchPct + '%';
    if (stayBar) stayBar.style.width = stayPct + '%';
    if (switchLabel) switchLabel.textContent = switchPct + '%';
    if (stayLabel) stayLabel.textContent = stayPct + '%';

    // Add comparison with theory
    if (montyStats.total > 50) {
        const lang = currentLang || 'en';
        const theoryAdvise = {
            hy: `<p style="margin-top:15px; font-size:0.9rem; color:#aaa; font-style:italic">
                    Տեսականորեն՝ Փոխելը հաղթում է <strong>66.7%</strong> դեպքերում, Մնալը՝ <strong>33.3%</strong>:
                 </p>`,
            en: `<p style="margin-top:15px; font-size:0.9rem; color:#aaa; font-style:italic">
                    Theoretically: Switching wins <strong>66.7%</strong>, Staying wins <strong>33.3%</strong>.
                 </p>`,
            ru: `<p style="margin-top:15px; font-size:0.9rem; color:#aaa; font-style:italic">
                    Теоретически: Смена дает <strong>66.7%</strong> побед, Оставляя — <strong>33.3%</strong>.
                 </p>`
        };
        const statsEl = document.getElementById('monty-stats');
        if (statsEl && !statsEl.innerHTML.includes('Theoretically')) {
            statsEl.innerHTML += theoryAdvise[lang];
        }
    }
}

function resetMonty() {
    montyStats = { switchWin: 0, switchLose: 0, stayWin: 0, stayLose: 0, total: 0 };
    montyNewGame();
    updateMontyStats();
}

/* ============================================================
 * 3. BUFFON'S NEEDLE
 * ============================================================ */
let buffonCanvas, buffonCtx;
let buffonGraphCanvas, buffonGraphCtx;
let buffonNeedles = [];
let buffonHistory = []; // Stores {n, pi} for graph
let buffonCrossing = 0;
let buffonTotal = 0;
let buffonLineSpacing = 60;
let buffonNeedleLength = 40;

function initBuffon() {
    buffonCanvas = document.getElementById('buffon-canvas');
    if (!buffonCanvas) return;
    buffonCtx = buffonCanvas.getContext('2d');

    buffonCanvas.width = buffonCanvas.offsetWidth || 600;
    buffonCanvas.height = buffonCanvas.offsetHeight || 400;

    buffonGraphCanvas = document.getElementById('buffon-graph');
    if (buffonGraphCanvas) {
        buffonGraphCtx = buffonGraphCanvas.getContext('2d');
        buffonGraphCanvas.width = buffonGraphCanvas.offsetWidth;
        buffonGraphCanvas.height = buffonGraphCanvas.offsetHeight;
    }

    resetBuffon();
}

function resetBuffon() {
    buffonNeedles = [];
    buffonHistory = [];
    buffonCrossing = 0;
    buffonTotal = 0;
    // Read from inputs
    const lInput = document.getElementById('buffon-length');
    const dInput = document.getElementById('buffon-spacing');
    if (lInput) buffonNeedleLength = parseInt(lInput.value) || 40;
    if (dInput) buffonLineSpacing = parseInt(dInput.value) || 60;

    drawBuffonFrame();
    updateBuffonStats();
    drawBuffonGraph(); // Clear graph
}

function dropNeedles(count) {
    const w = buffonCanvas.width;
    const h = buffonCanvas.height;

    // Ensure params are fresh
    const lInput = document.getElementById('buffon-length');
    const dInput = document.getElementById('buffon-spacing');
    if (lInput) buffonNeedleLength = parseInt(lInput.value) || 40;
    if (dInput) buffonLineSpacing = parseInt(dInput.value) || 60;

    const d = buffonLineSpacing;
    const l = buffonNeedleLength;

    for (let i = 0; i < count; i++) {
        const cx = Math.random() * w;
        const cy = Math.random() * h;
        const angle = Math.random() * Math.PI;

        const x1 = cx - (l / 2) * Math.cos(angle);
        const y1 = cy - (l / 2) * Math.sin(angle);
        const x2 = cx + (l / 2) * Math.cos(angle);
        const y2 = cy + (l / 2) * Math.sin(angle);

        // Check crossing
        const minY = Math.min(y1, y2);
        const maxY = Math.max(y1, y2);
        let crosses = false;

        for (let lineY = 0; lineY < h; lineY += d) {
            if (minY <= lineY && maxY >= lineY) {
                crosses = true;
                break;
            }
        }

        buffonNeedles.push({ x1, y1, x2, y2, crosses });
        buffonTotal++;
        if (crosses) buffonCrossing++;
    }

    drawBuffonFrame();
    updateBuffonStats();
}

function animateBuffonDrop(count) {
    let dropped = 0;
    const batchSize = Math.max(1, Math.floor(count / 50));

    function dropBatch() {
        const toDrop = Math.min(batchSize, count - dropped);
        dropNeedles(toDrop);
        dropped += toDrop;
        if (dropped < count) {
            requestAnimationFrame(dropBatch);
        }
    }
    dropBatch();
}

function drawBuffonFrame() {
    if (!buffonCtx) return;
    const ctx = buffonCtx;
    const w = buffonCanvas.width;
    const h = buffonCanvas.height;
    const d = buffonLineSpacing;

    // Background
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    ctx.fillStyle = theme === 'light' ? '#f8fafc' : '#0a0514';
    ctx.fillRect(0, 0, w, h);

    // Parallel lines
    ctx.strokeStyle = theme === 'light' ? 'rgba(124, 58, 237, 0.2)' : 'rgba(168, 85, 247, 0.3)';
    ctx.lineWidth = 1;
    for (let y = 0; y < h; y += d) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }

    // Draw needles (limit visual to last 2000)
    const startIdx = Math.max(0, buffonNeedles.length - 2000);
    for (let i = startIdx; i < buffonNeedles.length; i++) {
        const n = buffonNeedles[i];
        ctx.beginPath();
        ctx.moveTo(n.x1, n.y1);
        ctx.lineTo(n.x2, n.y2);
        ctx.strokeStyle = n.crosses
            ? 'rgba(247, 37, 133, 0.8)'
            : 'rgba(157, 78, 221, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
    }
}

function updateBuffonStats() {
    const piEstimate = buffonTotal > 0 && buffonCrossing > 0
        ? (2 * buffonNeedleLength * buffonTotal) / (buffonLineSpacing * buffonCrossing)
        : 0;

    const statsEl = document.getElementById('buffon-stats');
    if (statsEl) {
        const ui = window.probabilityData.ui;
        const lang = currentLang || 'en';
        statsEl.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:5px; font-size:0.9rem;">
                <div>${ui.stat_total_needles[lang]}: <span style="color:#fff">${buffonTotal}</span></div>
                <div>${ui.stat_crossing[lang]}: <span style="color:#fff">${buffonCrossing}</span></div>
                <div style="grid-column:span 2; font-size:1.1rem; margin-top:5px; padding-top:5px; border-top:1px solid rgba(255,255,255,0.1);">
                    π ≈ <span style="color:#ffd60a; font-weight:bold;">${piEstimate.toFixed(6)}</span>
                </div>
                <div style="grid-column:span 2; font-size:0.8rem; color:#aaa;">
                    Error: <span style="color:${Math.abs(piEstimate - Math.PI) < 0.01 ? '#4cc9f0' : '#f72585'}">
                        ${buffonTotal > 0 ? Math.abs(piEstimate - Math.PI).toFixed(6) : '—'}
                    </span>
                </div>
            </div>
        `;
    }

    // Add to history for graph (limit points to avoid slow down)
    if (buffonTotal > 0 && (buffonHistory.length === 0 || buffonTotal % 10 === 0 || buffonTotal < 100)) {
        buffonHistory.push({ n: buffonTotal, pi: piEstimate });
        if (buffonHistory.length > 200) buffonHistory.shift(); // Keep window
    }
    drawBuffonGraph();
}

function drawBuffonGraph() {
    if (!buffonGraphCtx || !buffonGraphCanvas) return;
    const ctx = buffonGraphCtx;
    const w = buffonGraphCanvas.width;
    const h = buffonGraphCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Target Line (Pi)
    const minY = 2.0;
    const maxY = 4.5;
    const rangeY = maxY - minY;

    const getY = (val) => h - ((val - minY) / rangeY) * h;

    // Draw Pi Line
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    ctx.strokeStyle = theme === 'light' ? '#7c3aed' : '#a855f7';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(0, getY(Math.PI));
    ctx.lineTo(w, getY(Math.PI));
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fillText('π', 5, getY(Math.PI) - 2);

    if (buffonHistory.length < 2) return;

    // Plot History
    ctx.beginPath();
    ctx.strokeStyle = '#ffd60a';
    ctx.lineWidth = 2;

    const maxN = buffonHistory[buffonHistory.length - 1].n;
    const minN = buffonHistory[0].n;
    const rangeN = maxN - minN || 1;

    buffonHistory.forEach((pt, i) => {
        const x = ((pt.n - minN) / rangeN) * w;
        const y = getY(pt.pi);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}

/* ============================================================
 * 4. COIN FLIP
 * ============================================================ */
let coinGraphCanvas, coinGraphCtx;
let coinHistory = [];
let coinTotal = 0;
let coinHeads = 0;
let coinTails = 0;
let coinRotation = 0;

function initCoin() {
    coinGraphCanvas = document.getElementById('coin-graph');
    if (coinGraphCanvas) {
        coinGraphCtx = coinGraphCanvas.getContext('2d');
        coinGraphCanvas.width = coinGraphCanvas.offsetWidth;
        coinGraphCanvas.height = coinGraphCanvas.offsetHeight;
    }
    resetCoin();
}

function resetCoin() {
    coinTotal = 0;
    coinHeads = 0;
    coinTails = 0;
    coinHistory = [];
    coinRotation = 0;

    const coinEl = document.getElementById('coin-element');
    if (coinEl) {
        coinEl.style.transition = 'none';
        coinEl.style.transform = `rotateX(0deg)`;
        setTimeout(() => coinEl.style.transition = 'transform 2s cubic-bezier(0.2, 0.8, 0.2, 1)', 50);
    }

    updateCoinStats();
    drawCoinGraph(); // Clear graph
}

function flipCoins(count) {
    let lastFlipHeads = true;

    // Calculate outcomes
    for (let i = 0; i < count; i++) {
        lastFlipHeads = Math.random() < 0.5;
        if (lastFlipHeads) coinHeads++;
        else coinTails++;
        coinTotal++;

        // Add to history
        if (coinTotal === 1 || coinTotal % 10 === 0 || coinTotal < 100 || count > 10) {
            coinHistory.push({ n: coinTotal, headsPct: coinHeads / coinTotal });
            if (coinHistory.length > 200) coinHistory.shift();
        }
    }

    // Animate the big CSS coin
    const coinEl = document.getElementById('coin-element');
    if (coinEl) {
        // Add multiple spins plus final face
        // Each full spin is 360deg. Let's do 5 spins (1800deg) overhead.
        // Heads is 0, 360, 720... Tails is 180, 540, 900...
        const spins = 5 * 360;
        const targetFace = lastFlipHeads ? 0 : 180;

        // Add the spins to the current rotation so it always goes forward
        coinRotation += spins;

        // Adjust final rotation to land on the correct face
        // We ensure the final rotation modulo 360 equals targetFace
        const currentMod = coinRotation % 360;
        let correction = targetFace - currentMod;

        if (correction < 0) correction += 360;

        coinRotation += correction;

        // If it's a huge batch, maybe we spin even more just for show
        if (count > 10) coinRotation += 360 * 3;

        coinEl.style.transform = `rotateX(${coinRotation}deg)`;
    }

    if (count === 1) {
        setTimeout(() => {
            updateCoinStats();
            drawCoinGraph();
        }, 2000);
    } else {
        updateCoinStats();
        drawCoinGraph();
    }
}

function animateCoinFlips(count) {
    if (count > 10) {
        // Just do it in one big batch for performance and visual simplicity
        flipCoins(count);
    } else {
        flipCoins(count);
    }
}


function updateCoinStats() {
    const statsEl = document.getElementById('coin-stats');
    if (!statsEl) return;

    const ui = window.probabilityData.ui;
    const lang = currentLang || 'en';

    const hPct = coinTotal > 0 ? (coinHeads / coinTotal * 100).toFixed(1) : '0.0';
    const tPct = coinTotal > 0 ? (coinTails / coinTotal * 100).toFixed(1) : '0.0';

    statsEl.innerHTML = `
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:5px; font-size:0.95rem; color:var(--text-primary);">
            <div>${ui.stat_total[lang]}: <span style="color:var(--text-primary); font-weight:bold;">${coinTotal}</span></div>
            <div></div> <!-- empty col padding -->
            <div><span style="color:var(--accent-gold); font-weight:bold;">${ui.stat_heads[lang]}:</span> <span style="font-weight:bold;">${coinHeads}</span> 
                 <span style="color:var(--text-muted); font-size:0.8rem;">(${hPct}%)</span></div>
            <div><span style="color:#f72585; font-weight:bold;">${ui.stat_tails[lang]}:</span> <span style="font-weight:bold;">${coinTails}</span> 
                 <span style="color:var(--text-muted); font-size:0.8rem;">(${tPct}%)</span></div>
        </div>
    `;
}

function drawCoinGraph() {
    if (!coinGraphCtx || !coinGraphCanvas) return;
    const ctx = coinGraphCtx;
    const w = coinGraphCanvas.width;
    const h = coinGraphCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Target Line (0.5)
    const targetY = h / 2;
    const minY = 0.0;
    const maxY = 1.0;
    const rangeY = maxY - minY;

    const getY = (val) => h - ((val - minY) / rangeY) * h;

    // Draw 0.5 Line
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    ctx.beginPath();
    ctx.moveTo(0, getY(0.5));
    ctx.lineTo(w, getY(0.5));
    ctx.strokeStyle = theme === 'light' ? '#7c3aed' : '#4cc9f0';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = theme === 'light' ? '#7c3aed' : '#4cc9f0';
    ctx.fillText('50%', 5, getY(0.5) - 2);

    if (coinHistory.length < 2) return;

    // Plot History
    ctx.beginPath();
    ctx.strokeStyle = theme === 'light' ? '#b45309' : '#ffd60a';
    ctx.lineWidth = 2;

    const maxN = coinHistory[coinHistory.length - 1].n;
    const minN = coinHistory[0].n;
    const rangeN = maxN - minN || 1;

    coinHistory.forEach((pt, i) => {
        const x = ((pt.n - minN) / rangeN) * w;
        const y = getY(pt.headsPct);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}

/* ============================================================
 * 5. DICE THROW (Law of Large Numbers)
 * ============================================================ */
let diceGraphCanvas, diceGraphCtx;
let diceHistory = [];
let diceTotal = 0;
let diceSum = 0;
let diceSquaredSum = 0;
let diceCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 1-12
let diceRotationX = 0;
let diceRotationY = 0;
let dice2RotationX = 0;
let dice2RotationY = 0;
let diceCount = 1; // 1 or 2 dice

function initDice() {
    diceGraphCanvas = document.getElementById('dice-graph');
    if (diceGraphCanvas) {
        diceGraphCtx = diceGraphCanvas.getContext('2d');
        diceGraphCanvas.width = diceGraphCanvas.offsetWidth;
        diceGraphCanvas.height = diceGraphCanvas.offsetHeight;
    }
    resetDice();
}

function resetDice() {
    diceTotal = 0;
    diceSum = 0;
    diceSquaredSum = 0;
    diceCounts = new Array(12).fill(0);
    diceHistory = [];
    diceRotationX = 0;
    diceRotationY = 0;
    dice2RotationX = 0;
    dice2RotationY = 0;

    const dice1 = document.getElementById('dice-element');
    const dice2 = document.getElementById('dice-element-2');

    [dice1, dice2].forEach(el => {
        if (el) {
            el.style.transition = 'none';
            el.style.transform = `rotateX(0deg) rotateY(0deg)`;
            setTimeout(() => el.style.transition = 'transform 1.5s cubic-bezier(0.2, 0.8, 0.3, 1)', 50);
        }
    });

    updateDiceStats();
    drawDiceGraph();
}

function setDiceCount(n) {
    diceCount = n;
    const d2Container = document.getElementById('dice-scene-2');
    if (d2Container) d2Container.style.display = (n === 2) ? 'block' : 'none';

    // Update active button state
    document.querySelectorAll('.dice-count-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.count) === n);
    });

    resetDice();
}

function rollDice(count) {
    let lastRoll1 = 1;
    let lastRoll2 = 1;

    for (let i = 0; i < count; i++) {
        const r1 = Math.floor(Math.random() * 6) + 1;
        const r2 = (diceCount === 2) ? Math.floor(Math.random() * 6) + 1 : 0;

        lastRoll1 = r1;
        lastRoll2 = r2;

        const total = r1 + r2;
        diceSum += total;
        diceSquaredSum += (total * total);
        diceCounts[total - 1]++;
        diceTotal++;

        // Add to history (sampling for performance)
        if (diceTotal === 1 || diceTotal % 10 === 0 || diceTotal < 100 || count > 10) {
            diceHistory.push({ n: diceTotal, mean: diceSum / diceTotal });
            if (diceHistory.length > 300) diceHistory.shift();
        }
    }

    // Animate 3D Dice
    const dice1 = document.getElementById('dice-element');
    const dice2 = document.getElementById('dice-element-2');

    const rotMap = {
        1: { x: 0, y: 0 },
        2: { x: -90, y: 0 },
        3: { x: 0, y: -90 },
        4: { x: 0, y: 90 },
        5: { x: 90, y: 0 },
        6: { x: 180, y: 0 }
    };

    if (dice1) {
        const target = rotMap[lastRoll1];
        diceRotationX += 1080 + target.x - (diceRotationX % 360);
        diceRotationY += 1080 + target.y - (diceRotationY % 360);
        dice1.style.transform = `rotateX(${diceRotationX}deg) rotateY(${diceRotationY}deg)`;
    }

    if (dice2 && diceCount === 2) {
        const target = rotMap[lastRoll2];
        dice2RotationX += 1080 + target.x - (dice2RotationX % 360);
        dice2RotationY += 1080 + target.y - (dice2RotationY % 360);
        dice2.style.transform = `rotateX(${dice2RotationX}deg) rotateY(${dice2RotationY}deg)`;
    }

    if (count === 1) {
        setTimeout(() => {
            updateDiceStats();
            drawDiceGraph();
        }, 1500);
    } else {
        updateDiceStats();
        drawDiceGraph();
    }
}

function updateDiceStats() {
    const totalEl = document.getElementById('dice-total');
    const meanEl = document.getElementById('dice-mean');
    const varEl = document.getElementById('dice-var');

    const mean = diceTotal > 0 ? diceSum / diceTotal : 0;
    const meanSq = diceTotal > 0 ? diceSquaredSum / diceTotal : 0;
    const variance = Math.max(0, meanSq - (mean * mean));

    if (totalEl) totalEl.innerText = diceTotal;
    if (meanEl) meanEl.innerText = mean.toFixed(3);
    if (varEl) varEl.innerText = variance.toFixed(3);

    // Update Frequency bars
    const freqContainer = document.getElementById('dice-frequencies');
    if (!freqContainer) return;

    let html = '';
    const start = (diceCount === 1) ? 1 : 2;
    const end = (diceCount === 1) ? 6 : 12;

    for (let i = start; i <= end; i++) {
        const count = diceCounts[i - 1];
        const pct = diceTotal > 0 ? (count / diceTotal) * 100 : 0;
        html += `
            <div class="result-row" style="font-size:0.8rem;">
                <span style="width:18px; font-weight:bold;">${i}</span>
                <div class="bar-bg" style="height:8px;"><div class="bar-fill" style="width:${pct}%; background:#4cc9f0"></div></div>
                <span style="width:40px; text-align:right;">${pct.toFixed(1)}%</span>
            </div>
        `;
    }
    freqContainer.innerHTML = html;
}

function drawDiceGraph() {
    if (!diceGraphCtx || !diceGraphCanvas) return;
    const ctx = diceGraphCtx;
    const w = diceGraphCanvas.width;
    const h = diceGraphCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // Expected Value Line
    const ev = (diceCount === 1) ? 3.5 : 7.0;
    const minY = (diceCount === 1) ? 1.0 : 2.0;
    const maxY = (diceCount === 1) ? 6.0 : 12.0;

    const rangeY = maxY - minY;
    const getY = (val) => h - ((val - minY) / rangeY) * h;

    // Line EV
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    ctx.beginPath();
    ctx.moveTo(0, getY(ev));
    ctx.lineTo(w, getY(ev));
    ctx.strokeStyle = '#ff7b00';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#ff7b00';
    ctx.font = '10px Inter';
    ctx.fillText(`EV: ${ev}`, 5, getY(ev) - 5);

    if (diceHistory.length < 2) return;

    // Plot History
    ctx.beginPath();
    ctx.strokeStyle = theme === 'light' ? '#4361ee' : '#4cc9f0';
    ctx.lineWidth = 2;

    const maxN = diceHistory[diceHistory.length - 1].n;
    const minN = diceHistory[0].n;
    const rangeN = maxN - minN || 1;

    diceHistory.forEach((pt, i) => {
        const x = ((pt.n - minN) / rangeN) * w;
        const y = getY(pt.mean);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    });
    ctx.stroke();
}
