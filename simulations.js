/* 
 * SIMULATIONS LOGIC 
 */

// --- GLOBAL STATE ---
let activeSim = 'galton'; // galton, monty, buffon
let animFrameId;

// --- GALTON BOARD ---
let galtonBalls = [];
let galtonBins = [];
const GALTON_ROWS = 12;
const PEG_RADIUS = 3;
const BALL_RADIUS = 4;

function initGalton() {
    const canvas = document.getElementById('galton-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    
    // Init Bins (buckets at bottom)
    galtonBins = new Array(GALTON_ROWS + 1).fill(0);
}

function startGalton() {
    if (activeSim !== 'galton') return;
    
    // Drop 500 balls one by one or in batches
    let count = 0;
    const interval = setInterval(() => {
        if (count >= 500) clearInterval(interval);
        spawnBall();
        count++;
    }, 10);
    
    loopGalton();
}

function spawnBall() {
    const canvas = document.getElementById('galton-canvas');
    const startX = canvas.width / 2;
    // Add randomness to start so they don't stack perfectly
    const jitter = (Math.random() - 0.5) * 2; 
    galtonBalls.push({
        x: startX + jitter,
        y: 20,
        vx: 0,
        vy: 0,
        active: true
    });
}

function loopGalton() {
    if (activeSim !== 'galton') return;

    const canvas = document.getElementById('galton-canvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Physics Constants
    const gravity = 0.2;
    const bounce = 0.6;
    const pegSpacing = w / (GALTON_ROWS + 5); 
    const pegStartY = 60;

    ctx.clearRect(0, 0, w, h);

    // Draw Pegs
    ctx.fillStyle = '#aaa';
    for (let r = 0; r < GALTON_ROWS; r++) {
        const cols = r + 1; // Triangle shape
        const rowY = pegStartY + r * 30;
        // Center the row
        const rowWidth = (cols - 1) * pegSpacing;
        const startX = (w - rowWidth) / 2;

        for (let c = 0; c < cols; c++) {
            const pegX = startX + c * pegSpacing;
            ctx.beginPath();
            ctx.arc(pegX, rowY, PEG_RADIUS, 0, Math.PI * 2);
            ctx.fill();
            
            // Interaction Check (Naive)
            galtonBalls.forEach(ball => {
                if (!ball.active) return;
                const dx = ball.x - pegX;
                const dy = ball.y - rowY;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if (dist < PEG_RADIUS + BALL_RADIUS) {
                    // Collision
                    // Ball hits peg, randomized deflection
                    ball.vy *= -0.5; // lose energy
                    ball.vx += (Math.random() - 0.5) * 4; // scatter
                    ball.y = rowY - (PEG_RADIUS + BALL_RADIUS) - 1; // push out
                }
            });
        }
    }

    // Update Balls
    ctx.fillStyle = '#f72585'; // Magenta
    galtonBalls.forEach(ball => {
        if (ball.active) {
            ball.vy += gravity;
            ball.x += ball.vx;
            ball.y += ball.vy;

            // Simple floor collision (the bins)
            const floorY = h - 100 - (galtonBins[getBinIndex(ball.x, w)] || 0) * (BALL_RADIUS * 2);

            if (ball.y >= floorY) {
               ball.active = false;
               ball.y = floorY;
               // Add to bin count
               const binIdx = getBinIndex(ball.x, w);
               if (binIdx >= 0 && binIdx < galtonBins.length) {
                   galtonBins[binIdx]++;
               }
            }
        }
        
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, BALL_RADIUS, 0, Math.PI * 2);
        ctx.fill();
    });

    // Draw Bins (Histogram)
    ctx.fillStyle = '#7b2cbf';
    const binWidth = pegSpacing; // Approx
    // Calculated based on peg layout logic
    // We just draw rectangles based on counts, centered
    const totalWidth = (GALTON_ROWS) * pegSpacing;
    const startX = (w - totalWidth) / 2; // Rough alignment
    
    // Instead of precise binning, let's just draw the balls piled up
    // Visual pileup is handled by `floorY` deduction above per ball
    
    animFrameId = requestAnimationFrame(loopGalton);
}

function getBinIndex(x, w) {
    // Rough estimate mapping x to bin index
    // Needs to match peg geometry
    const pegSpacing = w / (GALTON_ROWS + 5);
    const totalWidth = (GALTON_ROWS) * pegSpacing;
    const startX = (w - totalWidth) / 2;
    return Math.floor((x - startX + pegSpacing/2) / pegSpacing);
}

function resetGalton() {
    galtonBalls = [];
    galtonBins = new Array(GALTON_ROWS + 1).fill(0);
}


// --- MONTY HALL ---
let montyStats = { stay: 0, switch: 0, total: 0 };

function runMonty(trials) {
    let winsStay = 0;
    let winsSwitch = 0;

    for (let i = 0; i < trials; i++) {
        const prizeDoor = Math.floor(Math.random() * 3);
        const choice = Math.floor(Math.random() * 3);
        
        // Host opens a door that is NOT prize and NOT choice
        let openDoor;
        do {
            openDoor = Math.floor(Math.random() * 3);
        } while (openDoor === prizeDoor || openDoor === choice);

        // Result if Stay
        if (choice === prizeDoor) winsStay++;

        // Result if Switch (the remaining door)
        // Switch wins if original choice was WRONG
        if (choice !== prizeDoor) winsSwitch++;
    }

    // Update Stats
    const totalStay = montyStats.stay + winsStay; // wins are cumulative in this simplified view? 
    // Wait, let's just show stats for THIS run or cumulative? 
    // Let's reset for clarity or add. User probably wants to see convergence.
    // Let's just update the display based on this run to show the ratio clearly.
    
    const pStay = (winsStay / trials) * 100;
    const pSwitch = (winsSwitch / trials) * 100;

    // Animate Bars
    document.getElementById('bar-stay').style.width = `${pStay}%`;
    document.getElementById('text-stay').innerText = `${pStay.toFixed(1)}%`;
    
    document.getElementById('bar-switch').style.width = `${pSwitch}%`;
    document.getElementById('text-switch').innerText = `${pSwitch.toFixed(1)}%`;
}


// --- BUFFON'S NEEDLE ---
let buffonDrops = 0;
let buffonCrosses = 0;
const NEEDLE_LEN = 40;
const LINE_DIST = 40;

function dropNeedles() {
    if (activeSim !== 'buffon') return;
    
    const canvas = document.getElementById('buffon-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Draw Lines Background (only once ideally, but here in loop for simplicity)
    drawBuffonBg(ctx, w, h);

    // Drop 100 needles
    for(let i=0; i<100; i++) {
        const y = Math.random() * h;
        const x = Math.random() * w; // x doesn't matter for math, just visual
        const angle = Math.random() * Math.PI; // 0 to 180
        
        // Calc end points
        const y1 = y - (NEEDLE_LEN/2) * Math.sin(angle);
        const y2 = y + (NEEDLE_LEN/2) * Math.sin(angle);
        const x1 = x - (NEEDLE_LEN/2) * Math.cos(angle);
        const x2 = x + (NEEDLE_LEN/2) * Math.cos(angle);

        // Check Cross
        // Lines are at y = 0, LINE_DIST, 2*LINE_DIST...
        // Cross if floor(y1/D) != floor(y2/D)
        const line1 = Math.floor(y1 / LINE_DIST);
        const line2 = Math.floor(y2 / LINE_DIST);
        
        const isCross = line1 !== line2;
        
        buffonDrops++;
        if (isCross) buffonCrosses++;

        // Draw Needle
        ctx.beginPath();
        ctx.strokeStyle = isCross ? '#f72585' : '#888'; // Red if cross
        ctx.lineWidth = 2;
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    // Update Stats
    document.getElementById('needle-count').innerText = buffonDrops;
    document.getElementById('needle-cross').innerText = buffonCrosses;
    
    // PI ~ 2 * L * N / (D * K) -> if L=D, PI ~ 2 * N / K
    if (buffonCrosses > 0) {
        const pi = (2 * buffonDrops) / buffonCrosses;
        document.getElementById('pi-val').innerText = pi.toFixed(4);
    }
}

function drawBuffonBg(ctx, w, h) {
    // Only clear if first run? No, we want to see accumulation of needles?
    // If we clear, we lose previous needles. 
    // Let's NOT clear, just draw needles on top.
    // BUT we need lines visible.
    // Hack: Draw lines with semi-transparent background to fade old needles? 
    // Or just draw lines once. 
    // Let's assume the user wants to see the pile. We won't clear.
    // If it's the very first drop, draw lines.
    if (buffonDrops === 0) {
        ctx.fillStyle = '#222';
        ctx.fillRect(0,0,w,h);
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1;
        for(let y=0; y<h; y+=LINE_DIST) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(w, y);
            ctx.stroke();
        }
    }
}


// --- UTILS ---
function switchSim(sim) {
    activeSim = sim;
    
    // Hide all
    document.getElementById('sim-galton').style.display = 'none';
    document.getElementById('sim-monty').style.display = 'none';
    document.getElementById('sim-buffon').style.display = 'none';
    
    // Show one
    if (sim === 'galton') {
        document.getElementById('sim-galton').style.display = 'flex';
        initGalton();
    }
    else if (sim === 'monty') document.getElementById('sim-monty').style.display = 'flex';
    else if (sim === 'buffon') {
        document.getElementById('sim-buffon').style.display = 'flex';
        // Reset buffon canvas
        const c = document.getElementById('buffon-canvas');
        c.width = c.width; // clear
        buffonDrops = 0;
        buffonCrosses = 0;
        drawBuffonBg(c.getContext('2d'), c.width, c.height);
    }
    
    // Nav update
    document.querySelectorAll('.sim-tab').forEach(b => b.classList.remove('active'));
    // (In reality need to find the specific button, but simplified logic here)
}
