# Chapter 6: Նյուտոն–Լայբնիցի բանաձևը (The Newton–Leibniz Formula)
# Subsections:
# 6.1: fundamental-theorem-calculus
# 6.2: newton-leibniz-solved-examples

def get_chapter_6():
    return {
        "title": {
            "hy": "6. Նյուտոն–Լայբնիցի բանաձևը",
            "en": "6. The Newton–Leibniz Formula",
            "ru": "6. Формула Ньютона–Лейбница"
        },
        "subsections": [
            {
                "id": "fundamental-theorem-calculus",
                "title": {
                    "hy": "Վերլուծության հիմնական թեորեմը և կուտակման ֆունկցիան",
                    "en": "The Fundamental Theorem of Calculus & Accumulation Function",
                    "ru": "Основная теорема анализа и функция накопления"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ինչպե՞ս են կապված ածանցյալն ու մակերեսը։ Առաջին հայացքից շոշափողի թեքությունն ու կորի տակ ընկած մակերեսը բոլորովին տարբեր աշխարհներից են։ <strong>Մաթեմատիկական անալիզի հիմնական թեորեմը (FTC)</strong> ցույց է տալիս, որ դրանք նույն մեդալի երկու երեսներն են․ ինտեգրումը և ածանցումը փոխադարձաբար հակադարձ գործողություններ են։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-chart-area"></i> Կուտակման ֆունկցիան (Accumulation Function)</h4>
    <p>Դիտարկենք ֆունկցիա, որը հաշվում է $a$-ից մինչև փոփոխական $x$ կետը կուտակված մակերեսը․</p>
    $$A(x) = \\int_a^x f(t) dt$$
    <p>Այստեղ $t$-ն ինտեգրման ներքին փոփոխականն է, իսկ $x$-ը՝ վերին սահմանը։</p>
    <p><strong>Անալիզի հիմնական թեորեմի I մասը․</strong> Եթե $f(t)$-ն անընդհատ է $[a, b]$ հատվածում, ապա կուտակման $A(x)$ ֆունկցիան դիֆերենցելի է, և նրա ածանցյալը հավասար է հենց $f(x)$-ին․</p>
    $$A'(x) = \\frac{d}{dx} \\left( \\int_a^x f(t)dt \\right) = f(x)$$
    <p><em>Իմաստը․</em> Կուտակվող մակերեսի աճի ակնթարթային արագությունը $x$ կետում հավասար է այդ կետում կորի բարձրությանը ($f(x)$)։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-crown"></i> Նյուտոն–Լայբնիցի բանաձևը (FTC Մաս II)</h4>
    <p>Եթե $F(x)$-ը $f(x)$ անընդհատ ֆունկցիայի որևէ նախնական ֆունկցիա է ($F'(x) = f(x)$), ապա որոշյալ ինտեգրալը հաշվվում է որպես նախնականի արժեքների տարբերություն վերին և ստորին սահմաններում․</p>
    $$\\int_a^b f(x)dx = F(b) - F(a) = \\left[ F(x) \\right]_a^b$$
    <p>Այս բանաձևը ազատում է Ռիմանի անվերջ գումարների սահմանը հաշվելու անհրաժեշտությունից․ բավական է գտնել անորոշ ինտեգրալը և տեղադրել սահմանները։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Բանաձևի հիմնավորումը</h4>
    <p>Քանի որ $A'(x) = f(x)$, $A(x)$-ը հանդիսանում է $f(x)$-ի նախնական ֆունկցիա։ Ուրեմն կամայական $F(x)$ նախնականի համար՝</p>
    $$A(x) = F(x) + C$$
    <ol>
        <li>Տեղադրենք $x = a$․ $A(a) = \\int_a^a f(t)dt = 0 \\implies F(a) + C = 0 \\implies C = -F(a)$։</li>
        <li>Ուստի $A(x) = F(x) - F(a)$։</li>
        <li>Տեղադրենք $x = b$․ $A(b) = \\int_a^b f(t)dt = F(b) - F(a)$։</li>
    </ol>
    <p>Թեորեմն ապացուցված է։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Կիրառել Նյուտոն-Լայբնիցի բանաձևը խզվող ֆունկցիայի նկատմամբ առանց ստուգելու անընդհատությունը։ Օրինակ՝ $\\int_{-1}^1 \\frac{1}{x^2}dx$ ինտեգրալում գրել $\\left[-\\frac{1}{x}\\right]_{-1}^1 = -1 - (1) = -2$։</p>
    <p><strong>Կանոն․</strong> Այստեղ օգտագործված թեորեմի համար անընդհատությունը բավարար պայման է։ $1/x^2$-ը $x=0$-ում անսահմանափակ է․ չի կարելի պարզապես նախնականի արժեքները տեղադրել ամբողջ հատվածի ծայրակետերում։ Պետք է բաժանել եզակի կետում և ստուգել երկու անիսկական ինտեգրալները․ այս դեպքում դրանք տարամիտում են դեպի $+\infty$։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Գտնել $\\frac{d}{dx} \\left(\\int_1^x \\sqrt{1 + t^4} dt\\right)$ ածանցյալը։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Ըստ Անալիզի հիմնական թեորեմի I մասի, եթե ինտեգրալի վերին սահմանը $x$-ն է, ապա ածանցյալը պարզապես ինտեգրանդի արժեքն է $x$ կետում․ $\\mathbf{\\sqrt{1 + x^4}}$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
How are rates of change and areas connected? At first glance, tangent slopes and geometric areas inhabit distinct worlds. The <strong>Fundamental Theorem of Calculus (FTC)</strong> reveals they are two sides of the same coin: differentiation and integration are inverse mathematical operations.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-chart-area"></i> The Accumulation Function</h4>
    <p>Consider the function measuring area accumulated from $a$ up to variable bound $x$:</p>
    $$A(x) = \\int_a^x f(t) dt$$
    <p><strong>FTC Part 1:</strong> If $f$ is continuous on $[a, b]$, then $A(x)$ is differentiable on $(a, b)$, and its derivative is precisely $f(x)$:</p>
    $$A'(x) = \\frac{d}{dx} \\left( \\int_a^x f(t)dt \\right) = f(x)$$
    <p>The instantaneous rate at which area accumulates equals the height of the boundary curve.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-crown"></i> The Newton–Leibniz Formula (FTC Part 2)</h4>
    <p>If $F(x)$ is any antiderivative of continuous function $f(x)$ ($F'(x) = f(x)$), the definite integral equals the net change in $F$ across the bounds:</p>
    $$\\int_a^b f(x)dx = F(b) - F(a) = \\left[ F(x) \\right]_a^b$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Analytic Derivation</h4>
    <p>Since $A'(x) = f(x)$, $A(x)$ is an antiderivative of $f(x)$. Thus for any antiderivative $F(x)$, $A(x) = F(x) + C$.</p>
    <ol>
        <li>At $x = a$: $A(a) = \\int_a^a f(t)dt = 0 \\implies F(a) + C = 0 \\implies C = -F(a)$.</li>
        <li>Hence $A(x) = F(x) - F(a)$.</li>
        <li>Evaluating at $x = b$: $\\int_a^b f(t)dt = F(b) - F(a)$.</li>
    </ol>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Critical Pitfall</h4>
    <p><strong>Mistake:</strong> Blindly applying Newton-Leibniz to discontinuous functions, e.g., evaluating $\\int_{-1}^1 \\frac{1}{x^2}dx = [-1/x]_{-1}^1 = -2$.</p>
    <p><strong>Condition:</strong> Continuity is a sufficient condition for the theorem stated above. Since $1/x^2$ is unbounded at $0$, simply subtracting endpoint values of an antiderivative across that singularity is invalid. Split the interval there and examine both improper integrals; here they diverge to $+\infty$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Evaluate $\\frac{d}{dx} \\left( \\int_1^x \\sqrt{1 + t^4} dt \\right)$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> By FTC Part 1, differentiating an accumulation function with respect to its upper bound directly returns the integrand: $\\mathbf{\\sqrt{1 + x^4}}$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Как связаны производная и площадь? На первый взгляд, наклон касательной и площадь под кривой не имеют ничего общего. <strong>Основная теорема анализа (формула Ньютона–Лейбница)</strong> доказывает, что дифференцирование и интегрирование взаимно обратны.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-chart-area"></i> Функция накопления</h4>
    $$A(x) = \\int_a^x f(t) dt$$
    <p><strong>Первая часть теоремы:</strong> Если $f$ непрерывна, то производная интеграла по верхнему пределу равна подынтегральной функции:</p>
    $$A'(x) = \\frac{d}{dx} \\left( \\int_a^x f(t)dt \\right) = f(x)$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-crown"></i> Формула Ньютона–Лейбница</h4>
    $$\\int_a^b f(x)dx = F(b) - F(a) = \\left[ F(x) \\right]_a^b$$
    <p>где $F'(x) = f(x)$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Критическая ошибка</h4>
    <p><strong>Ошибка:</strong> Применять формулу к разрывным функциям, например, формально вычислять $\\int_{-1}^1 \\frac{1}{x^2}dx = -2$.</p>
    <p><strong>Условие:</strong> Непрерывность — достаточное условие сформулированной выше теоремы. Функция $1/x^2$ неограниченна в $0$, поэтому просто подставлять концы всего отрезка в первообразную нельзя. Нужно разделить отрезок в особой точке и проверить оба несобственных интеграла; здесь они расходятся к $+\infty$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: найдите $\\frac{d}{dx} \\left( \\int_1^x \\sqrt{1 + t^4} dt \\right)$.</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> По первой части теоремы анализа производная равна $\\mathbf{\\sqrt{1 + x^4}}$.
    </div>
</details>
"""
                }
            },
            {
                "id": "newton-leibniz-solved-examples",
                "title": {
                    "hy": "Հաշվարկներ Նյուտոն-Լայբնիցի բանաձևով․ լուծված օրինակներ",
                    "en": "Calculations with Newton–Leibniz: Solved Examples",
                    "ru": "Расчеты по формуле Ньютона–Лейбница: решенные примеры"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Կիրառենք Նյուտոն-Լայբնիցի բանաձևը երեք հիմնական դասի ֆունկցիաների վրա՝ հաստատուն, գծային և քառակուսային, և յուրաքանչյուր արդյունքը համեմատենք երկրաչափական մակերեսի հետ։
</p>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Օրինակ 1․ Հաստատուն ֆունկցիա (Ուղղանկյուն)</h4>
    <p><strong>Խնդիր․</strong> Հաշվել $\\int_2^6 5 \\, dx$։</p>
    <p><strong>Հաշվարկ․</strong></p>
    $$\\int_2^6 5 \\, dx = [5x]_2^6 = 5(6) - 5(2) = 30 - 10 = \\mathbf{20}$$
    <p><em>Երկրաչափական ստուգում․</em> Գրաֆիկը $y = 5$ հորիզոնական ուղիղն է։ $[2, 6]$ հատվածում ձևավորվում է ուղղանկյուն, որի լայնությունը $b - a = 6 - 2 = 4$ է, իսկ բարձրությունը՝ $5$։ Մակերեսը՝ $S = 4 \\times 5 = 20$։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Օրինակ 2․ Գծային ֆունկցիա (Սեղան)</h4>
    <p><strong>Խնդիր․</strong> Հաշվել $\\int_0^4 (2x + 1) dx$։</p>
    <p><strong>Հաշվարկ․</strong></p>
    <ol>
        <li>Գտնում ենք նախնական ֆունկցիան․ $F(x) = \\int (2x + 1)dx = x^2 + x$։</li>
        <li>Տեղադրում ենք սահմանները․
            $$\\int_0^4 (2x + 1)dx = [x^2 + x]_0^4 = (4^2 + 4) - (0^2 + 0) = (16 + 4) - 0 = \\mathbf{20}$$
        </li>
    </ol>
    <p><em>Երկրաչափական ստուգում․</em> Գրաֆիկը $y = 2x+1$ ուղիղն է։ Ձևավորվում է ուղղանկյուն սեղան, որի հիմքերն են $y(0) = 1$ և $y(4) = 9$, իսկ բարձրությունը՝ $h = 4$։ Սեղանի մակերեսը՝ $S = \\frac{1 + 9}{2} \\times 4 = 5 \\times 4 = 20$։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Օրինակ 3․ Քառակուսային ֆունկցիա (Պարաբոլ)</h4>
    <p><strong>Խնդիր․</strong> Հաշվել $\\int_0^1 x^2 dx$։</p>
    <p><strong>Հաշվարկ․</strong></p>
    $$\\int_0^1 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1^3}{3} - \\frac{0^3}{3} = \\mathbf{\\frac{1}{3} \\approx 0.333333}$$
    <p><em>Ստուգում․</em> Քանի որ $y=x^2$-ը տեղավորվում է $1 \\times 1$ մակերեսով քառակուսու մեջ, նրա տակ ընկած մակերեսը պետք է լինի $1/2$-ից փոքր (քանի որ պարաբոլը գոգավոր է)։ $1/3 < 0.5$, ինչը լիովին համապատասխանում է տրամաբանությանը։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Սահմանները շփոթել և տեղադրել $F(a) - F(b)$՝ $F(b) - F(a)$-ի փոխարեն։</p>
    <p><strong>Հիշեք․</strong> Ինտեգրալի հիմնական կանոնը միշտ <strong>Վերին սահմանից հանած ստորին սահմանն է</strong>։ Եթե սահմանները տեղերով փոխվում են, ինտեգրալի նշանը փոխվում է հակադիրով՝ $\\int_b^a f(x)dx = -\\int_a^b f(x)dx$։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչի՞ է հավասար $\\int_1^3 (3x^2 - 2x) dx$ ինտեգրալը։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Նախնական ֆունկցիան՝ $F(x) = x^3 - x^2$։<br>
        $F(3) = 3^3 - 3^2 = 27 - 9 = 18$։<br>
        $F(1) = 1^3 - 1^2 = 1 - 1 = 0$։<br>
        Արդյունքը՝ $F(3) - F(1) = 18 - 0 = \\mathbf{18}$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Let us apply the Newton–Leibniz formula to three foundational classes of functions — constant, linear, and quadratic — verifying each result against geometric figures.
</p>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Example 1: Constant Function (Rectangle)</h4>
    <p><strong>Evaluate:</strong> $\\int_2^6 5 \\, dx$.</p>
    $$\\int_2^6 5 \\, dx = [5x]_2^6 = 5(6) - 5(2) = 30 - 10 = \\mathbf{20}$$
    <p><em>Geometric check:</em> Rectangle with width $6 - 2 = 4$ and height $5$. Area $= 4 \\times 5 = 20$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Example 2: Linear Function (Trapezoid)</h4>
    <p><strong>Evaluate:</strong> $\\int_0^4 (2x + 1) dx$.</p>
    $$\\int_0^4 (2x + 1)dx = [x^2 + x]_0^4 = (16 + 4) - 0 = \\mathbf{20}$$
    <p><em>Geometric check:</em> Trapezoid with parallel bases $y(0)=1$ and $y(4)=9$, altitude $h=4$. Area $= \\frac{1 + 9}{2} \\times 4 = 20$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Example 3: Quadratic Function (Parabola)</h4>
    <p><strong>Evaluate:</strong> $\\int_0^1 x^2 dx$.</p>
    $$\\int_0^1 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3} - 0 = \\mathbf{\\frac{1}{3} \\approx 0.333333}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Computing $F(a) - F(b)$ instead of $F(b) - F(a)$.</p>
    <p><strong>Rule:</strong> Always evaluate <strong>Upper limit minus Lower limit</strong>. Swapping limits reverses the sign: $\\int_b^a f(x)dx = -\\int_a^b f(x)dx$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Evaluate $\\int_1^3 (3x^2 - 2x) dx$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Antiderivative: $F(x) = x^3 - x^2$.<br>
        $F(3) = 27 - 9 = 18$; $F(1) = 1 - 1 = 0$.<br>
        Result: $F(3) - F(1) = 18 - 0 = \\mathbf{18}$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Применим формулу Ньютона–Лейбница к трем базовым классам функций — постоянной, линейной и квадратичной, проверив каждый результат геометрически.
</p>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример 1: постоянная функция (прямоугольник)</h4>
    $$\\int_2^6 5 \\, dx = [5x]_2^6 = 30 - 10 = 20$$
    <p><em>Геометрическая проверка:</em> Прямоугольник шириной $4$ и высотой $5$: $S = 4 \\times 5 = 20$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример 2: линейная функция (трапеция)</h4>
    $$\\int_0^4 (2x + 1) dx = [x^2 + x]_0^4 = (16 + 4) - 0 = 20$$
    <p><em>Геометрическая проверка:</em> Трапеция с основаниями $1$ и $9$ и высотой $4$: $S = \\frac{1 + 9}{2} \\times 4 = 20$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример 3: квадратичная парабола</h4>
    $$\\int_0^1 x^2 dx = \\left[ \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3} \\approx 0.333333$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Вычитать $F(a) - F(b)$ вместо $F(b) - F(a)$.</p>
    <p><strong>Правило:</strong> Всегда вычитается <strong>значение в верхнем пределе минус значение в нижнем</strong>.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: вычислите $\\int_1^3 (3x^2 - 2x) dx$.</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Первообразная: $F(x) = x^3 - x^2$.<br>
        $F(3) = 27 - 9 = 18$; $F(1) = 1 - 1 = 0$.<br>
        Ответ: $18 - 0 = \\mathbf{18}$.
    </div>
</details>
"""
                }
            }
        ]
    }
