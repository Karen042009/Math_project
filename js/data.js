/*
 * DATA.JS — Probability Theory Knowledge Base (Part 1/2)
 * Contains: UI Strings, Theory Sections (1-7)
 */

window.probabilityData = {

  /* ===================== UI STRINGS ===================== */
  ui: {
    nav_theory: { hy: "Տեսություն", en: "Theory", ru: "Теория" },
    nav_practice: { hy: "Խնդիրներ", en: "Practice", ru: "Задачи" },
    nav_lab: { hy: "Լաբորատորիա", en: "Lab", ru: "Лаборатория" },
    nav_simulations: { hy: "Սիմուլյացիաներ", en: "Simulations", ru: "Симуляции" },
    sidebar_title: { hy: "Բովանդակություն", en: "Contents", ru: "Содержание" },

    filter_all: { hy: "Բոլորը", en: "All", ru: "Все" },
    filter_beginner: { hy: "Սկսնակ", en: "Beginner", ru: "Начинающий" },
    filter_intermediate: { hy: "Միջին", en: "Intermediate", ru: "Средний" },
    filter_advanced: { hy: "Բարդ", en: "Advanced", ru: "Продвинутый" },
    filter_olympic: { hy: "Օլիմպիական", en: "Olympic", ru: "Олимпийский" },

    btn_check: { hy: "Ստուգել", en: "Check", ru: "Проверить" },
    btn_goto_theory: { hy: "Կարդալ տեսությունը", en: "Go to Theory", ru: "Перейти к теории" },
    btn_continue: { hy: "Շարունակել", en: "Continue", ru: "Продолжить" },

    modal_correct: { hy: "Ճիշտ է!", en: "Correct!", ru: "Правильно!" },
    modal_correct_msg: { hy: "Հրաշալի աշխատանք: Դուք ճիշտ լուծեցիք խնդիրը:", en: "Great job! You solved it correctly.", ru: "Отлично! Вы решили правильно." },
    modal_incorrect: { hy: "Սխալ է", en: "Incorrect", ru: "Неверно" },
    modal_incorrect_msg: { hy: "Ցավոք, պատասխանը սխալ է: Փորձեք ևս մեկ անգամ:", en: "Unfortunately, that's incorrect. Try again.", ru: "К сожалению, неверно. Попробуйте ещё." },
  },

  /* ===================== THEORY ===================== */
  theory: [

    /* ---- SECTION 1: Introduction ---- */
    {
      title: { hy: "Գլուխ 1. Ներածություն (Պատահույթներ)", en: "Chapter 1. Introduction (Events, Sample Space)", ru: "Глава 1. Введение (События)" },
      subsections: [
        {
          id: "theory-events",
          title: { hy: "Պատահական իրադարձություններ", en: "Random Events", ru: "Случайные события" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Սահմանում (Պատահույթ):</strong> Պատահական իրադարձությունը (կամ պատահույթը) փորձի արդյունք է, որը կարող է տեղի ունենալ կամ չունենալ:
              </div>
              <p>Հիմնական հասկացություններ՝</p>
              <ul>
                <li><strong>Տարրական ելքերի տարածություն (Ω):</strong> Փորձի բոլոր հնարավոր արդյունքների բազմությունը:</li>
                <li><strong>Պատահույթ:</strong> Ω-ի ցանկացած ենթաբազմություն:</li>
                <li><strong>Տարրական պատահույթ:</strong> Մեկ ելքից բաղկացած պատահույթ:</li>
              </ul>
              <div class="formula-box">
                \\[ \\Omega = \\{\\omega_1, \\omega_2, \\ldots, \\omega_n\\} \\]
              </div>
              <p><strong>Օրինակ՝</strong> Զառի նետման դեպքում տարրական ելքերի տարածությունն է՝</p>
              <div class="formula-box">
                \\[ \\Omega = \\{1, 2, 3, 4, 5, 6\\} \\]
              </div>
              <p>«Զույգ թիվ բացվելու» պատահույթը՝ <em>A = {2, 4, 6}</em>:</p>
            `,
            en: `
              <div class="definition-box">
                <strong>Definition (Random Event):</strong> A random event is an outcome or set of outcomes from a random experiment.
              </div>
              <div class="formula-box">
                \\[ \\Omega = \\{\\omega_1, \\omega_2, \\ldots, \\omega_n\\} \\]
              </div>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Случайное событие — это исход эксперимента, который может произойти или нет.
              </div>
            `
          }
        },
        {
          id: "theory-set-operations",
          title: { hy: "Գործողություններ պատահույթների հետ", en: "Set Operations on Events", ru: "Операции над событиями" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Գործողություններ:</strong>
              </div>
              <ul>
                <li><strong>Գումար (A ∪ B):</strong> Տեղի է ունենում A-ն կամ B-ն (կամ երկուսը):</li>
                <li><strong>Արտադրյալ (A ∩ B):</strong> Տեղի են ունենում և՛ A-ն, և՛ B-ն:</li>
                <li><strong>Հակադիր (Ā):</strong> A-ն տեղի չի ունենում:</li>
                <li><strong>Տարբերություն (A \\ B):</strong> A-ն տեղի է ունենում, իսկ B-ն՝ ոչ:</li>
              </ul>
              <div class="theorem-box">
                <strong>Դե Մորգանի օրենքները՝</strong>
                \\[ \\overline{A \\cup B} = \\bar{A} \\cap \\bar{B} \\]
                \\[ \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B} \\]
              </div>
            `,
            en: `<p>Events correspond to sets, so set operations apply (Union, Intersection, Complement).</p>`,
            ru: `<p>Операции над событиями аналогичны операциям над множествами (Объединение, Пересечение, Дополнение).</p>`
          }
        }
      ]
    },

    /* ---- SECTION 2: Combinatorics ---- */
    {
      title: { hy: "Գլուխ 2. Կոմբինատորիկա", en: "Chapter 2. Combinatorics", ru: "Глава 2. Комбинаторика" },
      subsections: [
        {
          id: "theory-permutations",
          title: { hy: "Տեղափոխություններ", en: "Permutations", ru: "Перестановки" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Սահմանում:</strong> n տարրերի տեղափոխություն կոչվում է այդ տարրերի ցանկացած կարգավորված հավաքածու:
              </div>
              <div class="formula-box">
                \\[ P_n = n! = 1 \\cdot 2 \\cdot \\ldots \\cdot n \\]
              </div>
              <p><strong>Օրինակ՝</strong> 3 գիրք դարակում շարելու եղանակները՝ \\(P_3 = 3! = 6\\):</p>
            `,
            en: `<div class="formula-box">\\[ P_n = n! \\]</div>`,
            ru: `<div class="formula-box">\\[ P_n = n! \\]</div>`
          }
        },
        {
          id: "theory-combinations",
          title: { hy: "Զուգորդություններ", en: "Combinations", ru: "Сочетания" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Սահմանում:</strong> n տարբեր տարրերից k-ական զուգորդություն կոչվում է այն ենթաբազմությունը, որը պարունակում է k տարր (կարգը էական չէ):
              </div>
              <div class="formula-box">
                \\[ C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!} \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ C(n,k) = \\frac{n!}{k!(n-k)!} \\]</div>`,
            ru: `<div class="formula-box">\\[ C_n^k = \\frac{n!}{k!(n-k)!} \\]</div>`
          }
        }
      ]
    },

    /* ---- SECTION 3: Classical & Geometric Probability ---- */
    {
      title: { hy: "Գլուխ 3. Հավանականության սահմանումներ", en: "Chapter 3. Probability Definitions", ru: "Глава 3. Определения вероятности" },
      subsections: [
        {
          id: "theory-classical-prob",
          title: { hy: "Դասական սահմանում", en: "Classical Definition", ru: "Классическое определение" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Դասական սահմանում:</strong> Եթե փորձն ունի n հավասարահնարավոր ելքեր, որոնցից m-ը նպաստավոր են A պատահույթին, ապա՝
              </div>
              <div class="formula-box">
                \\[ P(A) = \\frac{m}{n} \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ P(A) = \\frac{m}{n} \\]</div>`,
            ru: `<div class="formula-box">\\[ P(A) = \\frac{m}{n} \\]</div>`
          }
        },
        {
          id: "theory-geometric-prob",
          title: { hy: "Երկրաչափական հավանականություն", en: "Geometric Probability", ru: "Геометрическая вероятность" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Սահմանում:</strong> Եթե Ω-ն երկրաչափական պատկեր է, իսկ A-ն՝ նրա մաս, ապա հավանականությունը որոշվում է չափերի (երկարություն, մակերես, ծավալ) հարաբերությամբ:
              </div>
              <div class="formula-box">
                \\[ P(A) = \\frac{\\text{mes}(A)}{\\text{mes}(\\Omega)} \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ P(A) = \\frac{\\text{measure}(A)}{\\text{measure}(\\Omega)} \\]</div>`,
            ru: `<div class="formula-box">\\[ P(A) = \\frac{\\text{мера}(A)}{\\text{мера}(\\Omega)} \\]</div>`
          }
        }
      ]
    },

    /* ---- SECTION 4: Conditional Probability ---- */
    {
      title: { hy: "Գլուխ 4. Պայմանական հավանականություն", en: "Chapter 4. Conditional Probability", ru: "Глава 4. Условная вероятность" },
      subsections: [
        {
          id: "theory-conditional-prob",
          title: { hy: "Պայմանական հավանականություն", en: "Conditional Probability", ru: "Условная вероятность" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Սահմանում:</strong> A-ի հավանականությունը՝ պայմանով, որ B-ն տեղի է ունեցել.
              </div>
              <div class="formula-box">
                \\[ P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\]
              </div>
              <div class="theorem-box">
                <strong>Անկախություն:</strong> A և B պատահույթները անկախ են, եթե՝
                \\[ P(A \\cap B) = P(A) \\cdot P(B) \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\]</div>`,
            ru: `<div class="formula-box">\\[ P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\]</div>`
          }
        },
        {
          id: "theory-total-prob",
          title: { hy: "Լրիվ հավանականության բանաձև", en: "Law of Total Probability", ru: "Формула полной вероятности" },
          content: {
            hy: `
              <div class="theorem-box">
                Եթե \\(H_1, \\ldots, H_n\\) լրիվ խումբ են կազմում, ապա՝
                \\[ P(A) = \\sum_{i=1}^{n} P(H_i) \\cdot P(A|H_i) \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ P(A) = \\sum P(H_i) P(A|H_i) \\]</div>`,
            ru: `<div class="formula-box">\\[ P(A) = \\sum P(H_i) P(A|H_i) \\]</div>`
          }
        },
        {
          id: "theory-bayes",
          title: { hy: "Բայեսի բանաձև", en: "Bayes' Theorem", ru: "Теорема Байеса" },
          content: {
            hy: `
              <div class="theorem-box">
                Թույլ է տալիս վերահաշվարկել հիպոտեզների հավանականությունները՝ փորձի արդյունքից հետո:
                \\[ P(H_k|A) = \\frac{P(H_k) \\cdot P(A|H_k)}{\\sum_{i} P(H_i) \\cdot P(A|H_i)} \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ P(H_k|A) = \\frac{P(H_k)P(A|H_k)}{P(A)} \\]</div>`,
            ru: `<div class="formula-box">\\[ P(H_k|A) = \\frac{P(H_k)P(A|H_k)}{P(A)} \\]</div>`
          }
        }
      ]
    },

    /* ---- SECTION 5: Random Variables ---- */
    {
      title: { hy: "Գլուխ 5. Պատահական մեծություններ", en: "Chapter 5. Random Variables", ru: "Глава 5. Случайные величины" },
      subsections: [
        {
          id: "theory-discrete-rv",
          title: { hy: "Դիսկրետ պատահական մեծություններ", en: "Discrete Random Variables", ru: "Дискретные СВ" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Մաթեմատիկական սպասում (Միջին):</strong>
                \\[ E(X) = \\sum_{i} x_i \\cdot p_i \\]
              </div>
              <div class="definition-box">
                <strong>Դիսպերսիա:</strong>
                \\[ D(X) = E(X^2) - (E(X))^2 \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ E(X) = \\sum x_i p_i \\]</div>`,
            ru: `<div class="formula-box">\\[ E(X) = \\sum x_i p_i \\]</div>`
          }
        }
      ]
    },

    /* ---- SECTION 6: Bernoulli Scheme ---- */
    {
      title: { hy: "Գլուխ 6. Բեռնուլիի սխեմա", en: "Chapter 6. Bernoulli Scheme", ru: "Глава 6. Схема Бернулли" },
      subsections: [
        {
          id: "theory-bernoulli",
          title: { hy: "Բեռնուլիի բանաձև", en: "Bernoulli Formula", ru: "Формула Бернулли" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Բեռնուլիի սխեմա:</strong> n անկախ փորձերից յուրաքանչյուրում A պատահույթի հանդես գալու հավանականությունը p է (չհանդես գալունը՝ q = 1-p):
                <br>k անգամ հանդես գալու հավանականությունը՝
                \\[ P_n(k) = C_n^k p^k q^{n-k} \\]
              </div>
            `,
            en: `<div class="formula-box">\\[ P_n(k) = C(n,k) p^k (1-p)^{n-k} \\]</div>`,
            ru: `<div class="formula-box">\\[ P_n(k) = C_n^k p^k q^{n-k} \\]</div>`
          }
        }
      ]
    },
    /* ---- SECTION 7: Limit Theorems ---- */
    {
      title: { hy: "Գլուխ 7. Սահմանային թեորեմներ", en: "Chapter 7. Limit Theorems", ru: "Глава 7. Предельные теоремы" },
      subsections: [
        {
          id: "theory-lln",
          title: { hy: "Մեծ թվերի օրենքը", en: "Law of Large Numbers", ru: "Закон больших чисел" },
          content: {
            hy: `
              <div class="theorem-box">
                <strong>Բեռնուլիի թեորեմը:</strong> Եթե փորձերի թիվը (n) անսահման մեծանում է, ապա հաջողության հարաբերական հաճախականությունը (k/n) ձգտում է հաջողության հավանականությանը (p):
                \\[ \\lim_{n \\to \\infty} P\\left( \\left| \\frac{k}{n} - p \\right| < \\epsilon \\right) = 1 \\]
              </div>
              <p>Սա է «փորձարարական» և «տեսական» հավանականությունների կապը:</p>
            `,
            en: `<p>As n increases, relative frequency converges to probability p.</p>`,
            ru: `<p>При увеличении n относительная частота сходится к вероятности p.</p>`
          }
        },
        {
          id: "theory-clt",
          title: { hy: "Կենտրոնական սահմանային թեորեմ", en: "Central Limit Theorem", ru: "ЦПТ" },
          content: {
            hy: `
              <div class="theorem-box">
                <strong>ԿՍԹ:</strong> Անկախ և միատեսակ բաշխված պատահական մեծությունների գումարը ձգտում է նորմալ բաշխման:
                \\[ \\frac{\\sum X_i - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1) \\]
              </div>
              <p>Սա բացատրում է, թե ինչու է Գալտոնի տախտակի (տես՝ Սիմուլյացիաներ) վրա գնդիկների բաշխումը ստանում զանգակաձև տեսք:</p>
            `,
            en: `<p>Explains why the Galton Board produces a bell curve.</p>`,
            ru: `<p>Объясняет нормальное распределение на доске Гальтона.</p>`
          }
        }
      ]
    }
  ],

  /* ===================== PROBLEMS PLACEHOLDER ===================== */
  // Will be populated in Part 2
  /* ===================== PROBLEMS Book ===================== */
  problems: [
    /* ---- Beginner ---- */
    {
      id: 101,
      difficulty: "beginner",
      question: { hy: "Նետում ենք զառ: Ինչի՞ է հավասար կենտ թիվ բացվելու հավանականությունը:", en: "A die is rolled. What is the probability of getting an odd number?", ru: "Бросают кубик. Какова вероятность выпадения нечетного числа?" },
      answer: "0.5",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "Օգտագործեք դասական բանաձևը՝ m/n, որտեղ n=6:", en: "Use m/n where n=6.", ru: "Используйте m/n, где n=6." }
    },
    {
      id: 102,
      difficulty: "beginner",
      question: { hy: "Արկղում կա 3 կարմիր և 7 կապույտ գնդակ: Պատահական հանում են մեկը: Ինչի՞ է հավասար կարմիր լինելու հավանականությունը:", en: "Box has 3 red and 7 blue balls. One is drawn. Probability it's red?", ru: "В урне 3 красных и 7 синих шаров. Вероятность вытащить красный?" },
      answer: "0.3",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "Ընդհանուր գնդակների քանակը՝ 3+7=10:", en: "Total balls = 10.", ru: "Всего шаров = 10." }
    },
    {
      id: 103,
      difficulty: "beginner",
      question: { hy: "Երկու մետաղադրամ նետելիս, ինչի՞ է հավասար երկուսի վրա էլ «զինանշան» ընկնելու հավանականությունը:", en: "Flipping 2 coins. Probability of 2 heads?", ru: "Бросают 2 монеты. Вероятность 2-х орлов?" },
      answer: "0.25",
      related_theory_id: "theory-conditional-prob",
      related_theory_hint: { hy: "Մետաղադրամները անկախ են: Բազմապատկեք հավանականությունները (0.5 * 0.5):", en: "Independent events: 0.5 * 0.5.", ru: "Независимые события: 0.5 * 0.5." }
    },
    {
      id: 104,
      difficulty: "beginner",
      question: { hy: "Հաշվե՛ք 5!-ը:", en: "Calculate 5!", ru: "Вычислите 5!" },
      answer: "120",
      related_theory_id: "theory-permutations",
      related_theory_hint: { hy: "5! = 1*2*3*4*5:", en: "5! = 1*2*3*4*5", ru: "5! = 1*2*3*4*5" }
    },

    /* ---- Intermediate ---- */
    {
      id: 201,
      difficulty: "intermediate",
      question: { hy: "Քանի՞ եղանակով կարելի է 5 հոգուց ընտրել 3-հոգանոց խումբ:", en: "How many ways to choose a group of 3 from 5 people?", ru: "Сколькими способами можно выбрать группу из 3 человек из 5?" },
      answer: "10",
      related_theory_id: "theory-combinations",
      related_theory_hint: { hy: "Սա զուգորդություն է (կարգը կապ չունի): Օգտագործեք C(5,3) բանաձևը:", en: "Use C(5,3).", ru: "Используйте C(5,3)." }
    },
    {
      id: 202,
      difficulty: "intermediate",
      question: { hy: "Նետում ենք 2 զառ: Ինչի՞ է հավասար գումարը 10 լինելու հավանականությունը:", en: "Rolling 2 dice. Probability sum is 10?", ru: "Бросают 2 кубика. Вероятность суммы 10?" },
      answer: "0.0833", // 3/36 = 1/12 ≈ 0.0833
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "Հնարավոր զույգերը՝ (4,6), (5,5), (6,4): Ընդհանուր՝ 36:", en: "Pairs: (4,6), (5,5), (6,4). Total 36.", ru: "Пары: (4,6), (5,5), (6,4). Всего 36." }
    },
    {
      id: 203,
      difficulty: "intermediate",
      question: { hy: "Թիրախին կրակելիս հիթի հավանականությունը 0.8 է: Ինչի՞ է հավասար ճիշտ 3 անգամ կպնելու հավանականությունը 5 կրակոցից:", en: "Hit prob is 0.8. Prob of exactly 3 hits in 5 shots?", ru: "Вероятность попадания 0.8. Вероятность ровно 3 попаданий из 5?" },
      answer: "0.2048",
      related_theory_id: "theory-bernoulli",
      related_theory_hint: { hy: "Կիրառեք Բեռնուլիի բանաձևը՝ C(5,3) * (0.8)^3 * (0.2)^2:", en: "Use Bernoulli: C(5,3) * 0.8^3 * 0.2^2.", ru: "Формула Бернулли: C(5,3) * 0.8^3 * 0.2^2." }
    },
    {
      id: 204,
      difficulty: "intermediate",
      question: { hy: "Խաղաթղթերի տուփից (52) հանում ենք մեկ քարտ: Ինչի՞ է հավասար «Տուզ» կամ «Սիրտ» լինելու հավանականությունը:", en: "Draw 1 card from 52. Prob of Ace OR Heart?", ru: "Вероятность вытянуть Туза ИЛИ Черви из 52 карт?" },
      answer: "0.3077", // 16/52 = 4/13 ≈ 0.3077
      related_theory_id: "theory-set-operations",
      related_theory_hint: { hy: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B): (4+13-1)/52:", en: "P(A or B) = P(A) + P(B) - P(A and B).", ru: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)." }
    },

    /* ---- Advanced ---- */
    {
      id: 301,
      difficulty: "advanced",
      question: { hy: "Առաջին արկղում կա 2 սպիտակ, 3 սև գնդակ, երկրորդում՝ 4 սպիտակ, 1 սև: Պատահական ընտրում ենք արկղ և հանում գնդակ: Ինչի՞ է հավասար սպիտակ լինելու հավանականությունը:", en: "Urn 1: 2W,3B. Urn 2: 4W,1B. Pick urn, pick ball. Prob white?", ru: "Урна 1: 2Б,3Ч. Урна 2: 4Б,1Ч. Выбираем урну, берем шар. Вер. белого?" },
      answer: "0.6",
      related_theory_id: "theory-total-prob",
      related_theory_hint: { hy: "Լրիվ հավանականություն: 0.5*(2/5) + 0.5*(4/5):", en: "Total Prob: 0.5*(2/5) + 0.5*(4/5).", ru: "Полная вероятность: 0.5*(2/5) + 0.5*(4/5)." }
    },
    {
      id: 302,
      difficulty: "advanced",
      question: { hy: "Հայտնի է, որ գնդակը սպիտակ է (նախորդ խնդիրը): Ինչի՞ է հավասար հավանականությունը, որ այն 1-ին արկղից էր:", en: "Given ball is white (prev problem), prob it came from Urn 1?", ru: "Шар белый (пред. задача). Вероятность, что он из Урны 1?" },
      answer: "0.3333", // (0.2 / 0.6) = 1/3
      related_theory_id: "theory-bayes",
      related_theory_hint: { hy: "Բայեսի բանաձև: (0.5*0.4) / 0.6:", en: "Bayes: (0.5*0.4) / 0.6.", ru: "Байес: (0.5*0.4) / 0.6." }
    },
    {
      id: 303,
      difficulty: "advanced",
      question: { hy: "Ունենք 10 բանալի, որոնցից միայն մեկն է բացում դուռը: Փորձում ենք հերթով (առանց հետ վերադարձնելու): Ինչի՞ է հավասար 4-րդ փորձից բացելու հավանականությունը:", en: "10 keys, 1 works. Try without replacement. Prob success on 4th try?", ru: "10 ключей, 1 подходит. Без возврата. Вероятность успеха на 4-й раз?" },
      answer: "0.1",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "Սիմետրիայի ուժը: Ցանկացած դիրքում (1-ից 10) հաջողության հավանականությունը նույնն է՝ 1/10:", en: "Symmetry: 1/10 for any position.", ru: "Симметрия: 1/10 для любой позиции." }
    },
    {
      id: 304,
      difficulty: "advanced",
      question: { hy: "X-ը ունի նորմալ բաշխում՝ N(0, 1): Գտնել P(-1 < X < 1): (Գրել մոտարկված՝ 0.XXX):", en: "X ~ N(0,1). Find P(-1 < X < 1).", ru: "X ~ N(0,1). Найти P(-1 < X < 1)." },
      answer: "0.6827",
      related_theory_id: "theory-clt",
      related_theory_hint: { hy: "Սա «3 սիգմայի» կանոնի առաջին մասն է (68-95-99.7):", en: "The 68-95-99.7 rule.", ru: "Правило 3 сигм." }
    },

    /* ---- Olympic (Logic/Tricky) ---- */
    {
      id: 401,
      difficulty: "olympic",
      question: { hy: "Ընտանիքում կա 2 երեխա: Հայտնի է, որ նրանցից գոնե մեկը աղջիկ է: Որքա՞ն է հավանականությունը, որ երկուսն էլ աղջիկ են:", en: "Family has 2 kids. At least one is a girl. Prob both are girls?", ru: "2 ребенка. Хотя бы одна - девочка. Вероятность, что обе девочки?" },
      answer: "0.3333",
      related_theory_id: "theory-conditional-prob",
      related_theory_hint: { hy: "Տարածությունը՝ {BB, BG, GB, GG}: Եթե «գոնե մեկը աղջիկ է», մնում են {BG, GB, GG}: Դրանցից միայն GG-ն է նպաստավոր: 1/3:", en: "Space: {BB, BG, GB, GG}. Cond: {BG, GB, GG}. Fav: {GG}. Ans: 1/3.", ru: "Пространство: {BB, BG, GB, GG}. Усл: {BG, GB, GG}. Благ: {GG}. Отв: 1/3." }
    },
    {
      id: 402,
      difficulty: "olympic",
      question: { hy: "Հանդիպման խնդիրը: Երկու ընկեր պայմանավորվում են հանդիպել 12:00-13:00 միջակայքում: Յուրաքանչյուրը սպասում է 15 րոպե: Որքա՞ն է հանդիպման հավանականությունը:", en: "Meeting problem. Arrive 12-1. Wait 15 min. Prob of meeting?", ru: "Задача о встрече. Приход 12-1. Ждут 15 мин. Вероятность?" },
      answer: "0.4375",
      related_theory_id: "theory-geometric-prob",
      related_theory_hint: { hy: "Երկրաչափական հավանականություն: Պատկերեք քառակուսի: |x-y| <= 1/4: Մակերեսը՝ 1 - (3/4)^2 = 7/16:", en: "Geometric Prob. Area = 1 - (3/4)^2 = 7/16.", ru: "Геометрическая вер. Площадь = 1 - (3/4)^2 = 7/16." }
    },
    {
      id: 403,
      difficulty: "olympic",
      question: { hy: "50 հոգանոց դասարանում, որքա՞ն է հավանականությունը, որ գոնե երկու հոգի ունեն նույն ծննդյան օրը: (գրել 0.9XX տեսքով)", en: "Birthday Paradox with 50 people. Prob of match?", ru: "Парадокс дней рождения (50 чел). Вероятность совпадения?" },
      answer: "0.97",
      related_theory_id: "theory-events",
      related_theory_hint: { hy: "Սա ծննդյան օրերի պարադոքսն է: Հավանականությունը շատ մոտ է 1-ին:", en: "Birthday Paradox.", ru: "Парадокс дней рождения." }
    }
  ]
};
