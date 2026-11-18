const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function setup() {
    const elements = new Map();
    for (const id of ['ai-track','ai-topic','ai-difficulty','ai-question-text','ai-user-text','ai-feedback','ai-score','ai-feedback-content','ai-workspace','img-preview-container','ai-user-image','ai-check-btn','ai-generate-btn']) {
        elements.set(id, { value: '', innerText: '', innerHTML: '', style: {}, disabled: false });
    }
    elements.get('ai-track').value = 'probability';
    elements.get('ai-topic').value = 'all';
    elements.get('ai-difficulty').value = 'beginner';
    const ctx = vm.createContext({
        window: { probabilityData: { generateBatch: () => [] } },
        document: { addEventListener() {}, getElementById: id => elements.get(id) },
        localStorage: { getItem: () => 'test-key' },
        currentLang: 'en', compareAnswers: (a,b) => a === b,
        setTimeout: (fn, ms) => setTimeout(fn, ms === 350 ? 0 : ms), clearTimeout,
        AbortController, console: { warn() {} }, alert() {},
        fetch: async () => { throw new Error('Network unavailable'); },
    });
    vm.runInContext(fs.readFileSync('js/ai.js', 'utf8'), ctx);
    vm.runInContext(`currentGeneratedProblem = { question: { en:'Test question' }, answer:'0.25', related_theory_hint:{ en:'Use the fraction formula' }, related_theory_solution:{ en:'FULL SOLUTION' } };`, ctx);
    return { ctx, elements, run: code => vm.runInContext(code, ctx) };
}

(async () => {
    {
        const { run, elements } = setup();
        const pending = run('generateAIProblem()');
        assert.equal(run('currentGeneratedProblem'), null, 'Starting generation must immediately invalidate the old problem');
        await pending;
        assert.equal(run('currentGeneratedProblem'), null);
        assert.equal(elements.get('ai-check-btn').disabled, true);
        elements.get('ai-user-text').value = '0.25';
        await run('checkSolutionWithAI()');
        assert.equal(run('aiAttempts'), 0, 'A failed generation must not check an old problem');
    }
    console.log('PASS failed/pending generation cannot check the previous problem');
    {
        const { run, elements } = setup();
        elements.get('ai-user-text').value = 'wrong';
        await run('checkSolutionWithAI()');
        assert.doesNotMatch(elements.get('ai-feedback-content').innerHTML, /0\.25|FULL SOLUTION/);
        assert.equal(elements.get('ai-score').innerText, '40/100');
        await run('checkSolutionWithAI()');
        assert.match(elements.get('ai-feedback-content').innerHTML, /Use the fraction formula/);
        assert.doesNotMatch(elements.get('ai-feedback-content').innerHTML, /0\.25|FULL SOLUTION/);
        await run('checkSolutionWithAI()');
        assert.match(elements.get('ai-feedback-content').innerHTML, /FULL SOLUTION/);
        assert.match(elements.get('ai-feedback-content').innerHTML, /0\.25/);
        assert.equal(run('aiAttempts'), 3);
    }
    console.log('PASS network fallback runs local validation and preserves all three hint stages');
    {
        const { run, elements } = setup();
        elements.get('ai-user-text').value = '0.25';
        await run('checkSolutionWithAI()');
        assert.equal(elements.get('ai-score').innerText, '100/100');
        assert.match(elements.get('ai-feedback-content').innerHTML, /Correct/);
    }
    console.log('PASS a correct answer receives a local score after a remote failure');
    {
        const { ctx, run, elements } = setup();
        let resolve;
        ctx.fetch = () => new Promise(r => { resolve = r; });
        elements.get('ai-user-text').value = 'wrong';
        const pending = run('checkSolutionWithAI()');
        await run('checkSolutionWithAI()');
        assert.equal(run('aiAttempts'), 1, 'Concurrent clicks must not consume additional attempts');
        run('resetAISession()');
        resolve({ ok: true, json: async () => ({ candidates:[{content:{parts:[{text:JSON.stringify({score:99,feedback_html:'STALE RESPONSE'})}]}}] }) });
        await pending;
        assert.doesNotMatch(elements.get('ai-feedback-content').innerHTML, /STALE RESPONSE/);
        assert.equal(run('currentGeneratedProblem'), null);
        assert.equal(elements.get('ai-score').innerText, '--/100');
    }
    console.log('PASS session reset cancels stale feedback and concurrent check attempts');
    {
        const { ctx, run, elements } = setup();
        ctx.fetch = async () => ({ ok: false, json: async () => ({ error: {} }) });
        elements.get('ai-user-text').value = 'wrong';
        await run('checkSolutionWithAI()');
        assert.equal(elements.get('ai-score').innerText, '40/100');
        assert.doesNotMatch(elements.get('ai-feedback-content').innerHTML, /0\.25/);
    }
    console.log('PASS HTTP errors use the same graded local fallback');
})().catch(error => { console.error(error); process.exitCode = 1; });
