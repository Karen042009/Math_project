const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

(async () => {
  const frames = [], calls = [];
  let running=0, peak=0;
  const context = vm.createContext({
    console,
    requestAnimationFrame: callback => frames.push(callback),
    document: {getElementById:()=>null,querySelector:()=>null},
    window: {MathJax:{startup:{promise:Promise.resolve()},typesetClear(){},async typesetPromise(nodes){
      running++;peak=Math.max(peak,running);calls.push(nodes);
      await Promise.resolve();running--;
    }}},
  });
  vm.runInContext(fs.readFileSync('js/math-renderer.js','utf8'),context);
  const element = () => ({isConnected:true,closest:()=>null,contains:()=>false});
  const first=element(), second=element();
  const a=context.queueMathTypeset(first), b=context.queueMathTypeset(first), c=context.queueMathTypeset(second);
  assert.equal(frames.length,1);
  await frames.shift()();
  await Promise.all([a,b]);
  assert.equal(calls.length,1,'Duplicate requests must be coalesced');
  await frames.shift()();await c;
  assert.equal(calls.length,2);
  assert.equal(peak,1,'MathJax must never typeset concurrently');
  const hidden=element();hidden.closest=()=>({classList:{contains:()=>false}});
  const d=context.queueMathTypeset(hidden);await frames.shift()();await d;
  assert.equal(calls.length,2,'Hidden pages must not consume typesetting work');
  const removed=element();const e=context.queueMathTypeset(removed);
  context.clearMathContainer(removed);await e;await frames.shift()();
  assert.equal(calls.length,2,'Removed nodes must not be processed later');
  const body=element();body.dataset={};body.classList={contains:name=>name==='theory-body'};
  const f=context.queueMathTypeset(body);await frames.shift()();await f;
  assert.equal(body.dataset.mathRendered,'true');
  const count=calls.length;await context.queueMathTypeset(body);
  assert.equal(calls.length,count,'Completed theory equations must not be rendered again on navigation');
  console.log('PASS math queue: deduplicated, serialized, cancellable; completed theory is cached');
})().catch(error=>{console.error(error);process.exitCode=1;});
