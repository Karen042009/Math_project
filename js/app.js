/* 
 * MAIN APPLICATION LOGIC
 * ProbSpace Platform: Complete, Trilingual, Connected Probability & Calculus System
 */

const THEORY_ALIASES = {
    // Probability Aliases
    'history-origins': 'prob-history-origins',
    'history-classic-era': 'prob-history-origins',
    'theory-intro': 'prob-random-experiment-sample-space',
    'theory-interpretations': 'prob-classical-definition',
    'theory-events-intuitive': 'prob-random-experiment-sample-space',
    'theory-axioms': 'prob-axioms-complements',
    'theory-classical-prob': 'prob-classical-definition',
    'theory-multiplication': 'prob-multiplication-independence',
    'theory-addition': 'prob-addition-inclusion-exclusion',
    'theory-conditional-prob': 'prob-conditional-probability',
    'theory-bayes': 'prob-total-probability-bayes',
    'theory-permutations': 'prob-combinatorics-permutations',
    'theory-arrangements': 'prob-combinatorics-permutations',
    'theory-combinations': 'prob-combinatorics-permutations',
    'theory-binomial': 'prob-distributions-binomial-poisson-normal',
    'theory-bernoulli': 'prob-distributions-binomial-poisson-normal',
    'theory-poisson': 'prob-distributions-binomial-poisson-normal',
    'theory-normal': 'prob-distributions-binomial-poisson-normal',
    'theory-geometric-prob': 'prob-geometric-probability',
    'theory-rv-discrete-continuous': 'prob-random-variables-discrete-continuous',
    'theory-rv-pdf': 'prob-random-variables-discrete-continuous',
    'theory-rv-props': 'prob-expectation-variance-stddev',
    'theory-chebyshev': 'prob-lln-central-limit-theorem',
    'theory-monty-hall': 'prob-simulation-explanations',
    'theory-birthday-paradox': 'prob-combinatorics-permutations',

    // Calculus Aliases
    'history-modern': 'history-monte-carlo',
    'history-calculus': 'history-calculus',
    'definite-vs-indefinite': 'antiderivative-indefinite-integral',
    'monte-carlo-sample-mean': 'monte-carlo-sample-mean-sampling',
    'prob-simulations-lln': 'prob-lln-central-limit-theorem',
    'platform-simulations-guide': 'prob-simulation-explanations',
    'algebra-modular-foundations': 'algebra-modular-foundations'
};

let currentLang = 'hy';
let currentTheoryTrack = 'probability';
let currentPracticeTrack = 'probability';
let currentPracticeFilter = 'all';
let currentPracticeTopic = 'all';
let revealObserver = null;
const theorySections = new Map();

const PROGRESS_KEY = 'probSpaceProgressV3';
const GENERATED_KEY = 'probSpaceGeneratedV3';
const THEME_KEY = 'probSpaceTheme';
let allProblems = [];

document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const savedLang = localStorage.getItem('probSpaceLang');
    if (savedLang) currentLang = savedLang;

    const savedTheoryTrack = localStorage.getItem('probSpaceTheoryTrack');
    if (savedTheoryTrack && ['probability', 'integral', 'supplementary'].includes(savedTheoryTrack)) {
        currentTheoryTrack = savedTheoryTrack;
    }

    const savedPracticeTrack = localStorage.getItem('probSpacePracticeTrack');
    if (savedPracticeTrack && ['probability', 'integral'].includes(savedPracticeTrack)) {
        currentPracticeTrack = savedPracticeTrack;
    }

    setLanguage(currentLang);

    if (typeof updateVisualizer === 'function') updateVisualizer();
    if (typeof drawGraph === 'function') drawGraph();

    if (typeof initIntegralSim === 'function') initIntegralSim();
    if (typeof initGalton === 'function') initGalton();
    if (typeof initMonty === 'function') initMonty();
    if (typeof initBuffon === 'function') initBuffon();

    handleInitialHashRoute();
    window.addEventListener('hashchange', handleInitialHashRoute);

    const nav = document.getElementById('main-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });
    }
});

/* --- THEME MANAGEMENT --- */
function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
}

/* --- I18N & LANGUAGE --- */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('probSpaceLang', lang);
    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.lang-btn[onclick*="${lang}"]`).forEach(b => b.classList.add('active'));

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.probabilityData && window.probabilityData.ui && window.probabilityData.ui[key]) {
            const translated = window.probabilityData.ui[key][lang] || window.probabilityData.ui[key]['hy'] || window.probabilityData.ui[key]['en'];
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translated;
            } else {
                if (translated.includes('<')) el.innerHTML = translated;
                else el.innerText = translated;
            }
        }
    });

    const drafts = Array.from(document.querySelectorAll('.problem-input')).map(el => [el.id,el.value]);
    initTheory();
    initProblems();
    for (const [id,value] of drafts) { const input = document.getElementById(id); if (input) input.value = value; }
    initTheoryScrollReveal();
    if (typeof refreshLabLanguage === 'function') refreshLabLanguage();

    if (typeof updateSimDescriptions === 'function') updateSimDescriptions();
    if (typeof updateMontyStats === 'function') updateMontyStats();
    if (typeof updateGaltonStats === 'function') updateGaltonStats();
    if (typeof updateBuffonStats === 'function') updateBuffonStats();
    if (typeof updateIntegralStats === 'function') updateIntegralStats();

    if (typeof typesetVisibleMath === 'function') typesetVisibleMath();
}

/* --- PAGE NAVIGATION --- */
function showPage(pageId) {
    document.body.classList.toggle('reading-theory', pageId === 'theory');
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active-section', 'page-enter');
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active-section', 'page-enter');
        setTimeout(() => target.classList.remove('page-enter'), 500);
    }

    window.scrollTo({ top: 0, behavior: pageId === 'theory' ? 'instant' : 'smooth' });

    document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-target') === pageId || btn.onclick?.toString().includes(pageId)) {
            btn.classList.add('active');
        }
    });

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    }

    if (pageId === 'simulations') {
        if (typeof initIntegralSim === 'function') initIntegralSim();
        if (typeof initGalton === 'function') initGalton();
        if (typeof initMonty === 'function') initMonty();
        if (typeof initBuffon === 'function') initBuffon();
    }
    if (pageId === 'lab') {
        if (typeof updateVisualizer === 'function') updateVisualizer();
        if (typeof drawGraph === 'function') drawGraph();
    }
    if (pageId === 'practice') {
        applyPracticeFilters();
        renderPracticeStats();
    }
    if (pageId === 'theory') initTheoryScrollReveal();
    if (typeof typesetVisibleMath === 'function') typesetVisibleMath();
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (!menu) return;
    const content = menu.querySelector('.mobile-menu-content');
    if (menu.style.display === 'flex') {
        if (content) content.style.animation = 'slideIn 0.3s reverse forwards';
        setTimeout(() => { menu.style.display = 'none'; }, 200);
    } else {
        menu.style.display = 'flex';
        if (content) content.style.animation = 'slideIn 0.3s forwards';
    }
}

/* ----------------------------------------------------
   THEORY TRACK SWITCHING & RENDERING
   ---------------------------------------------------- */
function switchTheoryTrack(track) {
    if (!['probability', 'integral', 'supplementary'].includes(track)) return;
    currentTheoryTrack = track;
    localStorage.setItem('probSpaceTheoryTrack', track);

    // Update Track Switcher Buttons
    ['probability', 'integral', 'supplementary'].forEach(t => {
        const btn = document.getElementById({probability:'theory-tab-prob',integral:'theory-tab-calc',supplementary:'theory-tab-supp'}[t]);
        if (btn) btn.classList.toggle('active', t === track);
    });

    initTheory();
    initTheoryScrollReveal();
}

function initTheory() {
    const navContainer = document.getElementById('theory-nav');
    const contentContainer = document.getElementById('theory-dynamic-render');
    if (!window.probabilityData || !window.probabilityData.theoryTracks) return;

    // Select active track chapters
    const chapters = window.probabilityData.theoryTracks[currentTheoryTrack] || window.probabilityData.theoryTracks.probability || [];

    // Update track buttons active state
    ['probability', 'integral', 'supplementary'].forEach(t => {
        const btn = document.getElementById({probability:'theory-tab-prob',integral:'theory-tab-calc',supplementary:'theory-tab-supp'}[t]);
        if (btn) btn.classList.toggle('active', t === currentTheoryTrack);
    });

    const renderKey = `${currentTheoryTrack}:${currentLang}`;
    if (contentContainer?.dataset.theoryKey === renderKey) return;
    revealObserver?.disconnect();
    theorySections.clear();
    if (typeof clearMathContainer === 'function') clearMathContainer(contentContainer);

    let navHTML = '';
    let contentHTML = '';

    chapters.forEach((section, index) => {
        const title = section.title[currentLang] || section.title['hy'] || section.title['en'];

        // Sidebar Item
        navHTML += `
            <div class="accordion-item">
                <button class="accordion-header ${index === 0 ? 'active' : ''}" onclick="toggleAccordion(this)">
                    <span style="flex:1; padding-right:10px; line-height:1.4;">${title}</span>
                    <i class="fas fa-chevron-down" style="flex-shrink:0;"></i>
                </button>
                <div class="accordion-body" style="${index === 0 ? 'display:block;' : 'display:none;'}">
                    ${section.subsections.map(sub => `
                        <a href="#${sub.id}" onclick="scrollToTheory('${sub.id}'); return false;">
                            ${sub.title[currentLang] || sub.title['hy'] || sub.title['en']}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;

        section.subsections.forEach(sub => theorySections.set(sub.id, sub));

        // Headings and anchors are cheap; defer rich text and formulas until needed.
        contentHTML += `
            <div class="theory-block" id="theory-block-${index}">
                <h2>${title}</h2>
                ${section.subsections.map(sub => `
                    <div id="${sub.id}" class="theory-subsection reveal">
                        <h3>${sub.title[currentLang] || sub.title['hy'] || sub.title['en']}</h3>
                        <div class="theory-body" aria-busy="true"></div>
                    </div>
                `).join('')}
            </div>
        `;
    });

    if (navContainer) navContainer.innerHTML = navHTML;
    if (contentContainer) {
        contentContainer.innerHTML = contentHTML;
        contentContainer.dataset.theoryKey = renderKey;
        initTheoryScrollReveal();
    }
}

function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    if (!body) return;
    const isActive = body.style.display === 'block';

    document.querySelectorAll('.accordion-body').forEach(el => {
        el.style.display = 'none';
        if (el.previousElementSibling && el.previousElementSibling.classList.contains('accordion-header')) {
            el.previousElementSibling.classList.remove('active');
        }
    });

    if (!isActive) {
        body.style.display = 'block';
        btn.classList.add('active');
    } else {
        body.style.display = 'none';
        btn.classList.remove('active');
    }
}

function findTrackBySectionId(targetId) {
    if (!window.probabilityData?.theoryTracks) return 'probability';
    const tracks = ['probability', 'integral', 'supplementary'];
    for (const tr of tracks) {
        const chapters = window.probabilityData.theoryTracks[tr] || [];
        for (const ch of chapters) {
            if ((ch.subsections || []).some(s => s.id === targetId)) {
                return tr;
            }
        }
    }
    return null;
}

function scrollToTheory(id) {
    showPage('theory');

    const targetId = (typeof THEORY_ALIASES !== 'undefined' && THEORY_ALIASES[id]) || id;

    // Detect which track owns this subsection
    const targetTrack = findTrackBySectionId(targetId) || findTrackBySectionId(id);
    if (targetTrack && targetTrack !== currentTheoryTrack) {
        switchTheoryTrack(targetTrack);
    }

    // Open matching accordion in TOC
    const links = document.querySelectorAll('.accordion-body a');
    links.forEach(a => {
        const href = a.getAttribute('href');
        if (href === '#' + targetId || href === '#' + id) {
            const body = a.closest('.accordion-body');
            if (body) {
                body.style.display = 'block';
                if (body.previousElementSibling && body.previousElementSibling.classList.contains('accordion-header')) {
                    body.previousElementSibling.classList.add('active');
                }
            }
        }
    });

    // Close mobile TOC if open
    if (window.innerWidth <= 900) {
        const theoryNav = document.getElementById('theory-nav');
        if (theoryNav) {
            theoryNav.style.display = 'none';
            const btn = document.querySelector('.mobile-toc-btn');
            if (btn) btn.classList.remove('active');
        }
    }

    const target = document.getElementById(targetId) || document.getElementById(id);
    target?.scrollIntoView({block: 'start', behavior: 'instant'});
    const ready = hydrateTheorySection(target);
    Promise.resolve(ready).then(() => {
        // A smooth journey would mount intermediate sections and move the destination.
        // Jump after typesetting so the selected heading stays below the fixed header.
        if (!target?.isConnected || !document.getElementById('theory').classList.contains('active-section')) return;
        target.scrollIntoView({block: 'start', behavior: 'instant'});
        target.classList.add('theory-highlight');
        setTimeout(() => target.classList.remove('theory-highlight'), 2500);
    });
}

/* ----------------------------------------------------
   PRACTICE SYSTEM & PROGRESS MIGRATION
   ---------------------------------------------------- */
function loadProgress() {
    try {
        const rawV2 = localStorage.getItem(PROGRESS_KEY);
        if (rawV2) {
            const parsed = JSON.parse(rawV2);
            return {
                attempts: parsed.attempts && typeof parsed.attempts === 'object' ? parsed.attempts : {},
                solved: parsed.solved && typeof parsed.solved === 'object' ? parsed.solved : {}
            };
        }

        // Older versions reused IDs for different questions. Keep them archived,
        // but never assign their solved flags to this version's exercises.
        return { attempts: {}, solved: {} };
    } catch {
        return { attempts: {}, solved: {} };
    }
}

function saveProgress(p) {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
    } catch { }
}

function renderPracticeStats() {
    const box = document.getElementById('practice-stats');
    if (!box || !window.probabilityData) return;
    const prog = loadProgress();
    const trackProblems = allProblems.filter(p => (p.track || 'probability') === currentPracticeTrack);
    const total = trackProblems.length;
    const solvedCount = trackProblems.filter(p => !!prog.solved[String(p.id)]).length;
    const attemptsTotal = trackProblems.reduce((sum, p) => sum + (parseInt(prog.attempts[String(p.id)], 10) || 0), 0);

    const ui = window.probabilityData.ui || {};
    const lang = currentLang || 'hy';
    const lblSolved = ui.stat_solved?.[lang] || 'Solved:';
    const lblAttempts = ui.stat_attempts?.[lang] || 'Attempts:';
    const lblTotal = ui.stat_total?.[lang] || 'Total:';

    box.innerHTML = `
      <div class="stat"><div class="label">${lblSolved}</div><div class="value">${solvedCount}/${total}</div></div>
      <div class="stat"><div class="label">${lblAttempts}</div><div class="value">${attemptsTotal}</div></div>
      <div class="stat"><div class="label">${lblTotal}</div><div class="value">${total}</div></div>
    `;
}

function switchPracticeTrack(track) {
    if (!['probability', 'integral'].includes(track)) return;
    currentPracticeTrack = track;
    localStorage.setItem('probSpacePracticeTrack', track);

    // Update Practice Track Buttons
    document.getElementById('practice-tab-prob')?.classList.toggle('active', track === 'probability');
    document.getElementById('practice-tab-calc')?.classList.toggle('active', track === 'integral');

    // Update Topic Select options
    populatePracticeTopicFilter();

    currentPracticeTopic = 'all';
    const sel = document.getElementById('practice-topic-filter');
    if (sel) sel.value = 'all';

    applyPracticeFilters();
}

function populatePracticeTopicFilter() {
    const sel = document.getElementById('practice-topic-filter');
    if (!sel) return;

    const lang = currentLang || 'hy';
    let options = [];

    if (currentPracticeTrack === 'probability') {
        options = [
            { val: 'all', text: { hy: 'Բոլոր թեմաները', en: 'All Topics', ru: 'Все темы' } },
            { val: 'basic', text: { hy: 'Հիմնական հավանականություն', en: 'Basic Probability', ru: 'Базовая вероятность' } },
            { val: 'combinatorics', text: { hy: 'Կոմբինատորիկա', en: 'Combinatorics', ru: 'Комбинаторика' } },
            { val: 'conditional', text: { hy: 'Պայմանական հավանականություն', en: 'Conditional Probability', ru: 'Условная вероятность' } },
            { val: 'bayes', text: { hy: 'Բայեսի բանաձև', en: "Bayes' Theorem", ru: 'Формула Байеса' } },
            { val: 'distributions', text: { hy: 'Բաշխումներ (Բինոմ, Պուասոն, Նորմալ)', en: 'Distributions', ru: 'Распределения' } },
            { val: 'geometric', text: { hy: 'Երկրաչափական հավանականություն', en: 'Geometric Probability', ru: 'Геометрическая вероятность' } },
            { val: 'lln', text: { hy: 'Մեծ թվերի օրենք', en: 'Law of Large Numbers', ru: 'Закон больших чисел' } }
        ];
    } else {
        options = [
            { val: 'all', text: { hy: 'Բոլոր թեմաները', en: 'All Topics', ru: 'Все темы' } },
            { val: 'derivative', text: { hy: 'Ածանցյալ և շոշափող', en: 'Derivative & Tangent', ru: 'Производная и касательная' } },
            { val: 'antiderivative', text: { hy: 'Նախնական և անորոշ ինտեգրալ', en: 'Antiderivative', ru: 'Первообразная' } },
            { val: 'definite', text: { hy: 'Որոշյալ ինտեգրալ (Նյուտոն-Լայբնից)', en: 'Definite Integral', ru: 'Определенный интеграл' } },
            { val: 'area', text: { hy: 'Մակերես կորի տակ և կորերի միջև', en: 'Area under & between curves', ru: 'Площадь под кривой' } },
            { val: 'volume', text: { hy: 'Պտտման մարմինների ծավալ', en: 'Volume of Revolution', ru: 'Объем тел вращения' } },
            { val: 'kinematics', text: { hy: 'Կինեմատիկա (Տեղաշարժ և ճանապարհ)', en: 'Kinematics & Motion', ru: 'Кинематика и путь' } },
            { val: 'numerical', text: { hy: 'Թվային և Մոնտե Կառլո ինտեգրում', en: 'Numerical & Monte Carlo', ru: 'Численное интегрирование' } }
        ];
    }

    sel.innerHTML = options.map(o => `
        <option value="${o.val}">${o.text[lang] || o.text['hy'] || o.text['en']}</option>
    `).join('');
    sel.value = currentPracticeTopic;
}

function onPracticeTopicChange(val) {
    currentPracticeTopic = val || 'all';
    applyPracticeFilters();
}

function initProblems() {
    if (!window.probabilityData) return;

    const staticProbs = window.probabilityData.problems || [];
    if (!window.probabilityData.generatedProblems && window.probabilityData.generateBatch) {
        let saved = null;
        try { saved = JSON.parse(localStorage.getItem(GENERATED_KEY)); } catch {}
        const valid = Array.isArray(saved) && saved.length > 0 && saved.every(p =>
            typeof p.id === 'string' && ['probability','integral'].includes(p.track) && p.question && p.answer != null
        ) && new Set(saved.map(p => p.id)).size === saved.length;
        window.probabilityData.generatedProblems = valid ? saved : window.probabilityData.generateBatch(50);
        try { localStorage.setItem(GENERATED_KEY, JSON.stringify(window.probabilityData.generatedProblems)); } catch {}
    }
    const genProbs = window.probabilityData.generatedProblems || [];
    allProblems = [...staticProbs, ...genProbs];
    document.getElementById('practice-tab-prob')?.classList.toggle('active', currentPracticeTrack === 'probability');
    document.getElementById('practice-tab-calc')?.classList.toggle('active', currentPracticeTrack === 'integral');

    populatePracticeTopicFilter();

    const filterBtn = document.querySelector(`.filter-btn[data-filter="${currentPracticeFilter}"]`);
    filterProblems(currentPracticeFilter, filterBtn);
}

function filterProblems(level, btnEl) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    currentPracticeFilter = level || 'all';
    applyPracticeFilters();
}

function applyPracticeFilters() {
    const prog = loadProgress();

    const filtered = allProblems.filter(p => {
        // 1. Track Filter
        const pTrack = p.track || 'probability';
        if (pTrack !== currentPracticeTrack) return false;

        // 2. Topic Filter
        if (currentPracticeTopic !== 'all' && p.topic !== currentPracticeTopic) {
            return false;
        }

        // 3. Status & Difficulty Filter
        const isSolved = !!prog.solved[String(p.id)];
        if (currentPracticeFilter === 'all') {
            return !isSolved;
        } else if (currentPracticeFilter === 'solved') {
            return isSolved;
        } else {
            return p.difficulty === currentPracticeFilter && !isSolved;
        }
    });

    renderProblems(filtered);
    renderPracticeStats();
}

function renderProblems(problems) {
    const grid = document.getElementById('problems-grid');
    if (!grid) return;
    const ui = window.probabilityData.ui || {};
    const prog = loadProgress();
    const lang = currentLang || 'hy';

    if (!problems.length) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted); background: var(--bg-panel); border-radius: 12px; border: 1px solid var(--glass-border);">
                <i class="fas fa-inbox" style="font-size: 2.2rem; color: var(--accent-gold); margin-bottom: 12px; display: block;"></i>
                <p style="font-size: 1.05rem; margin: 0;">${lang === 'hy' ? 'Ընտրված զտիչներով խնդիրներ չկան։' : (lang === 'ru' ? 'Задачи с выбранными фильтрами не найдены.' : 'No problems match the selected filters.')}</p>
            </div>
        `;
        return;
    }

    if (typeof clearMathContainer === 'function') clearMathContainer(grid);
    grid.innerHTML = problems.map(prob => {
        const qText = prob.question[lang] || prob.question['hy'] || prob.question['en'];
        const solved = !!prog.solved[String(prob.id)];
        const inputId = `input-${prob.id}`;

        return `
        <div class="problem-card ${solved ? 'problem-solved' : ''}" data-id="${prob.id}">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <span class="problem-tag tag-${prob.difficulty}">
                    ${ui['filter_' + prob.difficulty]?.[lang] || prob.difficulty}
                </span>
                <span style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">
                    ${prob.topic || ''}
                </span>
            </div>
            <p style="margin: 0 0 14px; line-height: 1.6; color: var(--text-primary); font-size: 0.96rem;">${qText}</p>
            <input type="text" class="problem-input" placeholder="${lang === 'hy' ? 'Մուտքագրեք պատասխանը...' : (lang === 'ru' ? 'Введите ответ...' : 'Enter your answer...')}" id="${inputId}" ${solved ? 'disabled' : ''}>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top: 10px;">
                <button class="check-btn" onclick="checkAnswer('${prob.id}')" ${solved ? 'disabled' : ''}>
                    ${ui.btn_check?.[lang] || "Ստուգել"}
                </button>
                <button class="secondary-btn" style="padding:10px; font-size:0.9rem;" onclick="showProblemHint('${prob.id}')" ${solved ? 'disabled' : ''}>
                    <i class="fas fa-lightbulb"></i> ${ui.btn_hint?.[lang] || "Հուշում"}
                </button>
            </div>
        </div>
        `;
    }).join('');

    if (window.MathJax && window.MathJax.typesetPromise) {
        if (document.getElementById('practice')?.classList.contains('active-section')) queueMathTypeset(grid);
    }
}

function checkAnswer(id) {
    const problem = allProblems.find(p => String(p.id) === String(id));
    if (!problem) return;

    const inputEl = document.getElementById(`input-${id}`);
    const userVal = inputEl ? inputEl.value.trim() : '';

    let isCorrect = false;
    if (problem.checkFn) {
        isCorrect = problem.checkFn(userVal, problem.answer);
    } else {
        isCorrect = compareAnswers(userVal, problem.answer);
    }

    const prog = loadProgress();
    const key = String(id);
    prog.attempts[key] = (parseInt(prog.attempts[key], 10) || 0) + 1;
    if (isCorrect) prog.solved[key] = true;
    saveProgress(prog);

    renderPracticeStats();
    applyPracticeFilters();

    const attemptsCount = prog.attempts[key];
    showModal(isCorrect, problem, attemptsCount);
}

function showProblemHint(id) {
    const problem = allProblems.find(p => String(p.id) === String(id));
    if (!problem) return;

    const ui = window.probabilityData.ui || {};
    const lang = currentLang || 'hy';
    const modal = document.getElementById('feedback-modal');
    if (!modal) return;
    modal.style.display = 'flex';

    document.getElementById('modal-title').innerText = ui.modal_hint_label?.[lang] || "Հուշում";
    document.getElementById('modal-title').style.color = 'var(--accent-gold)';

    const hintText = problem.related_theory_hint?.[lang] || problem.related_theory_hint?.['hy'] || problem.related_theory_hint?.['en'] || "...";

    document.getElementById('modal-msg').innerHTML = `
        <div style="margin-top:10px; padding:18px; background:var(--neon-purple-dim); border-left:4px solid var(--neon-purple); border-radius:10px; font-size:1rem; border:1px solid var(--glass-border);">
            <p style="line-height:1.6; color:var(--text-primary); margin: 0;">${hintText}</p>
        </div>
    `;

    const btn = document.getElementById('modal-action-btn');
    if (btn) {
        btn.style.display = 'inline-block';
        btn.innerText = ui.btn_continue?.[lang] || "Շարունակել";
        btn.onclick = closeModal;
    }

    if (window.MathJax && window.MathJax.typesetPromise) {
        queueMathTypeset(modal);
    }
}

function normalizeAnswerString(s) {
    return String(s || '')
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/,/g, '.');
}

function tryEvalToNumber(expr) {
    const s = normalizeAnswerString(expr);
    if (!s) return { ok: false };

    // Direct fraction
    const frac = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (frac) {
        const a = parseFloat(frac[1]);
        const b = parseFloat(frac[2]);
        if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) return { ok: true, value: a / b };
    }

    // Try MathEvaluator parser (no eval / no Function)
    try {
        if (window.MathEvaluator) {
            const ast = window.MathEvaluator.parse(s);
            const v = window.MathEvaluator.evalAst(ast);
            if (Number.isFinite(v)) return { ok: true, value: v };
        }
    } catch {}

    if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/.test(s)) {
        const num = Number(s);
        if (Number.isFinite(num)) return { ok: true, value: num };
    }
    return { ok: false };
}

function compareAnswers(user, expected) {
    const u = normalizeAnswerString(user);
    const e = normalizeAnswerString(expected);
    if (!u || !e) return false;
    if (u === e) return true;

    // Check algebraic expression equality (e.g. x^3/3 vs (1/3)*x^3)
    if (/[xX]/.test(e) && window.MathEvaluator) {
        try {
            const astU = window.MathEvaluator.parse(u);
            const astE = window.MathEvaluator.parse(e);
            let matches = true;
            for (const sampleX of [-2.7, -1.3, 0.37, 0.7, 1.4, 2.3, 3.19]) {
                const valU = window.MathEvaluator.evalAst(astU, { x: sampleX });
                const valE = window.MathEvaluator.evalAst(astE, { x: sampleX });
                if (!Number.isFinite(valU) || !Number.isFinite(valE) || Math.abs(valU - valE) > 1e-7) {
                    matches = false;
                    break;
                }
            }
            if (matches) return true;
        } catch {}
    }

    // Numeric tolerance comparison (accepts fractions, pi, decimals)
    const uNum = tryEvalToNumber(u);
    const eNum = tryEvalToNumber(e);
    if (uNum.ok && eNum.ok) {
        const diff = Math.abs(uNum.value - eNum.value);
        // Whole-number answers are exact. Decimal keys may be rounded in the lesson.
        const decimal = e.match(/^[+-]?\d+\.(\d+)$/);
        const rounding = decimal && decimal[1].length >= 3 ? 0.5 * 10 ** -decimal[1].length : 0;
        const relTol = Math.max(1e-8, Math.abs(eNum.value) * 1e-7, rounding);
        return diff <= relTol;
    }

    return false;
}

function showModal(isCorrect, problem, attempts = 0) {
    const modal = document.getElementById('feedback-modal');
    if (!modal) return;
    const ui = window.probabilityData.ui || {};
    const lang = currentLang || 'hy';

    modal.style.display = 'flex';

    if (isCorrect) {
        document.getElementById('modal-title').innerText = ui.modal_correct?.[lang] || "Ճիշտ է!";
        document.getElementById('modal-title').style.color = '#06d6a0';
        document.getElementById('modal-msg').innerHTML = `
            <div style="text-align:center; padding:10px 0;">
                <div style="font-size:3rem; margin-bottom:10px;">🎉</div>
                <p style="font-size:1.1rem; color: var(--text-primary);">${ui.modal_correct_msg?.[lang] || "Հիանալի է, ճիշտ պատասխան!"}</p>
            </div>
        `;

        const btn = document.getElementById('modal-action-btn');
        if (btn) {
            btn.style.display = 'inline-block';
            btn.innerText = ui.btn_continue?.[lang] || "Շարունակել";
            btn.onclick = closeModal;
        }
    } else {
        document.getElementById('modal-title').innerText = ui.modal_incorrect?.[lang] || "Ոչ ճիշտ";
        document.getElementById('modal-title').style.color = 'var(--accent-pink)';

        let feedbackHtml = '';

        if (attempts >= 3) {
            const titlePrefix = lang === 'hy' ? "Խնդրի ամբողջական լուծումը" : (lang === 'ru' ? "Полное решение" : "Full Solution");
            document.getElementById('modal-title').innerText = `${titlePrefix} (${attempts} փորձ)`;
            document.getElementById('modal-title').style.color = 'var(--accent-gold)';

            const solution = problem.related_theory_solution?.[lang] || problem.related_theory_solution?.['hy'] || problem.related_theory_solution?.['en'] || "";

            feedbackHtml += `
                <div style="margin-top:10px; padding:18px; background:var(--neon-purple-dim); border-left:4px solid var(--neon-purple); border-radius:10px; font-size:0.95rem; border:1px solid var(--glass-border);">
                    <div style="color:var(--accent-gold); font-weight:bold; margin-bottom:8px;">
                        <i class="fas fa-lightbulb"></i> Քայլային լուծում․
                    </div>
                    ${solution ? `<div style="line-height:1.6; color:var(--text-primary); margin-bottom:12px;">${solution}</div>` : ''}
                    <div style="padding:8px 12px; background:var(--bg-input); border-radius:6px; font-family:monospace; display:inline-block;">
                        Ճիշտ պատասխան՝ <strong style="color:var(--accent-pink);">${problem.answer}</strong>
                    </div>
                </div>
            `;
        } else if (attempts === 2) {
            const hint = problem.related_theory_hint?.[lang] || problem.related_theory_hint?.['hy'] || problem.related_theory_hint?.['en'] || "";
            feedbackHtml += `
                <div style="margin-top:10px; padding:16px; background:var(--neon-purple-dim); border-left:4px solid var(--accent-gold); border-radius:10px;">
                    <div style="color:var(--accent-gold); font-weight:bold; margin-bottom:6px;">💡 Հուշում և բանաձև․</div>
                    <p style="margin:0; line-height:1.6; color:var(--text-primary);">${hint}</p>
                </div>
            `;
        } else {
            feedbackHtml += `
                <p style="line-height:1.6; color:var(--text-primary);">${ui.modal_incorrect_msg?.[lang] || "Պատասխանը ճիշտ չէ։"}</p>
                <p style="font-size:0.9rem; color:var(--text-muted); margin-top:8px;">Փորձեք ևս մեկ անգամ կամ օգտվեք «Հուշում» կոճակից։</p>
            `;
        }

        document.getElementById('modal-msg').innerHTML = feedbackHtml;

        const btn = document.getElementById('modal-action-btn');
        if (btn) {
            if (problem.related_theory_id) {
                btn.style.display = 'inline-block';
                btn.innerHTML = `<i class="fas fa-book-open" style="margin-right:6px;"></i>${ui.btn_goto_theory?.[lang] || "Անցնել տեսությանը"}`;
                btn.onclick = function () {
                    closeModal();
                    scrollToTheory(problem.related_theory_id);
                };
            } else {
                btn.style.display = 'inline-block';
                btn.innerText = ui.btn_continue?.[lang] || "Շարունակել";
                btn.onclick = closeModal;
            }
        }
    }

    if (window.MathJax && window.MathJax.typesetPromise) {
        queueMathTypeset(modal);
    }
}

function closeModal() {
    const modal = document.getElementById('feedback-modal');
    if (modal) modal.style.display = 'none';
}

const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) closeModalBtn.onclick = closeModal;

window.onclick = function (event) {
    const modal = document.getElementById('feedback-modal');
    if (event.target === modal) closeModal();
};

function confirmResetProgress() {
    const msg = {
        hy: "Վստա՞հ եք, որ ուզում եք ջնջել ողջ առաջադիմությունը։",
        en: "Are you sure you want to reset all progress?",
        ru: "Вы уверены, что хотите сбросить весь прогресс?"
    };
    if (confirm(msg[currentLang] || msg['hy'])) {
        resetProgress();
    }
}

function resetProgress() {
    localStorage.removeItem(PROGRESS_KEY);
    initProblems();
    renderPracticeStats();
    alert(currentLang === 'hy' ? 'Առաջադիմությունը զրոյացվեց։' : (currentLang === 'ru' ? 'Прогресс сброшен.' : 'Progress reset successfully.'));
}

function handleInitialHashRoute() {
    const rawHash = (location.hash || '').replace(/^#/, '').trim();
    if (!rawHash) return;
    const hash = (typeof THEORY_ALIASES !== 'undefined' && THEORY_ALIASES[rawHash]) || rawHash;

    const el = document.getElementById(hash) || document.getElementById(rawHash);
    if (el) {
        if (el.classList && el.classList.contains('page-section')) {
            showPage(rawHash);
            return;
        }
        scrollToTheory(rawHash);
        return;
    }

    if (findTrackBySectionId(hash)) { scrollToTheory(rawHash); return; }
    const known = ['home', 'theory', 'practice', 'lab', 'simulations'];
    if (known.includes(rawHash)) showPage(rawHash);
}

function hydrateTheorySection(section) {
    if (!section) return Promise.resolve();
    const body = section.querySelector('.theory-body');
    if (!body) return Promise.resolve();
    if (section.dataset.theoryLoaded === 'true') return queueMathTypeset(body);
    const sub = theorySections.get(section.id);
    if (!sub) return Promise.resolve();
    body.innerHTML = sub.content[currentLang] || sub.content.hy || sub.content.en;
    body.removeAttribute('aria-busy');
    section.dataset.theoryLoaded = 'true';
    section.classList.add('reveal--visible');
    return queueMathTypeset(body);
}

function initTheoryScrollReveal() {
    revealObserver?.disconnect();
    revealObserver = null;
    const items = document.querySelectorAll('#theory .theory-subsection:not([data-theory-loaded="true"])');
    if (!items.length) return;
    if (typeof IntersectionObserver === 'undefined') {
        if (document.getElementById('theory')?.classList.contains('active-section')) {
            items.forEach(hydrateTheorySection);
        }
        return;
    }
    revealObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            revealObserver.unobserve(entry.target);
            hydrateTheorySection(entry.target);
        }
    }, {root:null, rootMargin:'-90px 0px 200px 0px', threshold:0});
    items.forEach(item => revealObserver.observe(item));
}

// Global Exports
window.switchTheoryTrack = switchTheoryTrack;
window.switchPracticeTrack = switchPracticeTrack;
window.onPracticeTopicChange = onPracticeTopicChange;
window.scrollToTheory = scrollToTheory;
window.checkAnswer = checkAnswer;
window.showProblemHint = showProblemHint;
window.filterProblems = filterProblems;
window.showPage = showPage;
window.setLanguage = setLanguage;
window.toggleTheme = toggleTheme;
window.confirmResetProgress = confirmResetProgress;
window.closeModal = closeModal;
