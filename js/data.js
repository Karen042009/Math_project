/*
 * DATA.JS — Probability Theory Knowledge Base (Part 1/2)
 * Contains: UI Strings, Theory Sections (1-7)
 */

window.probabilityData = {

  /* ===================== UI STRINGS ===================== */
  ui: {
    nav_theory: { hy: "Տեսություն", en: "Theory", ru: "Теория" },
    nav_home: { hy: "Գլխավոր", en: "Home", ru: "Главная" },
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
    modal_incorrect_msg: { hy: "Ցավոք, պատասխանը սխալ է: Փորձեք ևս մեկ ամգամ:", en: "Unfortunately, that's incorrect. Try again.", ru: "К сожалению, неверно. Попробуйте ещё." },
    modal_smart_feedback: {
        hy: "Ցավոք, սխալ է։ Կարծես թե Դուք դժվարանում եք <strong>«{topic}»</strong> թեմայում։ {hint}",
        en: "Unfortunately, that's incorrect. It looks like you're struggling with <strong>\"{topic}\"</strong>. {hint}",
        ru: "К сожалению, неверно. Похоже, вы затрудняетесь в теме <strong>«{topic}»</strong>. {hint}"
    },
    modal_hint_label: { hy: "Հուշում՝", en: "Hint:", ru: "Подсказка:" },
    
    // Hero & Home
    hero_title: { hy: "ՀԱՎԱՆԱԿԱՆՈՒԹՅՈՒՆՆԵՐԻ ՏԵՍՈՒԹՅՈՒՆ", en: "PROBABILITY THEORY", ru: "ТЕОРИЯ ВЕРОЯТНОСТЕЙ" },
    hero_subtitle: { hy: "ԻՆՏԵՐԱԿՏԻՎ ՈՒՍՈՒՄՆԱԿԱՆ ՀԱՐԹԱԿ", en: "INTERACTIVE LEARNING PLATFORM", ru: "ИНТЕРАКТИВНАЯ УЧЕБНАЯ ПЛАТФОРМА" },
    hero_desc: { hy: "Բարդ մաթեմատիկական հասկացությունները դառնում են հասանելի, տեսանելի և կիրառելի: Տեսնել, փորձարկել, հասկանալ:", en: "Complex mathematical concepts become accessible, visual, and applicable. See, experiment, understand.", ru: "Сложные математические концепции становятся доступными и наглядными. Смотрите, пробуйте, понимайте." },
    btn_start: { hy: "Սկսել ուսուցումը", en: "Start Learning", ru: "Начать обучение" },
    btn_try_sims: { hy: "Փորձարկել սիմուլյացիաները", en: "Try Simulations", ru: "Попробовать симуляции" },

    card_theory_title: { hy: "Տեսական Շտեմարան", en: "Theory Encyclopedia", ru: "Теоретическая База" },
    card_theory_desc: { hy: "Ամբողջական դասընթաց՝ պարզ սահմանումներից մինչև բարդ թեորեմներ:", en: "Full course from simple definitions to complex theorems.", ru: "Полный курс: от простых определений до сложных теорем." },
    card_practice_title: { hy: "Խնդրագիրք", en: "Practice Arena", ru: "Задачник" },
    card_practice_desc: { hy: "Ինտերակտիվ խնդիրներ տարբեր բարդության՝ սխալների վերլուծության համակարգով:", en: "Interactive problems of varying difficulty with error analysis.", ru: "Интерактивные задачи разной сложности с системой анализа ошибок." },
    card_lab_title: { hy: "Հաշվիչ և Գրաֆիկներ", en: "Calculator & Graphs", ru: "Калькулятор и Графики" },
    card_lab_desc: { hy: "Մասնագիտացված հաշվիչ և հավանականային բաշխումների վիզուալիզացիա:", en: "Specialized calculator and visualization of probability distributions.", ru: "Специализированный калькулятор и визуализация распределений." },
    card_sims_title: { hy: "Սիմուլյացիաներ", en: "Monte Carlo Lab", ru: "Симуляции" },
    card_sims_desc: { hy: "Վիրտուալ փորձեր և պատահականության օրինաչափությունների դիտարկում:", en: "Virtual experiments and observation of patterns in randomness.", ru: "Виртуальные эксперименты и наблюдение за закономерностями." },

    // Section Titles
    section_theory: { hy: "Տեսական Շտեմարան", en: "Theory Encyclopedia", ru: "Теоретическая База" },
    section_practice: { hy: "Խնդրագիրք և Ուսուցանող Համակարգ", en: "The Practice Arena", ru: "Учебно-практический Раздел" },
    section_lab: { hy: "Հաշվիչ և Գրաֆիկական Վերլուծություն", en: "Calculator & Visualizer", ru: "Расчеты и Графики" },
    section_sims: { hy: "Ինտերակտիվ Սիմուլյացիաներ", en: "Monte Carlo Playground", ru: "Интерактивные Симуляции" },

    // Simulation Details
    sim_galton_desc: { hy: "<strong>Գալտոնի տախտակ:</strong> Ցուցադրում է, թե ինչպես է բազմաթիվ պատահական շեղումների արդյունքում ձևավորվում նորմալ բաշխումը:", en: "<strong>Galton Board:</strong> Demonstrates how a normal distribution emerges from numerous random deviations.", ru: "<strong>Доска Гальтона:</strong> Демонстрирует формирование нормального распределения из множества случайных отклонений." },
    sim_monty_desc: { hy: "<strong>Մոնտի Հոլլի պարադոքս:</strong> Հանրահայտ հավանականային խնդիր, որը ցույց է տալիս, թե ինչպես է ընտրության փոփոխությունը մեծացնում հաղթելու հնարավորությունը:", en: "<strong>Monty Hall Paradox:</strong> A famous probability puzzle showing how changing your choice increases the odds of winning.", ru: "<strong>Парадокс Монти Холла:</strong> Известная задача, показывающая, как смена выбора увеличивает шансы на успех." },
    sim_buffon_desc: { hy: "<strong>Բյուֆոնի ասեղը:</strong> Մոնտե Կառլոյի մեթոդի դասական օրինակ՝ π թվի մոտարկումը պատահական նետումների միջոցով:", en: "<strong>Buffon's Needle:</strong> A classic Monte Carlo example: approximating π through random needle tosses.", ru: "<strong>Игла Бюффона:</strong> Классический пример метода Монте-Карло: приближение числа π через случайные броски." },

    // Practice & AI
    ai_badge_text: { hy: "Սխալների վերլուծության համակարգ՝ կապ տեսության հետ", en: "Smart feedback system — links wrong answers to theory", ru: "Система анализа ошибок — связь с теорией" },
    section_ai_gen: { hy: "AI Խնդիրների Գեներատոր", en: "AI Problem Generator", ru: "AI Генератор Задач" },
    btn_generate_problem: { hy: "Ստեղծել խնդիր", en: "Generate Problem", ru: "Создать задачу" },
    ai_workspace_title: { hy: "Ստեղծված խնդիր", en: "Generated Problem", ru: "Сгенерированная задача" },
    ai_placeholder_solution: { hy: "Գրեք Ձեր լուծումը այստեղ...", en: "Write your solution here...", ru: "Напишите ваше решение здесь..." },
    ai_upload_label: { hy: "Վերբեռնել ձեռագիր լուծումը", en: "Upload handwritten solution", ru: "Загрузить рукописное решение" },
    btn_ask_ai: { hy: "Հարցնել AI-ին", en: "Ask AI to Check", ru: "Спросить AI" },
    ai_score_label: { hy: "Միավոր՝", en: "Score:", ru: "Баллы:" },

    // Lab
    calc_placeholder: { hy: "Մուտքագրեք արտահայտությունը...", en: "Enter expression...", ru: "Введите выражение..." },
    calc_result_label: { hy: "Արդյունք՝", en: "Result:", ru: "Результат:" },
    btn_calculate: { hy: "Հաշվել", en: "Calculate", ru: "Посчитать" },
    dist_normal: { hy: "Նորմալ բաշխում", en: "Normal Distribution", ru: "Нормальное распределение" },
    dist_venn: { hy: "Վեննի դիագրամ", en: "Venn Diagram", ru: "Диаграмма Венна" },
    dist_tree: { hy: "Հավանականությունների ծառ", en: "Probability Tree", ru: "Дерево вероятностей" },
    btn_draw: { hy: "Գծել", en: "Draw", ru: "Нарисовать" },

    // Simulations
    intro_sims: { hy: "Դիտեք, թե ինչպես են աշխատում հավանականությունները ինտերակտիվ սիմուլյացիաների միջոցով", en: "Watch probability come alive through interactive simulations!", ru: "Наблюдайте за теорией вероятностей в действии через симуляции" },
    galton_rows_label: { hy: "Շարքերի քանակը", en: "Number of Rows", ru: "Количество рядов" },
    btn_drop_1: { hy: "Նետել 1 գնդիկ", en: "Drop 1 Ball", ru: "Бросить 1 шарик" },
    btn_drop_50: { hy: "Նետել 50", en: "Drop 50", ru: "Бросить 50" },
    btn_drop_500: { hy: "Նետել 500", en: "Drop 500", ru: "Бросить 500" },
    btn_reset: { hy: "Վերակայել", en: "Reset", ru: "Сброс" },
    stat_balls_dropped: { hy: "Նետված գնդիկներ՝", en: "Balls dropped:", ru: "Брошено шаров:" },
    stat_settled: { hy: "Տեղավորված՝", en: "Settled:", ru: "Осело:" },
    monty_choose_door: { hy: "Ընտրեք դուռը", en: "Choose a door!", ru: "Выберите дверь!" },
    btn_switch: { hy: "Փոխել", en: "Switch!", ru: "Сменить!" },
    btn_stay: { hy: "Մնալ", en: "Stay", ru: "Оставить" },
    btn_sim_100: { hy: "Սիմուլյացիա (100)", en: "Simulate 100", ru: "Симулировать 100" },
    btn_sim_1000: { hy: "Սիմուլյացիա (1000)", en: "Simulate 1000", ru: "Симулировать 1000" },
    stat_total_games: { hy: "Խաղերի քանակը՝", en: "Total games:", ru: "Всего игр:" },
    stat_switch_wins: { hy: "Հաղթանակ (փոխելով)՝", en: "Switch wins:", ru: "Побед при смене:" },
    stat_stay_wins: { hy: "Հաղթանակ (մնալով)՝", en: "Stay wins:", ru: "Побед без смены:" },
    buffon_length_label: { hy: "Ասեղի երկարությունը (l)", en: "Needle Length (l)", ru: "Длина иглы (l)" },
    buffon_spacing_label: { hy: "Գծերի հեռավորությունը (d)", en: "Line Spacing (d)", ru: "Расстояние (d)" },
    btn_drop_10: { hy: "Նետել 10", en: "Drop 10", ru: "Бросить 10" },
    btn_drop_100: { hy: "Նետել 100", en: "Drop 100", ru: "Бросить 100" },
    btn_drop_1000: { hy: "Նետել 1000", en: "Drop 1000", ru: "Бросить 1000" },
    btn_drop_10000: { hy: "Նետել 10,000", en: "Drop 10,000", ru: "Бросить 10,000" },
    stat_total_needles: { hy: "Ընդամենը ասեղներ՝", en: "Total needles:", ru: "Всего игл:" },
    stat_crossing: { hy: "Հատումներ՝", en: "Crossing:", ru: "Пересечений:" },
    stat_pi_estimate: { hy: "π-ի մոտարկումը՝", en: "π estimate:", ru: "Приближение π:" },
    stat_actual_pi: { hy: "Իրական π՝", en: "Actual π:", ru: "Реальное π:" },

    // Topics & Difficulty
    topic_basic: { hy: "Հիմնական հավանականություն", en: "Basic Probability", ru: "Основы вероятности" },
    topic_combinatorics: { hy: "Կոմբինատորիկա", en: "Combinatorics", ru: "Комбинаторика" },
    topic_conditional: { hy: "Պայմանական հավանականություն", en: "Conditional Probability", ru: "Условная вероятность" },
    topic_bayes: { hy: "Բայեսի թեորեմ", en: "Bayes' Theorem", ru: "Теорема Байеса" },
    topic_distributions: { hy: "Բաշխումներ", en: "Distributions", ru: "Распределения" },
    topic_rv: { hy: "Պատահական մեծություններ", en: "Random Variables", ru: "Случайные величины" },

    sim_galton_btn: { hy: "Գալտոնի տախտակ", en: "Galton Board", ru: "Доска Гальтона" },
    sim_monty_btn: { hy: "Մոնտի Հոլլ", en: "Monty Hall", ru: "Монти Холл" },
    sim_buffon_btn: { hy: "Բյուֆոնի ասեղը", en: "Buffon's Needle", ru: "Игла Бюффона" },
    card_tab_calc: { hy: "Հաշվիչ", en: "Calculator", ru: "Калькулятор" },
    stat_solved: { hy: "Լուծված", en: "Solved", ru: "Решено" },
    stat_attempts: { hy: "Փորձեր", en: "Attempts", ru: "Попытки" },
    stat_total: { hy: "Ընդամենը", en: "Total", ru: "Всего" },
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
                <strong>Definition (Random Event):</strong> A random event is an outcome or set of outcomes from a random experiment that may or may not occur.
              </div>
              <p>Key concepts:</p>
              <ul>
                <li><strong>Sample Space (Ω):</strong> The set of all possible outcomes of an experiment.</li>
                <li><strong>Event:</strong> Any subset of Ω.</li>
                <li><strong>Elementary Event:</strong> An event consisting of a single outcome.</li>
              </ul>
              <div class="formula-box">
                \\[ \\Omega = \\{\\omega_1, \\omega_2, \\ldots, \\omega_n\\} \\]
              </div>
              <p><strong>Example:</strong> For a die roll, \\( \\Omega = \\{1,2,3,4,5,6\\} \\). The event "even number" is A = {2, 4, 6}.</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Случайное событие — это исход эксперимента, который может произойти или нет.
              </div>
              <p>Основные понятия:</p>
              <ul>
                <li><strong>Пространство элементарных исходов (Ω):</strong> Множество всех возможных исходов опыта.</li>
                <li><strong>Событие:</strong> Любое подмножество Ω.</li>
                <li><strong>Элементарное событие:</strong> Событие, состоящее из одного исхода.</li>
              </ul>
              <div class="formula-box">
                \\[ \\Omega = \\{\\omega_1, \\omega_2, \\ldots, \\omega_n\\} \\]
              </div>
              <p><strong>Пример:</strong> При бросании кубика \\( \\Omega = \\{1,2,3,4,5,6\\} \\). Событие «выпало чётное» — A = {2, 4, 6}.</p>
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
            en: `
              <div class="definition-box">
                <strong>Operations on Events:</strong>
              </div>
              <ul>
                <li><strong>Union (A ∪ B):</strong> At least one of A or B occurs.</li>
                <li><strong>Intersection (A ∩ B):</strong> Both A and B occur simultaneously.</li>
                <li><strong>Complement (Ā):</strong> Event A does not occur.</li>
                <li><strong>Difference (A \\ B):</strong> A occurs but B does not.</li>
              </ul>
              <div class="theorem-box">
                <strong>De Morgan's Laws:</strong>
                \\[ \\overline{A \\cup B} = \\bar{A} \\cap \\bar{B} \\]
                \\[ \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B} \\]
              </div>
              <p>These laws are fundamental for simplifying complex event expressions.</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Операции над событиями:</strong>
              </div>
              <ul>
                <li><strong>Объединение (A ∪ B):</strong> Происходит хотя бы одно из событий A или B.</li>
                <li><strong>Пересечение (A ∩ B):</strong> Происходят оба события A и B одновременно.</li>
                <li><strong>Дополнение (Ā):</strong> Событие A не происходит.</li>
                <li><strong>Разность (A \\ B):</strong> A происходит, но B не происходит.</li>
              </ul>
              <div class="theorem-box">
                <strong>Законы Де Моргана:</strong>
                \\[ \\overline{A \\cup B} = \\bar{A} \\cap \\bar{B} \\]
                \\[ \\overline{A \\cap B} = \\bar{A} \\cup \\bar{B} \\]
              </div>
            `
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
            en: `
              <div class="definition-box">
                <strong>Definition:</strong> A permutation of n elements is any ordered arrangement of all n elements.
              </div>
              <div class="formula-box">
                \\[ P_n = n! = 1 \\cdot 2 \\cdot \\ldots \\cdot n \\]
              </div>
              <p><strong>Example:</strong> Arranging 3 books on a shelf: \\(P_3 = 3! = 6\\) ways.</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Перестановка из n элементов — любая упорядоченная последовательность всех n элементов.
              </div>
              <div class="formula-box">
                \\[ P_n = n! = 1 \\cdot 2 \\cdot \\ldots \\cdot n \\]
              </div>
              <p><strong>Пример:</strong> Расставить 3 книги на полке: \\(P_3 = 3! = 6\\) способов.</p>
            `
          }
        },
        {
          id: "theory-arrangements",
          title: { hy: "Տեղադրություններ", en: "Arrangements (Placements)", ru: "Размещения" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Սահմանում:</strong> n տարբեր տարրերից k-ական տեղադրություն կոչվում է այդ տարրերից կազմված ցանկացած կարգավորված k տարր պարունակող ենթաբազմություն:
              </div>
              <div class="formula-box">
                \\[ A_n^k = \\frac{n!}{(n-k)!} \\]
              </div>
              <p><strong>Օրինակ:</strong> 5 գրքից 3-ը դարակում շարելու եղանակները՝ \\(A_5^3 = 5!/2! = 60\\):</p>
            `,
            en: `
              <div class="definition-box">
                <strong>Definition:</strong> An arrangement (or k-permutation) of n elements is an ordered selection of k elements from n distinct elements. Order matters.
              </div>
              <div class="formula-box">
                \\[ A_n^k = P(n,k) = \\frac{n!}{(n-k)!} \\]
              </div>
              <p><strong>Example:</strong> Selecting and arranging 3 books from 5 on a shelf: \\(A_5^3 = 60\\).</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Размещение из n по k — упорядоченный набор k элементов из n различных.
              </div>
              <div class="formula-box">
                \\[ A_n^k = \\frac{n!}{(n-k)!} \\]
              </div>
            `
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
            en: `
              <div class="definition-box">
                <strong>Definition:</strong> A combination of k elements from n is an unordered selection (order does not matter).
              </div>
              <div class="formula-box">
                \\[ C(n,k) = \\binom{n}{k} = \\frac{n!}{k!(n-k)!} \\]
              </div>
              <p><strong>Example:</strong> Choosing 3 from 5 people for a committee: \\(C(5,3) = 10\\).</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Сочетание из n по k — неупорядоченный набор k элементов из n (порядок не важен).
              </div>
              <div class="formula-box">
                \\[ C_n^k = \\frac{n!}{k!(n-k)!} \\]
              </div>
              <p><strong>Пример:</strong> Выбрать 3 из 5 человек в комиссию: \\(C_5^3 = 10\\).</p>
            `
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
            en: `
              <div class="definition-box">
                <strong>Classical Definition:</strong> If an experiment has n equally likely outcomes, m of which are favorable to event A:
              </div>
              <div class="formula-box">
                \\[ P(A) = \\frac{m}{n}, \\quad 0 \\le P(A) \\le 1 \\]
              </div>
              <p><strong>Example:</strong> Rolling a die, probability of getting a 6: \\(P = 1/6\\).</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Классическое определение:</strong> Если опыт имеет n равновозможных исходов, из которых m благоприятствуют событию A:
              </div>
              <div class="formula-box">
                \\[ P(A) = \\frac{m}{n}, \\quad 0 \\le P(A) \\le 1 \\]
              </div>
              <p><strong>Пример:</strong> Бросок кубика, вероятность выпадения 6: \\(P = 1/6\\).</p>
            `
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
            en: `
              <div class="definition-box">
                <strong>Definition:</strong> When the sample space is a geometric region, probability is the ratio of favorable area (length, volume) to total area.
              </div>
              <div class="formula-box">
                \\[ P(A) = \\frac{\\text{measure}(A)}{\\text{measure}(\\Omega)} \\]
              </div>
              <p><strong>Example (Buffon's Needle):</strong> Dropping a needle on parallel lines — the probability of crossing relates to \\(\\pi\\). See the Simulations section!</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Когда пространство исходов — геометрическая область, вероятность равна отношению площади (длины, объёма) благоприятной области к общей.
              </div>
              <div class="formula-box">
                \\[ P(A) = \\frac{\\text{мера}(A)}{\\text{мера}(\\Omega)} \\]
              </div>
              <p><strong>Пример (Игла Бюффона):</strong> Бросание иглы на параллельные линии — вероятность пересечения связана с \\(\\pi\\). Смотрите раздел Симуляций!</p>
            `
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
            en: `
              <div class="definition-box">
                <strong>Definition:</strong> The probability of A given that B has occurred:
              </div>
              <div class="formula-box">
                \\[ P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\]
              </div>
              <div class="theorem-box">
                <strong>Independence:</strong> Events A and B are independent if:
                \\[ P(A \\cap B) = P(A) \\cdot P(B) \\]
              </div>
            `,
            ru: `
              <div class="definition-box">
                <strong>Определение:</strong> Вероятность A при условии, что B произошло:
              </div>
              <div class="formula-box">
                \\[ P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\]
              </div>
              <div class="theorem-box">
                <strong>Независимость:</strong> A и B независимы, если:
                \\[ P(A \\cap B) = P(A) \\cdot P(B) \\]
              </div>
            `
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
            en: `
              <div class="theorem-box">
                If \\(H_1, \\ldots, H_n\\) form a complete group of mutually exclusive hypotheses:
                \\[ P(A) = \\sum_{i=1}^{n} P(H_i) \\cdot P(A|H_i) \\]
              </div>
              <p>This decomposes a complex probability into a weighted sum over simpler conditional probabilities.</p>
            `,
            ru: `
              <div class="theorem-box">
                Если \\(H_1, \\ldots, H_n\\) образуют полную группу несовместных гипотез:
                \\[ P(A) = \\sum_{i=1}^{n} P(H_i) \\cdot P(A|H_i) \\]
              </div>
              <p>Разлагает сложную вероятность на сумму условных вероятностей.</p>
            `
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
            en: `
              <div class="theorem-box">
                <strong>Bayes' Theorem:</strong> Allows updating the probability of a hypothesis after observing evidence:
                \\[ P(H_k|A) = \\frac{P(H_k) \\cdot P(A|H_k)}{\\sum_{i} P(H_i) \\cdot P(A|H_i)} \\]
              </div>
              <p>This is the foundation of Bayesian inference — learning from data!</p>
            `,
            ru: `
              <div class="theorem-box">
                <strong>Теорема Байеса:</strong> Позволяет пересчитать вероятности гипотез после наблюдения результата:
                \\[ P(H_k|A) = \\frac{P(H_k) \\cdot P(A|H_k)}{\\sum_{i} P(H_i) \\cdot P(A|H_i)} \\]
              </div>
              <p>Это основа байесовского вывода — обучение на данных!</p>
            `
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
            en: `
              <div class="definition-box">
                <strong>Expected Value (Mean):</strong>
                \\[ E(X) = \\sum_{i} x_i \\cdot p_i \\]
              </div>
              <div class="definition-box">
                <strong>Variance:</strong> Measures spread around the mean.
                \\[ D(X) = E(X^2) - (E(X))^2 \\]
              </div>
              <p><strong>Standard Deviation:</strong> \\(\\sigma = \\sqrt{D(X)}\\)</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Математическое ожидание:</strong>
                \\[ E(X) = \\sum_{i} x_i \\cdot p_i \\]
              </div>
              <div class="definition-box">
                <strong>Дисперсия:</strong> Мера разброса вокруг среднего.
                \\[ D(X) = E(X^2) - (E(X))^2 \\]
              </div>
              <p><strong>Среднеквадратическое отклонение:</strong> \\(\\sigma = \\sqrt{D(X)}\\)</p>
            `
          }
        },
        {
          id: "theory-continuous-rv",
          title: { hy: "Անընդհատ պատահական մեծություններ", en: "Continuous Random Variables", ru: "Непрерывные СВ" },
          content: {
            hy: `
              <div class="definition-box">
                <strong>Հավանականությունների խտության ֆունկցիա (f(x)):</strong> Այնպիսի ֆունկցիա, որի ինտեգրալը տալիս է պատահույթի հավանականությունը:
                \\[ P(a < X < b) = \\int_{a}^{b} f(x)dx \\]
              </div>
              <div class="definition-box">
                <strong>Բաշխման ֆունկցիա (F(x)):</strong>
                \\[ F(x) = P(X < x) = \\int_{-\\infty}^{x} f(t)dt \\]
              </div>
            `,
            en: `
              <div class="definition-box">
                <strong>Probability Density Function (PDF):</strong> A function whose integral represents the probability of an interval.
                \\[ P(a < X < b) = \\int_{a}^{b} f(x)dx \\]
              </div>
              <div class="definition-box">
                <strong>Cumulative Distribution Function (CDF):</strong>
                \\[ F(x) = P(X < x) \\]
              </div>
            `,
            ru: `
              <div class="definition-box">
                <strong>Плотность вероятности (f(x)):</strong> Функция, интеграл которой дает вероятность события.
              </div>
              <div class="definition-box">
                <strong>Функция распределения (F(x)):</strong>
              </div>
            `
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
            en: `
              <div class="definition-box">
                <strong>Bernoulli Scheme:</strong> In n independent trials, each with success probability p (failure q = 1-p), the probability of exactly k successes is:
              </div>
              <div class="formula-box">
                \\[ P_n(k) = C(n,k) \\cdot p^k \\cdot (1-p)^{n-k} \\]
              </div>
              <p><strong>Example:</strong> A coin is flipped 10 times. Probability of exactly 3 heads: \\(C(10,3) \\cdot 0.5^3 \\cdot 0.5^7 \\approx 0.117\\).</p>
            `,
            ru: `
              <div class="definition-box">
                <strong>Схема Бернулли:</strong> В n независимых испытаниях с вероятностью успеха p (неудачи q = 1-p), вероятность ровно k успехов:
              </div>
              <div class="formula-box">
                \\[ P_n(k) = C_n^k \\cdot p^k \\cdot q^{n-k} \\]
              </div>
              <p><strong>Пример:</strong> Монету бросают 10 раз. Вероятность ровно 3 орлов: \\(C_{10}^3 \\cdot 0.5^{10} \\approx 0.117\\).</p>
            `
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
            en: `
              <div class="theorem-box">
                <strong>Bernoulli's Theorem (Weak LLN):</strong> As the number of trials n grows, the relative frequency of successes (k/n) converges to the true probability p:
                \\[ \\lim_{n \\to \\infty} P\\left( \\left| \\frac{k}{n} - p \\right| < \\epsilon \\right) = 1 \\]
              </div>
              <p>This is the fundamental link between "experimental" and "theoretical" probability. Try the Galton Board simulation to see it in action!</p>
            `,
            ru: `
              <div class="theorem-box">
                <strong>Теорема Бернулли (слабый ЗБЧ):</strong> При увеличении числа испытаний n, относительная частота (k/n) сходится к вероятности p:
                \\[ \\lim_{n \\to \\infty} P\\left( \\left| \\frac{k}{n} - p \\right| < \\epsilon \\right) = 1 \\]
              </div>
              <p>Это фундаментальная связь между «экспериментальной» и «теоретической» вероятностью. Попробуйте симуляцию доски Гальтона!</p>
            `
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
            en: `
              <div class="theorem-box">
                <strong>CLT:</strong> The sum of independent, identically distributed random variables tends towards a normal distribution:
                \\[ \\frac{\\sum X_i - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1) \\]
              </div>
              <p>This explains why the Galton Board (see Simulations) produces a bell-shaped curve, and why the normal distribution appears everywhere in nature.</p>
            `,
            ru: `
              <div class="theorem-box">
                <strong>ЦПТ:</strong> Сумма независимых одинаково распределённых случайных величин стремится к нормальному распределению:
                \\[ \\frac{\\sum X_i - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1) \\]
              </div>
              <p>Это объясняет, почему доска Гальтона (см. Симуляции) даёт колоколообразную кривую.</p>
            `
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
    },

    /* ---- Additional Beginner ---- */
    {
      id: 105,
      difficulty: "beginner",
      question: { hy: "Ինչի՞ է հավասար P(A)-ն, եթե A-ն հավաստի պատահույթ է:", en: "What is P(A) if A is a certain event?", ru: "Чему равна P(A), если A — достоверное событие?" },
      answer: "1",
      related_theory_id: "theory-events",
      related_theory_hint: { hy: "Հավաստի պատահույթը համընկնում է Ω-ի հետ:", en: "A certain event = Ω, P(Ω) = 1.", ru: "Достоверное событие = Ω, P(Ω) = 1." }
    },
    {
      id: 106,
      difficulty: "beginner",
      question: { hy: "Քանի՞ տեղափոխություն կարելի է կազմել 4 տարրից (4!):", en: "How many permutations of 4 elements? (4!)", ru: "Сколько перестановок из 4 элементов? (4!)" },
      answer: "24",
      related_theory_id: "theory-permutations",
      related_theory_hint: { hy: "4! = 1*2*3*4 = 24:", en: "4! = 1*2*3*4.", ru: "4! = 1*2*3*4." }
    },
    {
      id: 107,
      difficulty: "beginner",
      question: { hy: "Մետաղադրամը նետում են մեկ անգամ: Որքա՞ն է «գիր» բացվելու հավանականությունը:", en: "A coin is flipped once. What is the probability of tails?", ru: "Монету бросают 1 раз. Вероятность решки?" },
      answer: "0.5",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "Կա երկու հավասարահնարավոր ելք:", en: "Two equally likely outcomes.", ru: "Два равновозможных исхода." }
    },

    /* ---- Additional Intermediate ---- */
    {
      id: 205,
      difficulty: "intermediate",
      question: { hy: "Քանի՞ տեղադրություն կարելի է կազմել 7 տարրից 3-ական: A(7,3) = ?", en: "How many arrangements of 3 from 7 elements? A(7,3) = ?", ru: "Сколько размещений из 7 по 3? A(7,3) = ?" },
      answer: "210",
      related_theory_id: "theory-arrangements",
      related_theory_hint: { hy: "A(7,3) = 7! / 4! = 7*6*5 = 210:", en: "A(7,3) = 7! / 4! = 7*6*5.", ru: "A(7,3) = 7! / 4! = 7*6*5." }
    },
    {
      id: 206,
      difficulty: "intermediate",
      question: { hy: "Բեռնուլիի 6 փորձերում (p=0.5), որքա՞ն է ճիշտ 3 հաջողության հավանականությունը:", en: "In 6 Bernoulli trials with p=0.5, probability of exactly 3 successes?", ru: "В 6 испытаниях Бернулли при p=0.5, P(k=3)?" },
      answer: "0.3125",
      related_theory_id: "theory-bernoulli",
      related_theory_hint: { hy: "C(6,3) * 0.5^6 = 20 * 1/64 = 0.3125:", en: "C(6,3) * 0.5^6 = 20/64.", ru: "C(6,3) * 0.5^6 = 20/64." }
    },

    /* ---- Additional Advanced ---- */
    {
      id: 305,
      difficulty: "advanced",
      question: { hy: "Գործարանն ունի 3 հաստոց: A (50% արտադրանք, 2% խոտան), B (30%, 3%), C (20%, 4%): Պատահական հանված իրը խոտան է: Որքա՞ն է հավանականությունը, որ այն A հաստոցից է:", en: "A factory has 3 machines. Machine A (50% output, 2% defect), B (30%, 3%), C (20%, 4%). A random item is defective. Prob it came from Machine A?", ru: "Завод: A (50%, 2% брак), B (30%, 3%), C (20%, 4%). Случайное изд. бракован. Вер. из A?" },
      answer: "0.3704",
      related_theory_id: "theory-bayes",
      related_theory_hint: { hy: "Օգտագործեք Բայեսի բանաձևը:", en: "Bayes: P(A|D) = (0.5*0.02) / (0.5*0.02 + 0.3*0.03 + 0.2*0.04) = 0.01/0.027.", ru: "Байес: P(A|D) = 0.01/0.027." }
    },
    {
      id: 306,
      difficulty: "advanced",
      question: { hy: "Ինչի՞ է հավասար զառի նետման մաթեմատիկական սպասումը: E(X) = ?", en: "Expected value of a fair die roll E(X) = ?", ru: "Мат. ожидание броска кубика E(X) = ?" },
      answer: "3.5",
      related_theory_id: "theory-discrete-rv",
      related_theory_hint: { hy: "E(X) = (1+2+3+4+5+6)/6 = 3.5:", en: "E(X) = (1+2+3+4+5+6)/6 = 3.5.", ru: "E(X) = (1+2+3+4+5+6)/6 = 3.5." }
    },

    /* ---- Additional Olympic ---- */
    {
      id: 404,
      difficulty: "olympic",
      question: { hy: "Մետաղադրամը նետում են 10 անգամ: Որքա՞ն է հավանականությունը, որ «զինանշան» կբացվի 8-ից ԱՎԵԼԻ անգամ: (Կլորացնել մինչև 4 տասնորդական):", en: "A fair coin is flipped 10 times. What is the probability of getting MORE than 8 heads? (Round to 4 decimal places)", ru: "Монету бросают 10 раз. Вероятность БОЛЕЕ 8 орлов? (4 десятичных)" },
      answer: "0.0107",
      related_theory_id: "theory-bernoulli",
      related_theory_hint: { hy: "P(k>8) = P(9) + P(10) = C(10,9)*0.5^10 + C(10,10)*0.5^10:", en: "P(9)+P(10) = (10+1)/1024.", ru: "P(9)+P(10) = 11/1024." }
    }
  ]
};
