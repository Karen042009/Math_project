from theory_diagrams import refine_theory_diagrams
# Chapter 3: Ածանցյալ․ իմաստը և ստացումը (The Derivative: Meaning and Derivation)
# Subsections:
# 3.1: derivative-meaning-derivation
# 3.2: derivative-rules-formulas

def get_chapter_3():
    chapter = {
        "title": {
            "hy": "3. Ածանցյալ․ իմաստը և ստացումը",
            "en": "3. The Derivative: Meaning and Derivation",
            "ru": "3. Производная: смысл и вывод"
        },
        "subsections": [
            {
                "id": "derivative-meaning-derivation",
                "title": {
                    "hy": "Ակնթարթային արագություն, շոշափողի թեքություն և f(x)=x²-ի ածանցումը",
                    "en": "Instantaneous Rate, Slope of Tangent, and Derivation of f(x)=x²",
                    "ru": "Мгновенная скорость, наклон касательной и вывод для f(x)=x²"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ածանցյալը մաթեմատիկական անալիզի կենտրոնական հասկացություններից մեկն է։ Այն միավորում է երկրաչափական և ֆիզիկական երկու մեծ գաղափար․
</p>
<ul class="theory-list">
    <li><strong>Ֆիզիկական իմաստ․</strong> Ֆունկցիայի փոփոխման <strong>ակնթարթային արագությունն է</strong>։ Եթե $s(t)$-ն դիրքն է, ապա նրա ածանցյալը ակնթարթային արագությունն է՝ $v(t) = s'(t)$։</li>
    <li><strong>Երկրաչափական իմաստ․</strong> Ֆունկցիայի գրաֆիկին $(x, f(x))$ կետում տարված <strong>շոշափող ուղղի թեքությունն է</strong> (անկյունային գործակիցը)՝ $k = \\tan \\alpha = f'(x)$։</li>
</ul>

<div class="theory-callout">
    <h4><i class="fas fa-pencil-ruler"></i> Անցումը հատողից դեպի շոշափող և ածանցյալի սահմանումը</h4>
    <p>Գրաֆիկի վրա ընտրենք երկու կետ՝ $P(x, f(x))$ և $Q(x+h, f(x+h))$, որտեղ $h = \\Delta x$-ը արգումենտի աճն է։ Այդ կետերով անցնող հատող ուղղի թեքությունն է՝</p>
    $$k_{\\text{հատող}} = \\frac{f(x+h) - f(x)}{h}$$
    <p>Երբ $h \\to 0$, $Q$ կետը կորի վրայով սահում և մոտենում է $P$ կետին։ Հատողը վերածվում է <strong>շոշափողի</strong>։</p>
    <p><strong>Ածանցյալի խիստ սահմանումը․</strong></p>
    $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
</div>

<!-- Responsive diagram inserted by theory_diagrams.py -->

<div class="theory-callout">
    <h4><i class="fas fa-calculator"></i> Քայլ առ քայլ ստացում․ $f(x) = x^2$ ֆունկցիայի ածանցյալը</h4>
    <p>Կիրառենք սահմանումը $f(x) = x^2$-ի համար․</p>
    <p><strong>Քայլ 1․</strong> Գրում ենք $f(x+h)$-ը․</p>
    $$f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$$
    <p><strong>Քայլ 2․</strong> Կազմում ենք ֆունկցիայի աճը $\\Delta f$․</p>
    $$f(x+h) - f(x) = (x^2 + 2xh + h^2) - x^2 = 2xh + h^2$$
    <p><strong>Քայլ 3․</strong> Բաժանում ենք $h$-ի վրա ($h \\ne 0$)․</p>
    $$\\frac{f(x+h) - f(x)}{h} = \\frac{2xh + h^2}{h} = \\frac{h(2x + h)}{h} = 2x + h$$
    <p><strong>Քայլ 4․</strong> Կատարում ենք սահմանային անցում $h \\to 0$․</p>
    $$f'(x) = \\lim_{h \\to 0} (2x + h) = 2x + 0 = 2x$$
    <p>Այսպիսով, <strong>$(x^2)' = 2x$</strong>։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Շոշափողի հավասարումը</h4>
    <p><strong>Խնդիր․</strong> Գտնել $y = x^2$ պարաբոլին $x = 3$ կետում տարված շոշափող ուղղի հավասարումը։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Շոշափման կետի կոորդինատները՝ $x_0 = 3$, $y_0 = f(3) = 3^2 = 9$։ Կետը՝ $(3, 9)$։</li>
        <li>Շոշափողի թեքությունը (անկյունային գործակիցը)՝ $k = f'(3) = 2(3) = 6$։</li>
        <li>Շոշափողի հավասարումը՝ $y - y_0 = k(x - x_0) \\implies y - 9 = 6(x - 3)$։</li>
        <li>Պարզեցնելով՝ $y = 6x - 18 + 9 \\implies \\mathbf{y = 6x - 9}$։</li>
    </ol>
    <p><em>Ստուգում․</em> Եթե $x = 3$, $y = 6(3) - 9 = 9$ (կետը պատկանում է ուղղին)։ Պարաբոլի և ուղղի տարբերությունը՝ $x^2 - (6x-9) = x^2 - 6x + 9 = (x-3)^2 \\ge 0$։ Քանի որ տարբերությունը լրիվ քառակուսի է, ուղիղը կորին հատում է միայն մեկ կրկնակի կետում՝ հանդիսանալով շոշափող։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> $h$-ի փոխարեն անմիջապես 0 տեղադրել սկզբնական կոտորակի մեջ՝ $\\frac{f(x+0)-f(x)}{0} = \\frac{0}{0}$ և ասել, որ ածանցյալ գոյություն չունի։</p>
    <p><strong>Ճիշտ կանոն․</strong> Նախ պետք է բացել փակագծերը, պարզեցնել համարիչը, ընդհանուր $h$ արտադրիչը կրճատել հայտարարի հետ, և միայն ամբողջական կրճատումից հետո անցնել սահմանին։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ է նշանակում $f'(x_0) = 0$ հավասարությունը երկրաչափորեն։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Եթե $f'(x_0) = 0$, ապա շոշափողի անկյունային գործակիցը $k = 0$ է։ Դա նշանակում է, որ այդ կետում շոշափող ուղիղը <strong>հորիզոնական է</strong> (զուգահեռ է $x$ առանցքին)։ Սովորաբար դա համապատասխանում է ֆունկցիայի լոկալ մաքսիմումին, մինիմումին կամ թեքման կետին։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
The derivative is the cornerstone of differential calculus. It synthesizes two profound mathematical perspectives into one:
</p>
<ul class="theory-list">
    <li><strong>Physical interpretation:</strong> The <strong>instantaneous rate of change</strong> of a function. If $s(t)$ represents position, its derivative is instantaneous velocity: $v(t) = s'(t)$.</li>
    <li><strong>Geometric interpretation:</strong> The <strong>slope of the tangent line</strong> to the graph at $(x, f(x))$: $k = \\tan \\alpha = f'(x)$.</li>
</ul>

<div class="theory-callout">
    <h4><i class="fas fa-pencil-ruler"></i> Secant to Tangent Transition & Limit Definition</h4>
    <p>Select two points on the curve: $P(x, f(x))$ and $Q(x+h, f(x+h))$, with increment $h = \\Delta x$. The secant line slope is:</p>
    $$k_{\\text{secant}} = \\frac{f(x+h) - f(x)}{h}$$
    <p>As $h \\to 0$, point $Q$ slides along the curve toward $P$. The secant pivots into the <strong>tangent line</strong>.</p>
    <p><strong>Formal Definition of the Derivative:</strong></p>
    $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-calculator"></i> First-Principles Derivation of $f(x) = x^2$</h4>
    <p>Applying the definition directly:</p>
    <ol>
        <li>Expand $f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$.</li>
        <li>Form the increment $\\Delta f = (x^2 + 2xh + h^2) - x^2 = 2xh + h^2$.</li>
        <li>Divide by $h$ ($h \\ne 0$): $\\frac{2xh + h^2}{h} = 2x + h$.</li>
        <li>Take the limit as $h \\to 0$: $\\lim_{h \\to 0}(2x + h) = 2x$.</li>
    </ol>
    <p>Thus, <strong>$(x^2)' = 2x$</strong>.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Tangent Line Equation</h4>
    <p><strong>Problem:</strong> Find the tangent line equation to $y = x^2$ at $x = 3$.</p>
    <p><strong>Solution:</strong></p>
    <ol>
        <li>Point of tangency: $x_0 = 3$, $y_0 = 3^2 = 9 \\implies (3, 9)$.</li>
        <li>Slope: $k = f'(3) = 2(3) = 6$.</li>
        <li>Point-slope form: $y - y_0 = k(x - x_0) \\implies y - 9 = 6(x - 3)$.</li>
        <li>Final equation: $\\mathbf{y = 6x - 9}$.</li>
    </ol>
    <p><em>Check:</em> The difference $x^2 - (6x-9) = (x-3)^2 \\ge 0$, confirming the line touches the parabola at the single point $x=3$ and lies everywhere else below it.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Setting $h = 0$ before algebraic simplification, concluding $\\frac{0}{0}$ is undefined.</p>
    <p><strong>Rule:</strong> Always expand, subtract $f(x)$, factor out $h$, cancel with the denominator, and only then evaluate $h \\to 0$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What is the geometric meaning of $f'(x_0) = 0$?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> A slope of $k = 0$ means the tangent line is <strong>horizontal</strong> (parallel to the $x$-axis). This occurs at local extrema (peaks and troughs) or horizontal inflection points.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Производная — краеугольный камень дифференциального исчисления. Она гармонично объединяет физический и геометрический смысл:
</p>
<ul class="theory-list">
    <li><strong>Физический смысл:</strong> <strong>Мгновенная скорость изменения</strong> функции. Если $s(t)$ — закон движения, то ее производная — мгновенная скорость $v(t) = s'(t)$.</li>
    <li><strong>Геометрический смысл:</strong> <strong>Угловой коэффициент (наклон) касательной</strong> к графику в точке $(x, f(x))$: $k = \\tan \\alpha = f'(x)$.</li>
</ul>

<div class="theory-callout">
    <h4><i class="fas fa-pencil-ruler"></i> Переход от секущей к касательной и определение</h4>
    <p>Возьмем на кривой две точки: $P(x, f(x))$ и $Q(x+h, f(x+h))$. Угловой коэффициент секущей:</p>
    $$k_{\\text{сек}} = \\frac{f(x+h) - f(x)}{h}$$
    <p>При $h \\to 0$ точка $Q$ стремится к $P$, а секущая переходит в <strong>касательную</strong>.</p>
    <p><strong>Строгое определение производной:</strong></p>
    $$f'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-calculator"></i> Вывод по определению для $f(x) = x^2$</h4>
    <ol>
        <li>Приращение аргумента: $f(x+h) = (x+h)^2 = x^2 + 2xh + h^2$.</li>
        <li>Приращение функции: $\\Delta f = (x^2 + 2xh + h^2) - x^2 = 2xh + h^2$.</li>
        <li>Разностное отношение: $\\frac{2xh + h^2}{h} = 2x + h$ (при $h \\ne 0$).</li>
        <li>Предел при $h \\to 0$: $\\lim_{h \\to 0}(2x + h) = 2x$.</li>
    </ol>
    <p>Следовательно, <strong>$(x^2)' = 2x$</strong>.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: уравнение касательной</h4>
    <p><strong>Задача:</strong> Найти уравнение касательной к $y = x^2$ в точке $x = 3$.</p>
    <p><strong>Решение:</strong></p>
    <ol>
        <li>Точка касания: $x_0 = 3$, $y_0 = 3^2 = 9 \\implies (3, 9)$.</li>
        <li>Угловой коэффициент: $k = f'(3) = 2(3) = 6$.</li>
        <li>Уравнение касательной: $y - y_0 = k(x - x_0) \\implies y - 9 = 6(x - 3)$.</li>
        <li>Итог: $\\mathbf{y = 6x - 9}$.</li>
    </ol>
    <p><em>Проверка:</em> Разность $x^2 - (6x - 9) = (x - 3)^2 \\ge 0$, что подтверждает касание в единственной точке $x=3$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Распространенная ошибка</h4>
    <p><strong>Ошибка:</strong> Подставлять $h = 0$ в исходную дробь до раскрытия скобок, получая неопределенность $\\frac{0}{0}$.</p>
    <p><strong>Правило:</strong> Сначала раскройте скобки, сократите $h$ в числителе и знаменателе, и лишь затем переходите к пределу при $h \\to 0$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: каков геометрический смысл равенства $f'(x_0) = 0$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Нулевой угловой коэффициент означает, что касательная <strong>горизонтальна</strong> (параллельна оси $Ox$). Это характерно для локальных экстремумов (максимумов, минимумов) или точек перегиба.
    </div>
</details>
"""
                }
            },
            {
                "id": "derivative-rules-formulas",
                "title": {
                    "hy": "Ածանցման հիմնական կանոններն ու ֆունկցիաների բանաձևերը",
                    "en": "Differentiation Rules and Standard Formulas",
                    "ru": "Правила дифференцирования и базовые формулы"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ամեն անգամ ածանցյալի սահմանումը կիրառելու փոխարեն մաթեմատիկոսները մշակել են հզոր <strong>կանոններ և աղյուսակային բանաձևեր</strong>, որոնք թույլ են տալիս արագ և սխալվելուց ապահովագրված ածանցել ցանկացած բարդության ֆունկցիա։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-list-ol"></i> Հիմնական կանոնները</h4>
    <ul>
        <li><strong>Հաստատունի ածանցյալ․</strong> $(c)' = 0$ (հաստատուն մեծությունը չի փոխվում)</li>
        <li><strong>Աստիճանային ֆունկցիա․</strong> $(x^n)' = n x^{n-1}$ (կամայական $n \\in \\mathbb{R}$)</li>
        <li><strong>Հաստատուն արտադրիչ․</strong> $(c \\cdot f(x))' = c \\cdot f'(x)$</li>
        <li><strong>Գումարի և տարբերության կանոն․</strong> $(f(x) \\pm g(x))' = f'(x) \\pm g'(x)$</li>
        <li><strong>Արտադրյալի կանոն (Product Rule)․</strong> $(f \\cdot g)' = f'g + fg'$</li>
        <li><strong>Քանորդի կանոն (Quotient Rule)․</strong> $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$, երբ $g(x) \\ne 0$</li>
        <li><strong>Բարդ ֆունկցիայի կանոն (Chain Rule)․</strong> $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$</li>
    </ul>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-square-root-alt"></i> Հիմնական տարրական ֆունկցիաների ածանցյալները և պայմանները</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Ֆունկցիա $f(x)$</th><th>Ածանցյալ $f'(x)$</th><th>Կիրառելիության պայմաններ և նշումներ</th></tr>
        <tr><td>$\\sin x$</td><td>$\\cos x$</td><td><strong>Անկյունը պարտադիր պետք է լինի ռադիաններով</strong></td></tr>
        <tr><td>$\\cos x$</td><td>$-\\sin x$</td><td><strong>Անկյունը պարտադիր պետք է լինի ռադիաններով</strong></td></tr>
        <tr><td>$e^x$</td><td>$e^x$</td><td>Բնական ցուցչային ֆունկցիան հավասար է իր ածանցյալին</td></tr>
        <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td><strong>Պարտադիր պայման՝ $x > 0$</strong></td></tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ 1․ Բարդ ֆունկցիա և արտադրյալ</h4>
    <p><strong>Խնդիր․</strong> Գտնել $y = x^3 \\sin(2x)$ ֆունկցիայի ածանցյալը։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Կիրառում ենք արտադրյալի կանոնը՝ $(u \\cdot v)' = u'v + uv'$, որտեղ $u = x^3$, $v = \\sin(2x)$։</li>
        <li>$u' = (x^3)' = 3x^2$։</li>
        <li>$v' = (\\sin(2x))'$ հաշվվում է բարդ ֆունկցիայի կանոնով՝ $\\cos(2x) \\cdot (2x)' = 2\\cos(2x)$։</li>
        <li>Միավորելով՝
            $$y' = 3x^2 \\sin(2x) + x^3 \\cdot [2\\cos(2x)] = 3x^2 \\sin(2x) + 2x^3 \\cos(2x) = x^2 [3\\sin(2x) + 2x\\cos(2x)]$$
        </li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ 2․ Քանորդի կանոն</h4>
    <p><strong>Խնդիր․</strong> Գտնել $f(x) = \\frac{e^x}{x^2 + 1}$ ածանցյալը։</p>
    <p><strong>Լուծում․</strong></p>
    $$f'(x) = \\frac{(e^x)'(x^2 + 1) - e^x (x^2 + 1)'}{(x^2 + 1)^2} = \\frac{e^x(x^2 + 1) - e^x(2x)}{(x^2 + 1)^2} = \\frac{e^x(x^2 - 2x + 1)}{(x^2 + 1)^2} = \\frac{e^x(x - 1)^2}{(x^2 + 1)^2}$$
    <p><em>Ստուգում․</em> $x = 1$ կետում $f'(1) = 0$, որը նշանակում է, որ $x = 1$-ը ֆունկցիայի ստացիոնար կետ է ($f(1) = e/2$)։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալներ</h4>
    <ul style="margin: 0; padding-left: 18px;">
        <li><strong>Արտադրյալի սխալ․</strong> Կարծել, թե $(f \\cdot g)' = f' \\cdot g'$։ Դա կոպիտ սխալ է․ միշտ պետք է օգտագործել $f'g + fg'$։</li>
        <li><strong>Աստիճաններ ռադիանների փոխարեն․</strong> Եռանկյունաչափական ֆունկցիաների ածանցյալները ($(\\sin x)' = \\cos x$) ճշմարիտ են <strong>միայն ռադիաններով</strong>։ Աստիճաններով ածանցյալը կպարունակի $\\frac{\\pi}{180}$ գործակից։</li>
        <li><strong>Լոգարիթմի տիրույթը․</strong> Մոռանալ, որ $(\\ln x)' = 1/x$ բանաձևում $x$-ը պետք է լինի խիստ դրական ($x > 0$)։</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչի՞ է հավասար $(\\ln(5x))'$ ածանցյալը ($x > 0$)։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Ըստ բարդ ֆունկցիայի կանոնի՝ $(\\ln(5x))' = \\frac{1}{5x} \\cdot (5x)' = \\frac{1}{5x} \\cdot 5 = \\frac{1}{x}$։<br>
        <em>Այլ եղանակ․</em> $\\ln(5x) = \\ln 5 + \\ln x$։ Քանի որ $\\ln 5$-ը հաստատուն է, նրա ածանցյալը 0 է, հետևաբար $(\\ln 5 + \\ln x)' = 0 + \\frac{1}{x} = \\frac{1}{x}$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Rather than evaluating limits from first principles each time, mathematicians developed systematic <strong>differentiation rules and reference formulas</strong> that permit reliable, rapid computation.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-list-ol"></i> Fundamental Operational Rules</h4>
    <ul>
        <li><strong>Constant Rule:</strong> $(c)' = 0$</li>
        <li><strong>Power Rule:</strong> $(x^n)' = n x^{n-1}$ for all real $n$</li>
        <li><strong>Constant Multiple:</strong> $(c \\cdot f)' = c \\cdot f'$</li>
        <li><strong>Sum and Difference:</strong> $(f \\pm g)' = f' \\pm g'$</li>
        <li><strong>Product Rule:</strong> $(f \\cdot g)' = f'g + fg'$</li>
        <li><strong>Quotient Rule:</strong> $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ ($g(x) \\ne 0$)</li>
        <li><strong>Chain Rule:</strong> $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$</li>
    </ul>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-square-root-alt"></i> Elementary Functions & Domain Requirements</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Function $f(x)$</th><th>Derivative $f'(x)$</th><th>Conditions & Critical Notes</th></tr>
        <tr><td>$\\sin x$</td><td>$\\cos x$</td><td><strong>Angle $x$ must be in radians</strong></td></tr>
        <tr><td>$\\cos x$</td><td>$-\\sin x$</td><td><strong>Angle $x$ must be in radians</strong></td></tr>
        <tr><td>$e^x$</td><td>$e^x$</td><td>Natural exponential equals its own derivative</td></tr>
        <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td><strong>Strictly valid for $x > 0$</strong></td></tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example 1: Product and Chain Rules</h4>
    <p><strong>Problem:</strong> Differentiate $y = x^3 \\sin(2x)$.</p>
    <p><strong>Solution:</strong></p>
    <ol>
        <li>Product rule: $(uv)' = u'v + uv'$ with $u = x^3$, $v = \\sin(2x)$.</li>
        <li>$u' = 3x^2$.</li>
        <li>$v' = \\cos(2x) \\cdot (2x)' = 2\\cos(2x)$ by chain rule.</li>
        <li>Combine: $y' = 3x^2 \\sin(2x) + 2x^3 \\cos(2x) = x^2[3\\sin(2x) + 2x\\cos(2x)]$.</li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example 2: Quotient Rule</h4>
    <p><strong>Problem:</strong> Differentiate $f(x) = \\frac{e^x}{x^2 + 1}$.</p>
    <p><strong>Solution:</strong></p>
    $$f'(x) = \\frac{e^x(x^2 + 1) - e^x(2x)}{(x^2 + 1)^2} = \\frac{e^x(x - 1)^2}{(x^2 + 1)^2}$$
    <p><em>Check:</em> At $x = 1$, $f'(1) = 0$, revealing a critical stationary point.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfalls</h4>
    <ul style="margin: 0; padding-left: 18px;">
        <li><strong>Product Fallacy:</strong> Writing $(fg)' = f'g'$ is completely false. Always use $f'g + fg'$.</li>
        <li><strong>Degrees vs Radians:</strong> Trig derivative formulas hold <strong>strictly in radians</strong>.</li>
        <li><strong>Log Domain:</strong> $(\\ln x)' = 1/x$ requires $x > 0$.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What is the derivative of $\\ln(5x)$ for $x > 0$?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> By chain rule, $(\\ln(5x))' = \\frac{1}{5x} \\cdot 5 = \\frac{1}{x}$. Alternatively, $\\ln(5x) = \\ln 5 + \\ln x$, and since $(\\ln 5)' = 0$, the derivative is $0 + 1/x = 1/x$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Вместо постоянного использования громоздкого предела математики вывели <strong>правила дифференцирования и таблицу базовых формул</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-list-ol"></i> Основные правила дифференцирования</h4>
    <ul>
        <li><strong>Константа:</strong> $(c)' = 0$</li>
        <li><strong>Степенная функция:</strong> $(x^n)' = n x^{n-1}$ для любого $n \\in \\mathbb{R}$</li>
        <li><strong>Постоянный множитель:</strong> $(c \\cdot f)' = c \\cdot f'$</li>
        <li><strong>Сумма и разность:</strong> $(f \\pm g)' = f' \\pm g'$</li>
        <li><strong>Произведение:</strong> $(fg)' = f'g + fg'$</li>
        <li><strong>Частное:</strong> $\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}$ ($g(x) \\ne 0$)</li>
        <li><strong>Сложная функция (цепное правило):</strong> $(f(g(x)))' = f'(g(x)) \\cdot g'(x)$</li>
    </ul>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-square-root-alt"></i> Производные элементарных функций и условия</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Функция $f(x)$</th><th>Производная $f'(x)$</th><th>Условия и комментарии</th></tr>
        <tr><td>$\\sin x$</td><td>$\\cos x$</td><td><strong>Угол строго в радианах</strong></td></tr>
        <tr><td>$\\cos x$</td><td>$-\\sin x$</td><td><strong>Угол строго в радианах</strong></td></tr>
        <tr><td>$e^x$</td><td>$e^x$</td><td>Экспонента равна своей производной</td></tr>
        <tr><td>$\\ln x$</td><td>$\\frac{1}{x}$</td><td><strong>Строго при $x > 0$</strong></td></tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример 1: произведение и сложная функция</h4>
    <p><strong>Задача:</strong> Найти производную $y = x^3 \\sin(2x)$.</p>
    <p><strong>Решение:</strong></p>
    <ol>
        <li>Правило произведения: $(uv)' = u'v + uv'$ при $u = x^3$, $v = \\sin(2x)$.</li>
        <li>$u' = 3x^2$.</li>
        <li>$v' = \\cos(2x) \\cdot (2x)' = 2\\cos(2x)$ по цепному правилу.</li>
        <li>Итог: $y' = 3x^2 \\sin(2x) + 2x^3 \\cos(2x) = x^2[3\\sin(2x) + 2x\\cos(2x)]$.</li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример 2: производная дроби</h4>
    <p><strong>Задача:</strong> Найти производную $f(x) = \\frac{e^x}{x^2 + 1}$.</p>
    <p><strong>Решение:</strong></p>
    $$f'(x) = \\frac{e^x(x^2 + 1) - e^x(2x)}{(x^2 + 1)^2} = \\frac{e^x(x - 1)^2}{(x^2 + 1)^2}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичные ошибки</h4>
    <ul style="margin: 0; padding-left: 18px;">
        <li><strong>Ошибка произведения:</strong> Запись $(fg)' = f'g'$ грубо неверна. Нужно: $f'g + fg'$.</li>
        <li><strong>Градусы вместо радиан:</strong> Формулы тригонометрии верны <strong>только в радианах</strong>.</li>
        <li><strong>Область $\\ln x$:</strong> Формула $(\\ln x)' = 1/x$ определена только при $x > 0$.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: чему равна производная $(\\ln(5x))'$ при $x > 0$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> По цепному правилу $(\\ln(5x))' = \\frac{1}{5x} \\cdot 5 = \\frac{1}{x}$. Либо $\\ln(5x) = \\ln 5 + \\ln x$, и так как $(\\ln 5)' = 0$, получаем $0 + 1/x = 1/x$.
    </div>
</details>
"""
                }
            }
        ]
    }
    return refine_theory_diagrams(chapter)
