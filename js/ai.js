/* 
 * AI.JS
 * Problem Generator & Automated Tutor (ProbSpace)
 * Local generator with template verification & optional Gemini API integration.
 */

let currentGeneratedProblem = null;
let aiAttempts = 0;
let currentUploadedImageBase64 = null;
let currentUploadedImageMime = null;
let aiSessionRevision = 0;
let aiChecking = false;
let aiController = null;

document.addEventListener('DOMContentLoaded', () => {
    updateAITopicsByTrack(document.getElementById('ai-track')?.value || 'probability');
    document.getElementById('ai-check-btn').disabled = true;
    ['ai-track', 'ai-topic', 'ai-difficulty'].forEach(id => {
        document.getElementById(id)?.addEventListener('change', resetAISession);
    });
});

function updateAITopicsByTrack(track) {
    const topicSelect = document.getElementById('ai-topic');
    if (!topicSelect) return;
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';

    let options = [];
    if (track === 'probability') {
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
            { val: 'definite', text: { hy: 'Որոշյալ ինտեգրալ', en: 'Definite Integral', ru: 'Определенный интеграл' } },
            { val: 'area', text: { hy: 'Մակերես կորի տակ և կորերի միջև', en: 'Area under & between curves', ru: 'Площадь под кривой' } },
            { val: 'volume', text: { hy: 'Պտտման մարմինների ծավալ', en: 'Volume of Revolution', ru: 'Объем тел вращения' } },
            { val: 'kinematics', text: { hy: 'Շարժում և կինեմատիկա', en: 'Kinematics & Motion', ru: 'Кинематика и путь' } },
            { val: 'numerical', text: { hy: 'Թվային և Մոնտե Կառլո ինտեգրում', en: 'Numerical & Monte Carlo', ru: 'Численное интегрирование' } }
        ];
    }

    topicSelect.innerHTML = options.map(o => `
        <option value="${o.val}">${o.text[lang] || o.text['hy'] || o.text['en']}</option>
    `).join('');
}

function resetAISession() {
    aiSessionRevision++;
    aiController?.abort();
    aiController = null;
    aiChecking = false;
    currentGeneratedProblem = null;
    aiAttempts = 0;
    currentUploadedImageBase64 = null;
    currentUploadedImageMime = null;

    const qText = document.getElementById('ai-question-text');
    if (qText) qText.innerText = '';
    const userText = document.getElementById('ai-user-text');
    if (userText) userText.value = '';
    const feedback = document.getElementById('ai-feedback');
    if (feedback) feedback.style.display = 'none';
    const workspace = document.getElementById('ai-workspace');
    if (workspace) workspace.style.display = 'none';

    const previewContainer = document.getElementById('img-preview-container');
    if (previewContainer) previewContainer.style.display = 'none';
    const fileInput = document.getElementById('ai-user-image');
    if (fileInput) fileInput.value = '';
    const content = document.getElementById('ai-feedback-content');
    if (content) content.innerHTML = '';
    const score = document.getElementById('ai-score');
    if (score) { score.innerText = '--/100'; score.style.color = ''; }
    const check = document.getElementById('ai-check-btn');
    if (check) check.disabled = true;
    const generate = document.getElementById('ai-generate-btn');
    if (generate) generate.disabled = false;
}

async function generateAIProblem() {
    resetAISession();
    const revision = aiSessionRevision;
    const trackSelect = document.getElementById('ai-track');
    const topicSelect = document.getElementById('ai-topic');
    const diffSelect = document.getElementById('ai-difficulty');
    const outputText = document.getElementById('ai-question-text');
    const workspace = document.getElementById('ai-workspace');
    const generateBtn = document.getElementById('ai-generate-btn');
    if (generateBtn) generateBtn.disabled = true;
    const filters = {
        track: trackSelect ? trackSelect.value : 'probability',
        topic: topicSelect ? topicSelect.value : 'all',
        difficulty: diffSelect ? diffSelect.value : 'all'
    };

    if (workspace) workspace.style.display = 'block';

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';
    if (outputText) outputText.innerText = ({ hy:'Գեներացվում է նոր խնդիր…', en:'Generating a new problem…', ru:'Создаётся новая задача…' })[lang];

    await new Promise(r => setTimeout(r, 350));
    if (revision !== aiSessionRevision) return;

    try {
        const batch = window.probabilityData?.generateBatch?.(1, filters);
        if (batch && batch.length > 0) {
            currentGeneratedProblem = batch[0];
            const q = currentGeneratedProblem.question[lang] || currentGeneratedProblem.question['hy'] || currentGeneratedProblem.question['en'];
            outputText.innerText = typeof q === 'string' ? q : q[lang];
            const check = document.getElementById('ai-check-btn');
            if (check) check.disabled = false;
            if (window.MathJax && window.MathJax.typesetPromise) {
                queueMathTypeset(outputText);
            }
        } else {
            const noMatchMsg = {
                hy: "Տվյալ թեմայով և բարդությամբ ձևանմուշ դեռ առկա չէ։ Խնդրում ենք ընտրել այլ թեմա կամ «Բոլոր թեմաները»։",
                en: "No template matches the selected topic and difficulty. Please select another topic or 'All Topics'.",
                ru: "Шаблон для выбранной темы и сложности не найден. Пожалуйста, выберите другую тему или «Все темы»."
            };
            outputText.innerText = noMatchMsg[lang] || noMatchMsg['hy'];
        }
    } catch (error) {
        currentGeneratedProblem = null;
        const check = document.getElementById('ai-check-btn');
        if (check) check.disabled = true;
        outputText.innerText = ({ hy:'Խնդիրը չստեղծվեց։ Ընտրեք այլ թեմա կամ փորձեք կրկին։', en:'The problem could not be generated. Choose another topic or try again.', ru:'Не удалось создать задачу. Выберите другую тему или повторите попытку.' })[lang];
    } finally {
        if (revision === aiSessionRevision && generateBtn) generateBtn.disabled = false;
    }
}

function renderLocalAIFeedback(problem, answer, attempt, lang, networkFallback = false) {
    const text = (hy, en, ru) => ({ hy, en, ru })[lang] || en;
    const isCorrect = problem.checkFn ? problem.checkFn(answer, problem.answer)
        : typeof compareAnswers === 'function' ? compareAnswers(answer, problem.answer)
        : answer.toLowerCase().trim() === String(problem.answer).toLowerCase().trim();
    const score = document.getElementById('ai-score');
    score.innerText = isCorrect ? '100/100' : attempt >= 3 ? '20/100' : '40/100';
    score.style.color = isCorrect ? '#06d6a0' : '#f72585';
    let html = networkFallback ? `<p class="research-note">${text('Հեռավար ստուգումը հասանելի չէ։ Կատարվեց պատասխանի տեղային ստուգում։', 'Remote checking is unavailable. Your answer was checked locally.', 'Удалённая проверка недоступна. Ответ проверен локально.')}</p>` : '';
    if (isCorrect) {
        html += `<p style="color:#06d6a0;font-weight:bold">${text('Ճիշտ պատասխան է։', 'Correct answer.', 'Ответ верный.')}</p>`;
    } else if (attempt === 1) {
        html += `<p>${text('Պատասխանը ճիշտ չէ։ Ստուգեք հաշվարկներն ու միավորները և փորձեք կրկին։', 'The answer is incorrect. Check your calculations and units, then try again.', 'Ответ неверный. Проверьте вычисления и единицы измерения и попробуйте снова.')}</p>`;
    } else if (attempt === 2) {
        const hint = problem.related_theory_hint?.[lang] || problem.related_theory_hint?.hy || problem.related_theory_hint?.en;
        html += `<p><strong>${text('Օգտակար հուշում', 'Helpful hint', 'Подсказка')}</strong></p><div>${hint || text('Կիրառեք թեմային համապատասխան հիմնական բանաձևը։', 'Apply the core formula for this topic.', 'Примените основную формулу этой темы.')}</div>`;
    } else {
        const solution = problem.related_theory_solution?.[lang] || problem.related_theory_solution?.hy || problem.related_theory_solution?.en || '';
        const safeAnswer = String(problem.answer).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
        html += `<p><strong>${text('Ամբողջական լուծում', 'Complete solution', 'Полное решение')}</strong></p><div>${solution}</div><p>${text('Ճիշտ պատասխան՝', 'Correct answer:', 'Правильный ответ:')} <strong>${safeAnswer}</strong></p>`;
    }
    const content = document.getElementById('ai-feedback-content');
    if (typeof clearMathContainer === 'function') clearMathContainer(content);
    content.innerHTML = html;
    if (window.MathJax?.typesetPromise) queueMathTypeset(content);
}

async function checkSolutionWithAI() {
    if (!currentGeneratedProblem || aiChecking) return;

    const userVal = document.getElementById('ai-user-text')?.value.trim();
    const feedbackDiv = document.getElementById('ai-feedback');
    const scoreSpan = document.getElementById('ai-score');
    const contentDiv = document.getElementById('ai-feedback-content');
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';

    if (!userVal) {
        const alertMsg = {
            hy: "Խնդրում ենք մուտքագրել ձեր պատասխանը կամ լուծման քայլերը։",
            en: "Please enter your answer or solution steps.",
            ru: "Пожалуйста, введите ваш ответ или шаги решения."
        };
        alert(alertMsg[lang] || alertMsg['hy']);
        return;
    }

    aiAttempts++;
    aiChecking = true;
    const problem = currentGeneratedProblem, attempt = aiAttempts, revision = aiSessionRevision;
    const checkBtn = document.getElementById('ai-check-btn');
    if (checkBtn) checkBtn.disabled = true;
    if (feedbackDiv) feedbackDiv.style.display = 'block';
    if (contentDiv) contentDiv.innerText = ({ hy:`Ստուգվում է պատասխանը․ փորձ ${attempt}…`, en:`Checking the answer: attempt ${attempt}…`, ru:`Проверка ответа: попытка ${attempt}…` })[lang];
    if (scoreSpan) scoreSpan.innerText = "--/100";

    // Both offline checking and remote failures use the same pedagogical stages.
    const apiKey = localStorage.getItem('probspace_gemini_api_key') || window.GEMINI_API_KEY || null;

    if (!apiKey || apiKey.includes('YOUR_KEY')) {
        try {
            renderLocalAIFeedback(problem, userVal, attempt, lang);
        } finally {
            aiChecking = false;
            if (checkBtn) checkBtn.disabled = false;
        }
        return;
    }

    // Remote Gemini API Integration
    const controller = new AbortController();
    aiController = controller;
    const timeout = setTimeout(() => controller.abort(), 10000);
    try {
        let tierHint = "";
        if (aiAttempts === 1) {
            tierHint = "Student submitted attempt #1. If wrong, do NOT reveal the answer; pinpoint the misconception politely.";
        } else if (aiAttempts === 2) {
            tierHint = "Attempt #2. If wrong, provide a helpful formula or intermediate hint, but do NOT give the final numerical answer.";
        } else {
            tierHint = "Attempt #3+. If wrong, provide the complete pedagogical solution with all steps and final answer.";
        }

        const prompt = `You are a strict, pedagogical Mathematics Tutor on ProbSpace.
Analyze the student's solution:
PROBLEM: ${currentGeneratedProblem.question[lang] || currentGeneratedProblem.question['hy'] || currentGeneratedProblem.question['en']}
CORRECT KEY ANSWER: ${currentGeneratedProblem.answer}
STUDENT ANSWER: "${userVal}"
ATTEMPT: ${tierHint}

Respond ONLY in ${lang === 'hy' ? 'Armenian' : (lang === 'ru' ? 'Russian' : 'English')}.
Format output as pure JSON without markdown backticks:
{
  "score": number,
  "feedback_html": "string with HTML tags"
}`;

        const parts = [{ text: prompt }];
        if (currentUploadedImageBase64) {
            parts.push({
                inline_data: {
                    mime_type: currentUploadedImageMime || 'image/png',
                    data: currentUploadedImageBase64
                }
            });
        }

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            signal: controller.signal,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts }],
                generationConfig: { response_mime_type: "application/json" }
            })
        });

        if (!response.ok) throw new Error('Remote check failed');
        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        const cleanJson = rawText.replace(/```json|```/g, "").trim();
        const aiResponse = JSON.parse(cleanJson);
        if (!Number.isFinite(aiResponse.score) || aiResponse.score < 0 || aiResponse.score > 100 || typeof aiResponse.feedback_html !== 'string') throw new Error('Invalid feedback');
        if (revision !== aiSessionRevision || currentGeneratedProblem !== problem) return;

        scoreSpan.innerText = aiResponse.score + "/100";
        scoreSpan.style.color = aiResponse.score >= 70 ? "#06d6a0" : (aiResponse.score >= 40 ? "#ffd60a" : "#f72585");
        contentDiv.innerHTML = aiResponse.feedback_html;

        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(contentDiv);
    } catch (error) {
        if (revision === aiSessionRevision && currentGeneratedProblem === problem) renderLocalAIFeedback(problem, userVal, attempt, lang, true);
    } finally {
        clearTimeout(timeout);
        if (revision === aiSessionRevision) {
            aiChecking = false;
            aiController = null;
            if (checkBtn) checkBtn.disabled = !currentGeneratedProblem;
        }
    }
}

function previewImage(input) {
    if (input.files && input.files[0]) {
        const file = input.files[0];
        currentUploadedImageMime = file.type || 'image/png';
        const reader = new FileReader();
        reader.onload = function (e) {
            const preview = document.getElementById('img-preview');
            if (preview) preview.src = e.target.result;
            const container = document.getElementById('img-preview-container');
            if (container) container.style.display = 'block';

            // Extract base64 without prefix
            const dataUrl = e.target.result;
            currentUploadedImageBase64 = dataUrl.split(',')[1] || null;
        };
        reader.readAsDataURL(file);
    }
}

// Global Exports
window.updateAITopicsByTrack = updateAITopicsByTrack;
window.generateAIProblem = generateAIProblem;
window.checkSolutionWithAI = checkSolutionWithAI;
window.resetAISession = resetAISession;
window.previewImage = previewImage;
