const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const E=require('../js/research-engine.js');
const near=(a,b,tol=1e-12)=>assert.ok(Math.abs(a-b)<tol,`${a} != ${b}`);

let calls=0;
const comparison=E.compare({fn:x=>{calls++;return x*x;},n:99});
assert.equal(calls,comparison.reduce((s,r)=>s+r.evaluations,0));
assert.equal(comparison[0].evaluations,99);
assert.equal(comparison[1].evaluations,100);
assert.equal(comparison[2].evaluations,101);
near(comparison[2].estimate,1/3);
near(E.compare({fn:x=>x*x,a:1,b:0,n:100})[2].estimate,-1/3);
assert.throws(()=>E.compare({fn:()=>Infinity,n:30}));
console.log('PASS exact Simpson polynomial, reversed bounds, odd interval rounding and honest evaluation counts');

const p=E.planSamples({fn:x=>x*x,epsilon:.01});
const finer=E.planSamples({fn:x=>x*x,epsilon:.005});
assert.ok(Math.abs(finer.estimateN-4*p.estimateN)<=3);
assert.ok(E.planSamples({fn:x=>x*x,confidence:.99}).estimateN>p.estimateN);
assert.equal(p.piBoundN,Math.ceil(8*Math.log(40)/.01**2));
assert.equal(E.planSamples({fn:()=>4}).estimateN,30);
assert.throws(()=>E.planSamples({fn:x=>x,epsilon:0}));
assert.throws(()=>E.planSamples({fn:x=>x,confidence:.9}));
assert.throws(()=>E.planSamples({fn:x=>x,pilot:5}));
console.log('PASS pilot-based precision scaling, confidence levels and independent-uniform π bound');

const elements=new Map([
    ['mc-seed',{value:'0',setCustomValidity(){},reportValidity(){}}],
    ['mc-speed-slider',{value:'100'}],
    ['mc-stat-approx',{}],['mc-stat-stderr',{}],
]);
const context=vm.createContext({window:{addEventListener(){}},document:{addEventListener(){},getElementById:id=>elements.get(id),querySelectorAll:()=>[]},console,setTimeout,clearTimeout});
for(const file of ['js/research-engine.js','js/calculator.js','js/simulations.js'])vm.runInContext(fs.readFileSync(file,'utf8'),context);
const run=code=>vm.runInContext(code,context);
const calculator=run('CalculusEngine.monteCarloSampleMean(x=>x*x,0,1,100,0)');
const reference=E.integrals({n:100,functions:[x=>x*x]}).results[0];
near(calculator.estimate,reference.estimate);near(calculator.standardError,reference.se);
run("mcMethod='sample_mean';mcA=0;mcB=1;mcTargetN=100;mcStart()");
near(run('mcMoments.mean'),reference.estimate);
near(Number(elements.get('mc-stat-stderr').innerText),reference.se,0.00000051);
run('mcStart()');near(run('mcMoments.mean'),reference.estimate);
assert.equal(run('mcCurrentN'),100);
console.log('PASS main calculator, live simulation and research calculator share seed, sample count, estimate and SE');

const storage=new Map();
function historyContext(blocked=false){
    const c=vm.createContext({window:{},document:{addEventListener(){},querySelectorAll:()=>[]},localStorage:{getItem:k=>{if(blocked)throw Error('blocked');return storage.get(k)||null;},setItem:(k,v)=>{if(blocked)throw Error('blocked');storage.set(k,v);}},console});
    vm.runInContext(fs.readFileSync('js/experiment-history.js','utf8'),c);return c;
}
const h=historyContext();
for(let i=0;i<35;i++)h.window.ExperimentHistory.add('integral',{expression:'x^2',seed:String(i),n:'100'},{estimate:i});
assert.equal(h.window.ExperimentHistory.list().length,30);
const restored=historyContext().window.ExperimentHistory.list();
assert.equal(restored[0].fields.seed,'34');assert.equal(restored[0].summary.estimate,34);
assert.equal(restored[29].fields.seed,'5');
const memory=historyContext(true);memory.window.ExperimentHistory.add('pi',{seed:'0',n:'100'},{estimate:3.2});assert.equal(memory.window.ExperimentHistory.list().length,1);
storage.set('probspaceExperimentsV1','{"bad":"data"}');assert.equal(historyContext().window.ExperimentHistory.list().length,0);
console.log('PASS saved parameters/results survive reload, cap at 30 and degrade safely without storage');
