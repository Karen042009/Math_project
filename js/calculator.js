/*
 * CALCULATOR.JS
 * Complete, secure mathematical parser and comprehensive laboratory engine:
 * 1. Safe MathEvaluator (Tokenizer, Recursive Descent AST Parser, Symbolic Diff, Evaluator)
 * 2. CalculusEngine (Numerical Quadrature: Midpoint, Trapezoidal, Simpson, Monte Carlo, Root Finder, Singularity Checker)
 * 3. Standard & Probability Calculator (Formula Solver & Distribution Visualizer with verified Normal CDF)
 * 4. Calculus Lab (Derivative with Tangent Line, Indefinite Integral with Rules & Verification, Definite Integral with Singularity Warning)
 * 5. Area Lab (Curve vs Axis, Between Two Curves, Root Detection & True Geometric Area)
 * 6. Volume Lab (Disks, Washers, Cross-Sections, Standard Solids: Cylinder, Cone, Sphere)
 * 7. Motion Lab (s(t), v(t), a(t), Displacement Delta s vs Total Distance L)
 */

/* ----------------------------------------------------
   1. CORE MATHEMATICAL HELPERS & NORMAL CDF
   ---------------------------------------------------- */
function erf(x) {
    const sign = x < 0 ? -1 : 1;
    const ax = Math.abs(x);
    const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429;
    const p = 0.3275911;
    const t = 1.0 / (1.0 + p * ax);
    const y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
    return sign * y;
}

function standardNormalCdf(z) {
    return 0.5 * (1 + erf(z / Math.SQRT2));
}

function normCdf(x, mu, sigma) {
    if (sigma <= 0) return x >= mu ? 1 : 0;
    return standardNormalCdf((x - mu) / sigma);
}

function factorial(n) {
    if (!Number.isSafeInteger(n) || n < 0 || n > 170) throw new Error('Ֆակտորիալի արգումենտը պետք է լինի ամբողջ թիվ՝ 0-ից 170');
    if (n === 0 || n === 1) return 1;
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

function C(n, k) {
    if (k < 0 || k > n) return 0;
    return factorial(n) / (factorial(k) * factorial(n - k));
}

function P(n, k) {
    if (k < 0 || k > n) return 0;
    return factorial(n) / factorial(n - k);
}

function formatResultNumber(res) {
    if (typeof res !== 'number' || isNaN(res)) return 'NaN';
    if (!isFinite(res)) return res > 0 ? '∞' : '-∞';
    if (res === 0) return '0';
    const abs = Math.abs(res);
    if (abs < 1e-5 || abs >= 1e8) {
        return res.toExponential(4);
    }
    const rounded = Math.round(res * 1e6) / 1e6;
    return String(rounded);
}

/* ----------------------------------------------------
   2. SAFE MATHEMATICAL EVALUATOR (AST PARSER)
   ---------------------------------------------------- */
class MathEvaluator {
    static tokenize(str) {
        str = String(str || '')
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
            .replace(/[−–]/g, '-')
            .replace(/π/g, 'pi');
        const tokens = [];
        let i = 0;
        const n = str.length;

        while (i < n) {
            const c = str[i];
            if (/\s/.test(c)) {
                i++;
                continue;
            }
            if (/[0-9]/.test(c) || (c === '.' && i + 1 < n && /[0-9]/.test(str[i + 1]))) {
                const match = str.slice(i).match(/^(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/);
                const numStr = match[0];
                i += numStr.length;
                if (str[i] === '.' || str[i] === 'e' || str[i] === 'E' || !Number.isFinite(Number(numStr))) {
                    throw new Error('Անվավեր թիվ');
                }
                tokens.push({ type: 'NUM', val: Number(numStr) });
                continue;
            }
            if (/[a-zA-Z_]/.test(c)) {
                let id = '';
                while (i < n && /[a-zA-Z0-9_]/.test(str[i])) {
                    id += str[i++];
                }
                tokens.push({ type: 'ID', val: id.toLowerCase() });
                continue;
            }
            if ('+-*/^(),!'.includes(c)) {
                tokens.push({ type: 'OP', val: c });
                i++;
                continue;
            }
            throw new Error(`Անհայտ սիմվոլ: "${c}"`);
        }

        // Handle implicit multiplication (e.g. 2x, 2(x+1), x sin(x))
        const KNOWN_FUNCS = new Set(['sin', 'cos', 'tan', 'exp', 'ln', 'log', 'sqrt', 'abs', 'c', 'p', 'factorial']);
        const result = [];
        for (let j = 0; j < tokens.length; j++) {
            const curr = tokens[j];
            result.push(curr);
            if (j + 1 < tokens.length) {
                const next = tokens[j + 1];
                if (curr.type === 'ID' && KNOWN_FUNCS.has(curr.val) && next.type === 'OP' && next.val === '(') {
                    continue;
                }
                const isCurrVal = (curr.type === 'NUM') || (curr.type === 'ID') || (curr.type === 'OP' && (curr.val === ')' || curr.val === '!'));
                const isNextVal = (next.type === 'NUM') || (next.type === 'ID') || (next.type === 'OP' && next.val === '(');
                if (isCurrVal && isNextVal) {
                    result.push({ type: 'OP', val: '*' });
                }
            }
        }
        return result;
    }

    static parse(str) {
        const tokens = this.tokenize(str);
        let pos = 0;

        function peek() {
            return tokens[pos];
        }
        function consume(expectedVal) {
            const t = tokens[pos];
            if (!t || (expectedVal && t.val !== expectedVal)) {
                throw new Error(`Սպասվում էր "${expectedVal}", բայց հայտնաբերվել է "${t ? t.val : 'ավարտ'}"`);
            }
            pos++;
            return t;
        }

        function parseExpr() {
            return parseAddSub();
        }

        function parseAddSub() {
            let left = parseMulDiv();
            while (peek() && peek().type === 'OP' && (peek().val === '+' || peek().val === '-')) {
                const op = consume().val;
                const right = parseMulDiv();
                left = { type: 'BINARY', op, left, right };
            }
            return left;
        }

        function parseMulDiv() {
            let left = parseUnary();
            while (peek() && peek().type === 'OP' && (peek().val === '*' || peek().val === '/')) {
                const op = consume().val;
                const right = parseUnary();
                left = { type: 'BINARY', op, left, right };
            }
            return left;
        }

        function parsePower() {
            let left = parsePostfix();
            if (peek() && peek().type === 'OP' && peek().val === '^') {
                consume('^');
                const right = parseUnary();
                return { type: 'BINARY', op: '^', left, right };
            }
            return left;
        }

        function parsePostfix() {
            let node = parsePrimary();
            while (peek() && peek().type === 'OP' && peek().val === '!') {
                consume('!');
                node = { type: 'POSTFIX', op: '!', expr: node };
            }
            return node;
        }

        function parseUnary() {
            if (peek() && peek().type === 'OP' && (peek().val === '+' || peek().val === '-')) {
                const op = consume().val;
                const expr = parseUnary();
                if (op === '-') return { type: 'UNARY', op: '-', expr };
                return expr;
            }
            return parsePower();
        }

        function parsePrimary() {
            const t = peek();
            if (!t) throw new Error('Անսպասելի արտահայտության ավարտ');

            if (t.type === 'NUM') {
                consume();
                return { type: 'NUM', val: t.val };
            }

            if (t.type === 'OP' && t.val === '(') {
                consume('(');
                const expr = parseExpr();
                consume(')');
                return expr;
            }

            if (t.type === 'ID') {
                const id = consume().val;
                if (peek() && peek().type === 'OP' && peek().val === '(') {
                    consume('(');
                    const args = [];
                    if (!peek() || peek().val !== ')') {
                        args.push(parseExpr());
                        while (peek() && peek().type === 'OP' && peek().val === ',') {
                            consume(',');
                            args.push(parseExpr());
                        }
                    }
                    consume(')');
                    return { type: 'CALL', fn: id, args };
                }
                if (id === 'pi') return { type: 'NUM', val: Math.PI };
                if (id === 'e') return { type: 'NUM', val: Math.E };
                return { type: 'VAR', name: id };
            }

            throw new Error(`Անսպասելի նշան: "${t.val}"`);
        }

        const ast = parseExpr();
        if (pos < tokens.length) {
            throw new Error(`Լրացուցիչ չճանաչված նշան: "${tokens[pos].val}"`);
        }
        return ast;
    }

    static evalAst(node, scope = {}) {
        if (!node) return 0;
        switch (node.type) {
            case 'NUM': return node.val;
            case 'VAR': {
                if (node.name in scope) return scope[node.name];
                if (node.name === 'pi') return Math.PI;
                if (node.name === 'e') return Math.E;
                throw new Error(`Անհայտ փոփոխական: "${node.name}"`);
            }
            case 'UNARY': {
                const v = this.evalAst(node.expr, scope);
                return node.op === '-' ? -v : v;
            }
            case 'POSTFIX': {
                if (node.op === '!') {
                    const v = this.evalAst(node.expr, scope);
                    return factorial(v);
                }
                throw new Error(`Անհայտ պոստֆիքս օպերատոր: "${node.op}"`);
            }
            case 'BINARY': {
                const left = this.evalAst(node.left, scope);
                const right = this.evalAst(node.right, scope);
                switch (node.op) {
                    case '+': return left + right;
                    case '-': return left - right;
                    case '*': return left * right;
                    case '/': {
                        if (right === 0) throw new Error("Բաժանում զրոյի վրա");
                        return left / right;
                    }
                    case '^': return Math.pow(left, right);
                    default: throw new Error(`Անհայտ օպերատոր: "${node.op}"`);
                }
            }
            case 'CALL': {
                const evaluatedArgs = node.args.map(a => this.evalAst(a, scope));
                const a0 = evaluatedArgs[0];
                switch (node.fn) {
                    case 'sin': return Math.sin(a0);
                    case 'cos': return Math.cos(a0);
                    case 'tan': return Math.tan(a0);
                    case 'exp': return Math.exp(a0);
                    case 'ln': {
                        if (a0 <= 0) throw new Error("ln-ի արգումենտը պետք է լինի > 0");
                        return Math.log(a0);
                    }
                    case 'log': {
                        if (a0 <= 0) throw new Error("log-ի արգումենտը պետք է լինի > 0");
                        return Math.log10(a0);
                    }
                    case 'sqrt': {
                        if (a0 < 0) throw new Error("Քառակուսի արմատ բացասական թվից");
                        return Math.sqrt(a0);
                    }
                    case 'abs': return Math.abs(a0);
                    case 'c': return C(evaluatedArgs[0], evaluatedArgs[1]);
                    case 'p': return P(evaluatedArgs[0], evaluatedArgs[1]);
                    case 'factorial': return factorial(a0);
                    default: throw new Error(`Անհայտ ֆունկցիա: "${node.fn}"`);
                }
            }
            default:
                throw new Error(`Անհայտ AST հանգույց: "${node.type}"`);
        }
    }

    static compile(str) {
        const ast = this.parse(str);
        return (scope = {}) => {
            if (typeof scope === "number") scope = { x: scope, t: scope };
            const value = this.evalAst(ast, scope);
            if (!Number.isFinite(value)) throw new Error('Ֆունկցիան տվյալ կետում սահմանված չէ');
            return value;
        };
    }

    static diff(node, varName = 'x') {
        if (!node) return { type: 'NUM', val: 0 };
        switch (node.type) {
            case 'NUM': return { type: 'NUM', val: 0 };
            case 'VAR': return { type: 'NUM', val: node.name === varName ? 1 : 0 };
            case 'UNARY': {
                return { type: 'UNARY', op: node.op, expr: this.diff(node.expr, varName) };
            }
            case 'BINARY': {
                const u = node.left;
                const v = node.right;
                const du = this.diff(u, varName);
                const dv = this.diff(v, varName);
                switch (node.op) {
                    case '+': return { type: 'BINARY', op: '+', left: du, right: dv };
                    case '-': return { type: 'BINARY', op: '-', left: du, right: dv };
                    case '*': {
                        return {
                            type: 'BINARY', op: '+',
                            left: { type: 'BINARY', op: '*', left: du, right: v },
                            right: { type: 'BINARY', op: '*', left: u, right: dv }
                        };
                    }
                    case '/': {
                        return {
                            type: 'BINARY', op: '/',
                            left: {
                                type: 'BINARY', op: '-',
                                left: { type: 'BINARY', op: '*', left: du, right: v },
                                right: { type: 'BINARY', op: '*', left: u, right: dv }
                            },
                            right: { type: 'BINARY', op: '^', left: v, right: { type: 'NUM', val: 2 } }
                        };
                    }
                    case '^': {
                        if (v.type === 'NUM') {
                            const n = v.val;
                            return {
                                type: 'BINARY', op: '*',
                                left: {
                                    type: 'BINARY', op: '*',
                                    left: { type: 'NUM', val: n },
                                    right: { type: 'BINARY', op: '^', left: u, right: { type: 'NUM', val: n - 1 } }
                                },
                                right: du
                            };
                        }
                        throw new Error("Ընդհանուր u(x)^v(x) ածանցյալը չի աջակցվում");
                    }
                }
                break;
            }
            case 'CALL': {
                const u = node.args[0];
                const du = this.diff(u, varName);
                switch (node.fn) {
                    case 'sin':
                        return { type: 'BINARY', op: '*', left: { type: 'CALL', fn: 'cos', args: [u] }, right: du };
                    case 'cos':
                        return {
                            type: 'BINARY', op: '*',
                            left: { type: 'UNARY', op: '-', expr: { type: 'CALL', fn: 'sin', args: [u] } },
                            right: du
                        };
                    case 'exp':
                        return { type: 'BINARY', op: '*', left: { type: 'CALL', fn: 'exp', args: [u] }, right: du };
                    case 'ln':
                        return { type: 'BINARY', op: '/', left: du, right: u };
                    case 'sqrt':
                        return {
                            type: 'BINARY', op: '/',
                            left: du,
                            right: { type: 'BINARY', op: '*', left: { type: 'NUM', val: 2 }, right: { type: 'CALL', fn: 'sqrt', args: [u] } }
                        };
                }
            }
        }
        throw new Error("Տվյալ արտահայտության սիմվոլիկ ածանցումը չի աջակցվում");
    }

    static antiderivative(node) {
        const num = val => ({type:'NUM',val});
        const x = {type:'VAR',name:'x'};
        const bin = (op,left,right) => ({type:'BINARY',op,left,right});
        const call = (fn,arg) => ({type:'CALL',fn,args:[arg]});
        const constant = n => {
            try { return this.evalAst(n,{}); } catch { return null; }
        };
        const c = constant(node);
        if (c !== null) return bin('*',num(c),x);
        if (node.type === 'VAR' && node.name === 'x') return bin('/',bin('^',x,num(2)),num(2));
        if (node.type === 'UNARY') return {type:'UNARY',op:'-',expr:this.antiderivative(node.expr)};
        if (node.type === 'BINARY') {
            const {op,left,right} = node;
            if (op === '+' || op === '-') return bin(op,this.antiderivative(left),this.antiderivative(right));
            if (op === '*') {
                const l = constant(left), r = constant(right);
                if (l !== null) return bin('*',num(l),this.antiderivative(right));
                if (r !== null) return bin('*',num(r),this.antiderivative(left));
            }
            if (op === '/') {
                const r = constant(right);
                if (r !== null && r !== 0) return bin('/',this.antiderivative(left),num(r));
                const l = constant(left);
                const slope = constant(this.simplify(this.diff(right)));
                if (l !== null && slope !== null && slope !== 0)
                    return bin('*',num(l/slope),call('ln',call('abs',right)));
            }
            if (op === '^' && right.type === 'NUM') {
                const slope = constant(this.simplify(this.diff(left)));
                if (slope !== null && slope !== 0) {
                    const n = right.val;
                    if (n === -1) return bin('/',call('ln',call('abs',left)),num(slope));
                    return bin('/',bin('^',left,num(n+1)),num(slope*(n+1)));
                }
            }
        }
        if (node.type === 'CALL') {
            const u = node.args[0];
            const slope = constant(this.simplify(this.diff(u)));
            if (slope !== null && slope !== 0) {
                if (node.fn === 'sin') return bin('/',{type:'UNARY',op:'-',expr:call('cos',u)},num(slope));
                if (node.fn === 'cos') return bin('/',call('sin',u),num(slope));
                if (node.fn === 'exp') return bin('/',call('exp',u),num(slope));
            }
        }
        throw new Error('Այս արտահայտության համար օգտագործեք որոշյալ ինտեգրալի թվային հաշվարկը');
    }

    static simplify(node) {
        if (!node) return null;
        if (node.type === 'NUM' || node.name) return node;

        if (node.type === 'UNARY') {
            const expr = this.simplify(node.expr);
            if (expr.type === 'NUM') return { type: 'NUM', val: node.op === '-' ? -expr.val : expr.val };
            return { type: 'UNARY', op: node.op, expr };
        }

        if (node.type === 'BINARY') {
            const left = this.simplify(node.left);
            const right = this.simplify(node.right);

            if (left.type === 'NUM' && right.type === 'NUM') {
                try {
                    return { type: 'NUM', val: this.evalAst({ type: 'BINARY', op: node.op, left, right }) };
                } catch { }
            }

            if (node.op === '+') {
                if (left.type === 'NUM' && left.val === 0) return right;
                if (right.type === 'NUM' && right.val === 0) return left;
            }
            if (node.op === '-') {
                if (right.type === 'NUM' && right.val === 0) return left;
            }
            if (node.op === '*') {
                if ((left.type === 'NUM' && left.val === 0) || (right.type === 'NUM' && right.val === 0)) return { type: 'NUM', val: 0 };
                if (left.type === 'NUM' && left.val === 1) return right;
                if (right.type === 'NUM' && right.val === 1) return left;
            }
            if (node.op === '^') {
                if (right.type === 'NUM' && right.val === 0) return { type: 'NUM', val: 1 };
                if (right.type === 'NUM' && right.val === 1) return left;
            }
            return { type: 'BINARY', op: node.op, left, right };
        }

        if (node.type === 'CALL') {
            const args = node.args.map(a => this.simplify(a));
            return { type: 'CALL', fn: node.fn, args };
        }

        return node;
    }

    static toLaTeX(node) {
        if (!node) return '';
        switch (node.type) {
            case 'NUM': return formatResultNumber(node.val);
            case 'VAR': return node.name;
            case 'UNARY': return `-${this.toLaTeX(node.expr)}`;
            case 'POSTFIX': return `${this.toLaTeX(node.expr)}!`;
            case 'BINARY': {
                const l = this.toLaTeX(node.left);
                const r = this.toLaTeX(node.right);
                if (node.op === '/') return `\\frac{${l}}{${r}}`;
                if (node.op === '^') return `{${l}}^{${r}}`;
                if (node.op === '*') return `\\left(${l}\\right) \\cdot \\left(${r}\\right)`;
                return `${l} ${node.op} ${r}`;
            }
            case 'CALL': {
                const a = node.args.map(x => this.toLaTeX(x)).join(', ');
                if (node.fn === 'sqrt') return `\\sqrt{${a}}`;
                if (node.fn === 'abs') return `|${a}|`;
                return `\\${node.fn}(${a})`;
            }
            default: return '';
        }
    }
}

/* ----------------------------------------------------
   3. CALCULUS ENGINE & NUMERICAL QUADRATURE
   ---------------------------------------------------- */
class CalculusEngine {
    static numericalDerivative(fn, x0, h = 1e-5) {
        return (fn(x0 + h) - fn(x0 - h)) / (2 * h);
    }

    static checkSingularity(fn, a, b, samples = 200) {
        const step = (b - a) / samples;
        for (let i = 0; i <= samples; i++) {
            const x = a + i * step;
            try {
                const y = fn(x);
                if (!Number.isFinite(y) || Math.abs(y) > 1e7) {
                    return { hasSingularity: true, xSingularity: x };
                }
            } catch {
                return { hasSingularity: true, xSingularity: x };
            }
        }
        return { hasSingularity: false };
    }

    static midpoint(fn, a, b, n = 100) {
        if (![a,b,n].every(Number.isFinite) || !Number.isInteger(n) || n < 2 || n > 1000000) throw new Error('Անվավեր սահմաններ կամ բաժանումների քանակ');
        const h = (b - a) / n;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const mid = a + (i + 0.5) * h;
            sum += fn(mid);
        }
        return sum * h;
    }

    static trapezoidal(fn, a, b, n = 100) {
        if (![a,b,n].every(Number.isFinite) || !Number.isInteger(n) || n < 2 || n > 1000000) throw new Error('Անվավեր սահմաններ կամ բաժանումների քանակ');
        const h = (b - a) / n;
        let sum = 0.5 * (fn(a) + fn(b));
        for (let i = 1; i < n; i++) {
            sum += fn(a + i * h);
        }
        return sum * h;
    }

    static simpson(fn, a, b, n = 100) {
        if (![a,b,n].every(Number.isFinite) || !Number.isInteger(n) || n < 2 || n > 1000000) throw new Error('Անվավեր սահմաններ կամ բաժանումների քանակ');
        if (n % 2 !== 0) n++;
        const h = (b - a) / n;
        let sum = fn(a) + fn(b);
        for (let i = 1; i < n; i++) {
            const x = a + i * h;
            sum += (i % 2 === 1 ? 4 : 2) * fn(x);
        }
        return (h / 3) * sum;
    }

    static monteCarloSampleMean(fn, a, b, N = 10000) {
        const len = b - a;
        let sum = 0;
        let sumSq = 0;
        for (let i = 0; i < N; i++) {
            const x = a + Math.random() * len;
            const y = fn(x);
            sum += y;
            sumSq += y * y;
        }
        const mean = sum / N;
        const estimate = len * mean;
        const variance = Math.max(0, sumSq / N - mean * mean);
        const standardError = Math.abs(len) * Math.sqrt(variance / N);
        return { estimate, standardError };
    }

    static areaUnderCurve(fn, a, b, n = 400) {
        return this.simpson((x) => Math.abs(fn(x)), a, b, n);
    }

    static areaBetweenCurves(f, g, a, b, n = 400) {
        return this.simpson((x) => Math.abs(f(x) - g(x)), a, b, n);
    }

    static findRoots(fn, minX, maxX, steps = 200) {
        const roots = [];
        const dx = (maxX - minX) / steps;
        for (let i = 0; i < steps; i++) {
            const x1 = minX + i * dx;
            const x2 = x1 + dx;
            let y1, y2;
            try {
                y1 = fn(x1);
                y2 = fn(x2);
            } catch {
                continue;
            }
            if (!Number.isFinite(y1) || !Number.isFinite(y2)) continue;

            if (Math.abs(y1) < 1e-10) {
                if (!roots.some(r => Math.abs(r - x1) < 1e-3)) roots.push(x1);
            } else if (y1 * y2 < 0) {
                let a = x1, b = x2;
                for (let it = 0; it < 25; it++) {
                    const mid = (a + b) / 2;
                    let ym;
                    try { ym = fn(mid); } catch { break; }
                    if (Math.abs(ym) < 1e-10) { a = mid; b = mid; break; }
                    if (y1 * ym < 0) b = mid;
                    else a = mid;
                }
                const r = (a + b) / 2;
                if (!roots.some(existing => Math.abs(existing - r) < 1e-3)) roots.push(r);
            }
        }
        return roots.sort((a, b) => a - b);
    }
}

/* ----------------------------------------------------
   4. STANDARD CALCULATOR LOGIC (ZERO EVAL / ZERO FUNCTION)
   ---------------------------------------------------- */
function toggleFormulaPanel() {
    const panel = document.getElementById('calc-formula-container');
    const btn = document.getElementById('btn-formula-drawer');
    if (!panel) return;
    if (panel.style.display === 'none') {
        panel.style.display = 'block';
        if (btn) btn.classList.add('active');
    } else {
        panel.style.display = 'none';
        if (btn) btn.classList.remove('active');
    }
}

function switchCalcTab(tab) {
    document.querySelectorAll('.calc-tab').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.calc-pad').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });

    const btn = document.querySelector(`.calc-tab[onclick*="'${tab}'"]`);
    if (btn) btn.classList.add('active');

    const panel = document.getElementById(`calc-pad-${tab}`);
    if (panel) {
        panel.classList.add('active');
        panel.style.display = 'grid';
    }
}

function addToCalc(val) {
    const input = document.getElementById('calc-input');
    if (!input) return;
    input.focus();
    const start = input.selectionStart ?? input.value.length;
    const end = input.selectionEnd ?? input.value.length;
    input.setRangeText(val, start, end, 'end');
}

function clearCalc() {
    const input = document.getElementById('calc-input');
    if (input) input.value = '';
    const ui = window.probabilityData?.ui || { calc_result_label: { hy: 'Արդյունք՝' } };
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';
    const label = ui.calc_result_label ? (ui.calc_result_label[lang] || 'Result:') : 'Result:';
    const res = document.getElementById('calc-result');
    if (res) res.innerText = `${label} 0`;
}

function backspaceCalc() {
    const input = document.getElementById('calc-input');
    if (!input) return;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    if (start === end) {
        if (start > 0) {
            input.value = input.value.slice(0, start - 1) + input.value.slice(end);
            input.selectionStart = input.selectionEnd = start - 1;
        }
    } else {
        input.value = input.value.slice(0, start) + input.value.slice(end);
        input.selectionStart = input.selectionEnd = start;
    }
}

async function calculateResult() {
    const input = document.getElementById('calc-input');
    const resultDisplay = document.getElementById('calc-result');
    if (!input || !resultDisplay) return;
    let expr = input.value.trim();
    if (!expr) return;

    try {
        const ast = MathEvaluator.parse(expr);
        const res = MathEvaluator.evalAst(ast);

        if (isNaN(res) || res === undefined) throw new Error("NaN");
        const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';
        const label = window.probabilityData?.ui?.calc_result_label?.[lang] || 'Result:';
        resultDisplay.innerText = `${label} ${formatResultNumber(res)}`;
        resultDisplay.style.color = 'var(--accent-gold)';
    } catch (e) {
        resultDisplay.innerText = calcT(`Սխալ՝ ${e.message}`);
        resultDisplay.style.color = 'var(--accent-pink)';
    }
}

/* ----------------------------------------------------
   5. STEP-BY-STEP PROBABILITY FORMULA SOLVER
   ---------------------------------------------------- */
function renderFormulaInputs() {
    const type = document.getElementById('formula-select')?.value;
    const container = document.getElementById('formula-inputs');
    if (!container) return;
    container.innerHTML = '';

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';
    const ui = window.probabilityData?.ui || {};
    const getLabel = (key, fallback) => (ui[key] && ui[key][lang]) ? ui[key][lang] : fallback;

    if (type === 'bernoulli') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                <div><label>n (փորձեր)</label><input type="number" id="f-n" value="10" min="1" class="calc-input-sm"></div>
                <div><label>k (հաջողություններ)</label><input type="number" id="f-k" value="3" min="0" class="calc-input-sm"></div>
                <div><label>p (հավանականություն)</label><input type="number" id="f-p" value="0.5" step="0.05" min="0" max="1" class="calc-input-sm"></div>
            </div>
        `;
    } else if (type === 'bayes') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                <div><label>P(H)</label><input type="number" id="f-ph" value="0.01" step="0.01" class="calc-input-sm"></div>
                <div><label>P(E|H)</label><input type="number" id="f-peh" value="0.95" step="0.01" class="calc-input-sm"></div>
                <div><label>P(E|¬H)</label><input type="number" id="f-penh" value="0.05" step="0.01" class="calc-input-sm"></div>
            </div>
        `;
    } else if (type === 'combinations') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div><label>n (ընդհանուր)</label><input type="number" id="f-n" value="5" min="1" class="calc-input-sm"></div>
                <div><label>k (ընտրված)</label><input type="number" id="f-k" value="2" min="0" class="calc-input-sm"></div>
            </div>
        `;
    } else if (type === 'permutations') {
        container.innerHTML = `
            <div><label>n (տարրերի քանակ)</label><input type="number" id="f-n" value="5" min="1" class="calc-input-sm"></div>
        `;
    } else if (type === 'poisson') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                <div><label>λ (պարամետր)</label><input type="number" id="f-lam" value="2.5" step="0.1" class="calc-input-sm"></div>
                <div><label>k (պատահարներ)</label><input type="number" id="f-k" value="3" min="0" class="calc-input-sm"></div>
            </div>
        `;
    } else if (type === 'normal_calc') {
        container.innerHTML = `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px;">
                <div><label>μ (միջին)</label><input type="number" id="f-mu" value="0" class="calc-input-sm"></div>
                <div><label>σ (շեղում)</label><input type="number" id="f-sigma" value="1" min="0.01" step="0.1" class="calc-input-sm"></div>
                <div><label>x (արժեք)</label><input type="number" id="f-x" value="1" step="0.1" class="calc-input-sm"></div>
            </div>
        `;
    }
    refreshLabLanguage();
}

function solveFormulaWithSteps() {
    const type = document.getElementById('formula-select')?.value;
    const out = document.getElementById('formula-steps');
    if (!out) return;
    out.style.display = 'block';

    const lang = typeof currentLang !== 'undefined' ? currentLang : 'hy';
    let html = '';

    if (type === 'bernoulli') {
        const n = parseInt(document.getElementById('f-n').value);
        const k = parseInt(document.getElementById('f-k').value);
        const p = parseFloat(document.getElementById('f-p').value);
        const q = 1 - p;
        const comb = C(n, k);
        const pk = Math.pow(p, k);
        const qnk = Math.pow(q, n - k);
        const res = comb * pk * qnk;

        html = `
            <p>Բանաձև՝ $P_n(k) = C_n^k \\cdot p^k \\cdot q^{n-k}$</p>
            <p>1. Զուգորդություն՝ $C_{${n}}^{${k}} = ${comb}$</p>
            <p>2. $p^k = ${p}^{${k}} = ${formatResultNumber(pk)}$</p>
            <p>3. $q^{n-k} = (1-${p})^{${n-k}} = ${formatResultNumber(qnk)}$</p>
            <p style="color:var(--accent-gold); font-size:1.1rem; margin-top:8px;">Արդյունք՝ $P_{${n}}(${k}) = ${formatResultNumber(res)}$</p>
        `;
    } else if (type === 'bayes') {
        const ph = parseFloat(document.getElementById('f-ph').value);
        const peh = parseFloat(document.getElementById('f-peh').value);
        const penh = parseFloat(document.getElementById('f-penh').value);
        const pnh = 1 - ph;
        const num = ph * peh;
        const den = (ph * peh) + (pnh * penh);
        const res = den !== 0 ? num / den : 0;

        html = `
            <p>Բանաձև՝ $P(H|E) = \\frac{P(H)P(E|H)}{P(E)}$</p>
            <p>1. Համարիչ՝ $P(H)P(E|H) = ${ph} \\cdot ${peh} = ${formatResultNumber(num)}$</p>
            <p>2. Հայտարար (լրիվ հավանականություն)՝ $P(E) = ${formatResultNumber(den)}$</p>
            <p style="color:var(--accent-gold); font-size:1.1rem; margin-top:8px;">Արդյունք՝ $P(H|E) = ${formatResultNumber(res)}$</p>
        `;
    } else if (type === 'combinations') {
        const n = parseInt(document.getElementById('f-n').value);
        const k = parseInt(document.getElementById('f-k').value);
        const res = C(n, k);
        html = `
            <p>Բանաձև՝ $C_n^k = \\frac{n!}{k!(n-k)!}$</p>
            <p>$C_{${n}}^{${k}} = \\frac{${n}!}{${k}! \\cdot ${n-k}!} = \\frac{${factorial(n)}}{${factorial(k)} \\cdot ${factorial(n - k)}} = ${res}</p>
        `;
    } else if (type === 'permutations') {
        const n = parseInt(document.getElementById('f-n').value);
        const res = factorial(n);
        html = `
            <p>Բանաձև՝ $P_n = n!$</p>
            <p>$P_{${n}} = ${n}! = ${res}</p>
        `;
    } else if (type === 'poisson') {
        const lam = parseFloat(document.getElementById('f-lam').value);
        const k = parseInt(document.getElementById('f-k').value);
        const res = (Math.pow(lam, k) * Math.exp(-lam)) / factorial(k);
        html = `
            <p>Բանաձև՝ $P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$</p>
            <p>$\\frac{${lam}^{${k}} \\cdot e^{-${lam}}}{${k}!} = \\frac{${formatResultNumber(Math.pow(lam, k))} \\cdot ${formatResultNumber(Math.exp(-lam))}}{${factorial(k)}}$</p>
            <p style="color:var(--accent-gold); font-size:1.1rem; margin-top:8px;">Արդյունք՝ $P(X=${k}) = ${formatResultNumber(res)}$</p>
        `;
    } else if (type === 'normal_calc') {
        const mu = parseFloat(document.getElementById('f-mu').value);
        const s = parseFloat(document.getElementById('f-sigma').value);
        const x = parseFloat(document.getElementById('f-x').value);
        const z = (x - mu) / s;
        // EXACT NORMAL CDF Φ(z)
        const p = standardNormalCdf(z);

        html = `
            <p>Խնդիր՝ $P(X \\le ${x})$ նորմալ բաշխման դեպքում ($\\mu=${mu}, \\sigma=${s}$)</p>
            <p>1. Z-կոդ (ստանդարտացում)՝ $Z = \\frac{x - \\mu}{\\sigma} = \\frac{${x} - ${mu}}{${s}} = ${formatResultNumber(z)}$</p>
            <p>2. Ստանդարտ ֆունկցիայի արժեք՝ $\\Phi(${formatResultNumber(z)}) = \\frac{1}{2}\\left(1 + \\text{erf}\\left(\\frac{${formatResultNumber(z)}}{\\sqrt{2}}\\right)\\right)$</p>
            <p style="color:var(--accent-gold); font-size:1.15rem; margin-top:8px;">Արդյունք՝ $P(X \\le ${x}) \\approx ${formatResultNumber(p)}$</p>
        `;
    }

    renderLabMarkup(out, html);
    if (window.MathJax && window.MathJax.typesetPromise) {
        queueMathTypeset(out);
    }
}

/* ----------------------------------------------------
   6. LAB MODE SWITCHER
   ---------------------------------------------------- */
function switchLabMode(mode, btn) {
    document.querySelectorAll('.lab-mode-btn').forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
    document.querySelectorAll('.lab-subpanel').forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
    });
    const target = document.getElementById(`lab-panel-${mode}`);
    if (target) {
        target.classList.add('active');
        target.style.display = 'block';
    }
    if (mode === 'prob') {
        setTimeout(() => { if (typeof drawGraph === 'function') drawGraph(); }, 60);
    }
}

/* ----------------------------------------------------
   7. CALCULUS LAB (DERIVATIVE & INTEGRAL)
   ---------------------------------------------------- */
function switchCalcSubmode(sub) {
    ['deriv', 'indef', 'def'].forEach(s => {
        const btn = document.getElementById(`btn-calc-sub-${s}`);
        const panel = document.getElementById(`calc-submode-${s}`);
        if (btn) {
            btn.classList.toggle('active', s === sub);
            btn.classList.toggle('secondary', s !== sub);
        }
        if (panel) panel.style.display = s === sub ? 'block' : 'none';
    });
}

function applyDerivPreset(val) {
    if (!val) return;
    const [fx, x0] = val.split(',');
    document.getElementById('deriv-input-fx').value = fx;
    document.getElementById('deriv-input-x0').value = x0 || 0;
    calculateDerivative();
}

function calculateDerivative() {
    const fxStr = document.getElementById('deriv-input-fx')?.value.trim();
    const x0 = parseFloat(document.getElementById('deriv-input-x0')?.value || 0);
    const out = document.getElementById('deriv-output-card');
    const canvas = document.getElementById('deriv-canvas');
    if (!out) return;

    try {
        const ast = MathEvaluator.parse(fxStr);
        const fn = MathEvaluator.compile(fxStr);
        const y0 = fn(x0);

        let derivAst = null;
        let derivSymbolic = '';
        try {
            derivAst = MathEvaluator.simplify(MathEvaluator.diff(ast, 'x'));
            derivSymbolic = MathEvaluator.toLaTeX(derivAst);
        } catch {
            derivSymbolic = 'Թվային մոտարկում';
        }

        const slope = CalculusEngine.numericalDerivative(fn, x0);

        out.style.display = 'block';
        renderLabMarkup(out, `
            <div style="font-size:0.95rem; line-height:1.6;">
                <p>Ֆունկցիա՝ $f(x) = ${MathEvaluator.toLaTeX(ast)}$</p>
                <p>Ածանցյալ ֆունկցիա՝ $f'(x) = ${derivSymbolic ? derivSymbolic : '\\text{հաշվված է թվային եղանակով}'}$</p>
                <p>Արժեքը $x_0 = ${x0}$ կետում՝ $f'(${x0}) = ${formatResultNumber(slope)}$ (կետի կոորդինատ՝ $(${x0}, ${formatResultNumber(y0)})$)</p>
                <p>Շոշափողի հավասարում՝ $y - f(x_0) = f'(x_0)(x - x_0) \\implies y = ${formatResultNumber(slope)}(x - ${x0}) + ${formatResultNumber(y0)}$</p>
            </div>
        `);
        if (window.MathJax && window.MathJax.typesetPromise) {
            queueMathTypeset(out);
        }

        if (canvas) {
            canvas.style.display = 'block';
            drawTangentPlot(canvas, fn, x0, slope, y0);
        }
    } catch (e) {
        out.style.display = 'block';
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function drawTangentPlot(canvas, fn, x0, slope, y0) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const xMin = x0 - 4;
    const xMax = x0 + 4;
    const toScreenX = (x) => ((x - xMin) / (xMax - xMin)) * (w - 80) + 40;

    let yMin = y0 - 10, yMax = y0 + 10;
    const samples = [];
    for (let i = 0; i <= 200; i++) {
        const x = xMin + (i / 200) * (xMax - xMin);
        let y = NaN;
        try { y = fn(x); } catch {}
        if (Number.isFinite(y)) {
            yMin = Math.min(yMin, y);
            yMax = Math.max(yMax, y);
        }
        samples.push({ x, y });
    }
    yMin -= 1; yMax += 1;
    const toScreenY = (y) => h - 30 - ((y - yMin) / (yMax - yMin)) * (h - 60);

    // Axes
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    const zeroY = toScreenY(0);
    if (zeroY >= 0 && zeroY <= h) {
        ctx.beginPath(); ctx.moveTo(0, zeroY); ctx.lineTo(w, zeroY); ctx.stroke();
    }
    const zeroX = toScreenX(0);
    if (zeroX >= 0 && zeroX <= w) {
        ctx.beginPath(); ctx.moveTo(zeroX, 0); ctx.lineTo(zeroX, h); ctx.stroke();
    }

    // Curve f(x)
    ctx.strokeStyle = '#4361ee';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let started = false;
    for (const pt of samples) {
        if (Number.isFinite(pt.y)) {
            const sx = toScreenX(pt.x);
            const sy = toScreenY(pt.y);
            if (!started) { ctx.moveTo(sx, sy); started = true; }
            else { ctx.lineTo(sx, sy); }
        }
    }
    ctx.stroke();

    // Tangent Line
    ctx.strokeStyle = '#f72585';
    ctx.lineWidth = 2;
    ctx.beginPath();
    const tX1 = xMin;
    const tY1 = slope * (tX1 - x0) + y0;
    const tX2 = xMax;
    const tY2 = slope * (tX2 - x0) + y0;
    ctx.moveTo(toScreenX(tX1), toScreenY(tY1));
    ctx.lineTo(toScreenX(tX2), toScreenY(tY2));
    ctx.stroke();

    // Point (x0, y0)
    ctx.fillStyle = '#ffd60a';
    ctx.beginPath();
    ctx.arc(toScreenX(x0), toScreenY(y0), 5, 0, Math.PI * 2);
    ctx.fill();
}

function applyIndefPreset(val) {
    if (!val) return;
    document.getElementById('indef-input-fx').value = val;
    calculateIndefiniteIntegral();
}

function calculateIndefiniteIntegral() {
    const fxStr = document.getElementById('indef-input-fx')?.value.trim();
    const out = document.getElementById('indef-output-card');
    if (!out) return;
    out.style.display = 'block';

    try {
        const ast = MathEvaluator.parse(fxStr);
        const primitive = MathEvaluator.simplify(MathEvaluator.antiderivative(ast));
        const F_latex = MathEvaluator.toLaTeX(primitive);
        const rule = 'Հիմնական ինտեգրալների կանոններ և գծայնություն';
        const verification = 'Ածանցելով վերականգնում ենք սկզբնական ֆունկցիան';

        renderLabMarkup(out, `
            <div style="font-size:0.95rem; line-height:1.6;">
                <p>Ինտեգրելի ֆունկցիա՝ $f(x) = ${MathEvaluator.toLaTeX(ast)}$</p>
                <p style="color:var(--accent-gold); font-size:1.15rem;">Անորոշ ինտեգրալ՝ $\\int f(x)dx = ${F_latex} + C$</p>
                <p>Կիրառված կանոն՝ ${rule}</p>
                <p>Ստուգում ածանցմամբ՝ ${verification}</p>
            </div>
        `);
        if (window.MathJax && window.MathJax.typesetPromise) {
            queueMathTypeset(out);
        }
    } catch (e) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function applyDefPreset(val) {
    if (!val) return;
    const [fx, aStr, bStr] = val.split(',');
    document.getElementById('def-input-fx').value = fx;
    document.getElementById('def-input-a').value = aStr === 'pi' ? Math.PI : (aStr === '-pi' ? -Math.PI : parseFloat(aStr));
    document.getElementById('def-input-b').value = bStr === 'pi' ? Math.PI : (bStr === '-pi' ? -Math.PI : parseFloat(bStr));
    calculateDefiniteIntegral();
}

function calculateDefiniteIntegral() {
    const fxStr = document.getElementById('def-input-fx')?.value.trim();
    let a = parseFloat(document.getElementById('def-input-a')?.value);
    let b = parseFloat(document.getElementById('def-input-b')?.value);
    const method = document.getElementById('def-select-method')?.value || 'auto';
    let n = parseInt(document.getElementById('def-input-n')?.value) || 100;
    const out = document.getElementById('def-output-card');
    const canvas = document.getElementById('def-canvas');
    if (!out) return;
    out.style.display = 'block';

    if (isNaN(a) || isNaN(b)) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ Սահմանները պետք է լինեն վավեր թվեր։</p>`);
        return;
    }

    try {
        const fn = MathEvaluator.compile(fxStr);

        // Check for singularity
        const minVal = Math.min(a, b);
        const maxVal = Math.max(a, b);
        const sing = CalculusEngine.checkSingularity(fn, minVal, maxVal, 200);
        if (sing.hasSingularity) {
            renderLabMarkup(out, `
                <div style="background:rgba(239,68,68,0.15); border:1px solid #ef4444; border-radius:8px; padding:12px;">
                    <p style="color:#ef4444; font-weight:bold; margin:0 0 6px;">⚠️ Ուշադրություն՝ Ֆունկցիան ունի առանձնահատկություն (անվերջություն/խզում) տվյալ միջակայքում։</p>
                    <p style="margin:0; font-size:0.9rem;">Օրինակ՝ $\\int_{-1}^1 \\frac{1}{x} dx$ ինտեգրալը սովորական Ռիմանի իմաստով տարամետ է, քանի որ $x=0$ կետում ֆունկցիան անսահմանափակ է։ Խնդրում ենք ընտրել միջակայք, որտեղ ֆունկցիան անընդհատ է։</p>
                </div>
            `);
            if (canvas) canvas.style.display = 'none';
            if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);
            return;
        }

        if (a === b) {
            renderLabMarkup(out, `<p style="color:var(--accent-gold); font-size:1.15rem;">$\\int_{${a}}^{${a}} f(x)dx = 0$ (Սահմանները համընկնում են)</p>`);
            if (canvas) canvas.style.display = 'none';
            if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);
            return;
        }

        let res = 0;
        let se = null;
        let methodDesc = '';

        if (method === 'simpson' || method === 'auto') {
            if (n % 2 !== 0) n++;
            res = CalculusEngine.simpson(fn, a, b, n);
            methodDesc = `Սիմպսոնի կանոն ($n = ${n}$ ենթամիջակայք)`;
        } else if (method === 'trapezoid') {
            res = CalculusEngine.trapezoidal(fn, a, b, n);
            methodDesc = `Սեղանների կանոն ($n = ${n}$ ենթամիջակայք)`;
        } else if (method === 'midpoint') {
            res = CalculusEngine.midpoint(fn, a, b, n);
            methodDesc = `Միջնակետերի կանոն ($n = ${n}$ ենթամիջակայք)`;
        } else if (method === 'monte_carlo') {
            const mc = CalculusEngine.monteCarloSampleMean(fn, a, b, n > 500 ? n : 5000);
            res = mc.estimate;
            se = mc.standardError;
            methodDesc = `Մոնտե Կառլոյի ընտրանքի միջին ($N = ${n > 500 ? n : 5000}$)`;
        }

        // Reversal of bounds notice if a > b
        let boundsNote = '';
        if (a > b) {
            boundsNote = `<p style="color:#38bdf8; font-size:0.85rem;">Նկատառում՝ Քանի որ $a > b$, ինտեգրալի նշանը հակադիր է՝ $\\int_{${a}}^{${b}} f(x)dx = -\\int_{${b}}^{${a}} f(x)dx$։</p>`;
        }

        renderLabMarkup(out, `
            <div style="font-size:0.95rem; line-height:1.6;">
                <p>Որոշյալ ինտեգրալ՝ $\\int_{${formatResultNumber(a)}}^{${formatResultNumber(b)}} (${fxStr}) dx$</p>
                <p style="color:var(--accent-gold); font-size:1.2rem;">Արդյունք՝ $I \\approx ${formatResultNumber(res)}$</p>
                <p>Կիրառված մեթոդ՝ ${methodDesc}</p>
                ${se !== null ? `<p>Գնահատված ստանդարտ սխալ (SE)՝ $\\pm ${formatResultNumber(se)}$</p>` : ''}
                ${boundsNote}
            </div>
        `);
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);

        if (canvas) {
            canvas.style.display = 'block';
            drawDefiniteIntegralPlot(canvas, fn, a, b);
        }
    } catch (e) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function drawDefiniteIntegralPlot(canvas, fn, a, b) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const minX = Math.min(a, b) - 0.5 * Math.abs(b - a || 1);
    const maxX = Math.max(a, b) + 0.5 * Math.abs(b - a || 1);
    const toScreenX = (x) => ((x - minX) / (maxX - minX)) * (w - 80) + 40;

    let minY = 0, maxY = 0;
    const samples = [];
    for (let i = 0; i <= 200; i++) {
        const x = minX + (i / 200) * (maxX - minX);
        let y = NaN;
        try { y = fn(x); } catch {}
        if (Number.isFinite(y)) {
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
        samples.push({ x, y });
    }
    minY -= 0.5; maxY += 0.5;
    const toScreenY = (y) => h - 30 - ((y - minY) / (maxY - minY)) * (h - 60);

    // Axes
    const zeroY = toScreenY(0);
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath(); ctx.moveTo(0, zeroY); ctx.lineTo(w, zeroY); ctx.stroke();

    // Shading on [min(a,b), max(a,b)]
    const startX = Math.min(a, b);
    const endX = Math.max(a, b);
    const shadeSteps = 100;
    for (let i = 0; i < shadeSteps; i++) {
        const x1 = startX + (i / shadeSteps) * (endX - startX);
        const x2 = startX + ((i + 1) / shadeSteps) * (endX - startX);
        let y1 = 0, y2 = 0;
        try { y1 = fn(x1); y2 = fn(x2); } catch {}
        if (Number.isFinite(y1) && Number.isFinite(y2)) {
            ctx.fillStyle = (y1 >= 0) ? 'rgba(67, 97, 238, 0.35)' : 'rgba(247, 37, 133, 0.35)';
            ctx.beginPath();
            ctx.moveTo(toScreenX(x1), zeroY);
            ctx.lineTo(toScreenX(x1), toScreenY(y1));
            ctx.lineTo(toScreenX(x2), toScreenY(y2));
            ctx.lineTo(toScreenX(x2), zeroY);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Curve
    ctx.strokeStyle = '#ffd60a';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let started = false;
    for (const pt of samples) {
        if (Number.isFinite(pt.y)) {
            const sx = toScreenX(pt.x);
            const sy = toScreenY(pt.y);
            if (!started) { ctx.moveTo(sx, sy); started = true; }
            else { ctx.lineTo(sx, sy); }
        }
    }
    ctx.stroke();
}

/* ----------------------------------------------------
   8. AREA LAB (AXIS & BETWEEN TWO CURVES)
   ---------------------------------------------------- */
function switchAreaMode(mode) {
    const isBetween = mode === 'between';
    document.getElementById('btn-area-mode-axis')?.classList.toggle('active', !isBetween);
    document.getElementById('btn-area-mode-axis')?.classList.toggle('secondary', isBetween);
    document.getElementById('btn-area-mode-between')?.classList.toggle('active', isBetween);
    document.getElementById('btn-area-mode-between')?.classList.toggle('secondary', !isBetween);

    const gxGroup = document.getElementById('area-group-gx');
    const btnRoots = document.getElementById('btn-find-intersections');
    if (gxGroup) gxGroup.style.display = isBetween ? 'block' : 'none';
    if (btnRoots) btnRoots.style.display = isBetween ? 'inline-block' : 'none';
}

function applyAreaPreset(val) {
    if (!val) return;
    const parts = val.split(',');
    const mode = parts[0];
    switchAreaMode(mode);
    if (mode === 'axis') {
        document.getElementById('area-input-fx').value = parts[1];
        document.getElementById('area-input-a').value = parts[2];
        document.getElementById('area-input-b').value = parts[3];
    } else {
        document.getElementById('area-input-fx').value = parts[1];
        document.getElementById('area-input-gx').value = parts[2];
        document.getElementById('area-input-a').value = parts[3];
        document.getElementById('area-input-b').value = parts[4];
    }
    calculateArea();
}

function findAreaIntersections() {
    const fxStr = document.getElementById('area-input-fx')?.value.trim();
    const gxStr = document.getElementById('area-input-gx')?.value.trim();
    const a = parseFloat(document.getElementById('area-input-a')?.value || -5);
    const b = parseFloat(document.getElementById('area-input-b')?.value || 5);
    const out = document.getElementById('area-output-card');
    if (!out) return;

    try {
        const f = MathEvaluator.compile(fxStr);
        const g = MathEvaluator.compile(gxStr);
        const roots = CalculusEngine.findRoots((x) => f(x) - g(x), a - 2, b + 2);

        out.style.display = 'block';
        if (roots.length >= 2) {
            document.getElementById('area-input-a').value = formatResultNumber(roots[0]);
            document.getElementById('area-input-b').value = formatResultNumber(roots[roots.length - 1]);
            renderLabMarkup(out, `
                <p style="color:#06d6a0;">Հայտնաբերված հատման կետեր՝ ${roots.map(r => formatResultNumber(r)).join(', ')}</p>
                <p>Սահմաններն ինքնաբերաբար թարմացվեցին՝ $[${formatResultNumber(roots[0])}, ${formatResultNumber(roots[roots.length - 1])}]$։</p>
            `);
            calculateArea();
        } else if (roots.length === 1) {
            renderLabMarkup(out, `<p style="color:#ffd60a;">Հայտնաբերվեց մեկ հատման կետ՝ $x = ${formatResultNumber(roots[0])}$</p>`);
        } else {
            renderLabMarkup(out, `<p style="color:#aaa;">Տվյալ տիրույթում ակնհայտ հատման կետեր չգտնվեցին։</p>`);
        }
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);
    } catch (e) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function calculateArea() {
    const isBetween = document.getElementById('btn-area-mode-between')?.classList.contains('active');
    const fxStr = document.getElementById('area-input-fx')?.value.trim();
    const gxStr = document.getElementById('area-input-gx')?.value.trim();
    const a = parseFloat(document.getElementById('area-input-a')?.value);
    const b = parseFloat(document.getElementById('area-input-b')?.value);
    const out = document.getElementById('area-output-card');
    const canvas = document.getElementById('area-canvas');
    if (!out) return;
    out.style.display = 'block';

    try {
        const f = MathEvaluator.compile(fxStr);
        const g = isBetween ? MathEvaluator.compile(gxStr) : ((x) => 0);

        const area = isBetween
            ? CalculusEngine.areaBetweenCurves(f, g, Math.min(a, b), Math.max(a, b))
            : CalculusEngine.areaUnderCurve(f, Math.min(a, b), Math.max(a, b));

        const signed = isBetween
            ? CalculusEngine.simpson((x) => f(x) - g(x), Math.min(a, b), Math.max(a, b))
            : CalculusEngine.simpson(f, Math.min(a, b), Math.max(a, b));

        renderLabMarkup(out, `
            <div style="font-size:0.95rem; line-height:1.6;">
                <p>Բանաձև՝ ${isBetween ? '$A = \\int_{a}^{b} |f(x) - g(x)| dx$' : '$A = \\int_{a}^{b} |f(x)| dx$'}</p>
                <p style="color:#06d6a0; font-size:1.25rem;">Երկրաչափական մակերես՝ $A = ${formatResultNumber(area)}$ քառ. միավոր</p>
                <p style="color:var(--text-muted); font-size:0.85rem;">Համեմատության համար նշանով ինտեգրալ՝ $\\int_{a}^{b} = ${formatResultNumber(signed)}$ (մակերեսը միշտ ոչ-բացասական է՝ $|\\dots|$-ի շնորհիվ)։</p>
            </div>
        `);
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);

        if (canvas) {
            canvas.style.display = 'block';
            drawAreaPlotCanvas(canvas, f, g, a, b, isBetween);
        }
    } catch (e) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function drawAreaPlotCanvas(canvas, f, g, a, b, isBetween) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const minX = Math.min(a, b) - 0.5 * Math.abs(b - a || 1);
    const maxX = Math.max(a, b) + 0.5 * Math.abs(b - a || 1);
    const toScreenX = (x) => ((x - minX) / (maxX - minX)) * (w - 80) + 40;

    let minY = 0, maxY = 0;
    for (let i = 0; i <= 100; i++) {
        const x = minX + (i / 100) * (maxX - minX);
        try {
            const y1 = f(x);
            const y2 = g(x);
            if (Number.isFinite(y1)) { minY = Math.min(minY, y1); maxY = Math.max(maxY, y1); }
            if (Number.isFinite(y2)) { minY = Math.min(minY, y2); maxY = Math.max(maxY, y2); }
        } catch {}
    }
    minY -= 1; maxY += 1;
    const toScreenY = (y) => h - 30 - ((y - minY) / (maxY - minY)) * (h - 60);

    const zeroY = toScreenY(0);
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath(); ctx.moveTo(0, zeroY); ctx.lineTo(w, zeroY); ctx.stroke();

    // Shading region between f and g
    const startX = Math.min(a, b);
    const endX = Math.max(a, b);
    const steps = 120;
    ctx.fillStyle = 'rgba(6, 214, 160, 0.35)';
    for (let i = 0; i < steps; i++) {
        const x1 = startX + (i / steps) * (endX - startX);
        const x2 = startX + ((i + 1) / steps) * (endX - startX);
        try {
            const y1f = f(x1), y2f = f(x2);
            const y1g = g(x1), y2g = g(x2);
            if (Number.isFinite(y1f) && Number.isFinite(y2f) && Number.isFinite(y1g) && Number.isFinite(y2g)) {
                ctx.beginPath();
                ctx.moveTo(toScreenX(x1), toScreenY(y1g));
                ctx.lineTo(toScreenX(x1), toScreenY(y1f));
                ctx.lineTo(toScreenX(x2), toScreenY(y2f));
                ctx.lineTo(toScreenX(x2), toScreenY(y2g));
                ctx.closePath();
                ctx.fill();
            }
        } catch {}
    }

    // Draw f(x)
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let st = false;
    for (let i = 0; i <= 200; i++) {
        const x = minX + (i / 200) * (maxX - minX);
        try {
            const y = f(x);
            if (Number.isFinite(y)) {
                const sx = toScreenX(x), sy = toScreenY(y);
                if (!st) { ctx.moveTo(sx, sy); st = true; } else ctx.lineTo(sx, sy);
            }
        } catch {}
    }
    ctx.stroke();

    // Draw g(x) if between mode
    if (isBetween) {
        ctx.strokeStyle = '#f72585';
        ctx.lineWidth = 2;
        ctx.beginPath();
        st = false;
        for (let i = 0; i <= 200; i++) {
            const x = minX + (i / 200) * (maxX - minX);
            try {
                const y = g(x);
                if (Number.isFinite(y)) {
                    const sx = toScreenX(x), sy = toScreenY(y);
                    if (!st) { ctx.moveTo(sx, sy); st = true; } else ctx.lineTo(sx, sy);
                }
            } catch {}
        }
        ctx.stroke();
    }
}

/* ----------------------------------------------------
   9. VOLUME LAB (DISKS, WASHERS, SLICING & SOLIDS)
   ---------------------------------------------------- */
function switchVolumeMode(mode) {
    ['disks', 'washers', 'slicing', 'solids'].forEach(m => {
        const btn = document.getElementById(`btn-vol-mode-${m}`);
        if (btn) {
            btn.classList.toggle('active', m === mode);
            btn.classList.toggle('secondary', m !== mode);
        }
    });

    const isSolids = mode === 'solids';
    const integInputs = document.getElementById('vol-inputs-integration');
    const solidsInputs = document.getElementById('vol-inputs-solids');
    if (integInputs) integInputs.style.display = isSolids ? 'none' : 'block';
    if (solidsInputs) solidsInputs.style.display = isSolids ? 'block' : 'none';

    const rxGroup = document.getElementById('vol-group-rx');
    const innerRGroup = document.getElementById('vol-group-inner-r');
    const axGroup = document.getElementById('vol-group-ax');

    if (rxGroup) rxGroup.style.display = (mode === 'disks' || mode === 'washers') ? 'block' : 'none';
    if (innerRGroup) innerRGroup.style.display = (mode === 'washers') ? 'block' : 'none';
    if (axGroup) axGroup.style.display = (mode === 'slicing') ? 'block' : 'none';
}

function updateSolidInputs(type) {
    const isSphere = type === 'sphere';
    const hGroup = document.getElementById('solid-group-h');
    if (hGroup) hGroup.style.display = isSphere ? 'none' : 'block';
}

function applyVolumePreset(val) {
    if (!val) return;
    const parts = val.split(',');
    const mode = parts[0];
    switchVolumeMode(mode);
    if (mode === 'disks') {
        document.getElementById('vol-input-rx').value = parts[1];
        document.getElementById('vol-input-a').value = parts[2];
        document.getElementById('vol-input-b').value = parts[3];
    } else if (mode === 'washers') {
        document.getElementById('vol-input-rx').value = parts[1];
        document.getElementById('vol-input-inner-r').value = parts[2];
        document.getElementById('vol-input-a').value = parts[3];
        document.getElementById('vol-input-b').value = parts[4];
    }
    calculateVolume();
}

function calculateVolume() {
    const activeBtn = document.querySelector('.lab-mode-btn.active') || {};
    const mode = ['disks', 'washers', 'slicing', 'solids'].find(m =>
        document.getElementById(`btn-vol-mode-${m}`)?.classList.contains('active')
    ) || 'disks';

    const out = document.getElementById('vol-output-card');
    const canvas = document.getElementById('vol-canvas');
    if (!out) return;
    out.style.display = 'block';

    try {
        if (mode === 'solids') {
            const solid = document.getElementById('vol-select-solid')?.value || 'sphere';
            const r = parseFloat(document.getElementById('solid-input-r')?.value || 1);
            const h = parseFloat(document.getElementById('solid-input-h')?.value || 1);

            if (!Number.isFinite(r) || !Number.isFinite(h) || r <= 0 || (solid !== 'sphere' && h <= 0)) {
                renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ Չափերը (շառավիղ և բարձրություն) պետք է լինեն դրական։</p>`);
                return;
            }

            let V = 0;
            let formula = '';
            let derivation = '';

            if (solid === 'cylinder') {
                V = Math.PI * r * r * h;
                formula = '$V = \\pi R^2 h$';
                derivation = 'Բխում է հաստատուն շառավղով սկավառակների ինտեգրումից՝ $\\int_0^h \\pi R^2 dx = \\pi R^2 h$։';
            } else if (solid === 'cone') {
                V = (1 / 3) * Math.PI * r * r * h;
                formula = '$V = \\frac{1}{3}\\pi R^2 h$';
                derivation = 'Բխում է $R(x) = \\frac{R}{h}x$ գծի պտույտից՝ $\\int_0^h \\pi \\left(\\frac{R}{h}x\\right)^2 dx = \\frac{1}{3}\\pi R^2 h$։';
            } else if (solid === 'sphere') {
                V = (4 / 3) * Math.PI * Math.pow(r, 3);
                formula = '$V = \\frac{4}{3}\\pi R^3$';
                derivation = 'Բխում է կիսաշրջանի $y = \\sqrt{R^2 - x^2}$ պտույտից՝ $\\int_{-R}^R \\pi (R^2 - x^2)dx = \\frac{4}{3}\\pi R^3$։';
            }

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Բանաձև՝ ${formula}</p>
                    <p style="color:#ffd60a; font-size:1.25rem;">Ծավալ՝ $V = ${formatResultNumber(V)}$ խոր. միավոր (${formatResultNumber(V / Math.PI)}\\pi)</p>
                    <p>Տեսական հիմնավորում՝ ${derivation}</p>
                </div>
            `);
            if (canvas) {
                canvas.style.display = 'block';
                drawSolidDiagram(canvas, solid, r, h);
            }
        } else if (mode === 'disks') {
            const rxStr = document.getElementById('vol-input-rx')?.value.trim();
            const a = parseFloat(document.getElementById('vol-input-a')?.value || 0);
            const b = parseFloat(document.getElementById('vol-input-b')?.value || 1);
            const R = MathEvaluator.compile(rxStr);

            const V = Math.PI * CalculusEngine.simpson((x) => {
                const radius = R(x);
                if (radius < 0) throw new Error('Շառավիղը պետք է լինի ոչ բացասական');
                return radius ** 2;
            }, Math.min(a, b), Math.max(a, b), 300);

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Սկավառակների մեթոդ՝ $V = \\pi \\int_{a}^{b} [R(x)]^2 dx$</p>
                    <p style="color:#ffd60a; font-size:1.25rem;">Պտտման մարմնի ծավալ՝ $V \\approx ${formatResultNumber(V)}$ խոր. միավոր (${formatResultNumber(V / Math.PI)}\\pi)</p>
                    <p>Պտտման առանցք՝ $x$ առանցք ($y = 0$), միջակայք՝ $[${a}, ${b}]$։</p>
                </div>
            `);
            if (canvas) {
                canvas.style.display = 'block';
                drawRevolutionCanvas(canvas, R, null, a, b);
            }
        } else if (mode === 'washers') {
            const rxStr = document.getElementById('vol-input-rx')?.value.trim();
            const innerStr = document.getElementById('vol-input-inner-r')?.value.trim();
            const a = parseFloat(document.getElementById('vol-input-a')?.value || 0);
            const b = parseFloat(document.getElementById('vol-input-b')?.value || 1);
            const R = MathEvaluator.compile(rxStr);
            const r = MathEvaluator.compile(innerStr);

            const V = Math.PI * CalculusEngine.simpson((x) => {
                const outer = R(x), inner = r(x);
                if (inner < 0 || outer < inner) throw new Error('Պետք է պահպանվի R ≥ r ≥ 0 պայմանը');
                return outer ** 2 - inner ** 2;
            }, Math.min(a, b), Math.max(a, b), 300);

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Օղակների մեթոդ՝ $V = \\pi \\int_{a}^{b} ([R(x)]^2 - [r(x)]^2) dx$</p>
                    <p style="color:#ffd60a; font-size:1.25rem;">Ծավալ՝ $V \\approx ${formatResultNumber(V)}$ խոր. միավոր (${formatResultNumber(V / Math.PI)}\\pi)</p>
                </div>
            `);
            if (canvas) {
                canvas.style.display = 'block';
                drawRevolutionCanvas(canvas, R, r, a, b);
            }
        } else if (mode === 'slicing') {
            const axStr = document.getElementById('vol-input-ax')?.value.trim();
            const a = parseFloat(document.getElementById('vol-input-a')?.value || 0);
            const b = parseFloat(document.getElementById('vol-input-b')?.value || 1);
            const A = MathEvaluator.compile(axStr);

            const V = CalculusEngine.simpson((x) => {
                const area = A(x);
                if (area < 0) throw new Error('Հատույթի մակերեսը պետք է լինի ոչ բացասական');
                return area;
            }, Math.min(a, b), Math.max(a, b), 300);

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Լայնական հատույթների մեթոդ՝ $V = \\int_{a}^{b} A(x) dx$</p>
                    <p style="color:#ffd60a; font-size:1.25rem;">Ծավալ՝ $V \\approx ${formatResultNumber(V)}$ խոր. միավոր</p>
                </div>
            `);
            if (canvas) canvas.style.display = 'none';
        }
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);
    } catch (e) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function drawRevolutionCanvas(canvas, R, r, a, b) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const minX = Math.min(a, b) - 0.5;
    const maxX = Math.max(a, b) + 0.5;
    const toScreenX = (x) => ((x - minX) / (maxX - minX)) * (w - 80) + 40;
    const cy = h / 2;

    // Axis of rotation
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.setLineDash([5, 5]);
    ctx.beginPath(); ctx.moveTo(20, cy); ctx.lineTo(w - 20, cy); ctx.stroke();
    ctx.setLineDash([]);

    // Outer silhouette
    const steps = 60;
    ctx.strokeStyle = '#ffd60a';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
        const x = a + (i / steps) * (b - a);
        let rad = 0;
        try { rad = Math.abs(R(x)) * 25; } catch {}
        const sx = toScreenX(x);
        if (i === 0) ctx.moveTo(sx, cy - rad); else ctx.lineTo(sx, cy - rad);
    }
    for (let i = steps; i >= 0; i--) {
        const x = a + (i / steps) * (b - a);
        let rad = 0;
        try { rad = Math.abs(R(x)) * 25; } catch {}
        const sx = toScreenX(x);
        ctx.lineTo(sx, cy + rad);
    }
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 214, 10, 0.2)';
    ctx.fill();
    ctx.stroke();
}

function drawSolidDiagram(canvas, type, r, h) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, ch = canvas.height;
    ctx.clearRect(0, 0, w, ch);

    const cx = w / 2, cy = ch / 2;
    ctx.strokeStyle = '#ffd60a';
    ctx.fillStyle = 'rgba(255, 214, 10, 0.2)';
    ctx.lineWidth = 2;

    if (type === 'sphere') {
        const rad = 75;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();

        // Equator ellipse
        ctx.beginPath();
        ctx.ellipse(cx, cy, rad, rad * 0.35, 0, 0, Math.PI * 2);
        ctx.setLineDash([4, 4]); ctx.stroke(); ctx.setLineDash([]);

        // Radius line
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + rad, cy);
        ctx.strokeStyle = '#fff'; ctx.stroke();
        ctx.fillStyle = '#fff'; ctx.fillText(`R = ${r}`, cx + 25, cy - 8);
    } else if (type === 'cylinder') {
        const rw = 60, rh = 100;
        ctx.beginPath();
        ctx.ellipse(cx, cy - rh / 2, rw, 20, 0, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cx - rw, cy - rh / 2); ctx.lineTo(cx - rw, cy + rh / 2);
        ctx.moveTo(cx + rw, cy - rh / 2); ctx.lineTo(cx + rw, cy + rh / 2);
        ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(cx, cy + rh / 2, rw, 20, 0, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
    } else if (type === 'cone') {
        const rw = 70, rh = 110;
        ctx.beginPath();
        ctx.moveTo(cx, cy - rh / 2);
        ctx.lineTo(cx - rw, cy + rh / 2);
        ctx.lineTo(cx + rw, cy + rh / 2);
        ctx.closePath();
        ctx.fill(); ctx.stroke();

        ctx.beginPath();
        ctx.ellipse(cx, cy + rh / 2, rw, 18, 0, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
    }
}

/* ----------------------------------------------------
   10. MOTION / KINEMATICS LAB
   ---------------------------------------------------- */
function switchMotionMode(mode) {
    ['pos', 'vel', 'acc'].forEach(m => {
        const btn = document.getElementById(`btn-motion-mode-${m}`);
        if (btn) {
            btn.classList.toggle('active', m === mode);
            btn.classList.toggle('secondary', m !== mode);
        }
    });

    const lbl = document.getElementById('motion-lbl-fn');
    const s0Group = document.getElementById('motion-group-s0');
    const v0Group = document.getElementById('motion-group-v0');

    if (mode === 'pos') {
        if (lbl) lbl.innerText = calcT('Դիրքի ֆունկցիա՝ s(t) (մետր)');
        if (s0Group) s0Group.style.display = 'none';
        if (v0Group) v0Group.style.display = 'none';
    } else if (mode === 'vel') {
        if (lbl) lbl.innerText = calcT('Արագության ֆունկցիա՝ v(t) (մ/վ)');
        if (s0Group) s0Group.style.display = 'block';
        if (v0Group) v0Group.style.display = 'none';
    } else if (mode === 'acc') {
        if (lbl) lbl.innerText = calcT('Արագացման ֆունկցիա՝ a(t) (մ/վ²)');
        if (s0Group) s0Group.style.display = 'block';
        if (v0Group) v0Group.style.display = 'block';
    }
}

function applyMotionPreset(val) {
    if (!val) return;
    const parts = val.split(',');
    const mode = parts[0];
    switchMotionMode(mode);
    document.getElementById('motion-input-fn').value = parts[1];
    document.getElementById('motion-input-t1').value = parts[2];
    document.getElementById('motion-input-t2').value = parts[3];
    calculateMotion();
}

function calculateMotion() {
    const mode = ['pos', 'vel', 'acc'].find(m =>
        document.getElementById(`btn-motion-mode-${m}`)?.classList.contains('active')
    ) || 'vel';

    const fnStr = document.getElementById('motion-input-fn')?.value.trim();
    const t1 = parseFloat(document.getElementById('motion-input-t1')?.value || 0);
    const t2 = parseFloat(document.getElementById('motion-input-t2')?.value || 2);
    const s0 = parseFloat(document.getElementById('motion-input-s0')?.value || 0);
    const v0 = parseFloat(document.getElementById('motion-input-v0')?.value || 0);

    const out = document.getElementById('motion-output-card');
    const canvas = document.getElementById('motion-canvas');
    if (!out) return;
    out.style.display = 'block';

    try {
        if (![t1,t2,s0,v0].every(Number.isFinite) || t2 < t1) throw new Error('Պետք է լինի t₂ ≥ t₁, իսկ սկզբնական տվյալները՝ վավեր');
        const f = MathEvaluator.compile(fnStr);

        if (mode === 'pos') {
            const v = (t) => CalculusEngine.numericalDerivative(f, t);
            const a = (t) => CalculusEngine.numericalDerivative(v, t);
            const s_t1 = f(t1);
            const s_t2 = f(t2);
            const deltaS = s_t2 - s_t1;
            const path = CalculusEngine.simpson(t => Math.abs(v(t)),t1,t2,300);

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Կապեր՝ $v(t) = s'(t)$, $a(t) = v'(t) = s''(t)$</p>
                    <p>Սկզբնական դիրք՝ $s(${t1}) = ${formatResultNumber(s_t1)}$ մ</p>
                    <p>Անցած ճանապարհ՝ $L = ${formatResultNumber(path)}$ մետր</p>
                    <p>Վերջնական արագացում՝ $a(${t2}) = ${formatResultNumber(a(t2))}$ մ/վ²</p>
                    <p>Վերջնական դիրք՝ $s(${t2}) = ${formatResultNumber(s_t2)}$ մ</p>
                    <p style="color:#f72585; font-size:1.15rem;">Տեղաշարժ՝ $\\Delta s = s(${t2}) - s(${t1}) = ${formatResultNumber(deltaS)}$ մետր</p>
                    <p>Արագություն $t_1$-ում՝ $v(${t1}) = ${formatResultNumber(v(t1))}$ մ/վ, $t_2$-ում՝ $v(${t2}) = ${formatResultNumber(v(t2))}$ մ/վ</p>
                </div>
            `);
            if (canvas) {
                canvas.style.display = 'block';
                drawMotionPlotCanvas(canvas, f, t1, t2, 'Դիրք՝ s(t) [մ]');
            }
        } else if (mode === 'vel') {
            // v(t) -> Displacement vs Total Distance!
            const deltaS = CalculusEngine.simpson(f, t1, t2, 300);
            const totalDistance = CalculusEngine.simpson((t) => Math.abs(f(t)), t1, t2, 300);
            const finalPos = s0 + deltaS;

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Հիմնական կապեր՝ $\\Delta s = \\int_{t_1}^{t_2} v(t) dt$, $L = \\int_{t_1}^{t_2} |v(t)| dt$</p>
                    <p style="color:#06d6a0; font-size:1.2rem;">Տեղաշարժ (Displacement)՝ $\\Delta s = ${formatResultNumber(deltaS)}$ մետր</p>
                    <p style="color:#f72585; font-size:1.2rem;">Անցած ճանապարհ (Total Distance)՝ $L = ${formatResultNumber(totalDistance)}$ մետր</p>
                    <p>Վերջնական դիրք՝ $s(${t2}) = s_0 + \\Delta s = ${formatResultNumber(finalPos)}$ մ (եթե $s(${t1}) = ${s0}$ մ)</p>
                </div>
            `);
            if (canvas) {
                canvas.style.display = 'block';
                drawMotionPlotCanvas(canvas, f, t1, t2, 'Արագություն՝ v(t) [մ/վ]');
            }
        } else if (mode === 'acc') {
            const deltaV = CalculusEngine.simpson(f, t1, t2, 300);
            const finalV = v0 + deltaV;
            const deltaS = v0 * (t2-t1) + CalculusEngine.simpson(t => (t2-t)*f(t),t1,t2,300);
            const finalPos = s0 + deltaS;
            const velocity = t => v0 + CalculusEngine.simpson(f,t1,t,100);
            const totalDistance = CalculusEngine.simpson(t => Math.abs(velocity(t)),t1,t2,300);

            renderLabMarkup(out, `
                <div style="font-size:0.95rem; line-height:1.6;">
                    <p>Հիմնական կապեր՝ $v(t) = v_0 + \\int_{t_1}^{t} a(\\tau) d\\tau$, $s(t) = s_0 + \\int_{t_1}^{t} v(\\tau) d\\tau$</p>
                    <p style="color:#ffd60a; font-size:1.15rem;">Արագության փոփոխություն՝ $\\Delta v = ${formatResultNumber(deltaV)}$ մ/վ</p>
                    <p>Վերջնական արագություն՝ $v(${t2}) = v_0 + \\Delta v = ${formatResultNumber(finalV)}$ մ/վ</p>
                    <p>Վերջնական դիրք՝ $s(${t2}) = ${formatResultNumber(finalPos)}$ մ</p>
                    <p>Տեղաշարժ՝ $\\Delta s = ${formatResultNumber(deltaS)}$ մետր</p>
                    <p>Անցած ճանապարհ՝ $L = ${formatResultNumber(totalDistance)}$ մետր</p>
                </div>
            `);
            if (canvas) {
                canvas.style.display = 'block';
                drawMotionPlotCanvas(canvas, f, t1, t2, 'Արագացում՝ a(t) [մ/վ²]');
            }
        }
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);
    } catch (e) {
        renderLabMarkup(out, `<p style="color:var(--accent-pink);">Սխալ՝ ${e.message}</p>`);
    }
}

function drawMotionPlotCanvas(canvas, f, t1, t2, label) {
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const minT = Math.min(t1, t2) - 0.2;
    const maxT = Math.max(t1, t2) + 0.2;
    const toScreenX = (t) => ((t - minT) / (maxT - minT)) * (w - 80) + 40;

    let minY = 0, maxY = 0;
    for (let i = 0; i <= 100; i++) {
        const t = minT + (i / 100) * (maxT - minT);
        try {
            const y = f(t);
            if (Number.isFinite(y)) { minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
        } catch {}
    }
    minY -= 1; maxY += 1;
    const toScreenY = (y) => h - 30 - ((y - minY) / (maxY - minY)) * (h - 60);

    const zeroY = toScreenY(0);
    ctx.strokeStyle = 'rgba(255,255,255,0.2)';
    ctx.beginPath(); ctx.moveTo(0, zeroY); ctx.lineTo(w, zeroY); ctx.stroke();

    // Curve
    ctx.strokeStyle = '#f72585';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    let st = false;
    for (let i = 0; i <= 150; i++) {
        const t = minT + (i / 150) * (maxT - minT);
        try {
            const y = f(t);
            if (Number.isFinite(y)) {
                const sx = toScreenX(t), sy = toScreenY(y);
                if (!st) { ctx.moveTo(sx, sy); st = true; } else ctx.lineTo(sx, sy);
            }
        } catch {}
    }
    ctx.stroke();

    ctx.fillStyle = 'var(--text-muted)';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText(calcT(label), 45, 25);
}

/* ----------------------------------------------------
   11. DATA VISUALIZER (VENN, TREE, NORMAL PDF)
   ---------------------------------------------------- */
function updateVisualizer() {
    const type = document.getElementById('dist-select')?.value;
    const paramsDiv = document.getElementById('dist-params');
    const analysisPanel = document.getElementById('dist-analysis');

    if (analysisPanel) analysisPanel.style.display = 'none';
    if (paramsDiv) paramsDiv.innerHTML = '';

    if (type === 'normal') {
        paramsDiv.innerHTML = `
            <div class="param-group">
                <label>μ</label> <input type="number" id="param-mu" value="0" style="width:70px">
            </div>
            <div class="param-group">
                <label>σ</label> <input type="number" id="param-sigma" value="1" step="0.1" style="width:70px">
            </div>
            <div class="param-group">
                <label>Min</label> <input type="number" id="param-a" value="-1" style="width:70px">
            </div>
            <div class="param-group">
                <label>Max</label> <input type="number" id="param-b" value="1" style="width:70px">
            </div>
        `;
    } else if (type === 'venn') {
        paramsDiv.innerHTML = `
            <div class="param-group" style="padding:0; background:none; border:none;">
                <select id="venn-sets" onchange="renderVennInputs()" class="modern-select">
                    <option value="2">2 Sets (A, B)</option>
                    <option value="3">3 Sets (A, B, C)</option>
                </select>
            </div>
            <div id="venn-vals" style="display:flex; flex-wrap:wrap; gap:10px;"></div>
            <div id="venn-ops-container" style="width:100%; margin-top:10px; border-top:1px solid var(--border-dim); padding-top:10px;"></div>
        `;
        renderVennInputs();
        setTimeout(drawGraph, 100);
    } else if (type === 'tree') {
        paramsDiv.innerHTML = `
            <div style="width:100%; display:flex; flex-direction:column; gap:10px;">
                <div style="display:flex; gap:15px; align-items:center;">
                    <div class="param-group">
                        <label>Քայլեր (Max 3)</label>
                        <input type="number" id="tree-steps" value="2" min="1" max="3" onchange="renderTreeCustomInputs(); setTimeout(drawGraph, 100);" style="width:50px">
                    </div>
                </div>
                <div id="tree-custom-container" style="display:grid; gap:12px; padding:15px; background:var(--bg-panel); border:1px solid var(--glass-border); border-radius:12px;"></div>
            </div>
        `;
        renderTreeCustomInputs();
        setTimeout(drawGraph, 100);
    }
}

function renderTreeCustomInputs() {
    const stepInput = document.getElementById('tree-steps');
    let steps = parseInt(stepInput?.value || 2);
    if (steps > 3) steps = 3;
    if (steps < 1) steps = 1;

    const container = document.getElementById('tree-custom-container');
    if (!container) return;
    container.innerHTML = '';

    const inputBg = 'var(--bg-input)';
    const textColor = 'var(--text-primary)';
    const mutedColor = 'var(--text-muted)';

    const createRow = (label, idPrefix, defName1, defName2) => `
        <div style="border-bottom:1px solid var(--border-dim); padding-bottom:8px; margin-bottom:8px;">
            <span style="font-size:0.75rem; color:${mutedColor}; text-transform:uppercase;">${label}</span>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-top:5px;">
                <div style="display:flex; flex-direction:column; gap:4px;">
                     <input type="text" id="${idPrefix}-name1" value="${defName1}" placeholder="Name" oninput="drawGraph()" style="width:100%; background:${inputBg}; border:1px solid var(--glass-border); border-radius:4px; color:var(--neon-purple); padding:4px 8px; font-size:0.85rem;">
                     <div style="display:flex; gap:8px; align-items:center;">
                        <span style="font-size:0.75rem; color:${mutedColor};">P:</span>
                        <input type="number" id="${idPrefix}-p" value="0.5" step="0.1" min="0" max="1" oninput="drawGraph()" style="width:100%; background:${inputBg}; border:1px solid var(--glass-border); border-radius:4px; color:${textColor}; padding:2px 8px; font-size:0.85rem;">
                     </div>
                </div>
                <div style="display:flex; flex-direction:column; gap:4px;">
                     <input type="text" id="${idPrefix}-name2" value="${defName2}" placeholder="Name" oninput="drawGraph()" style="width:100%; background:${inputBg}; border:1px solid var(--glass-border); border-radius:4px; color:var(--accent-pink); padding:4px 8px; font-size:0.85rem;">
                     <div style="display:flex; gap:8px; align-items:center;">
                        <span style="font-size:0.75rem; color:${mutedColor};">1-P</span>
                     </div>
                </div>
            </div>
        </div>
    `;

    let html = createRow("Սկզբնական հանգույց (Փուլ 1)", "node-0-0", "A", "B");
    if (steps >= 2) {
        html += `<div style="margin-top:5px; color:#aaa; font-size:0.8rem;">Փուլ 2 (Պայմանական)</div>`;
        html += createRow("Եթե A:", "node-1-0", "A1", "B1");
        html += createRow("Եթե B:", "node-1-1", "A2", "B2");
    }
    if (steps >= 3) {
        html += `<div style="margin-top:5px; color:#aaa; font-size:0.8rem;">Փուլ 3</div>`;
        html += createRow("Եթե A1:", "node-2-0", "A1-1", "A1-2");
        html += createRow("Եթե B1:", "node-2-1", "B1-1", "B1-2");
        html += createRow("Եթե A2:", "node-2-2", "A2-1", "A2-2");
        html += createRow("Եթե B2:", "node-2-3", "B2-1", "B2-2");
    }
    container.innerHTML = html;
}

function renderVennInputs() {
    const count = document.getElementById('venn-sets')?.value;
    const div = document.getElementById('venn-vals');
    if (!div) return;
    if (count === '2') {
        div.innerHTML = `
            <div class="param-group"><label>|A|</label> <input type="number" id="v-a" value="50" oninput="drawGraph()"></div>
            <div class="param-group"><label>|B|</label> <input type="number" id="v-b" value="40" oninput="drawGraph()"></div>
            <div class="param-group"><label>|A∩B|</label> <input type="number" id="v-ab" value="10" oninput="drawGraph()"></div>
            <div class="param-group"><label>Total</label> <input type="number" id="v-total" value="100" oninput="drawGraph()"></div>
        `;
    } else {
        div.innerHTML = `
             <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; font-size:0.8rem;">
                <div class="param-group"><label>|A|</label> <input type="number" id="v-a" value="30" oninput="drawGraph()"></div>
                <div class="param-group"><label>|B|</label> <input type="number" id="v-b" value="30" oninput="drawGraph()"></div>
                <div class="param-group"><label>|C|</label> <input type="number" id="v-c" value="30" oninput="drawGraph()"></div>
                <div class="param-group"><label>|AB|</label> <input type="number" id="v-ab" value="10" oninput="drawGraph()"></div>
                <div class="param-group"><label>|AC|</label> <input type="number" id="v-ac" value="10" oninput="drawGraph()"></div>
                <div class="param-group"><label>|BC|</label> <input type="number" id="v-bc" value="10" oninput="drawGraph()"></div>
                <div class="param-group"><label>|ABC|</label> <input type="number" id="v-abc" value="5" oninput="drawGraph()"></div>
                <div class="param-group"><label>Total</label> <input type="number" id="v-total" value="100" oninput="drawGraph()"></div>
            </div>
        `;
    }
    renderVennOps();
}

function renderVennOps() {
    const count = document.getElementById('venn-sets')?.value;
    const container = document.getElementById('venn-ops-container');
    if (!container) return;

    let html = `<label style="color:var(--text-muted); font-size:0.8rem; display:block; margin-bottom:8px;">Գործողություններ՝</label><div style="display:flex; gap:8px; flex-wrap:wrap;">`;
    if (count === '2') {
        html += `
            <button class="op-btn" onclick="drawGraph('union')">A ∪ B</button>
            <button class="op-btn" onclick="drawGraph('intersection')">A ∩ B</button>
            <button class="op-btn" onclick="drawGraph('onlyA')">A \\ B</button>
            <button class="op-btn" onclick="drawGraph('onlyB')">B \\ A</button>
            <button class="op-btn" onclick="drawGraph('complement')">(A ∪ B)'</button>
        `;
    } else {
        html += `
            <button class="op-btn" onclick="drawGraph('union')">A ∪ B ∪ C</button>
            <button class="op-btn" onclick="drawGraph('intersection')">A ∩ B ∩ C</button>
            <button class="op-btn" onclick="drawGraph('onlyA')">A միայն</button>
            <button class="op-btn" onclick="drawGraph('onlyB')">B միայն</button>
            <button class="op-btn" onclick="drawGraph('onlyC')">C միայն</button>
            <button class="op-btn" onclick="drawGraph('complement')">Դուրս</button>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function drawGraph(highlightMode = null) {
    const type = document.getElementById('dist-select')?.value;
    const canvas = document.getElementById('lab-canvas');
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = (rect.width || 600) * dpr;
    canvas.height = (rect.height || 380) * dpr;

    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    const w = rect.width || 600;
    const h = rect.height || 380;

    ctx.clearRect(0, 0, w, h);

    const analysisPanel = document.getElementById('dist-analysis');
    if (analysisPanel) analysisPanel.style.display = 'block';

    if (type === 'normal') {
        drawNormal(ctx, w, h);
    } else if (type === 'venn') {
        drawVenn(ctx, w, h, highlightMode);
    } else if (type === 'tree') {
        drawTree(ctx, w, h);
    }
}

function drawNormal(ctx, w, h) {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const mu = parseFloat(document.getElementById('param-mu')?.value || 0);
    const sigma = parseFloat(document.getElementById('param-sigma')?.value || 1);
    let a = parseFloat(document.getElementById('param-a')?.value);
    let b = parseFloat(document.getElementById('param-b')?.value);

    if (isNaN(a)) a = mu - sigma;
    if (isNaN(b)) b = mu + sigma;
    if (a > b) [a, b] = [b, a];

    const pdf = (x) => (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * ((x - mu) / sigma) ** 2);
    const minX = mu - 4 * sigma, maxX = mu + 4 * sigma;
    const range = maxX - minX;

    // Base Line
    ctx.beginPath();
    ctx.moveTo(0, h - 30);
    ctx.lineTo(w, h - 30);
    ctx.strokeStyle = theme === 'light' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)';
    ctx.lineWidth = 1;
    ctx.stroke();

    const maxPdf = pdf(mu);
    const scaleY = (h - 70) / maxPdf;

    // Shaded Area
    ctx.beginPath();
    let started = false;
    for (let px = 0; px <= w; px += 2) {
        const x = minX + (px / w) * range;
        if (x >= a && x <= b) {
            const y = (h - 30) - pdf(x) * scaleY;
            if (!started) {
                ctx.moveTo(px, h - 30);
                ctx.lineTo(px, y);
                started = true;
            } else {
                ctx.lineTo(px, y);
            }
        }
    }
    const endPx = ((b - minX) / range) * w;
    ctx.lineTo(Math.min(w, endPx), h - 30);
    ctx.closePath();
    ctx.fillStyle = 'rgba(67, 97, 238, 0.4)';
    ctx.fill();

    // PDF Curve
    ctx.beginPath();
    for (let px = 0; px <= w; px += 2) {
        const x = minX + (px / w) * range;
        const y = (h - 30) - pdf(x) * scaleY;
        if (px === 0) ctx.moveTo(px, y); else ctx.lineTo(px, y);
    }
    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Stats
    const p = normCdf(b, mu, sigma) - normCdf(a, mu, sigma);
    const out = document.getElementById('dist-output');
    if (out) {
        renderLabMarkup(out, `
            <div style="display:flex; justify-content:space-between; flex-wrap:wrap; gap:10px;">
                <div>$P(${a} \\le X \\le ${b})$: <span style="color:var(--accent-gold);">${formatResultNumber(p)}</span></div>
                <div>Z₁: ${formatResultNumber((a - mu) / sigma)}</div>
                <div>Z₂: ${formatResultNumber((b - mu) / sigma)}</div>
            </div>
        `);
        if (window.MathJax && window.MathJax.typesetPromise) queueMathTypeset(out);
    }
}

function drawVenn(ctx, w, h, highlight) {
    const count = document.getElementById('venn-sets')?.value;
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    const cx = w / 2, cy = h / 2;
    const txtColor = theme === 'light' ? '#1e293b' : '#ffffff';
    const out = document.getElementById('dist-output');

    if (count === '2') {
        const nA = parseInt(document.getElementById('v-a')?.value) || 0;
        const nB = parseInt(document.getElementById('v-b')?.value) || 0;
        const nAB = parseInt(document.getElementById('v-ab')?.value) || 0;
        const total = parseInt(document.getElementById('v-total')?.value) || 100;

        const r = 85;
        const x1 = cx - 55, y1 = cy;
        const x2 = cx + 55, y2 = cy;

        ctx.strokeStyle = txtColor;
        ctx.lineWidth = 2;

        ctx.beginPath(); ctx.arc(x1, y1, r, 0, Math.PI * 2);
        ctx.fillStyle = highlight === 'onlyA' || highlight === 'union' ? 'rgba(247, 37, 133, 0.4)' : 'rgba(247, 37, 133, 0.15)';
        ctx.fill(); ctx.stroke();

        ctx.beginPath(); ctx.arc(x2, y2, r, 0, Math.PI * 2);
        ctx.fillStyle = highlight === 'onlyB' || highlight === 'union' ? 'rgba(67, 97, 238, 0.4)' : 'rgba(67, 97, 238, 0.15)';
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = txtColor;
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText('A', x1 - 50, y1 - 60);
        ctx.fillText('B', x2 + 40, y2 - 60);

        const onlyA = nA - nAB;
        const onlyB = nB - nAB;
        const union = onlyA + onlyB + nAB;

        if (out) {
            renderLabMarkup(out, `
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px;">
                    <div>P(A) = ${formatResultNumber(nA / total)}</div>
                    <div>P(B) = ${formatResultNumber(nB / total)}</div>
                    <div>P(A ∩ B) = ${formatResultNumber(nAB / total)}</div>
                    <div>P(A ∪ B) = ${formatResultNumber(union / total)}</div>
                </div>
            `);
        }
    } else {
        // 3 sets simple fallback render
        ctx.fillStyle = txtColor;
        ctx.font = '14px Inter, sans-serif';
        ctx.fillText('3 Sets Venn Diagram Active', cx - 80, cy);
    }
}

function drawTree(ctx, w, h) {
    let steps = parseInt(document.getElementById('tree-steps')?.value || 2);
    if (steps > 3) steps = 3;
    if (steps < 1) steps = 1;

    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 2;

    const startX = 60;
    const startY = h / 2;
    const layerWidth = (w - 120) / steps;
    const results = [];

    function getNodeData(level, idx) {
        const name1 = document.getElementById(`node-${level}-${idx}-name1`)?.value || 'A';
        const name2 = document.getElementById(`node-${level}-${idx}-name2`)?.value || 'B';
        const pInput = document.getElementById(`node-${level}-${idx}-p`);
        const p = pInput ? parseFloat(pInput.value) : 0.5;
        return { name1, name2, p };
    }

    function drawBranch(x, y, level, nodeIndex, probSoFar, pathStr) {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        const nodeColor = theme === 'light' ? '#7c3aed' : '#ffffff';

        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        if (level === steps) {
            ctx.fillStyle = theme === 'light' ? '#b45309' : '#ffd60a';
            ctx.font = 'bold 12px Inter';
            ctx.fillText((probSoFar * 100).toFixed(1) + '%', x + 35, y);
            results.push({ path: pathStr, p: probSoFar });
            return;
        }

        const nextX = x + layerWidth;
        const offset = (h / 2.2) / Math.pow(2, level + 1);
        const { name1, name2, p } = getNodeData(level, nodeIndex);
        const q = 1 - p;

        // Up branch
        const yUp = y - offset;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nextX, yUp);
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.8)';
        ctx.stroke();

        const midX = (x + nextX) / 2;
        const midY = (y + yUp) / 2;
        ctx.fillStyle = theme === 'light' ? '#0369a1' : '#4cc9f0';
        ctx.fillText(`${name1} (${p.toFixed(2)})`, midX, midY - 10);

        drawBranch(nextX, yUp, level + 1, nodeIndex * 2, probSoFar * p, pathStr + (pathStr ? " → " : "") + name1);

        // Down branch
        const yDown = y + offset;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(nextX, yDown);
        ctx.strokeStyle = 'rgba(247, 37, 133, 0.8)';
        ctx.stroke();

        const midDY = (y + yDown) / 2;
        ctx.fillStyle = theme === 'light' ? '#be185d' : '#f72585';
        ctx.fillText(`${name2} (${q.toFixed(2)})`, midX, midDY + 10);

        drawBranch(nextX, yDown, level + 1, nodeIndex * 2 + 1, probSoFar * q, pathStr + (pathStr ? " → " : "") + name2);
    }

    drawBranch(startX, startY, 0, 0, 1, "");

    const out = document.getElementById('dist-output');
    if (out && results.length > 0) {
        let table = `<div style="max-height:110px; overflow-y:auto; margin-top:8px;">
        <table style="width:100%; text-align:left; font-size:0.8rem; border-collapse:collapse;">
            <tr style="border-bottom:1px solid var(--border-dim); color:var(--text-muted);">
                <th style="padding:4px;">Ելք</th>
                <th style="padding:4px;">Հավանականություն</th>
                <th style="padding:4px;">Տոկոս</th>
            </tr>`;
        results.forEach(r => {
            table += `<tr>
                <td style="padding:4px; color:var(--text-primary);">${r.path}</td>
                <td style="padding:4px; color:var(--text-muted);">${formatResultNumber(r.p)}</td>
                <td style="padding:4px; color:var(--accent-gold);">${(r.p * 100).toFixed(1)}%</td>
            </tr>`;
        });
        table += `</table></div>`;
        renderLabMarkup(out, table);
    }
}

// Global initializers
window.switchLabMode = switchLabMode;
window.switchCalcSubmode = switchCalcSubmode;
window.applyDerivPreset = applyDerivPreset;
window.calculateDerivative = calculateDerivative;
window.applyIndefPreset = applyIndefPreset;
window.calculateIndefiniteIntegral = calculateIndefiniteIntegral;
window.applyDefPreset = applyDefPreset;
window.calculateDefiniteIntegral = calculateDefiniteIntegral;
window.switchAreaMode = switchAreaMode;
window.applyAreaPreset = applyAreaPreset;
window.findAreaIntersections = findAreaIntersections;
window.calculateArea = calculateArea;
window.switchVolumeMode = switchVolumeMode;
window.updateSolidInputs = updateSolidInputs;
window.applyVolumePreset = applyVolumePreset;
window.calculateVolume = calculateVolume;
window.switchMotionMode = switchMotionMode;
window.applyMotionPreset = applyMotionPreset;
window.calculateMotion = calculateMotion;
window.MathEvaluator = MathEvaluator;
window.CalculusEngine = CalculusEngine;
window.standardNormalCdf = standardNormalCdf;
