/* 
 * MAIN APPLICATION LOGIC 
 */

let currentLang = 'hy'; // Default to Armenian as requested
let revealObserver;
const PROGRESS_KEY = 'probProProgressV1';

document.addEventListener('DOMContentLoaded', () => {
    // Check if user set lang before
    const savedLang = localStorage.getItem('probProLang');
    if (savedLang) currentLang = savedLang;

    setLanguage(currentLang);

    // Init Visualizer default
    updateVisualizer();
    drawGraph();

    if (typeof initGalton === 'function') initGalton();

    // Hash routing / deep-linking
    handleInitialHashRoute();
    window.addEventListener('hashchange', handleInitialHashRoute);
});

/* --- I18N & ROUTING --- */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('probProLang', lang);

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`.lang-btn[onclick*="${lang}"]`).forEach(b => b.classList.add('active'));

    // Update UI text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.probabilityData && window.probabilityData.ui && window.probabilityData.ui[key]) {
            el.innerText = window.probabilityData.ui[key][lang] || window.probabilityData.ui[key]['en'];
        }
    });

    // Re-render dynamic content
    initTheory();
    initProblems();

    // Re-init scroll reveal for newly rendered theory DOM
    initTheoryScrollReveal();

    // Update simulation descriptions
    if (typeof updateSimDescriptions === 'function') {
        updateSimDescriptions();
    }

    // Re-render MathJax
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active-section');
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('active-section', 'fade-in-up');
        setTimeout(() => target.classList.remove('fade-in-up'), 600);
    }

    document.querySelectorAll('.nav-btn, .mobile-nav-btn').forEach(btn => {
        btn.classList.remove('active');
        // Simple check
        if (btn.getAttribute('data-target') === pageId || btn.onclick.toString().includes(pageId)) {
            btn.classList.add('active');
        }
    });
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
                    ${title}
                    <i class="fas fa-chevron-down"></i>
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
        if (window.MathJax) {
            MathJax.typesetPromise([contentContainer]);
        }
    }
}

function toggleAccordion(btn) {
    const body = btn.nextElementSibling;
    const isActive = body.style.display === 'block';
    document.querySelectorAll('.accordion-body').forEach(el => el.style.display = 'none');
    body.style.display = isActive ? 'none' : 'block';
}

function scrollToTheory(id) {
    showPage('theory');
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.classList.add('theory-highlight');
            setTimeout(() => { el.classList.remove('theory-highlight'); }, 1800);
        }
    }, 100);
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
    const total = window.probabilityData.problems.length;
    const solvedCount = Object.values(prog.solved).filter(Boolean).length;
    const attemptsTotal = Object.values(prog.attempts).reduce((a, b) => a + (parseInt(b, 10) || 0), 0);

    const labels = {
        solved: currentLang === 'hy' ? 'Լուծված' : currentLang === 'ru' ? 'Решено' : 'Solved',
        attempts: currentLang === 'hy' ? 'Փորձեր' : currentLang === 'ru' ? 'Попытки' : 'Attempts',
        total: currentLang === 'hy' ? 'Ընդամենը' : currentLang === 'ru' ? 'Всего' : 'Total'
    };

    box.innerHTML = `
      <div class="stat"><div class="label">${labels.solved}</div><div class="value">${solvedCount}/${total}</div></div>
      <div class="stat"><div class="label">${labels.attempts}</div><div class="value">${attemptsTotal}</div></div>
      <div class="stat"><div class="label">${labels.total}</div><div class="value">${total}</div></div>
    `;
}

function initProblems() {
    if (window.probabilityData && window.probabilityData.problems)
        renderProblems(window.probabilityData.problems);
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
            <button class="check-btn" onclick="checkAnswer(${prob.id})">
                ${ui.btn_check[currentLang] || "Check"}
            </button>
        </div>
        `
    }).join('');

    if (window.MathJax) MathJax.typesetPromise([grid]);
}

function filterProblems(level, btnEl) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');

    if (level === 'all') {
        renderProblems(window.probabilityData.problems);
    } else {
        const filtered = window.probabilityData.problems.filter(p => p.difficulty === level);
        renderProblems(filtered);
    }
}

function checkAnswer(id) {
    const problem = window.probabilityData.problems.find(p => p.id === id);
    const userVal = document.getElementById(`input-${id}`).value.trim();
    const isCorrect = compareAnswers(userVal, problem.answer); // smarter match

    // Update progress
    const prog = loadProgress();
    const key = String(id);
    prog.attempts[key] = (parseInt(prog.attempts[key], 10) || 0) + 1;
    if (isCorrect) prog.solved[key] = true;
    saveProgress(prog);
    renderPracticeStats();
    // Re-render current grid state so solved problems lock
    const currentFilterBtn = document.querySelector('.filter-btn.active');
    const filterLevel = currentFilterBtn ? (currentFilterBtn.textContent || '').trim().toLowerCase() : 'all';
    // Best-effort: if filter label isn't in English, just re-render all
    if (['beginner', 'intermediate', 'advanced', 'olympic'].includes(filterLevel)) {
        renderProblems(window.probabilityData.problems.filter(p => p.difficulty === filterLevel));
    } else {
        renderProblems(window.probabilityData.problems);
    }

    showModal(isCorrect, problem);
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

function showModal(isCorrect, problem) {
    const modal = document.getElementById('feedback-modal');
    const title = document.getElementById('modal-title');
    const msg = document.getElementById('modal-msg');
    const btn = document.getElementById('modal-action-btn');
    const ui = window.probabilityData.ui;

    modal.style.display = 'flex';

    if (isCorrect) {
        title.innerText = ui.modal_correct[currentLang];
        title.style.color = '#4cc9f0';
        msg.innerText = ui.modal_correct_msg[currentLang];
        btn.innerText = ui.btn_continue[currentLang] || "Continue";
        btn.onclick = closeModal;
        btn.style.display = 'inline-block';
    } else {
        title.innerText = ui.modal_incorrect[currentLang];
        title.style.color = '#f72585';
        const node = problem.related_theory_id ? findTheoryNodeById(problem.related_theory_id) : null;
        const theoryTitle =
            node?.subsection?.title?.[currentLang] ||
            node?.subsection?.title?.en ||
            node?.section?.title?.[currentLang] ||
            node?.section?.title?.en ||
            null;

        const hintText =
            (problem.related_theory_hint && (problem.related_theory_hint[currentLang] || problem.related_theory_hint.en)) ||
            null;

        if (theoryTitle) {
            // Smart feedback that teaches (not just "wrong")
            if (currentLang === 'hy') {
                msg.innerHTML = `Ցավոք, սխալ է։ Կարծես թե Դուք դժվարանում եք <strong>«${theoryTitle}»</strong> թեմայում։ ${hintText ? ('<br><em>Հուշում՝</em> ' + hintText) : ''}`.trim();
            } else if (currentLang === 'ru') {
                msg.innerHTML = `К сожалению, неверно. Похоже, вы затрудняетесь в теме <strong>«${theoryTitle}»</strong>. ${hintText ? ('<br><em>Подсказка:</em> ' + hintText) : ''}`.trim();
            } else {
                msg.innerHTML = `Unfortunately, that's incorrect. It looks like you're struggling with <strong>"${theoryTitle}"</strong>. ${hintText ? ('<br><em>Hint:</em> ' + hintText) : ''}`.trim();
            }
        } else {
            msg.innerText = ui.modal_incorrect_msg[currentLang];
        }

        if (problem.related_theory_id) {
            btn.style.display = 'inline-block';
            btn.innerText = ui.btn_goto_theory[currentLang];
            btn.onclick = () => {
                closeModal();
                scrollToTheory(problem.related_theory_id);
            };
        } else {
            btn.style.display = 'none';
        }
    }

    // Re-render MathJax inside modal if needed
    if (window.MathJax) {
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
