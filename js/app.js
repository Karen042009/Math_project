/* 
 * MAIN APPLICATION LOGIC 
 */

let currentLang = 'en'; // Default to English
let revealObserver;
const PROGRESS_KEY = 'probSpaceProgressV1';
const THEME_KEY = 'probSpaceTheme';

document.addEventListener('DOMContentLoaded', () => {
    // Theme Init
    initTheme();

    // Force English as default once for users who had it stuck on another language
    if (!localStorage.getItem('langResetEnV2')) {
        localStorage.setItem('probSpaceLang', 'en');
        localStorage.setItem('langResetEnV2', 'true');
    }

    // Check if user set lang before
    const savedLang = localStorage.getItem('probSpaceLang');
    if (savedLang) currentLang = savedLang;

    setLanguage(currentLang);

    // Init Visualizer default
    if (typeof updateVisualizer === 'function') updateVisualizer();
    if (typeof drawGraph === 'function') drawGraph();

    // Init ALL simulations so they're ready when the user navigates to them
    if (typeof initGalton === 'function') initGalton();
    if (typeof initMonty === 'function') initMonty();
    if (typeof initBuffon === 'function') initBuffon();

    // Hash routing / deep-linking
    handleInitialHashRoute();
    window.addEventListener('hashchange', handleInitialHashRoute);

    // Nav scroll effect — add 'scrolled' class when page is scrolled
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

/* --- I18N & ROUTING --- */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('probSpaceLang', lang);
    document.documentElement.lang = lang;

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.lang-btn[onclick*="${lang}"]`).forEach(b => b.classList.add('active'));

    // Update UI text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.probabilityData && window.probabilityData.ui && window.probabilityData.ui[key]) {
            const translated = window.probabilityData.ui[key][lang] || window.probabilityData.ui[key]['en'];

            // Handle placeholders
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translated;
            } else {
                // If it contains HTML tags, use innerHTML
                if (translated.includes('<')) {
                    el.innerHTML = translated;
                } else {
                    el.innerText = translated;
                }
            }
        }
    });

    // Re-render dynamic content
    initTheory();
    initProblems();

    // Re-init scroll reveal for newly rendered theory DOM
    initTheoryScrollReveal();

    // Update simulation descriptions & stats
    if (typeof updateSimDescriptions === 'function') {
        updateSimDescriptions();
    }
    if (typeof updateMontyStats === 'function') {
        updateMontyStats();
    }
    if (typeof updateGaltonStats === 'function') {
        updateGaltonStats();
    }
    if (typeof updateBuffonStats === 'function') {
        updateBuffonStats();
    }

    // Re-render MathJax
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function showPage(pageId) {
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

    // Scroll to top on page switch
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update nav button active states
    document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-target') === pageId || btn.onclick.toString().includes(pageId)) {
            btn.classList.add('active');
        }
    });

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    }

    // Re-initialize page-specific content when navigating
    if (pageId === 'simulations') {
        if (typeof initGalton === 'function') initGalton();
        if (typeof initMonty === 'function') initMonty();
        if (typeof initBuffon === 'function') initBuffon();
    }
    if (pageId === 'lab') {
        if (typeof updateVisualizer === 'function') updateVisualizer();
        if (typeof drawGraph === 'function') drawGraph();
    }
    if (pageId === 'practice') {
        // Re-render problems in current language preserving filter
        if (allProblems.length) {
            const currentFilterBtn = document.querySelector('.filter-btn.active');
            const filterLevel = currentFilterBtn ? currentFilterBtn.getAttribute('data-filter') : 'all';
            filterProblems(filterLevel, currentFilterBtn);
        } else {
            initProblems();
        }
        renderPracticeStats();
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const content = menu.querySelector('.mobile-menu-content');

    if (menu.style.display === 'flex') {
        content.style.animation = 'slideIn 0.3s reverse forwards';
        // Simplified close - needs timeout to match animation actually
        setTimeout(() => { menu.style.display = 'none'; }, 200);
    } else {
        menu.style.display = 'flex';
        content.style.animation = 'slideIn 0.3s forwards';
    }
}

/* --- THEORY LOGIC --- */
function initTheory() {
    const navContainer = document.getElementById('theory-nav');
    const contentContainer = document.getElementById('theory-dynamic-render');

    if (!window.probabilityData || !window.probabilityData.theory) return;

    let navHTML = '';
    let contentHTML = '';

    window.probabilityData.theory.forEach((section, index) => {
        const title = section.title[currentLang] || section.title['en'];

        // Sidebar Item
        navHTML += `
            <div class="accordion-item">
                <button class="accordion-header" onclick="toggleAccordion(this)">
                    <span style="flex:1; padding-right:10px; line-height:1.4;">${title}</span>
                    <i class="fas fa-chevron-down" style="flex-shrink:0;"></i>
                </button>
                <div class="accordion-body">
                    ${section.subsections.map(sub => `
                        <a href="#${sub.id}" onclick="scrollToTheory('${sub.id}')">
                            ${sub.title[currentLang] || sub.title['en']}
                        </a>
                    `).join('')}
                </div>
            </div>
        `;

        // Content
        contentHTML += `
            <div class="theory-block" id="theory-block-${index}">
                <h2>${title}</h2>
                ${section.subsections.map(sub => `
                    <div id="${sub.id}" class="theory-subsection reveal">
                        <h3>${sub.title[currentLang] || sub.title['en']}</h3>
                        ${sub.content[currentLang] || sub.content['en']}
                    </div>
                `).join('')}
            </div>
        `;
    });

    if (navContainer) navContainer.innerHTML = navHTML;
    if (contentContainer) {
        contentContainer.innerHTML = contentHTML;
        // Re-render MathJax specifically for theory content
        if (window.MathJax && window.MathJax.typesetPromise) {
            MathJax.typesetPromise([contentContainer]);
        }
    }
}

function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    const isActive = body.style.display === 'block';

    // Close all other accordions and remove their active states
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

function scrollToTheory(id) {
    showPage('theory');

    // Close mobile TOC if open
    if (window.innerWidth <= 900) {
        const theoryNav = document.getElementById('theory-nav');
        if (theoryNav) {
            theoryNav.style.display = 'none';
            const btn = document.querySelector('.mobile-toc-btn');
            if (btn) btn.classList.remove('active');
        }
    }

    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            el.classList.add('theory-highlight');
            setTimeout(() => { el.classList.remove('theory-highlight'); }, 1800);
        }
    }, 150);
}

/* --- PRACTICE LOGIC --- */
function loadProgress() {
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return { attempts: {}, solved: {} };
        const parsed = JSON.parse(raw);
        return {
            attempts: parsed.attempts && typeof parsed.attempts === 'object' ? parsed.attempts : {},
            solved: parsed.solved && typeof parsed.solved === 'object' ? parsed.solved : {}
        };
    } catch {
        return { attempts: {}, solved: {} };
    }
}

function saveProgress(p) {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
    } catch {
        // ignore
    }
}

function renderPracticeStats() {
    const box = document.getElementById('practice-stats');
    if (!box || !window.probabilityData?.problems) return;
    const prog = loadProgress();
    const total = allProblems.length || window.probabilityData.problems.length;
    const solvedCount = Object.values(prog.solved).filter(Boolean).length;
    const attemptsTotal = Object.values(prog.attempts).reduce((a, b) => a + (parseInt(b, 10) || 0), 0);

    const ui = window.probabilityData.ui;
    const lang = currentLang || 'en';

    box.innerHTML = `
      <div class="stat"><div class="label">${ui.stat_solved[lang]}</div><div class="value">${solvedCount}/${total}</div></div>
      <div class="stat"><div class="label">${ui.stat_attempts[lang]}</div><div class="value">${attemptsTotal}</div></div>
      <div class="stat"><div class="label">${ui.stat_total[lang]}</div><div class="value">${total}</div></div>
    `;
}

let allProblems = [];

function initProblems() {
    if (!window.probabilityData) return;

    // 1. Static Problems
    let staticProbs = window.probabilityData.problems || [];

    // 2. Generate Dynamic Problems (if not already done)
    if (!window.probabilityData.generatedProblems) {
        // Generate 50 dynamic problems for "hundreds" feel
        window.probabilityData.generatedProblems = window.probabilityData.generateBatch ? window.probabilityData.generateBatch(50) : [];
    }

    // Combine
    allProblems = [...staticProbs, ...window.probabilityData.generatedProblems];

    // Initialize with 'all' filter and handle solved tab logic
    const allBtn = document.querySelector('.filter-btn[data-filter="all"]');
    filterProblems('all', allBtn);
    renderPracticeStats();
}

function renderProblems(problems) {
    const grid = document.getElementById('problems-grid');
    if (!grid) return;
    const ui = window.probabilityData.ui;
    const prog = loadProgress();

    grid.innerHTML = problems.map(prob => {
        const qText = prob.question[currentLang] || prob.question['en'];
        const solved = !!prog.solved[String(prob.id)];

        return `
        <div class="problem-card ${solved ? 'problem-solved' : ''}" data-id="${prob.id}">
            <span class="problem-tag tag-${prob.difficulty}">
                ${ui['filter_' + prob.difficulty] ? ui['filter_' + prob.difficulty][currentLang] : prob.difficulty}
            </span>
            <p>${qText}</p>
            <input type="text" class="problem-input" placeholder="..." id="input-${prob.id}" ${solved ? 'disabled' : ''}>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <button class="check-btn" onclick="checkAnswer(${prob.id})" ${solved ? 'disabled' : ''}>
                    ${ui.btn_check[currentLang] || "Check"}
                </button>
                <button class="secondary-btn" style="padding:10px; font-size:0.9rem;" onclick="showProblemHint(${prob.id})" ${solved ? 'disabled' : ''}>
                    <i class="fas fa-lightbulb"></i> ${ui.btn_hint[currentLang] || "Hint"}
                </button>
            </div>
        </div>
        `
    }).join('');

    if (window.MathJax && window.MathJax.typesetPromise) MathJax.typesetPromise([grid]);
}

function filterProblems(level, btnEl) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    const prog = loadProgress();

    if (level === 'all') {
        const unsolved = allProblems.filter(p => !prog.solved[String(p.id)]);
        renderProblems(unsolved);
    } else if (level === 'solved') {
        const solvedOnly = allProblems.filter(p => prog.solved[String(p.id)]);
        renderProblems(solvedOnly);
    } else {
        const filtered = allProblems.filter(p => p.difficulty === level && !prog.solved[String(p.id)]);
        renderProblems(filtered);
    }
}

function checkAnswer(id) {
    const problem = allProblems.find(p => p.id === id);
    if (!problem) return;

    const userVal = document.getElementById(`input-${id}`).value.trim();

    let isCorrect = false;
    if (problem.checkFn) {
        // Use custom checker for dynamic problems
        isCorrect = problem.checkFn(userVal, problem.answer);
    } else {
        // Standard checker
        isCorrect = compareAnswers(userVal, problem.answer);
    }

    // Update progress
    const prog = loadProgress();
    const key = String(id);
    prog.attempts[key] = (parseInt(prog.attempts[key], 10) || 0) + 1;
    if (isCorrect) prog.solved[key] = true;
    saveProgress(prog);

    renderPracticeStats();

    // Re-render current grid state so solved problems are moved to "Solved" tab
    const currentFilterBtn = document.querySelector('.filter-btn.active');
    const filterLevel = currentFilterBtn ? currentFilterBtn.getAttribute('data-filter') : 'all';
    filterProblems(filterLevel, currentFilterBtn);

    const attemptsCount = prog.attempts[key];
    showModal(isCorrect, problem, attemptsCount);
}

function showProblemHint(id) {
    const problem = allProblems.find(p => p.id === id);
    if (!problem) return;

    // We reuse showModal with a special flag or just call a simpler version
    // For now, let's use a simple alert-like specialized modal content
    const ui = window.probabilityData.ui;
    const modal = document.getElementById('feedback-modal');
    modal.style.display = 'flex';

    document.getElementById('modal-title').innerText = ui.modal_hint_label[currentLang];
    document.getElementById('modal-title').style.color = 'var(--accent-gold)';

    const hintText = problem.related_theory_hint[currentLang] || problem.related_theory_hint['en'] || "...";

    document.getElementById('modal-msg').innerHTML = `
        <div style="margin-top:10px; padding:18px; background:var(--neon-purple-dim); border-left:4px solid var(--neon-purple); border-radius:10px; font-size:1rem; border:1px solid var(--glass-border);">
            <p style="line-height:1.6; color:var(--text-primary);">${hintText}</p>
        </div>
    `;

    const btn = document.getElementById('modal-action-btn');
    btn.style.display = 'inline-block';
    btn.innerText = ui.btn_continue[currentLang];
    btn.onclick = closeModal;

    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise([modal]);
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

    // Fraction a/b
    const frac = s.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (frac) {
        const a = parseFloat(frac[1]);
        const b = parseFloat(frac[2]);
        if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) return { ok: true, value: a / b };
    }

    // Allow `pi` and basic operators, parentheses, decimals
    if (!/^[0-9+\-*/().pi]+$/.test(s)) return { ok: false };

    const safe = s.replace(/pi/g, 'Math.PI');
    try {
        // eslint-disable-next-line no-new-func
        const f = new Function('Math', `"use strict"; return (${safe});`);
        const v = f(Math);
        if (Number.isFinite(v)) return { ok: true, value: v };
        return { ok: false };
    } catch {
        return { ok: false };
    }
}

function compareAnswers(user, expected) {
    const u = normalizeAnswerString(user);
    const e = normalizeAnswerString(expected);
    if (!u || !e) return false;
    if (u === e) return true;

    // Numeric tolerance compare
    const uNum = tryEvalToNumber(u);
    const eNum = tryEvalToNumber(e);
    if (uNum.ok && eNum.ok) {
        const tol = 1e-6;
        return Math.abs(uNum.value - eNum.value) <= tol;
    }

    return false;
}

function findTheoryNodeById(theoryId) {
    const all = (window.probabilityData && window.probabilityData.theory) ? window.probabilityData.theory : [];
    for (const sec of all) {
        for (const sub of (sec.subsections || [])) {
            if (sub.id === theoryId) return { section: sec, subsection: sub };
        }
    }
    return null;
}

function showModal(isCorrect, problem, attempts = 0) {
    const modal = document.getElementById('feedback-modal');
    const ui = window.probabilityData.ui;

    modal.style.display = 'flex';

    if (isCorrect) {
        document.getElementById('modal-title').innerText = ui.modal_correct[currentLang];
        document.getElementById('modal-title').style.color = 'var(--accent-blue)';
        document.getElementById('modal-msg').innerHTML = `
            <div style="text-align:center; padding:10px 0;">
                <div style="font-size:3rem; margin-bottom:10px;">🎉</div>
                <p style="font-size:1.1rem;">${ui.modal_correct_msg[currentLang]}</p>
            </div>
        `;

        const btn = document.getElementById('modal-action-btn');
        btn.style.display = 'inline-block';
        btn.innerText = ui.btn_continue[currentLang];
        btn.onclick = closeModal;
    } else {
        document.getElementById('modal-title').innerText = ui.modal_incorrect[currentLang];
        document.getElementById('modal-title').style.color = 'var(--accent-pink)';

        // Find related theory section
        let theoryTitle = null;
        let theorySectionTitle = null;
        if (problem.related_theory_id) {
            const allSections = window.probabilityData.theory || [];
            for (const sec of allSections) {
                if (sec.subsections) {
                    const sub = sec.subsections.find(s => s.id === problem.related_theory_id);
                    if (sub) {
                        theoryTitle = sub.title[currentLang] || sub.title['en'];
                        theorySectionTitle = sec.title[currentLang] || sec.title['en'];
                        break;
                    }
                }
            }
        }

        // Build rich feedback HTML
        let feedbackHtml = '';

        // Difficulty badge
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        const diffColors = theme === 'light'
            ? { beginner: '#0284c7', intermediate: '#b45309', advanced: '#db2777', olympic: '#7c3aed' }
            : { beginner: '#4cc9f0', intermediate: '#ffd60a', advanced: '#f72585', olympic: '#9d4edd' };
        const diffLabels = { beginner: ui.filter_beginner, intermediate: ui.filter_intermediate, advanced: ui.filter_advanced, olympic: ui.filter_olympic };
        const diffLabel = diffLabels[problem.difficulty] ? diffLabels[problem.difficulty][currentLang] : problem.difficulty;
        const diffColor = diffColors[problem.difficulty] || (theme === 'light' ? '#64748b' : '#aaa');

        feedbackHtml += `<div style="margin-bottom:15px; text-align:center;">
            <span style="display:inline-block; padding:4px 12px; border-radius:16px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.5px; background:${diffColor}15; color:${diffColor}; border:1.5px solid ${diffColor}40;">
                ${diffLabel}
            </span>
        </div>`;

        if (attempts >= 3) {
            // Show full solution on 3rd+ failed attempt
            titlePrefix = currentLang === 'hy' ? "Խնդրի ճիշտ և գրագետ լուծումը" : (currentLang === 'ru' ? "Правильное решение" : "Correct Solution");
            document.getElementById('modal-title').innerText = titlePrefix + " (" + attempts + ")";
            document.getElementById('modal-title').style.color = 'var(--accent-gold)';

            let hint = (problem.related_theory_solution && (problem.related_theory_solution[currentLang] || problem.related_theory_solution['en'])) || (problem.related_theory_hint && (problem.related_theory_hint[currentLang] || problem.related_theory_hint['en'])) || "";

            feedbackHtml += `<p style="line-height:1.7;">${currentLang === 'hy' ? 'Քանի որ սա ձեր 3-րդ անհաջող փորձն էր, տրամադրում ենք խնդրի գրագետ լուծումը․' : (currentLang === 'ru' ? 'Так как это ваша третья неудачная попытка, мы предоставляем правильное решение.' : 'Since this is your 3rd incorrect attempt, here is the correct solution.')}</p>`;

            feedbackHtml += `
                 <div style="margin-top:15px; padding:18px; background:var(--neon-purple-dim); border-left:4px solid var(--neon-purple); border-radius:10px; font-size:1rem; border:1px solid var(--glass-border);">
                    <div style="color:var(--accent-gold); font-weight:bold; margin-bottom:10px; display:flex; align-items:center; gap:8px;">
                        <i class="fas fa-lightbulb"></i> ${currentLang === 'hy' ? 'Ամբողջական ցուցում և լուծում․' : (currentLang === 'ru' ? 'Полное указание и решение:' : 'Full Solution:')}
                    </div>
                    ${hint ? `<span style="display:block; margin-bottom:15px; color:var(--text-primary); font-style:italic; line-height: 1.6;">"${hint}"</span>` : ''}
                    <div style="display:inline-block; padding:10px 16px; background:var(--bg-input); border-radius:8px; font-family:'Fira Code',monospace; font-size:1.1rem; border:1px solid var(--glass-border); box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                       <span style="color:var(--text-muted);">${currentLang === 'hy' ? 'Պատասխան՝' : (currentLang === 'ru' ? 'Ответ:' : 'Answer:')}</span> <strong style="color:var(--accent-pink); margin-left:8px;">${problem.answer}</strong>
                    </div>
                </div>
            `;

            if (theorySectionTitle) {
                feedbackHtml += `
                    <div style="margin-top:15px; font-size:0.85rem; color:var(--text-muted);">
                        <i class="fas fa-book" style="margin-right:5px;"></i>
                        ${theorySectionTitle} → <strong style="color:var(--text-primary);">${theoryTitle}</strong>
                    </div>
                `;
            }
        } else if (attempts === 2) {
            // Normal hint view (Attempt 2)
            if (theoryTitle) {
                const template = ui.modal_smart_feedback[currentLang] || ui.modal_smart_feedback['en'];

                // Hint box
                const hint = (problem.related_theory_hint && (problem.related_theory_hint[currentLang] || problem.related_theory_hint['en'])) || "";
                let hintHtml = '';
                if (hint) {
                    hintHtml = `
                        <div style="margin-top:15px; padding:14px 18px; background:var(--neon-purple-dim); border-left:4px solid var(--neon-purple); border-radius:10px; font-family:'Fira Code',monospace; font-size:0.9rem; border:1px solid var(--glass-border);">
                            <strong style="color:var(--accent-gold); display:block; margin-bottom:5px;">${ui.modal_hint_label[currentLang]}</strong>
                            <span style="color:var(--text-primary);">${hint}</span>
                        </div>
                    `;
                }

                feedbackHtml += `<p style="line-height:1.7;">${template.replace('{topic}', theoryTitle).replace('{hint}', '')}</p>`;
                feedbackHtml += hintHtml;

                // Theory path breadcrumb
                if (theorySectionTitle) {
                    feedbackHtml += `
                        <div style="margin-top:15px; font-size:0.8rem; color:var(--text-muted);">
                            <i class="fas fa-book" style="margin-right:5px;"></i>
                            ${theorySectionTitle} → <strong style="color:var(--text-primary);">${theoryTitle}</strong>
                        </div>
                    `;
                }
            } else {
                feedbackHtml += `<p>${ui.modal_incorrect_msg[currentLang]}</p>`;
            }
        } else {
            // First attempt
            feedbackHtml += `<p style="line-height:1.6;">${ui.modal_incorrect_msg[currentLang]}</p>`;
            let tryAgainMsg = currentLang === 'hy' ? 'Տրամաբանեք և փորձեք ևս մեկ անգամ։' : (currentLang === 'ru' ? 'Подумайте и попробуйте еще раз.' : 'Think about it and try again.');
            feedbackHtml += `<p style="font-size:0.95rem; color:var(--text-muted); margin-top:12px; display:flex; align-items:center; gap:8px;"><i class="fas fa-lightbulb" style="color:var(--accent-gold)"></i> ${tryAgainMsg}</p>`;
        }

        document.getElementById('modal-msg').innerHTML = feedbackHtml;

        // Theory navigation button
        const btn = document.getElementById('modal-action-btn');
        if (attempts >= 2 && problem.related_theory_id) {
            btn.style.display = 'inline-block';
            btn.innerHTML = `<i class="fas fa-book-open" style="margin-right:6px;"></i>${ui.btn_goto_theory[currentLang]}`;
            btn.onclick = function () {
                closeModal();
                // Navigate to theory and auto-open the sidebar accordion
                showPage('theory');
                setTimeout(() => {
                    // Find and expand the accordion containing this theory id
                    const targetEl = document.getElementById(problem.related_theory_id);
                    if (targetEl) {
                        // Find parent accordion and open it
                        const allAccordions = document.querySelectorAll('.sidebar details');
                        allAccordions.forEach(d => {
                            const links = d.querySelectorAll('a');
                            links.forEach(a => {
                                if (a.getAttribute('href') === '#' + problem.related_theory_id) {
                                    d.setAttribute('open', '');
                                }
                            });
                        });

                        // Scroll to and highlight the section
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        targetEl.classList.add('theory-highlight');
                        setTimeout(() => targetEl.classList.remove('theory-highlight'), 3000);
                    }
                }, 300);
            };
        } else {
            btn.style.display = 'inline-block';
            btn.innerText = ui.btn_continue[currentLang];
            btn.onclick = closeModal;
        }
    }

    // Re-render MathJax inside modal if needed
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise([modal]);
    }
}

function closeModal() {
    document.getElementById('feedback-modal').style.display = 'none';
}

// Modal Global Listeners
const closeModalBtn = document.querySelector('.close-modal');
if (closeModalBtn) closeModalBtn.onclick = closeModal;

window.onclick = function (event) {
    const modal = document.getElementById('feedback-modal');
    if (event.target === modal) {
        closeModal();
    }
}

/* --- PROGRESS MANAGEMENT --- */
function confirmResetProgress() {
    const msg = {
        hy: "Վստա՞հ եք, որ ուզում եք ջնջել ողջ առաջադիմությունը։ Այս գործողությունը անդառնալի է։",
        en: "Are you sure you want to reset all progress? This cannot be undone.",
        ru: "Вы уверены, что хотите сбросить весь прогресс? Это действие необратимо."
    };
    if (confirm(msg[currentLang] || msg['en'])) {
        resetProgress();
    }
}

function resetProgress() {
    localStorage.removeItem(PROGRESS_KEY);
    // Reload UI
    initProblems();
    renderPracticeStats();

    const ui = window.probabilityData.ui;
    const msg = {
        hy: "Առաջադիմությունը զրոյացվեց․",
        en: "Progress reset successfully.",
        ru: "Прогресс успешно сброшен."
    };
    alert(msg[currentLang] || msg['en']);
    window.location.reload(); // Hard reload for clean state
}

/* --- HASH ROUTING (deep-linking) --- */
function handleInitialHashRoute() {
    const hash = (location.hash || '').replace(/^#/, '').trim();
    if (!hash) return;

    // If hash points to an existing element (typically theory subsection)
    const el = document.getElementById(hash);
    if (el) {
        // If it's a page section, just show it
        if (el.classList && el.classList.contains('page-section')) {
            showPage(hash);
            return;
        }
        // Otherwise assume theory anchor
        scrollToTheory(hash);
        return;
    }

    // Fallback: allow #theory / #practice / #lab / #simulations
    const known = ['home', 'theory', 'practice', 'lab', 'simulations'];
    if (known.includes(hash)) showPage(hash);
}

/* --- SCROLL REVEAL (Theory page) --- */
function initTheoryScrollReveal() {
    // Cleanup previous observer
    if (revealObserver) {
        try { revealObserver.disconnect(); } catch { }
        revealObserver = null;
    }

    const items = document.querySelectorAll('#theory .reveal');
    if (!items.length || typeof IntersectionObserver === 'undefined') return;

    revealObserver = new IntersectionObserver((entries) => {
        for (const e of entries) {
            if (e.isIntersecting) {
                e.target.classList.add('reveal--visible');
                revealObserver.unobserve(e.target);
            }
        }
    }, { root: null, threshold: 0.15 });

    items.forEach(i => revealObserver.observe(i));
}
/**
 * AI Audio Guide for Presentation
 * Plays the corresponding audio file based on the context.
 */
let currentAudio = null;

function getActiveSimContext() {
    // Returns something like 'sim_galton', 'sim_monty', etc.
    const activeBtn = document.querySelector('.sim-tab-btn.active');
    if (!activeBtn) return 'simulations'; // fallback general

    // If it's the general intro, we can check a condition or just return the tab-based context
    // Let's assume the user wants the specific sim explanation if they are on that tab
    const onclickStr = activeBtn.getAttribute('onclick') || '';
    if (onclickStr.includes("'galton'")) return 'sim_galton';
    if (onclickStr.includes("'monty'")) return 'sim_monty';
    if (onclickStr.includes("'buffon'")) return 'sim_buffon';
    if (onclickStr.includes("'coin'")) return 'sim_coin';
    if (onclickStr.includes("'dice'")) return 'sim_dice';

    return 'simulations';
}

function playAIGuide(context) {
    // 1. Determine Button ID for UI feedback (glowing)
    let btnId = context + '-speech-btn';
    if (context.startsWith('vis_')) btnId = 'vis-speech-btn';
    if (context.startsWith('sim_')) btnId = 'sim-speech-btn';
    if (context === 'simulations') btnId = 'sim-speech-btn';

    const btn = document.getElementById(btnId);

    // 2. Map Context to actual filename in assets/audio/
    const audioMapping = {
        'intro': '1.wav',
        'theory': '2.wav',
        'practice': '3.wav',
        'lab': '4.wav',
        'vis_normal': '4_1_normal.wav',
        'vis_venn': '4_2_ven.wav',
        'vis_tree': '4_3_tree.wav',
        'simulations': 'simulations.wav',
        'sim_galton': 'sim_galton.wav',
        'sim_monty': 'sim_monty.wav',
        'sim_buffon': 'sim_buffon.wav',
        'sim_coin': 'sim_coin.wav',
        'sim_dice': 'sim_dice.wav'
    };

    const fileName = audioMapping[context] || (context + '.wav');
    const audioPath = `assets/audio/${fileName}`;

    // 3. Handle playback logic
    if (currentAudio && !currentAudio.paused) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        document.querySelectorAll('.ai-speech-btn').forEach(b => b.classList.remove('playing'));

        // If they clicked the same button, just stop
        if (currentAudio.src.endsWith(fileName)) {
            currentAudio = null;
            return;
        }
    }

    currentAudio = new Audio(audioPath);

    if (btn) {
        document.querySelectorAll('.ai-speech-btn').forEach(b => b.classList.remove('playing'));
        btn.classList.add('playing');
    }

    currentAudio.play().catch(err => {
        console.warn("Audio play failed. Ensure the file exists at: " + audioPath);
        if (btn) btn.classList.remove('playing');
    });

    currentAudio.onended = () => {
        if (btn) btn.classList.remove('playing');
        currentAudio = null;
    };
}

// Global scope
window.playAIGuide = playAIGuide;
