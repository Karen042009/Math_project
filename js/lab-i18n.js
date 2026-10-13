/* Shared phrases for static controls and dynamic calculation explanations. */
const labOriginalText = new WeakMap();

function calcT(source) {
    const lang = typeof currentLang === 'undefined' ? 'hy' : currentLang;
    if (lang === 'hy') return String(source);
    const phrases = window.calcPhraseData || {};
    const keys = Object.keys(phrases).sort((a,b) => b.length-a.length);
    if (!keys.length) return String(source);
    // One pass prevents translating a substring of an already translated phrase.
    const pattern = new RegExp(keys.map(s => s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')).join('|'),'g');
    return String(source).replace(pattern, text => phrases[text][lang] ?? text)
        .replace(/(^|[\s>\]])մ(?=[\s<).]|$)/g, '$1' + (lang === 'ru' ? 'м' : 'm'));
}

function renderLabMarkup(target, source) {
    if (typeof clearMathContainer === 'function') clearMathContainer(target);
    target._labSource = String(source);
    target.setAttribute?.('data-calc-output','');
    target.innerHTML = calcT(source);
}

function refreshLabLanguage() {
    document.querySelectorAll('[data-calc-output]').forEach(el => {
        if (typeof clearMathContainer === 'function') clearMathContainer(el);
        el.innerHTML = calcT(el._labSource);
    });
    const lab = document.getElementById('lab');
    if (!lab) return;
    const walker = document.createTreeWalker(lab, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
        if (node.parentElement.closest('[data-i18n], [data-calc-output], mjx-container, script, style')) continue;
        if (!labOriginalText.has(node)) labOriginalText.set(node,node.textContent);
        node.textContent = calcT(labOriginalText.get(node));
    }
    const mode = ['pos','vel','acc'].find(m => document.getElementById(`btn-motion-mode-${m}`)?.classList.contains('active'));
    if (mode) switchMotionMode(mode);
}
