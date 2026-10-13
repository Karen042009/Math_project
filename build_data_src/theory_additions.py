"""Supplementary lessons shared by the three language versions of the course."""


def get_integral_properties_section():
    return {
        "id": "integral-properties-and-domain",
        "title": {
            "hy": "Ինտեգրալի հատկությունները և կիրառման սահմանները",
            "en": "Integral Properties and Domain Checks",
            "ru": "Свойства интеграла и проверка области определения",
        },
        "content": {
            "hy": r"""
<p class="theory-lead">Բանաձևն ընտրելուց առաջ ստուգենք ֆունկցիայի որոշման տիրույթը, սահմանները և այն, թե ինչ մեծություն ենք հաշվում։ Ստորև $f,g$ ֆունկցիաները ինտեգրելի են համապատասխան հատվածներում, իսկ $\alpha,\beta$-ն հաստատուններ են։</p>
<div class="theory-callout">
<h4>Երեք հիմնական հատկություն</h4>
<p><strong>Գծայնություն․</strong> գումարը կարելի է ինտեգրել անդամ առ անդամ, իսկ հաստատուն արտադրիչը՝ դուրս բերել ինտեգրալի նշանից։</p>
$$\int_a^b (\alpha f(x)+\beta g(x))\,dx=\alpha\int_a^b f(x)\,dx+\beta\int_a^b g(x)\,dx$$
<p><strong>Հատվածի բաժանում․</strong> $a&lt;c&lt;b$ դեպքում՝</p>
$$\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$$
<p><strong>Սահմանների ուղղություն․</strong> սահմանները փոխելիս փոխվում է նշանը, իսկ համընկնող սահմանների դեպքում արդյունքը զրո է։</p>
$$\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx,\qquad \int_a^a f(x)\,dx=0$$
</div>
<div class="example-box">
<h4>Լուծված օրինակ․ գումար և նշանի փոփոխություն</h4>
$$\int_0^2 (3x^2+2)\,dx=[x^3+2x]_0^2=12$$
<p>$f(x)=x$ ֆունկցիայի համար $[-1,1]$ հատվածում որոշյալ ինտեգրալը զրո է, բայց մակերեսը՝ $1$։ Մակերեսի դեպքում բաժանում ենք նշանի փոփոխության կետում՝</p>
$$S=-\int_{-1}^0 x\,dx+\int_0^1 x\,dx=\frac12+\frac12=1$$
</div>
<div class="theory-callout">
<h4>Անսահման արժեք և անիսկական ինտեգրալ</h4>
<p>Անսահմանափակ ֆունկցիայի համար սովորական որոշյալ ինտեգրալի փոխարեն երբեմն սահմանում ենք <strong>անիսկական ինտեգրալ՝ սահմանի միջոցով</strong>։ Այն կարող է զուգամիտել կամ տարամիտել։</p>
$$\int_0^1\frac{dx}{\sqrt{x}}:=\lim_{\varepsilon\to0^+}\int_{\varepsilon}^1 x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}(2-2\sqrt{\varepsilon})=2$$
$$\int_0^1\frac{dx}{x}:=\lim_{\varepsilon\to0^+}(-\ln\varepsilon)=+\infty$$
<p>Հատվածի ներսում եզակի կետի դեպքում հաշվում ենք ձախ և աջ անիսկական ինտեգրալները առանձին․ վերջավոր արդյունքի համար երկուսն էլ պետք է զուգամիտեն։ Սիմետրիկ դրական ու բացասական արժեքները պարզապես իրար չեղարկել չի կարելի։</p>
</div>
<div class="pitfall-box">
<h4>Հաշվիչից առաջ ստուգիր</h4>
<ul><li>Մակերեսի համար ինտեգրիր $|f(x)|$-ը, իսկ երկու կորերի միջև՝ $|f(x)-g(x)|$-ը։</li>
<li>Երկարության միավորներով $x$ և $f(x)$ մեծությունների դեպքում մակերեսը չափվում է քառակուսի միավորներով։ Ծավալի դեպքում ինտեգրում ենք հատույթի մակերեսը՝ ստանալով խորանարդ միավորներ։</li>
<li>Հարթակի սովորական թվային հաշվիչը նախատեսված է վերջավոր հատվածների և կանոնավոր ֆունկցիաների համար։ Այն անիսկական ինտեգրալի զուգամիտման ստուգիչ չէ․ նախ փոխակերպիր խնդիրը կամ հիմնավորիր սահմանը։</li></ul>
</div>
<details class="selftest-box"><summary>Ինքնաստուգում․ ինչի՞ է հավասար $\int_2^0(3x^2+2)\,dx$-ը։</summary><div class="selftest-answer">Պատասխան․ $-12$։ Սահմանների փոխանակումը փոխում է ինտեգրալի նշանը։</div></details>
""",
            "en": r"""
<p class="theory-lead">Before choosing a formula, check the domain, integration limits, and quantity being measured. Below, $f,g$ are integrable on the relevant intervals and $\alpha,\beta$ are constants.</p>
<div class="theory-callout">
<h4>Three essential properties</h4>
<p><strong>Linearity:</strong> integrate a sum term by term and take constant factors outside the integral.</p>
$$\int_a^b(\alpha f(x)+\beta g(x))\,dx=\alpha\int_a^b f(x)\,dx+\beta\int_a^b g(x)\,dx$$
<p><strong>Splitting an interval:</strong> for $a&lt;c&lt;b$,</p>
$$\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$$
<p><strong>Orientation:</strong> reversing the limits changes the sign; identical limits give zero.</p>
$$\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx,\qquad\int_a^a f(x)\,dx=0$$
</div>
<div class="example-box">
<h4>Worked example: sums and a change of sign</h4>
$$\int_0^2(3x^2+2)\,dx=[x^3+2x]_0^2=12$$
<p>For $f(x)=x$ on $[-1,1]$, the signed integral is zero but the geometric area is $1$. Split at the zero when computing area:</p>
$$S=-\int_{-1}^0x\,dx+\int_0^1x\,dx=\frac12+\frac12=1$$
</div>
<div class="theory-callout">
<h4>Unbounded values and improper integrals</h4>
<p>An unbounded integrand may require an <strong>improper integral defined by a limit</strong>. That limit may converge or diverge.</p>
$$\int_0^1\frac{dx}{\sqrt{x}}:=\lim_{\varepsilon\to0^+}\int_{\varepsilon}^1x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}(2-2\sqrt{\varepsilon})=2$$
$$\int_0^1\frac{dx}{x}:=\lim_{\varepsilon\to0^+}(-\ln\varepsilon)=+\infty$$
<p>At an interior singularity, evaluate the left and right improper integrals separately. Both must converge for a finite result; simply cancelling symmetric positive and negative values is invalid.</p>
</div>
<div class="pitfall-box">
<h4>Check before using the calculator</h4>
<ul><li>For geometric area, integrate $|f(x)|$; between two curves, integrate $|f(x)-g(x)|$.</li>
<li>If $x$ and $f(x)$ are lengths, area has square units. Integrating a cross-sectional area over length gives volume in cubic units.</li>
<li>The platform's ordinary numerical calculator is intended for finite intervals and regular functions. It does not test convergence of improper integrals: transform the problem or justify its limit first.</li></ul>
</div>
<details class="selftest-box"><summary>Self-test: what is $\int_2^0(3x^2+2)\,dx$?</summary><div class="selftest-answer">Answer: $-12$. Reversing the integration limits changes the sign.</div></details>
""",
            "ru": r"""
<p class="theory-lead">Перед выбором формулы проверьте область определения, пределы и смысл вычисляемой величины. Ниже $f,g$ интегрируемы на соответствующих отрезках, а $\alpha,\beta$ — постоянные.</p>
<div class="theory-callout">
<h4>Три основных свойства</h4>
<p><strong>Линейность:</strong> сумму можно интегрировать по слагаемым, а постоянный множитель — выносить за знак интеграла.</p>
$$\int_a^b(\alpha f(x)+\beta g(x))\,dx=\alpha\int_a^b f(x)\,dx+\beta\int_a^b g(x)\,dx$$
<p><strong>Разбиение отрезка:</strong> при $a&lt;c&lt;b$</p>
$$\int_a^b f(x)\,dx=\int_a^c f(x)\,dx+\int_c^b f(x)\,dx$$
<p><strong>Направление:</strong> перестановка пределов меняет знак; совпадающие пределы дают ноль.</p>
$$\int_b^a f(x)\,dx=-\int_a^b f(x)\,dx,\qquad\int_a^a f(x)\,dx=0$$
</div>
<div class="example-box">
<h4>Пример: сумма и смена знака</h4>
$$\int_0^2(3x^2+2)\,dx=[x^3+2x]_0^2=12$$
<p>Для $f(x)=x$ на $[-1,1]$ интеграл равен нулю, но геометрическая площадь равна $1$. Для площади разбиваем отрезок в точке смены знака:</p>
$$S=-\int_{-1}^0x\,dx+\int_0^1x\,dx=\frac12+\frac12=1$$
</div>
<div class="theory-callout">
<h4>Неограниченные значения и несобственные интегралы</h4>
<p>Для неограниченной функции иногда вводят <strong>несобственный интеграл через предел</strong>. Он может сходиться или расходиться.</p>
$$\int_0^1\frac{dx}{\sqrt{x}}:=\lim_{\varepsilon\to0^+}\int_{\varepsilon}^1x^{-1/2}\,dx=\lim_{\varepsilon\to0^+}(2-2\sqrt{\varepsilon})=2$$
$$\int_0^1\frac{dx}{x}:=\lim_{\varepsilon\to0^+}(-\ln\varepsilon)=+\infty$$
<p>При особой точке внутри отрезка вычисляют левый и правый несобственные интегралы отдельно. Для конечного результата оба должны сходиться; простое сокращение симметричных положительных и отрицательных значений недопустимо.</p>
</div>
<div class="pitfall-box">
<h4>Проверьте перед вычислением</h4>
<ul><li>Для геометрической площади интегрируйте $|f(x)|$, между двумя кривыми — $|f(x)-g(x)|$.</li>
<li>Если $x$ и $f(x)$ измеряются в единицах длины, площадь имеет квадратные единицы. Интеграл площади сечения по длине даёт объём в кубических единицах.</li>
<li>Обычный численный калькулятор платформы предназначен для конечных отрезков и регулярных функций. Он не проверяет сходимость несобственного интеграла: сначала преобразуйте задачу или обоснуйте предел.</li></ul>
</div>
<details class="selftest-box"><summary>Самопроверка: чему равен $\int_2^0(3x^2+2)\,dx$?</summary><div class="selftest-answer">Ответ: $-12$. Перестановка пределов меняет знак интеграла.</div></details>
""",
        },
    }


def get_monte_carlo_uncertainty_section():
    return {
        "id": "monte-carlo-uncertainty",
        "title": {
            "hy": "Մոնտե Կառլոյի արդյունքի ստուգում․ սխալ և վստահության միջակայք",
            "en": "Checking Monte Carlo Results: Error and Confidence Intervals",
            "ru": "Проверка Монте-Карло: погрешность и доверительный интервал",
        },
        "content": {
            "hy": r"""
<p class="theory-lead">Մեկ պատահական գնահատականը դեռ չի ցույց տալիս հաշվարկի ճշգրտությունը։ Ենթադրենք $a&lt;b$, $X_i$-ները անկախ, նույն բաշխումն ունեցող $U(a,b)$ ընտրանքներ են, իսկ $Y_i=f(X_i)$-ի դիսպերսիան վերջավոր է։</p>
<div class="theory-callout">
<h4>Ընտրանքից գնահատում ենք ստանդարտ սխալը</h4>
$$\bar Y=\frac1N\sum_{i=1}^N Y_i,\qquad I_N=(b-a)\bar Y$$
$$s_Y^2=\frac1{N-1}\sum_{i=1}^N(Y_i-\bar Y)^2,\qquad \widehat{\mathrm{SE}}(I_N)=\frac{(b-a)s_Y}{\sqrt N}\quad(N\ge2)$$
<p>$s_Y$-ը ֆունկցիայի ընտրված արժեքների ցրվածությունն է, իսկ ստանդարտ սխալը՝ ինտեգրալի գնահատականի տատանման չափը։ Այն նույնը չէ, ինչ կոնկրետ փորձի $|I_N-I|$ բացարձակ սխալը։</p>
<p>Բավական մեծ, ներկայացուցչական ընտրանքի դեպքում Կենտրոնական սահմանային թեորեմը տալիս է <strong>մոտավոր 95% վստահության միջակայք</strong>՝</p>
$$[I_N-1.96\widehat{\mathrm{SE}},\ I_N+1.96\widehat{\mathrm{SE}}]$$
<p>Նույն պայմաններում փորձը բազմիցս կրկնելիս այս եղանակով ստացված միջակայքների մոտ 95%-ը կպարունակի հաստատուն իրական $I$ արժեքը։ Սա յուրաքանչյուր առանձին հաշվարկի երաշխիք չէ։ Փոքր ընտրանքը, հազվադեպ մեծ արժեքները կամ կախված փորձերը կարող են այս մոտարկումն անվստահելի դարձնել։</p>
</div>
<div class="example-box">
<h4>Լուծված օրինակ․ $\int_0^1 x^2\,dx$</h4>
<p>Ենթադրենք ընտրանքային միջինով ստացել ենք $I_N=0.3348$, իսկ տվյալներից՝ $\widehat{\mathrm{SE}}=0.003$։</p>
$$0.3348\pm1.96\cdot0.003=[0.32892,\ 0.34068]$$
<p>Ճշգրիտ $I=1/3$ արժեքն այս միջակայքում է։ Այս փորձի բացարձակ սխալը մոտ $0.001467$ է։ Եթե ցանկանանք ստանդարտ սխալը մոտ երկու անգամ նվազեցնել, նույն պայմաններում կպահանջվի մոտ չորս անգամ ավելի մեծ $N$։</p>
</div>
<div class="theory-callout">
<h4>Նույն գաղափարը հավանականության սիմուլյացիայի համար</h4>
<p>Անկախ Բեռնուլիի փորձերում $k$ հաջողությունից՝</p>
$$\hat p=\frac{k}{N},\qquad \widehat{\mathrm{SE}}(\hat p)\approx\sqrt{\frac{\hat p(1-\hat p)}N}$$
<p>Սա մեծ ընտրանքի մոտարկում է։ Զրո հաջողությունը չի ապացուցում, որ $p=0$․ օրինակ, $p=0.01$, $N=100$ դեպքում զրո հաջողության հավանականությունը $(1-0.01)^{100}\approx0.366$ է։ Հազվադեպ պատահույթների համար այս պարզ բանաձևն ու նորմալ միջակայքը բավարար չեն։</p>
</div>
<div class="pitfall-box">
<h4>Արդյունքը ներկայացնելու կարճ ուղեցույց</h4>
<ol><li>Նշիր ֆունկցիան կամ պատահույթը, սահմանները, մեթոդը և փորձերի $N$ քանակը։</li>
<li>Գրիր գնահատականը և, եթե հաշվված է, ստանդարտ սխալն ու միջակայքը։ Ընտրանքային միջինի սխալի բանաձևը մի կիրառիր Hit-or-Miss-ի տվյալների վրա առանց գնահատականը համապատասխանեցնելու։</li>
<li>Համեմատիր պարզ ճշգրիտ օրինակի կամ այլ թվային մեթոդի հետ։ Եթե $I\ne0$-ն հայտնի է, հարաբերական սխալը $|I_N-I|/|I|$ է․ զրոյին մոտ $I$-ի համար նախընտրիր բացարձակ սխալը։</li>
<li>Կրկնիր անկախ ընտրանքներով և գրանցիր պայմանները։ Փորձերի ավելացումը չի երաշխավորում, որ ամեն հաջորդ արդյունքը ավելի մոտ կլինի ճշգրիտ արժեքին։</li></ol>
</div>
<details class="selftest-box"><summary>Ինքնաստուգում․ եթե $N$-ը մեծացնենք 9 անգամ, ի՞նչ կլինի ստանդարտ սխալի հետ։</summary><div class="selftest-answer">Նույն բաշխման և վերջավոր դիսպերսիայի դեպքում այն կնվազի մոտ $\sqrt9=3$ անգամ։ Սա կոնկրետ փորձի բացարձակ սխալի երաշխիք չէ։</div></details>
<p>Աղբյուրներ՝ <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm" target="_blank" rel="noopener noreferrer">NIST․ միջինի վստահության սահմաններ</a>, <a href="https://cswr.nrhstat.org/mci.html" target="_blank" rel="noopener noreferrer">Computational Statistics with R․ Monte Carlo integration</a>։</p>
""",
            "en": r"""
<p class="theory-lead">A single random estimate does not describe its precision. Assume $a&lt;b$, independent identically distributed samples $X_i\sim U(a,b)$, and finite variance of $Y_i=f(X_i)$.</p>
<div class="theory-callout">
<h4>Estimate the standard error from the sample</h4>
$$\bar Y=\frac1N\sum_{i=1}^NY_i,\qquad I_N=(b-a)\bar Y$$
$$s_Y^2=\frac1{N-1}\sum_{i=1}^N(Y_i-\bar Y)^2,\qquad\widehat{\mathrm{SE}}(I_N)=\frac{(b-a)s_Y}{\sqrt N}\quad(N\ge2)$$
<p>$s_Y$ measures the spread of the sampled function values. The standard error measures fluctuations of the integral estimator; it is different from the actual absolute error $|I_N-I|$ of a particular run.</p>
<p>For a sufficiently large, representative sample, the Central Limit Theorem gives an <strong>approximate 95% confidence interval</strong>:</p>
$$[I_N-1.96\widehat{\mathrm{SE}},\ I_N+1.96\widehat{\mathrm{SE}}]$$
<p>Across repeated experiments under the same conditions, about 95% of intervals constructed this way will contain the fixed true value $I$. This is not a guarantee for each run. Small samples, rare extreme values, or dependent observations can make this approximation unreliable.</p>
</div>
<div class="example-box">
<h4>Worked example: $\int_0^1x^2\,dx$</h4>
<p>Suppose sample-mean integration gives $I_N=0.3348$ and the data give $\widehat{\mathrm{SE}}=0.003$.</p>
$$0.3348\pm1.96\cdot0.003=[0.32892,\ 0.34068]$$
<p>The exact value $I=1/3$ lies inside this interval. This run's absolute error is approximately $0.001467$. Halving the standard error under the same conditions requires roughly four times as many samples.</p>
</div>
<div class="theory-callout">
<h4>The same idea for probability simulations</h4>
<p>For $k$ successes in $N$ independent Bernoulli trials,</p>
$$\hat p=\frac{k}{N},\qquad\widehat{\mathrm{SE}}(\hat p)\approx\sqrt{\frac{\hat p(1-\hat p)}N}$$
<p>This is a large-sample approximation. Zero successes do not prove $p=0$: with $p=0.01$ and $N=100$, the probability of zero successes is $(1-0.01)^{100}\approx0.366$. For rare events, this simple formula and a normal interval are insufficient.</p>
</div>
<div class="pitfall-box">
<h4>A short guide to reporting a result</h4>
<ol><li>State the function or event, limits, method, and sample count $N$.</li>
<li>Report the estimate and, if calculated, its standard error and interval. Do not apply the sample-mean error formula to Hit-or-Miss data without adapting it to that estimator.</li>
<li>Compare against a simple exact example or another numerical method. If a nonzero $I$ is known, relative error is $|I_N-I|/|I|$; near zero, prefer absolute error.</li>
<li>Repeat with independent samples and record the conditions. More trials do not guarantee that every subsequent result will be closer to the exact value.</li></ol>
</div>
<details class="selftest-box"><summary>Self-test: what happens to standard error if $N$ increases ninefold?</summary><div class="selftest-answer">For the same distribution with finite variance, it decreases by about $\sqrt9=3$. This does not guarantee a threefold reduction in a particular run's absolute error.</div></details>
<p>Sources: <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm" target="_blank" rel="noopener noreferrer">NIST: confidence limits for the mean</a>, <a href="https://cswr.nrhstat.org/mci.html" target="_blank" rel="noopener noreferrer">Computational Statistics with R: Monte Carlo integration</a>.</p>
""",
            "ru": r"""
<p class="theory-lead">Одна случайная оценка ещё не описывает точность вычисления. Пусть $a&lt;b$, $X_i\sim U(a,b)$ — независимые одинаково распределённые выборки, а дисперсия $Y_i=f(X_i)$ конечна.</p>
<div class="theory-callout">
<h4>Оценка стандартной ошибки по выборке</h4>
$$\bar Y=\frac1N\sum_{i=1}^NY_i,\qquad I_N=(b-a)\bar Y$$
$$s_Y^2=\frac1{N-1}\sum_{i=1}^N(Y_i-\bar Y)^2,\qquad\widehat{\mathrm{SE}}(I_N)=\frac{(b-a)s_Y}{\sqrt N}\quad(N\ge2)$$
<p>$s_Y$ характеризует разброс значений функции. Стандартная ошибка описывает колебания оценки интеграла и отличается от фактической абсолютной погрешности $|I_N-I|$ конкретного запуска.</p>
<p>При достаточно большой репрезентативной выборке Центральная предельная теорема даёт <strong>приближённый 95%-й доверительный интервал</strong>:</p>
$$[I_N-1.96\widehat{\mathrm{SE}},\ I_N+1.96\widehat{\mathrm{SE}}]$$
<p>При многократном повторении эксперимента в тех же условиях около 95% построенных таким способом интервалов будут содержать фиксированное истинное значение $I$. Это не гарантия для каждого запуска. Малая выборка, редкие экстремальные значения или зависимые наблюдения могут сделать приближение ненадёжным.</p>
</div>
<div class="example-box">
<h4>Пример: $\int_0^1x^2\,dx$</h4>
<p>Пусть метод выборочного среднего дал $I_N=0.3348$, а по данным получено $\widehat{\mathrm{SE}}=0.003$.</p>
$$0.3348\pm1.96\cdot0.003=[0.32892,\ 0.34068]$$
<p>Точное значение $I=1/3$ находится внутри интервала. Абсолютная погрешность этого запуска — примерно $0.001467$. Для уменьшения стандартной ошибки вдвое при тех же условиях потребуется примерно вчетверо больше испытаний.</p>
</div>
<div class="theory-callout">
<h4>Та же идея для вероятностных симуляций</h4>
<p>Для $k$ успехов в $N$ независимых испытаниях Бернулли</p>
$$\hat p=\frac{k}{N},\qquad\widehat{\mathrm{SE}}(\hat p)\approx\sqrt{\frac{\hat p(1-\hat p)}N}$$
<p>Это приближение для большой выборки. Ноль успехов не доказывает $p=0$: при $p=0.01$ и $N=100$ вероятность нуля успехов равна $(1-0.01)^{100}\approx0.366$. Для редких событий этой простой формулы и нормального интервала недостаточно.</p>
</div>
<div class="pitfall-box">
<h4>Как представить результат</h4>
<ol><li>Укажите функцию или событие, пределы, метод и число испытаний $N$.</li>
<li>Приведите оценку и, если рассчитаны, стандартную ошибку и интервал. Не применяйте формулу ошибки выборочного среднего к данным Hit-or-Miss без адаптации к этой оценке.</li>
<li>Сравните с простым точным примером или другим численным методом. Если известно ненулевое $I$, относительная погрешность равна $|I_N-I|/|I|$; вблизи нуля используйте абсолютную.</li>
<li>Повторите с независимыми выборками и запишите условия. Рост числа испытаний не гарантирует, что каждый следующий результат станет ближе к точному.</li></ol>
</div>
<details class="selftest-box"><summary>Самопроверка: как изменится стандартная ошибка при увеличении $N$ в 9 раз?</summary><div class="selftest-answer">При том же распределении с конечной дисперсией она уменьшится примерно в $\sqrt9=3$ раза. Это не гарантия трёхкратного уменьшения абсолютной погрешности конкретного запуска.</div></details>
<p>Источники: <a href="https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm" target="_blank" rel="noopener noreferrer">NIST: доверительные границы среднего</a>, <a href="https://cswr.nrhstat.org/mci.html" target="_blank" rel="noopener noreferrer">Computational Statistics with R: интегрирование Монте-Карло</a>.</p>
""",
        },
    }
