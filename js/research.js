/* Project experiments: seeded comparisons, geometry, walks and a financial model. */
(function () {
    'use strict';
    const E = window.ResearchEngine;
    const copy = {
        integral: ['Կրկնելի ինտեգրալներ', 'Reproducible integrals', 'Воспроизводимые интегралы'],
        pi: ['π․ շրջան և քառակուսի', 'π: circle and square', 'π: круг и квадрат'],
        walk: ['Պատահական քայլք', 'Random walk', 'Случайное блуждание'],
        risk: ['Ֆինանսական ռիսկ', 'Financial risk', 'Финансовый риск'],
        geometry: ['Մակերես և ծավալ', 'Area and volume', 'Площадь и объём'],
        integralIntro: ['Դավիթ Ասատրյանի օրինակները․ ∫₀¹x²dx և ∫₀¹eˣdx՝ նույն ընտրանքով։ Կարող եք փորձարկել նաև ձեր ֆունկցիան։', 'David Asatryan’s examples: ∫₀¹x²dx and ∫₀¹eˣdx with shared samples. You can also test your own function.', 'Примеры Давида Асатряна: ∫₀¹x²dx и ∫₀¹eˣdx на общей выборке. Можно исследовать и свою функцию.'],
        piIntro: ['Միավոր քառակուսու մեջ հավասարաչափ նետում ենք կետեր։ Եթե x²+y²≤1, կետը քառորդ շրջանի ներսում է։ π ≈ 4·Nներս/N։', 'Throw uniform points into the unit square. A point is inside the quarter circle when x²+y²≤1. π ≈ 4·Ninside/N.', 'Равномерно бросаем точки в единичный квадрат. При x²+y²≤1 точка внутри четверти круга. π ≈ 4·Nвнутри/N.'],
        walkIntro: ['Յուրաքանչյուր քայլը +1 է՝ p հավանականությամբ, հակառակ դեպքում՝ −1։ E[Xₜ]=t(2p−1), Var(Xₜ)=4tp(1−p)։', 'Each step is +1 with probability p, otherwise −1. E[Xₜ]=t(2p−1), Var(Xₜ)=4tp(1−p).', 'Каждый шаг равен +1 с вероятностью p, иначе −1. E[Xₜ]=t(2p−1), Var(Xₜ)=4tp(1−p).'],
        riskIntro: ['Ուսումնական մոդել՝ Sₜ=S₀·exp((μ−σ²/2)T+σ√T·Z), Z∼N(0,1)։ μ-ն տարեկան դրիֆտն է, σ-ն՝ տատանողականությունը։ Մոդելը չի ներառում միջնորդավճարներ և չի կանխատեսում իրական շուկան։', 'Educational model: Sₜ=S₀·exp((μ−σ²/2)T+σ√T·Z), Z∼N(0,1). μ is annual drift; σ is volatility. Fees are excluded; this model does not predict actual markets.', 'Учебная модель: Sₜ=S₀·exp((μ−σ²/2)T+σ√T·Z), Z∼N(0,1). μ — годовой дрейф, σ — волатильность. Комиссии не учитываются; модель не прогнозирует реальный рынок.'],
        geometryIntro: ['Հավասարաչափ կետեր ենք ընտրում սահմանափակող ուղղանկյան կամ տուփի մեջ։ Մակերեսը կամ ծավալը ≈ տուփի չափը × ներսում հայտնված կետերի բաժինը։', 'Sample uniformly in a bounding rectangle or box. Area or volume ≈ box measure × fraction of points inside.', 'Выбираем равномерные точки в ограничивающем прямоугольнике или параллелепипеде. Площадь или объём ≈ мера области × доля точек внутри.'],
        seed: ['Սկզբնարժեք (seed)', 'Seed', 'Начальное значение (seed)'],
        n: ['Ընտրանքի քանակ (N)', 'Sample count (N)', 'Число выборок (N)'],
        mode: ['Օրինակ', 'Example', 'Пример'],
        david: ['Դավիթի երկու ինտեգրալները', 'David’s two integrals', 'Два интеграла Давида'],
        custom: ['Իմ ֆունկցիան', 'My function', 'Моя функция'],
        expression: ['Ֆունկցիա f(x)', 'Function f(x)', 'Функция f(x)'],
        a: ['Ստորին սահման a', 'Lower bound a', 'Нижний предел a'],
        b: ['Վերին սահման b', 'Upper bound b', 'Верхний предел b'],
        repeats: ['Անկախ կրկնություններ', 'Independent repetitions', 'Независимые повторы'],
        noRepeats: ['Առանց կրկնությունների', 'No repetitions', 'Без повторов'],
        run: ['Հաշվել փորձը', 'Run experiment', 'Запустить эксперимент'],
        running: ['Հաշվարկվում է…', 'Computing…', 'Вычисление…'],
        csv: ['Աղյուսակներ՝ CSV', 'Tables as CSV', 'Таблицы CSV'],
        png: ['Գրաֆիկներ՝ PNG', 'Charts as PNG', 'Графики PNG'],
        ready: ['Ընտրեք պարամետրերը և գործարկեք փորձը։ Նույն seed-ը և պարամետրերը տալիս են նույն արդյունքը։', 'Choose parameters and run. The same seed and parameters give the same result.', 'Выберите параметры и запустите опыт. Одинаковые seed и параметры дают одинаковый результат.'],
        seedNote: ['Գեներատորը համընկնում է NumPy-ի np.random.seed(seed) / RandomState համասեռ ընտրանքի հետ։ Լռելյայն seed=0, N=10000։', 'The uniform generator matches NumPy np.random.seed(seed) / RandomState. Defaults: seed=0, N=10000.', 'Равномерный генератор совпадает с NumPy np.random.seed(seed) / RandomState. По умолчанию seed=0, N=10000.'],
        estimate: ['Մոտարկում', 'Estimate', 'Оценка'],
        exact: ['Ճշգրիտ արժեք', 'Exact value', 'Точное значение'],
        reference: ['Սիմպսոնի հղումային արժեք', 'Simpson reference value', 'Опорное значение Симпсона'],
        error: ['Բացարձակ տարբերություն', 'Absolute difference', 'Абсолютное отклонение'],
        se: ['Ստանդարտ սխալ (SE)', 'Standard error (SE)', 'Стандартная ошибка (SE)'],
        ci: ['Մոտավոր 95% միջակայք', 'Approximate 95% interval', 'Приблизительный 95% интервал'],
        meanCi: ['Միջինի մոտավոր 95% միջակայք', 'Approximate 95% interval for the mean', 'Приблизительный 95% интервал среднего'],
        lossCi: ['Կորստի հավանականության 95% միջակայք', '95% interval for loss probability', '95% интервал вероятности убытка'],
        pointColors: ['Կանաչ՝ ներսում, վարդագույն՝ դրսում։', 'Green: inside; pink: outside.', 'Зелёный: внутри; розовый: снаружи.'],
        small: ['N<30․ նորմալ մոտարկման միջակայքը չի ցուցադրվում։', 'N<30: the normal approximation interval is not shown.', 'N<30: интервал по нормальному приближению не показывается.'],
        uncertainty: ['SE-ն գնահատում է մոտարկման տատանումը, իսկ բացարձակ սխալը համեմատում է հղումային արժեքի հետ։ N-ի աճը չի երաշխավորում ամեն քայլում ավելի փոքր սխալ։ Սովորական պայմաններում SE∝1/√N։', 'SE estimates sampling variability; absolute error compares with the reference. Increasing N does not guarantee a smaller error at every step. Under usual conditions SE∝1/√N.', 'SE оценивает случайный разброс, абсолютная ошибка сравнивает с опорным значением. Рост N не гарантирует уменьшения ошибки на каждом шаге. При обычных условиях SE∝1/√N.'],
        normalNote: ['Միջակայքը մեծ ընտրանքի նորմալ մոտարկում է․ այն հուսալի չէ բոլոր բաշխումների համար։ Փոքր կամ զրոյական SE-ն ինքնին ճշտության ապացույց չէ։', 'The interval uses a large-sample normal approximation; it is not reliable for every distribution. A small or zero SE alone does not prove accuracy.', 'Интервал использует нормальное приближение для большой выборки и подходит не всем распределениям. Малый или нулевой SE сам по себе не доказывает точность.'],
        first: ['Առաջին հինգ պատահական թվերը', 'First five random samples', 'Первые пять случайных чисел'],
        checkpoints: ['Նույն հաջորդականության առաջին N ընտրանքները', 'First N samples of the same sequence', 'Первые N значений одной последовательности'],
        exactSteps: ['Նյուտոն–Լեյբնիցի լուծում', 'Newton–Leibniz solution', 'Решение по Ньютону–Лейбницу'],
        sampleSteps: ['Առաջին հինգ ընտրանքի հաշվարկը', 'Calculation for the first five samples', 'Расчёт для первых пяти значений'],
        curve: ['Ֆունկցիա և առաջին ընտրանքները', 'Function and first samples', 'Функция и первые точки'],
        convergence: ['Մոտարկման զուգամիտություն․ գունավոր՝ ընտրանք, ընդհատ՝ հղումային արժեք։', 'Convergence: colored lines are estimates; dashed lines are references.', 'Сходимость: цветные линии — оценки, пунктир — опорные значения.'],
        plotPoints: ['Ցուցադրվում են առաջին առավելագույնը 2500 կետերը։ Բոլոր N կետերը մասնակցում են հաշվարկին։', 'The first up to 2500 points are displayed. All N points contribute to the calculation.', 'Показаны первые не более 2500 точек. В расчёте участвуют все N точек.'],
        projection: ['Եռաչափ կետերի XY պրոյեկցիա․ գույնը որոշվում է x²/a²+y²/b²+z²/c²≤1 պայմանով։', 'XY projection of 3D points; color uses x²/a²+y²/b²+z²/c²≤1.', 'Проекция 3D-точек на XY; цвет определяется условием x²/a²+y²/b²+z²/c²≤1.'],
        inside: ['Ներսում', 'Inside', 'Внутри'],
        wilson: ['95% միջակայքը հաշվվում է Վիլսոնի մեթոդով՝ ներսում հայտնվելու հավանականության համար, ապա մասշտաբավորվում։', 'The 95% interval uses Wilson’s method for the hit probability, then scales it.', '95% интервал рассчитан методом Уилсона для вероятности попадания и масштабирован.'],
        shape: ['Պատկեր / մարմին', 'Shape / solid', 'Фигура / тело'],
        ellipse: ['Էլիպս / շրջան (2D)', 'Ellipse / circle (2D)', 'Эллипс / круг (2D)'],
        ellipsoid: ['Էլիպսոիդ / գունդ (3D)', 'Ellipsoid / sphere (3D)', 'Эллипсоид / шар (3D)'],
        axisA: ['Կիսաառանցք a', 'Semi-axis a', 'Полуось a'],
        axisB: ['Կիսաառանցք b', 'Semi-axis b', 'Полуось b'],
        axisC: ['Կիսաառանցք c', 'Semi-axis c', 'Полуось c'],
        geometryNote: ['a=b դեպքում՝ շրջան, a=b=c դեպքում՝ գունդ։ Ճշգրիտ մակերեսը՝ πab, ծավալը՝ 4πabc/3։', 'a=b gives a circle; a=b=c gives a sphere. Exact area: πab; volume: 4πabc/3.', 'При a=b получается круг, при a=b=c — шар. Точная площадь: πab; объём: 4πabc/3.'],
        paths: ['Քայլքերի քանակ', 'Number of walks', 'Число блужданий'],
        steps: ['Քայլերի քանակ', 'Steps per walk', 'Шагов в блуждании'],
        probability: ['Աջ քայլի հավանականություն p', 'Right-step probability p', 'Вероятность шага вправо p'],
        mean: ['Ընտրանքի միջին', 'Sample mean', 'Выборочное среднее'],
        variance: ['Ընտրանքի դիսպերսիա', 'Sample variance', 'Выборочная дисперсия'],
        theoryMean: ['Տեսական միջին', 'Theoretical mean', 'Теоретическое среднее'],
        theoryVariance: ['Տեսական դիսպերսիա', 'Theoretical variance', 'Теоретическая дисперсия'],
        pathsCaption: ['Ցուցադրվում են առաջին առավելագույնը 20 հետագծերը։', 'The first up to 20 trajectories are shown.', 'Показаны первые не более 20 траекторий.'],
        endpoints: ['Վերջնական դիրքերի բաշխում', 'Distribution of final positions', 'Распределение конечных позиций'],
        initial: ['Սկզբնական գումար S₀', 'Initial amount S₀', 'Начальная сумма S₀'],
        drift: ['Տարեկան դրիֆտ μ (%)', 'Annual drift μ (%)', 'Годовой дрейф μ (%)'],
        volatility: ['Տատանողականություն σ (%)', 'Volatility σ (%)', 'Волатильность σ (%)'],
        years: ['Ժամանակ T (տարի)', 'Time T (years)', 'Время T (лет)'],
        lossProbability: ['Կորստի հավանականություն', 'Probability of loss', 'Вероятность убытка'],
        modelMean: ['Մոդելի տեսական միջին', 'Model theoretical mean', 'Теоретическое среднее модели'],
        range: ['Վերջնական գումարի 5–95% քվանտիլներ', 'Final amount: 5–95% quantiles', 'Квантили конечной суммы 5–95%'],
        riskCaption: ['Վերջնական գումարների բաշխում․ գունավոր՝ սցենարների հաճախականություն, ընդհատ՝ սկզբնական գումար։', 'Distribution of final amounts: colored bars show scenario counts; dashed line is the initial amount.', 'Распределение конечных сумм: столбцы — число сценариев, пунктир — начальная сумма.'],
        riskNote: ['VaR₉₅=S₀−q₀.₀₅․ դրական թիվը կորուստ է, բացասականը՝ շահույթ։ ES₉₅-ը վատագույն մոտ 5% սցենարների միջին կորուստն է։ Քվանտիլների միջակայքը սցենարների տիրույթ է, ոչ միջինի վստահության միջակայք։', 'VaR₉₅=S₀−q₀.₀₅: positive means loss, negative means gain. ES₉₅ is the average loss in the worst approximately 5% of scenarios. The quantile range describes scenarios, not confidence in the mean.', 'VaR₉₅=S₀−q₀.₀₅: плюс — убыток, минус — прибыль. ES₉₅ — средний убыток в худших примерно 5% сценариев. Диапазон квантилей описывает сценарии, а не доверительный интервал среднего.'],
        repetitionTitle: ['Անկախ կրկնությունների վերլուծություն', 'Analysis of independent repetitions', 'Анализ независимых повторов'],
        repetitionsNote: ['Յուրաքանչյուր կրկնություն ունի առանձին գեներատորի սկզբնարժեք։ Աղյուսակի հիմնական ընտրանքը չի փոխվում։ Ծածկույթը՝ քանի 95% միջակայք է պարունակում հղումային արժեքը։', 'Each repetition has a separate generator seed. The main sample is unchanged. Coverage counts 95% intervals containing the reference.', 'Каждый повтор использует отдельное начальное значение генератора. Основная выборка не меняется. Покрытие — число 95% интервалов, содержащих опорное значение.'],
        spread: ['Մոտարկումների ստանդարտ շեղում', 'Standard deviation of estimates', 'Стандартное отклонение оценок'],
        coverage: ['Միջակայքերի ծածկույթ', 'Interval coverage', 'Покрытие интервалами'],
        repeatedHistogram: ['Կրկնությունների մոտարկումների բաշխում՝ առաջին ֆունկցիայի համար։', 'Distribution of repeated estimates for the first function.', 'Распределение повторных оценок для первой функции.'],
        referenceNote: ['Սեփական ֆունկցիայի հղումը հաշվվում է Սիմպսոնի կանոնով․ այն անալիտիկ ճշգրիտ արժեք չէ։ Փորձը նախատեսված է վերջավոր, անընդհատ ֆունկցիաների համար։', 'For custom functions the reference uses Simpson’s rule, not an exact analytic value. This experiment is intended for finite, continuous functions.', 'Для своей функции опорное значение вычисляется правилом Симпсона и не является аналитически точным. Опыт рассчитан на конечные непрерывные функции.'],
        invalid: ['Ստուգեք դաշտերի սահմանները։ N՝ 1–100000, seed՝ ամբողջ թիվ 0–4294967295։ Ֆունկցիան պետք է վերջավոր լինի ընտրված միջակայքում։', 'Check the field limits. N: 1–100000; seed: integer 0–4294967295. The function must be finite over the selected interval.', 'Проверьте границы полей. N: 1–100000; seed: целое 0–4294967295. Функция должна быть конечной на выбранном интервале.'],
        limits: ['Սահմանները ստուգեք․ a≠b, |a| և |b| ≤10000։', 'Check bounds: a≠b, |a| and |b| ≤10000.', 'Проверьте пределы: a≠b, |a| и |b| ≤10000.'],
        samples: ['Ընտրանքներ', 'Samples', 'Выборки'],
        frequency: ['Հաճախականություն', 'Frequency', 'Частота'],
        value: ['Արժեք', 'Value', 'Значение'],
        result: ['Արդյունք', 'Result', 'Результат'],
        view: ['Ցուցադրման ձև', 'Display mode', 'Режим просмотра'],
        guided: ['Քայլ առ քայլ', 'Step by step', 'Шаг за шагом'],
        full: ['Բոլոր արդյունքները', 'All results', 'Все результаты'],
        previous: ['Նախորդ քայլը', 'Previous step', 'Предыдущий шаг'],
        next: ['Հաջորդ քայլը', 'Next step', 'Следующий шаг'],
        restartGuide: ['Սկսել քայլերը նորից', 'Restart the steps', 'Начать шаги заново'],
        stepSample: ['Ընտրիր պատահական թվերը', 'Choose random samples', 'Выберите случайные числа'],
        stepValues: ['Հաշվիր ֆունկցիայի արժեքները', 'Evaluate the function', 'Вычислите значения функции'],
        stepMean: ['Գտիր ընտրանքի միջինը', 'Find the sample mean', 'Найдите выборочное среднее'],
        stepIntegral: ['Մոտարկիր ինտեգրալը', 'Estimate the integral', 'Оцените интеграл'],
        stepCompare: ['Համեմատիր արդյունքները', 'Compare the results', 'Сравните результаты'],
        sampleExplanation: ['Համակարգիչը միջակայքից հավասարաչափ ընտրում է N թիվ։ Ստորև առաջին առավելագույնը հինգն են։ Նույն seed-ը պահպանում է ընտրանքը։', 'The computer samples N numbers uniformly from the interval. The first up to five are shown below. The same seed reproduces the sample.', 'Компьютер равномерно выбирает N чисел из интервала. Ниже показаны первые не более пяти. Одинаковый seed воспроизводит выборку.'],
        valuesExplanation: ['Յուրաքանչյուր ընտրված xᵢ-ի համար հաշվում ենք f(xᵢ)։ Երկու ֆունկցիայի համար օգտագործվում են նույն xᵢ-ները։', 'Evaluate f(xᵢ) at each sampled xᵢ. Both functions use the same xᵢ values.', 'Вычисляем f(xᵢ) для каждого выбранного xᵢ. Обе функции используют одни и те же xᵢ.'],
        meanExplanation: ['Գումարում ենք բոլոր N արժեքները և բաժանում N-ի։ Այստեղ հաշվի են առնված ամբողջ ընտրանքի արժեքները։', 'Add all N function values and divide by N. The calculation below uses the entire sample.', 'Складываем все N значений функции и делим на N. Ниже учтена вся выборка.'],
        integralExplanation: ['Ընտրանքի միջինը բազմապատկում ենք միջակայքի երկարությամբ՝ b−a։ [0,1]-ի դեպքում այդ գործակիցը 1 է։', 'Multiply the sample mean by the interval width b−a. On [0,1] this factor is 1.', 'Умножаем выборочное среднее на ширину интервала b−a. На [0,1] этот множитель равен 1.'],
    };
    const modes = ['integral', 'pi', 'walk', 'risk', 'geometry'];
    const panelId = mode => mode === 'walk' ? 'sim-research-walk' : 'lab-panel-research-' + mode;
    const results = new Map();
    const revisions = new Map();
    const t = key => copy[key]?.[({ hy: 0, en: 1, ru: 2 })[typeof currentLang === 'undefined' ? 'hy' : currentLang] ?? 0] || key;
    const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
    const num = x => x === null || !Number.isFinite(x) ? '—' : Math.abs(x) > 0 && Math.abs(x) < 0.000001 ? x.toExponential(4) : x.toFixed(6);
    const interval = ci => ci ? `[${num(ci[0])}, ${num(ci[1])}]` : '—';
    const label = key => `<span data-research-t="${key}">${t(key)}</span>`;
    const input = (mode, key, value, min, max, step = 1) => `<label>${label(key)}<input name="${key}" id="research-${mode}-${key}" type="number" value="${value}" min="${min}" max="${max}" step="${step}" required></label>`;
    const select = (key, options) => `<label>${label(key)}<select name="${key}">${options.map(([value, key]) => `<option value="${value}" data-research-t="${key}">${t(key)}</option>`).join('')}</select></label>`;
    const table = (headers, rows) => `<div class="research-table-wrap" tabindex="0"><table class="research-table"><thead><tr>${headers.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(row => `<tr>${row.map(v => `<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    const stat = (key, value) => `<div class="research-stat"><span>${esc(t(key))}</span><strong>${esc(value)}</strong></div>`;
    const note = key => `<p class="research-note">${esc(t(key))}</p>`;
    const heading = key => `<h3>${esc(t(key))}</h3>`;
    const charts = (mode, firstCaption, secondCaption, names = []) => {
        const legend = names.length ? `<span class="research-legend">${names.map((name, j) => `<span style="color:${palette[j]}">● ${esc(name)}</span>`).join('')}</span>` : '';
        return `<div class="research-grid"><figure><canvas id="research-${mode}-plot" role="img" aria-label="${esc(t(firstCaption) + (names.length ? ' · ' + names.join(', ') : ''))}"></canvas><figcaption>${esc(t(firstCaption))}${legend}</figcaption></figure><figure><canvas id="research-${mode}-chart" role="img" aria-label="${esc(t(secondCaption) + (names.length ? ' · ' + names.join(', ') : ''))}"></canvas><figcaption>${esc(t(secondCaption))}${legend}</figcaption></figure></div>`;
    };

    function initialize() {
        const simulationTabs = document.querySelector('.sim-tabs');
        const labTabs = document.querySelector('.lab-mode-tabs');
        if (!simulationTabs || !labTabs) return;
        for (const mode of modes) {
            const isSimulation = mode === 'walk';
            const tabs = isSimulation ? simulationTabs : labTabs;
            const id = 'research-' + mode;
            const button = document.createElement('button');
            button.className = isSimulation ? 'glow-btn secondary sim-tab-btn' : 'lab-mode-btn';
            if (!isSimulation) button.id = 'lab-tab-' + id;
            button.dataset.researchT = mode;
            button.textContent = t(mode);
            button.addEventListener('click', () => isSimulation ? showSimulation(id, button) : switchLabMode(id, button));
            tabs.append(button);

            const panel = document.createElement('div');
            panel.id = panelId(mode);
            panel.className = `${isSimulation ? 'sim-panel' : 'lab-subpanel'} glass-panel research-panel`;
            if (!isSimulation) panel.style.gridColumn = '1 / -1';
            panel.style.display = 'none';
            let fields = input(mode, 'seed', 0, 0, 4294967295);
            if (mode !== 'walk') fields += input(mode, 'n', 10000, 1, 100000);
            if (mode === 'integral') {
                fields += select('view', [['guided', 'guided'], ['full', 'full']]);
                fields += select('mode', [['david', 'david'], ['custom', 'custom']]);
                fields += `<div class="research-wide research-form" data-custom hidden><label>${label('expression')}<input name="expression" value="exp(x)" maxlength="200"></label>${input(mode, 'a', 0, -10000, 10000, 'any')}${input(mode, 'b', 1, -10000, 10000, 'any')}</div>`;
                fields += select('repeats', [['0', 'noRepeats'], ['20', '20'], ['50', '50']]);
            }
            if (mode === 'walk') fields += input(mode, 'paths', 200, 1, 1000) + input(mode, 'steps', 100, 1, 1000) + input(mode, 'probability', 0.5, 0, 1, 'any');
            if (mode === 'risk') fields += input(mode, 'initial', 1000, 1, 1e9, 'any') + input(mode, 'drift', 5, -100, 100, 'any') + input(mode, 'volatility', 20, 0, 200, 'any') + input(mode, 'years', 1, 0.01, 10, 'any');
            if (mode === 'geometry') fields += select('shape', [['ellipse', 'ellipse'], ['ellipsoid', 'ellipsoid']]) + input(mode, 'axisA', 2, 0.01, 100, 'any') + input(mode, 'axisB', 1, 0.01, 100, 'any') + `<div data-axis-c hidden>${input(mode, 'axisC', 1, 0.01, 100, 'any')}</div>`;
            panel.innerHTML = `<h2>${label(mode)}</h2><p class="research-intro">${label(mode + 'Intro')}</p><form class="research-form">${fields}<div class="research-actions research-wide"><button type="submit" class="glow-btn" data-run>${label('run')}</button><button type="button" class="glow-btn secondary" data-export="csv" disabled>${label('csv')}</button><button type="button" class="glow-btn secondary" data-export="png" disabled>${label('png')}</button></div></form><p class="research-note">${label(mode === 'integral' ? 'seedNote' : mode === 'geometry' ? 'geometryNote' : 'ready')}</p><div class="research-output" aria-live="polite">${note('ready')}</div>`;
            panel.querySelectorAll('[hidden] input').forEach(input => { input.disabled = true; });
            tabs.parentElement.append(panel);
            panel.querySelector('form').addEventListener('submit', event => { event.preventDefault(); run(mode); });
            panel.querySelector('form').addEventListener('input', event => {
                if (event.target.name === 'view') {
                    const saved = results.get(mode);
                    if (saved) { saved.fields.view = event.target.value; saved.guideStep = 0; render(mode); }
                    return;
                }
                revisions.set(mode, (revisions.get(mode) || 0) + 1);
                results.delete(mode);
                panel.querySelector('[data-run]').disabled = false;
                panel.querySelector('[data-run]').textContent = t('run');
                panel.querySelectorAll('[data-export]').forEach(b => { b.disabled = true; });
                const output = panel.querySelector('.research-output');
                clearMathContainer(output);
                output.innerHTML = note('ready');
                panel.querySelector('[data-custom]')?.toggleAttribute('hidden', panel.querySelector('[name=mode]').value !== 'custom');
                panel.querySelector('[data-axis-c]')?.toggleAttribute('hidden', panel.querySelector('[name=shape]').value !== 'ellipsoid');
                panel.querySelectorAll('[data-custom] input, [data-axis-c] input').forEach(input => { input.disabled = Boolean(input.closest('[hidden]')); });
            });
            panel.querySelectorAll('[data-export]').forEach(b => b.addEventListener('click', () => exportResult(mode, b.dataset.export)));
            panel.querySelector('.research-output').addEventListener('click', event => {
                const button = event.target.closest('[data-guide-step]');
                const saved = results.get(mode);
                if (!button || !saved) return;
                saved.guideStep = Number(button.dataset.guideStep);
                render(mode);
                const output = panel.querySelector('.research-output');
                output.querySelector('[data-guide-heading]')?.focus({ preventScroll: true });
                output.scrollIntoView({ block: 'start', behavior: 'instant' });
            });
        }
    }

    function integralGuide(saved, fullHtml) {
        const { data: d, options: o } = saved;
        const step = saved.guideStep || 0;
        const titles = ['stepSample', 'stepValues', 'stepMean', 'stepIntegral', 'stepCompare'];
        let content;
        if (step === 0) {
            content = note('sampleExplanation') + `<p class="research-steps">N = ${o.n}; seed = ${o.seed}; xᵢ ∈ [${num(Math.min(o.a, o.b))}, ${num(Math.max(o.a, o.b))}]</p>`;
            content += table(['i', 'xᵢ'], d.first.map(row => [row[0], num(row[1])]));
        } else if (step === 1) {
            content = note('valuesExplanation') + table(['i', 'xᵢ', ...(d.custom ? ['f(xᵢ)'] : ['xᵢ²', 'exp(xᵢ)'])], d.first.map(row => row.map((v, j) => j ? num(v) : v)));
        } else if (step === 2) {
            content = note('meanExplanation') + `<div class="research-steps">${d.results.map((r, j) => {
                const mean = r.estimate / (o.b - o.a);
                return `<p><strong>${esc(d.names[j])}</strong><br>Σ f(xᵢ) ≈ ${num(mean * o.n)}<br>Σ f(xᵢ) / N ≈ ${num(mean * o.n)} / ${o.n} ≈ ${num(mean)}</p>`;
            }).join('')}</div>`;
        } else if (step === 3) {
            content = note('integralExplanation') + `<div class="research-steps">${d.results.map((r, j) => `<p><strong>${esc(d.names[j])}</strong><br>Iₙ = (b − a) × Σ f(xᵢ) / N<br>Iₙ ≈ (${num(o.b)} − ${num(o.a)}) × ${num(r.estimate / (o.b - o.a))} ≈ ${num(r.estimate)}</p>`).join('')}</div>`;
        } else content = fullHtml;
        return `<div class="research-guide"><ol class="research-guide-progress" aria-label="${esc(t('guided'))}">${titles.map((title, i) => `<li ${i === step ? 'aria-current="step"' : ''} class="${i <= step ? 'reached' : ''}">${i + 1}. ${esc(t(title))}</li>`).join('')}</ol><h3 data-guide-heading tabindex="-1">${step + 1}/5 · ${esc(t(titles[step]))}</h3>${content}<div class="research-actions"><button type="button" class="glow-btn secondary" data-guide-step="${step - 1}" ${step === 0 ? 'disabled' : ''}>${esc(t('previous'))}</button><button type="button" class="glow-btn" data-guide-step="${step === 4 ? 0 : step + 1}">${esc(t(step === 4 ? 'restartGuide' : 'next'))}</button></div></div>`;
    }

    async function run(mode) {
        const panel = document.getElementById(panelId(mode)), form = panel.querySelector('form');
        if (!form.reportValidity()) return;
        const token = (revisions.get(mode) || 0) + 1, btn = panel.querySelector('[data-run]'), output = panel.querySelector('.research-output');
        revisions.set(mode, token);
        const fields = Object.fromEntries(new FormData(form));
        const value = key => Number(fields[key]);
        btn.disabled = true;
        btn.textContent = t('running');
        panel.querySelectorAll('[data-export]').forEach(b => { b.disabled = true; });
        clearMathContainer(output);
        output.innerHTML = note('running');
        // Give the busy state a paint before running bounded local calculations.
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        try {
            const options = { seed: value('seed'), n: value('n') };
            let data;
            if (mode === 'integral') {
                const custom = fields.mode === 'custom';
                options.a = custom ? value('a') : 0;
                options.b = custom ? value('b') : 1;
                if (![options.a, options.b].every(Number.isFinite) || options.a === options.b || Math.max(Math.abs(options.a), Math.abs(options.b)) > 10000) throw new Error('limits');
                options.functions = custom ? [MathEvaluator.compile(fields.expression)] : [x => x * x, Math.exp];
                if (custom && CalculusEngine.checkSingularity(options.functions[0], Math.min(options.a, options.b), Math.max(options.a, options.b), 1000).hasSingularity) throw new Error('finite');
                const references = custom ? [CalculusEngine.simpson(options.functions[0], options.a, options.b, 10000)] : [1 / 3, Math.E - 1];
                if (!references.every(Number.isFinite)) throw new Error('finite');
                data = { ...E.integrals(options), custom, references, names: custom ? [fields.expression] : ['x²', 'eˣ'], repeated: [] };
                const seeds = new E.RandomState(options.seed);
                for (let i = 0; i < value('repeats'); i++) {
                    const seed = seeds.uint32();
                    const trial = E.integrals({ ...options, seed });
                    data.repeated.push({ seed, results: trial.results });
                    await new Promise(resolve => setTimeout(resolve, 0));
                    if (token !== revisions.get(mode)) return;
                }
            } else if (mode === 'pi' || mode === 'geometry') {
                options.shape = mode === 'pi' ? 'pi' : fields.shape;
                options.axes = mode === 'pi' ? [1, 1, 1] : [value('axisA'), value('axisB'), fields.shape === 'ellipsoid' ? value('axisC') : 1];
                data = E.geometry(options);
            } else if (mode === 'walk') {
                Object.assign(options, { paths: value('paths'), steps: value('steps'), p: value('probability') });
                data = E.walks(options);
            } else {
                Object.assign(options, { initial: value('initial'), mu: value('drift') / 100, sigma: value('volatility') / 100, years: value('years') });
                data = E.risk(options);
            }
            if (token !== revisions.get(mode)) return;
            results.set(mode, { data, options, fields });
            render(mode);
            panel.querySelectorAll('[data-export]').forEach(b => { b.disabled = false; });
        } catch (error) {
            if (token === revisions.get(mode)) {
                results.delete(mode);
                output.innerHTML = `<p class="research-error" role="alert">${esc(t(error.message === 'limits' ? 'limits' : 'invalid'))}</p>`;
            }
        } finally {
            if (token === revisions.get(mode)) {
                btn.disabled = false;
                btn.textContent = t('run');
            }
        }
    }

    function render(mode, showAll = false) {
        const saved = results.get(mode);
        if (!saved) return;
        const { data: d, options: o } = saved;
        const output = document.querySelector(`#${panelId(mode)} .research-output`);
        clearMathContainer(output);
        let html = '';
        if (mode === 'integral') {
            html += `<div class="research-summary">${d.results.map((r, j) => stat('result', d.names[j]) + stat('estimate', num(r.estimate)) + stat(d.custom ? 'reference' : 'exact', num(d.references[j])) + stat('error', num(Math.abs(r.estimate - d.references[j]))) + stat('se', num(r.se)) + stat('ci', interval(r.ci))).join('')}</div>`;
            if (!d.custom) html += heading('exactSteps') + `<div class="research-steps"><p>∫₀¹ x² dx = [x³/3]₀¹ = 1³/3 − 0³/3 = 1/3 ≈ ${num(1 / 3)}</p><p>∫₀¹ eˣ dx = [eˣ]₀¹ = e¹ − e⁰ = e − 1 ≈ ${num(Math.E - 1)}</p></div>`;
            else html += note('referenceNote');
            html += heading('first') + table(['i', 'xᵢ', ...(d.custom ? ['f(xᵢ)'] : ['xᵢ²', 'exp(xᵢ)'])], d.first.map(row => row.map((x, j) => j ? num(x) : x)));
            html += heading('sampleSteps') + `<div class="research-steps">${d.names.map((name, j) => {
                const vals = d.first.map(row => row[j + 2]), sum = vals.reduce((s, y) => s + y, 0), estimate = (o.b - o.a) * sum / vals.length;
                return `<p>${esc(name)}: (${num(o.b)} − ${num(o.a)}) × (${vals.map(num).join(' + ')}) / ${vals.length} ≈ <strong>${num(estimate)}</strong><br>Σf(xᵢ) ≈ ${num(sum)}; |I − Iₙ| ≈ ${num(Math.abs(d.references[j] - estimate))}</p>`;
            }).join('')}</div>`;
            html += heading('checkpoints') + table(['N', ...d.names.flatMap(n => [n + ' · ' + t('estimate'), n + ' · ' + t('error')])], d.rows.map(row => [row.n, ...row.results.flatMap((r, j) => [num(r.estimate), num(Math.abs(r.estimate - d.references[j]))]) ]));
            html += charts(mode, 'curve', 'convergence', d.names) + note('uncertainty') + note(o.n < 30 ? 'small' : 'normalNote');
            if (d.repeated.length) {
                html += heading('repetitionTitle') + note('repetitionsNote');
                const summary = d.names.map((name, j) => {
                    const vals = d.repeated.map(trial => trial.results[j].estimate), mean = vals.reduce((s, x) => s + x, 0) / vals.length;
                    const sd = Math.sqrt(vals.reduce((s, x) => s + (x - mean) ** 2, 0) / (vals.length - 1));
                    const covered = d.repeated.filter(trial => { const ci = trial.results[j].ci; return ci && ci[0] <= d.references[j] && d.references[j] <= ci[1]; }).length;
                    return [name, vals.length, num(mean), num(sd), o.n >= 30 ? `${covered}/${vals.length}` : '—'];
                });
                html += table(['f(x)', t('repeats'), t('mean'), t('spread'), t('coverage')], summary);
                html += `<figure><canvas id="research-integral-repeated" style="height:260px" role="img" aria-label="${esc(t('repeatedHistogram'))}"></canvas><figcaption class="research-note">${esc(t('repeatedHistogram'))}</figcaption></figure>`;
            }
        } else if (mode === 'pi' || mode === 'geometry') {
            html += `<div class="research-summary">${stat('n', o.n)}${stat('inside', d.hits)}${stat('estimate', num(d.estimate))}${stat('exact', num(d.exact))}${stat('error', num(Math.abs(d.estimate - d.exact)))}${stat('se', num(d.se))}${stat('ci', interval(d.ci))}</div>`;
            html += `<div class="research-steps">${mode === 'pi' ? `π ≈ 4 × ${d.hits} / ${o.n} = ${num(d.estimate)}` : `${d.dims === 2 ? 'S' : 'V'} ≈ ${num(d.box)} × ${d.hits} / ${o.n} = ${num(d.estimate)}`}</div>`;
            html += charts(mode, d.dims === 3 ? 'projection' : 'plotPoints', 'convergence') + note('pointColors');
            html += table(['N', t('inside'), t('estimate'), t('error')], d.rows.map(row => row.map((x, j) => j < 2 ? x : num(x)))) + note('wilson');
        } else if (mode === 'walk') {
            html += `<div class="research-summary">${stat('mean', num(d.estimate))}${stat('theoryMean', num(d.exactMean))}${stat('variance', num(d.variance))}${stat('theoryVariance', num(d.exactVariance))}${stat('se', num(d.se))}${stat('meanCi', interval(d.ci))}</div>` + charts(mode, 'pathsCaption', 'endpoints');
            html += table(['i', t('value')], d.endpoints.slice(0, 10).map((x, i) => [i + 1, x])) + note(o.paths < 30 ? 'small' : 'normalNote');
        } else {
            html += `<div class="research-summary">${stat('mean', num(d.estimate))}${stat('modelMean', num(d.exact))}${stat('lossProbability', (100 * d.lossProbability).toFixed(2) + '%')}${stat('lossCi', '[' + d.lossCi.map(x => (100 * x).toFixed(2) + '%').join(', ') + ']')}${stat('range', interval([d.q05, d.q95]))}${stat('se', num(d.se))}${stat('meanCi', interval(d.ci))}${stat('VaR₉₅', num(d.var95))}${stat('ES₉₅', num(d.expectedShortfall95))}</div>` + charts(mode, 'riskCaption', 'convergence');
            html += note('riskNote') + note(o.n < 30 ? 'small' : 'normalNote');
            html += table(['i', t('value')], d.terminals.slice(0, 10).map((x, i) => [i + 1, num(x)]));
        }
        if (mode === 'integral' && saved.fields.view === 'guided' && !showAll) html = integralGuide(saved, html);
        output.innerHTML = html;
        requestAnimationFrame(() => draw(mode));
    }

    const palette = ['#a78bfa', '#10b981', '#38bdf8', '#f59e0b', '#fb7185'];
    function plot(canvas, series, { refs = [], dots = [], xRange, yRange, circle = false, square = false } = {}) {
        if (!canvas || canvas.offsetWidth === 0) return;
        const w = canvas.clientWidth, h = canvas.clientHeight, dpr = window.devicePixelRatio || 1;
        canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr);
        const light = document.documentElement.dataset.theme === 'light';
        ctx.fillStyle = light ? '#ffffff' : '#100b20'; ctx.fillRect(0, 0, w, h);
        const all = series.flatMap(s => s.points).concat(dots.map(d => d.point)).filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
        if (!all.length) return;
        let [xmin, xmax] = xRange || [Math.min(...all.map(p => p[0])), Math.max(...all.map(p => p[0]))];
        let [ymin, ymax] = yRange || [Math.min(...all.map(p => p[1]), ...refs), Math.max(...all.map(p => p[1]), ...refs)];
        if (xmin === xmax) { xmin -= 1; xmax += 1; }
        if (ymin === ymax) { ymin -= 1; ymax += 1; }
        if (!yRange) { const pad = (ymax - ymin) * .1; ymin -= pad; ymax += pad; }
        let pw = w - 82, ph = h - 58;
        if (square) {
            const unit = Math.min(pw / (xmax - xmin), ph / (ymax - ymin));
            pw = unit * (xmax - xmin); ph = unit * (ymax - ymin);
        }
        const left = 64 + (w - 82 - pw) / 2, top = 14;
        const X = x => left + (x - xmin) / (xmax - xmin) * pw;
        const Y = y => top + ph - (y - ymin) / (ymax - ymin) * ph;
        ctx.font = '11px Manrope, sans-serif'; ctx.fillStyle = light ? '#475569' : '#cbd5e1';
        const tick = (x, span) => {
            if (Math.abs(x) >= 1e6 || (x !== 0 && Math.abs(x) < .00001)) return x.toExponential(1);
            const digits = Math.max(0, Math.min(6, 2 - Math.floor(Math.log10(span))));
            return Number(x.toFixed(digits)).toString();
        };
        for (let i = 0; i <= 4; i++) {
            const y = ymin + (ymax - ymin) * i / 4, x = xmin + (xmax - xmin) * i / 4;
            ctx.textAlign = 'right'; ctx.fillText(tick(y, ymax - ymin), left - 8, Y(y) + 4);
            ctx.textAlign = 'center'; ctx.fillText(tick(x, xmax - xmin), X(x), top + ph + 22);
            ctx.strokeStyle = light ? '#e2e8f0' : '#ffffff18'; ctx.beginPath(); ctx.moveTo(left, Y(y)); ctx.lineTo(left + pw, Y(y)); ctx.stroke();
        }
        ctx.save(); ctx.beginPath(); ctx.rect(left, top, pw, ph); ctx.clip();
        refs.forEach((ref, i) => { ctx.strokeStyle = palette[i % palette.length]; ctx.setLineDash([5, 5]); ctx.beginPath(); ctx.moveTo(left, Y(ref)); ctx.lineTo(left + pw, Y(ref)); ctx.stroke(); });
        ctx.setLineDash([]);
        series.forEach((s, i) => {
            ctx.strokeStyle = s.color || palette[i % palette.length]; ctx.lineWidth = 1.5;
            ctx.setLineDash(s.dashed ? [5, 5] : []);
            ctx.beginPath(); s.points.forEach(([x, y], j) => j ? ctx.lineTo(X(x), Y(y)) : ctx.moveTo(X(x), Y(y))); ctx.stroke();
            if (s.fill) { ctx.fillStyle = '#a78bfa55'; ctx.fill(); }
        });
        ctx.setLineDash([]);
        if (circle) {
            ctx.strokeStyle = '#fbbf24'; ctx.lineWidth = 2; ctx.beginPath();
            const axes = Array.isArray(circle) ? circle : [1, 1];
            for (let i = 0; i <= 200; i++) { const theta = i / 200 * Math.PI * 2; const x = X(axes[0] * Math.cos(theta)), y = Y(axes[1] * Math.sin(theta)); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
            ctx.stroke();
        }
        dots.forEach(d => { ctx.fillStyle = d.color; ctx.beginPath(); ctx.arc(X(d.point[0]), Y(d.point[1]), 2, 0, Math.PI * 2); ctx.fill(); });
        ctx.restore();
        ctx.strokeStyle = light ? '#94a3b8' : '#ffffff55'; ctx.strokeRect(left, top, pw, ph);
    }

    function histogram(canvas, values, reference) {
        const min = values.reduce((a, b) => Math.min(a, b), Infinity), max = values.reduce((a, b) => Math.max(a, b), -Infinity), bins = Math.min(30, Math.max(1, Math.ceil(Math.sqrt(values.length))));
        const width = max === min ? 1 : (max - min) / bins;
        const counts = Array(bins).fill(0);
        values.forEach(x => counts[Math.min(bins - 1, Math.floor((x - min) / width))]++);
        // Step polygons draw the histogram without another chart dependency.
        const pts = counts.flatMap((n, i) => [[min + i * width, 0], [min + i * width, n], [min + (i + 1) * width, n], [min + (i + 1) * width, 0]]);
        plot(canvas, [{ points: pts, fill: true }], { yRange: [0, Math.max(...counts) * 1.1] });
        if (Number.isFinite(reference)) {
            // Use the same plot bounds for a vertical reference line.
            plot(canvas, [{ points: pts, fill: true }, { points: [[reference, 0], [reference, Math.max(...counts)]], color: '#fbbf24', dashed: true }], { xRange: [Math.min(min, reference), Math.max(min + bins * width, reference)], yRange: [0, Math.max(...counts) * 1.1] });
        }
    }

    function draw(mode) {
        const saved = results.get(mode);
        if (!saved) return;
        const { data: d, options: o } = saved;
        const canvas = document.getElementById(`research-${mode}-plot`), chart = document.getElementById(`research-${mode}-chart`);
        if (mode === 'integral') {
            const series = o.functions.map(fn => ({ points: Array.from({ length: 201 }, (_, i) => { const x = o.a + (o.b - o.a) * i / 200; return [x, fn(x)]; }) }));
            plot(canvas, series, { dots: d.first.flatMap(row => row.slice(2).map((y, j) => ({ point: [row[1], y], color: palette[j] }))) });
            plot(chart, d.names.map((_, j) => ({ points: d.history.map(row => [row.n, row.values[j]]) })), { refs: d.references, xRange: [0, o.n] });
            if (d.repeated.length) histogram(document.getElementById('research-integral-repeated'), d.repeated.map(row => row.results[0].estimate), d.references[0]);
        } else if (mode === 'pi' || mode === 'geometry') {
            const [a, b] = o.axes;
            plot(canvas, [], { dots: d.points.map(p => ({ point: p.coords.slice(0, 2).map((v, j) => mode === 'pi' ? v : v * o.axes[j]), color: p.inside ? '#10b981' : '#fb7185' })), xRange: mode === 'pi' ? [0, 1] : [-a, a], yRange: mode === 'pi' ? [0, 1] : [-b, b], circle: mode === 'pi' ? true : [a, b], square: true });
            plot(chart, [{ points: d.history.map(row => [row.n, row.values[0]]) }], { refs: [d.exact], xRange: [0, o.n] });
        } else if (mode === 'walk') {
            plot(canvas, d.trajectories.map(path => ({ points: path.map((x, i) => [i, x]) })));
            histogram(chart, d.endpoints, d.exactMean);
        } else {
            histogram(canvas, d.terminals, o.initial);
            let sum = 0;
            const points = [];
            d.terminals.forEach((x, i) => { sum += x; if (i < 10 || (i + 1) % Math.max(1, Math.floor(o.n / 200)) === 0) points.push([i + 1, sum / (i + 1)]); });
            plot(chart, [{ points }], { refs: [d.exact], xRange: [0, o.n] });
        }
    }

    function exportResult(mode, format) {
        const saved = results.get(mode);
        if (!saved) return;
        const { data: d, options: o, fields } = saved;
        let blob;
        const save = (blob, ext) => {
            const url = URL.createObjectURL(blob), a = document.createElement('a');
            a.href = url; a.download = `probspace-${mode}-seed-${o.seed}.${ext}`; a.click();
            setTimeout(() => URL.revokeObjectURL(url), 1000);
        };
        if (format === 'png') {
            const restoreGuide = mode === 'integral' && saved.fields.view === 'guided' && (saved.guideStep || 0) < 4;
            if (restoreGuide) { render(mode, true); draw(mode); }
            const canvases = [...document.querySelectorAll(`#${panelId(mode)} .research-output canvas`)];
            const canvas = document.createElement('canvas');
            canvas.width = Math.max(1200, ...canvases.map(c => c.width));
            canvas.height = 180 + canvases.reduce((n, c) => n + Math.round(c.height * canvas.width / c.width) + 80, 0);
            const ctx = canvas.getContext('2d'); ctx.fillStyle = '#100b20'; ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff'; ctx.font = '16px sans-serif'; ctx.fillText(`ProbSpace · ${t(mode)} · seed=${o.seed}`, 18, 26);
            const wrap = (text, y) => {
                let line = '';
                for (const word of text.split(' ')) {
                    if (ctx.measureText(line + word).width > canvas.width - 36) { ctx.fillText(line, 18, y); line = ''; y += 20; }
                    line += word + ' ';
                }
                ctx.fillText(line, 18, y);
                return y + 24;
            };
            ctx.font = '14px sans-serif';
            let y = wrap(Object.entries(fields).map(([k, v]) => `${k}=${v}`).join(' · '), 54) + 20;
            canvases.forEach(c => {
                ctx.fillStyle = '#ffffff'; y = wrap(c.getAttribute('aria-label'), y);
                const height = Math.round(c.height * canvas.width / c.width);
                ctx.drawImage(c, 0, y, canvas.width, height); y += height + 30;
            });
            const cropped = document.createElement('canvas');
            cropped.width = canvas.width; cropped.height = Math.min(canvas.height, y);
            cropped.getContext('2d').drawImage(canvas, 0, 0);
            cropped.toBlob(blob => { if (blob) save(blob, 'png'); });
            if (restoreGuide) render(mode);
            return;
        }
        const rows = [['ProbSpace', mode], ...Object.entries(fields).map(([k, v]) => [k, v]), []];
        if (mode === 'integral') {
            rows.push(['N', ...d.names.flatMap(name => [name + ' estimate', name + ' absolute error', name + ' SE', name + ' CI low', name + ' CI high'])]);
            d.rows.forEach(row => rows.push([row.n, ...row.results.flatMap((r, j) => [r.estimate, Math.abs(r.estimate - d.references[j]), r.se, ...(r.ci || ['', ''])])]));
            rows.push([], ['i', 'x', ...d.names], ...d.first, [], ['reference', ...d.references]);
            if (d.repeated.length) {
                rows.push([], ['repetition', 'seed', ...d.names.flatMap(name => [name + ' estimate', name + ' SE', name + ' CI low', name + ' CI high'])]);
                d.repeated.forEach((trial, i) => rows.push([i + 1, trial.seed, ...trial.results.flatMap(r => [r.estimate, r.se, ...(r.ci || ['', ''])])]));
            }
        } else if (mode === 'pi' || mode === 'geometry') {
            rows.push(['N', 'hits', 'estimate', 'absolute error'], ...d.rows, [], ['exact', d.exact], ['SE', d.se], ['Wilson CI', ...d.ci]);
        } else if (mode === 'walk') {
            rows.push(['mean', d.estimate], ['variance', d.variance], ['theoretical mean', d.exactMean], ['theoretical variance', d.exactVariance], ['SE', d.se], ['CI', ...(d.ci || ['', ''])], [], ['walk', 'endpoint'], ...d.endpoints.map((v, i) => [i + 1, v]));
        } else {
            rows.push(['mean', d.estimate], ['theoretical mean', d.exact], ['SE', d.se], ['mean CI', ...(d.ci || ['', ''])], ['loss probability', d.lossProbability], ['loss probability Wilson CI', ...d.lossCi], ['q05', d.q05], ['q95', d.q95], ['VaR95', d.var95], ['ES95', d.expectedShortfall95], [], ['scenario', 'final amount']);
            d.terminals.forEach((v, i) => rows.push([i + 1, v]));
        }
        // Prefix formula-like strings so a custom expression is safe to open in a spreadsheet.
        const cell = value => { let s = value == null ? '' : String(value); if (typeof value === 'string' && /^[=+\-@\t\r]/.test(s)) s = "'" + s; return '"' + s.replace(/"/g, '""') + '"'; };
        blob = new Blob(['\uFEFF' + rows.map(row => row.map(cell).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' });
        save(blob, 'csv');
    }

    window.refreshResearchLanguage = function () {
        document.querySelectorAll('[data-research-t]').forEach(el => { el.textContent = t(el.dataset.researchT); });
        for (const mode of modes) {
            const panel = document.getElementById(panelId(mode));
            if (!panel) continue;
            if (results.has(mode)) render(mode);
            else if (!panel.querySelector('[data-run]').disabled) panel.querySelector('.research-output').innerHTML = note('ready');
        }
    };
    window.refreshResearchView = function () {
        requestAnimationFrame(() => {
            for (const mode of modes) {
                const panel = document.getElementById(panelId(mode));
                if (panel?.offsetWidth && panel.closest('.page-section')?.classList.contains('active-section')) draw(mode);
            }
        });
    };
    window.addEventListener('resize', window.refreshResearchView);
    document.addEventListener('DOMContentLoaded', initialize);
})();
