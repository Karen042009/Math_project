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
      title: { hy: "0. Հավանականությունների տեսության պատմություն", en: "0. History of Probability", ru: "0. История теории вероятностей" },
      subsections: [
        {
          id: "history-origins",
          title: { hy: "Ծագումը և Պասկալ-Ֆերմա նամակագրությունը", en: "Origins & Pascal-Fermat Letters", ru: "Истоки и переписка Паскаля-Ферма" },
          content: {
            hy: "<p>Հավանականությունների տեսությունը սկսեց ձևավորվել 17-րդ դարի կեսերին։ Ամեն ինչ սկսվեց <strong>1654 թվականին</strong>, երբ Շևալյե դե Մերեն դիմեց <strong>Բլեզ Պասկալին</strong>՝ խնդրելով լուծել մոլախաղերի հետ կապված գլուխկոտրուկներ (օրինակ՝ ինչպես արդար բաժանել խաղադրույքը, եթե խաղն ընդհատվել է)։</p><p>Պասկալը սկսեց նամակագրություն <strong>Պիեռ Ֆերմայի</strong> հետ։ Այս նամակները համարվում են ժամանակակից հավանականությունների տեսության հիմնաքարը։ Նրանք լուծեցին «խաղադրույքների բաժանման» խնդիրը, որը մինչ այդ համարվում էր անլուծելի:</p>",
            en: "<p>Modern probability theory began in <strong>1654</strong> with the correspondence between <strong>Blaise Pascal</strong> and <strong>Pierre de Fermat</strong>. They solved the famous 'Problem of Points' (how to divide stakes in an unfinished game), which had baffled mathematicians for centuries. This marked the birth of mathematical probability.</p>",
            ru: "<p>Теория вероятностей зародилась в 1654 году из переписки Паскаля и Ферма, решивших задачу о разделе ставки.</p>"
          }
        },
        {
          id: "history-classic-era",
          title: { hy: "Դասական փուլ․ Հյույգենսից մինչև Լապլաս", en: "Classic Era: From Huygens to Laplace", ru: "Классическая эра: от Гюйгенса до Лапласа" },
          content: {
            hy: "<ul><li><strong>Քրիստիան Հյույգենս (1657)․</strong> Հրատարակեց «De ratiociniis in ludo aleae»՝ առաջին դասագիրքը, որտեղ ներմուծեց մաթեմատիկական սպասման գաղափարը։</li><li><strong>Յակոբ Բեռնուլի (1713)․</strong> «Ars Conjectandi»-ում ապացուցեց Մեծ թվերի օրենքի առաջին տարբերակը։</li><li><strong>Աբրահամ դե Մուավր (1718)․</strong> Հրատարակեց «The Doctrine of Chances»-ը և բացահայտեց Նորմալ կորի բանաձևը։</li><li><strong>Թոմաս Բայես (1763)․</strong> Ներմուծեց «հակադարձ հավանականության» գաղափարը, որն այսօր Բայեսյան վիճակագրության հիմքն է։</li><li><strong>Պիեռ-Սիմոն Լապլաս (1812)․</strong> Իր «Théorie Analytique»-ում հավանականությունը վերածեց հզոր մաթեմատիկական գործիքի՝ կիրառելով այն աստղագիտության և ժողովրդագրության մեջ։</li></ul>",
            en: "<ul><li><strong>Christiaan Huygens (1657):</strong> Wrote the first textbook, introducing 'Expected Value'.</li><li><strong>Jacob Bernoulli (1713):</strong> Proved the first Law of Large Numbers.</li><li><strong>Abraham de Moivre (1718):</strong> Discovered the formula for the Normal Curve in 'The Doctrine of Chances'.</li><li><strong>Thomas Bayes (1763):</strong> Introduced 'Inverse Probability', the foundation of Bayesian stats.</li><li><strong>Pierre-Simon Laplace (1812):</strong> Unified the field and applied it to science and demographics.</li></ul>",
            ru: "<ul><li>Развитие теории усилиями Бернулли, Де Муавра, Байеса и Лапласа.</li></ul>"
          }
        },
        {
          id: "history-modern",
          title: { hy: "Աքսիոմատիկ և Վիճակագրական փուլ", en: "Axiomatic & Statistical Era", ru: "Аксиоматика и Статистика" },
          content: {
            hy: "<p>20-րդ դարում հավանականությունը դարձավ գիտության հիմնասյունը․</p><ul><li><strong>Անդրեյ Կոլմոգորով (1933)․</strong> Տվեց աքսիոմատիկ հիմքը՝ կապելով հավանականությունը բազմությունների և չափի տեսության հետ։</li><li><strong>Ռոնալդ Ֆիշեր․</strong> Ստեղծեց ժամանակակից վիճակագրության մեթոդները (Maximum Likelihood, ANOVA)։</li><li><strong>Կլոդ Շենոն․</strong> Կապեց հավանականությունը ինֆորմացիայի տեսության հետ։</li></ul>",
            en: "<p>In the 20th century, probability became rigorous:</p><ul><li><strong>Andrey Kolmogorov (1933):</strong> Established the Axiomatic basis.</li><li><strong>Ronald Fisher:</strong> Revolutionized statistics with experimental design.</li><li><strong>Claude Shannon:</strong> Linked probability to Information Theory.</li></ul>",
            ru: "<p>Колмогоров (аксиоматика), Фишер (статистика) и Шеннон (теория информации).</p>"
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
            hy: "<p>Հավանականությունների տեսությունը մաթեմատիկայի այն բաժինն է, որը զբաղվում է պատահական երևույթների մոդելավորմամբ և պատահականության վերլուծությամբ։ Այն մաթեմատիկական հիմք է հանդիսանում վիճակագրության համար, ինչպես նաև հաջողությամբ կիրառվում է քվանտային ֆիզիկայի, քիմիայի, կենսաբանության և այլ գիտությունների մեջ։</p><p>Հիմնական գաղափարը <strong>պատահույթն</strong> է:</p>",
            en: "<p>Probability theory is the branch of mathematics concerned with probability. It models random phenomena and serves as the foundation for statistics, physics, and more.</p>",
            ru: "<p>Теория вероятностей — раздел математики, изучающий закономерности случайных явлений.</p>"
          }
        },
        {
          id: "theory-interpretations",
          title: { hy: "Ինտերպրետացիաներ․ Ֆրեկվենտիստ vs Բայեսյան", en: "Interpretations: Frequentist vs Bayesian", ru: "Интерпретации: Частотник против Байеса" },
          content: {
            hy: "<p>Գոյություն ունի հավանականության երկու հիմնական հայացք․</p><ul><li><strong>Ֆրեկվենտիստական․</strong> Հավանականությունը իրադարձության հարաբերական հաճախականությունն է երկարաժամկետ փորձերի դեպքում (օր․՝ մետաղադրամի 10000 նետում)։</li><li><strong>Բայեսյան․</strong> Հավանականությունը «համոզմունքի աստիճանն է» կամ վստահությունը իրադարձության նկատմամբ, որը կարող է փոխվել նոր տվյալների ստացման դեպքում։</li></ul>",
            en: "<p>Two main schools of thought:</p><ul><li><strong>Frequentist:</strong> Probability is the long-run frequency of events (e.g., flipping a coin 10,000 times).</li><li><strong>Bayesian:</strong> Probability is a 'degree of belief' or certainty, updated as new evidence arrives.</li></ul>",
            ru: "<p>Как понимать вероятность: как частоту (частотники) или как уверенность (байесовцы).</p>"
          }
        },
        {
          id: "theory-events-intuitive",
          title: { hy: "Պատահական իրադարձության գաղափարը", en: "Key Concept of Event", ru: "Понятие события" },
          content: {
            hy: "<p><strong>Պատահույթ</strong> (պատահական իրադարձություն) կոչվում է այնպիսի իրադարձություն, որը որոշակի պայմաններում կարող է տեղի ունենալ կամ տեղի չունենալ:</p><p><strong>Օրինակներ՝</strong></p><ul><li>Կրակելիս թիրախին դիպչելը:</li><li>Ֆուտբոլիստի հարվածից հետո գոլ լինելը:</li></ul><p>Եթե փորձառու որսորդը և սկսնակը կրակում են թիրախին, որսորդի դիպչելու հավանականությունն ավելի մեծ է: Սա նշանակում է, որ $P(A)$ թիվը միշտ պատկանում է $[0, 1]$ միջակայքին:</p>",
            en: "<p>A <strong>random event</strong> is an event that may or may not occur under certain conditions. Probability $P(A)$ is always in range $[0, 1]$.</p>",
            ru: "<p>Случайное событие — событие, которое может произойти или не произойти.</p>"
          }
        },
        {
          id: "theory-axioms",
          title: { hy: "Հավանականության Աքսիոմները", en: "Axioms of Probability", ru: "Аксиомы вероятности" },
          content: {
            hy: "<p>Կոլմոգորովի 3 հիմնական աքսիոմները․</p><ol><li><strong>Ոչ բացասականություն․</strong> $P(A) \\geq 0$ ցանկացած A-ի համար։</li><li><strong>Նորմավորում․</strong> $P(\\Omega) = 1$ (հավաստի իրադարձությունը)։</li><li><strong>Ադիտիվություն․</strong> Եթե A-ն և B-ն անհամատեղելի են, ապա $P(A \\cup B) = P(A) + P(B)$։</li></ol>",
            en: "<p>Kolmogorov's three axioms:</p><ol><li><strong>Non-negativity:</strong> $P(A) \\geq 0$.</li><li><strong>Normalization:</strong> $P(\\Omega) = 1$.</li><li><strong>Additivity:</strong> For disjoint events, $P(A \\cup B) = P(A) + P(B)$.</li></ol>",
            ru: "<p>Три аксиомы Колмогорова: неотрицательность, нормировка, аддитивность.</p>"
          }
        },
        {
          id: "theory-terms",
          title: { hy: "Հիմնական տերմիններ (Vocabulary)", en: "Terminology", ru: "Терминология" },
          content: {
            hy: "<ul><li><strong>Փորձ (Experiment)․</strong> Հստակ պայմաններում կատարվող գործողություն (օր․՝ մետաղադրամի նետում)։</li><li><strong>Ելք (Outcome/Sample Point)․</strong> Փորձի մեկ հնարավոր արդյունքը։</li><li><strong>Պատահույթ (Event)․</strong> Ելքերի ենթաբազմություն (օր․՝ «Զույգ թիվ բացվելը»)։</li><li><strong>Sample Space ($\\Omega$)․</strong> Բոլոր հնարավոր ելքերի բազմությունը։</li></ul>",
            en: "<ul><li><strong>Experiment:</strong> Predictable conditions, unpredictable outcome.</li><li><strong>Outcome:</strong> A specific result.</li><li><strong>Event:</strong> A set of outcomes.</li><li><strong>Sample Space ($\\Omega$):</strong> The set of all possible outcomes.</li></ul>",
            ru: "<p>Словарь: опыт, исход, событие, пространство исходов.</p>"
          }
        },
        {
          id: "theory-classical-prob",
          title: { hy: "Հավանականության դասական սահմանում", en: "Classical Definition", ru: "Классическое определение" },
          content: {
            hy: "<p>Եթե փորձի բոլոր $n$ ելքերը <strong>հավասարահնարավոր</strong> են և վերջավոր, ապա $P(A) = m/n$:</p><p><strong>Սահմանափակումները․</strong> Այն չի աշխատում, երբ ելքերի քանակը անսահման է (տե՛ս Երկրաչափական սահմանումը) կամ երբ ելքերը հավասարահնարավոր չեն (օր․՝ կեղծված զառ)։</p>",
            en: "<p>Classic definition $P(A) = m/n$ only works for finite, equally likely outcomes. It fails for infinite sets or biased experiments.</p>",
            ru: "<p>Определение Лапласа: $P(A) = m/n$. Работает только в конечном дискретном поле.</p>"
          }
        },
        {
          id: "theory-experiments-examples",
          title: { hy: "Մետաղադրամ և Զառ․ Փորձեր", en: "Coin & Dice Experiments", ru: "Примеры: Монета и Кубик" },
          content: {
            hy: "<p><strong>Մետաղադրամ․</strong> $P(H) = 1/2$։ Ֆրեկվենտիստները հազարավոր անգամներ նետել են մետաղադրամը (Բյուֆոն, Փիրսոն), և հաճախականությունը միշտ մոտեցել է 0.5-ին։</p><p><strong>Զառ․</strong> $n=6$։ Հավանականությունը, որ կբացվի 4-ից մեծ թիվ ({5, 6})՝ $2/6 = 1/3$։</p>",
            en: "<p><strong>Coin:</strong> $P(H) = 0.5$. Large scale trials by Buffon and Pearson proved historical frequencies stay close to theory.</p><p><strong>Dice:</strong> $n=6$. $P(X > 4) = 2/6 = 1/3$.</p>",
            ru: "<p>Практические примеры с монетой и костью.</p>"
          }
        }
,
        {
          id: "theory-prob-space",
          title: { hy: "Հավանականային Տարածություն", en: "Probability Space", ru: "Вероятностное пространство" },
          content: {
            hy: "<p>Հավանականային տարածությունը $(\\Omega, \\mathcal{F}, P)$ եռյակն է, որը ներմուծել է <strong>Անդրեյ Կոլմոգորովը</strong>:</p><ul><li><strong>$\\Omega$ (Օմեգա)․</strong> Տարրական պատահույթների բազմություն (բոլոր հնարավոր ելքերը)։</li><li><strong>$\\mathcal{F}$․</strong> Պատահույթների սիգմա-հանրահաշիվ (իրադարձությունների հավաքածու)։</li><li><strong>$P$․</strong> Հավանականային չափ, որը յուրաքանչյուր պատահույթի համապատասխանեցնում է [0, 1] միջակայքի թիվ։</li></ul>",
            en: "<p>A probability space is a mathematical triplet $(\\Omega, \\mathcal{F}, P)$ that models a random process, introduced by <strong>Andrey Kolmogorov</strong>.</p>",
            ru: "<p>Вероятностное пространство — математическая модель $(\\Omega, \\mathcal{F}, P)$, описывающая случайный эксперимент.</p>"
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
        },
        {
          id: "theory-complementary",
          title: { hy: "Լրացուցիչ պատահույթներ", en: "Complementary Events", ru: "Противоположные события" },
          content: {
            hy: "<p><strong>Լրացուցիչ (հակադիր)</strong> է կոչվում այն $\\bar{A}$ իրադարձությունը, որը տեղի է ունենում այն և միայն այն դեպքում, երբ A-ն տեղի չի ունենում:</p>$$P(\\bar{A}) = 1 - P(A)$$<p>Սա շատ օգտակար է «գոնե մեկ» տիպի խնդիրներ լուծելիս:</p>",
            en: "<p>The <strong>complement</strong> $\\bar{A}$ occurs if and only if A does not occur.</p>$$P(\\bar{A}) = 1 - P(A)$$ ",
            ru: "<p><strong>Противоположное событие</strong> $\\bar{A}$ происходит тогда, когда A не происходит.</p>$$P(\\bar{A}) = 1 - P(A)$$"
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
            en: "<p>Methods of ordering $n$ items.</p><ul><li><strong>Basic:</strong> $n!$</li><li><strong>With Repetition:</strong> $\\frac{n!}{k_1! k_2! ...}$</li><li><strong>Circular:</strong> $(n-1)!$</li></ul>",
            ru: "<p>Перестановки: обычные, с повторениями и круговые.</p>"
          }
        },
        {
          id: "theory-combinations",
          title: { hy: "Զուգորդություններ (Combinations)", en: "Combinations", ru: "Сочетания" },
          content: {
            hy: "<p><strong>Զուգորդություններ ($C_n^k$)․</strong> Ընտրություն, որտեղ կարևոր չէ հերթականությունը:</p>$$C_n^k = \\frac{n!}{k!(n-k)!}$$<p><strong>Կրկնություններով (Stars and Bars)․</strong> Եթե կարելի է նույն տարրը ընտրել բազմակի անգամ․</p>$$\\bar{C}_n^k = C_{n+k-1}^k$$",
            en: "<p><strong>Combinations:</strong> $n! / (k!(n-k)!)$. <strong>With Repetition:</strong> $\\binom{n+k-1}{k}$.</p>",
            ru: "<p>Сочетания: выбор без учета порядка. С повторениями и без.</p>"
          }
        },
        {
          id: "theory-arrangements",
          title: { hy: "Կարգավորություններ (Arrangements)", en: "Arrangements", ru: "Размещения" },
          content: {
            hy: "<p><strong>Կարգավորություններ ($A_n^k$)․</strong> Ընտրություն, որտեղ հերթականությունը <strong>կարևոր է</strong>:</p>$$A_n^k = \\frac{n!}{(n-k)!}$$<p><strong>Կրկնություններով․</strong> $\\bar{A}_n^k = n^k$ (օր․՝ ծածկագիր ստեղծելը)։</p>",
            en: "<p><strong>Arrangements:</strong> Order matters. $P(n,k) = n!/(n-k)!$. <strong>With Repetition:</strong> $n^k$.</p>",
            ru: "<p>Размещения: выбор с учетом порядка. С повторениями и без.</p>"
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
            en: "<p><strong>Inclusion-Exclusion Principle:</strong> for 3 events: $$P(A \\cup B \\cup C) = \\sum P(A_i) - \\sum P(A_i A_j) + P(A B C)$$</p>",
            ru: "<p>Принцип включений-исключений для 2-х и 3-х событий.</p>"
          }
        },
        {
          id: "theory-multiplication",
          title: { hy: "Բազմապատկում և Անկախություն", en: "Multiplication & Independence", ru: "Умножение и Независимость" },
          content: {
            hy: "<p>Երկու իրադարձություն կոչվում են <strong>անկախ</strong>, եթե մեկի տեղի ունենալը չի փոխում մյուսի հավանականությունը․ $P(B|A) = P(B)$։</p><p><strong>Անկախության պայմանը․</strong> $P(A \\cap B) = P(A) \\cdot P(B)$:</p><p><em>Զգուշացում․</em> Մի՛ խառնեք «անհամատեղելի» (չեն կարող լինել միասին) և «անկախ» (մեկը մյուսին չի ազդում) հասկացությունները:</p>",
            en: "<p>Events are <strong>independent</strong> if $P(B|A)=P(B)$, or equivalently $P(A \\cap B) = P(A)P(B)$. Do not confuse with disjointness (mutual exclusivity).</p>",
            ru: "<p>Независимость событий: $P(AB)=P(A)P(B)$.</p>"
          }
        },
        {
          id: "theory-conditional-prob",
          title: { hy: "Պայմանական հավանականություն", en: "Conditional Probability", ru: "Условная вероятность" },
          content: {
            hy: "<p>Հավանականությունը, որ տեղի կունենա A իրադարձությունը, պայմանով, որ B-ն արդեն տեղի է ունեցել:</p>$$P(A|B) = \\frac{P(AB)}{P(B)}, \\quad P(B) > 0$$<p>Սա նման է «ընտրության տիրույթի» փոքրացմանը ($\\Omega \\to B$):</p>",
            en: "<p>Restricting the sample space to $B$: $P(A|B) = P(AB)/P(B)$.</p>",
            ru: "<p>Вероятность A при условии B.</p>"
          }
        },
        {
          id: "theory-bayes",
          title: { hy: "Լրիվ հավանականություն և Բայես", en: "Total Prob & Bayes", ru: "Полная вероятность и Байес" },
          content: {
            hy: "<p><strong>Լրիվ հավանականություն․</strong> Երբ A-ն կախված է իրար բացառող հիպոթեզներից․ $$P(A) = \\sum P(H_i) P(A|H_i)$$</p><p><strong>Բայեսի բանաձև․</strong> Թույլ է տալիս «շրջել» հավանականությունը․ գտնել հիպոթեզի հավանականությունը, եթե արդեն գիտենք արդյունքը։</p>$$P(H_i|A) = \\frac{P(A|H_i)P(H_i)}{\\sum P(H_k)P(A|H_k)}$$",
            en: "<p>Bayes' Theorem updates the probability for a hypothesis as more evidence or information becomes available.</p>",
            ru: "<p>Формула Байеса для переоценки гипотез.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "4. Պատահական մեծություններ", en: "4. Random Variables", ru: "4. Случайные величины" },
      subsections: [
        {
          id: "theory-rv-basics",
          title: { hy: "Տեսակները և Բաշխման ֆունկցիան (CDF)", en: "Types & Distribution Function (CDF)", ru: "Виды и Функции распределения" },
          content: {
            hy: "<p>Պատահական մեծությունները լինում են <strong>դիսկրետ</strong> (ընդունում են առանձին արժեքներ) և <strong>անընդհատ</strong> (լրացնում են միջակայք)։</p><p><strong>Բաշխման ֆունկցիա (CDF):</strong> $F(x) = P(X \\leq x)$:</p><ul><li>Միշտ չնվազող է։</li><li>Արժեքները $[0, 1]$-ում են։</li><li>Անընդհատ մեծության համար․ $P(a < X < b) = F(b) - F(a)$։</li></ul>",
            en: "<p><strong>Discrete</strong> vs <strong>Continuous</strong> variables. <strong>CDF:</strong> $F(x) = P(X \\leq x)$. It is always non-decreasing and bounded between 0 and 1.</p>",
            ru: "<p>Дискретные и непрерывные величины. Функция распределения $F(x)$.</p>"
          }
        },
        {
          id: "theory-rv-pdf",
          title: { hy: "Բաշխման խտություն (PDF)", en: "Probability Density (PDF)", ru: "Плотность вероятности" },
          content: {
            hy: "<p>Անընդհատ պատահական մեծությունների համար հավանականությունը կետում զրո է․ $P(X=x) = 0$։ Դրա փոխարեն օգտագործվում է <strong>խտության ֆունկցիան $f(x)$</strong>․</p>$$F(x) = \\int_{-\\infty}^x f(t)dt$$<p>Հատկություն․ $\\int_{-\\infty}^{\\infty} f(x)dx = 1$ (մակերեսը կորի տակ միշտ 1 է)։</p>",
            en: "<p>For continuous variables, $P(X=x)=0$. Instead, we use <strong>PDF $f(x)$</strong>. The total area under $f(x)$ must be 1.</p>",
            ru: "<p>Плотность вероятности $f(x)$ для непрерывных величин.</p>"
          }
        },
        {
          id: "theory-rv-props",
          title: { hy: "Թվային բնութագրիչներ", en: "Numerical Characteristics", ru: "Числовые характеристики" },
          content: {
            hy: "<ul><li><strong>Մաթ. սպասում ($E[X]$):</strong> Միջին կշռված արժեքը։</li><li><strong>Դիսպերսիա ($Var(X)$):</strong> Շեղվածության չափը միջինից։</li><li><strong>Մոդա:</strong> Ամենահավանական արժեքը։</li><li><strong>Մեդիան:</strong> Արժեքը, որից ձախ և աջ հավանականությունները 0.5 են։</li></ul>",
            en: "<ul><li><strong>Expectation ($E[X]$):</strong> Weighted average.</li><li><strong>Variance ($Var(X)$):</strong> Spread.</li><li><strong>Median:</strong> The middle point ($P(X \\leq M) = 0.5$).</li></ul>",
            ru: "<p>Мат. ожидание, дисперсия, мода и медиана.</p>"
          }
        }
      ]
    },
    {
      title: { hy: "5. Բաշխման օրենքներ", en: "5. Distribution Laws", ru: "5. Законы распределения" },
      subsections: [
        {
          id: "theory-binomial",
          title: { hy: "Բինոմիալ բաշխում (Binomial)", en: "Binomial Distribution", ru: "Биномиальное распр." },
          content: {
            hy: "<p>Նկարագրում է $n$ անկախ փորձերում հաջողությունների քանակը ($p$ հավանականությամբ)։</p>$$P(X=k) = C_n^k p^k (1-p)^{n-k}$$<ul><li>$E[X] = np$</li><li>$Var(X) = npq$</li></ul>",
            en: "<p>Matches $n$ independent Bernoulli trials. $E[X]=np, Var(X)=npq$.</p>",
            ru: "<p>Биномиальное распределение: $n$ испытаний Бернулли.</p>"
          }
        },
        {
          id: "theory-geometric",
          title: { hy: "Գեոմետրիկ և Հիպերգեոմետրիկ", en: "Geometric & Hypergeometric", ru: "Геометрическое и др." },
          content: {
            hy: "<ul><li><strong>Գեոմետրիկ․</strong> Փորձերի քանակը մինչև առաջին հաջողությունը (ներառյալ)։ $P(X=k) = q^{k-1}p$։</li><li><strong>Հիպերգեոմետրիկ․</strong> Ընտրանք առանց վերադարձի (օր․՝ քարտեր)։ $$P(X=k) = \\frac{C_M^k C_{N-M}^{n-k}}{C_N^n}$$</li></ul>",
            en: "<p><strong>Geometric:</strong> Trials until 1st success. <strong>Hypergeometric:</strong> Sampling without replacement.</p>",
            ru: "<p>Геометрическое (до первого успеха) и гипергеометрическое распределения.</p>"
          }
        },
        {
          id: "theory-poisson",
          title: { hy: "Պուասոնի բաշխում", en: "Poisson Distribution", ru: "Распределение Пуассона" },
          content: {
            hy: "<p>Կիրառվում է հազվադեպ իրադարձությունների համար․ $$P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$$</p><p><strong>Հատկություն․</strong> $E[X] = Var(X) = \\lambda$:</p>",
            en: "<p>Models rare events. Key property: Mean = Variance = $\\lambda$.</p>",
            ru: "<p>Распределение Пуассона для редких событий.</p>"
          }
        },
        {
          id: "theory-normal",
          title: { hy: "Նորմալ և Էքսպոնենցիալ", en: "Normal & Exponential", ru: "Нормальное и др." },
          content: {
            hy: "<ul><li><strong>Նորմալ ($\\mu, \\sigma$)․</strong> Բնության մեջ ամենատարածվածն է։ $68\\text{-}95\\text{-}99.7$ կանոնը։</li><li><strong>Էքսպոնենցիալ ($\\lambda$)․</strong> Ժամանակը փոփոխությունների միջև։ $f(x) = \\lambda e^{-\\lambda x}$։ Չունի «հիշողություն»։</li></ul>",
            en: "<p><strong>Normal:</strong> Bell curve. Mean $\\mu$, StdDev $\\sigma$. <strong>Exponential:</strong> Time between events. 'Memoryless' property.</p>",
            ru: "<p>Нормальное и экспоненциальное распределения.</p>"
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
            en: "<p>For any non-negative variable $X$: $P(X \\geq a) \\leq E[X]/a$. It provides a simple bound based only on the mean.</p>",
            ru: "<p>Оценка вероятности через мат. ожидание.</p>"
          }
        },
        {
          id: "theory-chebyshev",
          title: { hy: "Չեբիշևի անհավասարություն", en: "Chebyshev's Inequality", ru: "Неравенство Чебышёва" },
          content: {
            hy: "<p>Չեբիշևի անհավասարությունը ցույց է տալիս, թե որքանով է մեծությունը «հեռանում» միջինից․</p>$$P(|X - E[X]| \\geq \\epsilon) \\leq \\frac{Var(X)}{\\epsilon^2}$$",
            en: "<p>Bounds the spread of any distribution. Useful when local distribution is unknown but mean and variance are given.</p>",
            ru: "<p>Оценивает отклонение от среднего через дисперсию.</p>"
          }
        },
        {
          id: "theory-lln",
          title: { hy: "Մեծ թվերի օրենքը (LLN)", en: "Law of Large Numbers", ru: "Закон больших чисел" },
          content: {
            hy: "<p><strong>Թույլ օրենք․</strong> Մեծ թվով փորձերի դեպքում միջինը ձգտում է մաթ. սպասմանը:</p><p>Սա բացատրում է, թե ինչու է խաղատունը միշտ շահում երկարաժամկետ հեռանկարում:</p>",
            en: "<p>States that the average of results from a large number of trials should be close to the expected value.</p>",
            ru: "<p>При большом числе опытов среднее стабильно.</p>"
          }
        },
        {
          id: "theory-clt",
          title: { hy: "Կենտրոնական սահմանային թեորեմ", en: "Central Limit Theorem", ru: "ЦПТ" },
          content: {
            hy: "<p><strong>Կ.Ս.Թ.․</strong> Մի շարք անկախ պատահական մեծությունների գումարը ձգտում է <strong>Նորմալ բաշխման</strong>, նույնիսկ եթե հենց այդ մեծությունները նորմալ բաշխված չեն:</p>$$Z = \\frac{\\sum X_i - n\\mu}{\\sigma\\sqrt{n}} \\to N(0, 1)$$",
            en: "<p>The sum of many independent variables tends towards a normal distribution, regardless of the shape of original distribution.</p>",
            ru: "<p>Сумма независимых величин распределена нормально при больших n.</p>"
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
      related_theory_id: "theory-multiplication",
      related_theory_hint: { hy: "P(A·B) = P(A)·P(B) = 0.5·0.5", en: "P(A∩B) = P(A)·P(B) = 0.5×0.5", ru: "P(A∩B) = P(A)·P(B) = 0.5×0.5" }
    },
    {
      id: 103,
      difficulty: "beginner",
      question: { hy: "Քանի՞ եղանակով կարելի է դասավորել 5 տարբեր գիրք դարակում:", en: "How many ways to arrange 5 different books on a shelf?", ru: "Сколькими способами можно расставить 5 книг?" },
      answer: "120",
      related_theory_id: "theory-permutations",
      related_theory_hint: { hy: "5!", en: "5!", ru: "5!" }
    },
    {
      id: 104,
      difficulty: "beginner",
      question: { hy: "P(A)=0.7: Գտնել լրացուցիչ պատահույթի հավանականությունը:", en: "P(A)=0.7. Find probability of the complement.", ru: "P(A)=0.7. Найти вер. противоположного события." },
      answer: "0.3",
      related_theory_id: "theory-axioms",
      related_theory_hint: { hy: "1 - P(A)", en: "1 - P(A)", ru: "1 - P(A)" }
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
      related_theory_id: "theory-binomial",
      related_theory_hint: { hy: "1 - P(ոչ մի)", en: "1 - P(none)", ru: "1 - P(ни одного)" }
    },
    {
      id: 203,
      difficulty: "intermediate",
      question: { hy: "Զառը նետում ենք 2 անգամ: Որքա՞ն է հավանականությունը, որ գումարը 10 է:", en: "Roll a die twice. Prob that sum is 10?", ru: "Два броска кубика. Вероятность суммы 10?" },
      answer: "0.0833",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "m={(4,6),(5,5),(6,4)}=3, n=36. 3/36 = 1/12", en: "m=3, n=36. 3/36 = 1/12", ru: "m=3, n=36. 3/36 = 1/12" }
    },

    /* ---- Advanced ---- */
    {
      id: 301,
      difficulty: "advanced",
      question: { hy: "X ~ N(0, 1): Գտնել P(|X| < 2) (մոտավոր, 2 նիշ):", en: "X ~ N(0,1). Find P(|X| < 2).", ru: "X ~ N(0,1). Найти P(|X| < 2)." },
      answer: "0.95",
      related_theory_id: "theory-normal",
      related_theory_hint: { hy: "68-95-99.7 կանոն: 2σ միջակայք ≈ 95%", en: "68-95-99.7 Rule: within 2σ ≈ 95%", ru: "Правило 68-95-99.7: в пределах 2σ ≈ 95%" }
    },
    {
      id: 302,
      difficulty: "advanced",
      question: { hy: "Հեռախոսակայան ստացվում է միջինում 2 զանգ րոպեում (Պուասոն)։ Գտեք 0 զանգ ստանալու հավանականությունը մեկ րոպեում:", en: "Avg 2 calls/min (Poisson). Prob of 0 calls in a minute?", ru: "В среднем 2 звонка в мин (Пуассон). Вер. 0 звонков?" },
      answer: "0.1353",
      related_theory_id: "theory-poisson",
      related_theory_hint: { hy: "e^-2", en: "e^-2", ru: "e^-2" }
    },
    {
      id: 305,
      difficulty: "advanced",
      question: { hy: "Բայեսի խնդիր: հիվանդության հաճախականությունը 1% է: Թեստի ճշտությունը՝ 99%: Թեստը դրական է: Հավանականությունը, որ մարդը հիվանդ է?", en: "Prevalence 1%. Test acc 99%. Test Positive. Prob diseased?", ru: "Частота 1%. Тест 99%. Плюс. Болен?" },
      answer: "0.5",
      related_theory_id: "theory-bayes",
      related_theory_hint: { hy: "0.01*0.99 / (0.01*0.99 + 0.99*0.01) = 0.5", en: "Standard Bayes trap.", ru: "Ловушка Байеса." }
    },

    /* ---- Olympic ---- */
    {
      id: 401,
      difficulty: "olympic",
      question: { hy: "Բերտրանի պարադոքս․ Եթե պատահական լարը ընտրվում է ըստ միջնակետի դիրքի, որքա՞ն է հավանականությունը, որ այն երկար է ներգծած եռանկյունու կողմից:", en: "Bertrand Paradox (midpoint method). Prob chord > triangle side?", ru: "Парадокс Бертрана (метод середины)." },
      answer: "0.25",
      related_theory_id: "theory-rv-pdf",
      related_theory_hint: { hy: "Մակերեսների հարաբերություն (ներգծած շրջանագիծ)", en: "Area ratio (incircle/outer circle)", ru: "Отношение площадей" }
    },
    {
      id: 402,
      difficulty: "olympic",
      question: { hy: "E(X)=10: Չեբիշևով գտեք P(X > 20) վերին սահմանը, եթե Var(X)=5 (օգտագործեք միակողմանի տարբերակը կամ ստանդարտը):", en: "E(X)=10, Var(X)=5. Chebyshev upper bound for P(X > 20)?", ru: "E(X)=10, Var(X)=5. Граница Чебышёва для P(X > 20)?" },
      answer: "0.05",
      related_theory_id: "theory-chebyshev",
      related_theory_hint: { hy: "Var(X)/10^2", en: "Var(X)/10^2", ru: "Var(X)/10^2" }
    },
    {
      id: 110,
      difficulty: "beginner",
      question: { hy: "Տրված են P(A)=0.3, P(B)=0.2 և P(A∩B)=0.1: Գտնել P(A∪B):", en: "Given P(A)=0.3, P(B)=0.2 and P(A∩B)=0.1. Find P(A∪B).", ru: "Дано P(A)=0.3, P(B)=0.2 и P(A∩B)=0.1. Найти P(A∪B)." },
      answer: "0.4",
      related_theory_id: "theory-addition",
      related_theory_hint: { hy: "P(A∪B) = P(A) + P(B) - P(A∩B)", en: "P(A∪B) = P(A) + P(B) - P(A∩B)", ru: "P(A∪B) = P(A) + P(B) - P(A∩B)" }
    },
    {
      id: 111,
      difficulty: "beginner",
      question: { hy: "52 թղթախաղից ընտրում ենք մեկ քարտ: Որքա՞ն է հավանականությունը, որ այն կլինի կարմիր կամ թագավոր:", en: "Draw one card from a 52-card deck. What is the probability it's either red or a king?", ru: "Из колоды в 52 карты вынимают одну. Какова вероятность, что это красная карта или король?" },
      answer: "0.5385",
      related_theory_id: "theory-addition",
      related_theory_hint: { hy: "(26/52 + 4/52) - 2/52 = 28/52", en: "(26/52 + 4/52) - 2/52 = 28/52", ru: "(26/52 + 4/52) - 2/52 = 28/52" }
    },
    {
      id: 210,
      difficulty: "intermediate",
      question: { hy: "Նետում ենք երկու կանոնավոր քառանիստ զառ (նիստերը՝ 1,2,3,4): Որքա՞ն է հավանականությունը, որ բացված թվերի գումարը կլինի 5:", en: "Roll two regular tetrahedral dice (faces 1,2,3,4). What is the probability the sum is 5?", ru: "Бросают два правильных тетраэдрических кубика (грани 1,2,3,4). Какова вероятность, что сумма выпавших очков равна 5?" },
      answer: "0.25",
      related_theory_id: "theory-classical-prob",
      related_theory_hint: { hy: "n=16, m={(1,4),(2,3),(3,2),(4,1)}", en: "n=16, m=4", ru: "n=16, m=4" }
    },
    {
      id: 211,
      difficulty: "intermediate",
      question: { hy: "Պարկում կա 3 կարմիր և 4 կանաչ գնդակ: Հանում ենք 2 գնդակ: Գտնել հանված կարմիր գնդակների քանակի մաթեմատիկական սպասումը:", en: "A bag has 3 red and 4 green balls. Draw 2. Find the expected number of red balls drawn.", ru: "В сумке 3 красных и 4 зеленых шара. Вынимают 2. Найти мат. ожидание числа красных шаров." },
      answer: "0.8571",
      related_theory_id: "theory-rv-props",
      related_theory_hint: { hy: "E(X) = n * (M/N) = 2 * (3/7)", en: "E(X) = n * (M/N) = 2 * (3/7)", ru: "E(X) = n * (M/N) = 2 * (3/7)" }
    },
    {
      id: 310,
      difficulty: "advanced",
      question: { hy: "Արդյունաբերական թափոնների 69%-ը հանքային են, 28%-ը՝ ոչ հանքային, 3%-ը՝ վտանգավոր։ Վերամշակվում է հանքայինի 73%-ը, ոչ հանքացինի 49%-ը և վտանգավորի 35%-ը։ Գտեք պատահական ընտրված թափոնի վերամշակվելու հավանականությունը:", en: "69% minerals (73% recycle), 28% non-minerals (49% recycle), 3% dangerous (35% recycle). Find total recycling probability.", ru: "69% минералы (73% переработка), 28% неминералы (49% переработка), 3% опасные (35% переработка). Найти общую вер. переработки." },
      answer: "0.6514",
      related_theory_id: "theory-bayes",
      related_theory_hint: { hy: "0.69*0.73 + 0.28*0.49 + 0.03*0.35", en: "Law of Total Probability.", ru: "Формула полной вероятности." }
    },
    {
      id: 410,
      difficulty: "olympic",
      question: { hy: "Պատահական մեծության E(X)=100, Var(X)=25: Չեբիշևի անհավասարության օգնությամբ հաշվեք P(|X-100| ≥ 15) վերին սահմանը:", en: "E(X)=100, Var(X)=25. Use Chebyshev to find upper bound for P(|X-100| ≥ 15).", ru: "E(X)=100, Var(X)=25. Верхняя граница P(|X-100| ≥ 15) по Чебышёву?" },
      answer: "0.1111",
      related_theory_id: "theory-chebyshev",
      related_theory_hint: { hy: "Var(X)/ε² = 25 / 15² = 25/225 = 1/9", en: "Var(X)/ε² = 25/225 = 1/9", ru: "Var(X)/ε² = 25/225 = 1/9" }
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
