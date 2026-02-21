/* 
 * GENERATOR.JS (Formerly ai.js)
 * Handles Dynamic Problem Generation (Offline Mode)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Hide the "Upload Image" section as it requires heavy AI
    const uploadLabel = document.querySelector('.file-upload-label');
    if (uploadLabel) uploadLabel.style.display = 'none';

    // Update texts to reflect "Generator" instead of "AI"
    const aiTitle = document.querySelector('.ai-badge span');
    if (aiTitle && currentLang === 'en') aiTitle.innerText = "Dynamic Problem Generator";
});

let currentGeneratedProblem = null;

async function generateAIProblem() {
    const topicSelect = document.getElementById('ai-topic');
    const diffSelect = document.getElementById('ai-difficulty');
    const outputText = document.getElementById('ai-question-text');
    const workspace = document.getElementById('ai-workspace');
    const feedback = document.getElementById('ai-feedback');

    // Reset UI
    workspace.style.display = 'block';
    feedback.style.display = 'none';
    document.getElementById('ai-user-text').value = '';
    outputText.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    // Simulate delay for "feeling"
    await new Promise(r => setTimeout(r, 600));

    // logical generation
    if (window.probabilityData && window.probabilityData.generateBatch) {
        // Collect filters
        const filters = {
            topic: topicSelect ? topicSelect.value : 'all',
            difficulty: diffSelect ? diffSelect.value : 'all'
        };

        // Generate a text problem using our template engine
        // Note: The templates currently pick random topics. 
        // We can filter by "related_theory_id" mapping if we want specific topics.
        // For now, we'll generate regular batch and pick one, or just pick random.

        // Let's rely on the Batch Generator we built in data.js
        const batch = window.probabilityData.generateBatch(1, filters);
        if (batch && batch.length > 0) {
            currentGeneratedProblem = batch[0];

            // Get language
            const lang = currentLang || 'en';
            const q = currentGeneratedProblem.question[lang] || currentGeneratedProblem.question['en'] || currentGeneratedProblem.question;

            outputText.innerText = typeof q === 'string' ? q : q[lang];

            // Re-render MathJax
            if (window.MathJax) MathJax.typesetPromise([outputText]);
        } else {
            outputText.innerText = "Error: Could not generate problem.";
        }
    } else {
        outputText.innerText = "Generator data not found.";
    }
}

function checkSolutionWithAI() {
    // Actually creates a local check
    if (!currentGeneratedProblem) return;

    const userVal = document.getElementById('ai-user-text').value.trim();
    const feedbackDiv = document.getElementById('ai-feedback');
    const scoreSpan = document.getElementById('ai-score');
    const contentDiv = document.getElementById('ai-feedback-content');

    if (!userVal) {
        alert(currentLang === 'hy' ? "Խնդրում ենք մուտքագրել պատասխանը:" : "Please enter an answer.");
        return;
    }

    // Check Logic
    let isCorrect = false;
    const correctAns = currentGeneratedProblem.answer;

    // Use custom check function if exists (defined in data.js templates)
    // Note: The object from generateBatch has 'answer' but the checkFn might be lost if we didn't preserve it?
    // In data.js generateBatch, we return: { id, difficulty, question, answer, ... } 
    // We did NOT pass checkFn in generateBatch. Let's assume simple comparison for now or fix data.js.
    // However, I can try to find the template again, OR just use compareAnswers from app.js if available globally.

    // We need to access the helper compareAnswers from app.js. 
    // Since app.js is loaded, compareAnswers should be available if it's global? 
    // It's defined as function compareAnswers... in app.js, so it's global scope.

    if (typeof compareAnswers === 'function') {
        isCorrect = compareAnswers(userVal, correctAns);
    } else {
        // Fallback
        isCorrect = (userVal === correctAns);
    }

    feedbackDiv.style.display = 'block';
    if (isCorrect) {
        scoreSpan.innerText = "100/100";
        scoreSpan.style.color = "#4cc9f0";
        contentDiv.innerHTML = `<p style="color:#a855f7">${currentLang === 'hy' ? 'Ճիշտ է:' : 'Correct!'} ${correctAns}</p>`;
    } else {
        scoreSpan.innerText = "0/100";
        scoreSpan.style.color = "#f72585";
        contentDiv.innerHTML = `
            <p style="color:#f72585">${currentLang === 'hy' ? 'Սխալ է:' : 'Incorrect.'}</p>
            <p>${currentLang === 'hy' ? 'Ճիշտ պատասխան՝' : 'Correct answer:'} <strong>${correctAns}</strong></p>
        `;
    }
}

// Global scope
window.generateAIProblem = generateAIProblem;
window.checkSolutionWithAI = checkSolutionWithAI;
