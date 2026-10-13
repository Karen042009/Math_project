# Chapter 10: Թվային ինտեգրում (Numerical Integration)
# Subsections:
# 10.1: numerical-integration-basics
# 10.2: numerical-simpson-errors

def get_chapter_10():
    return {
        "title": {
            "hy": "10. Թվային ինտեգրում",
            "en": "10. Numerical Integration",
            "ru": "10. Численное интегрирование"
        },
        "subsections": [
            {
                "id": "numerical-integration-basics",
                "title": {
                    "hy": "Ուղղանկյունների, միջնակետերի և սեղանների կանոնները",
                    "en": "Rectangle, Midpoint, and Trapezoidal Rules",
                    "ru": "Правила прямоугольников, средних точек и трапеций"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Կարո՞ղ ենք ցանկացած ինտեգրալ հաշվել Նյուտոն-Լայբնիցի բանաձևով։ Պարզվում է՝ <strong>ոչ</strong>։ Մաթեմատիկոս Ժոզեֆ Լիուվիլը 1835 թ․ ապացուցեց, որ կան հսկայական թվով կարևորագույն ֆունկցիաներ (օրինակ՝ $e^{-x^2}$, $\\frac{\\sin x}{x}$, $\\frac{1}{\\ln x}$), որոնց նախնական ֆունկցիան հնարավոր չէ արտահայտել տարրական ֆունկցիաների միջոցով։ Նման դեպքերում որոշյալ ինտեգրալը հաշվվում է <strong>թվային մեթոդներով</strong>։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-th"></i> Հիմնական քվադրատուրային կանոնները ($[a, b]$, $\\Delta x = \\frac{b-a}{n}$)</h4>
    <ul>
        <li><strong>Ձախ ուղղանկյունների կանոն ($I_L$)․</strong>
            $$I_L = \\Delta x \\sum_{i=0}^{n-1} f(x_i) = \\Delta x [f(x_0) + f(x_1) + \\dots + f(x_{n-1})]$$
        </li>
        <li><strong>Աջ ուղղանկյունների կանոն ($I_R$)․</strong>
            $$I_R = \\Delta x \\sum_{i=1}^n f(x_i) = \\Delta x [f(x_1) + f(x_2) + \\dots + f(x_n)]$$
        </li>
        <li><strong>Միջնակետերի կանոն ($I_M$, Midpoint Rule)․</strong> Բարձրությունը վերցվում է յուրաքանչյուր հատվածի ճիշտ մեջտեղում ($m_i = \\frac{x_{i-1} + x_i}{2}$)․
            $$I_M = \\Delta x \\sum_{i=1}^n f(m_i)$$
        </li>
        <li><strong>Սեղանների կանոն ($I_T$, Trapezoidal Rule)․</strong> Կորը մոտարկվում է ուղիղ հատվածներով՝ կազմելով սեղաններ․
            $$I_T = \\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + 2f(x_2) + \\dots + 2f(x_{n-1}) + f(x_n)]$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Համեմատական օրինակ․ $\\int_0^1 x^2 dx$ հաշվումը $n=4$ դեպքում</h4>
    <p>Ճշգրիտ արժեքը՝ $I = 1/3 \\approx 0.333333$։ Քայլը՝ $\\Delta x = 0.25$։ Կետերը՝ $0, 0.25, 0.5, 0.75, 1$։</p>
    <ul>
        <li><strong>Ձախ ուղղանկյուններ ($I_L$)․</strong> $0.25 \\times (0 + 0.0625 + 0.25 + 0.5625) = \\mathbf{0.218750}$ (Բացարձակ սխալ՝ $|0.21875 - 0.33333| = 0.11458$)</li>
        <li><strong>Աջ ուղղանկյուններ ($I_R$)․</strong> $0.25 \\times (0.0625 + 0.25 + 0.5625 + 1) = \\mathbf{0.468750}$ (Բացարձակ սխալ՝ $0.13542$)</li>
        <li><strong>Սեղանների կանոն ($I_T$)․</strong> $\\frac{0.25}{2} [0 + 2(0.0625 + 0.25 + 0.5625) + 1] = \\mathbf{0.343750}$ (Բացարձակ սխալ՝ $0.010417$)</li>
        <li><strong>Միջնակետերի կանոն ($I_M$)․</strong> Միջնակետերն են $0.125, 0.375, 0.625, 0.875$․
            $$0.25 \\times (0.015625 + 0.140625 + 0.390625 + 0.765625) = \\mathbf{0.328125}$$
            (Բացարձակ սխալ՝ $|0.328125 - 0.333333| = \\mathbf{0.005208}$)
        </li>
    </ul>
    <p><em>Կարևոր դիտարկում․</em> Միջնակետերի կանոնի սխալը (0.0052) մոտ 2 անգամ <strong>ավելի փոքր է</strong>, քան սեղանների կանոնի սխալը (0.0104)։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Կարծել, թե սեղանների կանոնը միշտ ավելի ճշգրիտ է, քան միջնակետերի կանոնը։</p>
    <p><strong>Ճշտում․</strong> Եթե $f$-ն ունի անընդհատ երկրորդ ածանցյալ և $M_2=\max_{[a,b]}|f^{\prime\prime}(x)|$, ապա $|E_M|\le M_2(b-a)^3/(24n^2)$, իսկ $|E_T|\le M_2(b-a)^3/(12n^2)$։ Միջնակետերի մեթոդի այս վերին սահմանը երկու անգամ փոքր է, սակայն կոնկրետ սխալների հարաբերությունը միշտ $1/2$ չէ։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ է բացարձակ սխալը թվային ինտեգրման մեջ։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Բացարձակ սխալը (Absolute Error) ճշգրիտ արժեքի ($I$) և մոտարկված արժեքի ($I_{\\text{մոտ}}$) տարբերության մոդուլն է․ $\\text{Սխալ} = |I - I_{\\text{մոտ}}|$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Can every integral be solved via Newton–Leibniz? <strong>No.</strong> In 1835, Joseph Liouville proved that numerous essential functions (such as the Gaussian $e^{-x^2}$, $\\frac{\\sin x}{x}$, or $\\frac{1}{\\ln x}$) lack elementary antiderivatives. Their definite integrals must be evaluated using <strong>numerical quadrature</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-th"></i> Standard Quadrature Formulas ($[a, b], \\, \\Delta x = \\frac{b-a}{n}$)</h4>
    <ul>
        <li><strong>Left Rectangle ($I_L$):</strong> $I_L = \\Delta x \\sum_{i=0}^{n-1} f(x_i)$</li>
        <li><strong>Right Rectangle ($I_R$):</strong> $I_R = \\Delta x \\sum_{i=1}^n f(x_i)$</li>
        <li><strong>Midpoint Rule ($I_M$):</strong> $I_M = \\Delta x \\sum_{i=1}^n f(m_i)$, where $m_i = \\frac{x_{i-1}+x_i}{2}$</li>
        <li><strong>Trapezoidal Rule ($I_T$):</strong>
            $$I_T = \\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + \\dots + 2f(x_{n-1}) + f(x_n)]$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Comparative Benchmark: $\\int_0^1 x^2 dx$ ($n=4$)</h4>
    <p>Exact value: $I = 1/3 \\approx 0.333333$. Grid spacing: $\\Delta x = 0.25$.</p>
    <ul>
        <li>Left Rectangles: $I_L = 0.218750$ (Error: $0.11458$)</li>
        <li>Right Rectangles: $I_R = 0.468750$ (Error: $0.13542$)</li>
        <li>Trapezoidal: $I_T = 0.343750$ (Error: $0.010417$)</li>
        <li>Midpoint Rule: $I_M = 0.328125$ (Error: $\\mathbf{0.005208}$)</li>
    </ul>
    <p>For this quadratic example, midpoint error is exactly half of trapezoidal error.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Myth:</strong> "Trapezoids are always more accurate than midpoints."</p>
    <p><strong>Clarification:</strong> If $f$ has a continuous second derivative and $M_2=\max_{[a,b]}|f^{\prime\prime}(x)|$, then $|E_M|\le M_2(b-a)^3/(24n^2)$ and $|E_T|\le M_2(b-a)^3/(12n^2)$. This midpoint error bound is half the trapezoidal bound; the actual errors need not have ratio $1/2$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What is the formal definition of absolute error?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> The absolute magnitude of the difference between the exact analytical value $I$ and the numerical approximation $I_{\\text{approx}}$: $\\text{Error} = |I - I_{\\text{approx}}|$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Можно ли любой интеграл взять аналитически? <strong>Нет.</strong> В 1835 году Жозеф Лиувилль доказал, что для функций вроде $e^{-x^2}$, $\\frac{\\sin x}{x}$, $\\frac{1}{\\ln x}$ первообразная не выражается в элементарных функциях. Такие интегралы берутся <strong>численными методами</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-th"></i> Базовые квадратурные формулы ($\Delta x = \\frac{b-a}{n}$)</h4>
    <ul>
        <li><strong>Левые прямоугольники:</strong> $I_L = \\Delta x \\sum_{i=0}^{n-1} f(x_i)$</li>
        <li><strong>Правые прямоугольники:</strong> $I_R = \\Delta x \\sum_{i=1}^n f(x_i)$</li>
        <li><strong>Средние прямоугольники (Midpoint):</strong> $I_M = \\Delta x \\sum_{i=1}^n f(m_i)$</li>
        <li><strong>Формула трапеций:</strong> $I_T = \\frac{\\Delta x}{2} [f(x_0) + 2f(x_1) + \\dots + 2f(x_{n-1}) + f(x_n)]$</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Сравнительный расчет: $\\int_0^1 x^2 dx$ при $n=4$</h4>
    <p>Точное значение: $I = 1/3 \\approx 0.333333$.</p>
    <ul>
        <li>Левые: $I_L = 0.218750$ (Погрешность: $0.11458$)</li>
        <li>Правые: $I_R = 0.468750$ (Погрешность: $0.13542$)</li>
        <li>Трапеции: $I_T = 0.343750$ (Погрешность: $0.010417$)</li>
        <li>Средние: $I_M = 0.328125$ (Погрешность: $\\mathbf{0.005208}$)</li>
    </ul>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Уточнение:</strong> При непрерывной второй производной и $M_2=\max_{[a,b]}|f^{\prime\prime}(x)|$ имеем $|E_M|\le M_2(b-a)^3/(24n^2)$ и $|E_T|\le M_2(b-a)^3/(12n^2)$. Эта верхняя граница для средних прямоугольников вдвое меньше, но отношение фактических ошибок не обязано равняться $1/2$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: что такое абсолютная погрешность?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Модуль разности между точным значением $I$ и приближенным $I_{\\text{прибл}}$: $|I - I_{\\text{прибл}}|$.
    </div>
</details>
"""
                }
            },
            {
                "id": "numerical-simpson-errors",
                "title": {
                    "hy": "Սիմպսոնի մեթոդը, բաժանումների քանակը և սխալի գնահատականը",
                    "en": "Simpson's Rule and Error Analysis",
                    "ru": "Метод Симпсона и анализ погрешностей"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Իսկ ի՞նչ կլինի, եթե կորը մոտարկենք ոչ թե հորիզոնական գծերով (ուղղանկյուններ) կամ թեք հատվածներով (սեղաններ), այլ <strong>պարաբոլներով</strong>։ Այս գաղափարի վրա է կառուցված <strong>Սիմպսոնի կանոնը</strong> (Simpson's 1/3 Rule)։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-chart-line"></i> Սիմպսոնի բաղադրյալ կանոնը (Composite Simpson's Rule)</h4>
    <p><strong>ՊԱՐՏԱԴԻՐ ՊԱՅՄԱՆ․</strong> Բաժանումների քանակը $n$-ը պետք է լինի <strong>ԶՈՒՅԳ ԹԻՎ</strong> ($n = 2m$), որովհետև յուրաքանչյուր պարաբոլ կառուցվում է 3 հարևան կետերի վրա (ընդգրկելով 2 ենթամիջակայք)։</p>
    <p><strong>Բանաձևը ($\Delta x = \\frac{b-a}{n}$)․</strong></p>
    $$I_S = \\frac{\\Delta x}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \\dots + 4f(x_{n-1}) + f(x_n)]$$
    <p><em>Գործակիցների կառուցվածքը․</em> Եզրերում՝ $1$, կենտ ինդեքսներով կետերում՝ $4$, զույգ ինդեքսներով կետերում՝ $2$ ($1, 4, 2, 4, 2, \\dots, 4, 1$)։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-bullseye"></i> Սխալի կարգը (Order of Convergence)</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Մեթոդ</th><th>Տեսական սխալի կարգ</th><th>Ինչ է տեղի ունենում, երբ $n$-ը կրկնապատկվում է</th></tr>
        <tr><td>Ուղղանկյուններ</td><td>$O(1/n)$ կամ $O(1/n^2)$</td><td>Սխալը նվազում է 2-ից 4 անգամ</td></tr>
        <tr><td>Սեղաններ</td><td>$O(1/n^2)$</td><td>Սխալը նվազում է 4 անգամ</td></tr>
        <tr><td><strong>Սիմպսոն</strong></td><td><strong>$O(1/n^4)$</strong></td><td><strong>Սխալը նվազում է $2^4 = 16$ ԱՆԳԱՄ!</strong></td></tr>
    </table>
    <p>Հատկանշական է, որ Սիմպսոնի կանոնը <strong>բացարձակ ճշգրիտ է</strong> մինչև 3-րդ աստիճանի ցանկացած բազմանդամի համար ($f(x) = Ax^3 + Bx^2 + Cx + D$), քանի որ նրա սխալի բանաձևը կախված է 4-րդ կարգի ածանցյալից ($f^{(4)}(\xi)$)։</p>
    <p><strong>Կարևոր հարթության պայման․</strong> $O(1/n^4)$ կարգի գերարագ սխալի նվազումը տեսականորեն երաշխավորված է <strong>միայն այն դեպքում, երբ $f \in C^4([a, b])$</strong> (այսինքն՝ ֆունկցիան ունի անընդհատ և սահմանափակ 4-րդ ածանցյալ հատվածում)։ Եթե ֆունկցիան ունի կոտրվածք (անկյունային կետեր, օր․՝ $|x|$) կամ անվերջ ածանցյալ եզրակետում (օր․՝ $\sqrt{x}$ $0$-ի մոտ), Սիմպսոնի ճշգրտության կարգը կտրուկ ընկնում է։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Սիմպսոնի կանոնը $\\int_0^1 x^2 dx$-ի համար ($n=4$)</h4>
    <p>$\\Delta x = 0.25$։ Կետերն են՝ $x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1$։</p>
    $$f(0)=0, \\quad f(0.25)=0.0625, \\quad f(0.5)=0.25, \\quad f(0.75)=0.5625, \\quad f(1)=1$$
    <p>Կիրառում ենք բանաձևը․</p>
    $$I_S = \\frac{0.25}{3} [0 + 4(0.0625) + 2(0.25) + 4(0.5625) + 1]$$
    $$I_S = \\frac{0.25}{3} [0 + 0.25 + 0.5 + 2.25 + 1] = \\frac{0.25}{3} [4.0] = \\frac{1}{3} = \\mathbf{0.333333\\dots}$$
    <p><strong>Բացարձակ սխալը՝ 0.000000 (Ճշգրիտ համընկնում!)։</strong> Քանի որ $f(x)=x^2$-ը 2-րդ աստիճանի բազմանդամ է, Սիմպսոնի կանոնը տալիս է բացարձակ ճշգրիտ արդյունք։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Փորձել կիրառել Սիմպսոնի կանոնը կենտ թվով ենթամիջակայքերի դեպքում (օրինակ՝ $n = 5$)։</p>
    <p><strong>Կանոն․</strong> Սիմպսոնի բաղադրյալ կանոնը պահանջում է զույգ թվով բաժանումներ ($n = 2, 4, 6, 8, \\dots$)։ Կենտ $n$-ի դեպքում պետք է կամ ավելացնել մեկ քայլ, կամ վերջին քայլում կիրառել սեղանի կանոն կամ Սիմպսոնի 3/8 կանոնը։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչո՞ւ է Սիմպսոնի կանոնը տալիս ճշգրիտ արդյունք $f(x) = x^3$ ֆունկցիայի համար, չնայած կառուցված է քառակուսային պարաբոլների վրա։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Սիմպսոնի մեթոդի սխալի անալիտիկ բանաձևն է՝ $E_S = -\\frac{(b-a)^5}{180n^4} f^{(4)}(\\xi)$։ Քանի որ ցանկացած $Ax^3 + Bx^2 + Cx + D$ բազմանդամի 4-րդ կարգի ածանցյալը նույնաբար 0 է ($f^{(4)}(x) \\equiv 0$), սխալի անդամը զրոյանում է, ուստի մեթոդը ճշգրիտ է նաև կուբային ֆունկցիաների համար։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
What if we approximate the curve not with straight lines, but with smooth <strong>parabolas</strong>? This is the foundation of <strong>Simpson's 1/3 Rule</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-chart-line"></i> Composite Simpson's Rule</h4>
    <p><strong>MANDATORY CONDITION:</strong> The number of subintervals $n$ must be <strong>EVEN</strong> ($n = 2m$), because each parabolic piece spans pairs of adjacent subintervals.</p>
    $$I_S = \\frac{\\Delta x}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\dots + 4f(x_{n-1}) + f(x_n)]$$
    <p>Pattern of coefficients: $1, 4, 2, 4, 2, \\dots, 4, 1$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-bullseye"></i> Convergence and Error Analysis</h4>
    <p>Error scales as $O(1/n^4)$. Doubling $n$ reduces error by $2^4 = \mathbf{16\times}$. Furthermore, Simpson's rule is exact for all cubic polynomials because its error depends on the fourth derivative $f^{(4)}(\xi)$.</p>
    <p><strong>Crucial Smoothness Condition:</strong> The $O(1/n^4)$ rate requires <strong>$f \in C^4([a, b])$</strong> (the fourth derivative must exist and remain bounded over $[a, b]$). If $f$ contains corners (e.g. $|x|$) or singular derivatives (e.g. $\sqrt{x}$ near $0$), Simpson's convergence degrades substantially.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Benchmark: $\\int_0^1 x^2 dx$ ($n=4$)</h4>
    $$I_S = \\frac{0.25}{3} [0 + 4(0.0625) + 2(0.25) + 4(0.5625) + 1] = \\frac{0.25}{3} [4.0] = \\mathbf{1/3}$$
    <p><strong>Absolute error: 0.000000 (Exact match!).</strong></p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Running composite Simpson with an odd number of subintervals (e.g. $n = 5$).</p>
    <p><strong>Rule:</strong> $n$ must always be even.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Why is Simpson's rule exact for cubic functions $f(x)=x^3$ despite using quadratic parabolas?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> The error term contains the fourth derivative $f^{(4)}(\\xi)$. Since $(x^3)^{(4)} \\equiv 0$, the error term vanishes completely.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Аппроксимация кривой параболами вместо прямых отрезков дает колоссальный прирост точности: такова <strong>формула Симпсона</strong> (правило 1/3).
</p>

<div class="theory-callout">
    <h4><i class="fas fa-chart-line"></i> Составная формула Симпсона</h4>
    <p><strong>ОБЯЗАТЕЛЬНОЕ УСЛОВИЕ:</strong> Число интервалов $n$ должно быть <strong>ЧЕТНЫМ</strong> ($n = 2m$).</p>
    $$I_S = \\frac{\\Delta x}{3} [f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\dots + 4f(x_{n-1}) + f(x_n)]$$
    <p>Коэффициенты чередуются: $1, 4, 2, 4, 2, \\dots, 4, 1$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-bullseye"></i> Порядок погрешности</h4>
    <p>Погрешность метода Симпсона составляет $O(1/n^4)$. При удвоении числа точек погрешность падает в $16$ раз! Метод точен для многочленов до 3-й степени включительно.</p>
    <p><strong>Необходимое условие гладкости:</strong> Скорость $O(1/n^4)$ математически гарантируется <strong>только при $f \in C^4([a, b])$</strong> (4-я производная непрерывна и ограничена). При изломах (как $|x|$) или неограниченных производных (как $\sqrt{x}$ в нуле) порядок сходимости существенно ухудшается.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример: $\\int_0^1 x^2 dx$ при $n=4$</h4>
    $$I_S = \\frac{0.25}{3} [0 + 4(0.0625) + 2(0.25) + 4(0.5625) + 1] = \\frac{1}{3}$$
    <p>Абсолютная погрешность: <strong>0.000000</strong> (абсолютная точность).</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Применять формулу Симпсона для нечетного числа разбиений $n$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: почему формула Симпсона точна для $f(x)=x^3$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Член погрешности пропорционален четвертой производной $f^{(4)}(\\xi)$. Для кубического многочлена она тождественно равна нулю.
    </div>
</details>
"""
                }
            }
        ]
    }
