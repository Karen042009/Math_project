/* 
 * MAIN APPLICATION LOGIC 
 */

let currentLang = 'hy'; // Default to Armenian as requested

document.addEventListener('DOMContentLoaded', () => {
    // Check if user set lang before
    const savedLang = localStorage.getItem('probProLang');
    if (savedLang) currentLang = savedLang;
    
    setLanguage(currentLang);
    
    if (typeof initGalton === 'function') initGalton();
});

/* --- I18N & ROUTING --- */
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('probProLang', lang);

    // Update Language Buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase() === lang) btn.classList.add('active');
    });

    // Update Static UI Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (window.probabilityData.ui[key] && window.probabilityData.ui[key][lang]) {
            el.innerText = window.probabilityData.ui[key][lang];
        }
    });

    // Re-render Dynamic Content
    initTheory();
    initProblems();
    
    // Update Sim Buttons manually since they are static HTML but need text update
    updateSimRef();

    // Re-render MathJax
    if (window.MathJax) {
        setTimeout(() => MathJax.typesetPromise(), 100);
    }
}

function updateSimRef() {
    // Helper to update specific IDs that might not be in the generic loop
    const ui = window.probabilityData.ui;
    const ids = {
        'sim-galton h2': 'sim_galton',
        'sim-monty h2': 'sim_monty',
        'sim-buffon h2': 'sim_buffon',
        '#sim-galton .glow-btn': 'btn_drop_balls',
        '#sim-galton .secondary': 'btn_reset'
    };
    // This part is a bit manual for the static HTML structure unless we tag everything
    // For now, let's rely on data-i18n tags which I should have added to HTML.
    // Instead of complex JS mapping, I will rely on re-rendering or user can refresh.
    // Actually, let's just re-init the basics.
}

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active-section');
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
        target.classList.add('fade-in-up');
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
        content.style.animation = 'slideIn 0.3s reverse forwards'; // Needs reverse keyframe ideally
        // Simplified close
        menu.style.display = 'none'; 
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
                    <div id="${sub.id}" class="theory-subsection">
                        <h3>${sub.title[currentLang] || sub.title['en']}</h3>
                        ${sub.content[currentLang] || sub.content['en']}
                    </div>
                `).join('')}
            </div>
        `;
    });

    navContainer.innerHTML = navHTML;
    contentContainer.innerHTML = contentHTML;
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
            el.style.transition = 'background 1s';
            el.style.background = 'rgba(157, 78, 221, 0.3)';
            setTimeout(() => { el.style.background = 'transparent'; }, 2000);
        }
    }, 100);
}

function toggleProof(btn) {
    const content = btn.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

/* --- PRACTICE LOGIC --- */
function initProblems() {
    renderProblems(window.probabilityData.problems);
}

function renderProblems(problems) {
    const grid = document.getElementById('problems-grid');
    const ui = window.probabilityData.ui;
    
    grid.innerHTML = problems.map(prob => {
        // Fallback or specific lang
        const qText = prob.question[currentLang] || prob.question['en'];
        
        return `
        <div class="problem-card" data-id="${prob.id}">
            <span class="problem-tag tag-${prob.difficulty}">
                ${ui['filter_'+prob.difficulty] ? ui['filter_'+prob.difficulty][currentLang] : prob.difficulty}
            </span>
            <p>${qText}</p>
            <input type="text" class="problem-input" placeholder="..." id="input-${prob.id}">
            <button class="check-btn" onclick="checkAnswer(${prob.id})">
                ${ui.btn_check[currentLang]}
            </button>
        </div>
        `
    }).join('');
    
    if (window.MathJax) MathJax.typesetPromise([grid]);
}

function filterProblems(level) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

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
    const isCorrect = userVal === problem.answer; // Simple string match
    
    showModal(isCorrect, problem);
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
        btn.innerText = ui.btn_continue[currentLang];
        btn.onclick = closeModal;
    } else {
        title.innerText = ui.modal_incorrect[currentLang];
        title.style.color = '#f72585';
        msg.innerText = ui.modal_incorrect_msg[currentLang];
        
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
}

function closeModal() {
    document.getElementById('feedback-modal').style.display = 'none';
}

document.querySelector('.close-modal').onclick = closeModal;
window.onclick = function(event) {
    const modal = document.getElementById('feedback-modal');
    if (event.target === modal) {
        closeModal();
    }
}


/* --- LAB / CALCULATOR LOGIC --- */
let calcExpression = "";

function addToCalc(val) {
    if (['P(', 'C(', 'A(', '!', '∩', '∪', 'Ω', 'λ', 'σ', 'μ'].includes(val)) {
        // Just visual appending for now, could implement actual logic later
        // For basic math, we focus on numbers
    }
    calcExpression += val;
    document.getElementById('calc-input').value = calcExpression;
}

function clearCalc() {
    calcExpression = "";
    document.getElementById('calc-input').value = "";
    document.getElementById('calc-result').innerText = "Result: 0";
}

function backspaceCalc() {
    calcExpression = calcExpression.slice(0, -1);
    document.getElementById('calc-input').value = calcExpression;
}

function calculateResult() {
    try {
        // Very basic safety check, only allow numbers and basic math chars
        // Note: This is a simple evaluator. For a real app, use a proper parser.
        // We will strip everything except numbers and operators +, -, *, /, ., (, )
        const safeExpr = calcExpression.replace(/[^0-9+\-*/.()]/g, ''); 
        
        if (!safeExpr) {
            document.getElementById('calc-result').innerText = "Result: Error";
            return;
        }

        const res = new Function('return ' + safeExpr)();
        document.getElementById('calc-result').innerText = "Result: " + res;
    } catch (e) {
        document.getElementById('calc-result').innerText = "Result: Error";
    }
}

/* --- LAB / VISUALIZER LOGIC --- */
function updateVisualizer() {
    const type = document.getElementById('dist-select').value;
    const paramsDiv = document.getElementById('dist-params');
    
    if (type === 'normal') {
        paramsDiv.innerHTML = `
            <label>μ: <input type="number" id="param-mu" value="0"></label>
            <label>σ: <input type="number" id="param-sigma" value="1"></label>
        `;
    } else if (type === 'venn') {
        paramsDiv.innerHTML = `<p>Visualizing A ∩ B (Overlap)</p>`;
    }
}

function drawGraph() {
    const type = document.getElementById('dist-select').value;
    const canvas = document.getElementById('lab-canvas');
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;

    // Clear
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#fff';

    if (type === 'normal') {
        const mu = parseFloat(document.getElementById('param-mu').value) || 0;
        const sigma = parseFloat(document.getElementById('param-sigma').value) || 1;
        
        // Draw Axis
        ctx.beginPath();
        ctx.moveTo(0, h - 30);
        ctx.lineTo(w, h - 30);
        ctx.strokeStyle = '#aaa';
        ctx.stroke();

        // Draw Bell Curve
        ctx.beginPath();
        ctx.strokeStyle = '#9d4edd'; // Neon Purple
        ctx.lineWidth = 3;

        // X range: mu - 4sigma to mu + 4sigma mapped to 0..w
        const minX = mu - 4 * sigma;
        const maxX = mu + 4 * sigma;
        
        for (let pixelX = 0; pixelX <= w; pixelX++) {
            // map pixelX to mathX
            const mathX = minX + (pixelX / w) * (maxX - minX);
            
            // PDF formula
            const y = (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * Math.pow((mathX - mu) / sigma, 2));
            
            // Map mathY to pixelY (scale up)
            // Max Y is at x=mu, y ~ 0.4/sigma
            const maxY = (1 / (sigma * Math.sqrt(2 * Math.PI)));
            const pixelY = (h - 30) - (y / maxY) * (h - 60);

            if (pixelX === 0) ctx.moveTo(pixelX, pixelY);
            else ctx.lineTo(pixelX, pixelY);
        }
        ctx.stroke();
        
        // Labels
        ctx.font = "12px sans-serif";
        ctx.fillText(`μ=${mu}`, w/2, h-10);

    } else if (type === 'venn') {
        // Simple Venn of Intersect
        ctx.globalCompositeOperation = 'source-over';
        
        // Circle A
        ctx.beginPath();
        ctx.arc(w/2 - 50, h/2, 80, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(157, 78, 221, 0.4)'; // Purple transparent
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.fillText("A", w/2 - 100, h/2);

        // Circle B
        ctx.beginPath();
        ctx.arc(w/2 + 50, h/2, 80, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 214, 10, 0.4)'; // Gold transparent
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.fillText("B", w/2 + 80, h/2);
    }
}
