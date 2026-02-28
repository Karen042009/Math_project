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
    nav_simulations: { hy: "Սիմուլյացիաներ", en: "Simulations", ru: "Симуляторы" },
    btn_reset_progress: { hy: "Ջնջել առաջադիմությունը", en: "Reset Progress", ru: "Сбросить прогресс" },
    btn_clear_session: { hy: "Մաքրել սեսիան", en: "Clear Session", ru: "Очистить сессию" },
    btn_clear: { hy: "Մաքրել", en: "Clear", ru: "Очистить" },
    sidebar_title: { hy: "Բովանդակություն", en: "Contents", ru: "Содержание" },

    filter_all: { hy: "Բոլորը", en: "All", ru: "Все" },
    filter_beginner: { hy: "Սկսնակ", en: "Beginner", ru: "Начинающий" },
    filter_intermediate: { hy: "Միջին", en: "Intermediate", ru: "Средний" },
    filter_advanced: { hy: "Բարդ", en: "Advanced", ru: "Продвинутый" },
    filter_olympic: { hy: "Օլիմպիական", en: "Olympic", ru: "Олимпийский" },
    filter_solved: { hy: "Լուծվածներ", en: "Solved", ru: "Решенные" },

    btn_check: { hy: "Ստուգել", en: "Check", ru: "Проверить" },
    btn_hint: { hy: "Հուշում", en: "Hint", ru: "Подсказка" },
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
    btn_ai_guide: { hy: "Լսել AI Ուղեցույցին", en: "Listen to AI Guide", ru: "Слушать AI Гида" },

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
    sim_dice_desc: { hy: "<strong>Զառի նետում:</strong> Ուսումնասիրեք մեծ թվերի օրենքը և տեսեք, թե ինչպես է միջինը ձգտում 3.5-ի:", en: "<strong>Dice Throw:</strong> Explore the Law of Large Numbers and see how the mean converges to 3.5.", ru: "<strong>Бросок кубика:</strong> Изучите закон больших чисел и посмотрите, как среднее стремится к 3.5." },
    sim_dice_desc_short: { hy: "Մեծ թվերի օրենքի ցուցադրում", en: "Demonstrating the Law of Large Numbers", ru: "Демонстрация закона больших чисел" },
    sim_buffon_desc: { hy: "<strong>Բյուֆոնի ասեղը:</strong> Մոնտի Կառլոյի մեթոդի դասական օրինակ՝ π թվի մոտարկումը պատահական նետումների միջոցով:", en: "<strong>Buffon's Needle:</strong> A classic Monte Carlo example: approximating π through random needle tosses.", ru: "<strong>Игла Бюффона:</strong> Классический пример метода Монте-Карло: приближение числа π через случайные броски." },

    // Practice & AI
    ai_badge_text: { hy: "Սխալների վերլուծության համակարգ՝ կապ տեսության հետ", en: "Smart feedback system — links wrong answers to theory", ru: "Система анализа ошибок — связь с теорией" },
    section_ai_gen: { hy: "AI Խորացված Ուսուցիչ", en: "AI Advanced Tutor", ru: "AI Продвинутый Тьютор" },
    btn_generate_problem: { hy: "Ստեղծել նոր խնդիր", en: "Generate with AI", ru: "Создать через AI" },
    ai_workspace_title: { hy: "AI աշխատանքային տիրույթ", en: "AI Workspace", ru: "Рабочая область AI" },
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
    intro_sims_extended: {
      hy: "Այստեղ վիզուալ կերպով ցուցադրվում է հավանականությունների տեսության օրենքների կիրառությունը գործնականում՝ Մոնտե Կառլոյի մեթոդով։ Այս բաժնի նպատակն է ինտերակտիվ սիմուլյացիաների և հազարավոր անգամ կրկնվող պատահական երևույթների վերլուծության միջոցով ձեզ սովորեցնել բարդ մաթեմատիկական հասկացություններ՝ ինչպիսիք են նորմալ բաշխումը, անորոշության պայմաններում ճշգրիտ ընտրության կայացումը և երկրաչափական հավանականությունը։",
      en: "Here, the laws of probability theory are visually demonstrated in practice using the Monte Carlo method. The purpose of this section is to teach you complex mathematical concepts—such as the normal distribution, decision-making under uncertainty, and geometric probability—through interactive simulations and the analysis of thousands of random events.",
      ru: "Здесь визуально демонстрируется применение законов теории вероятностей на практике с помощью метода Монте-Карло. Цель этого раздела — через интерактивные симуляции и анализ тысяч случайных событий помочь вам освоить такие сложные математические концепции, как нормальное распределение, парадоксы выбора и геометрическая вероятность."
    },
    galton_rows_label: { hy: "Շարքերի քանակը", en: "Number of Rows", ru: "Количество рядов" },
    galton_speed_label: { hy: "Արագություն", en: "Simulation Speed", ru: "Скорость симуляции" },
    galton_bounce_label: { hy: "Առաձգականություն", en: "Elasticity (Bounce)", ru: "Упругость" },
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
    btn_roll_1: { hy: "Նետել զառը", en: "Roll Dice", ru: "Бросить кубик" },
    btn_roll_10: { hy: "Նետել 10 անգամ", en: "Roll 10 Times", ru: "Бросить 10 раз" },
    btn_roll_100: { hy: "Նետել 100 անգամ", en: "Roll 100 Times", ru: "Бросить 100 раз" },
    stat_total_rolls: { hy: "Նետումների քանակը՝", en: "Total rolls:", ru: "Всего бросков:" },
    sim_dice_roll_lbl: { hy: "Նետել զառը", en: "Roll the Dice", ru: "Бросить кубик" },
    stat_frequency: { hy: "Հաճախականություն", en: "Frequency", ru: "Частота" },
    stat_variance: { hy: "Դիսպերսիա (Var):", en: "Variance (Var):", ru: "Дисперсия (Var):" },
    sim_dice_btn: { hy: "Զառ", en: "Dice", ru: "Кубик" },
    sim_dice_title: { hy: "Զառի Սիմուլյացիա", en: "Dice Simulation", ru: "Симуляция Кубика" },
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
    sim_galton_title: { hy: "Գալտոնի Տախտակ", en: "Galton Board", ru: "Доска Гальтона" },
    sim_galton_rows_lbl: { hy: "Տողեր (Զամբյուղներ)", en: "Rows (Bin Count)", ru: "Ряды (Корзины)" },
    sim_monty_title: { hy: "Մոնտի Հոլլի Խնդիր", en: "Monty Hall Problem", ru: "Парадокс Монти Холла" },
    sim_monty_desc: { hy: "Հավանականությունների խնդիր հեռուստախաղի հիման վրա", en: "A probability puzzle based on a game show", ru: "Вероятностная головоломка на основе телешоу" },
    sim_monty_autosim: { hy: "Ավտոմատ Սիմուլյացիա", en: "Auto-Simulate", ru: "Авто-Симуляция" },
    sim_buffon_title: { hy: "Բյուֆոնի Ասեղ", en: "Buffon's Needle", ru: "Игла Бюффона" },
    sim_buffon_desc: { hy: "π-ի մոտարկումը ասեղներ նետելով", en: "Estimating Pi (π) by dropping needles", ru: "Оценка числа Пи (π) бросанием игл" },
    sim_buffon_drop_lbl: { hy: "Նետել Ասեղներ", en: "Drop Needles", ru: "Бросать Иглы" },
    sim_monty_btn: { hy: "Մոնտի Հոլլ", en: "Monty Hall", ru: "Монти Холл" },
    sim_buffon_btn: { hy: "Բյուֆոնի ասեղ", en: "Buffon's Needle", ru: "Игла Бюффона" },
    sim_coin_btn: { hy: "Մետաղադրամ", en: "Coin Flip", ru: "Монетка" },
    sim_coin_title: { hy: "Մետաղադրամի Նետում", en: "Coin Flip", ru: "Бросок Монеты" },
    sim_coin_desc: { hy: "Ուսումնասիրեք մեծ թվերի օրենքը մետաղադրամի նետման միջոցով (Զինանշան կամ Թիվ):", en: "Explore the Law of Large Numbers through coin flips (Heads or Tails).", ru: "Изучайте закон больших чисел через броски монеты (Орел или Решка)." },
    stat_heads: { hy: "Զինանշան", en: "Heads", ru: "Орел" },
    stat_tails: { hy: "Թիվ", en: "Tails", ru: "Решка" },
    btn_flip_1: { hy: "Նետել 1", en: "Flip 1", ru: "Бросить 1" },
    btn_flip_10: { hy: "Նետել 10", en: "Flip 10", ru: "Бросить 10" },
    btn_flip_100: { hy: "Նետել 100", en: "Flip 100", ru: "Бросить 100" },
    btn_flip_1000: { hy: "Նետել 1000", en: "Flip 1k", ru: "Бросить 1k" },
    sim_coin_drop_lbl: { hy: "Նետել Մետաղադրամներ", en: "Drop Coins", ru: "Бросить Монеты" },

    /* ──── NOTIFICATIONS ──── */
    topic_basic: { hy: "Հիմնական հավանականություն", en: "Basic Probability", ru: "Основы вероятности" },
    topic_combinatorics: { hy: "Կոմբինատորիկա", en: "Combinatorics", ru: "Комбинаторика" },
    topic_conditional: { hy: "Պայմանական հավանականություն", en: "Conditional Probability", ru: "Условная вероятность" },
    topic_bayes: { hy: "Բայեսի թեորեմ", en: "Bayes' Theorem", ru: "Теорема Байеса" },
    topic_distributions: { hy: "Բաշխումներ", en: "Distributions", ru: "Распределения" },
    topic_rv: { hy: "Պատահական մեծություններ", en: "Random Variables", ru: "Случайные величины" },
  },

  /* ===================== THEORY CONTENT (ENCYCLOPEDIA) ===================== */
  theory: [
    {
      title: { hy: "0. Հավանականությունների տեսության պատմություն", en: "0. History of Probability", ru: "0. История теории вероятностей" },
      subsections: [
        {
          id: "history-origins",
          title: { hy: "Ծագումը և Պասկալ-Ֆերմա նամակագրությունը", en: "Origins & Pascal-Fermat Letters", ru: "Истоки и переписка Паскаля-Ферма" },
          content: {
            hy: "<p>Հավանականությունների տեսությունը սկսեց ձևավորվել 17-րդ դարի կեսերին։ Ամեն ինչ սկսվեց <strong>1654 թվականին</strong>, երբ Շևալյե դե Մերեն դիմեց <strong>Բլեզ Պասկալին</strong>՝ խնդրելով լուծել մոլախաղերի հետ կապված գլուխկոտրուկներ (օրինակ՝ ինչպես արդար բաժանել խաղադրույքը, եթե խաղն ընդհատվել է)։</p><p>Պասկալը սկսեց նամակագրություն <strong>Պիեռ Ֆերմայի</strong> հետ։ Այս նամակները համարվում են ժամանակակից հավանականությունների տեսության հիմնաքարը։ Նրանք լուծեցին «խաղադրույքների բաժանման» խնդիրը, որը մինչ այդ համարվում էր անլուծելի:</p>",
            en: "<p>Modern probability theory began in <strong>1654</strong> with the famous correspondence between <strong>Blaise Pascal</strong> and <strong>Pierre de Fermat</strong>. The catalyst was the Chevalier de Méré, a French nobleman and gambler, who posed two problems to Pascal: the 'Problem of Points' (how to fairly divide the stakes of an interrupted game) and a dice problem.</p><p>Pascal and Fermat exchanged a series of letters between July and October 1654, solving these problems using entirely different mathematical methods — Pascal with combinatorics and Fermat with enumeration. Their exchange is considered the founding moment of <strong>mathematical probability theory</strong>. Before this, probability was purely intuitive; after this, it became a rigorous discipline.</p>",
            ru: "<p>Теория вероятностей как математическая дисциплина возникла в <strong>1654 году</strong> из знаменитой переписки <strong>Блеза Паскаля</strong> и <strong>Пьера де Ферма</strong>. Поводом послужил шевалье де Мере — французский дворянин и азартный игрок, который обратился к Паскалю с двумя задачами: о разделе ставки в прерванной игре и о вероятности в игре в кости.</p><p>Паскаль и Ферма в серии писем решили эти задачи разными методами — Паскаль через комбинаторику, Ферма через перебор. Их переписка считается <strong>днём рождения математической теории вероятностей</strong>. До этого вероятность была лишь интуитивным понятием; после — стала строгой наукой.</p>"
          }
        },
        {
          id: "history-classic-era",
          title: { hy: "Դասական փուլ․ Հյույգենսից մինչև Լապլաս", en: "Classic Era: From Huygens to Laplace", ru: "Классическая эра: от Гюйгенса до Лапласа" },
          content: {
            hy: "<ul><li><strong>Քրիստիան Հյույգենս (1657)․</strong> Հրատարակեց «De ratiociniis in ludo aleae»՝ առաջին դասագիրքը, որտեղ ներմուծեց մաթեմատիկական սպասման գաղափարը։</li><li><strong>Յակոբ Բեռնուլի (1713)․</strong> «Ars Conjectandi»-ում ապացուցեց Մեծ թվերի օրենքի առաջին տարբերակը։</li><li><strong>Աբրահամ դե Մուավր (1718)․</strong> Հրատարակեց «The Doctrine of Chances»-ը և բացահայտեց Նորմալ կորի բանաձևը։</li><li><strong>Թոմաս Բայես (1763)․</strong> Ներմուծեց «հակադարձ հավանականության» գաղափարը, որն այսօր Բայեսյան վիճակագրության հիմքն է։</li><li><strong>Պիեռ-Սիմոն Լապլաս (1812)․</strong> Իր «Théorie Analytique»-ում հավանականությունը վերածեց հզոր մաթեմատիկական գործիքի՝ կիրառելով այն աստղագիտության և ժողովրդագրության մեջ։</li></ul>",
            en: "<ul><li><strong>Christiaan Huygens (1657):</strong> Published <em>De ratiociniis in ludo aleae</em> — the first probability textbook, where he introduced the concept of <strong>mathematical expectation</strong> (expected value).</li><li><strong>Jacob Bernoulli (1713):</strong> His posthumous masterwork <em>Ars Conjectandi</em> proved the first rigorous version of the <strong>Law of Large Numbers</strong> and introduced Bernoulli trials.</li><li><strong>Abraham de Moivre (1718):</strong> In <em>The Doctrine of Chances</em> he discovered the formula for the <strong>Normal Curve</strong> as an approximation to the binomial — a precursor to the Central Limit Theorem.</li><li><strong>Thomas Bayes (1763):</strong> His posthumously published essay introduced <strong>inverse probability</strong> — inferring causes from effects — now the foundation of Bayesian statistics.</li><li><strong>Pierre-Simon Laplace (1812):</strong> His <em>Théorie Analytique des Probabilités</em> unified all prior work and applied probability to astronomy, physics, and demographics, establishing the <strong>classical definition</strong> $P(A)=m/n$.</li></ul>",
            ru: "<ul><li><strong>Христиан Гюйгенс (1657):</strong> Написал первый учебник <em>De ratiociniis in ludo aleae</em>, введя понятие <strong>математического ожидания</strong>.</li><li><strong>Якоб Бернулли (1713):</strong> В посмертном труде <em>Ars Conjectandi</em> доказал первый строгий вариант <strong>Закона больших чисел</strong> и ввёл испытания Бернулли.</li><li><strong>Абрам де Муавр (1718):</strong> В <em>The Doctrine of Chances</em> открыл формулу <strong>нормальной кривой</strong> как приближение к биному — предтеча ЦПТ.</li><li><strong>Томас Байес (1763):</strong> Его посмертно опубликованное эссе ввело <strong>обратную вероятность</strong> — вывод причин из следствий — основу байесовской статистики.</li><li><strong>Пьер-Симон Лаплас (1812):</strong> <em>Théorie Analytique des Probabilités</em> объединила все предыдущие работы, ввела <strong>классическое определение</strong> $P(A)=m/n$ и применила теорию к физике и демографии.</li></ul>"
          }
        },
        {
          id: "history-modern",
          title: { hy: "Աքսիոմատիկ և Վիճակագրական փուլ", en: "Axiomatic & Statistical Era", ru: "Аксиоматика и Статистика" },
          content: {
            hy: "<p>20-րդ դարում հավանականությունը դարձավ գիտության հիմնասյունը․</p><ul><li><strong>Անդրեյ Կոլմոգորով (1933)․</strong> Տվեց աքսիոմատիկ հիմքը՝ կապելով հավանականությունը բազմությունների և չափի տեսության հետ։</li><li><strong>Ռոնալդ Ֆիշեր․</strong> Ստեղծեց ժամանակակից վիճակագրության մեթոդները (Maximum Likelihood, ANOVA)։</li><li><strong>Կլոդ Շենոն․</strong> Կապեց հավանականությունը ինֆորմացիայի տեսության հետ։</li></ul>",
            en: "<p>In the 20th century, probability was finally placed on rigorous mathematical foundations:</p><ul><li><strong>Andrey Kolmogorov (1933):</strong> In <em>Grundbegriffe der Wahrscheinlichkeitsrechnung</em>, he established the <strong>axiomatic foundation</strong> of probability using measure theory, defining the probability space $(\\Omega, \\mathcal{F}, P)$. This is the standard used today.</li><li><strong>Ronald Fisher:</strong> Invented <strong>Maximum Likelihood Estimation</strong>, Analysis of Variance (ANOVA), and the design of experiments — transforming probability into modern statistics.</li><li><strong>Claude Shannon (1948):</strong> In his landmark paper, Shannon linked probability to <strong>Information Theory</strong>, defining entropy as $H = -\\sum p_i \\log p_i$, revolutionizing communications and computing.</li></ul>",
            ru: "<p>В XX веке теория вероятностей получила строгое аксиоматическое обоснование:</p><ul><li><strong>Андрей Колмогоров (1933):</strong> В книге <em>Grundbegriffe der Wahrscheinlichkeitsrechnung</em> заложил <strong>аксиоматическую основу</strong> теории вероятностей с помощью теории меры, определив вероятностное пространство $(\\Omega, \\mathcal{F}, P)$. Этот стандарт используется до сих пор.</li><li><strong>Рональд Фишер:</strong> Изобрёл <strong>метод максимального правдоподобия</strong>, дисперсионный анализ (ANOVA) и планирование экспериментов — преобразовав теорию вероятностей в современную математическую статистику.</li><li><strong>Клод Шеннон (1948):</strong> Связал вероятность с <strong>теорией информации</strong>, определив энтропию как $H = -\\sum p_i \\log p_i$, что произвело революцию в области связи и вычислительной техники.</li></ul>"
          }
        }
      ]
    },
    {
      title: { hy: "1. Ներածություն և Հիմնականներ", en: "1. Basic Concepts", ru: "1. Основные понятия" },
      subsections: [
        {
          id: "theory-intro",
          title: { hy: "Ինչ է հավանականությունների տեսությունը", en: "What is Probability Theory", ru: "Что такое теория вероятностей" },
          content: {
            hy: "<p><strong>Հավանականությունների տեսությունը</strong> մաթեմատիկայի այն բաժինն է, որը զբաղվում է <strong>պատահական երևույթների</strong> մոդելավորմամբ և վերլուծությամբ։ Այն ուսումնասիրում է այնպիսի երևույթներ, որոնց արդյունքները հնարավոր չէ կանխատեսել հաստատապես, բայց որոնք, այնուամենայնիվ, ենթարկվում են որոշակի օրինաչափությունների։</p><p>Այս տեսությունը հիմք է հանդիսանում վիճակագրության, ֆիզիկայի (մասնավորապես՝ քվանտային ֆիզիկայի), կենսաբանության, ֆինանսների, արհեստական ինտելեկտի և ճարտարագիտության բազմաթիվ ոլորտների համար։</p><p>Հիմնական գաղափարը <strong>պատահականությունն</strong> է, որը ոչ թե քաոս է, այլ կառուցվածքային անորոշություն, որը ենթարկվում է ճշգրիտ մաթեմատիկական օրենքների։ Հավանականությունների տեսությունը քանակականացնում է այս անորոշությունը՝ թույլ տալով մեզ կայացնել օպտիմալ որոշումներ նույնիսկ այն դեպքերում, երբ ամբողջական տեղեկատվություն չկա։</p><p><strong>Օրինակներ՝</strong></p><ul><li>Մետաղադրամ նետելիս «գիր» կամ «զին» ընկնելու հավանականությունը։</li><li>Զառ նետելիս որոշակի թիվ ստանալու հավանականությունը։</li><li>Վիճակախաղում շահելու հնարավորությունը։</li></ul>",
            en: "<p>Probability theory is the branch of mathematics that studies <strong>random phenomena</strong> — phenomena whose outcomes cannot be predicted with certainty. It provides the mathematical foundation for statistics, and is indispensable in quantum physics, genetics, finance, machine learning, and engineering.</p><p>The central concept is <strong>randomness</strong>: not chaos, but structured uncertainty that obeys precise mathematical laws. Probability theory quantifies this uncertainty, allowing us to make optimal decisions even when perfect information is unavailable.</p>",
            ru: "<p>Теория вероятностей — это раздел математики, изучающий <strong>случайные явления</strong> — явления, исходы которых нельзя предсказать заранее, но которые подчиняются строгим математическим закономерностям. Она служит фундаментом математической статистики и широко применяется в физике, биологии, финансах, машинном обучении и инженерии.</p><p>Ключевая идея: <strong>случайность — это не хаос</strong>, а структурированная неопределённость, которую можно описать точными законами. Теория вероятностей даёт инструменты для принятия оптимальных решений даже в условиях неполной информации.</p>"
          }
        },
        {
          id: "theory-interpretations",
          title: { hy: "Ինտերպրետացիաներ․ Ֆրեկվենտիստ vs Բայեսյան", en: "Interpretations: Frequentist vs Bayesian", ru: "Интерпретации: Частотник против Байеса" },
          content: {
            hy: "<p>Գոյություն ունի հավանականության երկու հիմնական հայացք․</p><ul><li><strong>Ֆրեկվենտիստական․</strong> Հավանականությունը իրադարձության հարաբերական հաճախականությունն է երկարաժամկետ փորձերի դեպքում (օր․՝ մետաղադրամի 10000 նետում)։</li><li><strong>Բայեսյան․</strong> Հավանականությունը «համոզմունքի աստիճանն է» կամ վստահությունը իրադարձության նկատմամբ, որը կարող է փոխվել նոր տվյալների ստացման դեպքում։</li></ul>",
            en: "<p>There are two main interpretations of probability:</p><ul><li><strong>Frequentist:</strong> Probability is the <em>long-run relative frequency</em> of an event. $P(H) = 0.5$ for a coin means that in 10,000 tosses, approximately 5,000 will be Heads. It is objective and verifiable, but cannot assign probabilities to one-time events.</li><li><strong>Bayesian:</strong> Probability is a <em>degree of belief</em> or confidence in an event. It can be updated as new evidence arrives, using Bayes' theorem: $P(H|E) \\propto P(E|H) \\cdot P(H)$. It is subjective but far more flexible and powerful for real-world inference.</li></ul><p>Modern science uses both approaches: frequentist for classical statistics, Bayesian for machine learning, medical diagnosis, and AI.</p>",
            ru: "<p>Существуют два основных подхода к интерпретации вероятности:</p><ul><li><strong>Частотный (фреквентистский):</strong> Вероятность — это <em>предельная относительная частота</em> события при многократном повторении опыта. Например, $P(H) = 0.5$ для монеты означает, что в 10 000 бросках примерно 5 000 выпадет орёл. Подход объективен, но не применим к единичным событиям.</li><li><strong>Байесовский:</strong> Вероятность — это <em>степень уверенности</em> наблюдателя в наступлении события. Она обновляется по мере поступления новых данных по теореме Байеса: $P(H|E) \\propto P(E|H) \\cdot P(H)$. Подход субъективен, но гибок и мощен для реальных задач.</li></ul><p>Современная наука сочетает оба подхода: частотный — в классической статистике, байесовский — в машинном обучении, медицинской диагностике и ИИ.</p>"
          }
        },
        {
          id: "theory-events-intuitive",
          title: { hy: "Պատահական իրադարձության գաղափարը", en: "Key Concept of Event", ru: "Понятие события" },
          content: {
            hy: "<p><strong>Պատահույթ</strong> (պատահական իրադարձություն) կոչվում է այնպիսի իրադարձություն, որը որոշակի պայմաններում կարող է տեղի ունենալ կամ տեղի չունենալ:</p><p><strong>Օրինակներ՝</strong></p><ul><li>Կրակելիս թիրախին դիպչելը:</li><li>Ֆուտբոլիստի հարվածից հետո գոլ լինելը:</li></ul><p>Եթե փորձառու որսորդը և սկսնակը կրակում են թիրախին, որսորդի դիպչելու հավանականությունն ավելի մեծ է: Սա նշանակում է, որ $P(A)$ թիվը միշտ պատկանում է $[0, 1]$ միջակայքին:</p>",
            en: "<p>A <strong>random event</strong> (or simply an <em>event</em>) is any outcome or set of outcomes of an experiment that may or may not occur. The probability $P(A)$ of event $A$ is always a number in the interval $[0, 1]$:</p><ul><li>$P(A) = 0$: the event is <strong>impossible</strong> (e.g., rolling a 7 on a standard die).</li><li>$P(A) = 1$: the event is <strong>certain</strong> (e.g., rolling a number between 1 and 6).</li><li>$0 < P(A) < 1$: the event is <strong>random</strong>.</li></ul><p><strong>Example:</strong> A skilled hunter hits a target with probability 0.95; a novice with probability 0.4. The higher the probability, the more reliably the event occurs in repeated trials.</p>",
            ru: "<p><strong>Случайное событие</strong> — это исход или множество исходов опыта, которые могут произойти или не произойти при данных условиях. Вероятность события $P(A)$ всегда лежит в промежутке $[0, 1]$:</p><ul><li>$P(A) = 0$: событие <strong>невозможно</strong> (например, выпадение 7 на кубике с гранями 1–6).</li><li>$P(A) = 1$: событие <strong>достоверно</strong> (например, выпадение числа от 1 до 6).</li><li>$0 < P(A) < 1$: событие <strong>случайно</strong>.</li></ul><p><strong>Пример:</strong> Опытный охотник поражает цель с вероятностью 0,95; новичок — с вероятностью 0,4. Чем выше вероятность, тем чаще событие происходит в длинной серии испытаний.</p>"
          }
        },
        {
          id: "theory-axioms",
          title: { hy: "Հավանականության Աքսիոմները", en: "Axioms of Probability", ru: "Аксиомы вероятности" },
          content: {
            hy: "<p>Կոլմոգորովի 3 հիմնական աքսիոմները․</p><ol><li><strong>Ոչ բացասականություն․</strong> $P(A) \\geq 0$ ցանկացած A-ի համար։</li><li><strong>Նորմավորում․</strong> $P(\\Omega) = 1$ (հավաստի իրադարձությունը)։</li><li><strong>Ադիտիվություն․</strong> Եթե A-ն և B-ն անհամատեղելի են, ապա $P(A \\cup B) = P(A) + P(B)$։</li></ol>",
            en: "<p><strong>Kolmogorov's 3 axioms</strong> (1933) form the foundation of all modern probability:</p><ol><li><strong>Non-negativity:</strong> $P(A) \\geq 0$ for any event $A$.</li><li><strong>Normalization:</strong> $P(\\Omega) = 1$ (the sample space is certain).</li><li><strong>Countable Additivity:</strong> For any sequence of <em>mutually disjoint</em> events $A_1, A_2, \\ldots$: $$P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)$$</li></ol><p>All other probability rules (complement, addition formula, etc.) are derived as <strong>theorems</strong> from these three axioms.</p>",
            ru: "<p><strong>Три аксиомы Колмогорова</strong> (1933) составляют фундамент всей современной теории вероятностей:</p><ol><li><strong>Неотрицательность:</strong> $P(A) \\geq 0$ для любого события $A$.</li><li><strong>Нормировка:</strong> $P(\\Omega) = 1$ (достоверное событие имеет вероятность 1).</li><li><strong>Счётная аддитивность:</strong> Для счётного набора попарно несовместных событий $A_1, A_2, \\ldots$: $$P\\left(\\bigcup_{i=1}^{\\infty} A_i\\right) = \\sum_{i=1}^{\\infty} P(A_i)$$</li></ol><p>Все остальные свойства вероятности — правило дополнения, теоремы сложения и умножения и т.д. — выводятся как <strong>теоремы</strong> из этих трёх аксиом.</p>"
          }
        },
        {
          id: "theory-terms",
          title: { hy: "Հիմնական տերմիններ (Vocabulary)", en: "Terminology", ru: "Терминология" },
          content: {
            hy: "<ul><li><strong>Փորձ (Experiment)․</strong> Հստակ պայմաններում կատարվող գործողություն (օր․՝ մետաղադրամի նետում)։</li><li><strong>Ելք (Outcome/Sample Point)․</strong> Փորձի մեկ հնարավոր արդյունքը։</li><li><strong>Պատահույթ (Event)․</strong> Ելքերի ենթաբազմություն (օր․՝ «Զույգ թիվ բացվելը»)։</li><li><strong>Sample Space ($\\Omega$)․</strong> Բոլոր հնարավոր ելքերի բազմությունը։</li></ul>",
            en: "<ul><li><strong>Experiment (Trial):</strong> Any process performed under fixed conditions whose outcome is uncertain (e.g., tossing a coin, rolling a die, drawing a card).</li><li><strong>Outcome (Elementary Event / Sample Point):</strong> One specific result of an experiment (e.g., 'Heads', 'rolling a 4').</li><li><strong>Event:</strong> A subset of the sample space — one or more outcomes grouped together (e.g., 'rolling an even number' = {2, 4, 6}).</li><li><strong>Sample Space ($\\Omega$):</strong> The set of ALL possible outcomes of an experiment. For a die, $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.</li></ul>",
            ru: "<ul><li><strong>Опыт (Испытание):</strong> Любой процесс, проводимый в фиксированных условиях с неизвестным заранее результатом (бросок монеты, кубика, извлечение карты).</li><li><strong>Исход (Элементарное событие):</strong> Один конкретный результат опыта (например, 'орёл', 'выпало 4').</li><li><strong>Событие:</strong> Подмножество пространства элементарных событий — одно или несколько объединённых исходов (например, 'выпало чётное число' = {2, 4, 6}).</li><li><strong>Пространство элементарных событий ($\\Omega$):</strong> Множество ВСЕХ возможных исходов опыта. Для кубика: $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$.</li></ul>"
          }
        },
        {
          id: "theory-classical-prob",
          title: { hy: "Հավանականության դասական սահմանում", en: "Classical Definition", ru: "Классическое определение" },
          content: {
            hy: "<p>Եթե փորձի բոլոր $n$ ելքերը <strong>հավասարահնարավոր</strong> են և վերջավոր, ապա $P(A) = m/n$:</p><p><strong>Սահմանափակումները․</strong> Այն չի աշխատում, երբ ելքերի քանակը անսահման է (տե՛ս Երկրաչափական սահմանումը) կամ երբ ելքերը հավասարահնարավոր չեն (օր․՝ կեղծված զառ)։</p>",
            en: "<p>If an experiment has $n$ <strong>equally likely</strong> and <strong>finite</strong> outcomes, the probability of event $A$ (which includes $m$ favorable outcomes) is: $$P(A) = \\frac{m}{n}$$</p><p>This is <strong>Laplace's classical definition</strong>. It is elegant and simple, but has two key limitations:</p><ul><li>It <strong>fails</strong> for infinite or continuous sample spaces (use geometric probability instead).</li><li>It <strong>fails</strong> when outcomes are not equally likely (e.g., a loaded die).</li></ul><p><strong>Example:</strong> Drawing a King from a standard 52-card deck: $m=4$, $n=52$, $P(\\text{King}) = 4/52 = 1/13 \\approx 0.077$.</p>",
            ru: "<p>Если опыт имеет $n$ <strong>равновозможных</strong> и <strong>конечных</strong> исходов, то вероятность события $A$, которому благоприятствуют $m$ исходов: $$P(A) = \\frac{m}{n}$$</p><p>Это <strong>классическое определение Лапласа</strong>. Оно просто и наглядно, но имеет два принципиальных ограничения:</p><ul><li><strong>Не работает</strong> для бесконечных или непрерывных пространств исходов (используйте геометрическую вероятность).</li><li><strong>Не работает</strong>, когда исходы неравновозможны (например, шулерская кость).</li></ul><p><strong>Пример:</strong> Извлечение туза из колоды 52 карт: $m=4$, $n=52$, $P(\\text{туз}) = 4/52 = 1/13 \\approx 0{,}077$.</p>"
          }
        },
        {
          id: "theory-experiments-examples",
          title: { hy: "Մետաղադրամ և Զառ․ Փորձեր", en: "Coin & Dice Experiments", ru: "Примеры: Монета и Кубик" },
          content: {
            hy: "<p><strong>Մետաղադրամ․</strong> $P(H) = 1/2$։ Ֆրեկվենտիստները հազարավոր անգամներ նետել են մետաղադրամը (Բյուֆոն, Փիրսոն), և հաճախականությունը միշտ մոտեցել է 0.5-ին։</p><p><strong>Զառ․</strong> $n=6$։ Հավանականությունը, որ կբացվի 4-ից մեծ թիվ ({5, 6})՝ $2/6 = 1/3$։</p>",
            en: "<p><strong>Coin:</strong> $P(H) = 0.5$. Historically, Buffon tossed a coin 4,040 times (2,048 Heads), and Karl Pearson tossed 24,000 times (12,012 Heads) — both results are extremely close to 0.5, empirically confirming the Law of Large Numbers.</p><p><strong>Die:</strong> $n=6$, each face equally likely. $P(X > 4) = |\\{5,6\\}|/6 = 2/6 = 1/3 \\approx 0.333$. $P(X = 3) = 1/6 \\approx 0.167$. $P(\\text{even}) = 3/6 = 0.5$.</p>",
            ru: "<p><strong>Монета:</strong> $P(H) = 0{,}5$. Исторически Бюффон бросил монету 4 040 раз (выпало 2 048 орлов), а Карл Пирсон — 24 000 раз (выпало 12 012 орлов). Оба результата близки к 0,5, эмпирически подтверждая Закон больших чисел.</p><p><strong>Кубик:</strong> $n=6$, каждая грань равновозможна. $P(X > 4) = |\\{5,6\\}|/6 = 1/3 \\approx 0{,}333$. $P(X = 3) = 1/6 \\approx 0{,}167$. $P(\\text{чётное}) = 3/6 = 0{,}5$.</p>"
          }
        }
        ,
        {
          id: "theory-prob-space",
          title: { hy: "Հավանականային Տարածություն", en: "Probability Space", ru: "Вероятностное пространство" },
          content: {
            hy: "<p>Հավանականային տարածությունը $(\\Omega, \\mathcal{F}, P)$ եռյակն է, որը ներմուծել է <strong>Անդրեյ Կոլմոգորովը</strong>:</p><ul><li><strong>$\\Omega$ (Օմեգա)․</strong> Տարրական պատահույթների բազմություն (բոլոր հնարավոր ելքերը)։</li><li><strong>$\\mathcal{F}$․</strong> Պատահույթների սիգմա-հանրահաշիվ (իրադարձությունների հավաքածու)։</li><li><strong>$P$․</strong> Հավանականային չափ, որը յուրաքանչյուր պատահույթի համապատասխանեցնում է [0, 1] միջակայքի թիվ։</li></ul>",
            en: "<p>A <strong>probability space</strong> is the mathematical triplet $(\\Omega, \\mathcal{F}, P)$ introduced by <strong>Andrey Kolmogorov</strong> (1933) as the rigorous foundation for probability:</p><ul><li><strong>$\\Omega$ (Sample Space):</strong> The set of all elementary outcomes (e.g., for a die: $\\{1,2,3,4,5,6\\}$).</li><li><strong>$\\mathcal{F}$ (Sigma-algebra):</strong> A collection of subsets of $\\Omega$ that are considered 'events'. It must be closed under complement and countable unions.</li><li><strong>$P$ (Probability Measure):</strong> A function that assigns to each event $A \\in \\mathcal{F}$ a number $P(A) \\in [0,1]$, satisfying Kolmogorov's axioms.</li></ul><p>This framework unifies discrete and continuous probability under one theory.</p>",
            ru: "<p><strong>Вероятностное пространство</strong> — математическая тройка $(\\Omega, \\mathcal{F}, P)$, введённая <strong>Андреем Колмогоровым</strong> (1933) как строгий фундамент теории вероятностей:</p><ul><li><strong>$\\Omega$ (Пространство исходов):</strong> Множество всех элементарных исходов (для кубика: $\\{1,2,3,4,5,6\\}$).</li><li><strong>$\\mathcal{F}$ (Сигма-алгебра):</strong> Совокупность подмножеств $\\Omega$, называемых событиями. Замкнута относительно дополнений и счётных объединений.</li><li><strong>$P$ (Вероятностная мера):</strong> Функция, сопоставляющая каждому событию $A \\in \\mathcal{F}$ число $P(A) \\in [0,1]$, удовлетворяющее аксиомам Колмогорова.</li></ul><p>Эта конструкция объединяет дискретную и непрерывную вероятность в единой теории.</p>"
          }
        },
        {
          id: "theory-geometric-prob",
          title: { hy: "Երկրաչափական հավանականություն", en: "Geometric Probability", ru: "Геометрическая вероятность" },
          content: {
            hy: "<p>Երբ փորձի ելքերը անվերջ են և լրացնում են որոշակի երկրաչափական տիրույթ (հատված, մակերես, ծավալ), կիրառվում է երկրաչափական սահմանումը՝</p>$$P(A) = \\frac{\\text{mes}(A)}{\\text{mes}(\\Omega)}$$<p>որտեղ $\\text{mes}$-ը (measure) չափն է (երկարություն, մակերես կամ ծավալ):</p><p><strong>Կիրառություն՝</strong> Բյուֆոնի ասեղի խնդիրը, հանդիպման խնդիրը:</p>",
            en: "<p>When the sample space is <strong>infinite and continuous</strong> (a line segment, area or volume), classical probability fails. Instead, we use:</p>$$P(A) = \\frac{\\text{measure}(A)}{\\text{measure}(\\Omega)}$$<p>where 'measure' means length, area, or volume depending on the context. The key assumption is that every point in the region is equally likely to be chosen.</p><p><strong>Example:</strong> A point is chosen randomly in a square of side 2. What is the probability it falls inside the inscribed circle of radius 1? $$P = \\frac{\\pi \\cdot 1^2}{2^2} = \\frac{\\pi}{4} \\approx 0.785$$</p><p><strong>Application:</strong> Buffon's Needle, Meeting Problem, $\\pi$ estimation by Monte Carlo.</p>",
            ru: "<p>Когда пространство исходов <strong>бесконечно и непрерывно</strong> (отрезок, область на плоскости или объём), классическое определение неприменимо. Используется геометрическое:</p>$$P(A) = \\frac{\\text{мера}(A)}{\\text{мера}(\\Omega)}$$<p>где «мера» — это длина, площадь или объём в зависимости от контекста. Ключевое допущение: каждая точка области равновозможна.</p><p><strong>Пример:</strong> Точка выбрана случайно в квадрате со стороной 2. Вероятность попасть в вписанный круг радиуса 1: $$P = \\frac{\\pi \\cdot 1^2}{2^2} = \\frac{\\pi}{4} \\approx 0{,}785$$</p><p><strong>Применения:</strong> Игла Бюффона, задача о встрече, метод Монте-Карло для оценки $\\pi$.</p>"
          }
        },
        {
          id: "theory-complementary",
          title: { hy: "Լրացուցիչ պատահույթներ", en: "Complementary Events", ru: "Противоположные события" },
          content: {
            hy: "<p><strong>Լրացուցիչ (հակադիր)</strong> է կոչվում այն $\\bar{A}$ իրադարձությունը, որը տեղի է ունենում այն և միայն այն դեպքում, երբ A-ն տեղի չի ունենում:</p>$$P(\\bar{A}) = 1 - P(A)$$<p>Սա շատ օգտակար է «գոնե մեկ» տիպի խնդիրներ լուծելիս:</p>",
            en: "<p>The <strong>complement</strong> $\\bar{A}$ of event $A$ is the event that $A$ does <em>not</em> occur. Since $A$ and $\\bar{A}$ are mutually exclusive and exhaustive ($A \\cup \\bar{A} = \\Omega$), it follows from the axioms:</p>$$P(\\bar{A}) = 1 - P(A)$$<p><strong>Why is this useful?</strong> Many problems are much easier to solve via the complement. Classic case: <em>'At least one'</em> problems.</p><p><strong>Example:</strong> Probability that at least one '6' appears in 4 rolls of a die:</p>$$P(\\text{at least one 6}) = 1 - P(\\text{no 6 in 4 rolls}) = 1 - \\left(\\frac{5}{6}\\right)^4 \\approx 0.518$$</p>",
            ru: "<p><strong>Противоположное событие</strong> $\\bar{A}$ — это событие, состоящее в том, что $A$ <em>не</em> произошло. Так как $A$ и $\\bar{A}$ несовместны и в совокупности образуют достоверное событие ($A \\cup \\bar{A} = \\Omega$), из аксиом следует:</p>$$P(\\bar{A}) = 1 - P(A)$$<p><strong>Зачем это полезно?</strong> Многие задачи значительно проще решаются через дополнение. Классический тип: задачи на <em>«хотя бы один»</em>.</p><p><strong>Пример:</strong> Вероятность выпадения хотя бы одной '6' за 4 броска кубика:</p>$$P(\\text{хотя бы одна 6}) = 1 - P(\\text{ни одной 6 за 4 броска}) = 1 - \\left(\\frac{5}{6}\\right)^4 \\approx 0{,}518$$</p>"
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
            hy: "<p><strong>Տեղափոխություններ</strong> են կոչվում $n$ տարրերի դասավորությունները:</p><ul><li><strong>Առանց կրկնության․</strong> $P_n = n!$</li><li><strong>Կրկնություններով․</strong> Եթե $n$ տարրերից $k_1, k_2, ...$ հատը նույնն են․ $P_n(k_1, k_2, ...) = \\frac{n!}{k_1! k_2! ...}$</li><li><strong>Շրջանաձև․</strong> $P_{circle} = (n-1)!$ (քանի որ շրջանի մեջ սկզբնակետը կամայական է)։</li></ul>",
            en: "<p>A <strong>permutation</strong> is an arrangement of all $n$ items in a definite order. The number of permutations equals:</p><ul><li><strong>Without repetition:</strong> $P_n = n!$ (e.g., 5 books on a shelf: $5! = 120$ ways)</li><li><strong>With repetition:</strong> If $k_1$ items are identical of type 1, $k_2$ of type 2, etc.: $$P_n(k_1,k_2,\\ldots) = \\frac{n!}{k_1!\\,k_2!\\cdots}$$Example: Arrangements of MISSISSIPPI ($n=11, k_S=4, k_I=4, k_P=2$): $\\frac{11!}{4!4!2!} = 34\\,650$</li><li><strong>Circular:</strong> Arranging $n$ items in a circle fixes one position as reference, giving $(n-1)!$ arrangements.</li></ul>",
            ru: "<p><strong>Перестановка</strong> — это упорядоченное расположение всех $n$ элементов. Количество перестановок:</p><ul><li><strong>Без повторений:</strong> $P_n = n!$ (например, 5 книг на полке: $5! = 120$ способами)</li><li><strong>С повторениями:</strong> Если $k_1$ элементов одного вида, $k_2$ — другого и т.д.: $$P_n(k_1,k_2,\\ldots) = \\frac{n!}{k_1!\\,k_2!\\cdots}$$Пример: Перестановки букв слова МИССИСИПИ.</li><li><strong>Круговые:</strong> При расстановке $n$ элементов по кругу один элемент фиксируется как точка отсчёта, что даёт $(n-1)!$ перестановок.</li></ul>"
          }
        },
        {
          id: "theory-combinations",
          title: { hy: "Զուգորդություններ (Combinations)", en: "Combinations", ru: "Сочетания" },
          content: {
            hy: "<p><strong>Զուգորդություններ ($C_n^k$)․</strong> Ընտրություն, որտեղ կարևոր չէ հերթականությունը:</p>$$C_n^k = \\frac{n!}{k!(n-k)!}$$<p><strong>Կրկնություններով (Stars and Bars)․</strong> Եթե կարելի է նույն տարրը ընտրել բազմակի անգամ․</p>$$\\bar{C}_n^k = C_{n+k-1}^k$$",
            en: "<p><strong>Combinations</strong> count the number of ways to choose $k$ items from $n$ when <em>order does not matter</em>:</p>$$C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$<p><strong>Key properties:</strong></p><ul><li>$\\binom{n}{k} = \\binom{n}{n-k}$ (symmetry)</li><li>Pascal's identity: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$</li></ul><p><strong>With repetition (Stars and Bars):</strong> If items can be selected multiple times: $$\\bar{C}_n^k = \\binom{n+k-1}{k}$$</p><p><strong>Example:</strong> Lottery 6/49: choose 6 numbers from 49. $C_{49}^6 = 13\\,983\\,816$ — about 14 million tickets needed.</p>",
            ru: "<p><strong>Сочетания</strong> — это число способов выбрать $k$ элементов из $n$, когда <em>порядок не важен</em>:</p>$$C_n^k = \\binom{n}{k} = \\frac{n!}{k!(n-k)!}$$<p><strong>Ключевые свойства:</strong></p><ul><li>$\\binom{n}{k} = \\binom{n}{n-k}$ (симметрия)</li><li>Тождество Паскаля: $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$</li></ul><p><strong>С повторениями (метод звёзд и разделителей):</strong> Если элементы можно выбирать повторно: $$\\bar{C}_n^k = \\binom{n+k-1}{k}$$</p><p><strong>Пример:</strong> Лотерея 6/49: выбрать 6 чисел из 49. $C_{49}^6 = 13\\,983\\,816$ — около 14 миллионов билетов нужно для гарантии выигрыша.</p>"
          }
        },
        {
          id: "theory-arrangements",
          title: { hy: "Կարգավորություններ (Arrangements)", en: "Arrangements", ru: "Размещения" },
          content: {
            hy: "<p><strong>Կարգավորություններ ($A_n^k$)․</strong> Ընտրություն, որտեղ հերթականությունը <strong>կարևոր է</strong>:</p>$$A_n^k = \\frac{n!}{(n-k)!}$$<p><strong>Կրկնություններով․</strong> $\\bar{A}_n^k = n^k$ (օր․՝ ծածկագիր ստեղծելը)։</p>",
            en: "<p><strong>Arrangements</strong> (partial permutations) count ordered selections of $k$ items from $n$:</p>$$A_n^k = P(n,k) = \\frac{n!}{(n-k)!}$$<p><strong>With repetition:</strong> If items can repeat: $\\bar{A}_n^k = n^k$</p><p><strong>Examples:</strong></p><ul><li>4-digit PIN from digits 0–9 (no repeat): $A_{10}^4 = 10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$</li><li>4-digit PIN allowing repeats: $10^4 = 10\\,000$</li></ul><p><strong>Key distinction from combinations:</strong> (A, B) and (B, A) are <em>different</em> arrangements but the <em>same</em> combination.</p>",
            ru: "<p><strong>Размещения</strong> — это число упорядоченных выборок из $k$ элементов из $n$ (порядок важен):</p>$$A_n^k = \\frac{n!}{(n-k)!}$$<p><strong>С повторениями:</strong> Если элементы могут повторяться: $\\bar{A}_n^k = n^k$</p><p><strong>Примеры:</strong></p><ul><li>4-значный пин-код из цифр 0–9 (без повтора): $A_{10}^4 = 10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$</li><li>4-значный пин-код с повторениями: $10^4 = 10\\,000$</li></ul><p><strong>Отличие от сочетаний:</strong> (А, Б) и (Б, А) — <em>разные</em> размещения, но <em>одно</em> сочетание.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "3. Հիմնական թեորեմներ", en: "3. Main Theorems", ru: "3. Основные теоремы" },
      subsections: [
        {
          id: "theory-addition",
          title: { hy: "Գումարման թեորեմ և Ներառման-Բացառման սկզբունք", en: "Addition & Inclusion-Exclusion", ru: "Теорема сложения" },
          content: {
            hy: "<p><strong>Գումարման թեորեմ․</strong> $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$:</p><p><strong>3 իրադարձության համար․</strong> $$P(A \\cup B \\cup C) = P(A)+P(B)+P(C) - P(AB)-P(BC)-P(AC) + P(ABC)$$</p><p><strong>Անհամատեղելիություն․</strong> Եթե $A \\cap B = \\emptyset$, ապա իրադարձությունները կոչվում են <strong>անհամատեղելի</strong> և $P(A+B) = P(A) + P(B)$:</p>",
            en: "<p><strong>Addition Theorem:</strong> For any two events $A$ and $B$: $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$The $P(A \\cap B)$ term corrects for double-counting the overlap.</p><p><strong>Inclusion-Exclusion Principle</strong> generalizes this for $n$ events: $$P(A \\cup B \\cup C) = P(A)+P(B)+P(C) - P(AB)-P(BC)-P(AC) + P(ABC)$$</p><p><strong>Special case — Mutually Exclusive (Disjoint) Events:</strong> If $A \\cap B = \\emptyset$: $$P(A \\cup B) = P(A) + P(B)$$</p><p><strong>Example:</strong> In a class, P(plays chess) = 0.4, P(plays checkers) = 0.3, P(plays both) = 0.15. Then P(plays at least one) = 0.4 + 0.3 - 0.15 = <strong>0.55</strong>.</p>",
            ru: "<p><strong>Теорема сложения:</strong> Для любых двух событий: $$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$Член $P(A \\cap B)$ устраняет двойной подсчёт пересечения.</p><p><strong>Формула включений-исключений</strong> обобщает это для $n$ событий: $$P(A \\cup B \\cup C) = P(A)+P(B)+P(C) - P(AB)-P(BC)-P(AC) + P(ABC)$$</p><p><strong>Особый случай — Несовместные события:</strong> Если $A \\cap B = \\emptyset$: $$P(A \\cup B) = P(A) + P(B)$$</p><p><strong>Пример:</strong> P(шахматы) = 0,4; P(шашки) = 0,3; P(оба) = 0,15. Тогда P(хотя бы одна игра) = 0,4 + 0,3 − 0,15 = <strong>0,55</strong>.</p>"
          }
        },
        {
          id: "theory-multiplication",
          title: { hy: "Բազմապատկում և Անկախություն", en: "Multiplication & Independence", ru: "Умножение и Независимость" },
          content: {
            hy: "<p>Երկու իրադարձություն կոչվում են <strong>անկախ</strong>, եթե մեկի տեղի ունենալը չի փոխում մյուսի հավանականությունը․ $P(B|A) = P(B)$։</p><p><strong>Անկախության պայմանը․</strong> $P(A \\cap B) = P(A) \\cdot P(B)$:</p><p><em>Զգուշացում․</em> Մի՛ խառնեք «անհամատեղելի» (չեն կարող լինել միասին) և «անկախ» (մեկը մյուսին չի ազդում) հասկացությունները:</p>",
            en: "<p>Events $A$ and $B$ are <strong>independent</strong> if knowing that $B$ occurred gives no information about $A$: $$P(A|B) = P(A) \\quad \\Leftrightarrow \\quad P(A \\cap B) = P(A) \\cdot P(B)$$</p><p>For $n$ mutually independent events: $P(A_1 \\cap A_2 \\cap \\cdots \\cap A_n) = P(A_1) \\cdot P(A_2) \\cdots P(A_n)$</p><p><strong>Critical Warning:</strong> Do NOT confuse two different concepts:</p><ul><li><strong>Disjoint (mutually exclusive):</strong> $A \\cap B = \\emptyset$ — they CANNOT both happen. If $P(A) > 0$ and $P(B) > 0$, disjoint events are always <em>dependent</em>.</li><li><strong>Independent:</strong> One happening has NO effect on the other's probability.</li></ul><p><strong>Example:</strong> Flipping two coins: P(1st = H) and P(2nd = H) are independent. But 'getting Heads' and 'getting Tails' on the same toss are disjoint.</p>",
            ru: "<p>События $A$ и $B$ называются <strong>независимыми</strong>, если наступление одного не даёт информации о другом: $$P(A|B) = P(A) \\quad \\Leftrightarrow \\quad P(A \\cap B) = P(A) \\cdot P(B)$$</p><p>Для $n$ взаимно независимых событий: $P(A_1 \\cap \\cdots \\cap A_n) = P(A_1) \\cdots P(A_n)$</p><p><strong>Важное предупреждение!</strong> Нельзя путать два понятия:</p><ul><li><strong>Несовместные:</strong> $A \\cap B = \\emptyset$ — оба одновременно НЕ могут произойти. Если $P(A)>0$ и $P(B)>0$, несовместные события всегда <em>зависимы</em>.</li><li><strong>Независимые:</strong> Наступление одного никак не влияет на вероятность другого.</li></ul><p><strong>Пример:</strong> Бросок двух монет: P(1-D = О) и P(2-D = О) независимы. Но 'орёл' и 'решка' при одном броске несовместны.</p>"
          }
        },
        {
          id: "theory-conditional-prob",
          title: { hy: "Պայմանական հավանականություն", en: "Conditional Probability", ru: "Условная вероятность" },
          content: {
            hy: "<p>Հավանականությունը, որ տեղի կունենա A իրադարձությունը, պայմանով, որ B-ն արդեն տեղի է ունեցել:</p>$$P(A|B) = \\frac{P(AB)}{P(B)}, \\quad P(B) > 0$$<p>Սա նման է «ընտրության տիրույթի» փոքրացմանը ($\\Omega \\to B$):</p>",
            en: "<p><strong>Conditional probability</strong> is the probability of $A$ given that $B$ has already occurred. Knowing $B$ reduces the sample space from $\\Omega$ to $B$: $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$$</p><p><strong>Multiplication rule</strong> (rearranging the above): $$P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$$</p><p><strong>Example:</strong> From a deck of 52 cards, draw 2 without replacement. What is the probability both are aces?$$P(\\text{1st ace}) = \\frac{4}{52}, \\quad P(\\text{2nd ace} | \\text{1st ace}) = \\frac{3}{51}$$$$P(\\text{both aces}) = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} \\approx 0.0045$$</p>",
            ru: "<p><strong>Условная вероятность</strong> — это вероятность события $A$ при условии, что $B$ уже произошло. Знание $B$ сужает пространство исходов до $B$: $$P(A|B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0$$</p><p><strong>Теорема умножения</strong> (перестановка формулы): $$P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)$$</p><p><strong>Пример:</strong> Из колоды 52 карт извлекают 2 без возврата. Вероятность, что обе — тузы:$$P(1\\text{-й туз}) = \\frac{4}{52}, \\quad P(2\\text{-й туз} | 1\\text{-й туз}) = \\frac{3}{51}$$$$P(\\text{оба туза}) = \\frac{4}{52} \\times \\frac{3}{51} \\approx 0{,}0045$$</p>"
          }
        },
        {
          id: "theory-bayes",
          title: { hy: "Լրիվ հավանականություն և Բայես", en: "Total Prob & Bayes", ru: "Полная вероятность и Байес" },
          content: {
            hy: "<p><strong>Լրիվ հավանականություն․</strong> Երբ A-ն կախված է իրար բացառող հիպոթեզներից․ $$P(A) = \\sum P(H_i) P(A|H_i)$$</p><p><strong>Բայեսի բանաձև․</strong> Թույլ է տալիս «շրջել» հավանականությունը․ գտնել հիպոթեզի հավանականությունը, եթե արդեն գիտենք արդյունքը։</p>$$P(H_i|A) = \\frac{P(A|H_i)P(H_i)}{\\sum P(H_k)P(A|H_k)}$$",
            en: "<p><strong>Law of Total Probability:</strong> If $H_1, H_2, \\ldots, H_n$ form a complete partition of $\\Omega$ (mutually exclusive and exhaustive hypotheses): $$P(A) = \\sum_{i=1}^n P(H_i) \\cdot P(A|H_i)$$</p><p><strong>Bayes' Theorem</strong> reverses the conditioning — it finds the probability of a cause given an effect: $$P(H_i|A) = \\frac{P(A|H_i) \\cdot P(H_i)}{\\sum_{k=1}^n P(A|H_k) \\cdot P(H_k)}$$</p><p><strong>Terminology:</strong> $P(H_i)$ = <em>prior</em> (belief before seeing data), $P(H_i|A)$ = <em>posterior</em> (updated belief after seeing data).</p><p><strong>Famous example (Medical Test):</strong> Disease prevalence 1%, test accuracy 99%. If a test is positive, only <strong>50%</strong> chance of disease! This counter-intuitive result is the 'Bayes Trap': the rarity of the disease dominates.</p>",
            ru: "<p><strong>Формула полной вероятности:</strong> Если $H_1, \\ldots, H_n$ образуют полную группу гипотез (попарно несовместных и исчерпывающих): $$P(A) = \\sum_{i=1}^n P(H_i) \\cdot P(A|H_i)$$</p><p><strong>Формула Байеса</strong> — переворачивает условие: находит вероятность причины по следствию: $$P(H_i|A) = \\frac{P(A|H_i) \\cdot P(H_i)}{\\sum_{k=1}^n P(A|H_k) \\cdot P(H_k)}$$</p><p><strong>Терминология:</strong> $P(H_i)$ = <em>априорная</em> вероятность, $P(H_i|A)$ = <em>апостериорная</em> (uobnovlyonnaya).</p><p><strong>Классический пример (медицинский тест):</strong> распространённость болезни 1%, точность теста 99%. При положительном тесте вероятность болезни всего <strong>50%</strong>! Это противоинтуитивный результат — «ловушка Байеса»: редкость болезни доминирует над точностью теста.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "4. Անկախ և Կախյալ պատահույթներ (Իրադարձությունների կապը)", en: "4. Independent and Dependent Events", ru: "4. Независимые и Зависимые события" },
      subsections: [
        {
          id: "theory-independent-events",
          title: { hy: "Անկախ պատահույթներ (Տիեզերքը հիշողություն չունի)", en: "Independent Events (The Universe Has No Memory)", ru: "Независимые события (У Вселенной нет памяти)" },
          content: {
            hy: "<p>Երկու պատահույթներ կոչվում են <strong>անկախ</strong>, եթե նրանցից մեկի տեղի ունենալը (կամ չունենալը) որևէ կերպ չի ազդում մյուսի հավանականության վրա: Դրանք գոյություն ունեն իրարից լրիվ անջատ:</p><p>Մաթեմատիկորեն դա նշանակում է. A և B պատահույթների միաժամանակ տեղի ունենալու հավանականությունը հավասար է նրանց առանձին հավանականությունների արտադրյալին: <br>Բանաձևը՝ $$P(A \\cap B) = P(A) \\cdot P(B)$$</p><p><strong>Օրինակ կյանքից (Խանութ և մետաղադրամ)։</strong> Պատկերացրեք՝ դուք խանութում հաց եք գնում, իսկ ձեր ընկերը դրսում մետաղադրամ է նետում։ Ձեր՝ հաց գնելու փաստը ոչ մի կերպ չի կարող ստիպել, որ մետաղադրամի վրա «Զինանշան» ընկնի։ Այս երկու իրադարձությունները լիովին անկախ են։</p><p><strong>Օրինակ խաղերից (Զառի նետում)։</strong> Եթե զառը նետեք և ընկնի «6», ապա երկրորդ անգամ նետելիս «6» ընկնելու հավանականությունը նորից նույնն է ($1/6$): Զառը չունի հիշողություն, նա չգիտի, որ նախորդ անգամ արդեն «6» էր ընկել:</p>",
            en: "<p>Two events are considered <strong>independent</strong> if the occurrence (or non-occurrence) of one does not affect the probability of the other in any way. They exist completely separate from each other.</p><p>Mathematically, this means the probability of both events A and B occurring is the product of their individual probabilities: $$P(A \\cap B) = P(A) \\cdot P(B)$$</p><p><strong>Real-life Example (Store & Coin):</strong> Imagine you are buying bread in a store, and your friend tosses a coin outside. You buying bread cannot make the coin land on 'Heads'. These events are completely independent.</p><p><strong>Game Example (Rolling a Die):</strong> If you roll a '6', the probability of rolling a '6' on the next roll remains $1/6$. The die has no memory; it doesn't know it just rolled a '6'.</p>",
            ru: "<p>Два события называются <strong>независимыми</strong>, если наступление (или ненаступление) одного из них никак не влияет на вероятность другого. Они существуют совершенно раздельно.</p><p>Математически это означает, что вероятность одновременного наступления событий А и В равна произведению их отдельных вероятностей: $$P(A \\cap B) = P(A) \\cdot P(B)$$</p><p><strong>Пример из жизни (Магазин и Монета):</strong> Представьте, что вы покупаете хлеб в магазине, а ваш друг бросает монету на улице. Ваша покупка хлеба никак не может заставить монету выпасть 'орлом'. Эти события полностью независимы.</p><p><strong>Пример из игр (Бросок кубика):</strong> Если вы бросили кубик и выпала '6', то вероятность получить '6' при следующем броске снова $1/6$. У кубика нет памяти, он не знает, что в прошлый раз выпала '6'.</p>"
          }
        },
        {
          id: "theory-dependent-events",
          title: { hy: "Կախյալ պատահույթներ (Պայմանների փոփոխություն)", en: "Dependent Events (Changing Conditions)", ru: "Зависимые события (Изменение условий)" },
          content: {
            hy: "<p>Երկու պատահույթներ կոչվում են <strong>կախյալ</strong>, եթե մեկի տեղի ունենալը փոխում է պայմանները՝ մեծացնելով կամ փոքրացնելով մյուսի հավանականությունը: Այստեղ մենք գործ ունենք պայմանական հավանականության հետ։</p><p>Մաթեմատիկորեն դա նշանակում է. B-ի հավանականությունը հաշվելիս պետք է հաշվի առնել, որ A-ն արդեն տեղի է ունեցել (նշանակվում է $P(B|A)$): <br>Բանաձևը՝ $$P(A \\cap B) = P(A) \\cdot P(B|A)$$</p><p><strong>Օրինակ կյանքից (Անձրև և հովանոց)։</strong> «Դրսում անձրև է գալիս» և «Դուք տնից հովանոց եք վերցրել» իրադարձությունները խիստ կախյալ են։ Անձրևոտ եղանակը տեսնելը (Առաջին իրադարձություն) կտրուկ մեծացնում է հովանոց վերցնելու (Երկրորդ իրադարձություն) հավանականությունը։</p><p><strong>Օրինակ խաղաքարտերով (Առանց վերադարձի)։</strong> Պատկերացրեք՝ 52 քարտանոց կապուկից մեկ քարտ եք հանում: Դա «Տուզ» լինելու հավանականությունը $4/52$ է։ Եթե դուք այդ Տուզը գրպանը դնեք (չվերադարձնեք կապուկի մեջ), ապա հաջորդ քաշած քարտի «Տուզ» լինելու հավանականությունը կփոխվի՝ դառնալով $3/51$։ Առաջին քայլը անմիջապես ազդեց երկրորդի վրա:</p>",
            en: "<p>Two events are considered <strong>dependent</strong> if the occurrence of one changes the conditions, increasing or decreasing the probability of the other. Here we deal with conditional probability.</p><p>Mathematically: when calculating the probability of B, we must account for A having occurred: $$P(A \\cap B) = P(A) \\cdot P(B|A)$$</p><p><strong>Real-life Example (Rain & Umbrella):</strong> 'It is raining outside' and 'You took an umbrella from home' are highly dependent. Seeing rainy weather drastically increases the likelihood of taking an umbrella.</p><p><strong>Card Example (Without Replacement):</strong> Imagine drawing one card from a 52-card deck. The probability of it being an 'Ace' is $4/52$. If you pocket that Ace (don't return it), the probability that the next card is an 'Ace' changes to $3/51$. The first action directly affected the second.</p>",
            ru: "<p>Два события называются <strong>зависимыми</strong>, если наступление одного изменяет условия, увеличивая или уменьшая вероятность другого. Здесь мы имеем дело с условной вероятностью.</p><p>Математически это означает: при расчете вероятности B необходимо учесть, что A уже произошло: $$P(A \\cap B) = P(A) \\cdot P(B|A)$$</p><p><strong>Пример из жизни (Дождь и зонт):</strong> События 'На улице идет дождь' и 'Вы взяли из дома зонт' сильно зависимы. Вид дождливой погоды резко повышает вероятность того, что вы возьмете зонт.</p><p><strong>Пример с картами (Без возврата):</strong> Представьте, что вы извлекаете одну карту из колоды в 52 листа. Вероятность того, что это 'Туз', равна $4/52$. Если вы положите этого Туза в карман (не вернете в колоду), то вероятность извлечь 'Туза' в следующий раз изменится и станет $3/51$. Первый шаг напрямую повлиял на второй.</p>"
          }
        },
        {
          id: "theory-indep-vs-dep",
          title: { hy: "Ինչո՞վ են դրանք տարբերվում գործնականում (Խաղատան գաղտնիքը)", en: "How They Differ in Practice (The Casino Secret)", ru: "В чем разница на практике (Секрет казино)" },
          content: {
            hy: "<p><strong>Հիմնական տարբերությունը ինֆորմացիայի և հիշողության մեջ է:</strong></p><ul><li><strong>Անկախի դեպքում</strong> մի իրադարձության արդյունքն իմանալը ձեզ ոչ մի օգուտ չի տալիս հաջորդը գուշակելու համար։</li><li><strong>Կախյալի դեպքում</strong> նախորդ իրադարձությունը ձեզ հուշում կամ առավելություն է տալիս։</li></ul><p><strong>Ամենավառ ապացույցը՝ Ռուլետկա ընդդեմ Բլեքջեքի.</strong><br>Շատ խաղացողներ ռուլետկա խաղալիս մտածում են. <em>«Արդեն 10 անգամ անընդմեջ Սև է ընկել, ուրեմն հաջորդը հաստատ Կարմիր կլինի»</em>: Սա մեծագույն խաբկանք է (հայտնի է որպես Խաղացողի սխալանք), քանի որ պտուտակը հիշողություն չունի, ամեն պտույտ անկախ պատահույթ է, և Կարմիրի շանսը միշտ մնում է ~50%։ Իսկ ահա Բլեքջեքում քարտերի հաշվարկն աշխատում է հենց այն պատճառով, որ քարտերը չեն վերադարձվում խաղի ժամանակ (կախյալ իրադարձություններ են)։</p>",
            en: "<p><strong>The main difference lies in information and memory:</strong></p><ul><li><strong>For independent events</strong>, knowing the outcome of one gives you zero advantage in guessing the next.</li><li><strong>For dependent events</strong>, the prior event gives you a hint or an advantage.</li></ul><p><strong>The clearest proof: Roulette vs. Blackjack.</strong><br>Many roulette players think: <em>'Black has landed 10 times in a row, so the next one will definitely be Red'</em>. This is a massive illusion (known as the Gambler's Fallacy) because the wheel has no memory; every spin is an independent event, and Red's chance is always ~50%. However, in Blackjack, card counting works precisely because cards are not returned to the deck during the shoe's play (they are dependent events).</p>",
            ru: "<p><strong>Главное отличие заключается в информации и памяти:</strong></p><ul><li><strong>Для независимых событий</strong> знание исхода одного не дает вам никакой пользы в угадывании следующего.</li><li><strong>Для зависимых событий</strong> предыдущее событие дает вам подсказку или преимущество.</li></ul><p><strong>Самое яркое доказательство: Рулетка против Блэкджека.</strong><br>Многие игроки в рулетку думают: <em>«Уже 10 раз подряд выпало Черное, значит следующее точно будет Красным»</em>. Это величайшее заблуждение (известное как Ошибка игрока), поскольку колесо не имеет памяти, каждое вращение — это независимое событие, и шанс Красного всегда остается ~50%. А вот в блэкджеке подсчет карт работает именно потому, что карты не возвращаются в колоду во время игры (это зависимые события).</p>"
          }
        }
      ]
    },
    {
      title: { hy: "5. Պատահական մեծություններ", en: "5. Random Variables", ru: "5. Случайные величины" },
      subsections: [
        {
          id: "theory-rv-basics",
          title: { hy: "Տեսակները և Բաշխման ֆունկցիան (CDF)", en: "Types & Distribution Function (CDF)", ru: "Виды и Функции распределения" },
          content: {
            hy: "<p>Պատահական մեծությունները լինում են <strong>դիսկրետ</strong> (ընդունում են առանձին արժեքներ) և <strong>անընդհատ</strong> (լրացնում են միջակայք)։</p><p><strong>Բաշխման ֆունկցիա (CDF):</strong> $F(x) = P(X \\leq x)$:</p><ul><li>Միշտ չնվազող է։</li><li>Արժեքները $[0, 1]$-ում են։</li><li>Անընդհատ մեծության համար․ $P(a < X < b) = F(b) - F(a)$։</li></ul>",
            en: "<p>A <strong>random variable (RV)</strong> $X$ is a function that assigns a numerical value to each outcome in a sample space.</p><p><strong>Discrete RV:</strong> Takes a countable number of values (e.g., number of heads in 10 coin flips). Described by a <em>probability mass function (PMF)</em>: $P(X = x_k) = p_k$ where $\\sum p_k = 1$.</p><p><strong>Continuous RV:</strong> Takes values in a continuous range (e.g., waiting time, height). Described by a <em>probability density function (PDF)</em>.</p><p><strong>Cumulative Distribution Function (CDF):</strong> $F(x) = P(X \\leq x)$, valid for both types. Properties: non-decreasing, $F(-\\infty)=0$, $F(+\\infty)=1$. For continuous RVs: $P(a < X < b) = F(b) - F(a)$.</p>",
            ru: "<p><strong>Случайная величина (CB)</strong> $X$ — это функция, приписывающая числовое значение каждому исходу.</p><p><strong>Дискретная CB:</strong> Принимает счётное множество значений (например, число орлов в 10 бросках). Описывается законом распределения: $P(X=x_k)=p_k$, $\\sum p_k=1$.</p><p><strong>Непрерывная CB:</strong> Принимает значения из непрерывного диапазона (время ожидания, рост). Описывается плотностью вероятности (PDF).</p><p><strong>Функция распределения (CDF):</strong> $F(x) = P(X \\leq x)$ — неубывающая, $F(-\\infty)=0$, $F(+\\infty)=1$. Для непрерывных: $P(a < X < b) = F(b) - F(a)$.</p>"
          }
        },
        {
          id: "theory-rv-pdf",
          title: { hy: "Բաշխման խտություն", en: "Probability Density", ru: "Плотность вероятности" },
          content: {
            hy: "<p>Անընդհատ պատահական մեծությունների համար հավանականությունը կետում զրո է․ $P(X=x) = 0$։ Դրա փոխարեն օգտագործվում է <strong>խտության ֆունկցիան $f(x)$</strong>․</p>$$F(x) = \\int_{-\\infty}^x f(t)dt$$<p>Հատկություն․ $\\int_{-\\infty}^{\\infty} f(x)dx = 1$ (մակերեսը կորի տակ միշտ 1 է)։</p>",
            en: "<p>For a <strong>continuous</strong> random variable, the probability at any single point is zero: $P(X = x) = 0$. Instead, we use the <strong>Probability Density Function (PDF)</strong> $f(x)$:</p>$$F(x) = \\int_{-\\infty}^x f(t)\\,dt \\quad \\Rightarrow \\quad P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$$<p>Properties of $f(x)$: <br>1. $f(x) \\geq 0$ for all $x$ <br>2. $\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$ (total area under the curve = 1)</p><p>The PDF is sometimes called the <em>density</em> — it tells us how concentrated the probability is near a point, not the probability itself.</p>",
            ru: "<p>Для <strong>непрерывной</strong> случайной величины вероятность в любой точке равна нулю: $P(X = x) = 0$. Вместо этого используют <strong>плотность вероятности (PDF)</strong> $f(x)$:</p>$$F(x) = \\int_{-\\infty}^x f(t)\\,dt \\quad \\Rightarrow \\quad P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$$<p>Свойства $f(x)$: <br>1. $f(x) \\geq 0$ для всех $x$ <br>2. $\\int_{-\\infty}^{+\\infty} f(x)\\,dx = 1$ (площадь под кривой равна 1)</p><p>Плотность вероятности не равна вероятности — она показывает, насколько сконцентрирована вероятность вблизи точки.</p>"
          }
        },
        {
          id: "theory-rv-props",
          title: { hy: "Թվային բնութագրիչներ", en: "Numerical Characteristics", ru: "Числовые характеристики" },
          content: {
            hy: "<ul><li><strong>Մաթ. սպասում ($E[X]$):</strong> Միջին կշռված արժեքը։</li><li><strong>Դիսպերսիա ($Var(X)$):</strong> Շեղվածության չափը միջինից։</li><li><strong>Մոդա:</strong> Ամենահավանական արժեքը։</li><li><strong>Մեդիան:</strong> Արժեքը, որից ձախ և աջ հավանականությունները 0.5 են։</li></ul>",
            en: "<ul><li><strong>Expectation $E[X]$ (Mean):</strong> The long-run average value. For discrete: $E[X] = \\sum x_k p_k$. For continuous: $E[X] = \\int_{-\\infty}^{\\infty} x f(x)\\,dx$. <br><em>Property:</em> $E[aX + b] = aE[X] + b$</li><li><strong>Variance $\\text{Var}(X)$:</strong> Measures spread. $\\text{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$. <br><em>Std deviation:</em> $\\sigma = \\sqrt{\\text{Var}(X)}$</li><li><strong>Mode:</strong> The most likely value (highest probability or density).</li><li><strong>Median $M$:</strong> The middle value: $P(X \\leq M) = 0.5$.</li></ul><p><strong>Key inequality:</strong> $\\text{Var}(X) \\geq 0$ always; $\\text{Var}(X) = 0$ iff $X$ is constant.</p>",
            ru: "<ul><li><strong>Математическое ожидание $E[X]$:</strong> Средневзвешенное значение. Для дискретной: $E[X] = \\sum x_k p_k$. Для непрерывной: $E[X] = \\int x\\,f(x)\\,dx$. <br><em>Свойство:</em> $E[aX + b] = aE[X] + b$</li><li><strong>Дисперсия $\\text{Var}(X)$:</strong> Мера разброса. $\\text{Var}(X) = E[X^2] - (E[X])^2$. <br><em>Стандартное отклонение:</em> $\\sigma = \\sqrt{\\text{Var}(X)}$</li><li><strong>Мода:</strong> Наиболее вероятное значение.</li><li><strong>Медиана $M$:</strong> $P(X \\leq M) = 0{,}5$ — значение, делящее распределение пополам.</li></ul><p><strong>Ключевое неравенство:</strong> $\\text{Var}(X) \\geq 0$ всегда; $\\text{Var}(X) = 0$ тогда и только тогда, когда $X$ константа.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "6. Բաշխման օրենքներ", en: "6. Distribution Laws", ru: "6. Законы распределения" },
      subsections: [
        {
          id: "theory-binomial",
          title: { hy: "Բինոմիալ բաշխում (Binomial)", en: "Binomial Distribution", ru: "Биномиальное распр." },
          content: {
            hy: "<p>Նկարագրում է $n$ անկախ փորձերում հաջողությունների քանակը ($p$ հավանականությամբ)։</p>$$P(X=k) = C_n^k p^k (1-p)^{n-k}$$<ul><li>$E[X] = np$</li><li>$Var(X) = npq$</li></ul>",
            en: "<p>Models the number of <strong>successes</strong> in $n$ <strong>independent Bernoulli trials</strong> each with success probability $p$:</p>$$P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}, \\quad k = 0, 1, \\ldots, n$$<ul><li>$E[X] = np$, $\\text{Var}(X) = np(1-p) = npq$</li><li>Shape: symmetric when $p=0.5$; skewed right when $p<0.5$</li></ul><p><strong>Example:</strong> A basketball player hits 70% of free throws. In 10 shots, the expected number of hits: $E[X] = 10 \\times 0.7 = 7$. Probability of exactly 8 hits: $C_{10}^8 \\cdot 0.7^8 \\cdot 0.3^2 \\approx 0.233$.</p><p><strong>Connection to Normal:</strong> By CLT, for large $n$, $X \\approx N(np, npq)$.</p>",
            ru: "<p>Моделирует количество <strong>успехов</strong> в $n$ <strong>независимых испытаниях Бернулли</strong> с вероятностью успеха $p$:</p>$$P(X=k) = \\binom{n}{k} p^k q^{n-k}, \\quad q = 1-p$$<ul><li>$E[X] = np$, $\\text{Var}(X) = npq$</li><li>Форма: симметрична при $p=0{,}5$; скошена при $p \\neq 0{,}5$</li></ul><p><strong>Пример:</strong> Баскетболист попадает 70% штрафных. За 10 бросков ожидаемое число попаданий: $E[X] = 7$. Вероятность ровно 8: $C_{10}^8 \\cdot 0{,}7^8 \\cdot 0{,}3^2 \\approx 0{,}233$.</p><p><strong>Связь с нормальным:</strong> По ЦПТ при больших $n$: $X \\approx N(np, npq)$.</p>"
          }
        },
        {
          id: "theory-geometric",
          title: { hy: "Գեոմետրիկ և Հիպերգեոմետրիկ", en: "Geometric & Hypergeometric", ru: "Геометрическое и др." },
          content: {
            hy: "<ul><li><strong>Գեոմետրիկ․</strong> Փորձերի քանակը մինչև առաջին հաջողությունը (ներառյալ)։ $P(X=k) = q^{k-1}p$։</li><li><strong>Հիպերգեոմետրիկ․</strong> Ընտրանք առանց վերադարձի (օր․՝ քարտեր)։ $$P(X=k) = \\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$$</li></ul>",
            en: "<ul><li><strong>Geometric Distribution:</strong> Models the number of trials until the <em>first</em> success. $P(X=k) = (1-p)^{k-1}p$, $E[X] = 1/p$. It has the <em>memoryless property</em>: past failures don't affect future probabilities.</li><li><strong>Hypergeometric Distribution:</strong> Models sampling <em>without replacement</em> from a finite population of $N$ items ($M$ successes). $$P(X=k) = \\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$$<br>$E[X] = nM/N$. Used in quality control, card games.</li></ul><p><strong>Example (Geometric):</strong> Keep rolling a die until a 6 appears. $p = 1/6$. Expected rolls = $1/p = 6$. Probability that first 6 appears on exactly the 4th roll: $(5/6)^3 \\cdot (1/6) \\approx 0.096$.</p>",
            ru: "<ul><li><strong>Геометрическое распределение:</strong> Моделирует число испытаний до <em>первого</em> успеха. $P(X=k) = (1-p)^{k-1}p$, $E[X] = 1/p$. Обладает <em>свойством отсутствия памяти</em>: прошлые неудачи не влияют на будущее.</li><li><strong>Гипергеометрическое распределение:</strong> Моделирует выборку <em>без возврата</em> из конечной генеральной совокупности $N$ объектов ($M$ успехов). $$P(X=k) = \\frac{\\binom{M}{k}\\binom{N-M}{n-k}}{\\binom{N}{n}}$$<br>$E[X] = nM/N$. Применяется в контроле качества и карточных играх.</li></ul><p><strong>Пример (геометрическое):</strong> Бросали кубик до тех пор, пока не выпала 6. $p = 1/6$. Ожидаемое число бросков = 6. Вероятность выпадения 6 ровно на 4-м броске: $(5/6)^3 \\cdot (1/6) \\approx 0{,}096$.</p>"
          }
        },
        {
          id: "theory-poisson",
          title: { hy: "Պուասոնի բաշխում", en: "Poisson Distribution", ru: "Распределение Пуассона" },
          content: {
            hy: "<p>Կիրառվում է հազվադեպ իրադարձությունների համար․ $$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$</p><p><strong>Հատկություն․</strong> $E[X] = Var(X) = \\lambda$:</p>",
            en: "<p>Used to model the number of times a rare event occurs in a fixed interval of time or space: $$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0,1,2,\\ldots$$</p><p>Key properties: $E[X] = \\text{Var}(X) = \\lambda$. This equal mean and variance is a hallmark of the Poisson.</p><p><strong>Poisson as limit of Binomial:</strong> When $n \\to \\infty$, $p \\to 0$ with $np = \\lambda$ fixed, $\\text{Bin}(n,p) \\to \\text{Poisson}(\\lambda)$.</p><p><strong>Examples:</strong> Number of calls arriving at a call center per minute; number of typos per page; number of radioactive decays per second.</p>",
            ru: "<p>Моделирует количество <em>редких событий</em> в фиксированном интервале времени или пространства: $$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}, \\quad k = 0,1,2,\\ldots$$</p><p>Ключевое свойство: $E[X] = \\text{Var}(X) = \\lambda$. Равенство среднего и дисперсии — характерная черта распределения Пуассона.</p><p><strong>Пуассон как предел биномиального:</strong> При $n \\to \\infty$, $p \\to 0$, $np = \\lambda = \\text{const}$: $\\text{Bin}(n,p) \\to \\text{Poisson}(\\lambda)$.</p><p><strong>Примеры:</strong> Число звонков в колл-центр за минуту; число опечаток на странице; число радиоактивных распадов за секунду.</p>"
          }
        },
        {
          id: "theory-normal",
          title: { hy: "Նորմալ և Էքսպոնենցիալ", en: "Normal & Exponential", ru: "Нормальное и др." },
          content: {
            hy: "<ul><li><strong>Նորմալ ($\\mu, \\sigma$)․</strong> Բնության մեջ ամենատարածվածն է։ $68\\text{-}95\\text{-}99.7$ կանոնը։</li><li><strong>Էքսպոնենցիալ ($\\lambda$)․</strong> Ժամանակը փոփոխությունների միջև։ $f(x) = \\lambda e^{-\\lambda x}$։ Չունի «հիշողություն»։</li></ul>",
            en: "<ul><li><strong>Normal Distribution $N(\\mu, \\sigma^2)$:</strong> The bell-shaped curve, the most important distribution in all of science. PDF: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$. The <strong>68-95-99.7 rule</strong>: 68% of data falls within $1\\sigma$, 95% within $2\\sigma$, 99.7% within $3\\sigma$ of the mean. Standardization: $Z = (X - \\mu)/\\sigma \\sim N(0,1)$.</li><li><strong>Exponential Distribution $\\text{Exp}(\\lambda)$:</strong> Models the time between Poisson events. PDF: $f(x) = \\lambda e^{-\\lambda x}$ for $x \\geq 0$. $E[X] = 1/\\lambda$. <em>Memoryless property:</em> $P(X > s+t | X > s) = P(X > t)$ — the distribution 'forgets' how long it has been waiting.</li></ul>",
            ru: "<ul><li><strong>Нормальное распределение $N(\\mu, \\sigma^2)$:</strong> Колокоообразная кривая — самое важное распределение в науке. PDF: $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-\\frac{(x-\\mu)^2}{2\\sigma^2}}$. <strong>Правило 68-95-99,7:</strong> 68% данных в пределах $1\\sigma$, 95% в $2\\sigma$, 99,7% в $3\\sigma$ от среднего. Стандартизация: $Z = (X - \\mu)/\\sigma \\sim N(0,1)$.</li><li><strong>Экспоненциальное распределение $\\text{Exp}(\\lambda)$:</strong> Моделирует время между событиями Пуассона. PDF: $f(x) = \\lambda e^{-\\lambda x}$ при $x \\geq 0$. $E[X] = 1/\\lambda$. <em>Свойство отсутствия памяти:</em> $P(X > s+t | X > s) = P(X > t)$ — распределение 'забывает' прошлое.</li></ul>"
          }
        }
      ]
    },
    {
      title: { hy: "6. Սահմանային թեորեմներ", en: "6. Limit Theorems", ru: "6. Предельные теоремы" },
      subsections: [
        {
          id: "theory-ill-markov",
          title: { hy: "Մարկովի անհավասարություն", en: "Markov's Inequality", ru: "Неравенство Маркова" },
          content: {
            hy: "<p>Ցանկացած ոչ բացասական $X$ պատահական մեծության համար․</p>$$P(X \\geq a) \\leq \\frac{E[X]}{a}$$",
            en: "<p>For any <strong>non-negative</strong> random variable $X$ and any constant $a > 0$: $$P(X \\geq a) \\leq \\frac{E[X]}{a}$$</p><p>This is remarkable because it requires <em>only</em> the mean — no other information about the distribution.</p><p><strong>Example:</strong> Average income in a city is $50,000. Markov's inequality gives: $P(\\text{income} \\geq 250{,}000) \\leq 50{,}000/250{,}000 = 0.2$. So at most 20% of the population can earn $250K or more.</p><p><strong>Limitation:</strong> The bound is often loose. Chebyshev's inequality is tighter when variance is known.</p>",
            ru: "<p>Для любой <strong>неотрицательной</strong> случайной величины $X$ и любой константы $a > 0$: $$P(X \\geq a) \\leq \\frac{E[X]}{a}$$</p><p>Это замечательно, потому что для оценки достаточно знать <em>только среднее</em>.</p><p><strong>Пример:</strong> Средний доход в городе 50 000 ₽. Неравенство Маркова: $P(доход \\geq 250{\\,}000) \\leq 50{\\,}000/250{\\,}000 = 0{,}2$. То есть не более 20% жителей могут зарабатывать такую сумму.</p><p><strong>Ограничение:</strong> Оценка часто грубая. Неравенство Чебышёва точнее, если известна дисперсия.</p>"
          }
        },
        {
          id: "theory-chebyshev",
          title: { hy: "Չեբիշևի անհավասարություն", en: "Chebyshev's Inequality", ru: "Неравенство Чебышёва" },
          content: {
            hy: "<p>Չեբիշևի անհավասարությունը ցույց է տալիս, թե որքանով է մեծությունը «հեռանում» միջինից․</p>$$P(|X - E[X]| \\geq \\epsilon) \\leq \\frac{Var(X)}{\\epsilon^2}$$",
            en: "<p>For any random variable $X$ with finite mean $\\mu$ and variance $\\sigma^2$, and any $\\varepsilon > 0$: $$P(|X - \\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}$$</p><p>This is more informative than Markov's inequality since it uses both mean AND variance.</p><p><strong>Applications:</strong> Used to bound probabilities when the exact distribution is unknown. It works for <em>every</em> distribution.</p><p><strong>Example:</strong> $E[X] = 100$, $\\text{Var}(X) = 25$. Upper bound for $P(|X - 100| \\geq 15)$: $$P(|X-100| \\geq 15) \\leq \\frac{25}{15^2} = \\frac{25}{225} = \\frac{1}{9} \\approx 0.111$$</p>",
            ru: "<p>Для любой случайной величины $X$ с конечными средним $\\mu$ и дисперсией $\\sigma^2$, и любого $\\varepsilon > 0$: $$P(|X - \\mu| \\geq \\varepsilon) \\leq \\frac{\\sigma^2}{\\varepsilon^2}$$</p><p>Это более информативно, чем неравенство Маркова, т.к. использует и среднее, и дисперсию. Работает для <em>любого</em> распределения.</p><p><strong>Пример:</strong> $E[X] = 100$, $\\text{Var}(X) = 25$. Верхняя граница для $P(|X-100| \\geq 15)$: $$P(|X-100| \\geq 15) \\leq \\frac{25}{225} = \\frac{1}{9} \\approx 0{,}111$$</p>"
          }
        },
        {
          id: "theory-lln",
          title: { hy: "Մեծ թվերի օրենքը (LLN)", en: "Law of Large Numbers", ru: "Закон больших чисел" },
          content: {
            hy: "<p><strong>Թույլ օրենք․</strong> Մեծ թվով փորձերի դեպքում միջինը ձգտում է մաթ. սպասմանը:</p><p>Սա բացատրում է, թե ինչու է խաղատունը միշտ շահում երկարաժամկետ հեռանկարում:</p>",
            en: "<p>The LLN comes in two forms:</p><ul><li><strong>Weak LLN (Khinchin):</strong> For i.i.d. variables with mean $\\mu$: $$\\bar{X}_n = \\frac{X_1 + \\cdots + X_n}{n} \\xrightarrow{P} \\mu \\text{ as } n \\to \\infty$$The sample mean converges <em>in probability</em> to the true mean.</li><li><strong>Strong LLN (Kolmogorov):</strong> The same convergence holds <em>almost surely</em> (with probability 1).</li></ul><p><strong>Intuition:</strong> This is why a casino <em>always</em> wins in the long run. Individual luck evens out. Also why polls work: a sample of 1,000 people can accurately represent millions.</p><p><strong>Example:</strong> Fair coin: In 10 flips, you might get 3 heads. In 10,000 flips, you'll almost certainly get close to 5,000 (50%).</p>",
            ru: "<p>ЗБЧ существует в двух формах:</p><ul><li><strong>Слабый ЗБЧ (Хинчин):</strong> Для н.о.р. переменных со средним $\\mu$: $$\\bar{X}_n = \\frac{X_1 + \\cdots + X_n}{n} \\xrightarrow{P} \\mu \\text{ при } n \\to \\infty$$Выборочное среднее сходится <em>по вероятности</em> к истинному среднему.</li><li><strong>Сильный ЗБЧ (Колмогоров):</strong> Та же сходимость выполняется <em>почти наверное</em> (с вероятностью 1).</li></ul><p><strong>Интуиция:</strong> Именно поэтому казино <em>всегда</em> выигрывает в долгосрочной перспективе: отдельные удачи и неудачи нивелируются. Также объясняет, почему опросы работают: выборка в 1000 человек может точно отражать мнение миллионов.</p><p><strong>Пример:</strong> Честная монета: в 10 бросках может выпасть 3 орла. В 10 000 бросках почти наверняка выпадет близко к 5 000 (50%).</p>"
          }
        },
        {
          id: "theory-clt",
          title: { hy: "Կենտրոնական սահմանային թեորեմ", en: "Central Limit Theorem", ru: "ЦПТ" },
          content: {
            hy: "<p><strong>Կ.Ս.Թ.․</strong> Մի շարք անկախ պատահական մեծությունների գումարը ձգտում է <strong>Նորմալ բաշխման</strong>, նույնիսկ եթե հենց այդ մեծությունները նորմալ բաշխված չեն:</p>$$Z = \\frac{\\sum X_i - n\\mu}{\\sigma\\sqrt{n}} \\to N(0, 1)$$",
            en: "<p>One of the most profound theorems in all of mathematics:</p><blockquote><em>The sum (or average) of a large number of independent, identically distributed random variables tends toward a Normal distribution, regardless of the original distribution's shape.</em></blockquote>$$Z_n = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1) \\text{ as } n \\to \\infty$$<p><strong>Why it's revolutionary:</strong> The bell curve appears everywhere in nature — heights, measurement errors, test scores — because they are sums of many small independent effects. The CLT explains WHY.</p><p><strong>Rule of thumb:</strong> For $n \\geq 30$, the CLT approximation is usually good; for non-symmetric or heavy-tailed distributions, larger $n$ may be needed.</p><p><strong>Example:</strong> Roll a die 100 times and sum the results. Each die has $\\mu=3.5$, $\\sigma^2=35/12$. The sum $\\approx N(350, 291.7)$. The CLT is the engine behind all classical statistical inference.</p>",
            ru: "<p>Одна из самых глубоких теорем во всей математике:</p><blockquote><em>Сумма (или среднее) большого числа независимых одинаково распределённых случайных величин стремится к нормальному распределению, независимо от формы исходного распределения.</em></blockquote>$$Z_n = \\frac{\\sum_{i=1}^n X_i - n\\mu}{\\sigma\\sqrt{n}} \\xrightarrow{d} N(0, 1) \\text{ при } n \\to \\infty$$<p><strong>Почему это революционно:</strong> Колоколообразная кривая встречается повсюду в природе — рост, ошибки измерений, результаты тестов — потому что они являются суммами многих малых независимых эффектов. ЦПТ объясняет ПОЧЕМУ.</p><p><strong>Правило на практике:</strong> При $n \\geq 30$ приближение ЦПТ обычно хорошее; для несимметричных или тяжелохвостых распределений нужно большее $n$.</p><p><strong>Пример:</strong> Бросим кубик 100 раз и сложим результаты. Для каждого $\\mu=3{,}5$, $\\sigma^2=35/12$. Сумма $\\approx N(350, 291{,}7)$. ЦПТ — это двигатель всего классического статистического вывода.</p>"
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
      related_theory_hint: {
        hy: "Հիշեք հավանականության դասական բանաձևը՝ P = (Բարենպաստ ելքեր) / (Ընդհանուր ելքեր)։ Զառն ունի 6 նիստ, որոնցից քանի՞սն են կենտ:",
        en: "Recall P = m/n. A die has 6 faces in total. How many of them are odd numbers?",
        ru: "Вспомните формулу P = m/n. У кубика 6 граней. Сколько из них нечетные?"
      },
      related_theory_solution: {
        hy: "Զառը նետելիս հնարավոր են 6 հավասարահնարավոր ելքեր՝ {1, 2, 3, 4, 5, 6}, այսինքն n=6։ Կենտ թվերն են 1, 3, 5, հետևաբար բարենպաստ ելքերի քանակը m=3։ Տեղադրելով դասական բանաձևի մեջ՝ P = m / n = 3 / 6 = 1/2 = 0.5։",
        en: "There are n=6 total possible outcomes. The odd numbers are 1, 3, and 5, so m=3. P = m/n = 3/6 = 0.5.",
        ru: "Всего 6 исходов (n=6). Нечетные это 1, 3, 5, их 3 (m=3). Следовательно, P = 3/6 = 0.5."
      }
    },
    {
      id: 102,
      difficulty: "beginner",
      question: { hy: "2 մետաղադրամ նետելիս, որքա՞ն է հավանականությունը, որ երկուսն էլ «Զինանշան» կլինեն:", en: "Flip 2 coins. Prob of 2 Heads?", ru: "2 монеты. Вероятность 2-х орлов?" },
      answer: "0.25",
      related_theory_id: "theory-multiplication",
      related_theory_hint: {
        hy: "Մետաղադրամները իրարից անկախ են: Կիրառեք բազմապատկման թեորեմը կամ հաշվեք բոլոր հնարավոր 4 ելքերը:",
        en: "The coin flips are independent. Use the multiplication theorem P(A∩B)=P(A)×P(B).",
        ru: "Броски независимы. Используйте теорему умножения P(A∩B)=P(A)×P(B)."
      },
      related_theory_solution: {
        hy: "Քանի որ մետաղադրամների նետումները անկախ են իրարից, յուրաքանչյուրի «Զինանշան» (Գերբ) ընկնելու հավանականությունը 1/2 է։ Երկուսի միաժամանակ զինանշան ընկնելու համար բազմապատկում ենք դրանք՝ 1/2 × 1/2 = 1/4 = 0.25։ Այլ կերպ՝ ընդհանուր ելքերն են ԳԳ, ԳԹ, ԹԳ, ԹԹ (4 ելք), մեզ պետք է 1-ը (ԳԳ), հավանականությունը՝ = 1/4:",
        en: "Probability of Heads on one coin is 1/2. Since events are independent, 1/2 × 1/2 = 1/4 = 0.25.",
        ru: "Вероятность орла на одной монете 1/2. События независимы, поэтому умножаем: 1/2 × 1/2 = 1/4 = 0.25."
      }
    },
    {
      id: 103,
      difficulty: "beginner",
      question: { hy: "Քանի՞ եղանակով կարելի է դասավորել 5 տարբեր գիրք դարակում:", en: "How many ways to arrange 5 different books on a shelf?", ru: "Сколькими способами можно расставить 5 книг?" },
      answer: "120",
      related_theory_id: "theory-permutations",
      related_theory_hint: {
        hy: "Անհրաժեշտ է գտնել բոլոր առարկաների տեղափոխությունների քանակը։ Կիրառեք N-ի ֆակտորիալ բանաձևը (n!):",
        en: "You need to find the number of permutations of 5 items. Use factorial (n!).",
        ru: "Это задача на перестановки 5 элементов. Используйте факториал (n!)."
      },
      related_theory_solution: {
        hy: "5 տարբեր գրքեր դարակում շարելու եղանակների քանակը որոշվում է տեղափոխությունների բանաձևով՝ 5! (ֆակտորիալ)։<br>5! = 1 × 2 × 3 × 4 × 5 = 120։",
        en: "The number of ways to arrange n distinct objects is n!. Here, 5! = 5 × 4 × 3 × 2 × 1 = 120.",
        ru: "Количество перестановок из n элементов равно n!. Здесь 5! = 5 × 4 × 3 × 2 × 1 = 120."
      }
    },
    {
      id: 104,
      difficulty: "beginner",
      question: { hy: "P(A)=0.7: Գտնել լրացուցիչ պատահույթի հավանականությունը:", en: "P(A)=0.7. Find probability of the complement.", ru: "P(A)=0.7. Найти вер. противоположного события." },
      answer: "0.3",
      related_theory_id: "theory-axioms",
      related_theory_hint: {
        hy: "Իրադարձության և նրա միակ լրացուցիչ (հակադիր) իրադարձության հավանականությունների գումարը միշտ հավասար է 1-ի:",
        en: "The sum of probabilities of an event and its complement always equals 1.",
        ru: "Сумма вероятностей события и его дополнения всегда равна 1."
      },
      related_theory_solution: {
        hy: "Անդրեյ Կոլմոգորովի աքսիոմներից բխում է, որ լրացուցիչ իրադարձության հավանականությունը հավասար է 1 - P(A):<br>P(A-ի լրացուցիչ) = 1 - 0.7 = 0.3:",
        en: "The complement formula is P(not A) = 1 - P(A). Thus, 1 - 0.7 = 0.3.",
        ru: "Формула противоположного события: 1 - P(A). Следовательно, 1 - 0.7 = 0.3."
      }
    },

    /* ---- Intermediate ---- */
    {
      id: 201,
      difficulty: "intermediate",
      question: { hy: "Արկղում կա 5 սպիտակ և 4 սև գնդիկ: Հանում են 2 գնդիկ: Որքա՞ն է հավանականությունը, որ երկուսն էլ սպիտակ են:", en: "Urn: 5W, 4B. Draw 2. Prob both White?", ru: "Урна: 5Б, 4Ч. Берем 2. Вероятность 2-х белых?" },
      answer: "0.2778",
      related_theory_id: "theory-combinations",
      related_theory_hint: {
        hy: "Կարող եք լուծել 2 եղանակով. կամ բազմապատկելով հավանականությունները առանց վերադարձի (5/9 * 4/8), կամ զուգորդությունների (Combinations) միջոցով:",
        en: "Solve by multiplying probabilities without replacement (5/9 * 4/8) or using Combinations C(5,2)/C(9,2).",
        ru: "Можно решить умножением вероятностей без возвращения (5/9 * 4/8) или через сочетания C(5,2)/C(9,2)."
      },
      related_theory_solution: {
        hy: "Եղանակ 1 (պայմանական)՝ առաջինը սպիտակ լինելու հավանականությունը 5/9 է։ Երկրորդինը (երբ 1 սպիտակ արդեն հանվել է)՝ 4/8։ Բազմապատկում ենք՝ 5/9 × 4/8 = 20/72 = 5/18 ≈ 0.2778։<br>Եղանակ 2 (զուգորդություններ)՝ C(5,2) / C(9,2) = 10 / 36 = 5/18։",
        en: "Method 1: (5/9) × (4/8) = 20/72 = 0.2778. Method 2: C(5,2) / C(9,2) = 10 / 36 = 5/18.",
        ru: "Метод 1: (5/9) × (4/8) = 20/72 = 0.2778. Метод 2: C(5,2) / C(9,2) = 10 / 36 = 5/18."
      }
    },
    {
      id: 202,
      difficulty: "intermediate",
      question: { hy: "3 կրակոցից (p=0.4) գոնե մեկ անգամ կպնելու հավանականությունը:", en: "3 shots (p=0.4). Prob of at least 1 hit?", ru: "3 выстрела (p=0.4). Хотя бы 1 попадание?" },
      answer: "0.784",
      related_theory_id: "theory-binomial",
      related_theory_hint: {
        hy: "«Գոնե մեկ» գտնելու ամենահեշտ ճանապարհը հակադիր իրադարձության միջոցով հաշվելն է. 1 - P(ոչ մի անգամ):",
        en: "The easiest way to find 'at least one' is using the complement: 1 - P(none).",
        ru: "Проще всего найти 'хотя бы одно' через противоположное событие: 1 - P(ни одного)."
      },
      related_theory_solution: {
        hy: "Գոնե մեկ անգամ դիպչելու լրացուցիչ իրադարձությունն այն է, որ որսորդը ԲՈԼՈՐ 3 կրակոցների դեպքում վրիպի։ Վրիպելու հավանականությունը q = 1 - 0.4 = 0.6 է։ Երեք անգամ անընդմեջ վրիպելը՝ 0.6³ = 0.216։ Ուստի գոնե մեկ դիպչելը կլինի 1 - 0.216 = 0.784։",
        en: "Miss probability is 1 - 0.4 = 0.6. Missing 3 times in a row is 0.6³ = 0.216. P(at least 1 hit) = 1 - 0.216 = 0.784.",
        ru: "Вероятность промаха 1 - 0.4 = 0.6. Три промаха: 0.6³ = 0.216. В(хотя бы 1 попадание) = 1 - 0.216 = 0.784."
      }
    },
    {
      id: 203,
      difficulty: "intermediate",
      question: { hy: "Զառը նետում ենք 2 անգամ: Որքա՞ն է հավանականությունը, որ գումարը 10 է:", en: "Roll a die twice. Prob that sum is 10?", ru: "Два броска кубика. Вероятность суммы 10?" },
      answer: "0.0833",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: {
        hy: "Երկու զառի համար ընդհանուր ելքերի քանակը 36 է։ Քանի՞ զույգ կարող է տալ 10 գումար։",
        en: "Total outcomes for 2 dice is 36. List the pairs that sum up to 10.",
        ru: "У двух кубиков 36 исходов. Выпишите все пары, дающие сумму 10."
      },
      related_theory_solution: {
        hy: "Երկու զառ նետելիս հնարավոր ելքերի ընդհանուր քանակը 6 × 6 = 36 է։ Այն ելքերը, որոնց գումարը 10 է, հետևյալն են՝ (4,6), (5,5), և (6,4)։ Բարենպաստ ելքերի քանակը 3 է։ P = 3 / 36 = 1 / 12 ≈ 0.0833։",
        en: "Total outcomes = 36. Favorable outcomes for sum of 10 are (4,6), (5,5), (6,4), which is 3. P = 3/36 = 1/12 ≈ 0.0833.",
        ru: "Всего исходов 36. Благоприятных (сумма 10) три: (4,6), (5,5), (6,4). P = 3/36 = 1/12 ≈ 0.0833."
      }
    },

    /* ---- Advanced ---- */
    {
      id: 301,
      difficulty: "advanced",
      question: { hy: "X ~ N(0, 1): Գտնել P(|X| < 2) (մոտավոր, 2 նիշ):", en: "X ~ N(0,1). Find P(|X| < 2).", ru: "X ~ N(0,1). Найти P(|X| < 2)." },
      answer: "0.95",
      related_theory_id: "theory-normal",
      related_theory_hint: {
        hy: "Կիրառեք նորմալ բաշխման 68-95-99.7 էմպիրիկ կանոնը (երեք սիգմայի կանոն): Ի՞նչ է նշանակում |X| < 2:",
        en: "Use the 68-95-99.7 empirical rule for Normal distribution. What does |X| < 2 mean?",
        ru: "Используйте эмпирическое правило 68-95-99.7 (правило трех сигм). Что значит |X| < 2?"
      },
      related_theory_solution: {
        hy: "Քանի որ X-ը ստանդարտ նորմալ բաշխում ունի (μ=0, σ=1), |X| < 2 նշանակում է X-ը գտնվում է միջինից 2σ հեռավորության վրա ([-2, 2] միջակայքում)։ Ըստ 68-95-99.7 կանոնի, տվյալների մոտ 95%-ը ընկնում է 2σ սահմաններում: P(|X| < 2) ≈ 0.95։",
        en: "For a standard normal distribution (mean 0, std dev 1), the 68-95-99.7 rule states that ~95% of data falls within 2 standard deviations. So P(-2 < X < 2) ≈ 0.95.",
        ru: "Для стандартного нормального распределения правило трех сигм гласит, что ~95% данных попадает в интервал 2σ. Значит, P(-2 < X < 2) ≈ 0.95."
      }
    },
    {
      id: 302,
      difficulty: "advanced",
      question: { hy: "Հեռախոսակայան ստացվում է միջինում 2 զանգ րոպեում (Պուասոն)։ Գտեք 0 զանգ ստանալու հավանականությունը մեկ րոպեում:", en: "Avg 2 calls/min (Poisson). Prob of 0 calls in a minute?", ru: "В среднем 2 звонка в мин (Пуассон). Вер. 0 звонков?" },
      answer: "0.1353",
      related_theory_id: "theory-poisson",
      related_theory_hint: {
        hy: "Կիրառեք Պուասոնի բանաձևը՝ P(k) = (λ^k * e^-λ) / k! որտեղ λ-ն միջին արժեքն է, իսկ k-ն՝ զանգերի քանակը։",
        en: "Use Poisson formula: P(k) = (λ^k * e^-λ) / k!. Here λ=2 and k=0.",
        ru: "Формула Пуассона: P(k) = (λ^k * e^-λ) / k!. Здесь λ=2, k=0."
      },
      related_theory_solution: {
        hy: "Այստեղ միջինը (λ) = 2, իսկ մեզ հետաքրքրող քանակը (k) = 0։ Տեղադրելով Պուասոնի բանաձևի մեջ. P(0) = (2⁰ × e⁻²) / 0! = 1 × e⁻² / 1 = e⁻²։ Քանի որ e ≈ 2.718, e⁻² ≈ 0.1353:",
        en: "Given λ = 2 events/min, we want k = 0 events. P(0) = (2^0 × e^-2) / 0! = e^-2 ≈ 0.1353.",
        ru: "Дано λ = 2. Ищем P(0) = (2^0 × e^-2) / 0! = e^-2 ≈ 0.1353."
      }
    },
    {
      id: 305,
      difficulty: "advanced",
      question: { hy: "Բայեսի խնդիր: հիվանդության հաճախականությունը 1% է: Թեստի ճշտությունը՝ 99%: Թեստը դրական է: Հավանականությունը, որ մարդը հիվանդ է?", en: "Prevalence 1%. Test acc 99%. Test Positive. Prob diseased?", ru: "Частота 1%. Тест 99%. Плюс. Болен?" },
      answer: "0.5",
      related_theory_id: "theory-bayes",
      related_theory_hint: {
        hy: "Զգուշացեք հայտնի տրամաբանական ծուղակից։ Թեստի արդյունքը և իրական հիվանդությունը նույնը չեն: Կիրառեք Բայեսի թեորեմը կամ Լրիվ հավանականության բանաձևը հայտարարում:",
        en: "Watch out for the base rate fallacy! Apply Bayes' Theorem properly.",
        ru: "Не попадитесь в ловушку базового процента! Примените теорему Байеса."
      },
      related_theory_solution: {
        hy: "Դիցուք P(D)-ն հիվանդ լինելն է՝ 0.01։ P(+|D)-ն (դրական, երբ հիվանդ է) 0.99 է։ Առողջի (չհիվանդի) դեպքում P(H) = 0.99, իսկ թեստի սխալմամբ դրական ցույց տալու հավանականությունը (կեղծ դրական) P(+|H) = 0.01 է։<br>Բայեսով՝ P(D|+) = [0.01 × 0.99] / [0.01 × 0.99 + 0.99 × 0.01] = 0.0099 / 0.0198 = 0.5 (կամ 50%):<br>Ահա թե ինչու միայն մեկ թեստը բավարար չէ հազվադեպ հիվանդությունների համար:",
        en: "P(Disease) = 0.01. P(Positive | Disease) = 0.99. P(Healthy) = 0.99. P(Positive | Healthy) = 0.01.<br>Bayes: (0.01 × 0.99) / (0.01 × 0.99 + 0.99 × 0.01) = 0.5.",
        ru: "P(Болен) = 0.01. P(Тест+ | Болен) = 0.99. P(Здоров) = 0.99. P(Тест+ | Здоров) = 0.01.<br>Байес: (0.01 × 0.99) / (0.01 × 0.99 + 0.99 × 0.01) = 0.5."
      }
    },

    /* ---- Olympic ---- */
    {
      id: 401,
      difficulty: "olympic",
      question: { hy: "Բերտրանի պարադոքս․ Եթե պատահական լարը ընտրվում է ըստ միջնակետի դիրքի, որքա՞ն է հավանականությունը, որ այն երկար է ներգծած եռանկյունու կողմից:", en: "Bertrand Paradox (midpoint method). Prob chord > triangle side?", ru: "Парадокс Бертрана (метод середины)." },
      answer: "0.25",
      related_theory_id: "theory-rv-pdf",
      related_theory_hint: {
        hy: "Մտածեք «միջնակետի մեթոդի» մասին։ Որտե՞ղ պետք է գտնվի լարի միջնակետը, որպեսզի լարն ավելի երկար լինի, քան կանոնավոր եռանկյան կողմը: Դիտարկեք մակերեսների հարաբերությունը:",
        en: "Consider the 'midpoint method'. Where must the chord's midpoint lie? Think about the ratio of areas.",
        ru: "Подумайте о 'методе середины'. Где должна лежать середина хорды? Рассмотрите отношение площадей."
      },
      related_theory_solution: {
        hy: "Եթե պատահականորեն ընտրում ենք կետ որպես լարի միջնակետ նախնական շրջանի ներսում, ապա լարը մեծ կլինի եռանկյան կողմից, եթե այդ միջնակետը գտնվի եռանկյանը ներգծած շրջանագծի ներսում։ Ներգծած շրջանագծի շառավիղը մեծ շրջանագծի շառավղի կեսն է (r = R/2)։ Մակերեսների հարաբերությունը՝ π(R/2)² / πR² = 1/4 = 0.25։",
        en: "The midpoint must lie within the incircle of the triangle. The incircle has half the radius of the outer circle, so its area is 1/4th. Thus, P = 0.25.",
        ru: "Середина хорды должна находиться внутри вписанной окружности. Радиус вписанной окружности вдвое меньше, поэтому её площадь составляет 1/4. P = 0.25."
      }
    },
    {
      id: 402,
      difficulty: "olympic",
      question: { hy: "E(X)=10: Չեբիշևով գտեք P(X > 20) վերին սահմանը, եթե Var(X)=5 (օգտագործեք միակողմանի տարբերակը կամ ստանդարտը):", en: "E(X)=10, Var(X)=5. Chebyshev upper bound for P(X > 20)?", ru: "E(X)=10, Var(X)=5. Граница Чебышёва для P(X > 20)?" },
      answer: "0.05",
      related_theory_id: "theory-chebyshev",
      related_theory_hint: {
        hy: "Կիրառեք Չեբիշևի անհավասարությունը՝ P(|X - μ| ≥ k) ≤ Var(X) / k²։ Ուշադրություն դարձրեք, որ կամայական բաշխման համար P(X - μ ≥ k) ≤ Var(X) / k² կարող է նաև օգտագործվել միակողմանի: Ստանդարտ մոտեցմամբ հաշվեք P(|X-10| ≥ 10)-ի արժեքը։",
        en: "Use Chebyshev's inequality P(|X - μ| ≥ k) ≤ Var(X) / k². Here μ=10, k=10.",
        ru: "Используйте неравенство Чебышёва P(|X - μ| ≥ k) ≤ Var(X) / k². Здесь μ=10, k=10."
      },
      related_theory_solution: {
        hy: "Ըստ Չեբիշևի անհավասարության. P(|X - μ| ≥ k) ≤ Var(X) / k²։ Մեզ տրված է E(X) = μ = 10, Var(X) = 5։ Որպեսզի X > 20, պետք է շեղումը միջինից լինի գոնե k = 10։<br>P(|X - 10| ≥ 10) ≤ 5 / 10² = 5 / 100 = 0.05։",
        en: "Chebyshev states P(|X - μ| ≥ k) ≤ Var(X)/k². With μ=10, Var(X)=5, and k=10: P(|X-10|>10) ≤ 5/100 = 0.05.",
        ru: "Неравенство Чебышёва: P(|X - μ| ≥ k) ≤ Var(X)/k². При μ=10, Var(X)=5, и k=10: P(|X-10|>10) ≤ 5/100 = 0.05."
      }
    },
    {
      id: 110,
      difficulty: "beginner",
      question: { hy: "Տրված են P(A)=0.3, P(B)=0.2 և P(A∩B)=0.1: Գտնել P(A∪B):", en: "Given P(A)=0.3, P(B)=0.2 and P(A∩B)=0.1. Find P(A∪B).", ru: "Дано P(A)=0.3, P(B)=0.2 и P(A∩B)=0.1. Найти P(A∪B)." },
      answer: "0.4",
      related_theory_id: "theory-addition",
      related_theory_hint: {
        hy: "Կիրառեք հավանականությունների գումարման թեորեմը համատեղելի պատահույթների համար։ P(A∪B) = P(A) + P(B) - ?",
        en: "Use the Addition Rule for non-mutually exclusive events: P(A∪B) = P(A) + P(B) - P(A∩B).",
        ru: "Используйте теорему сложения для совместных событий: P(A∪B) = P(A) + P(B) - P(A∩B)."
      },
      related_theory_solution: {
        hy: "Համատեղելի իրադարձությունների գումարման բանաձևն է՝ P(A∪B) = P(A) + P(B) - P(A∩B)։ Տեղադրելով թվերը կստանանք՝ 0.3 + 0.2 - 0.1 = 0.4։",
        en: "Using the inclusion-exclusion principle for probabilities: P(A∪B) = P(A) + P(B) - P(A∩B) = 0.3 + 0.2 - 0.1 = 0.4.",
        ru: "Принцип включения-исключения: P(A∪B) = P(A) + P(B) - P(A∩B) = 0.3 + 0.2 - 0.1 = 0.4."
      }
    },
    {
      id: 111,
      difficulty: "beginner",
      question: { hy: "52 թղթախաղից ընտրում ենք մեկ քարտ: Որքա՞ն է հավանականությունը, որ այն կլինի կարմիր կամ թագավոր:", en: "Draw one card from a 52-card deck. What is the probability it's either red or a king?", ru: "Из колоды в 52 карты вынимают одну. Какова вероятность, что это красная карта или король?" },
      answer: "0.5385",
      related_theory_id: "theory-addition",
      related_theory_hint: {
        hy: "Քանի՞ կարմիր քարտ կա: Քանի՞ թագավոր կա: Ուշադրություն դարձրեք, որ կան կարմիր թագավորներ՝ մի հաշվեք դրանք կրկնակի:",
        en: "How many red cards? How many kings? Don't double-count the red kings!",
        ru: "Сколько красных карт? Сколько королей? Не считайте красных королей дважды!"
      },
      related_theory_solution: {
        hy: "Կա 26 կարմիր քարտ և 4 թագավոր։ Նրանցից 2-ը համ կարմիր են, համ թագավոր (կարմիր թագավորներ)։ Ըստ գումարման բանաձևի՝ 26/52 + 4/52 - 2/52 = 28/52 ≈ 0.5385։",
        en: "There are 26 red cards and 4 kings. 2 of those kings are red. P(Red U King) = 26/52 + 4/52 - 2/52 = 28/52 = 7/13 ≈ 0.5385.",
        ru: "26 красных карт и 4 короля. Из них 2 — красные короли. P(Кр U Король) = 26/52 + 4/52 - 2/52 = 28/52 ≈ 0.5385."
      }
    },
    {
      id: 210,
      difficulty: "intermediate",
      question: { hy: "Նետում ենք երկու կանոնավոր քառանիստ զառ (նիստերը՝ 1,2,3,4): Որքա՞ն է հավանականությունը, որ բացված թվերի գումարը կլինի 5:", en: "Roll two regular tetrahedral dice (faces 1,2,3,4). What is the probability the sum is 5?", ru: "Бросают два правильных тетраэдрических кубика (грани 1,2,3,4). Какова вероятность, что сумма выпавших очков равна 5?" },
      answer: "0.25",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: {
        hy: "Հաշվեք բոլոր հնարավոր ելքերի քանակը (համարեք, որ զառերը 4 նիստանի են), որից հետո գտեք այն զույգերը, որոնց գումարը 5 է:",
        en: "Find the total number of outcomes for two 4-sided dice. Then find how many pairs sum to 5.",
        ru: "Найдите общее число исходов для двух 4-гранных кубиков. Затем найдите пары, дающие в сумме 5."
      },
      related_theory_solution: {
        hy: "Քառանիստ զառի նետման դեպքում յուրաքանչյուր զառ ունի 4 հնարավոր ելք։ Երկու զառերի համար՝ 4 × 4 = 16 ընդհանուր ելք: 5 գումար տվող զույգերն են՝ (1,4), (2,3), (3,2), (4,1)՝ ընդամենը 4 բարենպաստ ելք։ P = 4 / 16 = 1/4 = 0.25։",
        en: "Total outcomes for two 4-sided dice = 4 × 4 = 16. Favorable outcomes: (1,4), (2,3), (3,2), (4,1) -> 4 pairs. P = 4/16 = 0.25.",
        ru: "Всего исходов: 4 × 4 = 16. Благоприятные: (1,4), (2,3), (3,2), (4,1) — 4 пары. P = 4/16 = 0.25."
      }
    },
    {
      id: 211,
      difficulty: "intermediate",
      question: { hy: "Պարկում կա 3 կարմիր և 4 կանաչ գնդակ: Հանում ենք 2 գնդակ: Գտնել հանված կարմիր գնդակների քանակի մաթեմատիկական սպասումը:", en: "A bag has 3 red and 4 green balls. Draw 2. Find the expected number of red balls drawn.", ru: "В сумке 3 красных и 4 зеленых шара. Вынимают 2. Найти мат. ожидание числа красных шаров." },
      answer: "0.8571",
      related_theory_id: "theory-rv-props",
      related_theory_hint: {
        hy: "Մաթեմատիկական սպասումը գծային է՝ անկախ նրանից գնդակները հանում ենք վերադարձով, թե առանց վերադարձի: E(X) = n * p, որտեղ p-ն մեկ գնդակի կարմիր լինելու հավանականությունն է:",
        en: "Expectation is linear: E(X) = n * p, even without replacement. What is p for a single draw?",
        ru: "Математическое ожидание линейно: E(X) = n * p, даже без возвращения. Чему равно p для одного шара?"
      },
      related_theory_solution: {
        hy: "1 գնդակի պարագայում կարմիր դուրս գալու հավանականությունը p = 3/7 է։ Քանի որ մաթեմատիկական սպասումը գծային հատկություն ունի (E(X+Y) = E(X) + E(Y)), ընկերություն չունի, որ գնդակները հանվում են առանց վերադարձի։ Երկու գնդակի (n=2) համար E(X) = 2 × (3/7) = 6/7 ≈ 0.8571։",
        en: "By linearity of expectation, E(X) = n * P(Red on single draw) = 2 * (3/7) = 6/7 ≈ 0.8571.",
        ru: "В силу линейности мат. ожидания, E(X) = n * P(красный при 1 извлечении) = 2 * (3/7) = 6/7 ≈ 0.8571."
      }
    },
    {
      id: 310,
      difficulty: "advanced",
      question: { hy: "Արդյունաբերական թափոնների 69%-ը հանքային են, 28%-ը՝ ոչ հանքային, 3%-ը՝ վտանգավոր։ Վերամշակվում է հանքայինի 73%-ը, ոչ հանքացինի 49%-ը և վտանգավորի 35%-ը։ Գտեք պատահական ընտրված թափոնի վերամշակվելու հավանականությունը:", en: "69% minerals (73% recycle), 28% non-minerals (49% recycle), 3% dangerous (35% recycle). Find total recycling probability.", ru: "69% минералы (73% переработка), 28% неминералы (49% переработка), 3% опасные (35% переработка). Найти общую вер. переработки." },
      answer: "0.6514",
      related_theory_id: "theory-bayes",
      related_theory_hint: {
        hy: "Կիրառեք Լրիվ հավանականության բանաձևը։ Գումարեք յուրաքանչյուր խմբի հանդիպելու հավանականության և այդ խմբի վերամշակման հավանականության արտադրյալները:",
        en: "Use the Law of Total Probability to find the weighted average of recycling rates.",
        ru: "Используйте формулу полной вероятности (взвешенное среднее вероятностей)."
      },
      related_theory_solution: {
        hy: "Ըստ լրիվ հավանականության բանաձևի՝ P = P(H)*P(V|H) + P(Ո)*P(V|Ո) + P(Վտ)*P(V|Վտ) = 0.69 × 0.73  +  0.28 × 0.49  +  0.03 × 0.35 = 0.5037 + 0.1372 + 0.0105 = 0.6514։",
        en: "Law of Total Probability: P = (0.69 × 0.73) + (0.28 × 0.49) + (0.03 × 0.35) = 0.5037 + 0.1372 + 0.0105 = 0.6514.",
        ru: "Формула полной вероятности: P = (0.69 × 0.73) + (0.28 × 0.49) + (0.03 × 0.35) = 0.5037 + 0.1372 + 0.0105 = 0.6514."
      }
    },
    {
      id: 410,
      difficulty: "olympic",
      question: { hy: "Պատահական մեծության E(X)=100, Var(X)=25: Չեբիշևի անհավասարության օգնությամբ հաշվեք P(|X-100| ≥ 15) վերին սահմանը:", en: "E(X)=100, Var(X)=25. Use Chebyshev to find upper bound for P(|X-100| ≥ 15).", ru: "E(X)=100, Var(X)=25. Верхняя граница P(|X-100| ≥ 15) по Чебышёву?" },
      answer: "0.1111",
      related_theory_id: "theory-chebyshev",
      related_theory_hint: {
        hy: "Կիրառեք Չեբիշևի անհավասարությունը՝ P(|X - μ| ≥ k) ≤ Var(X) / k²։ Ուշադրություն դարձրեք, որ k = 15:",
        en: "Apply Chebyshev's inequality P(|X - μ| ≥ k) ≤ Var(X) / k² with k=15.",
        ru: "Примените неравенство Чебышёва P(|X - μ| ≥ k) ≤ Var(X) / k² при k=15."
      },
      related_theory_solution: {
        hy: "Ըստ Չեբիշևի անհավասարության. P(|X - μ| ≥ k) ≤ Var(X) / k²։ Այստեղ E(X) = μ = 100, իսկ շեղումը k = 15 է։<br>P(|X - 100| ≥ 15) ≤ 25 / 15² = 25 / 225 = 1 / 9 ≈ 0.1111։",
        en: "Chebyshev's inequality: P(|X - μ| ≥ k) ≤ Var(X) / k². Here k = 15. So 25 / (15^2) = 25 / 225 = 1/9 ≈ 0.1111.",
        ru: "Неравенство Чебышёва: P(|X - μ| ≥ k) ≤ Var(X) / k². Здесь k = 15. 25 / (15^2) = 25 / 225 = 1/9 ≈ 0.1111."
      }
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
          answer: `${red}/${total}`,
          related_theory_id: "theory-classical-prob",
          related_theory_hint: {
            hy: `Ընդհանուր գնդակների քանակը ${total} է։ Որքա՞ն է կարմիրների քանակը։`,
            en: `Total balls = ${total}. How many are red?`,
            ru: `Всего шаров ${total}. Сколько из них красные?`
          },
          related_theory_solution: {
            hy: `Դասական հավանականության բանաձևով m/n: Ընդհանուր՝ n = ${red} + ${blue} = ${total}։ Կարմիր՝ m = ${red}։ Այսպիսով՝ P = ${red}/${total}։`,
            en: `Total n = ${total}, red m = ${red}. P = m/n = ${red}/${total}.`,
            ru: `Всего n = ${total}, красных m = ${red}. P = m/n = ${red}/${total}.`
          }
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
          answer: String(ans),
          related_theory_id: "theory-combinations",
          related_theory_hint: {
            hy: `Հերթապահների հերթականությունը էական չէ։ Օգտագործեք զուգորդությունների (Combinations) C(${n}, ${k}) բանաձևը։`,
            en: `Order does not matter. Use combinations C(${n}, ${k}).`,
            ru: `Порядок не важен. Используйте сочетания C(${n}, ${k}).`
          },
          related_theory_solution: {
            hy: `Քանի որ կարգը կարևոր չէ, հաշվում ենք զուգորդություն: C(${n}, ${k}) = ${n}! / (${k}! × (${n}-${k})!) = ${ans}։`,
            en: `Calculate C(${n}, ${k}) = ${n}! / (${k}! × (${n}-${k})!) = ${ans}.`,
            ru: `Вычислите C(${n}, ${k}) = ${n}! / (${k}! × (${n}-${k})!) = ${ans}.`
          }
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
          answer: prob.toFixed(4),
          related_theory_id: "theory-bernoulli",
          related_theory_hint: {
            hy: `Կիրառեք Բեռնուլիի բանաձևը. P(k) = C(${n}, k) × p^k × q^(${n}-k): Այստեղ p=0.5, q=0.5:`,
            en: `Use Bernoulli's formula: P(k) = C(n,k) p^k q^(n-k).`,
            ru: `Используйте формулу Бернулли: P(k) = C(n,k) p^k q^(n-k).`
          },
          related_theory_solution: {
            hy: `Բեռնուլիի բանաձևով P(${target}) = C(${n}, ${target}) × (0.5)^${target} × (0.5)^${n - target} = C(${n}, ${target}) × 0.5^${n} ≈ ${prob.toFixed(4)}։`,
            en: `P(${target}) = C(${n}, ${target}) × (0.5)^${n} ≈ ${prob.toFixed(4)}.`,
            ru: `P(${target}) = C(${n}, ${target}) × (0.5)^${n} ≈ ${prob.toFixed(4)}.`
          }
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
          answer: `${fav}/36`,
          related_theory_id: "theory-classical-prob",
          related_theory_hint: {
            hy: `2 զառի արդյունքների ընդհանուր քանակը քանի՞սն է։ Թվարկեք այն զույգերը, որոնց գումարը տալիս է ${sum}:`,
            en: `Total outcomes is 36. List the pairs that sum up to ${sum}.`,
            ru: `Всего исходов 36. Выпишите все пары, дающие сумму ${sum}.`
          },
          related_theory_solution: {
            hy: `Ընդհանուր ելքերի քանակը՝ 6 × 6 = 36։ Ելքերը, որոնք տալիս են ${sum} գումար պետք է հաշվել ձեռքով։ Դրանց քանակն է՝ ${fav}։ Հավանականությունը՝ P = ${fav} / 36։`,
            en: `Total outcomes = 36. Number of favorable pairs = ${fav}. P = ${fav}/36.`,
            ru: `Всего исходов 36. Благоприятных: ${fav}. P = ${fav}/36.`
          }
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
          answer: ((2 * l) / (3.14159 * L)).toFixed(3),
          related_theory_id: "theory-geometric-prob",
          related_theory_hint: {
            hy: `Հիշեք Բյուֆոնի ասեղի դասական բանաձևը. P = (2 × l) / (π × L)։Տեղադրեք արժեքները:`,
            en: `Formula is P = (2 × l) / (π × L).`,
            ru: `Формула P = (2 × l) / (π × L).`
          },
          related_theory_solution: {
            hy: `Բանաձևն է՝ (2 × l) / (π × L) = (2 × ${l}) / (3.14159 × ${L}) = ${2 * l} / ${(3.14159 * L).toFixed(2)} ≈ ${((2 * l) / (3.14159 * L)).toFixed(3)}։`,
            en: `(2 × ${l}) / (3.14159 × ${L}) ≈ ${((2 * l) / (3.14159 * L)).toFixed(3)}.`,
            ru: `(2 × ${l}) / (3.14159 × ${L}) ≈ ${((2 * l) / (3.14159 * L)).toFixed(3)}.`
          }
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
