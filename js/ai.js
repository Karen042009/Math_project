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
    
    // UI Loading State
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
    btn.disabled = true;
    document.getElementById('ai-workspace').style.display = 'none';

    const prompt = `Generate a unique, creative probability problem about "${topic}" at "${difficulty}" level. 
    Return ONLY the raw text of the problem. Do not include the solution yet. 
    Make it engaging.`;

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
        currentAIProblem = text;
        
        // Reset inputs
        document.getElementById('ai-user-text').value = '';
        clearImage();
        document.getElementById('ai-feedback').style.display = 'none';
        
        // Scroll to problem
        document.querySelector('.ai-problem').scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error("AI Error:", error);
        alert("Failed to generate problem. Please try again.");
    } finally {
        btn.innerHTML = '<i class="fas fa-bolt"></i> Generate Problem';
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
        alert("Please provide a text solution or upload an image!");
        return;
    }

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    btn.disabled = true;

    // Prepare content parts
    let parts = [
        { text: `I am a student solving this probability problem:\n"${currentAIProblem}"\n\nHere is my solution attempt:` },
        { text: `Text Solution: ${userText}` }
    ];

    // Handle Image if present
    if (userImg) {
        try {
            const base64Data = await fileToGenerativePart(userImg);
            parts.push(base64Data);
            parts.push({ text: "[Attached Image of my handwritten solution]" });
        } catch (e) {
            console.error(e);
            alert("Error processing image.");
            btn.innerHTML = 'Ask AI to Check';
            btn.disabled = false;
            return;
        }
    }

    parts.push({ text: `
    Act as a strict but helpful math tutor. Analyze my solution.
    1. Is the final answer correct?
    2. Review my steps (from text or image).
    3. Identify any theoretical mistakes.
    4. Provide the correct rigorous derivation if I am wrong.
    
    Output format:
    HTML format inside a <div>.
    Use <h4> for sections (Verdict, Analysis, Strengths, Weaknesses).
    Use <ul><li> for points.
    Rate my solution X/10.
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
        alert("AI could not analyze the solution.");
    } finally {
        btn.innerHTML = '<i class="fas fa-microchip"></i> Ask AI to Check';
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
