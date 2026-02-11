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

    /* ---- SECTION 7: Limit Theorems ---- */
    {
      title: { hy: "Գլուխ 7. Սահմանային թեորեմներ", en: "Chapter 7. Limit Theorems", ru: "Глава 7. Предельные теоремы" },
      subsections: [
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
  problems: []
};
