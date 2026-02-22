/* 
 * AI.JS
 * Handles AI-powered Problem Analysis & Tutoring
 */

document.addEventListener('DOMContentLoaded', () => {
    // Show the "Upload Image" section as we now have AI
    const uploadLabel = document.querySelector('.file-upload-label');
    if (uploadLabel) uploadLabel.style.display = 'inline-block';

    // Ensure AI Branding is correct
    const aiTitle = document.querySelector('.ai-badge span');
    if (aiTitle) {
        const labels = { hy: "AI Խորացված Ուսուցիչ", en: "AI Advanced Tutor", ru: "AI Продвинутый Тьютор" };
        aiTitle.innerText = labels[currentLang] || labels['en'];
    }
});

let currentGeneratedProblem = null;
let aiAttempts = 0;

function resetAISession() {
    currentGeneratedProblem = null;
    aiAttempts = 0;
    document.getElementById('ai-question-text').innerText = '';
    document.getElementById('ai-user-text').value = '';
    document.getElementById('ai-feedback').style.display = 'none';
    document.getElementById('ai-workspace').style.display = 'none';
    
    // Clear image preview
    const previewContainer = document.getElementById('img-preview-container');
    if (previewContainer) previewContainer.style.display = 'none';
    const fileInput = document.getElementById('ai-user-image');
    if (fileInput) fileInput.value = '';
}

async function generateAIProblem() {
    const topicSelect = document.getElementById('ai-topic');
    const diffSelect = document.getElementById('ai-difficulty');
    const outputText = document.getElementById('ai-question-text');
    const workspace = document.getElementById('ai-workspace');
    const feedback = document.getElementById('ai-feedback');

    // Reset UI & Counter
    aiAttempts = 0;
    workspace.style.display = 'block';
    feedback.style.display = 'none';
    document.getElementById('ai-user-text').value = '';
    outputText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    // Simulate delay for "feeling"
    await new Promise(r => setTimeout(r, 600));

    if (window.probabilityData && window.probabilityData.generateBatch) {
        const filters = {
            topic: topicSelect ? topicSelect.value : 'all',
            difficulty: diffSelect ? diffSelect.value : 'all'
        };

        const batch = window.probabilityData.generateBatch(1, filters);
        if (batch && batch.length > 0) {
            currentGeneratedProblem = batch[0];
            const lang = currentLang || 'en';
            const q = currentGeneratedProblem.question[lang] || currentGeneratedProblem.question['en'] || currentGeneratedProblem.question;
            outputText.innerText = typeof q === 'string' ? q : q[lang];
            if (window.MathJax) MathJax.typesetPromise([outputText]);
        } else {
            outputText.innerText = "Error: Could not generate problem.";
        }
    }
}

async function checkSolutionWithAI() {
    if (!currentGeneratedProblem) return;

    const userVal = document.getElementById('ai-user-text').value.trim();
    const feedbackDiv = document.getElementById('ai-feedback');
    const scoreSpan = document.getElementById('ai-score');
    const contentDiv = document.getElementById('ai-feedback-content');

    if (!userVal) {
        alert(currentLang === 'hy' ? "Խնդրում ենք մուտքագրել պատասխանը կամ լուծումը:" : "Please enter your answer or solution.");
        return;
    }

    aiAttempts++;
    feedbackDiv.style.display = 'block';
    contentDiv.innerHTML = `<i class="fas fa-robot fa-spin"></i> AI is analyzing (Attempt #${aiAttempts})...`;
    scoreSpan.innerText = "--/100";

    // If API KEY is missing, fallback to local check
    if (!window.GEMINI_API_KEY || window.GEMINI_API_KEY.includes("YOUR_KEY")) {
        let isCorrect = (typeof compareAnswers === 'function') 
            ? compareAnswers(userVal, currentGeneratedProblem.answer)
            : (userVal === currentGeneratedProblem.answer);

        scoreSpan.innerText = isCorrect ? "100/100" : "0/100";
        scoreSpan.style.color = isCorrect ? "#4cc9f0" : "#f72585";
        contentDiv.innerHTML = isCorrect 
            ? `<p>${currentLang === 'hy' ? 'Ճիշտ է:' : 'Correct!'} ${currentGeneratedProblem.answer}</p>`
            : `<p>${currentLang === 'hy' ? 'Սխալ է:' : 'Incorrect.'} ${currentLang === 'hy' ? 'Ճիշտ պատասխան՝' : 'Expected:'} ${currentGeneratedProblem.answer}</p>`;
        return;
    }

    try {
        let tierHint = "";
        if (aiAttempts === 1) {
            tierHint = "The student just submitted their FIRST attempt. If they are wrong, DON'T give the answer. Just tell them it's wrong and highlight where exactly they might be mistaken.";
        } else if (aiAttempts === 2) {
            tierHint = "This is the SECOND attempt. If they are still wrong, provide a SMART HINT or a formula they should use, but still DON'T reveal the final answer.";
        } else {
            tierHint = "This is their 3rd or more attempt. If they are wrong, reveal the FULL CORRECT SOLUTION and explaining the steps clearly.";
        }

        const prompt = `You are a professional Mathematics Tutor on the ProbSpace platform.
        Analyze the student's solution for the following probability problem.
        
        PROBLEM: ${currentGeneratedProblem.question[currentLang] || currentGeneratedProblem.question['en']}
        CORRECT KEY ANSWER: ${currentGeneratedProblem.answer}
        
        STUDENT SUBMISSION:
        "${userVal}"
        
        CONTEXT: ${tierHint}
        
        TASK:
        1. Check if the logic is correct.
        2. Assign a score from 0 to 100.
        3. Provide feedback based on the attempt number provided in CONTEXT.
        
        IMPORTANT: Respond ONLY in ${currentLang === 'hy' ? 'Armenian' : (currentLang === 'ru' ? 'Russian' : 'English')}.
        Format your response as a valid JSON object:
        {
          "score": number,
          "feedback_html": "string with HTML tags"
        }`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${window.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { response_mime_type: "application/json" }
            })
        });

        const data = await response.json();
        const rawText = data.candidates[0].content.parts[0].text;
        // Clean markdown if AI returned it
        const cleanJson = rawText.replace(/```json|```/g, "").trim();
        const aiResponse = JSON.parse(cleanJson);

        scoreSpan.innerText = aiResponse.score + "/100";
        scoreSpan.style.color = aiResponse.score >= 70 ? "#4cc9f0" : (aiResponse.score >= 40 ? "#ffd60a" : "#f72585");
        contentDiv.innerHTML = aiResponse.feedback_html;

        if (window.MathJax) MathJax.typesetPromise([contentDiv]);

    } catch (error) {
        console.error("AI Error:", error);
        contentDiv.innerHTML = `<p style="color:#f72585">AI Error: Could not connect to the brain. Please try again later.</p>`;
    }
}

// Preview image logic
function previewImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('img-preview').src = e.target.result;
            document.getElementById('img-preview-container').style.display = 'block';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// Global scope
window.generateAIProblem = generateAIProblem;
window.checkSolutionWithAI = checkSolutionWithAI;
window.resetAISession = resetAISession;
window.previewImage = previewImage;

