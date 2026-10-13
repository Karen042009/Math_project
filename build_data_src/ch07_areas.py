# Chapter 7: Մակերեսների հաշվում (Area Calculation)
# Subsections:
# 7.1: area-under-curve-axis
# 7.2: area-between-two-curves

def get_chapter_7():
    return {
        "title": {
            "hy": "7. Մակերեսների հաշվում",
            "en": "7. Area Calculation",
            "ru": "7. Вычисление площадей"
        },
        "subsections": [
            {
                "id": "area-under-curve-axis",
                "title": {
                    "hy": "Կորի և x առանցքի միջև մակերեսը (նշանափոխ ֆունկցիաներ)",
                    "en": "Area Between Curve and x-Axis (Sign-Changing Functions)",
                    "ru": "Площадь между кривой и осью Ox (знакопеременные функции)"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Գրաֆիկի և $x$ առանցքի միջև ընկած մակերեսի հաշվումը պահանջում է հատուկ ուշադրություն, երբ ֆունկցիան հատում է առանցքը և փոխում իր նշանը։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-ruler-combined"></i> Ընդհանուր բանաձևը և ալգորիթմը</h4>
    <p>Երկրաչափական մակերեսը միշտ ոչ բացասական է․</p>
    $$A = \\int_a^b |f(x)| dx$$
    <p><strong>Հաշվարկի 4-քայլանի ալգորիթմը․</strong></p>
    <ol>
        <li><strong>Գտնել հատման կետերը․</strong> Լուծել $f(x) = 0$ հավասարումը և առանձնացնել $[a, b]$ միջակայքին պատկանող արմատները ($c_1, c_2, \\dots$)։</li>
        <li><strong>Տրոհել միջակայքը․</strong> $[a, b]$-ն բաժանել ենթամիջակայքերի՝ $[a, c_1]$, $[c_1, c_2]$, $[c_2, b]$, որոնցից յուրաքանչյուրում $f(x)$-ը պահպանում է իր նշանը։</li>
        <li><strong>Որոշել նշանը․</strong> Յուրաքանչյուր ենթամիջակայքում ստուգել՝ $f(x) \\ge 0$ (վերևում է), թե $f(x) \\le 0$ (ներքևում է)։</li>
        <li><strong>Գումարել մակերեսները․</strong>
            $$A = \\int_a^{c_1} \\pm f(x)dx + \\int_{c_1}^{c_2} \\pm f(x)dx + \\dots$$
        </li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Պարաբոլի և առանցքի մակերեսը</h4>
    <p><strong>Խնդիր․</strong> Գտնել $y = x^2 - 4$ կորի և $x$ առանցքի միջև ընկած մակերեսը $[-1, 3]$ միջակայքում։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li><strong>Արմատները․</strong> $x^2 - 4 = 0 \\implies x = \\pm 2$։ $[-1, 3]$ հատվածին պատկանում է միայն $x = 2$-ը։</li>
        <li><strong>Ենթամիջակայքերը․</strong> $[-1, 2]$ և $[2, 3]$։</li>
        <li><strong>Նշանները․</strong>
            <ul>
                <li>$[-1, 2]$-ում $x^2 - 4 \\le 0$ (գրաֆիկը առանցքից ներքև է)․ մակերեսը՝ $-(x^2 - 4) = 4 - x^2$։</li>
                <li>$[2, 3]$-ում $x^2 - 4 \\ge 0$ (գրաֆիկը առանցքից վերև է)․ մակերեսը՝ $x^2 - 4$։</li>
            </ul>
        </li>
        <li><strong>Հաշվարկ․</strong>
            $$A_1 = \\int_{-1}^2 (4 - x^2)dx = \\left[ 4x - \\frac{x^3}{3} \\right]_{-1}^2 = \\left(8 - \\frac{8}{3}\\right) - \\left(-4 + \\frac{1}{3}\\right) = \\frac{16}{3} - \\left(-\\frac{11}{3}\\right) = \\frac{27}{3} = 9$$
            $$A_2 = \\int_2^3 (x^2 - 4)dx = \\left[ \\frac{x^3}{3} - 4x \\right]_2^3 = (9 - 12) - \\left(\\frac{8}{3} - 8\\right) = -3 - \\left(-\\frac{16}{3}\\right) = \\frac{7}{3}$$
            $$A = A_1 + A_2 = 9 + \\frac{7}{3} = \\mathbf{\\frac{34}{3} \\approx 11.333 \\text{ մակերեսային միավոր}}$$
        </li>
    </ol>
    <p><em>Ստուգում․</em> Եթե ինտեգրեինք կուրորեն առանց մոդուլի՝ $\\int_{-1}^3 (x^2-4)dx = [x^3/3 - 4x]_{-1}^3 = -3 - (11/3) = -20/3 \\approx -6.67$, որը կոպիտ սխալ է։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Հաշվել սովորական ինտեգրալը և վերջնական բացասական արդյունքի վրա պարզապես դնել մոդուլ (օրինակ՝ $|-6.67| = 6.67$)։</p>
    <p><strong>Ճշմարտություն․</strong> Դա սխալ է, որովհետև դրական և բացասական մասերը նախապես կրճատում են միմյանց։ Ճիշտ մակերեսը ստացվում է միայն յուրաքանչյուր տիրույթը առանձին ինտեգրելով ($11.33 \\ne 6.67$)։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Որքա՞ն է $y = x$ ուղղի և $x$ առանցքի միջև ընկած մակերեսը $[-2, 2]$ հատվածում։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> $A = \\int_{-2}^0 (-x)dx + \\int_0^2 x dx = \\left[-\\frac{x^2}{2}\\right]_{-2}^0 + \\left[\\frac{x^2}{2}\\right]_0^2 = 2 + 2 = \\mathbf{4\\text{ միավոր}^2}$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Evaluating the area between a curve and the $x$-axis requires strict handling whenever the function crosses the axis and alternates sign.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-ruler-combined"></i> General Formulation & 4-Step Algorithm</h4>
    $$A = \\int_a^b |f(x)| dx$$
    <ol>
        <li><strong>Find $x$-intercepts:</strong> Solve $f(x) = 0$ for all roots $c_i \\in [a, b]$.</li>
        <li><strong>Subdivide interval:</strong> Partition $[a, b]$ into subintervals $[a, c_1], [c_1, c_2], \\dots$ of constant sign.</li>
        <li><strong>Identify signs:</strong> Check whether $f(x) \\ge 0$ (above) or $f(x) \\le 0$ (below axis).</li>
        <li><strong>Integrate absolute pieces:</strong>
            $$A = \\int_a^{c_1} \\pm f(x)dx + \\int_{c_1}^{c_2} \\pm f(x)dx + \\dots$$
        </li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Parabola Crossing Axis</h4>
    <p><strong>Problem:</strong> Find the area between $y = x^2 - 4$ and the $x$-axis on $[-1, 3]$.</p>
    <ol>
        <li>Root in $[-1, 3]$: $x = 2$.</li>
        <li>On $[-1, 2]$, $x^2 - 4 \\le 0 \\implies A_1 = \\int_{-1}^2 (4 - x^2)dx = 9$.</li>
        <li>On $[2, 3]$, $x^2 - 4 \\ge 0 \\implies A_2 = \\int_2^3 (x^2 - 4)dx = 7/3$.</li>
        <li>Total Area: $A = 9 + 7/3 = \\mathbf{34/3 \\approx 11.333\\text{ area units}}$.</li>
    </ol>
    <p><em>Check:</em> Blindly integrating without splitting yields $\\int_{-1}^3(x^2-4)dx = -20/3 \\approx -6.67$, which erroneously cancels opposing areas.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Computing the net integral and taking the absolute value at the end ($|-6.67| = 6.67$).</p>
    <p><strong>Correction:</strong> Taking the absolute value at the very end does not undo the mutual cancellation that already occurred inside the integral. You must integrate each section individually.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What is the geometric area between $y=x$ and the $x$-axis on $[-2, 2]$?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Two symmetric triangles of base 2 and height 2: $A = \\int_{-2}^0 (-x)dx + \\int_0^2 x dx = 2 + 2 = \\mathbf{4\\text{ units}^2}$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Вычисление площади между кривой и осью $Ox$ требует обязательного учета корней, если функция меняет знак.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-ruler-combined"></i> Общая формула и 4 шага вычисления</h4>
    $$A = \\int_a^b |f(x)| dx$$
    <ol>
        <li><strong>Поиск нулей:</strong> Решаем $f(x) = 0$ на $[a, b]$.</li>
        <li><strong>Разбиение:</strong> Делим $[a, b]$ на подотрезки постоянного знака.</li>
        <li><strong>Знак функции:</strong> Определяем, где график выше оси, а где ниже.</li>
        <li><strong>Суммирование площадей:</strong> Интегрируем каждую область со знаком плюс.</li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: парабола</h4>
    <p><strong>Задача:</strong> Площадь между $y = x^2 - 4$ и $Ox$ на $[-1, 3]$.</p>
    <p>Корень на отрезке: $x = 2$.</p>
    <p>На $[-1, 2]$: $A_1 = \\int_{-1}^2 (4 - x^2)dx = 9$.</p>
    <p>На $[2, 3]$: $A_2 = \\int_2^3 (x^2 - 4)dx = 7/3$.</p>
    <p>Итоговая площадь: $A = 9 + 7/3 = \\mathbf{34/3 \\approx 11.333\\text{ кв. ед.}}$</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Вычислить один интеграл и взять модуль от итогового отрицательного числа ($|-6.67| = 6.67$). Положительная и отрицательная части уже взаимоуничтожились, поэтому разбиение обязательно.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: какова геометрическая площадь под $y=x$ над $[-2, 2]$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Два симметричных треугольника: $A = \\int_{-2}^0 (-x)dx + \\int_0^2 x dx = 2 + 2 = \\mathbf{4\\text{ кв. ед.}}$
    </div>
</details>
"""
                }
            },
            {
                "id": "area-between-two-curves",
                "title": {
                    "hy": "Երկու գրաֆիկների միջև մակերեսը",
                    "en": "Area Between Two Curves",
                    "ru": "Площадь между двумя графиками"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Երկու կորերով սահմանափակված պատկերի մակերեսը հաշվարկվում է որպես վերին կորի տակ ընկած մակերեսի և ստորին կորի տակ ընկած մակերեսի տարբերություն։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-draw-polygon"></i> Ընդհանուր բանաձևը</h4>
    <p>Եթե $[a, b]$ միջակայքում տրված են $y = f(x)$ և $y = g(x)$ ֆունկցիաները․</p>
    $$A = \\int_a^b |f(x) - g(x)| dx$$
    <p>Եթե ամբողջ միջակայքում $f(x) \\ge g(x)$ (այսինքն՝ $f$-ի գրաֆիկը գտնվում է $g$-ի գրաֆիկից վերև)․</p>
    $$A = \\int_a^b [f_{\\text{վերև}}(x) - g_{\\text{ներքև}}(x)] dx$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Ուղղի և պարաբոլի միջև մակերեսը</h4>
    <p><strong>Խնդիր․</strong> Գտնել $y = x + 2$ ուղղով և $y = x^2$ պարաբոլով սահմանափակված պատկերի մակերեսը։</p>
    <p><strong>Քայլ առ քայլ լուծում․</strong></p>
    <ol>
        <li><strong>Հատման կետերը (ինտեգրման սահմանները)․</strong> Հավասարեցնում ենք երկու ֆունկցիաները․
            $$x^2 = x + 2 \\implies x^2 - x - 2 = 0 \\implies (x - 2)(x + 1) = 0$$
            Սահմաններն են՝ $a = -1$ և $b = 2$։
        </li>
        <li><strong>Վերևի և ներքևի ֆունկցիաները․</strong>
            Միջակայքից ընտրենք փորձնական կետ, օրինակ՝ $x = 0$․
            $$y_{\\text{ուղիղ}}(0) = 0 + 2 = 2, \\quad y_{\\text{պարաբոլ}}(0) = 0^2 = 0$$
            Քանի որ $2 > 0$, ուրեմն $y = x + 2$-ը վերևի ֆունկցիան է, իսկ $y = x^2$-ը՝ ներքևի։
        </li>
        <li><strong>Հաշվարկը․</strong>
            $$A = \\int_{-1}^2 [(x + 2) - x^2] dx = \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^2$$
            $$= \\left( \\frac{4}{2} + 4 - \\frac{8}{3} \\right) - \\left( \\frac{1}{2} - 2 - \\left(-\\frac{1}{3}\\right) \\right)$$
            $$= \\left( 6 - \\frac{8}{3} \\right) - \\left( -\\frac{3}{2} + \\frac{1}{3} \\right) = \\frac{10}{3} - \\left( -\\frac{7}{6} \\right) = \\frac{20}{6} + \\frac{7}{6} = \\frac{27}{6} = \\mathbf{4.5 \\text{ միավոր}^2}$$
        </li>
    </ol>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Շփոթել վերևի և ներքևի ֆունկցիաները՝ հաշվելով $\\int (g - f)dx$ և ստանալով բացասական պատասխան ($-4.5$)։</p>
    <p><strong>Կանոն․</strong> Միշտ ստուգեք կամայական միջանկյալ կետով, թե որ կորն է գտնվում ավելի բարձր։ Եթե պատասխանը ստացվում է բացասական, ուրեմն հանել եք սխալ հերթականությամբ։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Գտնել $y = x$ և $y = x^2$ կորերով սահմանափակված տիրույթի մակերեսը առաջին քառորդում։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Հատման կետերը՝ $x^2 = x \\implies x = 0, 1$։ $[0, 1]$-ում $x \\ge x^2$ (ուղիղը վերևում է)։<br>
        $A = \\int_0^1 (x - x^2)dx = \\left[ \\frac{x^2}{2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{2} - \\frac{1}{3} = \\mathbf{\\frac{1}{6} \\approx 0.1667}$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
The area between two intersecting curves is computed as the area under the upper curve minus the area under the lower curve.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-draw-polygon"></i> Fundamental Formula</h4>
    $$A = \\int_a^b |f(x) - g(x)| dx$$
    <p>When $f(x) \\ge g(x)$ across the entire interval $[a, b]$:</p>
    $$A = \\int_a^b [f_{\\text{upper}}(x) - g_{\\text{lower}}(x)] dx$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Line and Parabola</h4>
    <p><strong>Problem:</strong> Find the area enclosed by $y = x + 2$ and $y = x^2$.</p>
    <ol>
        <li><strong>Bounds:</strong> $x^2 = x + 2 \\implies x^2 - x - 2 = 0 \\implies x = -1, 2$.</li>
        <li><strong>Orientation:</strong> At $x = 0$, $y_{\\text{line}} = 2 > y_{\\text{parabola}} = 0$. The line is on top.</li>
        <li><strong>Evaluation:</strong>
            $$A = \\int_{-1}^2 [(x + 2) - x^2]dx = \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^2 = \\frac{10}{3} - \\left(-\\frac{7}{6}\\right) = \\mathbf{4.5 \\text{ units}^2}$$
        </li>
    </ol>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Inverting the order and computing $g_{\\text{lower}} - f_{\\text{upper}}$, yielding $-4.5$.</p>
    <p><strong>Rule:</strong> Always subtract the bottom curve from the top curve: $y_{\\text{top}} - y_{\\text{bottom}}$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Find area between $y = x$ and $y = x^2$ on $[0, 1]$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Bounds: $x = 0, 1$. Since $x \\ge x^2$ on $[0, 1]$: $A = \\int_0^1 (x - x^2)dx = [x^2/2 - x^3/3]_0^1 = 1/2 - 1/3 = \\mathbf{1/6 \\approx 0.1667}$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Площадь фигуры, заключенной между двумя кривыми, вычисляется как разность площадей под верхней и нижней функциями.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-draw-polygon"></i> Общая формула</h4>
    $$A = \\int_a^b |f(x) - g(x)| dx$$
    <p>Если на отрезке $f(x) \\ge g(x)$ (график $f$ выше графика $g$):</p>
    $$A = \\int_a^b [f_{\\text{верх}}(x) - g_{\\text{низ}}(x)] dx$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: прямая и парабола</h4>
    <p><strong>Задача:</strong> Площадь области между $y = x + 2$ и $y = x^2$.</p>
    <ol>
        <li>Точки пересечения: $x^2 - x - 2 = 0 \\implies x = -1, 2$.</li>
        <li>В точке $x=0$: прямая ($y=2$) выше параболы ($y=0$).</li>
        <li>Интеграл:
            $$A = \\int_{-1}^2 (x + 2 - x^2)dx = \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^2 = \\mathbf{4.5\\text{ кв. ед.}}$$
        </li>
    </ol>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Перепутать порядок вычитания и получить отрицательную площадь ($-4.5$). Всегда вычитайте: $y_{\\text{верх}} - y_{\\text{низ}}$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: какова площадь между $y=x$ и $y=x^2$ на $[0, 1]$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> $A = \\int_0^1 (x - x^2)dx = 1/2 - 1/3 = \\mathbf{1/6 \\approx 0.1667}$.
    </div>
</details>
"""
                }
            }
        ]
    }
