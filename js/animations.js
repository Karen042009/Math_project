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
        glowX += (mouseX - glowX) * 0.08;
        glowY += (mouseY - glowY) * 0.08;

        glow.style.left = `${glowX}px`;
        glow.style.top = `${glowY}px`;

        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

/* ----------------------------------------------------
   HERO FLASHLIGHT AFFECT
   ---------------------------------------------------- */
function initParallax() {
    const hero = document.querySelector('.hero-section');
    const title = document.querySelector('.hero-title');
    
    if (!hero || !title) return;

    hero.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to the title element for precise gradient control
        const rect = title.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Update CSS variables for the gradient center
        title.style.setProperty('--cursor-x', `${x}px`);
        title.style.setProperty('--cursor-y', `${y}px`);
    });
}
