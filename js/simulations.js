/* 
 * ROBUST SIMULATIONS ENGINE
 * Optimized for performance and visual clarity.
 */

/* --- GLOBAL & INITIALIZATION --- */
let activeSimId = 'galton'; 
let animationFrameId;

document.addEventListener('DOMContentLoaded', () => {
    switchSim('galton'); // Start with Galton
});

function switchSim(simId) {
    activeSimId = simId;
    cancelAnimationFrame(animationFrameId);

    // Toggle UI Tabs
    document.querySelectorAll('.sim-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.sim-container').forEach(c => c.style.display = 'none');
    
    const container = document.getElementById(`sim-${simId}`);
    if (container) {
        container.style.display = 'flex';
        container.classList.add('fade-in-up');
        
        // Toggle description language visibility
        updateSimDescriptions();
    }

    // Init specific logic
    if (simId === 'galton') initGalton();
    else if (simId === 'monty') initMontyGame(); 
    else if (simId === 'buffon') initBuffon();
}

function updateSimDescriptions() {
    // Show correct language descriptions in simulations
    document.querySelectorAll('.desc-hy, .desc-en, .desc-ru').forEach(el => {
        el.style.display = 'none';
    });
    
    const activeLang = currentLang || 'hy';
    document.querySelectorAll(`.desc-${activeLang}`).forEach(el => {
        el.style.display = 'block';
    });
}


/* ----------------------------------------------------------------
 * 1. GALTON BOARD (Optimized Logic)
 * ---------------------------------------------------------------- */
const GALTON_ROWS = 12;
const BALL_R = 4;
let galtonBalls = [];
let galtonBins = [];
let galtonPegs = [];
let galtonFloorY = 0;

function initGalton() {
    const canvas = document.getElementById('galton-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Clear State
    galtonBalls = [];
    galtonBins = new Array(GALTON_ROWS + 1).fill(0);
    
    // Pre-calculate Peg Positions
    galtonPegs = [];
    const w = canvas.width;
    const startY = 50;
    const spacingX = w / (GALTON_ROWS + 4);
    const spacingY = 25;
    galtonFloorY = canvas.height - 95; // keep bottom area for histogram

    for (let r = 0; r < GALTON_ROWS; r++) {
        const cols = r + 1;
        const rowWidth = (cols - 1) * spacingX;
        const startX = (w - rowWidth) / 2;
        
        for (let c = 0; c < cols; c++) {
            galtonPegs.push({
                x: startX + c * spacingX,
                y: startY + r * spacingY
            });
        }
    }

    // Start Loop
    loopGalton();
}

function spawnGaltonBall() {
    const canvas = document.getElementById('galton-canvas');
    if (!canvas) return;
    const w = canvas.width;
    
    // Start at top center
    galtonBalls.push({
        x: w / 2,
        y: 20,
        vx: (Math.random() - 0.5) * 2, // slight jitter
        vy: 0,
        row: -1, // track logical progress through peg rows
        targetX: w / 2, // for smooth animation
        settled: false
    });
}

function updateGalton() {
    const canvas = document.getElementById('galton-canvas');
    const w = canvas.width;
    const h = canvas.height;
    const spacingX = w / (GALTON_ROWS + 4);
    const spacingY = 25;
    const startY = 50;
    const floorY = galtonFloorY || (h - 95);

    galtonBalls.forEach(ball => {
        if (ball.settled) return;

        // Gravity
        ball.vy += 0.5;
        ball.y += ball.vy;
        
        // Horizontal smoothing towards target
        ball.x += (ball.targetX - ball.x) * 0.1;

        // Peg Collision Logic (Simplified to "Steps")
        // Check if ball passed a row threshold
        const currentRow = Math.floor((ball.y - startY + 10) / spacingY);
        
        if (currentRow > ball.row && currentRow < GALTON_ROWS) {
            ball.row = currentRow;
            // Hit peg -> Random Decision Left or Right
            // Bounce up a bit to simulate collision
            ball.vy = -2; 
            // 50/50 Chance
            const dir = Math.random() < 0.5 ? -1 : 1;
            ball.targetX += dir * (spacingX / 2);
            ball.vx = dir; // slight push
        }

        // Floor / Bin Logic
        // Calculate Bin Height
        // Map x to bin index
        const binW = spacingX;
        // The pegs form a triangle. The bins are between the last row of pegs.
        // Last row width = (GALTON_ROWS-1)*spacingX
        // StartX of last row = (w - rowWidth)/2
        // We can just clamp x to find bin.
        
        const center = w / 2;
        // Relative to center, bin index 0 is far left? No.
        // Bin index ranges from 0 to GALTON_ROWS.
        // Center bin is index GALTON_ROWS/2.
        // x offset from center / (spacingX/2) roughly gives steps
        
        // Let's just use exact x position for settlement
        if (ball.y >= floorY - 10) {
             // Find closest bin bucket
             // Visual pile-up
             // Approximate logical bin index
             let binIdx = Math.round((ball.x - (w/2 - (GALTON_ROWS * spacingX)/2)) / spacingX);
             // Clamp
             if(binIdx < 0) binIdx = 0;
             if(binIdx > GALTON_ROWS) binIdx = GALTON_ROWS;
             
             // Stack height
             const stackHeight = galtonBins[binIdx] * (BALL_R * 2);
             const landY = floorY - stackHeight;
             
             if (ball.y >= landY) {
                 ball.y = landY;
                 ball.settled = true;
                 if (galtonBins[binIdx] !== undefined) galtonBins[binIdx]++;
             }
        }
    });

    // Cleanup balls that fell off screen (rare bug safety)
    if (galtonBalls.length > 800) galtonBalls.shift(); 
}

function drawGalton() {
    const canvas = document.getElementById('galton-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const floorY = galtonFloorY || (h - 95);

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,w,h);

    // Draw Pegs
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    galtonPegs.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw Balls
    galtonBalls.forEach(b => {
        ctx.fillStyle = b.settled ? '#7b2cbf' : '#f72585';
        ctx.beginPath();
        ctx.arc(b.x, b.y, BALL_R, 0, Math.PI * 2);
        ctx.fill();
    });
    
    // Draw Floor Line
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.beginPath();
    ctx.moveTo(0, floorY);
    ctx.lineTo(w, floorY);
    ctx.stroke();

    // Histogram area (bottom)
    const histTop = floorY + 10;
    const histH = h - histTop - 10;
    const bins = galtonBins;
    const max = Math.max(...bins, 1);
    const bw = w / (bins.length);

    // bars
    for (let i = 0; i < bins.length; i++) {
        const val = bins[i];
        const barH = (val / max) * (histH - 14);
        const x = i * bw;
        const y = h - 10 - barH;
        ctx.fillStyle = 'rgba(157, 78, 221, 0.45)';
        ctx.fillRect(x + 2, y, bw - 4, barH);
    }

    // overlay "normal-ish" curve (binomial approx) scaled to histogram
    const n = GALTON_ROWS;
    const p = 0.5;
    const mean = n * p;
    const varr = n * p * (1 - p);
    const sigma = Math.sqrt(varr);
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 214, 10, 0.9)';
    ctx.lineWidth = 2;
    for (let i = 0; i < bins.length; i++) {
        // normal pdf at integer i
        const x = i;
        const yVal = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((x - mean) / sigma, 2));
        // scale yVal to histogram max
        const scaled = (yVal / (1 / (sigma * Math.sqrt(2 * Math.PI)))) * (histH - 14);
        const px = (i + 0.5) * bw;
        const py = (h - 10) - scaled;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // labels
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.font = '12px sans-serif';
    ctx.fillText('Histogram', 10, histTop + 12);
}

function loopGalton() {
    if (activeSimId !== 'galton') return;
    updateGalton();
    drawGalton();
    animationFrameId = requestAnimationFrame(loopGalton);
}

/* ----------------------------------------------------------------
 * SIMULATION CONTROLS (WITH USER INPUT)
 * ---------------------------------------------------------------- */

/* ----------------------------------------------------------------
 * SIMULATION CONTROLS (WITH USER INPUT)
 * ---------------------------------------------------------------- */

let galtonInterval;

function startGalton() {
    if (galtonInterval) clearInterval(galtonInterval);

    // Get custom ball count
    const input = document.getElementById('galton-count');
    let count = input ? parseInt(input.value) : 500;
    if (isNaN(count) || count < 1) count = 1; // Allow 1 ball
    if (count > 5000) count = 5000; // Cap for performance

    // Spawn balls
    let spawned = 0;
    galtonInterval = setInterval(() => {
        if(activeSimId !== 'galton') { clearInterval(galtonInterval); return; }
        
        // Dynamic batch size for speed
        let batchSize = 1;
        if (count > 100) batchSize = 5;
        if (count > 1000) batchSize = 20;
        
        for(let i=0; i<batchSize; i++) {
            if (spawned >= count) break;
            spawnGaltonBall();
            spawned++;
        }

        if(spawned >= count) clearInterval(galtonInterval);
    }, 20);
}

function resetGalton() {
    if (galtonInterval) clearInterval(galtonInterval);
    const canvas = document.getElementById('galton-canvas');
    if(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0,0,canvas.width,canvas.height);
    }
    initGalton();
}

/* ----------------------------------------------------------------
 * 2. MONTY HALL (Interactive Game Logic)
 * ---------------------------------------------------------------- */
let montyState = {
    prizeDoor: 0,
    selectedDoor: -1,
    openedDoor: -1,
    phase: 'pick', // 'pick', 'reveal', 'final'
    stats: { stayWins: 0, switchWins: 0, total: 0 }
};

function initMontyGame() {
    montyState.prizeDoor = Math.floor(Math.random() * 3);
    montyState.selectedDoor = -1;
    montyState.openedDoor = -1;
    montyState.phase = 'pick';
    if(activeSimId === 'monty') renderMonty();
}

function selectDoor(doorIdx) {
    if (montyState.phase !== 'pick') return;
    
    montyState.selectedDoor = doorIdx;
    
    // Host opens a non-prize, non-selected door
    let openArr = [0, 1, 2].filter(d => d !== montyState.prizeDoor && d !== montyState.selectedDoor);
    montyState.openedDoor = openArr[Math.floor(Math.random() * openArr.length)];
    
    montyState.phase = 'reveal';
    renderMonty();
}

function finalizeMonty(stay) {
    if (montyState.phase !== 'reveal') return;

    const kept = montyState.selectedDoor;
    const switched = [0,1,2].find(d => d !== montyState.selectedDoor && d !== montyState.openedDoor);
    
    const finalChoice = stay ? kept : switched;
    const win = finalChoice === montyState.prizeDoor;

    montyState.phase = 'final';
    montyState.selectedDoor = finalChoice; // Update visual selection
    
    // Update Stats
    if (stay) {
        if (win) montyState.stats.stayWins++;
    } else {
        if (win) montyState.stats.switchWins++;
    }
    montyState.stats.total++;

    renderMonty();
    updateMontyStats();
}

function renderMonty() {
    const container = document.getElementById('doors-container');
    if (!container) return;

    let html = '';
    for(let i=0; i<3; i++) {
        let content = '🚪';
        let classes = 'door-box';
        let onclick = `selectDoor(${i})`;

        if (montyState.phase === 'reveal' && i === montyState.openedDoor) {
            classes += ' open';
            content = '🐐';
            onclick = '';
        } else if (montyState.phase === 'final') {
            classes += ' open';
            if (i === montyState.prizeDoor) content = '🚗'; // Car
            else content = '🐐'; // Goat
        }

        if (montyState.selectedDoor === i) {
            classes += ' selected';
            content += ' 👈';
        }

        html += `<div class="${classes}" onclick="${onclick}">
            <div class="door-content">${content}</div>
        </div>`;
    }

    if (montyState.phase === 'reveal') {
        html += `
        <div style="position: absolute; bottom: 20%; width: 100%; text-align: center; pointer-events: none;">
            <div style="pointer-events: auto; display: inline-block; background: rgba(0,0,0,0.8); padding: 15px; border-radius: 10px;">
                <p style="margin-bottom: 10px; color: #fff;">Host opened a Goat door!</p>
                <button class="glow-btn" onclick="finalizeMonty(true)">Stay</button>
                <button class="glow-btn secondary" onclick="finalizeMonty(false)">Switch</button>
            </div>
        </div>`;
    } else if (montyState.phase === 'final') {
        const win = montyState.selectedDoor === montyState.prizeDoor;
        html += `
        <div style="position: absolute; bottom: 20%; width: 100%; text-align: center;">
             <div style="display: inline-block; background: rgba(0,0,0,0.8); padding: 10px 20px; border-radius: 10px;">
                <h3 style="color: ${win ? '#4cc9f0' : '#f72585'}">${win ? 'YOU WON!' : 'YOU LOST!'}</h3>
                <button class="glow-btn" style="margin-top:5px; font-size:0.8rem;" onclick="initMontyGame()">Again</button>
             </div>
        </div>`;
    }

    container.innerHTML = html;
    container.style.position = 'relative';
}

function updateMontyStats() {
    const s = montyState.stats;
    const total = Math.max(s.total, 1);
    const stayPct = (s.stayWins / total) * 100;
    const switchPct = (s.switchWins / total) * 100;
    
    document.getElementById('text-stay').innerText = `${s.stayWins} (${stayPct.toFixed(1)}%)`;
    document.getElementById('text-switch').innerText = `${s.switchWins} (${switchPct.toFixed(1)}%)`;
    
    document.getElementById('bar-stay').style.width = `${stayPct}%`;
    document.getElementById('bar-switch').style.width = `${switchPct}%`;
}

function autoMontyWithInput() {
    const input = document.getElementById('monty-count');
    let runs = input ? parseInt(input.value) : 1000;
    if (isNaN(runs) || runs < 1) runs = 100;
    if (runs > 1000000) runs = 1000000;
    autoMonty(runs);
}
function autoMonty(runs) {
    let remaining = runs;
    const step = () => {
        if (activeSimId !== 'monty') return;
        const batch = Math.min(8000, remaining);
        for (let i = 0; i < batch; i++) {
            const prize = Math.floor(Math.random() * 3);
            const choice = Math.floor(Math.random() * 3);
            if (choice === prize) montyState.stats.stayWins++;
            else montyState.stats.switchWins++;
        }
        montyState.stats.total += batch;
        remaining -= batch;
        updateMontyStats();
        if (remaining > 0) {
            animationFrameId = requestAnimationFrame(step);
        }
    };
    step();
}

function resetMontyStats() {
    montyState.stats = { stayWins: 0, switchWins: 0, total: 0 };
    updateMontyStats();
}

/* ----------------------------------------------------------------
 * 3. BUFFON'S NEEDLE
 * ---------------------------------------------------------------- */
const NEEDLE_L = 40;
const LINE_gap = 40;
let buffonTotal = 0;
let buffonCross = 0;

function initBuffon() {
    const canvas = document.getElementById('buffon-canvas');
    if (!canvas) return;
    
    // Resize for high DPI or full width?
    // For now, assume fixed logic size but responsive CSS.
    // We should clear and redraw background immediately.
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    // Draw Background Lines Logic
    ctx.fillStyle = '#111';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1;
    for (let y = LINE_gap; y < canvas.height; y += LINE_gap) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
    }
    
    buffonTotal = 0;
    buffonCross = 0;
    document.getElementById('needle-count').innerText = "0";
    document.getElementById('needle-cross').innerText = "0";
    document.getElementById('pi-val').innerText = "-";
}

function dropNeedlesWithInput() {
    const input = document.getElementById('buffon-count');
    let needles = input ? parseInt(input.value) : 500;
    if (isNaN(needles) || needles < 1) needles = 10;
    
    const canvas = document.getElementById('buffon-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    // Ensure background is there (in case we didn't init properly)
    if (buffonTotal === 0) {
        ctx.fillStyle = '#111';
        ctx.fillRect(0,0,w,h);
        ctx.strokeStyle = '#666';
        ctx.lineWidth = 1;
        for (let y = LINE_gap; y < h; y += LINE_gap) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }

    for(let i=0; i<needles; i++) {
        const angle = Math.random() * Math.PI;
        // Keep within bounds visually so we see them
        const cy = Math.random() * (h - 20) + 10;
        const cx = Math.random() * (w - 20) + 10;
        
        const dy = (NEEDLE_L/2) * Math.sin(angle);
        const dx = (NEEDLE_L/2) * Math.cos(angle);
        
        const y1 = cy - dy;
        const y2 = cy + dy;
        const x1 = cx - dx;
        const x2 = cx + dx;
        
        const row1 = Math.floor(y1 / LINE_gap);
        const row2 = Math.floor(y2 / LINE_gap);
        const hit = row1 !== row2;
        
        buffonTotal++;
        if(hit) buffonCross++;
        
        ctx.beginPath();
        ctx.strokeStyle = hit ? '#f72585' : 'rgba(255,255,255,0.3)';
        ctx.lineWidth = 2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
    
    updateBuffonStats();
}

function updateBuffonStats() {
    document.getElementById('needle-count').innerText = buffonTotal;
    document.getElementById('needle-cross').innerText = buffonCross;
    if (buffonCross > 0) {
        // Buffon's needle (for L <= d):  P(hit) = (2L)/(π d)  =>  π ≈ (2 L N)/(d H)
        const pi = (2 * NEEDLE_L * buffonTotal) / (LINE_gap * buffonCross);
        document.getElementById('pi-val').innerText = pi.toFixed(5);
    }
}

function resetBuffon() {
    buffonTotal = 0;
    buffonCross = 0;
    initBuffon();
}
