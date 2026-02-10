window.probabilityData = {
    // UI Translations
    ui: {
        nav_theory: { en: "Theory", hy: "Տեսություն", ru: "Теория" },
        nav_practice: { en: "Practice", hy: "Խնդիրներ", ru: "Практика" },
        nav_lab: { en: "The Lab", hy: "Լաբորատորիա", ru: "Лаборатория" },
        nav_simulations: { en: "Simulations", hy: "Սիմուլյացիաներ", ru: "Симуляции" },
        
        theory_title: { en: "The Theory Encyclopedia", hy: "Տեսության Հանրագիտարան", ru: "Энциклопедия Теории" },
        theory_intro: { en: "Welcome to the world of chance. Select a topic to begin.", hy: "Բարի գալուստ պատահույթների աշխարհ։ Ընտրեք թեման սկսելու համար։", ru: "Добро пожаловать в мир случайностей. Выберите тему." },
        
        practice_title: { en: "The Practice Arena", hy: "Խնդիրների Հարթակ", ru: "Арена Задач" },
        filter_all: { en: "All", hy: "Բոլորը", ru: "Все" },
        filter_beginner: { en: "Beginner", hy: "Սկսանակ", ru: "Новичок" },
        filter_intermediate: { en: "Intermediate", hy: "Միջին", ru: "Средний" },
        filter_advanced: { en: "Advanced", hy: "Բարդ", ru: "Сложный" },
        filter_olympic: { en: "Olympic", hy: "Օլիմպիական", ru: "Олимпиадный" },
        btn_check: { en: "Check", hy: "Ստուգել", ru: "Проверить" },
        
        lab_title: { en: "The Lab", hy: "Լաբորատորիա", ru: "Лаборатория" },
        calc_title: { en: "Uncertainty Calculator", hy: "Հավանականության Հաշվիչ", ru: "Калькулятор Вероятности" },
        vis_title: { en: "Distribution Visualizer", hy: "Բաշխման Վիզուալիզացիա", ru: "Визуализация Распределения" },
        btn_visualize: { en: "Visualize", hy: "Պատկերել", ru: "Визуализировать" },
        
        sim_title: { en: "Simulation Laboratory", hy: "Սիմուլյացիոն Լաբորատորիա", ru: "Лаборатория Симуляций" },
        sim_galton: { en: "Galton Board", hy: "Գալտոնի Տախտակ", ru: "Доска Гальтона" },
        sim_monty: { en: "Monty Hall", hy: "Մոնտի Հոլ", ru: "Монти Холл" },
        sim_buffon: { en: "Buffon's Needle", hy: "Բուֆոնի Ասեղ", ru: "Игла Бюффона" },
        
        btn_drop_balls: { en: "Drop 500 Balls", hy: "Բաց թողնել 500 գնդիկ", ru: "Бросить 500 шаров" },
        btn_reset: { en: "Reset", hy: "Վերսկսել", ru: "Сброс" },
        btn_run_100: { en: "Simulate 100 Runs", hy: "Կատարել 100 փորձ", ru: "100 симуляций" },
        btn_run_1000: { en: "Simulate 1000 Runs", hy: "Կատարել 1000 փորձ", ru: "1000 симуляций" },
        btn_drop_needles: { en: "Drop Needles", hy: "Նետել Ասեղներ", ru: "Бросить иглы" },
        
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
            title: { en: "Introduction", hy: "Ներածություն", ru: "Введение" },
            subsections: [
                {
                    id: "theory-intro-outcomes",
                    title: { en: "Outcomes & Sample Space", hy: "Ելքեր և Տարրական Պատահույթներ", ru: "Исходы и Пространство Исокдов" },
                    content: {
                        en: `<p>The set of all possible outcomes of an experiment is called the <strong>Sample Space</strong>, denoted by $\\Omega$.</p>
                             <div class="definition-box"><strong>Definition:</strong> An <em>event</em> is a subset of the sample space $\\Omega$.</div>`,
                        hy: `<p>Փորձի բոլոր հնարավոր ելքերի բազմությունը կոչվում է <strong>Տարրական պատահույթների տարածություն</strong> և նշանակվում է $\\Omega$-ով։</p>
                             <div class="definition-box"><strong>Սահմանում․</strong> <em>Պատահույթը</em> $\\Omega$ տարածության ենթաբազմություն է։</div>`,
                        ru: `<p>Множество всех возможных исходов эксперимента называется <strong>Пространством элементарных исходов</strong>, обозначается $\\Omega$.</p>
                             <div class="definition-box"><strong>Определение:</strong> <em>Событие</em> — это подмножество пространства $\\Omega$.</div>`
                    }
                }
            ]
        },
        {
            id: "combinatorics",
            title: { en: "Combinatorics", hy: "Կոմբինատորիկա", ru: "Комбинаторика" },
            subsections: [
                {
                    id: "theory-perm-comb",
                    title: { en: "Permutations & Combinations", hy: "Կարգավորություններ և Զուգորդություններ", ru: "Размещения и Сочетания" },
                    content: {
                        en: `<div class="definition-box"><strong>Permutations ($P_n^k$):</strong> Ordered arrangement. $$ P_n^k = \\frac{n!}{(n-k)!} $$</div>
                             <div class="definition-box"><strong>Combinations ($C_n^k$):</strong> Unordered selection. $$ C_n^k = \\binom{n}{k} $$</div>`,
                        hy: `<div class="definition-box"><strong>Կարգավորություններ ($A_n^k$):</strong> Կարգավորված ենթաբազմություններ։ $$ A_n^k = \\frac{n!}{(n-k)!} $$</div>
                             <div class="definition-box"><strong>Զուգորդություններ ($C_n^k$):</strong> Չկարգավորված ենթաբազմություններ։ $$ C_n^k = \\binom{n}{k} $$</div>`,
                        ru: `<div class="definition-box"><strong>Размещения ($A_n^k$):</strong> Упорядоченные наборы. $$ A_n^k = \\frac{n!}{(n-k)!} $$</div>
                             <div class="definition-box"><strong>Сочетания ($C_n^k$):</strong> Неупорядоченные наборы. $$ C_n^k = \\binom{n}{k} $$</div>`
                    }
                }
            ]
        },
        {
            id: "prob-defs",
            title: { en: "Definitions of Probability", hy: "Հավանականության Սահմանումներ", ru: "Определения Вероятности" },
            subsections: [
                {
                    id: "theory-classical",
                    title: { en: "Classical Definition", hy: "Դասական Սահմանում", ru: "Классическое Определение" },
                    content: {
                        en: `<div class="definition-box">$$ P(A) = \\frac{N(A)}{N} $$</div>`,
                        hy: `<p>Եթե փորձն ունի $N$ հավասարահնարավոր ելքեր, ապա՝</p><div class="definition-box">$$ P(A) = \\frac{N(A)}{N} $$</div>`,
                        ru: `<div class="definition-box">$$ P(A) = \\frac{N(A)}{N} $$</div>`
                    }
                }
            ]
        },
        {
            id: "conditional",
            title: { en: "Conditional Probability", hy: "Պայմանական Հավանականություն", ru: "Условная Вероятность" },
            subsections: [
                {
                    id: "theory-bayes",
                    title: { en: "Bayes' Theorem", hy: "Բայեսի Բանաձևը", ru: "Теорема Байеса" },
                    content: {
                        en: `<div class="theorem-box"><strong>Bayes' Theorem:</strong> $$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$</div>`,
                        hy: `<p>Թույլ է տալիս վերահաշվարկել հավանականությունները՝ նոր տվյալների հիման վրա։</p>
                             <div class="theorem-box"><strong>Բայեսի բանաձևը․</strong> $$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$</div>`,
                        ru: `<div class="theorem-box"><strong>Теорема Байеса:</strong> $$ P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)} $$</div>`
                    }
                }
            ]
        },
        {
            id: "distributions",
            title: { en: "Distributions", hy: "Բաշխումներ", ru: "Распределения" },
            subsections: [
                {
                    id: "theory-dist-bernoulli",
                    title: { en: "Bernoulli & Binomial", hy: "Բեռնուլի և Բինոմիալ", ru: "Бернулли и Биномиальное" },
                    content: {
                        en: `<div class="definition-box"><strong>Binomial ($B(n,p)$):</strong> $$ P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k} $$</div>`,
                        hy: `<div class="definition-box"><strong>Բինոմիալ ($B(n,p)$):</strong> $$ P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k} $$</div>`,
                        ru: `<div class="definition-box"><strong>Биномиальное ($B(n,p)$):</strong> $$ P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k} $$</div>`
                    }
                },
                {
                    id: "theory-dist-normal",
                    title: { en: "Normal Distribution", hy: "Նորմալ Բաշխում", ru: "Нормальное Распределение" },
                    content: {
                        en: `<div class="definition-box">$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$</div>`,
                        hy: `<p>Վիճակագրության ամենակարևոր բաշխումը (Գաուսյան)։</p><div class="definition-box">$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$</div>`,
                        ru: `<div class="definition-box">$$ f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{1}{2}(\\frac{x-\\mu}{\\sigma})^2} $$</div>`
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
                hy: "Եթե մետաղադրամը նետենք 3 անգամ, ո՞րն է ճիշտ 2 անգամ «Զինանշան» ընկնելու հավանականությունը։",
                ru: "Если подбросить монету 3 раза, какова вероятность выпадения ровно 2 орлов?"
            },
            answer: "0.375",
            related_theory_id: "theory-dist-bernoulli"
        },
        {
            id: 2,
            difficulty: "beginner",
            question: {
                en: "How many ways can you arrange the letters in the word 'MATH'?",
                hy: "Քանի՞ եղանակով կարելի է դասավորել 'MATH' բառի տառերը։",
                ru: "Сколькими способами можно переставить буквы в слове 'MATH'?"
            },
            answer: "24",
            related_theory_id: "theory-perm-comb"
        },
        {
            id: 3,
            difficulty: "intermediate",
            question: {
                en: "A card is drawn from a standard 52-card deck. What is the probability it is a King OR a Heart?",
                hy: "Խաղաքարտերի 52-անոց կապուկից հանում են մեկ քարտ։ Ո՞րն է հավանականությունը, որ այն Թագավոր է կամ Սիրտ։",
                ru: "Из колоды в 52 карты тянут одну. Какова вероятность, что это Король ИЛИ Черви?"
            },
            answer: "0.3077", 
            related_theory_id: "theory-classical"
        },
        {
            id: 4,
            difficulty: "intermediate",
            question: {
                en: "P(A)=0.5, P(B)=0.4, P(A|B)=0.7. Calculate P(B|A).",
                hy: "Տրված է P(A)=0.5, P(B)=0.4, P(A|B)=0.7: Հաշվել P(B|A)-ն։",
                ru: "Дано P(A)=0.5, P(B)=0.4, P(A|B)=0.7. Найти P(B|A)."
            },
            answer: "0.56",
            related_theory_id: "theory-bayes"
        },
        {
            id: 5,
            difficulty: "advanced",
            question: {
                en: "X ~ N(0, 1). Find P(-1 < X < 1). (Use 0.68 for approximation)",
                hy: "X ~ N(0, 1): Գտնել P(-1 < X < 1): (Օգտագործել 0.68 մոտարկումը)",
                ru: "X ~ N(0, 1). Найти P(-1 < X < 1). (Принять равным 0.68)"
            },
            answer: "0.68",
            related_theory_id: "theory-dist-normal"
        },
        {
            id: 6,
            difficulty: "olympic",
            question: {
                en: "A stick is broken at two random points. Probability that the 3 pieces form a triangle?",
                hy: "Ձողը կոտրում են երկու պատահական կետերում։ Ո՞րն է հավանականությունը, որ 3 կտորներից կարելի է կազմել եռանկյուն։",
                ru: "Стержень ломают в двух случайных точках. Вероятность того, что из кусочков можно сложить треугольник?"
            },
            answer: "0.25",
            related_theory_id: "theory-geometric" // Note: Added definition for this if missing, or generic
        }
    ]
};
