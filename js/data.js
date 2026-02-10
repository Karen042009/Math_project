window.probabilityData = {
    ui: {
        nav_theory: { en: "Theory", hy: "Տեսություն", ru: "Теория" },
        nav_practice: { en: "Practice", hy: "Խնդիրներ", ru: "Задачи" },
        nav_lab: { en: "The Lab", hy: "Լաբորատորիա", ru: "Лаборатория" },
        nav_simulations: { en: "Simulations", hy: "Սիմուլյացիաներ", ru: "Симуляции" },
        
        sim_galton: { en: "Galton Board", hy: "Գալտոնի Տախտակ", ru: "Доска Гальтона" },
        sim_monty: { en: "Monty Hall", hy: "Մոնտի Հոլ", ru: "Монти Холл" },
        sim_buffon: { en: "Buffon's Needle", hy: "Բուֆոնի Ասեղ", ru: "Игла Бюффона" },
        
        btn_drop_balls: { en: "Drop Balls", hy: "Բաց թողնել գնդիկներ", ru: "Бросить шары" },
        btn_reset: { en: "Reset", hy: "Վերսկսել", ru: "Сброс" },
        btn_run_100: { en: "Simulate 100 Runs", hy: "Կատարել 100 փորձ", ru: "100 симуляций" },
        btn_run_1000: { en: "Simulate 1000 Runs", hy: "Կատարել 1000 փորձ", ru: "1000 симуляций" },
        btn_drop_needles: { en: "Drop Needles", hy: "Գցել Ասեղներ", ru: "Бросить Иглы" },
        
        calc_title: { en: "Uncertainty Calculator", hy: "Հավանականության Հաշվիչ", ru: "Калькулятор Вероятностей" },
        calc_placeholder: { en: "Enter expression...", hy: "Մուտքագրեք (օր. P(5,2))...", ru: "Введите (напр. P(5,2))..." },
        lbl_result: { en: "Result:", hy: "Արդյունք:", ru: "Результат:" },
        
        vis_title: { en: "Distribution Visualizer", hy: "Բաշխումների Տեսողական", ru: "Визуализатор Распределений" },
        vis_type_normal: { en: "Normal Distribution", hy: "Նորմալ Բաշխում", ru: "Нормальное Распр." },
        vis_type_venn: { en: "Venn Diagram", hy: "Վենի Դիագրամ", ru: "Диаграмма Венна" },
        
        btn_visualize: { en: "Visualize", hy: "Պատկերել", ru: "Визуализировать" },
        btn_generate: { en: "Generate Problem", hy: "Ստեղծել Խնդիր", ru: "Создать Задачу" },
        btn_upload: { en: "Upload Image / Take Photo", hy: "Վերբեռնել Նկար", ru: "Загрузить Фото" },
        btn_check_ai: { en: "Ask AI to Check", hy: "Հարցնել AI-ին", ru: "Спросить AI" },
        lbl_solution: { en: "Your Solution:", hy: "Ձեր Լուծումը:", ru: "Ваше Решение:" },
        lbl_feedback: { en: "AI Assessment", hy: "AI Գնահատական", ru: "AI Оценка" },
        
        // Practice filters
        filter_beginner: { en: "Beginner", hy: "Սկսնակ", ru: "Начальный" },
        filter_intermediate: { en: "Intermediate", hy: "Միջին", ru: "Средний" },
        filter_advanced: { en: "Advanced", hy: "Առաջադեմ", ru: "Продвинутый" },
        filter_olympic: { en: "Olympic", hy: "Օլիմպիադա", ru: "Олимпиадный" },
        btn_check: { en: "Check", hy: "Ստուգել", ru: "Проверить" },
        
        modal_correct: { en: "Correct!", hy: "Ճիշտ է!", ru: "Правильно!" },
        modal_correct_msg: { en: "Great job! You mastered this concept.", hy: "Հիանալի աշխատանք: Դուք յուրացրել եք այս թեման:", ru: "Отличная работа! Вы усвоили эту тему." },
        modal_incorrect: { en: "Incorrect", hy: "Սխալ է", ru: "Неверно" },
        modal_incorrect_msg: { en: "Unfortunately, that is not correct.", hy: "Ցավոք, սխալ է։", ru: "К сожалению, это неправильно." },
        
        btn_continue: { en: "Continue", hy: "Շարունակել", ru: "Продолжить" },
        btn_goto_theory: { en: "Go to Theory", hy: "Գնալ դեպի Տեսություն", ru: "Перейти к теории" }
    },

    theory: [
        {
            id: "intro",
            title: { en: "1. Introduction", hy: "1. Ներածություն", ru: "1. Введение" },
            subsections: [
                {
                    id: "theory-intro-prob",
                    title: { en: "What is Probability?", hy: "Ի՞նչ է հավանականությունը", ru: "Что такое вероятность?" },
                    content: {
                        en: `
                          <p>Probability measures how likely an event is to occur.</p>
                          <div class="definition-box">
                            <strong>Classical definition (equiprobable outcomes):</strong>
                            $$ P(A) = \\frac{|A|}{|\\Omega|} $$
                          </div>
                        `,
                        hy: `
                          <p>Հավանականությունը չափում է, թե որքան հավանական է իրադարձության տեղի ունենալը։</p>
                          <div class="definition-box">
                            <strong>Դասական սահմանում (հավասարահավանական ելքեր):</strong>
                            $$ P(A) = \\frac{|A|}{|\\Omega|} $$
                          </div>
                        `,
                        ru: `
                          <p>Вероятность измеряет, насколько вероятно наступление события.</p>
                          <div class="definition-box">
                            <strong>Классическое определение (равновозможные исходы):</strong>
                            $$ P(A) = \\frac{|A|}{|\\Omega|} $$
                          </div>
                        `
                    }
                },
                {
                    id: "theory-intro-space",
                    title: { en: "Sample space & events", hy: "Պատահույթներ և տարածություն (Ω)", ru: "Пространство исходов (Ω)" },
                    content: {
                        en: `
                          <div class="definition-box">
                            <strong>Sample space:</strong> \\(\\Omega\\) is the set of all outcomes. An <strong>event</strong> is a subset \\(A\\subseteq\\Omega\\).
                          </div>
                          <div class="formula-box">$$ 0\\le P(A) \\le 1,\\quad P(\\Omega)=1. $$</div>
                        `,
                        hy: `
                          <div class="definition-box">
                            <strong>Ելքերի տարածություն՝</strong> \\(\\Omega\\) — բոլոր հնարավոր ելքերի բազմությունն է։ <strong>Իրադարձություն</strong>՝ \\(A\\subseteq\\Omega\\)։
                          </div>
                          <div class="formula-box">$$ 0\\le P(A) \\le 1,\\quad P(\\Omega)=1. $$</div>
                        `,
                        ru: `
                          <div class="definition-box">
                            <strong>Пространство исходов:</strong> \\(\\Omega\\) — множество всех исходов. <strong>Событие</strong>: \\(A\\subseteq\\Omega\\).
                          </div>
                          <div class="formula-box">$$ 0\\le P(A) \\le 1,\\quad P(\\Omega)=1. $$</div>
                        `
                    }
                },
                {
                    id: "theory-axioms",
                    title: { en: "Axioms of probability", hy: "Հավանականության աքսիոմներ", ru: "Аксиомы вероятности" },
                    content: {
                        en: `
                          <div class="theorem-box">
                            <strong>Kolmogorov axioms:</strong>
                            <ul>
                              <li>\\(P(A)\\ge 0\\)</li>
                              <li>\\(P(\\Omega)=1\\)</li>
                              <li>If \\(A_i\\) are disjoint: \\(P(\\cup A_i)=\\sum P(A_i)\\)</li>
                            </ul>
                          </div>
                        `,
                        hy: `
                          <div class="theorem-box">
                            <strong>Կոլմոգորովի աքսիոմներ․</strong>
                            <ul>
                              <li>\\(P(A)\\ge 0\\)</li>
                              <li>\\(P(\\Omega)=1\\)</li>
                              <li>Եթե \\(A_i\\)‑ները զույգ առ զույգ անհամատեղելի են՝ \\(P(\\cup A_i)=\\sum P(A_i)\\)</li>
                            </ul>
                          </div>
                        `,
                        ru: `
                          <div class="theorem-box">
                            <strong>Аксиомы Колмогорова:</strong>
                            <ul>
                              <li>\\(P(A)\\ge 0\\)</li>
                              <li>\\(P(\\Omega)=1\\)</li>
                              <li>Для несовместных \\(A_i\\): \\(P(\\cup A_i)=\\sum P(A_i)\\)</li>
                            </ul>
                          </div>
                        `
                    }
                }
            ]
        },
        {
            id: "combinatorics",
            title: { en: "2. Combinatorics", hy: "2. Կոմբինատորիկա", ru: "2. Комбинаторика" },
            subsections: [
                {
                    id: "theory-comb-factorial",
                    title: { en: "Factorial", hy: "Ֆակտորիալ", ru: "Факториал" },
                    content: {
                        en: `<div class="definition-box">$$ n! = 1\\cdot 2\\cdot \\dots \\cdot n,\\quad 0!=1. $$</div>`,
                        hy: `<div class="definition-box">$$ n! = 1\\cdot 2\\cdot \\dots \\cdot n,\\quad 0!=1. $$</div>`,
                        ru: `<div class="definition-box">$$ n! = 1\\cdot 2\\cdot \\dots \\cdot n,\\quad 0!=1. $$</div>`
                    }
                },
                {
                    id: "theory-comb-arrangements",
                    title: { en: "Arrangements (Variations)", hy: "Կարգավորություններ (տեղափոխություններ)", ru: "Размещения (упорядоч.)" },
                    content: {
                        en: `
                          <div class="definition-box"><strong>Arrangements:</strong> order matters.</div>
                          <div class="formula-box">$$ A_n^k = \\frac{n!}{(n-k)!} $$</div>
                        `,
                        hy: `
                          <div class="definition-box"><strong>Կարգավորություններ՝</strong> կարգը կարևոր է։</div>
                          <div class="formula-box">$$ A_n^k = \\frac{n!}{(n-k)!} $$</div>
                        `,
                        ru: `
                          <div class="definition-box"><strong>Размещения:</strong> порядок важен.</div>
                          <div class="formula-box">$$ A_n^k = \\frac{n!}{(n-k)!} $$</div>
                        `
                    }
                },
                {
                    id: "theory-comb-perm",
                    title: { en: "Permutations & Combinations", hy: "Տեղափոխություններ և Զուգորդություններ", ru: "Перестановки и Сочетания" },
                    content: {
                        en: `<p><strong>Permutations (Order matters):</strong> $$ P(n, k) = \\frac{n!}{(n-k)!} $$</p> <p><strong>Combinations (Order doesn't matter):</strong> $$ C(n, k) = \\frac{n!}{k!(n-k)!} $$</p>`,
                        hy: `<p><strong>Տեղափոխություններ (Կարգը կարևոր է)՝</strong> $$ A_n^k = \\frac{n!}{(n-k)!} $$</p> <p><strong>Զուգորդություններ (Կարգը կարևոր չէ)՝</strong> $$ C_n^k = \\frac{n!}{k!(n-k)!} $$</p>`,
                        ru: `<p><strong>Перестановки (Порядок важен):</strong> $$ A_n^k = \\frac{n!}{(n-k)!} $$</p> <p><strong>Сочетания (Порядок не важен):</strong> $$ C_n^k = \\frac{n!}{k!(n-k)!} $$</p>`
                    }
                }
            ]
        },
        {
            id: "definitions",
            title: { en: "3. Classical & Geometric Probability", hy: "3. Դասական և Երկրաչափական սահմանումներ", ru: "3. Классич. и геометрич." },
            subsections: [
                {
                    id: "theory-classical-def",
                    title: { en: "Classical definition", hy: "Դասական սահմանում", ru: "Классическое" },
                    content: {
                        en: `
                          <p>When all outcomes are equally likely:</p>
                          <div class="formula-box">$$ P(A)=\\frac{|A|}{|\\Omega|}. $$</div>
                        `,
                        hy: `
                          <p>Երբ բոլոր ելքերը հավասարահավանական են՝</p>
                          <div class="formula-box">$$ P(A)=\\frac{|A|}{|\\Omega|}. $$</div>
                        `,
                        ru: `
                          <p>Если исходы равновозможны:</p>
                          <div class="formula-box">$$ P(A)=\\frac{|A|}{|\\Omega|}. $$</div>
                        `
                    }
                },
                {
                    id: "theory-geo-prob",
                    title: { en: "Geometric probability", hy: "Երկրաչափական հավանականություն", ru: "Геометрическая" },
                    content: {
                        en: `
                          <p>If a point is uniformly random in region \\(\\Omega\\), then:</p>
                          <div class="formula-box">$$ P(A)=\\frac{\\text{Area}(A)}{\\text{Area}(\\Omega)}. $$</div>
                        `,
                        hy: `
                          <p>Եթե կետը պատահական է և միատեսակ բաշխված \\(\\Omega\\) տարածքում՝</p>
                          <div class="formula-box">$$ P(A)=\\frac{\\text{Մակերես}(A)}{\\text{Մակերես}(\\Omega)}. $$</div>
                        `,
                        ru: `
                          <p>Если точка равномерно выбирается в области \\(\\Omega\\):</p>
                          <div class="formula-box">$$ P(A)=\\frac{\\text{Площадь}(A)}{\\text{Площадь}(\\Omega)}. $$</div>
                        `
                    }
                }
            ]
        },
        {
            id: "conditional",
            title: { en: "4. Conditional Probability", hy: "4. Պայմանական Հավանականություն", ru: "4. Условная Вероятность" },
            subsections: [
                {
                    id: "theory-conditional-prob",
                    title: { en: "Conditional probability", hy: "Պայմանական հավանականություն", ru: "Условная вероятность" },
                    content: {
                        en: `<div class="definition-box">$$ P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},\\quad P(B)>0. $$</div>`,
                        hy: `<div class="definition-box">$$ P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},\\quad P(B)>0. $$</div>`,
                        ru: `<div class="definition-box">$$ P(A\\mid B)=\\frac{P(A\\cap B)}{P(B)},\\quad P(B)>0. $$</div>`
                    }
                },
                {
                    id: "theory-independence",
                    title: { en: "Independence", hy: "Անկախ իրադարձություններ", ru: "Независимость" },
                    content: {
                        en: `
                          <div class="definition-box">
                            <strong>Independence:</strong> \\(A\\) and \\(B\\) are independent if
                            $$ P(A\\cap B)=P(A)P(B). $$
                          </div>
                        `,
                        hy: `
                          <div class="definition-box">
                            <strong>Անկախություն՝</strong> \\(A\\) և \\(B\\) անկախ են, եթե
                            $$ P(A\\cap B)=P(A)P(B). $$
                          </div>
                        `,
                        ru: `
                          <div class="definition-box">
                            <strong>Независимость:</strong> \\(A\\) и \\(B\\) независимы, если
                            $$ P(A\\cap B)=P(A)P(B). $$
                          </div>
                        `
                    }
                },
                {
                    id: "theory-bayes",
                    title: { en: "Bayes' Theorem", hy: "Բայեսի Բանաձևը", ru: "Теорема Байеса" },
                    content: {
                        en: `<div class="theorem-box"><strong>Bayes' Theorem:</strong> $$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$</div>`,
                        hy: `<p>Թույլ է տալիս վերահաշվարկել հավանականությունները՝ նոր տվյալների հիման վրա։</p> <div class="theorem-box"><strong>Բայեսի բանաձևը․</strong> $$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$</div>`,
                        ru: `<div class="theorem-box"><strong>Теорема Байеса:</strong> $$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$</div>`
                    }
                },
                {
                    id: "theory-total-prob",
                    title: { en: "Total Probability", hy: "Լրիվ Հավանականություն", ru: "Полная Вероятность" },
                    content: {
                        en: `<p>If events constitute a complete set:</p> $$ P(A) = \\sum P(A|H_i) P(H_i) $$`,
                        hy: `<p>Եթե իրադարձությունները կազմում են լրիվ խումբ՝</p> $$ P(A) = \\sum P(A|H_i) P(H_i) $$`,
                        ru: `<p>Если события образуют полную группу:</p> $$ P(A) = \\sum P(A|H_i) P(H_i) $$`
                    }
                }
            ]
        },
         {
            id: "random-vars",
            title: { en: "5. Random Variables", hy: "5. Պատահական Մեծություններ", ru: "5. Случайные Величины" },
            subsections: [
                {
                    id: "theory-rv-intro",
                    title: { en: "Discrete vs Continuous", hy: "Դիսկրետ և Անընդհատ", ru: "Дискретные и Непрерывные" },
                    content: {
                        en: `<p><strong>Discrete:</strong> Countable (e.g. dice). <strong>Continuous:</strong> Measurable (e.g. time).</p>`,
                        hy: `<p><strong>Դիսկրետ՝</strong> Հաշվելի (օր․ զառ)։ <strong>Անընդհատ՝</strong> Չափելի (օր․ ժամանակ, քաշ)։</p>`,
                        ru: `<p><strong>Дискретные:</strong> Счётные. <strong>Непрерывные:</strong> Измеримые.</p>`
                    }
                },
                {
                    id: "theory-rv-expectation",
                    title: { en: "Expectation", hy: "Մաթ. սպասում", ru: "Матожидание" },
                    content: {
                        en: `
                          <div class="definition-box"><strong>Discrete:</strong> $$\\mathbb{E}[X]=\\sum x\\,P(X=x).$$</div>
                          <div class="definition-box"><strong>Continuous:</strong> $$\\mathbb{E}[X]=\\int_{-\\infty}^{\\infty} x f(x)\\,dx.$$</div>
                        `,
                        hy: `
                          <div class="definition-box"><strong>Դիսկրետ՝</strong> $$\\mathbb{E}[X]=\\sum x\\,P(X=x).$$</div>
                          <div class="definition-box"><strong>Անընդհատ՝</strong> $$\\mathbb{E}[X]=\\int_{-\\infty}^{\\infty} x f(x)\\,dx.$$</div>
                        `,
                        ru: `
                          <div class="definition-box"><strong>Дискретная:</strong> $$\\mathbb{E}[X]=\\sum x\\,P(X=x).$$</div>
                          <div class="definition-box"><strong>Непрерывная:</strong> $$\\mathbb{E}[X]=\\int_{-\\infty}^{\\infty} x f(x)\\,dx.$$</div>
                        `
                    }
                },
                {
                    id: "theory-rv-variance",
                    title: { en: "Variance", hy: "Դիսպերսիա", ru: "Дисперсия" },
                    content: {
                        en: `<div class="definition-box">$$ \\mathrm{Var}(X)=\\mathbb{E}[(X-\\mu)^2]=\\mathbb{E}[X^2]-\\mu^2. $$</div>`,
                        hy: `<div class="definition-box">$$ \\mathrm{Var}(X)=\\mathbb{E}[(X-\\mu)^2]=\\mathbb{E}[X^2]-\\mu^2. $$</div>`,
                        ru: `<div class="definition-box">$$ \\mathrm{Var}(X)=\\mathbb{E}[(X-\\mu)^2]=\\mathbb{E}[X^2]-\\mu^2. $$</div>`
                    }
                },
                {
                    id: "theory-rv-pdf",
                    title: { en: "Density Function (PDF)", hy: "Խտության Ֆունկցիա (PDF)", ru: "Плотность Вероятности" },
                    content: {
                        en: `<p>For continuous variables, probability is the area under the curve.</p> $$ P(a \\le X \\le b) = \\int_{a}^{b} f(x) dx $$`,
                        hy: `<p>Անընդհատ մեծությունների համար հավանականությունը կորի տակ ընկած մակերեսն է։</p> $$ P(a \\le X \\le b) = \\int_{a}^{b} f(x) dx $$`,
                        ru: `<p>Для непрерывных величин вероятность — это площадь под кривой.</p> $$ P(a \\le X \\le b) = \\int_{a}^{b} f(x) dx $$`
                    }
                }
            ]
        },
        {
            id: "distributions",
            title: { en: "6. Key Distributions", hy: "6. Հիմնական Բաշխումներ", ru: "6. Основные Распределения" },
            subsections: [
                {
                    id: "theory-dist-bernoulli",
                    title: { en: "Bernoulli & Binomial", hy: "Բեռնուլի և Բինոմիալ", ru: "Бернулли и Биномиальное" },
                    content: {
                        en: `<div class="definition-box"><strong>Binomial:</strong> $$ P(X=k) = C_n^k p^k (1-p)^{n-k} $$</div>`,
                        hy: `<div class="definition-box"><strong>Բինոմիալ՝</strong> $$ P(X=k) = C_n^k p^k (1-p)^{n-k} $$</div>`,
                        ru: `<div class="definition-box"><strong>Биномиальное:</strong> $$ P(X=k) = C_n^k p^k (1-p)^{n-k} $$</div>`
                    }
                },
                {
                    id: "theory-dist-poisson",
                    title: { en: "Poisson Distribution", hy: "Պուասոնի Բաշխում", ru: "Распределение Пуассона" },
                    content: {
                        en: `
                          <div class="definition-box">$$ P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Poisson histogram sketch">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <line x1="30" y1="25" x2="30" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <g fill="rgba(157,78,221,0.55)" stroke="rgba(157,78,221,0.85)">
                              <rect x="70"  y="110" width="30" height="20"/>
                              <rect x="115" y="80"  width="30" height="50"/>
                              <rect x="160" y="50"  width="30" height="80"/>
                              <rect x="205" y="60"  width="30" height="70"/>
                              <rect x="250" y="85"  width="30" height="45"/>
                              <rect x="295" y="105" width="30" height="25"/>
                              <rect x="340" y="118" width="30" height="12"/>
                            </g>
                            <text x="360" y="45" fill="rgba(255,214,10,0.9)" font-size="14" font-family="Inter, sans-serif">sketch</text>
                          </svg>
                        `,
                        hy: `
                          <div class="definition-box">$$ P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Պուասոնի հիստոգրամայի էսքիզ">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <line x1="30" y1="25" x2="30" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <g fill="rgba(157,78,221,0.55)" stroke="rgba(157,78,221,0.85)">
                              <rect x="70"  y="110" width="30" height="20"/>
                              <rect x="115" y="80"  width="30" height="50"/>
                              <rect x="160" y="50"  width="30" height="80"/>
                              <rect x="205" y="60"  width="30" height="70"/>
                              <rect x="250" y="85"  width="30" height="45"/>
                              <rect x="295" y="105" width="30" height="25"/>
                              <rect x="340" y="118" width="30" height="12"/>
                            </g>
                            <text x="360" y="45" fill="rgba(255,214,10,0.9)" font-size="14" font-family="Inter, sans-serif">էսքիզ</text>
                          </svg>
                        `,
                        ru: `
                          <div class="definition-box">$$ P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!} $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эскиз гистограммы Пуассона">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <line x1="30" y1="25" x2="30" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <g fill="rgba(157,78,221,0.55)" stroke="rgba(157,78,221,0.85)">
                              <rect x="70"  y="110" width="30" height="20"/>
                              <rect x="115" y="80"  width="30" height="50"/>
                              <rect x="160" y="50"  width="30" height="80"/>
                              <rect x="205" y="60"  width="30" height="70"/>
                              <rect x="250" y="85"  width="30" height="45"/>
                              <rect x="295" y="105" width="30" height="25"/>
                              <rect x="340" y="118" width="30" height="12"/>
                            </g>
                            <text x="360" y="45" fill="rgba(255,214,10,0.9)" font-size="14" font-family="Inter, sans-serif">эскиз</text>
                          </svg>
                        `
                    }
                },
                {
                    id: "theory-dist-normal",
                    title: { en: "Normal Distribution", hy: "Նորմալ Բաշխում", ru: "Нормальное Распределение" },
                    content: {
                        en: `
                          <p>The Bell Curve.</p>
                          <div class="formula-box">$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal curve sketch">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <path d="M30,130 C120,130 160,30 260,30 C360,30 400,130 500,130" fill="none" stroke="rgba(76,201,240,0.9)" stroke-width="3"/>
                            <path d="M180,130 C215,105 235,55 260,55 C285,55 305,105 340,130 L340,130 L180,130 Z" fill="rgba(247,37,133,0.18)"/>
                          </svg>
                        `,
                        hy: `
                          <p>Գաուսյան կորը:</p>
                          <div class="formula-box">$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Նորմալ կորի էսքիզ">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <path d="M30,130 C120,130 160,30 260,30 C360,30 400,130 500,130" fill="none" stroke="rgba(76,201,240,0.9)" stroke-width="3"/>
                            <path d="M180,130 C215,105 235,55 260,55 C285,55 305,105 340,130 L340,130 L180,130 Z" fill="rgba(247,37,133,0.18)"/>
                          </svg>
                        `,
                        ru: `
                          <p>Колоколообразная кривая.</p>
                          <div class="formula-box">$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эскиз нормальной кривой">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <path d="M30,130 C120,130 160,30 260,30 C360,30 400,130 500,130" fill="none" stroke="rgba(76,201,240,0.9)" stroke-width="3"/>
                            <path d="M180,130 C215,105 235,55 260,55 C285,55 305,105 340,130 L340,130 L180,130 Z" fill="rgba(247,37,133,0.18)"/>
                          </svg>
                        `
                    }
                },
                {
                    id: "theory-dist-exponential",
                    title: { en: "Exponential distribution", hy: "Էքսպոնենցիալ բաշխում", ru: "Экспоненциальное" },
                    content: {
                        en: `
                          <div class="definition-box">
                            $$ f(x)=\\lambda e^{-\\lambda x},\\quad x\\ge 0. $$
                          </div>
                          <div class="formula-box">$$ P(X\\le t)=1-e^{-\\lambda t}. $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Exponential decay sketch">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <line x1="30" y1="25" x2="30" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <path d="M30,35 C80,55 120,85 170,100 C260,125 360,130 500,130" fill="none" stroke="rgba(157,78,221,0.9)" stroke-width="3"/>
                          </svg>
                        `,
                        hy: `
                          <div class="definition-box">
                            $$ f(x)=\\lambda e^{-\\lambda x},\\quad x\\ge 0. $$
                          </div>
                          <div class="formula-box">$$ P(X\\le t)=1-e^{-\\lambda t}. $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Էքսպոնենցիալ անկման էսքիզ">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <line x1="30" y1="25" x2="30" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <path d="M30,35 C80,55 120,85 170,100 C260,125 360,130 500,130" fill="none" stroke="rgba(157,78,221,0.9)" stroke-width="3"/>
                          </svg>
                        `,
                        ru: `
                          <div class="definition-box">
                            $$ f(x)=\\lambda e^{-\\lambda x},\\quad x\\ge 0. $$
                          </div>
                          <div class="formula-box">$$ P(X\\le t)=1-e^{-\\lambda t}. $$</div>
                          <svg class="mini-svg" viewBox="0 0 520 160" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Эскиз экспоненциального спада">
                            <rect x="0" y="0" width="520" height="160" fill="transparent"/>
                            <line x1="30" y1="130" x2="500" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <line x1="30" y1="25" x2="30" y2="130" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>
                            <path d="M30,35 C80,55 120,85 170,100 C260,125 360,130 500,130" fill="none" stroke="rgba(157,78,221,0.9)" stroke-width="3"/>
                          </svg>
                        `
                    }
                }
            ]
        },
        {
            id: "limit-theorems",
            title: { en: "7. Limit Theorems", hy: "7. Սահմանային թեորեմներ", ru: "7. Предельные теоремы" },
            subsections: [
                {
                    id: "theory-lln",
                    title: { en: "Law of Large Numbers", hy: "Մեծ թվերի օրենք", ru: "Закон больших чисел" },
                    content: {
                        en: `
                          <div class="theorem-box">
                            <strong>LLN (idea):</strong> the sample mean converges to the expectation.
                            $$ \\overline{X}_n \\to \\mathbb{E}[X]. $$
                          </div>
                          <details class="proof-box">
                            <summary>Show proof (sketch)</summary>
                            <p>In many standard settings, one uses Chebyshev’s inequality to show convergence in probability.</p>
                          </details>
                        `,
                        hy: `
                          <div class="theorem-box">
                            <strong>ՄԹՕ (գաղափար):</strong> միջինն ավելի ու ավելի մոտ է լինում մաթ. սպասմանը։
                            $$ \\overline{X}_n \\to \\mathbb{E}[X]. $$
                          </div>
                          <details class="proof-box">
                            <summary>Ցույց տալ ապացույցը (էսքիզ)</summary>
                            <p>Սովորաբար կիրառվում է Չեբիշևի անհավասարությունը՝ մոտարկումը հիմնավորելու համար։</p>
                          </details>
                        `,
                        ru: `
                          <div class="theorem-box">
                            <strong>ЗБЧ (идея):</strong> выборочное среднее стремится к матожиданию.
                            $$ \\overline{X}_n \\to \\mathbb{E}[X]. $$
                          </div>
                          <details class="proof-box">
                            <summary>Показать доказательство (набросок)</summary>
                            <p>Часто используют неравенство Чебышёва для сходимости по вероятности.</p>
                          </details>
                        `
                    }
                },
                {
                    id: "theory-clt",
                    title: { en: "Central Limit Theorem", hy: "Կենտրոնական սահմանային թեորեմ", ru: "Центральная предельная" },
                    content: {
                        en: `
                          <div class="theorem-box">
                            <strong>CLT (idea):</strong> sums of many independent variables become approximately normal.
                            $$ \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\Rightarrow \\mathcal{N}(0,1). $$
                          </div>
                        `,
                        hy: `
                          <div class="theorem-box">
                            <strong>ԿՍԹ (գաղափար):</strong> շատ անկախ անդամների գումարը մոտ է նորմալ բաշխման։
                            $$ \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\Rightarrow \\mathcal{N}(0,1). $$
                          </div>
                        `,
                        ru: `
                          <div class="theorem-box">
                            <strong>ЦПТ (идея):</strong> сумма многих независимых величин становится почти нормальной.
                            $$ \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\Rightarrow \\mathcal{N}(0,1). $$
                          </div>
                        `
                    }
                }
            ]
        }
    ],

    problems: [
    {
        id: 1,
        difficulty: "beginner",
        question: {
            en: "If you flip a fair coin 3 times, what is the probability of getting exactly 2 heads?",
            hy: "Եթե մետաղադրամը նետենք 3 անգամ, ո՞րն է ճիշտ 2 անգամ «Զինանշան» ընկնելու հավանականությունը:",
            ru: "Если подбросить монету 3 раза, какова вероятность выпадения ровно 2 орлов?"
        },
        answer: "3/8",
        related_theory_id: "theory-dist-bernoulli",
        related_theory_hint: {
            en: "This is a binomial model (n trials, k successes).",
            hy: "Սա բինոմիալ մոդել է (n փորձ, k հաջողություն)։",
            ru: "Это биномиальная модель (n испытаний, k успехов)."
        }
    },
    {
        id: 2,
        difficulty: "beginner",
        question: {
            en: "How many ways can you arrange the letters in the word 'MATH'?",
            hy: "Քանի՞ եղանակով կարելի է դասավորել 'MATH' բառի տառերը:",
            ru: "Сколькими способами можно переставить буквы в слове 'MATH'?"
        },
        answer: "24",
        related_theory_id: "theory-comb-perm"
    },
    {
        id: 3,
        difficulty: "beginner",
        question: {
            en: "What is the probability of rolling a number greater than 4 on a standard die?",
            hy: "Զառը նետելիս 4-ից մեծ թիվ ընկնելու հավանականությունը:",
            ru: "Какова вероятность выпадения числа больше 4 на игральной кости?"
        },
        answer: "1/3",
        related_theory_id: "theory-intro-prob"
    },
    {
        id: 4,
        difficulty: "intermediate",
        question: {
            en: "From a deck of 52 cards, what is the probability of drawing an Ace or a King?",
            hy: "52 խաղաքարտից մեկը հանելիս, ո՞րն է Տուզ կամ Թագավոր ընկնելու հավանականությունը:",
            ru: "Какова вероятность вытянуть Туза или Короля из колоды в 52 карты?"
        },
        answer: "2/13",
        related_theory_id: "theory-intro-prob"
    },
    {
        id: 5,
        difficulty: "intermediate",
        question: {
            en: "If P(A) = 0.5, P(B) = 0.4, and A and B are independent, what is P(A and B)?",
            hy: "Եթե P(A) = 0.5, P(B) = 0.4, և A ու B անկախ են, ապա որքա՞ն է P(AB):",
            ru: "Если P(A) = 0.5, P(B) = 0.4 и A и B независимы, чему равно P(A и B)?"
        },
        answer: "0.2",
        related_theory_id: "theory-conditional-prob",
        related_theory_hint: {
            en: "Independence implies P(A∩B)=P(A)P(B).",
            hy: "Անկախության դեպքում՝ \(P(A\\cap B)=P(A)P(B)\)։",
            ru: "При независимости: \(P(A\\cap B)=P(A)P(B)\)."
        }
    },
    {
        id: 7,
        difficulty: "intermediate",
        question: {
            en: "A test is 99% accurate. 1% of people have the disease. What is P(disease | positive)? (Give a decimal)",
            hy: "Թեստը 99% ճշգրիտ է։ Մարդկանց 1%‑ն ունի հիվանդություն։ Որքա՞ն է P(հիվանդություն | դրական)։ (տուր տասնորդական)",
            ru: "Тест точен на 99%. 1% людей больны. Найдите P(болезнь | положит.). (десятичная)"
        },
        answer: "0.5",
        related_theory_id: "theory-bayes",
        related_theory_hint: {
            en: "Use Bayes: P(D|+)=P(+|D)P(D)/P(+).",
            hy: "Կիրառիր Բայես՝ \(P(D|+)=\\frac{P(+|D)P(D)}{P(+)}\)։",
            ru: "Используйте Байеса: \(P(D|+)=\\frac{P(+|D)P(D)}{P(+)}\)."
        }
    },
    {
        id: 9,
        difficulty: "advanced",
        question: {
            en: "For X~Poisson(λ=2), compute P(X=0).",
            hy: "Եթե X~Poisson(λ=2), հաշվել P(X=0)։",
            ru: "Если X~Poisson(λ=2), найти P(X=0)."
        },
        answer: "0.135335",
        related_theory_id: "theory-dist-poisson"
    },
    {
        id: 10,
        difficulty: "advanced",
        question: {
            en: "For X~N(0,1), approximate P(-1 ≤ X ≤ 1). (decimal)",
            hy: "Եթե X~N(0,1), մոտավորել P(-1 ≤ X ≤ 1)։ (տասնորդական)",
            ru: "Если X~N(0,1), приблизить P(-1 ≤ X ≤ 1). (десятичная)"
        },
        answer: "0.682689",
        related_theory_id: "theory-dist-normal",
        related_theory_hint: {
            en: "Use the normal CDF (Lab page can visualize this).",
            hy: "Օգտագործիր նորմալ CDF (կարող ես տեսնել Lab էջում)։",
            ru: "Используйте CDF нормального (можно в Lab)."
        }
    },
     {
        id: 6,
        difficulty: "advanced",
        question: {
            en: "Evaluate 5! / (2! * 3!)",
            hy: "Հաշվել՝ 5! / (2! * 3!)",
            ru: "Вычислить 5! / (2! * 3!)"
        },
        answer: "10",
        related_theory_id: "theory-comb-perm"
    },
    {
        id: 8,
        difficulty: "olympic",
        question: {
            en: "What is the probability that two randomly chosen integers have a greatest common divisor of 1?",
            hy: "Ո՞րն է հավանականությունը, որ երկու պատահական ընտրված ամբողջ թվերի ամենամեծ ընդհանուր բաժանարարը 1 է:",
            ru: "Какова вероятность того, что два случайно выбранных целых числа взаимно просты (НОД = 1)?"
        },
        answer: "6/pi^2",
        related_theory_id: "theory-classical-def",
        related_theory_hint: {
            en: "This is a known result from number theory (coprime probability).",
            hy: "Սա հայտնի փաստ է թվերի տեսությունից (փոխադարձ պարզության հավանականություն)։",
            ru: "Это известный факт из теории чисел (вероятность взаимной простоты)."
        }
    }
    ]
};
