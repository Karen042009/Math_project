  problemTemplates: [
    /* ============================================================
     * PROBABILITY TEMPLATES (8 templates)
     * ============================================================ */
    {
      id: "tmpl_prob_classical",
      track: "probability",
      topic: "basic",
      difficulty: "beginner",
      theoryId: "theory-classical-prob",
      generate: () => {
        const red = Math.floor(Math.random() * 5) + 3;
        const blue = Math.floor(Math.random() * 5) + 3;
        const total = red + blue;
        const paramId = `gen_prob_balls_${red}_${blue}`;
        return {
          id: paramId,
          track: "probability",
          topic: "basic",
          question: {
            hy: `Արկղում կա ${red} կարմիր և ${blue} կապույտ գնդակ: Պատահական հանում են մեկը: Որքա՞ն է կարմիր գնդակ հանելու հավանականությունը (կոտորակով, օր.՝ 3/${total} կամ տասնորդական):`,
            en: `An urn contains ${red} red and ${blue} blue balls. One ball is drawn at random. What is the probability of drawing a red ball (fraction e.g. 3/${total} or decimal)?`,
            ru: `В урне ${red} красных и ${blue} синих шаров. Наугад извлекают один. Какова вероятность достать красный шар (дробь, например 3/${total}, или число)?`,
          },
          answer: `${red}/${total}`,
          related_theory_id: "theory-classical-prob",
          related_theory_hint: {
            hy: `Ընդհանուր գնդակների քանակը n = ${total} է։ Կարմիրների քանակը m = ${red} է։ P(A) = m/n։`,
            en: `Total balls n = ${total}. Favorable red balls m = ${red}. P(A) = m/n.`,
            ru: `Всего шаров n = ${total}. Благоприятных красных m = ${red}. P(A) = m/n.`,
          },
          related_theory_solution: {
            hy: `Ընդհանուր հնարավոր ելքերը n = ${red} + ${blue} = ${total}։ Բարենպաստ ելքերը m = ${red}։ Հետևաբար P = ${red}/${total} ≈ ${(red / total).toFixed(4)}։`,
            en: `Total outcomes n = ${total}, favorable m = ${red}. P = ${red}/${total} ≈ ${(red / total).toFixed(4)}.`,
            ru: `Всего исходов n = ${total}, благоприятных m = ${red}. P = ${red}/${total} ≈ ${(red / total).toFixed(4)}.`,
          },
        };
      },
    },
    {
      id: "tmpl_prob_combinations",
      track: "probability",
      topic: "combinatorics",
      difficulty: "intermediate",
      theoryId: "theory-combinations",
      generate: () => {
        const n = Math.floor(Math.random() * 4) + 6; // 6 to 9
        const k = Math.floor(Math.random() * 2) + 2; // 2 or 3
        const fact = (num) => (num <= 1 ? 1 : num * fact(num - 1));
        const ans = Math.round(fact(n) / (fact(k) * fact(n - k)));
        const paramId = `gen_prob_comb_${n}_${k}`;
        return {
          id: paramId,
          track: "probability",
          topic: "combinatorics",
          question: {
            hy: `${n} աշակերտից քանի՞ եղանակով կարելի է ընտրել ${k} հերթապահ (կարգը կարևոր չէ):`,
            en: `In how many ways can ${k} monitors be chosen from a group of ${n} students (order does not matter)?`,
            ru: `Сколькими способами можно выбрать ${k} дежурных из ${n} учеников (порядок не важен)?`,
          },
          answer: String(ans),
          related_theory_id: "theory-combinations",
          related_theory_hint: {
            hy: `Քանի որ կարգը կարևոր չէ, կիրառեք զուգորդությունների բանաձևը՝ C(n, k) = n! / (k! · (n-k)!)։`,
            en: `Since order does not matter, use the combinations formula: C(n, k) = n! / (k! · (n-k)!).`,
            ru: `Поскольку порядок не важен, используйте сочетания: C(n, k) = n! / (k! · (n-k)!).`,
          },
          related_theory_solution: {
            hy: `C(${n}, ${k}) = ${n}! / (${k}! · ${n - k}!) = ${ans}։`,
            en: `C(${n}, ${k}) = ${n}! / (${k}! · ${n - k}!) = ${ans}.`,
            ru: `C(${n}, ${k}) = ${n}! / (${k}! · ${n - k}!) = ${ans}.`,
          },
        };
      },
    },
    {
      id: "tmpl_prob_permutations",
      track: "probability",
      topic: "combinatorics",
      difficulty: "beginner",
      theoryId: "theory-permutations",
      generate: () => {
        const n = Math.floor(Math.random() * 3) + 4; // 4 to 6
        const fact = (num) => (num <= 1 ? 1 : num * fact(num - 1));
        const ans = fact(n);
        const paramId = `gen_prob_perm_${n}`;
        return {
          id: paramId,
          track: "probability",
          topic: "combinatorics",
          question: {
            hy: `Քանի՞ տարբեր եղանակով կարելի է դարակում շարել ${n} տարբեր գրքեր:`,
            en: `In how many ways can ${n} distinct books be arranged on a shelf?`,
            ru: `Сколькими способами можно расставить ${n} различных книг на полке?`,
          },
          answer: String(ans),
          related_theory_id: "theory-permutations",
          related_theory_hint: {
            hy: `Կիրառեք տեղափոխությունների բանաձևը՝ P_n = n! = 1 · 2 · 3 · ... · n։`,
            en: `Use permutations formula: P_n = n! = 1 · 2 · ... · n.`,
            ru: `Используйте перестановки: P_n = n! = 1 · 2 · ... · n.`,
          },
          related_theory_solution: {
            hy: `P_${n} = ${n}! = ${ans}։`,
            en: `P_${n} = ${n}! = ${ans}.`,
            ru: `P_${n} = ${n}! = ${ans}.`,
          },
        };
      },
    },
    {
      id: "tmpl_prob_bernoulli",
      track: "probability",
      topic: "distributions",
      difficulty: "intermediate",
      theoryId: "theory-binomial",
      generate: () => {
        const n = Math.floor(Math.random() * 3) + 3; // 3 to 5
        const target = Math.floor(Math.random() * (n - 1)) + 1;
        const fact = (num) => (num <= 1 ? 1 : num * fact(num - 1));
        const comb = (N, K) => fact(N) / (fact(K) * fact(N - K));
        const prob = comb(n, target) * Math.pow(0.5, n);
        const paramId = `gen_prob_bern_${n}_${target}`;
        return {
          id: paramId,
          track: "probability",
          topic: "distributions",
          question: {
            hy: `Հավասարակշռված մետաղադրամը նետում են ${n} անգամ: Գտնել ճիշտ ${target} անգամ «Զինանշան» ընկնելու հավանականությունը (կլորացնել մինչև 4 տասնորդական):`,
            en: `A fair coin is flipped ${n} times. Find the probability of getting exactly ${target} heads (round to 4 decimals).`,
            ru: `Правильную монету бросают ${n} раз. Какова вероятность выпадения ровно ${target} орлов (округлите до 4 знаков)?`,
          },
          answer: prob.toFixed(4),
          related_theory_id: "theory-binomial",
          related_theory_hint: {
            hy: `Կիրառեք Բեռնուլիի բանաձևը՝ P_n(k) = C(n, k) · p^k · (1-p)^(n-k), որտեղ p = 0.5:`,
            en: `Apply Bernoulli's formula: P_n(k) = C(n, k) · p^k · (1-p)^(n-k) with p = 0.5.`,
            ru: `Примените формулу Бернулли: P_n(k) = C(n, k) · p^k · (1-p)^(n-k) при p = 0.5.`,
          },
          related_theory_solution: {
            hy: `P_${n}(${target}) = C(${n}, ${target}) · (0.5)^${n} = ${comb(n, target)} · ${(Math.pow(0.5, n)).toFixed(5)} ≈ ${prob.toFixed(4)}։`,
            en: `P_${n}(${target}) = C(${n}, ${target}) · (0.5)^${n} ≈ ${prob.toFixed(4)}.`,
            ru: `P_${n}(${target}) = C(${n}, ${target}) · (0.5)^${n} ≈ ${prob.toFixed(4)}.`,
          },
        };
      },
    },
    {
      id: "tmpl_prob_dice_sum",
      track: "probability",
      topic: "basic",
      difficulty: "intermediate",
      theoryId: "theory-classical-prob",
      generate: () => {
        const sum = Math.floor(Math.random() * 5) + 7; // 7, 8, 9, 10, 11
        let fav = 0;
        for (let i = 1; i <= 6; i++) {
          for (let j = 1; j <= 6; j++) {
            if (i + j === sum) fav++;
          }
        }
        const paramId = `gen_prob_dice_${sum}`;
        return {
          id: paramId,
          track: "probability",
          topic: "basic",
          question: {
            hy: `Նետում ենք երկու սովորական 6-նիստ զառ: Ինչի՞ է հավասար բացված միավորների գումարը ${sum} լինելու հավանականությունը (կոտորակով, օր.՝ ${fav}/36):`,
            en: `Two standard dice are rolled. What is the probability that their sum is ${sum} (fraction, e.g. ${fav}/36)?`,
            ru: `Бросают два стандартных кубика. Какова вероятность того, что сумма очков равна ${sum} (дробь, например ${fav}/36)?`,
          },
          answer: `${fav}/36`,
          related_theory_id: "theory-classical-prob",
          related_theory_hint: {
            hy: `Երկու զառի բոլոր հնարավոր ելքերի քանակը 6 · 6 = 36 է: Գտեք այն զույգերը (a, b), որտեղ a + b = ${sum}:`,
            en: `Total outcomes for two dice is 36. Count pairs summing to ${sum}.`,
            ru: `Всего исходов для двух кубиков 36. Подсчитайте пары с суммой ${sum}.`,
          },
          related_theory_solution: {
            hy: `Ընդհանուր ելքեր՝ 36: Բարենպաստ զույգերի քանակը՝ ${fav}: P = ${fav}/36 ≈ ${(fav / 36).toFixed(4)}։`,
            en: `Total = 36, favorable = ${fav}. P = ${fav}/36 ≈ ${(fav / 36).toFixed(4)}.`,
            ru: `Всего = 36, благоприятных = ${fav}. P = ${fav}/36 ≈ ${(fav / 36).toFixed(4)}.`,
          },
        };
      },
    },
    {
      id: "tmpl_prob_buffon",
      track: "probability",
      topic: "distributions",
      difficulty: "olympic",
      theoryId: "theory-geometric-prob",
      generate: () => {
        const L = (Math.floor(Math.random() * 4) + 2) * 10; // 20, 30, 40, 50
        const l = L / 2; // l <= L (short needle condition)
        const prob = (2 * l) / (Math.PI * L);
        const paramId = `gen_prob_buffon_${L}_${l}`;
        return {
          id: paramId,
          track: "probability",
          topic: "distributions",
          question: {
            hy: `Բյուֆոնի ասեղի խնդիր: Զուգահեռ գծերի հեռավորությունը L = ${L} սմ է, ասեղի երկարությունը՝ l = ${l} սմ (կարճ ասեղ, l ≤ L): Գտնել ասեղի՝ գիծը հատելու հավանականությունը (կլորացնել մինչև 4 տասնորդական):`,
            en: `Buffon's Needle Problem: Line spacing is L = ${L} cm, needle length is l = ${l} cm (short needle, l ≤ L). Find the probability that the needle intersects a line (round to 4 decimals).`,
            ru: `Задача об игле Бюффона: Расстояние между линиями L = ${L} см, длина иглы l = ${l} см (короткая игла, l ≤ L). Найдите вероятность пересечения (округлите до 4 знаков).`,
          },
          answer: prob.toFixed(4),
          related_theory_id: "theory-geometric-prob",
          related_theory_hint: {
            hy: `Քանի որ l ≤ L, կիրառեք դասական բանաձևը՝ P = (2 · l) / (π · L)։`,
            en: `Since l ≤ L, apply the classical formula: P = (2 · l) / (π · L).`,
            ru: `Так как l ≤ L, примените формулу: P = (2 · l) / (π · L).`,
          },
          related_theory_solution: {
            hy: `P = (2 · ${l}) / (π · ${L}) = ${2 * l} / (${L}π) = 1/π ≈ ${(1 / Math.PI).toFixed(4)}։`,
            en: `P = (2 · ${l}) / (π · ${L}) = 1/π ≈ ${(1 / Math.PI).toFixed(4)}.`,
            ru: `P = (2 · ${l}) / (π · ${L}) = 1/π ≈ ${(1 / Math.PI).toFixed(4)}.`,
          },
        };
      },
    },
    {
      id: "tmpl_prob_complementary",
      track: "probability",
      topic: "basic",
      difficulty: "beginner",
      theoryId: "theory-complementary",
      generate: () => {
        const pInt = Math.floor(Math.random() * 7) + 2; // 2 to 8
        const p = pInt / 10;
        const q = Math.round((1 - p) * 10) / 10;
        const paramId = `gen_prob_comp_${pInt}`;
        return {
          id: paramId,
          track: "probability",
          topic: "basic",
          question: {
            hy: `A պատահույթի հավանականությունը P(A) = ${p} է: Գտնել նրա լրացուցիչ (հակադիր) պատահույթի հավանականությունը՝ P(Ā):`,
            en: `The probability of event A is P(A) = ${p}. Find the probability of the complementary event P(Ā).`,
            ru: `Вероятность события A равна P(A) = ${p}. Найдите вероятность противоположного события P(Ā).`,
          },
          answer: String(q),
          related_theory_id: "theory-complementary",
          related_theory_hint: {
            hy: `Լրացուցիչ պատահույթների համար P(A) + P(Ā) = 1, ուստի P(Ā) = 1 - P(A)։`,
            en: `For complementary events P(A) + P(Ā) = 1, so P(Ā) = 1 - P(A).`,
            ru: `Для противоположных событий P(A) + P(Ā) = 1, следовательно P(Ā) = 1 - P(A).`,
          },
          related_theory_solution: {
            hy: `P(Ā) = 1 - ${p} = ${q}։`,
            en: `P(Ā) = 1 - ${p} = ${q}.`,
            ru: `P(Ā) = 1 - ${p} = ${q}.`,
          },
        };
      },
    },

    /* ============================================================
     * CALCULUS & INTEGRALS TEMPLATES (7 templates)
     * ============================================================ */
    {
      id: "tmpl_calc_derivative_poly",
      track: "integral",
      topic: "derivative",
      difficulty: "beginner",
      theoryId: "derivative-rules-formulas",
      generate: () => {
        const a = Math.floor(Math.random() * 4) + 2; // 2 to 5
        const n = Math.floor(Math.random() * 2) + 2; // 2 or 3
        const x0 = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
        const ans = a * n * Math.pow(x0, n - 1);
        const paramId = `gen_calc_deriv_${a}_${n}_${x0}`;
        return {
          id: paramId,
          track: "integral",
          topic: "derivative",
          question: {
            hy: `Գտնել f(x) = ${a}x^${n} ֆունկցիայի ածանցյալի արժեքը x = ${x0} կետում:`,
            en: `Find the derivative of f(x) = ${a}x^${n} evaluated at x = ${x0}.`,
            ru: `Найдите значение производной f(x) = ${a}x^${n} в точке x = ${x0}.`,
          },
          answer: String(ans),
          related_theory_id: "derivative-rules-formulas",
          related_theory_hint: {
            hy: `Ածանցյալը՝ f'(x) = ${a} · ${n} · x^${n - 1} = ${a * n}x^${n - 1}։ Տեղադրեք x = ${x0}։`,
            en: `Derivative: f'(x) = ${a * n}x^${n - 1}. Substitute x = ${x0}.`,
            ru: `Производная: f'(x) = ${a * n}x^${n - 1}. Подставьте x = ${x0}.`,
          },
          related_theory_solution: {
            hy: `f'(${x0}) = ${a * n} · (${x0})^${n - 1} = ${ans}։`,
            en: `f'(${x0}) = ${a * n} · (${x0})^${n - 1} = ${ans}.`,
            ru: `f'(${x0}) = ${a * n} · (${x0})^${n - 1} = ${ans}.`,
          },
        };
      },
    },
    {
      id: "tmpl_calc_definite_power",
      track: "integral",
      topic: "integral",
      difficulty: "beginner",
      theoryId: "newton-leibniz-solved-examples",
      generate: () => {
        const b = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
        // f(x) = 3x^2, F(x) = x^3
        const ans = Math.pow(b, 3);
        const paramId = `gen_calc_defpow_${b}`;
        return {
          id: paramId,
          track: "integral",
          topic: "integral",
          question: {
            hy: `Հաշվել որոշյալ ինտեգրալը՝ ∫₀^${b} 3x² dx:`,
            en: `Evaluate the definite integral: ∫₀^${b} 3x² dx.`,
            ru: `Вычислите определенный интеграл: ∫₀^${b} 3x² dx.`,
          },
          answer: String(ans),
          related_theory_id: "newton-leibniz-solved-examples",
          related_theory_hint: {
            hy: `Նախնական ֆունկցիան F(x) = x³ է։ Կիրառեք Նյուտոն-Լայբնիցի բանաձևը՝ [x³]₀^${b} = ${b}³ - 0։`,
            en: `Antiderivative is F(x) = x³. Apply [x³]₀^${b} = ${b}³ - 0.`,
            ru: `Первообразная F(x) = x³. По формуле: [x³]₀^${b} = ${b}³ - 0.`,
          },
          related_theory_solution: {
            hy: `[x³]₀^${b} = ${b}³ - 0 = ${ans}։`,
            en: `[x³]₀^${b} = ${ans}.`,
            ru: `[x³]₀^${b} = ${ans}.`,
          },
        };
      },
    },
    {
      id: "tmpl_calc_area_parabola",
      track: "integral",
      topic: "area",
      difficulty: "intermediate",
      theoryId: "area-under-curve-axis",
      generate: () => {
        const b = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
        const ans = (Math.pow(b, 3) / 3).toFixed(4);
        const paramId = `gen_calc_area_${b}`;
        return {
          id: paramId,
          track: "integral",
          topic: "area",
          question: {
            hy: `Գտնել y = x² պարաբոլի տակ ընկած մակերեսը [0, ${b}] հատվածում (կլորացնել մինչև 4 տասնորդական կամ կոտորակով):`,
            en: `Find the area under the curve y = x² on [0, ${b}] (round to 4 decimals or enter fraction).`,
            ru: `Найдите площадь под кривой y = x² на отрезке [0, ${b}] (округлите до 4 знаков или дробь).`,
          },
          answer: String(ans),
          related_theory_id: "area-under-curve-axis",
          related_theory_hint: {
            hy: `A = ∫₀^${b} x² dx = [x³/3]₀^${b} = ${b}³/3։`,
            en: `A = ∫₀^${b} x² dx = [x³/3]₀^${b} = ${b}³/3.`,
            ru: `A = ∫₀^${b} x² dx = [x³/3]₀^${b} = ${b}³/3.`,
          },
          related_theory_solution: {
            hy: `A = [x³/3]₀^${b} = ${Math.pow(b, 3)}/3 ≈ ${ans}։`,
            en: `A = ${Math.pow(b, 3)}/3 ≈ ${ans}.`,
            ru: `A = ${Math.pow(b, 3)}/3 ≈ ${ans}.`,
          },
        };
      },
    },
    {
      id: "tmpl_calc_kinematics",
      track: "integral",
      topic: "kinematics",
      difficulty: "intermediate",
      theoryId: "kinematics-velocity-acceleration",
      generate: () => {
        const a = (Math.floor(Math.random() * 3) + 2) * 2; // 4, 6, 8
        const T = Math.floor(Math.random() * 3) + 2; // 2, 3, 4
        const ans = (a * T * T) / 2;
        const paramId = `gen_calc_kin_${a}_${T}`;
        return {
          id: paramId,
          track: "integral",
          topic: "kinematics",
          question: {
            hy: `Մարմինը շարժվում է v(t) = ${a}t (մ/վ) արագությամբ: Գտնել նրա անցած ճանապարհը t = 0-ից t = ${T} վայրկյանում, եթե s(0) = 0:`,
            en: `A particle moves with velocity v(t) = ${a}t (m/s). Find distance traveled from t = 0 to t = ${T} s, with s(0) = 0.`,
            ru: `Тело движется со скоростью v(t) = ${a}t (м/с). Найдите путь от t = 0 до t = ${T} с при s(0) = 0.`,
          },
          answer: String(ans),
          related_theory_id: "kinematics-velocity-acceleration",
          related_theory_hint: {
            hy: `Ճանապարհը՝ s(${T}) = ∫₀^${T} ${a}t dt = [${a / 2}t²]₀^${T}։`,
            en: `s(${T}) = ∫₀^${T} ${a}t dt = [${a / 2}t²]₀^${T}.`,
            ru: `s(${T}) = ∫₀^${T} ${a}t dt = [${a / 2}t²]₀^${T}.`,
          },
          related_theory_solution: {
            hy: `s(${T}) = ${a / 2} · ${T}² = ${ans} մետր։`,
            en: `s(${T}) = ${a / 2} · ${T}² = ${ans} meters.`,
            ru: `s(${T}) = ${a / 2} · ${T}² = ${ans} метров.`,
          },
        };
      },
    },
    {
      id: "tmpl_calc_monte_carlo",
      track: "integral",
      topic: "numerical",
      difficulty: "intermediate",
      theoryId: "monte-carlo-hit-or-miss",
      generate: () => {
        const N = 1000;
        const Nin = Math.floor(Math.random() * 200) + 250; // 250 to 450
        const ans = (Nin / N).toFixed(3);
        const paramId = `gen_calc_mc_${Nin}`;
        return {
          id: paramId,
          track: "integral",
          topic: "numerical",
          question: {
            hy: `Մոնտե Կառլոյի Hit-or-Miss փորձում [0, 1]×[0, 1] միավոր քառակուսում գեներացվել է N = ${N} կետ, որոնցից ${Nin}-ը ընկել են կորի տակ: Ինչի՞ է հավասար ինտեգրալի մոտարկումը:`,
            en: `In a Monte Carlo Hit-or-Miss run on [0, 1]×[0, 1] with N = ${N} points, ${Nin} points land under the curve. What is the estimated integral?`,
            ru: `В методе Монте-Карло Hit-or-Miss на [0, 1]×[0, 1] из N = ${N} точек ${Nin} попали под кривую. Чему равна оценка интеграла?`,
          },
          answer: String(ans),
          related_theory_id: "monte-carlo-hit-or-miss",
          related_theory_hint: {
            hy: `I ≈ S_box · (N_in / N) = 1 · (${Nin} / ${N})։`,
            en: `I ≈ S_box · (N_in / N) = 1 · (${Nin} / ${N}).`,
            ru: `I ≈ S_box · (N_in / N) = 1 · (${Nin} / ${N}).`,
          },
          related_theory_solution: {
            hy: `I ≈ 1 · (${Nin} / ${N}) = ${ans}։`,
            en: `I ≈ ${ans}.`,
            ru: `I ≈ ${ans}.`,
          },
        };
      },
    },
    {
      id: "tmpl_calc_reversing_bounds",
      track: "integral",
      topic: "integral",
      difficulty: "olympic",
      theoryId: "area-riemann-sums",
      generate: () => {
        const val = Math.floor(Math.random() * 5) + 3; // 3 to 7
        const ans = -val;
        const paramId = `gen_calc_rev_${val}`;
        return {
          id: paramId,
          track: "integral",
          topic: "integral",
          question: {
            hy: `Եթե հայտնի է, որ ∫_a^b f(x) dx = ${val}, ապա ինչի՞ է հավասար ∫_b^a f(x) dx ինտեգրալի արժեքը:`,
            en: `Given that ∫_a^b f(x) dx = ${val}, what is the value of ∫_b^a f(x) dx?`,
            ru: `Если известно, что ∫_a^b f(x) dx = ${val}, чему равен интеграл ∫_b^a f(x) dx?`,
          },
          answer: String(ans),
          related_theory_id: "area-riemann-sums",
          related_theory_hint: {
            hy: `Ինտեգրման սահմանները տեղերով փոխելիս ինտեգրալի նշանը փոխվում է հակադիրի՝ ∫_b^a f(x)dx = -∫_a^b f(x)dx։`,
            en: `Reversing the integration bounds inverts the sign: ∫_b^a f(x)dx = -∫_a^b f(x)dx.`,
            ru: `Перестановка пределов интегрирования меняет знак: ∫_b^a f(x)dx = -∫_a^b f(x)dx.`,
          },
          related_theory_solution: {
            hy: `∫_b^a f(x) dx = -${val} = ${ans}։`,
            en: `∫_b^a f(x) dx = -${val}.`,
            ru: `∫_b^a f(x) dx = -${val}.`,
          },
        };
      },
    },
    {
      id: "tmpl_calc_volume_cone",
      track: "integral",
      topic: "volume",
      difficulty: "advanced",
      theoryId: "volume-slicing-disks",
      generate: () => {
        // y = x on [0, H] rotated around x-axis: V = pi * H^3 / 3
        const H = Math.floor(Math.random() * 3) + 1; // 1, 2, 3
        const ans = ((Math.PI * Math.pow(H, 3)) / 3).toFixed(4);
        const paramId = `gen_calc_vol_${H}`;
        return {
          id: paramId,
          track: "integral",
          topic: "volume",
          question: {
            hy: `y = x գիծը [0, ${H}] հատվածում պտտվում է x առանցքի շուրջ: Գտնել առաջացած կոնի ծավալը (կլորացնել մինչև 4 տասնորդական):`,
            en: `The segment y = x on [0, ${H}] revolves around the x-axis. Find the cone volume (round to 4 decimals).`,
            ru: `Отрезок y = x на [0, ${H}] вращается вокруг оси Ox. Найдите объем конуса (округлите до 4 знаков).`,
          },
          answer: String(ans),
          related_theory_id: "volume-slicing-disks",
          related_theory_hint: {
            hy: `V = π ∫₀^${H} x² dx = π [x³/3]₀^${H} = (${H}³ · π) / 3։`,
            en: `V = π ∫₀^${H} x² dx = (${H}³ · π) / 3.`,
            ru: `V = π ∫₀^${H} x² dx = (${H}³ · π) / 3.`,
          },
          related_theory_solution: {
            hy: `V = (${Math.pow(H, 3)} · π) / 3 ≈ ${ans}։`,
            en: `V = (${Math.pow(H, 3)} · π) / 3 ≈ ${ans}.`,
            ru: `V = (${Math.pow(H, 3)} · π) / 3 ≈ ${ans}.`,
          },
        };
      },
    },
  ],

  // Batch generator supporting both tracks and topics without silent fallback
  generateBatch: function (count, filters = {}) {
    let candidates = this.problemTemplates;

    // 1. Filter by track
    if (filters.track && filters.track !== "all") {
      candidates = candidates.filter((t) => t.track === filters.track);
    }

    // 2. Filter by topic
    if (filters.topic && filters.topic !== "all") {
      const targetTopic = filters.topic.toLowerCase().trim();
      candidates = candidates.filter((t) => {
        const top = t.topic.toLowerCase();
        return (
          top === targetTopic ||
          targetTopic.includes(top) ||
          top.includes(targetTopic)
        );
      });
    }

    // 3. Filter by difficulty
    if (filters.difficulty && filters.difficulty !== "all") {
      candidates = candidates.filter(
        (t) => t.difficulty === filters.difficulty,
      );
    }

    // CRITICAL: Do NOT silently fallback to all templates if no template matches!
    if (candidates.length === 0) {
      return [];
    }

    const newProbs = [];
    const usedIds = new Set();
    for (let attempt = 0; newProbs.length < count && attempt < count * 100; attempt++) {
      const tmpl = candidates[Math.floor(Math.random() * candidates.length)];
      const p = tmpl.generate();
      if (usedIds.has(p.id)) continue;
      usedIds.add(p.id);
      newProbs.push({
        id: p.id,
        track: tmpl.track,
        topic: tmpl.topic,
        difficulty: tmpl.difficulty,
        question: p.question,
        answer: p.answer,
        related_theory_id: tmpl.theoryId,
        related_theory_hint: p.related_theory_hint,
        related_theory_solution: p.related_theory_solution,
        isDynamic: true,
      });
    }
    return newProbs;
  },
};
