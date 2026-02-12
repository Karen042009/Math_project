/*
 * ANIMATIONS.JS
 * Adds interactive visual effects:
 * - Mouse Parallax for Hero Section
 * - Cursor Glow Effect
 * - Particle Ambience
 */

document.addEventListener('DOMContentLoaded', () => {
    initCursorGlow();
    initParallax();
});

/* ----------------------------------------------------
   CURSOR GLOW
   ---------------------------------------------------- */
function initCursorGlow() {
    // Create the glow element if it doesn't exist
    let glow = document.querySelector('.cursor-glow');
    if (!glow) {
        glow = document.createElement('div');
        glow.classList.add('cursor-glow');
        document.body.appendChild(glow);
    }

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth follow loop
    function animateGlow() {
        // Linear interpolation (lerp) for smooth lag
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;

        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

/* ----------------------------------------------------
   HERO PARALLAX
   ---------------------------------------------------- */
function initParallax() {
    const hero = document.querySelector('.hero-section');
    const content = document.querySelector('.hero-content');
    const particles = document.querySelectorAll('.particle');
    
    if (!hero || !content) return;

    hero.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2; // -1 to 1
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        // Move Content slightly opposite to mouse
        content.style.transform = `translate(${x * -20}px, ${y * -20}px)`;

        // Move Particles at different speeds
        particles.forEach((p, i) => {
            const speed = (i + 1) * 10;
            p.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });

    hero.addEventListener('mouseleave', () => {
        content.style.transform = 'translate(0,0)';
        particles.forEach(p => p.style.transform = 'translate(0,0)');
    });
}
