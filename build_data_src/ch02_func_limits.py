from theory_diagrams import refine_theory_diagrams
# Chapter 2: Ֆունկցիա, փոփոխություն և սահման (Function, Change, and Limit)
# Subsections:
# 2.1: func-change-graphs
# 2.2: rates-limits-concept

def get_chapter_2():
    chapter = {
        "title": {
            "hy": "2. Ֆունկցիա, փոփոխություն և սահման",
            "en": "2. Function, Change, and Limit",
            "ru": "2. Функция, изменение и предел"
        },
        "subsections": [
            {
                "id": "func-change-graphs",
                "title": {
                    "hy": "Ֆունկցիա, անկախ և կախյալ փոփոխականներ, գրաֆիկներ",
                    "en": "Functions, Independent & Dependent Variables, Reading Graphs",
                    "ru": "Функция, независимые и зависимые переменные, графики"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Մաթեմատիկական անալիզի բոլոր հասկացությունները՝ ածանցյալից մինչև ինտեգրալ, կառուցված են <strong>ֆունկցիայի</strong> հիմքի վրա։ Ֆունկցիան օրենք կամ կանոն է, որը յուրաքանչյուր թույլատրելի մուտքային արժեքի միարժեքորեն համապատասխանեցնում է ճիշտ մեկ ելքային արժեք։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-cube"></i> Սահմանում և հիմնական հասկացություններ</h4>
    <p>Գրառումը՝ $y = f(x)$</p>
    <ul>
        <li><strong>Անկախ փոփոխական ($x$, արգումենտ)․</strong> Մեծություն, որի արժեքը մենք ազատորեն ընտրում ենք որոշման տիրույթից ($D(f)$)։ Օրինակ՝ ժամանակը $t$, ջերմաստիճանը կամ տարածությունը։</li>
        <li><strong>Կախյալ փոփոխական ($y$)․</strong> Մեծություն, որի արժեքը որոշվում է $x$-ի միջոցով՝ ըստ $f$ կանոնի ($E(f)$ արժեքների տիրույթ)։ Օրինակ՝ մեքենայի անցած ճանապարհը $s(t)$։</li>
        <li><strong>Գրաֆիկ․</strong> Հարթության վրա $(x, f(x))$ կետերի բազմությունն է։ Ուղղահայաց ուղղի թեստը (Vertical Line Test)՝ յուրաքանչյուր ուղղահայաց ուղիղ կարող է ֆունկցիայի գրաֆիկը հատել առավելագույնը մեկ կետում։</li>
    </ul>
</div>

<!-- Responsive diagram inserted by theory_diagrams.py -->

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Առօրյա շարժման մոդել</h4>
    <p>Ավտոմեքենայի վազքաչափի ցուցմունքը տրված է $s(t) = 20 + 60t$ (կմ) ֆունկցիայով, որտեղ $t$-ն ժամանակն է (ժամ)։</p>
    <ul>
        <li>Անկախ փոփոխականը $t$-ն է ($t \\ge 0$)։</li>
        <li>Կախյալ փոփոխականը $s$-ն է՝ անցած ընդհանուր հեռավորությունը։</li>
        <li>Սկզբնական պահին ($t = 0$)՝ $s(0) = 20\\text{ կմ}$։</li>
        <li>$2.5$ ժամ անց՝ $s(2.5) = 20 + 60(2.5) = 20 + 150 = 170\\text{ կմ}$։</li>
    </ul>
    <p><em>Ստուգում․</em> Քանի որ յուրաքանչյուր ժամում ավելանում է 60 կմ, 2.5 ժամում աճը կլինի $2.5 \\times 60 = 150\\text{ կմ}$։ $20 + 150 = 170\\text{ կմ}$։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> $x^2 + y^2 = 25$ շրջանագիծը համարել $y$-ի ֆունկցիա $x$-ից։</p>
    <p><strong>Ճիշտ մեկնաբանություն․</strong> Շրջանագիծը ֆունկցիա չէ, քանի որ $x = 0$ կետին համապատասխանում են երկու տարբեր $y$ արժեքներ՝ $y = 5$ և $y = -5$։ Ուղղահայաց ուղիղը կորը հատում է երկու կետում։ Ֆունկցիա դարձնելու համար պետք է դիտարկել կամ վերին կիսաշրջանը ($y = \\sqrt{25 - x^2}$), կամ ստորինը ($y = -\\sqrt{25 - x^2}$)։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Կարո՞ղ է ֆունկցիան ունենալ նույն ելքային արժեքը տարբեր մուտքերի համար։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Այո։ Օրինակ՝ $f(x) = x^2$ ֆունկցիայի համար $f(-3) = 9$ և $f(3) = 9$։ Ֆունկցիայի սահմանումը պահանջում է, որ յուրաքանչյուր $x$-ի համապատասխանի <strong>միայն մեկ</strong> $y$, բայց նույն $y$-ը կարող է ունենալ մի քանի տարբեր նախապատկերներ։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
All concepts of mathematical analysis, from derivatives to integrals, rest upon the foundation of the <strong>function</strong>. A function is an unambiguous rule that assigns to each permitted input value exactly one output value.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-cube"></i> Definition and Core Concepts</h4>
    <p>Mathematical notation: $y = f(x)$</p>
    <ul>
        <li><strong>Independent Variable ($x$, argument):</strong> The quantity freely chosen from the domain ($D(f)$), such as elapsed time $t$, distance, or temperature.</li>
        <li><strong>Dependent Variable ($y$):</strong> The quantity determined by $x$ according to rule $f$ ($E(f)$, the range). For example, distance traveled $s(t)$.</li>
        <li><strong>Graph:</strong> The set of coordinate points $(x, f(x))$ in the Cartesian plane. The <em>Vertical Line Test</em> states that any vertical line must intersect the graph of a valid function at most once.</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Kinematic Function</h4>
    <p>A vehicle's odometer reading is modeled by $s(t) = 20 + 60t$ (in km), where $t$ is time in hours.</p>
    <ul>
        <li>Independent variable: $t$ ($t \\ge 0$).</li>
        <li>Dependent variable: $s$ (total distance from the starting depot).</li>
        <li>At $t = 0$: $s(0) = 20\\text{ km}$.</li>
        <li>At $t = 2.5\\text{ hours}$: $s(2.5) = 20 + 60(2.5) = 20 + 150 = 170\\text{ km}$.</li>
    </ul>
    <p><em>Check:</em> Moving at 60 km/h for 2.5 hours adds $60 \\times 2.5 = 150\\text{ km}$. $20 + 150 = 170\\text{ km}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Treating the circle equation $x^2 + y^2 = 25$ as a single function $y = f(x)$.</p>
    <p><strong>Correction:</strong> A full circle fails the Vertical Line Test because each $x \\in (-5, 5)$ maps to two outputs: $y = \\pm \\sqrt{25 - x^2}$. To work with functions, we must isolate single branches: either the upper semicircle ($y = \\sqrt{25-x^2}$) or lower semicircle ($y = -\\sqrt{25-x^2}$).</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Can a function assign the same output to multiple distinct inputs?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Yes. For example, in $f(x) = x^2$, both $f(3) = 9$ and $f(-3) = 9$. The definition requires that each input produces at most one output, but different inputs may share the same output.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Все понятия математического анализа — от производной до интеграла — базируются на понятии <strong>функции</strong>. Функция — это правило, которое каждому допустимому входному значению однозначно ставит в соответствие ровно один выход.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-cube"></i> Определение и ключевые концепции</h4>
    <p>Запись: $y = f(x)$</p>
    <ul>
        <li><strong>Независимая переменная ($x$, аргумент):</strong> Величина, выбираемая произвольно из области определения ($D(f)$), например, время $t$, температура или координата.</li>
        <li><strong>Зависимая переменная ($y$):</strong> Величина, вычисляемая по правилу $f$ ($E(f)$, область значений). Например, пройденный путь $s(t)$.</li>
        <li><strong>График:</strong> Множество точек плоскости $(x, f(x))$. Тест вертикальной прямой: любая вертикальная прямая пересекает график функции не более чем в одной точке.</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: функция движения</h4>
    <p>Показания спидометра задаются функцией $s(t) = 20 + 60t$ (км), где $t$ — время в часах.</p>
    <ul>
        <li>Независимая переменная: $t$ ($t \\ge 0$).</li>
        <li>Зависимая переменная: $s$ (пройденный путь).</li>
        <li>В начальный момент ($t = 0$): $s(0) = 20\\text{ км}$.</li>
        <li>Через 2.5 часа: $s(2.5) = 20 + 60(2.5) = 170\\text{ км}$.</li>
    </ul>
    <p><em>Проверка:</em> За 2.5 ч при скорости 60 км/ч прирост составит $2.5 \\times 60 = 150\\text{ км}$. $20 + 150 = 170\\text{ км}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Распространенная ошибка</h4>
    <p><strong>Ошибка:</strong> Считать уравнение окружности $x^2 + y^2 = 25$ функцией $y(x)$.</p>
    <p><strong>Правильно:</strong> Окружность не является функцией, так как значению $x = 0$ соответствуют два значения: $y = 5$ и $y = -5$. Чтобы получить функцию, необходимо разделить ее на верхнюю полуокружность ($y = \\sqrt{25 - x^2}$) и нижнюю ($y = -\\sqrt{25 - x^2}$).</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: может ли функция давать одинаковый результат для разных входов?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Да. Например, для $f(x) = x^2$ имеем $f(-3) = 9$ и $f(3) = 9$. Определение требует, чтобы у каждого $x$ был ровно один $y$, но один и тот же $y$ может получаться из разных $x$.
    </div>
</details>
"""
                }
            },
            {
                "id": "rates-limits-concept",
                "title": {
                    "hy": "Փոփոխություններ (Δx, Δy), միջին արագություն և սահմանի գաղափարը",
                    "en": "Increments (Δx, Δy), Average Rate of Change, and Concept of Limit",
                    "ru": "Приращения (Δx, Δy), средняя скорость изменения и концепция предела"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ինչպե՞ս ենք նկարագրում փոփոխությունը։ Իրական կյանքում մեծությունները հազվադեպ են մնում անփոփոխ։ Շարժման, ջերմաստիճանի կամ շուկայական գների ուսումնասիրությունը պահանջում է հասկանալ՝ որքա՞ն է փոխվում մեծությունը և որքա՞ն արագ։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-arrows-alt-h"></i> Փոփոխության քայլերը և միջին արագությունը</h4>
    <p>Ենթադրենք արգումենտը փոխվում է $x_1$-ից մինչև $x_2$․</p>
    <ul>
        <li><strong>Արգումենտի աճ (փոփոխություն)․</strong> $\\Delta x = x_2 - x_1$</li>
        <li><strong>Ֆունկցիայի աճ (փոփոխություն)․</strong> $\\Delta y = f(x_2) - f(x_1) = f(x_1 + \\Delta x) - f(x_1)$</li>
        <li><strong>Միջին փոփոխության արագություն․</strong>
            $$\\frac{\\Delta y}{\\Delta x} = \\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$$
        </li>
    </ul>
    <p>Երկրաչափորեն $\\frac{\\Delta y}{\\Delta x}$-ը գրաֆիկի $(x_1, f(x_1))$ և $(x_2, f(x_2))$ կետերը միացնող <strong>հատող ուղղի</strong> (secant line) թեքությունն է ($k = \\tan \\alpha$)։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-compress-arrows-alt"></i> Սահմանի գաղափարը (Limit)</h4>
    <p>Ի՞նչ տեղի կունենա, եթե $\\Delta x$ փոփոխությունը դարձնենք չափազանց փոքր՝ ձգտող զրոյի ($\Delta x \\to 0$)։</p>
    <p>Եթե $\\Delta x = 0$, կստանանք $\\frac{0}{0}$ անորոշություն։ Բայց <strong>սահմանը</strong> չի նշանակում տեղադրել զրո․ սահմանը հարցնում է․ <em>«Ի՞նչ արժեքի է մոտենում $\\frac{\\Delta y}{\\Delta x}$ հարաբերությունը, երբ $\\Delta x$-ը անվերջ մոտենում է զրոյին, բայց չի դառնում զրո»</em>։</p>
    $$\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = L$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Ազատ անկող մարմնի արագությունը</h4>
    <p>Ծանրության ուժի ազդեցությամբ ընկնող մարմնի դիրքը տրված է $s(t) = 5t^2$ բանաձևով ($g \\approx 10\\text{ մ/վ}^2$)։ Գտնենք միջին արագությունը $t_1 = 2\\text{ վ}$ պահից սկսած տարբեր $\\Delta t$ միջակայքերում․</p>
    <p>Ընդհանուր բանաձևը՝</p>
    $$\\frac{\\Delta s}{\\Delta t} = \\frac{5(2 + \\Delta t)^2 - 5(2)^2}{\\Delta t} = \\frac{5(4 + 4\\Delta t + \\Delta t^2) - 20}{\\Delta t} = \\frac{20\\Delta t + 5\\Delta t^2}{\\Delta t} = 20 + 5\\Delta t$$
    <table class="theory-table" style="width: 100%; margin: 10px 0;">
        <tr><th>Միջակայք $\\Delta t$</th><th>Հաշվարկ ($20 + 5\\Delta t$)</th><th>Միջին արագություն (մ/վ)</th></tr>
        <tr><td>$\\Delta t = 1\\text{ վ}$</td><td>$20 + 5(1)$</td><td>$25\\text{ մ/վ}$</td></tr>
        <tr><td>$\\Delta t = 0.1\\text{ վ}$</td><td>$20 + 5(0.1)$</td><td>$20.5\\text{ մ/վ}$</td></tr>
        <tr><td>$\\Delta t = 0.01\\text{ վ}$</td><td>$20 + 5(0.01)$</td><td>$20.05\\text{ մ/վ}$</td></tr>
        <tr><td>$\\Delta t \\to 0$</td><td>$\\lim_{\\Delta t \\to 0}(20 + 5\\Delta t)$</td><td><strong>$20\\text{ մ/վ}$ (Ակնթարթային արագություն)</strong></td></tr>
    </table>
    <p><em>Ստուգում․</em> Երբ $\\Delta t$-ն ձգտում է 0-ի, արժեքը միտում է դեպի 20 մ/վ, որն էլ հենց մարմնի ածանցյալն է $t = 2$ պահին ($s'(2) = 10(2) = 20$)։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Կարծել, որ $\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = \\frac{0}{0}$ անիմաստ է կամ անհնար հաշվել։</p>
    <p><strong>Ճիշտ մոտեցում․</strong> $\\frac{0}{0}$-ը ոչ թե թիվ է, այլ <strong>անորոշություն</strong>։ Կոտորակը նախ պետք է հանրահաշվորեն կրճատել (ինչպես վերևում $\\Delta t$-ն կրճատվեց համարիչից և հայտարարից), և միայն դրանից հետո կատարել սահմանային անցում։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ երկրաչափական իմաստ ունի $\\Delta x \\to 0$ սահմանային անցումը հատող ուղղի համար։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Երբ $\\Delta x \\to 0$, հատող ուղղի երկրորդ կետը գրաֆիկի վրայով սահում և անվերջ մոտենում է առաջին կետին։ Արդյունքում հատող ուղիղը պտտվում է և վերածվում տվյալ կետում գրաֆիկին տարված <strong>շոշափող ուղղի</strong>։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
How do we mathematically quantify change? In nature and engineering, quantities rarely stay static. Understanding motion, temperature, or financial markets requires measuring both magnitude and rate of change.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-arrows-alt-h"></i> Increments and Average Rate of Change</h4>
    <p>Suppose the independent variable shifts from $x_1$ to $x_2$:</p>
    <ul>
        <li><strong>Argument increment:</strong> $\\Delta x = x_2 - x_1$</li>
        <li><strong>Function increment:</strong> $\\Delta y = f(x_1 + \\Delta x) - f(x_1)$</li>
        <li><strong>Average Rate of Change:</strong>
            $$\\frac{\\Delta y}{\\Delta x} = \\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$$
        </li>
    </ul>
    <p>Geometrically, $\\frac{\\Delta y}{\\Delta x}$ is the slope $m_{sec}$ of the <strong>secant line</strong> passing through $(x_1, f(x_1))$ and $(x_2, f(x_2))$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-compress-arrows-alt"></i> The Fundamental Concept of a Limit</h4>
    <p>What happens as the interval $\\Delta x$ shrinks toward zero ($\Delta x \\to 0$)?</p>
    <p>Evaluating at $\\Delta x = 0$ yields the undefined form $\\frac{0}{0}$. The <strong>limit</strong> does not evaluate at 0; it asks: <em>"What finite target value does the ratio $\\frac{\\Delta y}{\\Delta x}$ approach as $\\Delta x$ gets arbitrarily close to zero?"</em></p>
    $$\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = L$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Instantaneous Speed of Falling Body</h4>
    <p>The altitude drop of a falling object is $s(t) = 5t^2$ meters. Let us find average velocity starting at $t = 2\\text{ s}$ over diminishing intervals $\\Delta t$:</p>
    $$\\frac{\\Delta s}{\\Delta t} = \\frac{5(2 + \\Delta t)^2 - 5(2)^2}{\\Delta t} = \\frac{20\\Delta t + 5\\Delta t^2}{\\Delta t} = 20 + 5\\Delta t$$
    <ul>
        <li>For $\\Delta t = 1\\text{ s}$: $v_{avg} = 20 + 5(1) = 25\\text{ m/s}$</li>
        <li>For $\\Delta t = 0.1\\text{ s}$: $v_{avg} = 20 + 5(0.1) = 20.5\\text{ m/s}$</li>
        <li>For $\\Delta t = 0.01\\text{ s}$: $v_{avg} = 20 + 5(0.01) = 20.05\\text{ m/s}$</li>
        <li>Limit as $\\Delta t \\to 0$: $\\lim_{\\Delta t \\to 0}(20 + 5\\Delta t) = \\mathbf{20\\text{ m/s}}$ (Instantaneous Velocity).</li>
    </ul>
    <p><em>Check:</em> By power rule differentiation $s'(t) = 10t$, and $s'(2) = 20\\text{ m/s}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Concluding that $\\frac{0}{0}$ means the rate does not exist.</p>
    <p><strong>Correction:</strong> $\\frac{0}{0}$ is an indeterminate algebraic form, not a final number. One must cancel the common factor $\\Delta x$ algebraically before evaluating the limit.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What is the geometric interpretation of the limit $\\Delta x \\to 0$ for a secant line?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> As $\\Delta x \\to 0$, the second point slides along the curve toward the fixed point. The secant line pivots continuously until it becomes the <strong>tangent line</strong> at that point.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Как математически измерить изменение? В физике и инженерии величины непрерывно эволюционируют. Изучение движения, тепловых потоков или сигналов требует измерения как величины изменения, так и его скорости.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-arrows-alt-h"></i> Приращения и средняя скорость изменения</h4>
    <p>Пусть аргумент изменился от $x_1$ до $x_2$:</p>
    <ul>
        <li><strong>Приращение аргумента:</strong> $\\Delta x = x_2 - x_1$</li>
        <li><strong>Приращение функции:</strong> $\\Delta y = f(x_1 + \\Delta x) - f(x_1)$</li>
        <li><strong>Средняя скорость изменения:</strong>
            $$\\frac{\\Delta y}{\\Delta x} = \\frac{f(x_1 + \\Delta x) - f(x_1)}{\\Delta x}$$
        </li>
    </ul>
    <p>Геометрически $\\frac{\\Delta y}{\\Delta x}$ — это угловой коэффициент <strong>секущей</strong>, проходящей через точки $(x_1, f(x_1))$ и $(x_2, f(x_2))$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-compress-arrows-alt"></i> Концепция предела (Limit)</h4>
    <p>Что происходит при уменьшении $\\Delta x$ к нулю ($\Delta x \\to 0$)?</p>
    <p>Прямая подстановка $\\Delta x = 0$ дает неопределенность $\\frac{0}{0}$. <strong>Предел</strong> не подставляет 0; он отвечает на вопрос: <em>«К какому конечному числу стремится отношение $\\frac{\\Delta y}{\\Delta x}$, когда $\\Delta x$ бесконечно приближается к нулю?»</em></p>
    $$\\lim_{\\Delta x \\to 0} \\frac{\\Delta y}{\\Delta x} = L$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: мгновенная скорость падения</h4>
    <p>Путь свободно падающего тела равен $s(t) = 5t^2$ метров. Найдем среднюю скорость начиная с $t = 2\\text{ с}$ при уменьшении интервала $\\Delta t$:</p>
    $$\\frac{\\Delta s}{\\Delta t} = \\frac{5(2 + \\Delta t)^2 - 5(2)^2}{\\Delta t} = \\frac{20\\Delta t + 5\\Delta t^2}{\\Delta t} = 20 + 5\\Delta t$$
    <ul>
        <li>При $\\Delta t = 1\\text{ с}$: $v_{ср} = 20 + 5(1) = 25\\text{ м/с}$</li>
        <li>При $\\Delta t = 0.1\\text{ с}$: $v_{ср} = 20 + 5(0.1) = 20.5\\text{ м/с}$</li>
        <li>При $\\Delta t = 0.01\\text{ с}$: $v_{ср} = 20 + 5(0.01) = 20.05\\text{ м/с}$</li>
        <li>Предел при $\\Delta t \\to 0$: $\\lim_{\\Delta t \\to 0}(20 + 5\\Delta t) = \\mathbf{20\\text{ м/с}}$ (Мгновенная скорость).</li>
    </ul>
    <p><em>Проверка:</em> По правилу дифференцирования $s'(t) = 10t$, откуда $s'(2) = 20\\text{ м/с}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Распространенная ошибка</h4>
    <p><strong>Ошибка:</strong> Считать, что неопределенность $\\frac{0}{0}$ означает невозможность найти результат.</p>
    <p><strong>Правильно:</strong> $\\frac{0}{0}$ — это неопределенность, требующая предварительного алгебраического сокращения общего множителя $\\Delta x$, после чего вычисляется предел.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: каков геометрический смысл предельного перехода $\\Delta x \\to 0$ для секущей?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> При $\\Delta x \\to 0$ вторая точка секущей скользит по кривой к первой точке. Секущая поворачивается и в пределе становится <strong>касательной</strong> к графику функции в данной точке.
    </div>
</details>
"""
                }
            }
        ]
    }
    return refine_theory_diagrams(chapter)
