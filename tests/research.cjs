const assert = require('node:assert/strict');
const E = require('../js/research-engine.js');
const near = (a, b, tol = 1e-12) => assert.ok(Math.abs(a - b) < tol, `${a} != ${b}`);

// Values from NumPy RandomState(0), including checkpoints beyond the first MT twist.
const r = new E.RandomState(0);
const expected = [0.5488135039273248, 0.7151893663724195, 0.6027633760716439, 0.5448831829968969, 0.4236547993389047];
expected.forEach(value => near(r.uniform(), value));
const d = E.integrals({});
const table = [
    [5, .3304793703028348, 1.77097472990122],
    [10, .41319910235287555, 1.8839587728066116],
    [100, .30665183013538083, 1.6724591652277838],
    [1000, .3303858549700325, 1.7126589787588016],
    [10000, .33033443826015096, 1.7127280649638577],
];
d.rows.forEach((row, i) => { assert.equal(row.n, table[i][0]); row.results.forEach((v, j) => near(v.estimate, table[i][j + 1])); });
assert.deepEqual(d, E.integrals({ seed: 0 }));
assert.notEqual(d.results[0].estimate, E.integrals({ seed: 1 }).results[0].estimate);
console.log('PASS David’s NumPy seed=0 samples and all five comparison rows');

const forward = E.integrals({ seed: 7, n: 1000, functions: [x => x * x], a: 0, b: 2 });
const reverse = E.integrals({ seed: 7, n: 1000, functions: [x => x * x], a: 2, b: 0 });
assert.ok(forward.results[0].estimate > 0 && reverse.results[0].estimate < 0);
const constant = E.integrals({ n: 50, functions: [() => -3], a: 2, b: -1 }).results[0];
assert.equal(constant.estimate, 9); assert.equal(constant.se, 0); assert.deepEqual(constant.ci, [9, 9]);
const xs = E.integrals({ n: 5, functions: [x => x] });
const values = xs.first.map(row => row[2]), mean = values.reduce((a, b) => a + b) / 5;
near(xs.results[0].se, Math.sqrt(values.reduce((s, x) => s + (x - mean) ** 2, 0) / 4 / 5));
assert.equal(xs.results[0].ci, null);
assert.equal(E.integrals({ n: 1 }).results[0].se, null);
assert.ok(E.integrals({ n: 30 }).results[0].ci);
assert.throws(() => E.integrals({ functions: [() => Infinity] }));
console.log('PASS signed integrals, unbiased sample SE and small-sample interval handling');

const pi = E.geometry({ n: 100000 });
assert.ok(Math.abs(pi.estimate - Math.PI) < 0.03);
assert.ok(pi.ci[0] <= Math.PI && Math.PI <= pi.ci[1]);
const ellipse = E.geometry({ shape: 'ellipse', axes: [2, 3, 1], n: 100000 });
const circle = E.geometry({ shape: 'ellipse', axes: [1, 1, 1], n: 100000 });
near(ellipse.estimate, circle.estimate * 6);
const sphere = E.geometry({ shape: 'ellipsoid', axes: [2, 2, 2], n: 100000 });
assert.ok(Math.abs(sphere.estimate - 4 / 3 * Math.PI * 8) < .4);
const ellipsoid = E.geometry({ shape: 'ellipsoid', axes: [1, 2, 3], n: 100000 });
near(ellipsoid.estimate, sphere.estimate * 6 / 8);
assert.ok(E.wilson(0, 100)[1] > 0);
assert.ok(E.wilson(100, 100)[0] < 1);
console.log('PASS π, ellipse, sphere and ellipsoid scaling; Wilson bounds at zero/all hits');

for (const [p, endpoint] of [[0, -20], [1, 20]]) {
    const w = E.walks({ paths: 3, steps: 20, p });
    assert.deepEqual(w.endpoints, [endpoint, endpoint, endpoint]);
    assert.equal(w.exactMean, endpoint); assert.equal(w.variance, 0);
}
const walks = E.walks({ paths: 1000, steps: 100 });
assert.ok(Math.abs(walks.estimate) < 1);
assert.ok(Math.abs(walks.variance - 100) < 15);
assert.ok(walks.endpoints.every(x => x % 2 === 0));
console.log('PASS random-walk extreme probabilities, parity and theoretical moments');

const deterministic = E.risk({ sigma: 0, mu: .05, n: 100 });
near(deterministic.estimate, 1000 * Math.exp(.05));
near(deterministic.var95, 1000 * (1 - Math.exp(.05)));
assert.equal(deterministic.lossProbability, 0);
assert.equal(deterministic.se, 0);
const risk = E.risk({ n: 100000 });
assert.ok(Math.abs(risk.estimate - risk.exact) < 4);
assert.ok(risk.q05 < risk.q95);
assert.ok(risk.expectedShortfall95 >= risk.var95);
assert.deepEqual(E.risk({ seed: 42, n: 50 }), E.risk({ seed: 42, n: 50 }));
console.log('PASS financial model’s deterministic limit, expectation and risk tail ordering');

for (const options of [{ seed: -1 }, { seed: 2 ** 32 }, { seed: .5 }, { n: 0 }, { n: 100001 }, { n: 2.5 }]) assert.throws(() => E.integrals(options));
assert.throws(() => E.geometry({ axes: [0, 1, 1] }));
assert.throws(() => E.walks({ p: 1.1 }));
assert.throws(() => E.risk({ sigma: -1 }));
console.log('PASS invalid seeds, counts and model parameters are rejected');

// The signed Hit-or-Miss estimator must include both positive and negative hits in E[score²].
const fs = require('node:fs'), vm = require('node:vm');
const elements = new Map(['mc-stat-stderr', 'mc-stat-approx'].map(id => [id, {}]));
const context = vm.createContext({ window: { addEventListener() {} }, document: { getElementById: id => elements.get(id), addEventListener() {} } });
vm.runInContext(fs.readFileSync('js/simulations.js', 'utf8'), context);
vm.runInContext("mcMethod='hit_or_miss'; mcFuncKey='sin'; mcA=0; mcB=2; mcMinY=-1; mcMaxY=1; mcCurrentN=100; mcCurrentNin=0; mcHitSumSquares=60; updateIntegralStats();", context);
assert.equal(elements.get('mc-stat-approx').innerText, '0.000000');
assert.ok(Number(elements.get('mc-stat-stderr').innerText) > .3);
console.log('PASS signed Hit-or-Miss does not report zero SE when positive and negative hits cancel');
