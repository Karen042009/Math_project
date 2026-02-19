/*
 * DATA.JS — Probability Theory Knowledge Base (Expanded & Optimized)
 * Contains: UI Strings, Advanced Theory Sections, and Dynamic Problem Generator
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
    hero_title: { hy: "ProbSpace", en: "ProbSpace", ru: "ProbSpace" },
    hero_subtitle: { hy: "ԻՆՏԵՐԱԿՏԻՎ ՈՒՍՈՒՄՆԱԿԱՆ ՀԱՐԹԱԿ", en: "INTERACTIVE LEARNING PLATFORM", ru: "ИНТЕРАКТИВНАЯ УЧЕБНАЯ ПЛАТФОРМА" },
    hero_desc: { hy: "Բարդ մաթեմատիկական հասկացությունները դառնում են հասանելի, տեսանելի և կիրառելի: Տեսնել, փորձարկել, հասկանալ:", en: "Complex mathematical concepts become accessible, visual, and applicable. See, experiment, understand.", ru: "Сложные математические концепции становятся доступными и наглядными. Смотрите, пробуйте, понимайте." },
    btn_start: { hy: "Սկսել ուսուցումը", en: "Start Learning", ru: "Начать обучение" },
    btn_try_sims: { hy: "Փորձարկել սիմուլյացիաները", en: "Try Simulations", ru: "Попробовать симуляции" },

    card_theory_title: { hy: "Տեսական Շտեմարան", en: "Theory Encyclopedia", ru: "Теоретическая База" },
    card_theory_desc: { hy: "Ամբողջական դասընթաց՝ պարզ սահմանումներից մինչև բարդ թեորեմներ:", en: "Full course from simple definitions to complex theorems.", ru: "Полный курс: от простых определений до сложных теорем." },
    card_practice_title: { hy: "Խնդրագիրք", en: "Practice Arena", ru: "Задачник" },
    card_practice_desc: { hy: "Անսահմանափակ ինտերակտիվ խնդիրներ AI գեներացիայով:", en: "Unlimited interactive problems with AI generation.", ru: "Неограниченные интерактивные задачи с AI генерацией." },
    card_lab_title: { hy: "Հաշվիչ և Գրաֆիկներ", en: "Calculator & Graphs", ru: "Калькулятор и Графики" },
    card_lab_desc: { hy: "Մասնագիտացված հաշվիչ և հավանականային բաշխումների վիզուալիզացիա:", en: "Specialized calculator and visualization of probability distributions.", ru: "Специализированный калькулятор и визуализация распределений." },
    card_sims_title: { hy: "Սիմուլյացիաներ", en: "Monte Carlo Lab", ru: "Симуляции" },
    card_sims_desc: { hy: "Վիրտուալ փորձեր և պատահականության օրինաչափությունների դիտարկում:", en: "Virtual experiments and observation of patterns in randomness.", ru: "Виртуальные эксперименты и наблюдение за закономерностями." },

    // Section Titles
    section_theory: { hy: "Տեսական Շտեմարան", en: "Theory Encyclopedia", ru: "Теоретическая База" },
    section_practice: { hy: "Խնդրագիրք և Ուսուցանող Համակարգ", en: "The Practice Arena", ru: "Учебно-практический Раздел" },
    section_lab: { hy: "Հաշվիչ և Գրաֆիկական Վերլուծություն", en: "Calculator & Visualizer", ru: "Расчеты и Графики" },
    section_sims: { hy: "Ինտերակտիվ Սիմուլյացիաներ", en: "Monte Carlo Playground", ru: "Интерактивные Симуляции" },

    // ... (Simulation details remain the same) ...
    sim_galton_desc: { hy: "<strong>Գալտոնի տախտակ:</strong> Ցուցադրում է, թե ինչպես է բազմաթիվ պատահական շեղումների արդյունքում ձևավորվում նորմալ բաշխումը:", en: "<strong>Galton Board:</strong> Demonstrates how a normal distribution emerges from numerous random deviations.", ru: "<strong>Доска Гальтона:</strong> Демонстрирует формирование нормального распределения из множества случайных отклонений." },
    sim_galton_desc_short: { hy: "Ցուցադրում է Կենտրոնական Սահմանային Թեորեմը", en: "Demonstrating Central Limit Theorem via Normal Distribution", ru: "Демонстрация Центральной Предельной Теоремы" },
    sim_monty_desc: { hy: "<strong>Մոնտի Հոլլի պարադոքս:</strong> Հանրահայտ հավանականային խնդիր, որը ցույց է տալիս, թե ինչպես է ընտրության փոփոխությունը մեծացնում հաղթելու հնարավորությունը:", en: "<strong>Monty Hall Paradox:</strong> A famous probability puzzle showing how changing your choice increases the odds of winning.", ru: "<strong>Парадокс Монти Холла:</strong> Известная задача, показывающая, как смена выбора увеличивает шансы на успех." },
    sim_monty_desc_short: { hy: "Հավանականային գլուխկոտրուկ հեռուստախաղի հիման վրա", en: "A probability puzzle based on a game show", ru: "Вероятностная головоломка по мотивам телешоу" },
    sim_buffon_desc: { hy: "<strong>Բյուֆոնի ասեղը:</strong> Մոնտի Կառլոյի մեթոդի դասական օրինակ՝ π թվի մոտարկումը պատահական նետումների միջոցով:", en: "<strong>Buffon's Needle:</strong> A classic Monte Carlo example: approximating π through random needle tosses.", ru: "<strong>Игла Бюффона:</strong> Классический пример метода Монте-Карло: приближение числа π через случайные броски." },

    // Practice & AI
    ai_badge_text: { hy: "Սխալների վերլուծության համակարգ՝ կապ տեսության հետ", en: "Smart feedback system — links wrong answers to theory", ru: "Система анализа ошибок — связь с теорией" },
    section_ai_gen: { hy: "Offline Խնդիրների Գեներատոր", en: "Offline Problem Generator", ru: "Offline Генератор Задач" },
    btn_generate_problem: { hy: "Ստեղծել խնդիր", en: "Generate Problem", ru: "Создать задачу" },
    ai_workspace_title: { hy: "Ստեղծված խնդիր", en: "Generated Problem", ru: "Сгенерированная задача" },
    ai_placeholder_solution: { hy: "Գրեք Ձեր լուծումը այստեղ...", en: "Write your solution here...", ru: "Напишите ваше решение здесь..." },
    ai_upload_label: { hy: "Վերբեռնել ձեռագիր լուծումը", en: "Upload handwritten solution", ru: "Загрузить рукописное решение" },
    btn_ask_ai: { hy: "Ստուգել", en: "Check Answer", ru: "Проверить" },
    ai_score_label: { hy: "Միավոր՝", en: "Score:", ru: "Баллы:" },

    // Lab
    calc_placeholder: { hy: "Մուտքագրեք արտահայտությունը...", en: "Enter expression...", ru: "Введите выражение..." },
    calc_result_label: { hy: "Արդյունք՝", en: "Result:", ru: "Результат:" },
    btn_calculate: { hy: "Հաշվել", en: "Calculate", ru: "Посчитать" },
    dist_normal: { hy: "Նորմալ բաշխում", en: "Normal Distribution", ru: "Нормальное распределение" },
    dist_venn: { hy: "Վեննի դիագրամ", en: "Venn Diagram", ru: "Диаграмма Венна" },
    dist_tree: { hy: "Հավանականությունների ծառ", en: "Probability Tree", ru: "Дерево вероятностей" },
    btn_draw: { hy: "Գծել", en: "Draw", ru: "Нарисовать" },

    // Simulations Buttons
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
    stat_pi_estimate: { hy: "π-ի մոտարկումը՝", en: "π estimate:", ru: "Приближение π:" },
    stat_actual_pi: { hy: "Իրական π՝", en: "Actual π:", ru: "Реальное π:" },
    stat_mean: { hy: "Միջին (μ):", en: "Mean (μ):", ru: "Среднее (μ):" },
    stat_stddev: { hy: "Շեղում (σ):", en: "StdDev (σ):", ru: "Отклон. (σ):" },
    stat_dropped: { hy: "Նետված:", en: "Dropped:", ru: "Сброшено:" },
    stat_finished: { hy: "Ավարտված:", en: "Finished:", ru: "Завершено:" },
    stat_approx_results: { hy: "Մոտարկման Արդյունքներ", en: "Approximation Results", ru: "Результаты Приближения" },
    stat_game_stats: { hy: "Խաղի Վիճակագրություն", en: "Game Stats", ru: "Статистика Игры" },
    stat_realtime_analysis: { hy: "Իրական Ժամանակի Վերլուծություն", en: "Real-time Analysis", ru: "Анализ в Реальном Времени" },

    // Practice Stats (CRITICAL - was missing, causing crash)
    stat_solved: { hy: "Լուծված", en: "Solved", ru: "Решено" },
    stat_attempts: { hy: "Փորձեր", en: "Attempts", ru: "Попытки" },
    stat_total: { hy: "Ընդամենը", en: "Total", ru: "Всего" },

    // New Calculator UI
    calc_group_basic: { hy: "Հիմնական", en: "Basic", ru: "Основные" },
    calc_group_adv: { hy: "Բարդ", en: "Advanced", ru: "Продвинутые" },
    calc_group_greek: { hy: "Հունական", en: "Greek", ru: "Греческие" },
    calc_mode_std: { hy: "Ստանդարտ", en: "Standard", ru: "Стандарт" },
    calc_mode_formula: { hy: "Քայլերով լուծում", en: "Step-by-Step", ru: "Пошагово" },

    // Lab/Visualizer
    card_tab_calc: { hy: "Հաշվիչ", en: "Calculator", ru: "Калькулятор" },
    card_visualizer: { hy: "Վիզուալիզատոր", en: "Data Visualizer", ru: "Визуализатор" },
    btn_render: { hy: "Գծել", en: "Render", ru: "Отрисовать" },
    btn_step_solver: { hy: "Քայլերով լուծում", en: "Step-by-Step Solver", ru: "Пошаговое решение" },
    analysis_title: { hy: "Վերլուծություն", en: "Analysis", ru: "Анализ" },

    // Simulation buttons
    sim_galton_btn: { hy: "Գալտոնի տախտակ", en: "Galton Board", ru: "Доска Гальтона" },
    sim_monty_btn: { hy: "Մոնտի Հոլլ", en: "Monty Hall", ru: "Монти Холл" },
    sim_buffon_btn: { hy: "Բյուֆոնի ասեղ", en: "Buffon's Needle", ru: "Игла Бюффона" },

    topic_basic: { hy: "\u0540\u056b\u0574\u0576\u0561\u056f\u0561\u0576 \u0570\u0561\u057e\u0561\u0576\u0561\u056f\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576", en: "Basic Probability", ru: "\u041e\u0441\u043d\u043e\u0432\u044b \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0438" },
    topic_combinatorics: { hy: "\u053f\u0578\u0574\u0562\u056b\u0576\u0561\u057f\u0578\u0580\u056b\u056f\u0561", en: "Combinatorics", ru: "\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440\u0438\u043a\u0430" },
    topic_conditional: { hy: "\u054a\u0561\u0575\u0574\u0561\u0576\u0561\u056f\u0561\u0576 \u0570\u0561\u057e\u0561\u0576\u0561\u056f\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576", en: "Conditional Probability", ru: "\u0423\u0441\u043b\u043e\u0432\u043d\u0430\u044f \u0432\u0435\u0440\u043e\u044f\u0442\u053d\u043e\u0441\u0442\u044c" },
    topic_bayes: { hy: "\u0532\u0561\u0575\u0565\u057d\u056b \u0569\u0565\u0578\u0580\u0565\u0574", en: "Bayes' Theorem", ru: "\u0422\u0435\u043e\u0440\u0435\u043c\u0430 \u0411\u0430\u0439\u0435\u0441\u0430" },
    topic_distributions: { hy: "\u0532\u0561\u0577\u056d\u0578\u0582\u0574\u0576\u0565\u0580", en: "Distributions", ru: "\u0420\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f" },
    topic_rv: { hy: "\u054a\u0561\u057f\u0561\u0570\u0561\u056f\u0561\u0576 \u0574\u0565\u056e\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580", en: "Random Variables", ru: "\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0432\u0435\u043b\u0438\u0447\u0438\u043d\u044b" },
  },

  /* ===================== THEORY CONTENT (ENCYCLOPEDIA) ===================== */
  theory: [
    {
      title: { hy: "1. Ներածություն և Հիմնականներ", en: "1. Basic Concepts", ru: "1. Основные понятия" },
      subsections: [
        {
          id: "theory-events",
          title: { hy: "Պատահական իրադարձություններ", en: "Random Events", ru: "Случайные события" },
          content: {
            hy: "<p><strong>Պատահական իրադարձություն</strong> է կոչվում այն իրադարձությունը, որը փորձի արդյունքում կարող է տեղի ունենալ կամ չունենալ:</p><p>Իրադարձությունները նշանակում են լատիներեն մեծատառերով՝ A, B, C և այլն:</p><ul><li><strong>Հավաստի իրադարձություն ($\\Omega$):</strong> Միշտ տեղի է ունենում (հավանականությունը = 1):</li><li><strong>Անհնար իրադարձություն ($\\emptyset$):</strong> Երբեք տեղի չի ունենում (հավանականությունը = 0):</li><li><strong>Տարրական ելքեր:</strong> Փորձի հնարավոր պարզագույն, իրար բացառող արդյունքները:</li></ul>",
            en: "<p>A <strong>random event</strong> is an outcome that may or may not occur.</p><ul><li><strong>Certain Event ($\\Omega$):</strong> Prob = 1.</li><li><strong>Impossible Event ($\\emptyset$):</strong> Prob = 0.</li></ul>",
            ru: "<p><strong>Случайное событие</strong> — исход, который может произойти или нет.</p>"
          }
        },
        {
          id: "theory-classical-prob",
          title: { hy: "Հավանականության դասական սահմանում", en: "Classical Definition", ru: "Классическое определение" },
          content: {
            hy: "<p>Եթե փորձի բոլոր $n$ ելքերը <strong>հավասարահնարավոր</strong> են, ապա $A$ իրադարձության հավանականությունը որոշվում է հետևյալ բանաձևով՝</p>$$P(A) = \\frac{m}{n}$$<p>որտեղ $m$-ը $A$ իրադարձությանը նպաստող ելքերի քանակն է, իսկ $n$-ը՝ բոլոր հնարավոր ելքերի քանակը:</p><p><strong>Օրինակ՝</strong> Զառը նետելիս կենտ թիվ բացվելու հավանականությունը՝ $m=3$ ({1,3,5}), $n=6$, հետևաբար $P=3/6=0.5$:</p>",
            en: "<p>If all $n$ outcomes are equally likely, the probability of event $A$ is:</p>$$P(A) = \\frac{m}{n}$$",
            ru: "<p>Если все $n$ исходов равновероятны, то вероятность события $A$ равна:</p>$$P(A) = \\frac{m}{n}$$"
          }
        },
        {
          id: "theory-geometric-prob",
          title: { hy: "Երկրաչափական հավանականություն", en: "Geometric Probability", ru: "Геометрическая вероятность" },
          content: {
            hy: "<p>Երբ փորձի ելքերը անվերջ են և լրացնում են որոշակի երկրաչափական տիրույթ (հատված, մակերես, ծավալ), կիրառվում է երկրաչափական սահմանումը՝</p>$$P(A) = \\frac{\\text{mes}(A)}{\\text{mes}(\\Omega)}$$<p>որտեղ $\\text{mes}$-ը (measure) չափն է (երկարություն, մակերես կամ ծավալ):</p><p><strong>Կիրառություն՝</strong> Բյուֆոնի ասեղի խնդիրը, հանդիպման խնդիրը:</p>",
            en: "<p>Used when outcomes form a continuous geometric region.</p>$$P(A) = \\frac{\\text{measure}(A)}{\\text{measure}(\\Omega)}$$",
            ru: "<p>Используется, когда исходы заполняют непрерывную область.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "2. Կոմբինատորիկայի տարրեր", en: "2. Combinatorics", ru: "2. Элементы комбинаторики" },
      subsections: [
        {
          id: "theory-permutations",
          title: { hy: "Տեղափոխություններ (Permutations)", en: "Permutations", ru: "Перестановки" },
          content: {
            hy: "<p><strong>Տեղափոխություններ</strong> են կոչվում այն միացությունները, որոնք կազմված են $n$ տարբեր տարրերից և տարբերվում են միայն տարրերի դասավորությամբ:</p>$$P_n = n! = 1 \\cdot 2 \\cdot ... \\cdot n$$<p>Օրինակ՝ 3 տարբեր գիրք դարակում կարելի է դասավորել $3! = 6$ եղանակով:</p>",
            en: "<p>Arrangements of $n$ distinct items where order matters.</p>$$P_n = n!$$",
            ru: "<p>Упорядоченные наборы из $n$ элементов.</p>$$P_n = n!$$"
          }
        },
        {
          id: "theory-combinations",
          title: { hy: "Զուգորդություններ (Combinations)", en: "Combinations", ru: "Сочетания" },
          content: {
            hy: "<p><strong>Զուգորդություններ</strong> են կոչվում այն միացությունները, որոնք պարունակում են $k$ տարր՝ ընտրված $n$ հնարավորից, և տարբերվում են միայն կազմով (հերթականությունը կարևոր չէ):</p>$$C_n^k = \\frac{n!}{k!(n-k)!}$$<p>Օրինակ՝ 4 հոգուց 2-ին ընտրելու եղանակները՝ $C_4^2 = \\frac{4!}{2!2!} = 6$:</p>",
            en: "<p>Selections of $k$ items from $n$ where order doesn't matter.</p>$$C_n^k = \\frac{n!}{k!(n-k)!}$$",
            ru: "<p>Выбор $k$ элементов из $n$ без учета порядка.</p>$$C_n^k = \\frac{n!}{k!(n-k)!}$$"
          }
        }
      ]
    },
    {
      title: { hy: "3. Հիմնական թեորեմներ", en: "3. Main Theorems", ru: "3. Основные теоремы" },
      subsections: [
        {
          id: "theory-addition",
          title: { hy: "Գումարման և Բազմապատկման", en: "Addition & Multiplication", ru: "Сложение и Умножение" },
          content: {
            hy: "<p><strong>Գումարման թեորեմ՝</strong> Եթե A և B իրադարձությունները անհամատեղելի են (չեն կարող միաժամանակ տեղի ունենալ). $$P(A+B) = P(A) + P(B)$$ Եթե համատեղելի են. $$P(A+B) = P(A) + P(B) - P(AB)$$</p><p><strong>Բազմապատկման թեորեմ՝</strong> $$P(AB) = P(A) \\cdot P(B|A)$$ որտեղ $P(B|A)$-ն B-ի պայմանական հավանականությունն է՝ A-ի տեղի ունենալու դեպքում:</p>",
            en: "<p><strong>Addition:</strong> $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$</p><p><strong>Multiplication:</strong> $$P(A \\cap B) = P(A) \\cdot P(B|A)$$</p>",
            ru: "<p>Теоремы сложения и умножения вероятностей.</p>"
          }
        },
        {
          id: "theory-conditional-prob",
          title: { hy: "Պայմանական հավանականություն", en: "Conditional Probability", ru: "Условная вероятность" },
          content: {
            hy: "<p>Հավանականությունը, որ տեղի կունենա A իրադարձությունը, պայմանով, որ B-ն արդեն տեղի է ունեցել:</p>$$P(A|B) = \\frac{P(AB)}{P(B)}$$",
            en: "<p>Probability of A given B occurred.</p>$$P(A|B) = \\frac{P(AB)}{P(B)}$$",
            ru: "<p>Вероятность события A при условии B.</p>"
          }
        },
        {
          id: "theory-bayes",
          title: { hy: "Լրիվ հավանականություն և Բայես", en: "Total Prob & Bayes", ru: "Полная вероятность и Байес" },
          content: {
            hy: "<p><strong>Լրիվ հավանականության բանաձև՝</strong> $$P(A) = \\sum P(H_i) \\cdot P(A|H_i)$$</p><p><strong>Բայեսի բանաձև՝</strong> թույլ է տալիս «շրջել» պայմանականությունը և գնահատել հիպոթեզները:</p>$$P(H_i|A) = \\frac{P(A|H_i)P(H_i)}{\\sum P(A|H_j)P(H_j)}$$",
            en: "<p><strong>Bayes' Theorem</strong> updates hypothesis probability given evidence.</p>$$P(H|E) = \\frac{P(E|H)P(H)}{P(E)}$$",
            ru: "<p>Формула полной вероятности и теорема Байеса.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "4. Պատահական մեծություններ", en: "4. Random Variables", ru: "4. Случайные величины" },
      subsections: [
        {
          id: "theory-rv-props",
          title: { hy: "Մաթ. սպասում և Դիսպերսիա", en: "Expectation & Variance", ru: "Мат. ожидание и Дисперсия" },
          content: {
            hy: "<p><strong>Մաթեմատիկական սպասում ($E[X]$)`</strong> Պատահական մեծության կշռված միջին արժեքը:</p>$$E[X] = \\sum x_i p_i$$<p><strong>Դիսպերսիա ($Var(X)$)`</strong> Ցույց է տալիս, թե որքանով են արժեքները ցրված միջինի շուրջը:</p>$$Var(X) = E[X^2] - (E[X])^2$$",
            en: "<p><strong>Expected Value:</strong> Mean outcome.</p>$$E[X] = \\sum x_i p_i$$",
            ru: "<p>Математическое ожидание и дисперсия.</p>"
          }
        },
        {
          id: "theory-bernoulli",
          title: { hy: "Բեռնուլիի սխեմա (Բինոմալ)", en: "Bernoulli Scheme", ru: "Схема Бернулли" },
          content: {
            hy: "<p>Եթե կատարվում է $n$ անկախ փորձ, և յուրաքանչյուրում հաջողության հավանականությունը $p$ է ($q=1-p$), ապա ճիշտ $k$ հաջողություն ունենալու հավանականությունը՝</p>$$P_n(k) = C_n^k p^k q^{n-k}$$",
            en: "<p>Probability of exactly $k$ successes in $n$ trials:</p>$$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}$$",
            ru: "<p>Биномиальное распределение.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "5. Բաշխման օրենքներ", en: "5. Distribution Laws", ru: "5. Заկоны распределения" },
      subsections: [
        {
          id: "theory-poisson",
          title: { hy: "Պուասոնի բաշխում", en: "Poisson Distribution", ru: "Распределение Пуассона" },
          content: {
            hy: "<p><strong>Պուասոնի բաշխումը</strong> կիրառվում է հազվադեպ իրադարձությունների համար, երբ ն մեծ է, p փոքր է, իսկ $\\lambda = np$ սահմանաֆակված է:</p>$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$<p><strong>Կիրառություններ՝</strong> Հեռախոսազանգերի քանակը, սարքավորումների քանակը որոշակի ժամանակահատվածում:</p>",
            en: "<p><strong>Poisson Distribution</strong> is used when n is large and p is small. \\(\\lambda = np\\).</p>$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$",
            ru: "<p><strong>Распределение Пуассона</strong> — при большом n и малом p.</p>$$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$"
          }
        },
        {
          id: "theory-normal",
          title: { hy: "Նորմալ (Գաուսի) բաշխում", en: "Normal (Gaussian) Distribution", ru: "Нормальное распределение" },
          content: {
            hy: "<p><strong>Նորմալ բաշխումը</strong> (Զանգակաձև կոր) ամենակարևորն է հավանականությունների տեսության մեջ:</p>$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$<p>Որտեղ $\\mu$ միջինն է, $\\sigma$ ստանդարտ շեղումը:</p><p><strong>Կանոններ՝</strong></p><ul><li>68% տվյալների մեջ \\([\\mu - \\sigma, \\mu + \\sigma]\\) միջակայքում</li><li>95% տվյալների մեջ \\([\\mu - 2\\sigma, \\mu + 2\\sigma]\\) միջակայքում</li><li>99.7% տվյալների մեջ \\([\\mu - 3\\sigma, \\mu + 3\\sigma]\\) միջակայքում</li></ul>",
            en: "<p><strong>Normal Distribution</strong> (Bell Curve) is foundational in probability theory.</p>$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$<p><strong>68-95-99.7 Rule:</strong></p><ul><li>68% within 1σ</li><li>95% within 2σ</li><li>99.7% within 3σ</li></ul>",
            ru: "<p><strong>Нормальное распределение</strong> (Колоколообразная кривая).</p>$$f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$$"
          }
        },
        {
          id: "theory-exponential",
          title: { hy: "Էքսպոնենցիալ բաշխում", en: "Exponential Distribution", ru: "Экспоненциальное распр." },
          content: {
            hy: "<p><strong>Էքսպոնենցիալ բաշխումը</strong> նկարագրում է իրադարձությունների միջև անցած ժամանակը:</p>$$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0$$<p>$E[X] = 1/\\lambda$, $Var(X) = 1/\\lambda^2$</p>",
            en: "<p><strong>Exponential Distribution</strong> models time between events.</p>$$f(x) = \\lambda e^{-\\lambda x}, \\quad x \\geq 0$$",
            ru: "<p><strong>Экспоненциальное</strong> — моделирует время между событиями.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "6. Սահմանային թեորեմներ", en: "6. Limit Theorems", ru: "6. Предельные теоремы" },
      subsections: [
        {
          id: "theory-lln",
          title: { hy: "Մեծ թվերի օրենքը", en: "Law of Large Numbers", ru: "Закон больших чисел" },
          content: {
            hy: "<p><strong>Մեծ թվերի օրենքը</strong> պնդում է, որ փորձերի քանակի մեծանալով հարաբերական հաճախականությունը մոտենում է տեսական հավանականությանը:</p>$$\\bar{X}_n \\xrightarrow{P} \\mu \\quad \\text{as } n \\to \\infty$$<p>Սա նշանակում է, որ եթե ծաղկոձը նետենք 1000 անգամ, զինանշանի հարաբերական հաճախականությունը կմոտենա 0.5-ին:</p>",
            en: "<p><strong>Law of Large Numbers:</strong> As the number of trials increases, the relative frequency converges to the true probability.</p>$$\\bar{X}_n \\xrightarrow{P} \\mu \\quad \\text{as } n \\to \\infty$$",
            ru: "<p><strong>Закон больших чисел:</strong> С увеличением числа испытаний частота стремится к вероятности.</p>"
          }
        },
        {
          id: "theory-clt",
          title: { hy: "Կենտրոնական սահմանային թեորեմ", en: "Central Limit Theorem", ru: "ЦПТ" },
          content: {
            hy: "<p><strong>Կենտրոնական սահմանային թեորեմը (CLT)</strong> պնդում է, որ մեծ թվով անկախ (և միանման բաշխված) պատահական մեծությունների գումարը ձգտում է <strong>նորմալ բաշխման</strong> (Գաուսյան), անկախ դրանց սկզբնական բաշխումից:</p><p>Սա բացատրում է, թե ինչու է բնության մեջ այդքան հաճախ հանդիպում «Զանգակաձև կորը» (Bell Curve): Գալտոնի տախտակը (տե՝ս Սիմուլյացիաներ էջը) դրա վառ ապացույցն է:</p>",
            en: "<p>The sum of many independent random variables converges to a <strong>Normal Distribution</strong>.</p><p>This is why the 'Bell Curve' appears frequently in nature. The Galton Board (see Simulations page) is a vivid demonstration.</p>",
            ru: "<p>Сумма множества независимых величин стремится к <strong>Нормальному распределению</strong>.</p>"
          }
        }
      ]
    }
  ],

  /* ===================== PROBLEMS Book (Static + Dynamic System) ===================== */

  // 1. Static base problems (Classical favorites)
  problems: [
    /* ---- Beginner ---- */
    {
      id: 101,
      difficulty: "beginner",
      question: { hy: "Նետում ենք զառ: Ինչի՞ է հավասար կենտ թիվ բացվելու հավանականությունը:", en: "A die is rolled. What is the probability of getting an odd number?", ru: "Бросают кубик. Какова вероятность выпадения нечетного числа?" },
      answer: "0.5",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "n=6, m={1,3,5}=3", en: "n=6, m=3", ru: "n=6, m=3" }
    },
    {
      id: 102,
      difficulty: "beginner",
      question: { hy: "2 մետաղադրամ նետելիս, որքա՞ն է հավանականությունը, որ երկուսն էլ «Զինանշան» կլինեն:", en: "Flip 2 coins. Prob of 2 Heads?", ru: "2 монеты. Вероятность 2-х орлов?" },
      answer: "0.25",
      related_theory_id: "theory-addition", // Changed from theory-conditional-prob
      related_theory_hint: { hy: "P(A·B) = P(A)·P(B) = 0.5·0.5", en: "P(A∩B) = P(A)·P(B) = 0.5×0.5", ru: "P(A∩B) = P(A)·P(B) = 0.5×0.5" }
    },
    {
      id: 105,
      difficulty: "beginner",
      question: { hy: "Գտեք 6! (6-ի ֆակտորիալը):", en: "Calculate 6!", ru: "Вычислите 6!" },
      answer: "720",
      related_theory_id: "theory-permutations",
      related_theory_hint: { hy: "n! = 1·2·3·...·n → 6! = 720", en: "n! = 1·2·3·...·n → 6! = 720", ru: "n! = 1·2·3·...·n → 6! = 720" }
    },

    /* ---- Intermediate ---- */
    {
      id: 201,
      difficulty: "intermediate",
      question: { hy: "Արկղում կա 5 սպիտակ և 4 սև գնդիկ: Հանում են 2 գնդիկ: Որքա՞ն է հավանականությունը, որ երկուսն էլ սպիտակ են:", en: "Urn: 5W, 4B. Draw 2. Prob both White?", ru: "Урна: 5Б, 4Ч. Берем 2. Вероятность 2-х белых?" },
      answer: "0.2778",
      related_theory_id: "theory-combinations",
      related_theory_hint: { hy: "C(5,2) / C(9,2)", en: "C(5,2) / C(9,2)", ru: "C(5,2) / C(9,2)" }
    },
    {
      id: 202,
      difficulty: "intermediate",
      question: { hy: "3 կրակոցից (p=0.4) գոնե մեկ անգամ կպնելու հավանականությունը:", en: "3 shots (p=0.4). Prob of at least 1 hit?", ru: "3 выстрела (p=0.4). Хотя бы 1 попадание?" },
      answer: "0.784",
      related_theory_id: "theory-bernoulli",
      related_theory_hint: { hy: "1 - P(ոչ մի)", en: "1 - P(none)", ru: "1 - P(ни одного)" }
    },

    /* ---- Advanced ---- */
    {
      id: 301,
      difficulty: "advanced",
      question: { hy: "X ~ N(0, 1): Գտնել P(|X| < 2) (մոտավոր, 2 նիշ):", en: "X ~ N(0,1). Find P(|X| < 2).", ru: "X ~ N(0,1). Найти P(|X| < 2)." },
      answer: "0.95",
      related_theory_id: "theory-normal", // Changed from theory-rv-props
      related_theory_hint: { hy: "68-95-99.7 կանոն: 2σ միջակայք ≈ 95%", en: "68-95-99.7 Rule: within 2σ ≈ 95%", ru: "Правило 68-95-99.7: в пределах 2σ ≈ 95%" }
    },
    {
      id: 305,
      difficulty: "advanced",
      question: { hy: "Բայեսի խնդիր: հիվանդության հաճախականությունը 1% է: Թեստի ճշտությունը՝ 99% (և՛ դրական, և՛ բացասական): Թեստը դրական է: Հավանականությունը, որ մարդը հիվանդ է (xxxx / 10000)?", en: "Prevalence 1%. Test acc 99%. Test Positive. Prob diseased?", ru: "Частота 1%. Тест 99%. Плюс. Болен?" },
      answer: "0.5",
      related_theory_id: "theory-bayes",
      related_theory_hint: { hy: "0.01*0.99 / (0.01*0.99 + 0.99*0.01) = 0.5", en: "Standard Bayes trap.", ru: "Ловушка Байеса." }
    },

    /* ---- Olympic ---- */
    {
      id: 401,
      difficulty: "olympic",
      question: { hy: "Ընտրեք պատահական լար շրջանագծի վրա: Որքա՞ն է հավանականությունը, որ այն մեծ է շրջանագծին ներգծած եռանկյունու կողմից (Բերտրայի պարադոքս - տարբերակ 1):", en: "Bertrand Paradox (chord > triangle side). Solution 1.", ru: "Парадокс Бертрана (хорда > стороны)." },
      answer: "0.3333",
      related_theory_id: "theory-geometric-prob",
      related_theory_hint: { hy: "Երկրաչափական մոտեցում: 1/3", en: "Equilateral inscribed triangle → chord must span > 120°, giving P = 1/3", ru: "Равносторонний вписанный → хорда > 120° → P = 1/3" }
    }
  ],

  /* 
   * DYNAMIC PROBLEM GENERATOR
   */
  problemTemplates: [
    // Template 1: Classical Probability
    {
      topic: "basic",
      difficulty: "beginner",
      theoryId: "theory-classical-prob",
      generate: () => {
        const red = Math.floor(Math.random() * 5) + 3;
        const blue = Math.floor(Math.random() * 5) + 3;
        const total = red + blue;
        return {
          question: {
            hy: `Արկղում կա ${red} կարմիր և ${blue} կապույտ գնդակ: Պատահական հանում են մեկը: Որքան է կարմիր լինելու հավանականությունը (կոտորակով, օր.՝ 3/${total}):`,
            en: `Box has ${red} red and ${blue} blue balls. Draw one. Prob of red (e.g. 3/${total})?`,
            ru: `В урне ${red} кр. и ${blue} син. шаров. Один достали. Вероятность красного (дробь)?`
          },
          answer: `${red}/${total}`
        };
      }
    },
    // Template 2: Combinatorics
    {
      topic: "combinatorics",
      difficulty: "intermediate",
      theoryId: "theory-combinations",
      generate: () => {
        const n = Math.floor(Math.random() * 4) + 6;
        const k = Math.floor(Math.random() * 2) + 2;
        const fact = function f(num) { return num <= 1 ? 1 : num * f(num - 1); };
        const ans = fact(n) / (fact(k) * fact(n - k));
        return {
          question: {
            hy: `${n} աշակերտից քանի՞ եղանակով կարելի է ընտրել ${k} հերթապահ:`,
            en: `How many ways to choose ${k} monitors from ${n} students?`,
            ru: `Сколькими способами выбрать ${k} дежурных из ${n}?`
          },
          answer: String(ans)
        };
      }
    },
    // Template 3: Bernoulli
    {
      topic: "distributions",
      difficulty: "intermediate",
      theoryId: "theory-bernoulli",
      generate: () => {
        const n = Math.floor(Math.random() * 3) + 3;
        const target = Math.floor(Math.random() * (n - 1)) + 1;
        const fact = function f(num) { return num <= 1 ? 1 : num * f(num - 1); };
        const comb = (N, K) => fact(N) / (fact(K) * fact(N - K));
        const prob = comb(n, target) * Math.pow(0.5, n);

        return {
          question: {
            hy: `Մետաղադրամը նետում են ${n} անգամ: Գտնել ճիշտ ${target} անգամ «Զինանշան» ընկնելու հավանականությունը (տասնորդական թիվ):`,
            en: `Flip coin ${n} times. Prob of exactly ${target} heads (decimal)?`,
            ru: `${n} монет. Вер. ровно ${target} орлов (число)?`
          },
          answer: prob.toFixed(4)
        };
      }
    },
    // Template 4: Dice Sum
    {
      topic: "basic",
      difficulty: "intermediate",
      theoryId: "theory-classical-prob",
      generate: () => {
        const sum = Math.floor(Math.random() * 5) + 7;
        let fav = 0;
        for (let i = 1; i <= 6; i++) {
          for (let j = 1; j <= 6; j++) {
            if (i + j === sum) fav++;
          }
        }
        return {
          question: {
            hy: `Նետում են 2 զառ: Հավանականությունը, որ գումարը կլինի ${sum}:`,
            en: `Roll 2 dice. Prob that sum is ${sum}:`,
            ru: `2 кубика. Вер. суммы ${sum}:`
          },
          answer: `${fav}/36`
        };
      }
    },
    // Template 5: Olympic/Geometric (New)
    {
      topic: "distributions",
      difficulty: "olympic",
      theoryId: "theory-geometric-prob",
      generate: () => {
        const L = Math.floor(Math.random() * 5) * 10 + 10; // 10, 20...
        const l = L / 2;
        return {
          question: {
            hy: `Բյուֆոնի խնդիր: Գծերի հեռավորությունը ${L} սմ է, ասեղի երկարությունը՝ ${l} սմ: Գտնել հատման հավանականությունը (մոտարկել $\\pi \\approx 3.14$):`,
            en: `Buffon: Line spacing ${L}, needle ${l}. Prob of crossing (use pi=3.14)?`,
            ru: `Бюффон: Шаг ${L}, игла ${l}. Вер. пересечения (pi=3.14)?`
          },
          answer: ((2 * l) / (3.14159 * L)).toFixed(3)
        };
      }
    }
  ],

  // Helper to generate a fresh batch of problems, FILTERED
  generateBatch: function (count, filters = {}) {
    // 1. Filter templates
    let candidates = this.problemTemplates;

    if (filters.topic && filters.topic !== 'all') {
      // Simple topic matching (substring or exact)
      if (filters.topic === 'combinatorics') candidates = candidates.filter(t => t.topic === 'combinatorics');
      else if (filters.topic === 'basic') candidates = candidates.filter(t => t.topic === 'basic');
      else if (filters.topic === 'distributions') candidates = candidates.filter(t => t.topic === 'distributions');
    }

    if (filters.difficulty && filters.difficulty !== 'all') {
      candidates = candidates.filter(t => t.difficulty === filters.difficulty);
    }

    if (candidates.length === 0) candidates = this.problemTemplates; // Fallback if too strict

    // Hint templates per topic for dynamic problems
    const hintMap = {
      'theory-classical-prob': { hy: "P(A) = m/n \u2014 \u0576\u057a\u0561\u057d\u057f\u0561\u057e\u0578\u0580 / \u0562\u0578\u056c\u0578\u0580 \u0565\u056c\u0584\u0565\u0580", en: "P(A) = m/n \u2014 favorable / total outcomes", ru: "P(A) = m/n \u2014 \u0431\u043b\u0430\u0433\u043e\u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0435 / \u0432\u0441\u0435 \u0438\u0441\u0445\u043e\u0434\u044b" },
      'theory-combinations': { hy: "C(n,k) = n! / (k!(n-k)!)", en: "C(n,k) = n! / (k!(n-k)!)", ru: "C(n,k) = n! / (k!(n-k)!)" },
      'theory-bernoulli': { hy: "P_n(k) = C(n,k) \u00b7 p^k \u00b7 q^(n-k)", en: "P_n(k) = C(n,k) \u00b7 p^k \u00b7 q^(n-k)", ru: "P_n(k) = C(n,k) \u00b7 p^k \u00b7 q^(n-k)" },
      'theory-geometric-prob': { hy: "P = S_A / S_\u03a9 (\u0565\u0580\u056f\u0580\u0561\u0579\u0561\u0583\u0561\u056f\u0561\u0576 \u0570\u0561\u057e\u0561\u0576\u0561\u056f\u0561\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576)", en: "P = favorable area / total area", ru: "P = S_\u0431\u043b\u0430\u0433 / S_\u043e\u0431\u0449 (\u0433\u0435\u043e\u043c. \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u044c)" }
    };

    const newProbs = [];
    for (let i = 0; i < count; i++) {
      const tmpl = candidates[Math.floor(Math.random() * candidates.length)];
      const p = tmpl.generate();
      newProbs.push({
        id: 1000 + i + Math.floor(Math.random() * 10000),
        difficulty: tmpl.difficulty,
        question: p.question,
        answer: p.answer,
        related_theory_id: tmpl.theoryId,
        related_theory_hint: hintMap[tmpl.theoryId] || null,
        isDynamic: true
      });
    }
    return newProbs;
  }
};
