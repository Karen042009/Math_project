/* 
 * AI.JS
 * Problem Generator & Automated Tutor (ProbSpace)
 * Local generator with template verification & optional Gemini API integration.
 */

let currentGeneratedProblem = null;
let aiAttempts = 0;
let currentUploadedImageBase64 = null;
let currentUploadedImageMime = null;

document.addEventListener('DOMContentLoaded', () => {
    updateAITopicsByTrack(document.getElementById('ai-track')?.value || 'probability');
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
}

async function generateAIProblem() {
    const trackSelect = document.getElementById('ai-track');
    const topicSelect = document.getElementById('ai-topic');
    const diffSelect = document.getElementById('ai-difficulty');
    const outputText = document.getElementById('ai-question-text');
    const workspace = document.getElementById('ai-workspace');
    const feedback = document.getElementById('ai-feedback');
    const scoreSpan = document.getElementById('ai-score');

    // 1. Reset state, clear past answers, image previews, and scores
    aiAttempts = 0;
    if (workspace) workspace.style.display = 'block';
    if (feedback) feedback.style.display = 'none';
    if (scoreSpan) scoreSpan.innerText = '--/100';

    const userText = document.getElementById('ai-user-text');
    if (userText) userText.value = '';

    const previewContainer = document.getElementById('img-preview-container');
    if (previewContainer) previewContainer.style.display = 'none';
    const fileInput = document.getElementById('ai-user-image');
    if (fileInput) fileInput.value = '';
    currentUploadedImageBase64 = null;
    currentUploadedImageMime = null;

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';
    if (outputText) outputText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Գեներացվում է նոր խնդիր...';

    await new Promise(r => setTimeout(r, 350));

    if (window.probabilityData && window.probabilityData.generateBatch) {
        const filters = {
            track: trackSelect ? trackSelect.value : 'probability',
            topic: topicSelect ? topicSelect.value : 'all',
            difficulty: diffSelect ? diffSelect.value : 'all'
        };

        const batch = window.probabilityData.generateBatch(1, filters);
        if (batch && batch.length > 0) {
            currentGeneratedProblem = batch[0];
            const q = currentGeneratedProblem.question[lang] || currentGeneratedProblem.question['hy'] || currentGeneratedProblem.question['en'];
            outputText.innerText = typeof q === 'string' ? q : q[lang];
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
    }
}

async function checkSolutionWithAI() {
    if (!currentGeneratedProblem) return;

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
    if (feedbackDiv) feedbackDiv.style.display = 'block';
    if (contentDiv) contentDiv.innerHTML = `<i class="fas fa-robot fa-spin"></i> Ստուգվում է լուծումը (Փորձ #${aiAttempts})...`;
    if (scoreSpan) scoreSpan.innerText = "--/100";

    // Safe retrieval of Gemini API Key from localStorage (never hardcoded in bundle)
    const apiKey = localStorage.getItem('probspace_gemini_api_key') || window.GEMINI_API_KEY || null;

    if (!apiKey || apiKey.includes('YOUR_KEY')) {
        // Fallback: Local instant assessment engine
        let isCorrect = false;
        if (currentGeneratedProblem.checkFn) {
            isCorrect = currentGeneratedProblem.checkFn(userVal, currentGeneratedProblem.answer);
        } else if (typeof compareAnswers === 'function') {
            isCorrect = compareAnswers(userVal, currentGeneratedProblem.answer);
        } else {
            isCorrect = (userVal.toLowerCase().trim() === String(currentGeneratedProblem.answer).toLowerCase().trim());
        }

        scoreSpan.innerText = isCorrect ? "100/100" : (aiAttempts >= 3 ? "20/100" : "40/100");
        scoreSpan.style.color = isCorrect ? "#06d6a0" : "#f72585";

        let html = '';
        if (isCorrect) {
            html = `<p style="color:#06d6a0; font-weight:bold;">${lang === 'hy' ? '🎉 Ճիշտ է։ Հիանալի մաթեմատիկական դատողություն։' : (lang === 'ru' ? '🎉 Правильно! Отличное математическое решение.' : '🎉 Correct! Excellent mathematical reasoning.')}</p>`;
        } else {
            if (aiAttempts === 1) {
                html = `
                    <p style="color:var(--accent-pink); font-weight:bold;">${lang === 'hy' ? 'Պատասխանը ճիշտ չէ։' : 'Answer is incorrect.'}</p>
                    <p>${lang === 'hy' ? 'Ուշադիր ստուգեք հաշվարկները և միավորները։ Փորձեք ևս մեկ անգամ։' : 'Carefully verify your calculations. Try again.'}</p>
                `;
            } else if (aiAttempts === 2) {
                const hint = currentGeneratedProblem.related_theory_hint?.[lang] || currentGeneratedProblem.related_theory_hint?.['hy'] || currentGeneratedProblem.related_theory_hint?.['en'] || '';
                html = `
                    <p style="color:var(--accent-gold); font-weight:bold;">💡 Օգտակար հուշում․</p>
                    <p>${hint || (lang === 'hy' ? 'Կիրառեք թեմային համապատասխան հիմնական բանաձևը։' : 'Apply the core formula.')}</p>
                `;
            } else {
                const sol = currentGeneratedProblem.related_theory_solution?.[lang] || currentGeneratedProblem.related_theory_solution?.['hy'] || currentGeneratedProblem.related_theory_solution?.['en'] || '';
                html = `
                    <p style="color:var(--accent-gold); font-weight:bold;">📖 Ամբողջական լուծում․</p>
                    <div style="line-height:1.6; margin-bottom:8px;">${sol}</div>
                    <div style="padding:6px 12px; background:var(--bg-input); border-radius:6px; display:inline-block;">
                        Ճիշտ պատասխան՝ <strong style="color:var(--accent-pink);">${currentGeneratedProblem.answer}</strong>
                    </div>
                `;
            }
        }
        contentDiv.innerHTML = html;
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(contentDiv);
        return;
    }

    // Remote Gemini API Integration
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts }],
                generationConfig: { response_mime_type: "application/json" }
            })
        });

        const data = await response.json();
        const rawText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        const cleanJson = rawText.replace(/```json|```/g, "").trim();
        const aiResponse = JSON.parse(cleanJson);

        scoreSpan.innerText = aiResponse.score + "/100";
        scoreSpan.style.color = aiResponse.score >= 70 ? "#06d6a0" : (aiResponse.score >= 40 ? "#ffd60a" : "#f72585");
        contentDiv.innerHTML = aiResponse.feedback_html;

        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(contentDiv);
    } catch (error) {
        console.warn("AI fallback due to:", error);
        contentDiv.innerHTML = `<p style="color:var(--text-muted);">AI ցանցային սերվերը հասանելի չէ, կատարվեց տեղային մաթեմատիկական ստուգում։ Ճիշտ պատասխան՝ <strong>${currentGeneratedProblem.answer}</strong></p>`;
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
