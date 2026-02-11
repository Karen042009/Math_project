/* --- GEMINI AI INTEGRATION --- */
// IMPORTANT:
// Never hardcode API keys in a static frontend repo.
// To enable AI features, set `window.GEMINI_API_KEY = "..."` BEFORE this script loads
// (e.g. via a local-only script tag, browser extension, or server-side injection).
const GEMINI_API_KEY = (typeof window !== 'undefined' && window.GEMINI_API_KEY) ? String(window.GEMINI_API_KEY) : "";
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + encodeURIComponent(GEMINI_API_KEY);

let currentAIProblem = "";

async function generateAIProblem() {
    if (!GEMINI_API_KEY) {
        alert("AI is disabled (missing API key). Please set window.GEMINI_API_KEY to enable Gemini features.");
        return;
    }
    const topic = document.getElementById('ai-topic').value;
    const difficulty = document.getElementById('ai-difficulty').value;
    const btn = document.querySelector('.ai-controls button');
    const lang = currentLang || 'hy';
    
    // UI Loading State
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${lang === 'hy' ? 'Ստեղծվում է...' : (lang === 'ru' ? 'Генерация...' : 'Generating...')}`;
    btn.disabled = true;
    document.getElementById('ai-workspace').style.display = 'none';

    const prompt = `Generate a high-quality, educational probability problem in ${lang === 'hy' ? 'Armenian' : (lang === 'ru' ? 'Russian' : 'English')}.
    Topic: "${topic}"
    Difficulty: "${difficulty}"
    
    Requirements:
    1. Use proper mathematical terminology.
    2. Use MathJax for all formulas (e.g., \\( P(A) \\), \\( C_n^k \\)).
    3. Make it engaging and realistic.
    4. Return ONLY the raw problem text. No preamble, no solution.`;

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }]
            })
        });
        
        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        
        // Render
        document.getElementById('ai-workspace').style.display = 'block';
        document.getElementById('ai-question-text').innerText = text;
        // Trigger MathJax re-render for the question
        if (window.MathJax) MathJax.typesetPromise([document.getElementById('ai-question-text')]);
        
        currentAIProblem = text;
        
        // Reset inputs
        document.getElementById('ai-user-text').value = '';
        clearImage();
        document.getElementById('ai-feedback').style.display = 'none';
        
        // Scroll to problem
        document.querySelector('.ai-problem').scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error("AI Error:", error);
        alert(lang === 'hy' ? "Չհաջողվեց ստեղծել խնդիրը:" : "Failed to generate problem.");
    } finally {
        const ui = window.probabilityData.ui;
        btn.innerHTML = `<i class="fas fa-bolt"></i> ${ui.btn_generate_problem[lang]}`;
        btn.disabled = false;
    }
}

async function checkSolutionWithAI() {
    if (!GEMINI_API_KEY) {
        alert("AI is disabled (missing API key). Please set window.GEMINI_API_KEY to enable Gemini features.");
        return;
    }
    const userText = document.getElementById('ai-user-text').value;
    const userImg = document.getElementById('ai-user-image').files[0];
    const btn = document.querySelector('.ai-check-btn');

    if (!userText && !userImg) {
        alert(currentLang === 'hy' ? "Խնդրում ենք տրամադրել լուծումը:" : "Please provide a solution!");
        return;
    }

    const lang = currentLang || 'hy';
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${lang === 'hy' ? 'Վերլուծություն...' : (lang === 'ru' ? 'Анализ...' : 'Analyzing...')}`;
    btn.disabled = true;

    // Prepare content parts
    let parts = [
        { text: `I am a student solving this problem in ${lang}:\n"${currentAIProblem}"\n\nMy solution attempt:` },
        { text: `Text: ${userText}` }
    ];

    // Handle Image if present
    if (userImg) {
        try {
            const base64Data = await fileToGenerativePart(userImg);
            parts.push(base64Data);
            parts.push({ text: "[Image attached above]" });
        } catch (e) {
            console.error(e);
            alert("Error processing image.");
            btn.innerHTML = 'Ask AI to Check';
            btn.disabled = false;
            return;
        }
    }

    parts.push({ text: `
    Act as a professional and encouraging math tutor. Analyze the student's solution in ${lang}.
    
    Tasks:
    1. Check the correctness of the final answer.
    2. Check the logical flow and theoretical application.
    3. Provide constructive feedback. Use MathJax for formulas.
    4. If the solution is incomplete or wrong, provide a step-by-step rigorous derivation.
    
    Output Format (STRICT HTML):
    Return a <div> containing:
    - <h4>Verdict (Correct/Incorrect/Partial)</h4>
    - <h4>Detailed Analysis</h4>
    - <h4>Educational Tips</h4>
    Rate the solution X/10 at the end of the text as "Score: X/10".
    
    All text must be in ${lang === 'hy' ? 'Armenian' : (lang === 'ru' ? 'Russian' : 'English')}.
    ` });

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: parts }]
            })
        });

        const data = await response.json();
        const rawInfo = data.candidates[0].content.parts[0].text;
        
        // Clean markdown code blocks if AI wraps it
        const cleanHtml = rawInfo.replace(/```html/g, '').replace(/```/g, '');

        // Extract Score (Heuristic)
        const scoreMatch = cleanHtml.match(/(\d+)\/10/);
        const score = scoreMatch ? scoreMatch[0] : "?/10";

        // Render
        document.getElementById('ai-feedback').style.display = 'block';
        document.getElementById('ai-score').innerText = score;
        document.getElementById('ai-feedback-content').innerHTML = cleanHtml;
        
        // Re-render MathJax
         if (window.MathJax) MathJax.typesetPromise([document.getElementById('ai-feedback-content')]);

    } catch (error) {
        console.error("AI Analysis Error:", error);
        alert(lang === 'hy' ? "AI-ն չկարողացավ վերլուծել:" : "AI could not analyze.");
    } finally {
        const ui = window.probabilityData.ui;
        btn.innerHTML = `<i class="fas fa-microchip"></i> ${ui.btn_ask_ai[lang]}`;
        btn.disabled = false;
    }
}

async function solveWithAI(query) {
    if (!GEMINI_API_KEY) {
        throw new Error("AI is disabled (missing API key).");
    }
    const prompt = `Solve this math/probability expression or question briefly. Return ONLY the numeric answer or a very short logical string.
    Query: "${query}"`;
    
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
        })
    });
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

// Helper: Convert File to Base64 for Gemini
function fileToGenerativePart(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            resolve({
                inline_data: {
                    mime_type: file.type,
                    data: base64String
                }
            });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// Helper: Image Preview
function previewImage(input) {
    const container = document.getElementById('img-preview-container');
    const img = document.getElementById('img-preview');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result;
            container.style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function clearImage() {
    const fileInput = document.getElementById('ai-user-image');
    if(fileInput) fileInput.value = "";
    const container = document.getElementById('img-preview-container');
    if(container) container.style.display = 'none';
}
