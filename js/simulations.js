/*
 * SIMULATIONS.JS — Monte Carlo Interactive Simulations
 * 1. Galton Board (Bean Machine) — demonstrates CLT
 * 2. Monty Hall Problem — demonstrates probability paradox
 * 3. Buffon's Needle — estimates π
 */

/* ============================================================
 * SIMULATION SELECTOR
 * ============================================================ */
let currentSim = 'galton';

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

    if (simId === 'galton') initGalton();
    if (simId === 'buffon') initBuffon();
}

function updateSimDescriptions() {
    // Placeholder for language updates
}


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
        for (const ball of galtonBalls) {
            if (ball.settled) continue;

            ball.vy += gravity;
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Peg collision
            for (const peg of galtonPegs) {
                const dx = ball.x - peg.x;
                const dy = ball.y - peg.y;
                const distSq = dx*dx + dy*dy;
                const minDist = ball.r + peg.r + 1; // Tolerance

                if (distSq < minDist * minDist) {
                    // Normalize collision vector
                    const dist = Math.sqrt(distSq);
                    const nx = dx / dist;
                    const ny = dy / dist;

                    // Reflect velocity
                    // Simple logic: bounce away + randomness
                    // Bias randomness to left/right to ensure distribution
                    const randX = (Math.random() - 0.5) * 2.0; 
                    
                    ball.vx = nx * 2.0 * elasticity + randX;
                    ball.vy = ny * 2.0 * elasticity + 0.5; // slight downward push or dampening

                    // Correction to prevent sticking
                    const overlap = minDist - dist;
                    ball.x += nx * overlap;
                    ball.y += ny * overlap;
                }
            }

            // Wall bounds
            if (ball.x < ball.r) { 
                ball.x = ball.r; 
                ball.vx *= -0.6; // Wall damping
            }
            if (ball.x > w - ball.r) { 
                ball.x = w - ball.r; 
                ball.vx *= -0.6; 
            }

            // Settle in bin
            if (ball.y >= binAreaTop) {
                // Determine bin
                const binWidth = w / (galtonRows + 1);
                let binIdx = Math.floor(ball.x / binWidth);
                binIdx = Math.max(0, Math.min(galtonRows, binIdx));

                const binX = binIdx * binWidth + binWidth / 2;
                const binCount = galtonBins[binIdx];
                const ballDiam = ball.r * 2; 
                
                // Stack height target
                const targetY = h - 2 - (binCount * ballDiam) - ball.r;

                // Only settle if we are close to the target Y (or passed it)
                if (ball.y >= targetY) {
                    ball.y = targetY;
                    ball.x = binX + (Math.random() - 0.5) * 2; // Jitter to look natural
                    ball.vx = 0;
                    ball.vy = 0;
                    ball.settled = true;
                    ball.bin = binIdx;
                    galtonBins[binIdx]++;
                }
            }
        }
    }

    drawGaltonFrame();
    updateGaltonStats();

    // Continue animation if needed
    const stillActive = galtonBalls.some(b => !b.settled) || galtonBallsToAdd > 0;
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
    const bg = ctx.createLinearGradient(0, 0, 0, h);
    bg.addColorStop(0, '#0a0514');
    bg.addColorStop(1, '#140a1e');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, w, h);

    // Bin separators
    const binWidth = w / (galtonRows + 1);
    ctx.strokeStyle = 'rgba(157, 78, 221, 0.2)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= galtonRows + 1; i++) {
        ctx.beginPath();
        ctx.moveTo(i * binWidth, h * 0.6 + 20);
        ctx.lineTo(i * binWidth, h);
        ctx.stroke();
    }

    // Draw Pegs
    for (const peg of galtonPegs) {
        ctx.beginPath();
        ctx.arc(peg.x, peg.y, peg.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 214, 10, 0.7)';
        ctx.fill();
    }

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
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i <= galtonRows; i++) {
        if (galtonBins[i] > 0) {
            ctx.fillText(galtonBins[i], i * binWidth + binWidth / 2, h - 2);
        }
    }

    // Funnel at top
    ctx.beginPath();
    ctx.moveTo(w / 2 - 40, 0);
    ctx.lineTo(w / 2 - 8, 45);
    ctx.lineTo(w / 2 + 8, 45);
    ctx.lineTo(w / 2 + 40, 0);
    ctx.strokeStyle = 'rgba(76, 201, 240, 0.4)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw theoretical curve
    const settledCount = galtonBalls.filter(b => b.settled).length;
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
    const totalBalls = galtonBalls.length;
    const settledBalls = galtonBalls.filter(b => b.settled);
    const settledCount = settledBalls.length;

    // Advanced Stats Calculation
    let mean = 0, stdDev = 0;
    if (settledCount > 0) {
        // Calculate Mean (Average Bin Index)
        const sum = settledBalls.reduce((acc, b) => acc + b.bin, 0);
        mean = sum / settledCount;

        // Calculate StdDev
        const variance = settledBalls.reduce((acc, b) => acc + Math.pow(b.bin - mean, 2), 0) / settledCount;
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
    const lang = currentLang || 'hy';
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
    const lang = currentLang || 'hy';
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

    const lang = currentLang || 'hy';
    const winMsg = {
        hy: `🎉 <strong style="color:#4cc9f0">Դուք ՀԱՂԹԵՑԻՔ 🚗-ն։</strong> (${shouldSwitch ? 'փոխելով' : 'մնալով'})`,
        en: `🎉 <strong style="color:#4cc9f0">You WON the 🚗!</strong> (You ${shouldSwitch ? 'switched' : 'stayed'})`,
        ru: `🎉 <strong style="color:#4cc9f0">Вы ВЫИГРАЛИ 🚗!</strong> (${shouldSwitch ? 'сменив' : 'оставив'})`
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
    
    const lang = currentLang || 'hy';
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
        const lang = currentLang || 'hy';
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
        const lang = currentLang || 'hy';
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
    ctx.fillStyle = '#0a0514';
    ctx.fillRect(0, 0, w, h);

    // Parallel lines
    ctx.strokeStyle = 'rgba(76, 201, 240, 0.3)';
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
        const lang = currentLang || 'hy';
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
    const piY = h / 2; // Center Pi at middle roughly? No, let's scale it.
    // Allow range [2, 4] for Y
    const minY = 2.0;
    const maxY = 4.5;
    const rangeY = maxY - minY;
    
    const getY = (val) => h - ((val - minY) / rangeY) * h;

    // Draw Pi Line
    ctx.beginPath();
    ctx.moveTo(0, getY(Math.PI));
    ctx.lineTo(w, getY(Math.PI));
    ctx.strokeStyle = '#4cc9f0';
    ctx.setLineDash([5, 5]);
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = '#4cc9f0';
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
