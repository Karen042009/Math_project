/* Reproducible numerical experiments. No DOM or network dependencies. */
(function (root) {
    'use strict';

    // MT19937 with NumPy RandomState's 53-bit uniform conversion.
    class RandomState {
        constructor(seed = 0) {
            if (!Number.isInteger(seed) || seed < 0 || seed > 0xffffffff) throw new Error('seed');
            this.state = new Uint32Array(624);
            this.state[0] = seed;
            for (let i = 1; i < 624; i++) {
                const prev = this.state[i - 1];
                this.state[i] = (Math.imul(1812433253, prev ^ (prev >>> 30)) + i) >>> 0;
            }
            this.index = 624;
        }
        uint32() {
            if (this.index >= 624) {
                for (let i = 0; i < 624; i++) {
                    const y = (this.state[i] & 0x80000000) | (this.state[(i + 1) % 624] & 0x7fffffff);
                    this.state[i] = this.state[(i + 397) % 624] ^ (y >>> 1) ^ ((y & 1) ? 0x9908b0df : 0);
                }
                this.index = 0;
            }
            let y = this.state[this.index++];
            y ^= y >>> 11;
            y ^= (y << 7) & 0x9d2c5680;
            y ^= (y << 15) & 0xefc60000;
            y ^= y >>> 18;
            return y >>> 0;
        }
        uniform() {
            return ((this.uint32() >>> 5) * 67108864 + (this.uint32() >>> 6)) / 9007199254740992;
        }
        normal() {
            return Math.sqrt(-2 * Math.log(1 - this.uniform())) * Math.cos(2 * Math.PI * this.uniform());
        }
    }

    function count(n, max = 100000) {
        if (!Number.isInteger(n) || n < 1 || n > max) throw new Error('count');
    }
    function finite(...values) {
        if (!values.every(Number.isFinite)) throw new Error('finite');
    }
    function moments() { return { n: 0, mean: 0, m2: 0 }; }
    function push(m, value) {
        finite(value);
        m.n++;
        const delta = value - m.mean;
        m.mean += delta / m.n;
        m.m2 += delta * (value - m.mean);
    }
    function summarize(m, width = 1) {
        const estimate = width * m.mean;
        const se = m.n > 1 ? Math.abs(width) * Math.sqrt(Math.max(0, m.m2 / (m.n - 1)) / m.n) : null;
        return { n: m.n, estimate, se, ci: m.n >= 30 ? [estimate - 1.96 * se, estimate + 1.96 * se] : null };
    }
    function wilson(k, n, scale = 1) {
        const z2 = 1.96 ** 2, p = k / n, den = 1 + z2 / n;
        const mid = (p + z2 / (2 * n)) / den;
        const half = 1.96 * Math.sqrt(p * (1 - p) / n + z2 / (4 * n * n)) / den;
        return [scale * Math.max(0, mid - half), scale * Math.min(1, mid + half)];
    }
    function checkpoint(i, n) {
        return [5, 10, 100, 1000, 10000, 100000, n].includes(i);
    }

    function integrals({ seed = 0, n = 10000, a = 0, b = 1, functions = [x => x * x, Math.exp] }) {
        count(n); finite(a, b);
        const rng = new RandomState(seed), stats = functions.map(moments), first = [], rows = [], history = [];
        for (let i = 1; i <= n; i++) {
            const x = a + (b - a) * rng.uniform();
            const values = functions.map(fn => fn(x));
            values.forEach((y, j) => push(stats[j], y));
            if (i <= 5) first.push([i, x, ...values]);
            if (checkpoint(i, n)) rows.push({ n: i, results: stats.map(m => summarize(m, b - a)) });
            if (i <= 10 || i % Math.max(1, Math.floor(n / 200)) === 0 || i === n) {
                history.push({ n: i, values: stats.map(m => (b - a) * m.mean) });
            }
        }
        return { first, rows, history, results: stats.map(m => summarize(m, b - a)) };
    }

    function geometry({ seed = 0, n = 10000, shape = 'pi', axes = [1, 1, 1] }) {
        count(n);
        if (!['pi', 'ellipse', 'ellipsoid'].includes(shape)) throw new Error('shape');
        finite(...axes);
        if (axes.length !== 3 || axes.some(v => v <= 0 || v > 100)) throw new Error('axes');
        const rng = new RandomState(seed), dims = shape === 'ellipsoid' ? 3 : 2;
        const box = shape === 'pi' ? 1 : 2 ** dims * axes.slice(0, dims).reduce((a, b) => a * b, 1);
        const factor = shape === 'pi' ? 4 : box;
        const exact = shape === 'pi' ? Math.PI : (dims === 2 ? Math.PI * axes[0] * axes[1] : 4 / 3 * Math.PI * axes[0] * axes[1] * axes[2]);
        const points = [], history = [], rows = [];
        let hits = 0;
        for (let i = 1; i <= n; i++) {
            const coords = Array.from({ length: dims }, () => shape === 'pi' ? rng.uniform() : 2 * rng.uniform() - 1);
            const inside = coords.reduce((s, x) => s + x * x, 0) <= 1;
            if (inside) hits++;
            if (i <= 2500) points.push({ coords, inside });
            const estimate = factor * hits / i;
            if (checkpoint(i, n)) rows.push([i, hits, estimate, Math.abs(estimate - exact)]);
            if (i <= 10 || i % Math.max(1, Math.floor(n / 200)) === 0 || i === n) history.push({ n: i, values: [estimate] });
        }
        const p = hits / n;
        return { n, hits, points, rows, history, exact, box, estimate: factor * p,
            se: factor * Math.sqrt(p * (1 - p) / n), ci: wilson(hits, n, factor), dims };
    }

    function walks({ seed = 0, paths = 200, steps = 100, p = 0.5 }) {
        count(paths, 1000); count(steps, 1000); finite(p);
        if (p < 0 || p > 1) throw new Error('probability');
        const rng = new RandomState(seed), trajectories = [], endpoints = [], stats = moments();
        for (let i = 0; i < paths; i++) {
            let x = 0;
            const path = [0];
            for (let j = 0; j < steps; j++) {
                x += rng.uniform() < p ? 1 : -1;
                if (i < 20) path.push(x);
            }
            if (i < 20) trajectories.push(path);
            endpoints.push(x); push(stats, x);
        }
        return { trajectories, endpoints, ...summarize(stats), variance: paths > 1 ? stats.m2 / (paths - 1) : null,
            exactMean: steps * (2 * p - 1), exactVariance: 4 * steps * p * (1 - p) };
    }

    // An educational geometric Brownian motion model; mu is annual drift, sigma annual volatility.
    function risk({ seed = 0, n = 10000, initial = 1000, mu = 0.05, sigma = 0.2, years = 1 }) {
        count(n); finite(initial, mu, sigma, years);
        if (initial <= 0 || initial > 1e9 || Math.abs(mu) > 1 || sigma < 0 || sigma > 2 || years <= 0 || years > 10) throw new Error('risk');
        const rng = new RandomState(seed), terminals = [], stats = moments();
        let losses = 0;
        for (let i = 0; i < n; i++) {
            const value = initial * Math.exp((mu - sigma * sigma / 2) * years + sigma * Math.sqrt(years) * rng.normal());
            push(stats, value); terminals.push(value);
            if (value < initial) losses++;
        }
        const sorted = [...terminals].sort((a, b) => a - b);
        const quantile = q => {
            const at = (n - 1) * q, lo = Math.floor(at), weight = at - lo;
            return sorted[lo] * (1 - weight) + sorted[Math.min(lo + 1, n - 1)] * weight;
        };
        const q05 = quantile(0.05), q95 = quantile(0.95);
        const tail = terminals.filter(v => v <= q05);
        return { terminals, ...summarize(stats), exact: initial * Math.exp(mu * years), lossProbability: losses / n,
            lossCi: wilson(losses, n), q05, q95, var95: initial - q05,
            expectedShortfall95: initial - tail.reduce((s, x) => s + x, 0) / tail.length };
    }

    const api = { RandomState, integrals, geometry, walks, risk, wilson };
    if (typeof module !== 'undefined' && module.exports) module.exports = api;
    else root.ResearchEngine = api;
})(typeof window === 'undefined' ? globalThis : window);
