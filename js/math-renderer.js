/* Process only requested containers, one job per frame, never the whole document. */
const pendingMath = new Map();
let mathFrameScheduled = false;
let mathRendering = false;

function queueMathTypeset(element) {
    if (!element || element.dataset?.mathRendered === 'true') return Promise.resolve();
    const promise = new Promise(resolve => {
        const waiters = pendingMath.get(element) || [];
        waiters.push(resolve);
        pendingMath.set(element, waiters);
    });
    scheduleMathFrame();
    return promise;
}

function scheduleMathFrame() {
    if (mathRendering || mathFrameScheduled || !pendingMath.size || !window.MathJax?.typesetPromise) return;
    mathFrameScheduled = true;
    requestAnimationFrame(flushMathFrame);
}

async function flushMathFrame() {
    mathFrameScheduled = false;
    if (mathRendering || !pendingMath.size) return;
    mathRendering = true;
    const [element, waiters] = pendingMath.entries().next().value;
    pendingMath.delete(element);
    try {
        await window.MathJax.startup?.promise;
        const page = element.closest('.page-section');
        if (element.isConnected && element.dataset?.mathRendered !== 'true' && (!page || page.classList.contains('active-section'))) {
            await window.MathJax.typesetPromise([element]);
            if (element.classList?.contains('theory-body') || element.classList?.contains('experiment-equation')) {
                element.dataset.mathRendered = 'true';
            }
        }
    } catch (error) {
        console.warn('Could not render mathematics in the requested section.', error);
    } finally {
        if (!element.isConnected) window.MathJax?.typesetClear?.([element]);
        waiters.forEach(resolve => resolve());
        mathRendering = false;
        scheduleMathFrame();
    }
}

function clearMathContainer(container) {
    if (!container) return;
    if (container.dataset) delete container.dataset.mathRendered;
    for (const [element, waiters] of pendingMath) {
        if (element === container || container.contains(element)) {
            pendingMath.delete(element);
            waiters.forEach(resolve => resolve());
        }
    }
    window.MathJax?.typesetClear?.([container]);
}

function typesetVisibleMath() {
    const active = document.querySelector('.page-section.active-section');
    if (!active) return;
    if (active.id === 'home') {
        queueMathTypeset(active.querySelector('.experiment-equation'));
    } else if (active.id === 'theory') {
        active.querySelectorAll('[data-theory-loaded="true"] .theory-body').forEach(queueMathTypeset);
    } else if (active.id === 'simulations') {
        const panel = document.getElementById('sim-' + currentSim);
        if (panel) queueMathTypeset(panel);
    } else {
        queueMathTypeset(active);
    }
}

document.getElementById('MathJax-script')?.addEventListener('load', () => {
    Promise.resolve(window.MathJax?.startup?.promise).then(() => {
        typesetVisibleMath();
        scheduleMathFrame();
    }).catch(error => console.warn('Mathematics renderer did not start.', error));
});
