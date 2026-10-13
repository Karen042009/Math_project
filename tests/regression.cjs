const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const storage = new Map();
const elements = new Map();
const context = vm.createContext({
  window: { addEventListener() {} },
  document: { addEventListener() {}, getElementById: id => elements.get(id) || null,
    querySelector: () => null, querySelectorAll: () => [] },
  localStorage: { getItem: k => storage.get(k) || null, setItem: (k,v) => storage.set(k,String(v)), removeItem: k => storage.delete(k) },
  console, setTimeout, clearTimeout,
});
for (const file of ['js/data.js', 'js/lab-i18n.js', 'js/calculator.js', 'js/app.js']) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), context, {filename:file});
}
const run = code => vm.runInContext(code, context);
let failures = 0;
function test(name, fn) { try { fn(); console.log('PASS', name); } catch(e) { failures++; console.error('FAIL', name, e.message); } }
test('power binds before unary minus; negative exponents and factorials remain valid', () => {
  for (const [expr, expected] of [['-x^2',-4], ['(-x)^2',4], ['2^-3',0.125], ['-3!',-6], ['2^3^2',512]])
    assert.equal(run(`MathEvaluator.compile(${JSON.stringify(expr)})(2)`),expected);
});
test('malformed numbers are rejected completely', () => {
  for(const expr of ['1.2.3','1e+','10abc']) assert.throws(() => run(`MathEvaluator.compile(${JSON.stringify(expr)})()`));
});
test('answer checker rejects garbage and wrong integers but accepts fractions', () => {
  assert.equal(run('compareAnswers("10abc","10")'),false);
  assert.equal(run('compareAnswers("101","100")'),false);
  assert.equal(run('compareAnswers("1/6","0.1667")'),true);
  assert.equal(run('compareAnswers("1,5","1.5")'),true);
});
test('generated batches contain unique, stable parameter IDs', () => {
  const batch = context.window.probabilityData.generateBatch(50);
  assert.equal(batch.length,50);
  assert.equal(new Set(batch.map(p=>p.id)).size,50);
});
test('core calculus reference cases', () => {
  assert.ok(Math.abs(run('CalculusEngine.simpson(x=>x*x,0,1)')-1/3)<1e-10);
  assert.ok(Math.abs(run('CalculusEngine.areaBetweenCurves(x=>4,x=>x*x,-2,2)')-32/3)<1e-9);
  assert.ok(Math.abs(run('standardNormalCdf(1)')-0.841344746)<1e-7);
  assert.ok(Math.abs(run('CalculusEngine.simpson(MathEvaluator.compile("-x^2"),0,1)')+1/3)<1e-10);
  assert.notEqual(run('formatResultNumber(1e-15)'), '0');
});
test('symbolic primitives differentiate back to their integrands', () => {
  for(const expression of ['2*x^3+5*x','-x^2','sin(2*x+1)','exp(-x)','1/x']) {
    const error=run(`(() => {
      const ast = MathEvaluator.parse(${JSON.stringify(expression)});
      const primitive = MathEvaluator.antiderivative(ast);
      const F = x => MathEvaluator.evalAst(primitive,{x});
      return Math.abs(CalculusEngine.numericalDerivative(F,1.3)-MathEvaluator.evalAst(ast,{x:1.3}));
    })()`);
    assert.ok(error<1e-6,expression);
  }
});
test('generated problem identities survive application reload', () => {
  run('initProblems()');
  const before=run('JSON.stringify(allProblems.map(p=>p.id))');
  run('delete window.probabilityData.generatedProblems; initProblems()');
  assert.equal(run('JSON.stringify(allProblems.map(p=>p.id))'),before);
  storage.set('probSpaceProgressV1',JSON.stringify({solved:{101:true}}));
  assert.equal(run('Object.keys(loadProgress().solved).length'),0);
});
test('washer calculator rejects an inner radius larger than outer radius', () => {
  elements.set('btn-vol-mode-washers',{classList:{contains:()=>true}});
  for(const [id,value] of [['vol-input-rx','1'],['vol-input-inner-r','2'],['vol-input-a','0'],['vol-input-b','1']]) elements.set(id,{value});
  const out={style:{},innerHTML:''}; elements.set('vol-output-card',out);
  run('calculateVolume()');
  assert.match(out.innerHTML,/Սխալ|Error|Ошибка/);
});
test('acceleration gives velocity, position and distance with initial conditions', () => {
  elements.set('btn-motion-mode-acc',{classList:{contains:()=>true}});
  for(const [id,value] of [['motion-input-fn','4'],['motion-input-t1','0'],['motion-input-t2','5'],['motion-input-s0','3'],['motion-input-v0','2']]) elements.set(id,{value});
  const out={style:{},innerHTML:''}; elements.set('motion-output-card',out);
  run('calculateMotion()');
  assert.match(out.innerHTML,/s\(5\) = 63/);
  assert.match(out.innerHTML,/L = 60/);
  run("currentLang='en'; calculateMotion()");
  assert.match(out.innerHTML,/Final position/);
  assert.doesNotMatch(out.innerHTML,/[\u0531-\u058f]/);
});
test('hidden theory renders a lightweight outline and keeps it on repeat navigation', () => {
  let writes = 0;
  const content = { dataset:{}, _html:'', get innerHTML(){return this._html;}, set innerHTML(value){writes++;this._html=value;} };
  elements.set('theory-dynamic-render',content);
  elements.set('theory-nav',{innerHTML:''});
  run("currentTheoryTrack='integral'; currentLang='hy'; initTheory()");
  assert.ok(content.innerHTML.length < 15000, 'Rich course text must not be inserted while hidden');
  assert.ok(content.innerHTML.includes('area-between-two-curves'), 'Far-off anchors must remain navigable');
  assert.ok(!content.innerHTML.includes('\\frac'), 'Equations must be deferred until their section is visible');
  run('initTheory()');
  assert.equal(writes,1,'Revisiting the same track and language must reuse the DOM');
});
if(failures) process.exitCode=1;
