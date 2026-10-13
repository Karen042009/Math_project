import json

def get_updated_ui():
    with open('build_data_src/extracted_existing.json', 'r', encoding='utf-8') as f:
        existing = json.load(f)
    ui = existing['ui']

    # Project title & hero
    ui['hero_title'] = {
        "hy": "ProbSpace — Հավանականություն և Ինտեգրալ",
        "en": "ProbSpace — Probability & Calculus",
        "ru": "ProbSpace — Вероятность и Интегралы"
    }
    ui['hero_subtitle'] = {
        "hy": "ՀԱՎԱՆԱԿԱՆՈՒԹՅԱՆ ՏԵՍՈՒԹՅԱՆ ԵՎ ՄԱԹԵՄԱՏԻԿԱԿԱՆ ԱՆԱԼԻԶԻ ԻՆՏԵՐԱԿՏԻՎ ՀԱՐԹԱԿ",
        "en": "INTERACTIVE PLATFORM FOR PROBABILITY THEORY & MATHEMATICAL ANALYSIS",
        "ru": "ИНТЕРАКТИВНАЯ ПЛАТФОРМА ДЛЯ ТЕОРИИ ВЕРОЯТНОСТЕЙ И МАТЕМАТИЧЕСКОГО АНАЛИЗА"
    }
    ui['hero_desc'] = {
        "hy": "Մաթեմատիկական խորացված հարթակ երկու հիմնարար ուղղություններով՝ «Հավանականություն» և «Ինտեգրալ»։ Տեսություն, քայլային լուծիչներ, Մոնտե Կառլոյի սիմուլյացիաներ և ինտերակտիվ խնդիրներ։",
        "en": "Advanced mathematical learning platform structured around two main tracks: Probability and Calculus & Integrals. Features theory, step-by-step solvers, Monte Carlo simulations, and interactive practice.",
        "ru": "Продвинутая математическая платформа с двумя основными направлениями: «Вероятность» и «Интегралы». Теория, пошаговые калькуляторы, симуляции Монте-Карло и интерактивные задачи."
    }

    # Two main track tabs
    ui['track_probability'] = {
        "hy": "Հավանականություն",
        "en": "Probability",
        "ru": "Вероятность"
    }
    ui['track_integral'] = {
        "hy": "Ինտեգրալ",
        "en": "Calculus & Integrals",
        "ru": "Интегралы"
    }
    ui['track_supplementary'] = {
        "hy": "Լրացուցիչ թեմա",
        "en": "Supplementary Topic",
        "ru": "Дополнительная тема"
    }

    # Topics filter for practice
    ui['topic_all'] = {
        "hy": "Բոլոր թեմաները",
        "en": "All Topics",
        "ru": "Все темы"
    }
    ui['topic_basic'] = {
        "hy": "Հիմնական հավանականություն",
        "en": "Basic Probability",
        "ru": "Основы вероятности"
    }
    ui['topic_combinatorics'] = {
        "hy": "Կոմբինատորիկա",
        "en": "Combinatorics",
        "ru": "Комбинаторика"
    }
    ui['topic_bayes'] = {
        "hy": "Պայմանական և Բայես",
        "en": "Conditional & Bayes",
        "ru": "Условная вер. и Байес"
    }
    ui['topic_distributions'] = {
        "hy": "Բաշխումներ",
        "en": "Distributions",
        "ru": "Распределения"
    }
    ui['topic_rv'] = {
        "hy": "Պատահական մեծություններ",
        "en": "Random Variables",
        "ru": "Случайные величины"
    }
    ui['topic_derivative'] = {
        "hy": "Ածանցյալ",
        "en": "Derivatives",
        "ru": "Производные"
    }
    ui['topic_integral'] = {
        "hy": "Ինտեգրալներ",
        "en": "Integrals",
        "ru": "Интегралы"
    }
    ui['topic_area'] = {
        "hy": "Մակերեսներ",
        "en": "Areas",
        "ru": "Площади"
    }
    ui['topic_volume'] = {
        "hy": "Ծավալներ",
        "en": "Volumes",
        "ru": "Объемы"
    }
    ui['topic_kinematics'] = {
        "hy": "Շարժում և կինեմատիկա",
        "en": "Kinematics",
        "ru": "Кинематика"
    }
    ui['topic_numerical'] = {
        "hy": "Թվային և Մոնտե Կառլո",
        "en": "Numerical & Monte Carlo",
        "ru": "Численные и Монте-Карло"
    }

    # Theory Card description
    ui['card_theory_desc'] = {
        "hy": "Ամբողջական դասընթաց՝ բաժանված «Հավանականություն» և «Ինտեգրալ» ուղղությունների, ինչպես նաև տվյալների պաշտպանության լրացուցիչ թեմա։",
        "en": "Comprehensive coursework divided into Probability and Calculus tracks, plus a supplementary data security topic.",
        "ru": "Полный курс, разделенный на направления «Вероятность» и «Интегралы», а также дополнительная тема по защите данных."
    }

    # Monte Carlo simulation tab & panel strings
    ui['sim_integral_btn'] = {
        "hy": "Մոնտե Կառլոյի Ինտեգրում",
        "en": "Monte Carlo Integration",
        "ru": "Интегрирование Монте-Карло"
    }
    ui['sim_integral_title'] = {
        "hy": "Մոնտե Կառլոյի Ինտեգրում",
        "en": "Monte Carlo Integration",
        "ru": "Интегрирование методом Монте-Карло"
    }
    ui['sim_integral_desc_short'] = {
        "hy": "Որոշյալ ինտեգրալների հաշվումը Hit-or-Miss և ընտրանքի միջինի (Sample Mean) մեթոդներով",
        "en": "Definite integration via Hit-or-Miss and Sample Mean methods",
        "ru": "Вычисление определенных интегралов методами Hit-or-Miss и выборочного среднего (Sample Mean)"
    }
    ui['sim_integral_desc'] = {
        "hy": "<strong>Մոնտե Կառլոյի Ինտեգրում․</strong> Հնարավորություն է տալիս հաշվել որոշյալ ինտեգրալները երկու մեթոդով՝ <strong>Hit-or-Miss</strong> (կետերի ընկնելը կորի տակ) և <strong>Ընտրանքի միջին</strong> (I_N = (b-a)/N · Σ f(X_i), որն աշխատում է նաև նշանափոխ ֆունկցիաների համար)։",
        "en": "<strong>Monte Carlo Integration:</strong> Computes definite integrals using two core algorithms: <strong>Hit-or-Miss</strong> (bounding box point fraction) and <strong>Sample Mean</strong> (I_N = (b-a)/N · Σ f(X_i), which also handles sign-changing functions natively).",
        "ru": "<strong>Интегрирование Монте-Карло:</strong> Вычисляет определенные интегралы двумя методами: <strong>Hit-or-Miss</strong> (доля точек под графиком) и <strong>Выборочное среднее</strong> (I_N = (b-a)/N · Σ f(X_i), подходящее и для знакопеременных функций)."
    }

    ui['mc_method_label'] = {
        "hy": "Մեթոդ",
        "en": "Method",
        "ru": "Метод"
    }
    ui['mc_method_hit_or_miss'] = {
        "hy": "Hit-or-Miss (Կորի տակ ընկած կետեր)",
        "en": "Hit-or-Miss (Geometric Box)",
        "ru": "Hit-or-Miss (Геометрический)"
    }
    ui['mc_method_sample_mean'] = {
        "hy": "Ընտրանքի միջին (Sample Mean)",
        "en": "Sample Mean (Expected Value)",
        "ru": "Выборочное среднее (Sample Mean)"
    }

    ui['mc_canvas_title'] = {
        "hy": "<i class=\"fas fa-draw-polygon\" style=\"color: var(--neon-purple); margin-right: 6px;\"></i> Ֆունկցիայի գրաֆիկը և պատահական կետերը",
        "en": "<i class=\"fas fa-draw-polygon\" style=\"color: var(--neon-purple); margin-right: 6px;\"></i> Function Curve & Random Points",
        "ru": "<i class=\"fas fa-draw-polygon\" style=\"color: var(--neon-purple); margin-right: 6px;\"></i> График функции и случайные точки"
    }
    ui['mc_conv_title'] = {
        "hy": "<i class=\"fas fa-chart-line\" style=\"color: #38bdf8; margin-right: 6px;\"></i> Գնահատականի զուգամիտությունը (I_N ըստ N-ի)",
        "en": "<i class=\"fas fa-chart-line\" style=\"color: #38bdf8; margin-right: 6px;\"></i> Estimate Convergence (I_N vs N)",
        "ru": "<i class=\"fas fa-chart-line\" style=\"color: #38bdf8; margin-right: 6px;\"></i> Сходимость оценки (I_N от N)"
    }
    ui['mc_conv_legend'] = {
        "hy": "Դեղին գիծ՝ ճշգրիտ արժեք | Կապույտ՝ մոտարկում",
        "en": "Yellow line: Exact value | Blue: Estimate",
        "ru": "Желтая линия: точное значение | Синяя: оценка"
    }
    ui['mc_func_label'] = {
        "hy": "Ֆունկցիա (f(x))",
        "en": "Function (f(x))",
        "ru": "Функция (f(x))"
    }
    ui['mc_bound_a'] = {
        "hy": "Ստորին սահման (a)",
        "en": "Lower Bound (a)",
        "ru": "Нижний предел (a)"
    }
    ui['mc_bound_b'] = {
        "hy": "Վերին սահման (b)",
        "en": "Upper Bound (b)",
        "ru": "Верхний предел (b)"
    }
    ui['mc_points_label'] = {
        "hy": "Կետերի թիրախ (N)",
        "en": "Target Points (N)",
        "ru": "Целевое число точек (N)"
    }
    ui['mc_speed_label'] = {
        "hy": "Արագություն",
        "en": "Speed",
        "ru": "Скорость"
    }
    ui['mc_btn_start'] = {
        "hy": "Սկսել",
        "en": "Start",
        "ru": "Старт"
    }
    ui['mc_btn_pause'] = {
        "hy": "Դադարեցնել",
        "en": "Pause",
        "ru": "Пауза"
    }
    ui['mc_btn_resume'] = {
        "hy": "Շարունակել",
        "en": "Resume",
        "ru": "Продолжить"
    }
    ui['mc_btn_reset'] = {
        "hy": "Զրոյացնել",
        "en": "Reset",
        "ru": "Сброс"
    }

    ui['stat_realtime_analysis'] = {
        "hy": "<i class=\"fas fa-calculator\"></i> Իրական Ժամանակի Վերլուծություն",
        "en": "<i class=\"fas fa-calculator\"></i> Real-Time Analysis",
        "ru": "<i class=\"fas fa-calculator\"></i> Анализ в реальном времени"
    }
    ui['mc_stat_total'] = {
        "hy": "Ընդհանուր (N)՝",
        "en": "Total Points (N):",
        "ru": "Всего точек (N):"
    }
    ui['mc_stat_inside'] = {
        "hy": "Կորի տակ (N_in)՝",
        "en": "Under Curve (N_in):",
        "ru": "Под кривой (N_in):"
    }
    ui['mc_stat_ratio'] = {
        "hy": "Հարաբերություն՝",
        "en": "Hit Ratio:",
        "ru": "Доля попаданий:"
    }
    ui['mc_stat_exact'] = {
        "hy": "Ճշգրիտ արժեք՝",
        "en": "Exact Value:",
        "ru": "Точное значение:"
    }
    ui['mc_stat_approx'] = {
        "hy": "Մոտավոր ինտեգրալ (I_N)՝",
        "en": "Approx Integral (I_N):",
        "ru": "Приближ. интеграл (I_N):"
    }
    ui['mc_stat_abs_err'] = {
        "hy": "Բացարձակ սխալ՝",
        "en": "Absolute Error:",
        "ru": "Абсолютная погрешность:"
    }
    ui['mc_stat_stderr'] = {
        "hy": "Ստանդարտ սխալ (SE)՝",
        "en": "Standard Error (SE):",
        "ru": "Стандартная ошибка (SE):"
    }
    ui['mc_no_data'] = {
        "hy": "Դեռ բավարար տվյալներ չկան (N = 0)",
        "en": "Not enough data yet (N = 0)",
        "ru": "Недостаточно данных (N = 0)"
    }

    # Laboratory / Calculator new modes
    ui['lab_tab_basic'] = {
        "hy": "Սովորական հաշվիչ",
        "en": "Standard Calculator",
        "ru": "Обычный калькулятор"
    }
    ui['lab_tab_prob'] = {
        "hy": "Հավանականություն",
        "en": "Probability",
        "ru": "Вероятность"
    }
    ui['lab_tab_calculus'] = {
        "hy": "Ածանցյալ և ինտեգրալ",
        "en": "Derivative & Integral",
        "ru": "Производная и интеграл"
    }
    ui['lab_tab_area'] = {
        "hy": "Մակերես",
        "en": "Area",
        "ru": "Площадь"
    }
    ui['lab_tab_volume'] = {
        "hy": "Ծավալ",
        "en": "Volume",
        "ru": "Объем"
    }
    ui['lab_tab_motion'] = {
        "hy": "Շարժում",
        "en": "Kinematics",
        "ru": "Движение"
    }

    # Generator / AI Assistant branding
    ui['section_ai_gen'] = {
        "hy": "Խնդիրների գեներատոր և օգնական",
        "en": "Interactive Problem Generator & Assistant",
        "ru": "Генератор задач и ассистент"
    }
    ui['ai_badge_tutor'] = {
        "hy": "Ինտերակտիվ գեներատոր և քայլային ստուգիչ",
        "en": "Interactive Generator & Step-by-Step Verifier",
        "ru": "Интерактивный генератор и пошаговый валидатор"
    }
    ui['ai_upload_label'] = {
        "hy": "Ներբեռնել լուծման լուսանկար (տեղային նախադիտում)",
        "en": "Upload solution image (local preview)",
        "ru": "Загрузить фото решения (предпросмотр)"
    }
    ui['ai_upload_note'] = {
        "hy": "Նկարի վերբեռնումը ծառայում է տեղային նախադիտման համար։ Լիարժեք AI վերլուծության համար կարող եք կարգավորել Gemini API բանալի։",
        "en": "Image upload is for local preview. Full AI analysis is enabled when a Gemini API key is configured.",
        "ru": "Загрузка изображения служит для локального предпросмотра. Полный анализ AI доступен при настройке ключа Gemini API."
    }
    ui['ai_no_template_msg'] = {
        "hy": "Ընտրված թեմային և բարդությանը համապատասխան ձևանմուշ չի գտնվել։ Խնդրում ենք ընտրել այլ զտիչներ։",
        "en": "No template matched the selected topic and difficulty. Please choose different filters.",
        "ru": "Для выбранной темы и сложности шаблон не найден. Пожалуйста, измените фильтры."
    }

    with open('build_data_src/ui_overrides.json', encoding='utf-8') as f:
        ui.update(json.load(f))
    return ui
