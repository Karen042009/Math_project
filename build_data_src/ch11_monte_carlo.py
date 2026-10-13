from theory_additions import get_monte_carlo_uncertainty_section

# Chapter 11: Մոնտե Կառլոյի մեթոդով ինտեգրալի հաշվում (Monte Carlo Integration)
# Subsections:
# 11.1: monte-carlo-hit-or-miss
# 11.2: monte-carlo-sample-mean

def get_chapter_11():
    chapter = {
        "title": {
            "hy": "11. Մոնտե Կառլոյի մեթոդով ինտեգրալի հաշվում",
            "en": "11. Monte Carlo Integration: Hit-or-Miss & Sample Mean",
            "ru": "11. Интегрирование методом Монте-Карло: Hit-or-Miss и выборочное среднее"
        },
        "subsections": [
            {
                "id": "monte-carlo-hit-or-miss",
                "title": {
                    "hy": "Պատահական կետերով մակերեսի գնահատում (Hit-or-Miss մեթոդ)",
                    "en": "Geometric Estimation via Random Points (Hit-or-Miss Method)",
                    "ru": "Геометрическая оценка случайными точками (метод Hit-or-Miss)"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
<strong>Մոնտե Կառլոյի մեթոդը</strong> մաթեմատիկական խնդիրների լուծումն է պատահական փորձերի և վիճակագրական ընտրանքների միջոցով։ Ինտեգրալի հաշվման ամենատեսանելի երկրաչափական եղանակը <strong>Hit-or-Miss (Դիպում կամ Վրիպում)</strong> մեթոդն է։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-bullseye"></i> Hit-or-Miss մեթոդի մաթեմատիկական ձևակերպումը</h4>
    <p>Ենթադրենք ունենք ոչ բացասական և սահմանափակ ֆունկցիա՝ $0 \\le f(x) \\le M$ $[a, b]$ հատվածում․</p>
    <ol>
        <li>Ֆունկցիայի գրաֆիկը պարփակում ենք ուղղանկյան մեջ՝ $[a, b] \\times [0, M]$, որի մակերեսն է՝
            $$S_{\\text{ուղղանկյուն}} = (b - a) \\cdot M$$
        </li>
        <li>Ուղղանկյան մեջ հավասարաչափ պատահականությամբ գեներացնում ենք $N$ կետեր՝ $(X_i, Y_i)$, որտեղ $X_i \\sim U(a, b)$ և $Y_i \\sim U(0, M)$։</li>
        <li>Հաշվում ենք այն կետերի քանակը ($N_{\\text{inside}}$), որոնք ընկել են ֆունկցիայի գրաֆիկի տակ․
            $$Y_i \\le f(X_i)$$
        </li>
        <li>Ըստ երկրաչափական հավանականության սահմանման՝ կետի կորի տակ ընկնելու հավանականությունը հավասար է մակերեսների հարաբերությանը՝ $P = \\frac{I}{S_{\\text{ուղղանկյուն}}}$։ Մեծ թվերի օրենքով՝ հաճախականությունը ձգտում է հավանականությանը՝ $\\frac{N_{\\text{inside}}}{N} \\approx P$։</li>
        <li>Ստանում ենք ինտեգրալի հիմնական գնահատականը․
            $$I \\approx (b - a) \\cdot M \\cdot \\frac{N_{\\text{inside}}}{N}$$
        </li>
    </ol>
</div>

<div class="theory-callout" style="border-left-color: #ef4444;">
    <h4><i class="fas fa-exclamation-circle"></i> Կարևոր սահմանափակում․ Նշանափոխ ֆունկցիաներ</h4>
    <p><strong>ՈՒՇԱԴՐՈՒԹՅՈՒՆ․</strong> Այս բանաձևը <strong>չի կարելի կիրառել</strong> նշանափոխ ֆունկցիայի նկատմամբ առանց այն հարմարեցնելու։</p>
    <p>Եթե $f(x)$-ը ընդունում է բացասական արժեքներ ($m \\le f(x) \\le M$, որտեղ $m < 0$), պետք է կամ ֆունկցիան վեր տանել հաստատունով՝ $g(x) = f(x) + |m| \\ge 0$, գտնել $g(x)$-ի ինտեգրալը և վերջում հանել ավելացված ուղղանկյան մակերեսը ($|m|(b-a)$), կամ առանձին հաշվել դրական և բացասական շրջանները։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ 1․ $\\int_0^1 x^2 dx = 1/3$ հաշվումը Մոնտե Կառլոյով</h4>
    <p>$a = 0, b = 1$, $M = 1$ ($0 \\le x^2 \\le 1$)։ Ուղղանկյան մակերեսը՝ $S = (1-0) \\cdot 1 = 1$։</p>
    <p>Համակարգիչը գեներացնում է $N = 10,000$ պատահական կետեր $[0, 1] \\times [0, 1]$ տիրույթում։</p>
    <p>Ստուգում ենք $Y_i \\le X_i^2$ պայմանը։ Ենթադրենք ճշգրիտ ընկել են $N_{\\text{inside}} = 3,348$ կետեր։</p>
    $$I \\approx 1 \\cdot \\frac{3348}{10000} = \\mathbf{0.3348}$$
    <p><em>Ճշգրիտ արժեքը․</em> $1/3 = 0.333333$։ Բացարձակ սխալը՝ $|0.3348 - 0.333333| = \\mathbf{0.001467}$ (ընդամենը 0.44% հարաբերական սխալ)։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ 2․ $\\pi$ թվի գնահատումը շրջանի և քառակուսու միջոցով</h4>
    <p>Դիտարկենք միավոր քառակուսին $[0, 1] \\times [0, 1]$ և նրա մեջ գտնվող քառորդ շրջանը՝ $x^2 + y^2 \\le 1$ ($f(x) = \\sqrt{1 - x^2}$)։</p>
    <ul>
        <li>Քառորդ շրջանի մակերեսը՝ $S_{\\text{շրջան}} = \\frac{\\pi R^2}{4} = \\frac{\\pi}{4}$։</li>
        <li>Քառակուսու մակերեսը՝ $S_{\\text{քառակուսի}} = 1 \\times 1 = 1$։</li>
        <li>Կետի քառորդ շրջանում հայտնվելու հավանականությունը՝ $P = \\frac{\\pi / 4}{1} = \\frac{\\pi}{4}$։</li>
        <li>Հետևաբար՝ $\\frac{N_{\\text{inside}}}{N} \\approx \\frac{\\pi}{4} \\implies \\mathbf{\\pi \\approx 4 \\cdot \\frac{N_{\\text{inside}}}{N}}$։</li>
    </ul>
    <p>Եթե $N = 100,000$ փորձից ներս է ընկել $78,542$ կետ, ապա $\\pi \\approx 4 \\cdot 0.78542 = \\mathbf{3.14168}$։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> $M$ սահմանը ընտրել ֆունկցիայի առավելագույն արժեքից փոքր (օրինակ՝ $f(x)$ ունի արժեք 2.5, բայց $M = 2$)։</p>
    <p><strong>Հետևանք․</strong> Ֆունկցիայի գագաթը դուրս կմնա ուղղանկյունից, և բոլոր այն կետերը, որոնք գտնվում են $2 < y \\le 2.5$ տիրույթում, երբեք չեն հաշվառվի։ Արդյունքը կլինի սիստեմատիկորեն կողմնակալ և թերագնահատված։ $M$-ը պետք է լինի խստորեն $\\ge \\max f(x)$։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ կլինի, եթե $M$-ը ընտրենք շատ ավելի մեծ, քան ֆունկցիայի իրական մաքսիմումը (օրինակ՝ 1-ի փոխարեն 100)։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Մեթոդը կշարունակի մնալ անկողմնակալ, բայց նրա <strong>արդյունավետությունը կտրուկ կնկնի</strong>։ Կետերի ճնշող մեծամասնությունը (99%-ից ավելին) կվրիպեն, $N_{\\text{inside}}$-ը կլինի շատ փոքր, իսկ գնահատականի դիսպերսիան և վիճակագրական սխալը կդառնան հսկայական։ Օպտիմալ է ընտրել $M = \\max f(x)$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
The <strong>Monte Carlo Method</strong> solves deterministic mathematical problems through statistical simulation. Its most intuitive geometric manifestation is the <strong>Hit-or-Miss</strong> integration algorithm.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-bullseye"></i> Mathematical Formulation of Hit-or-Miss</h4>
    <p>For a non-negative bounded function $0 \\le f(x) \\le M$ on $[a, b]$:</p>
    <ol>
        <li>Enclose the region in a bounding box of area $S_{\\text{box}} = (b - a) \\cdot M$.</li>
        <li>Generate $N$ independent uniform random points $(X_i, Y_i) \\in [a, b] \\times [0, M]$.</li>
        <li>Count hits falling under the curve: $N_{\\text{inside}} = \\#\\{i : Y_i \\le f(X_i)\\}$.</li>
        <li>By geometric probability, $P(\\text{Hit}) = \\frac{I}{S_{\\text{box}}}$. By the Law of Large Numbers, $\\frac{N_{\\text{inside}}}{N} \\to P(\\text{Hit})$.</li>
        <li>Estimated integral:
            $$I \\approx (b - a) M \\frac{N_{\\text{inside}}}{N}$$
        </li>
    </ol>
</div>

<div class="theory-callout" style="border-left-color: #ef4444;">
    <h4><i class="fas fa-exclamation-circle"></i> Critical Constraint: Sign-Changing Functions</h4>
    <p><strong>DO NOT</strong> apply this formula directly to functions that dip below the $x$-axis without adjustment. If $m \\le f(x) \\le M$ with $m < 0$, shift $g(x) = f(x) + |m| \\ge 0$, estimate $\\int g(x)dx$, and subtract $|m|(b-a)$ at the end.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Benchmark 1: $\\int_0^1 x^2 dx = 1/3$</h4>
    <p>Bounding box: $[0, 1] \\times [0, 1]$, $S_{\\text{box}} = 1$. With $N = 10,000$ points, suppose $N_{\\text{inside}} = 3,348$:</p>
    $$I \\approx 1 \\cdot \\frac{3,348}{10,000} = \\mathbf{0.3348}$$
    <p>Absolute error: $|0.3348 - 0.3333| = \\mathbf{0.0015}$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Benchmark 2: Estimating $\\pi$ via Inscribed Quarter Circle</h4>
    <p>Quarter circle $x^2 + y^2 \\le 1$ in unit square: area is $\\pi/4$. Thus $\\mathbf{\\pi \\approx 4 \\frac{N_{\\text{inside}}}{N}}$. For $N = 100,000$ and $N_{\\text{inside}} = 78,542$, $\\pi \\approx 3.14168$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Setting $M < \\max f(x)$, clipping the curve and permanently biasing the estimate downwards.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What happens if $M$ is chosen excessively large ($M = 100$ instead of $1$)?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> The estimator remains theoretically unbiased, but statistical efficiency collapses. Over 99% of points miss the curve, variance explodes, and error increases dramatically. Optimal choice is $M = \\max_{[a, b]} f(x)$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
<strong>Метод Монте-Карло</strong> решает детерминированные математические задачи с помощью статистического моделирования. Наиболее наглядный геометрический вариант — алгоритм <strong>Hit-or-Miss</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-bullseye"></i> Математическая формулировка Hit-or-Miss</h4>
    <p>Для функции $0 \\le f(x) \\le M$ на $[a, b]$:</p>
    <ol>
        <li>Ограничивающий прямоугольник: площадь $S = (b - a) M$.</li>
        <li>Генерация $N$ независимых равномерных точек $(X_i, Y_i) \\in [a, b] \\times [0, M]$.</li>
        <li>Подсчет точек под графиком: $N_{\\text{inside}} = \\#\\{Y_i \\le f(X_i)\\}$.</li>
        <li>Оценка интеграла:
            $$I \\approx (b - a) M \\frac{N_{\\text{inside}}}{N}$$
        </li>
    </ol>
</div>

<div class="theory-callout" style="border-left-color: #ef4444;">
    <h4><i class="fas fa-exclamation-circle"></i> Ограничение: знакопеременные функции</h4>
    <p>Не применяйте формулу напрямую, если функция принимает отрицательные значения. Необходим вертикальный сдвиг $g(x) = f(x) + |m| \\ge 0$ с последующим вычитанием площади прямоугольника сдвига.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример 1: $\\int_0^1 x^2 dx$</h4>
    <p>$N = 10,000$ точек, $N_{\\text{inside}} = 3,348 \\implies I \\approx 0.3348$. Погрешность: $0.0015$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример 2: приближение числа $\\pi$</h4>
    <p>Четверть круга в единичном квадрате: $\\mathbf{\\pi \\approx 4 \\frac{N_{\\text{inside}}}{N}}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Выбрать $M < \\max f(x)$, «срезав» верхушку графика и систематически занизив оценку.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: что произойдет при завышенном значении $M$ ($M = 100$ вместо $1$)?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Оценка останется несмещенной, но дисперсия резко возрастет, так как подавляющее большинство точек промахнется мимо кривой.
    </div>
</details>
"""
                }
            },
            {
                "id": "monte-carlo-sample-mean",
                "title": {
                    "hy": "Պատահական ընտրանքի միջինով գնահատում և O(1/√N) սխալը",
                    "en": "Sample Mean Estimator & O(1/√N) Error Convergence",
                    "ru": "Оценка по выборочному среднему и сходимость O(1/√N)"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Երկրորդ և գիտական հաշվարկներում շատ ավելի հաճախ կիրառվող եղանակը <strong>պատահական ընտրանքի միջինով (Sample Mean)</strong> գնահատումն է։ Այն չի պահանջում ֆունկցիայի մաքսիմումի որոնում և հեշտությամբ ինտեգրում է նաև նշանափոխ ֆունկցիաները։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-calculator"></i> Ընտրանքային միջինի մաթեմատիկական հիմնավորումը</h4>
    <p>Դիցուք $X$-ը $[a, b]$ հատվածում հավասարաչափ բաշխված պատահական մեծություն է ($X \\sim U(a, b)$)։ Նրա հավանականության խտությունը հաստատուն է՝ $p(x) = \\frac{1}{b - a}$։</p>
    <p>$f(X)$ մեծության մաթեմատիկական սպասումն է․</p>
    $$\\mathbb{E}[f(X)] = \\int_a^b f(x) p(x) dx = \\frac{1}{b - a} \\int_a^b f(x) dx$$
    <p>Բազմապատկելով $(b - a)$-ով՝ ստանում ենք ինտեգրալի տեսական արտահայտությունը․</p>
    $$I = \\int_a^b f(x)dx = (b - a) \\cdot \\mathbb{E}[f(X)]$$
    <p>Ըստ <strong>Մեծ թվերի օրենքի (LLN)</strong>՝ $N$ անկախ փորձերի դեպքում ընտրանքային միջինը ձգտում է մաթեմատիկական սպասմանը։ Ուստի Մոնտե Կառլոյի ընտրանքային միջինի գնահատականն է՝</p>
    $$I_N = \\frac{b - a}{N} \\sum_{i=1}^N f(X_i)$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-chart-line"></i> Սխալի $O(1/\\sqrt{N})$ վարքը և Կենտրոնական սահմանային թեորեմը</h4>
    <p>Եթե ֆունկցիան ունի վերջավոր դիսպերսիա ($\\sigma^2 = \\text{Var}(f(X)) < \\infty$), ապա ըստ Կենտրոնական սահմանային թեորեմի (CLT)՝ գնահատականի ստանդարտ սխալը (Standard Error) հավասար է․</p>
    $$\\text{SE} = \\frac{(b - a) \\sigma}{\\sqrt{N}} = O\\left(\\frac{1}{\\sqrt{N}}\\right)$$
    <p><strong>ՀԱՏՈՒԿ ՊԱՐԶԱԲԱՆՈՒՄ․</strong></p>
    <ul class="theory-list">
        <li>Ավելի շատ փորձերը ($N$-ի մեծացումը) <strong>ընդհանուր առմամբ բարելավում են</strong> գնահատականը (նեղացնում են վստահելիության միջակայքը)։</li>
        <li>Սակայն <strong>յուրաքանչյուր հաջորդ առանձին քայլ պարտադիր չէ, որ ավելի մոտ լինի</strong> ճշգրիտ արժեքին, քանի որ պատահական տատանումները կարող են տվյալ կետում ժամանակավորապես հեռացնել միջինը։</li>
    </ul>
</div>

<div class="theory-callout" style="border-left-color: #a855f7;">
    <h4><i class="fas fa-balance-scale"></i> Համեմատություն սովորական թվային ինտեգրման հետ</h4>
    <p><strong>Չի կարելի պնդել, թե Մոնտե Կառլոն միշտ ավելի արագ կամ ավելի ճշգրիտ է․</strong></p>
    <ul>
        <li><strong>Մեկ փոփոխականի դեպքում․</strong> Բավական հարթ ֆունկցիայի համար Սիմպսոնի մեթոդի սխալը $O(N^{-4})$ է (սահմանափակ չորրորդ ածանցյալի դեպքում), իսկ անկախ Մոնտե Կառլոյի ստանդարտ սխալը՝ $O(N^{-1/2})$ (վերջավոր դիսպերսիայի դեպքում)։ Հաճախ Սիմպսոնն ավելի արդյունավետ է, բայց կոնկրետ ճշգրտությունը կախված է ֆունկցիայից և սխալի հաստատուններից։</li>
        <li><strong>Բազմաչափ տարածություններում․</strong> Յուրաքանչյուր առանցքով $m$ հանգույց ունեցող ցանցը պահանջում է $m^d$ կետ։ Մոնտե Կառլոյի $N^{-1/2}$ աստիճանը չի փոխվում չափայնության հետ, սակայն դիսպերսիան, տիրույթի ծավալը և մեկ փորձի արժեքը կարող են աճել $d$-ի հետ։ Մեթոդի ընտրությունը չի որոշվում միայն չափայնությամբ․ համընդհանուր «$d\ge5$» շեմ չկա։</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Բարդ ֆունկցիայի ինտեգրում</h4>
    <p><strong>Խնդիր․</strong> Գնահատել $I = \\int_0^1 \\frac{\\sin(10x)}{1 + x^2} dx$ ինտեգրալը, որտեղ նախնական ֆունկցիան բարդ է։</p>
    <p>Ընտրում ենք $N = 10,000$ պատահական թվեր $X_i \\sim U(0, 1)$ և հաշվում ընտրանքային միջինը․</p>
    $$I_N = \\frac{1 - 0}{10000} \\sum_{i=1}^{10000} \\frac{\\sin(10 X_i)}{1 + X_i^2} \\approx \\mathbf{0.1485}$$
    <p><em>Հուսալի հղումային թվային արժեքը․</em> $\approx 0.14658$ (բարձր ճշգրտության կվադրատուրայով՝ $0.14658077...$, քանի որ պարզ էլեմենտար նախնական գոյություն չունի)։ Բացարձակ սխալը տվյալ փորձում կազմում է մոտ $0.0019$։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Կարծել, թե ճշգրտությունը 10 անգամ մեծացնելու համար բավական է $N$-ը մեծացնել 10 անգամ։</p>
    <p><strong>Կանոն․</strong> Քանի որ սխալը նվազում է $1/\\sqrt{N}$ օրենքով, սխալը 10 անգամ փոքրացնելու համար կետերի քանակը պետք է մեծացնել <strong>$10^2 = 100$ անգամ</strong>։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչո՞ւ է Մոնտե Կառլոյի մեթոդը օգտակար ֆինանսական մաթեմատիկայում և քվանտային ֆիզիկայում։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Այդ ոլորտներում հաճախ հանդիպում են բազմաթիվ փոփոխականներով ինտեգրալներ, և լրիվ ցանցը կարող է չափազանց մեծ լինել։ Անկախ ընտրանքի և վերջավոր դիսպերսիայի դեպքում Մոնտե Կառլոյի ստանդարտ սխալը նվազում է $O(N^{-1/2})$ կարգով։ Գործնական արդյունավետությունը կախված է նաև դիսպերսիայից ու մեկ փորձի հաշվարկման արժեքից։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
A widely used alternative in scientific computing is the <strong>Sample Mean</strong> estimator. It handles sign-changing functions without searching for an upper bound.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-calculator"></i> Mathematical Foundation of the Sample Mean</h4>
    <p>Let $X \\sim U(a, b)$ with constant probability density $p(x) = \\frac{1}{b - a}$. The expected value is:</p>
    $$\\mathbb{E}[f(X)] = \\int_a^b f(x) p(x) dx = \\frac{1}{b - a} \\int_a^b f(x) dx$$
    $$I = \\int_a^b f(x)dx = (b - a) \\cdot \\mathbb{E}[f(X)]$$
    <p>By the Law of Large Numbers (LLN), sample average converges almost surely to expectation:</p>
    $$I_N = \\frac{b - a}{N} \\sum_{i=1}^N f(X_i)$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-chart-line"></i> Error Convergence $O(1/\\sqrt{N})$ & Central Limit Theorem</h4>
    <p>If $\\sigma^2 = \\text{Var}(f(X)) < \\infty$, the Central Limit Theorem dictates that the standard error is:</p>
    $$\\text{SE} = \\frac{(b - a)\\sigma}{\\sqrt{N}} = O\\left(\\frac{1}{\\sqrt{N}}\\right)$$
    <p><strong>CRITICAL CLARIFICATION:</strong></p>
    <ul>
        <li>Increasing sample size $N$ <strong>generally improves</strong> the expected precision and narrows confidence intervals.</li>
        <li>However, any individual subsequent sample point is <strong>not guaranteed</strong> to be closer to the exact analytical value due to intrinsic stochastic fluctuation.</li>
    </ul>
</div>

<div class="theory-callout" style="border-left-color: #a855f7;">
    <h4><i class="fas fa-balance-scale"></i> Comparison with Deterministic Numerical Quadrature</h4>
    <p><strong>Never claim Monte Carlo is unconditionally faster or more accurate:</strong></p>
    <ul>
        <li><strong>In one dimension:</strong> For sufficiently smooth functions with bounded fourth derivative, Simpson error is $O(N^{-4})$; independent Monte Carlo has standard error $O(N^{-1/2})$ when variance is finite. Simpson is often more efficient, but actual accuracy depends on the function and error constants.</li>
        <li><strong>In higher dimensions:</strong> A grid with $m$ nodes per axis requires $m^d$ points. The Monte Carlo exponent $N^{-1/2}$ does not change with dimension, but variance, domain volume, and cost per sample may grow with $d$. There is no universal dimension threshold such as $d\ge5$ at which one method always wins.</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Complex Function Integration</h4>
    <p>Estimating $I = \\int_0^1 \\frac{\\sin(10x)}{1 + x^2}dx$. With $N = 10,000$ points $X_i \\sim U(0, 1)$, sample mean yields $I_N \\approx 0.1485$ (High-precision quadrature reference: $\\approx 0.14658077...$, as no elementary closed form exists; error: $\\approx 0.0019$).</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Assuming that decreasing error tenfold requires $10\\times$ more points. Because error decays as $1/\\sqrt{N}$, reducing error tenfold requires <strong>$100\\times$ more samples</strong> ($10^2 = 100$).</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Why is Monte Carlo useful in financial engineering and quantum physics?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> These fields often involve many-variable integrals for which a full grid is too expensive. With independent samples and finite variance, Monte Carlo standard error decreases at rate $O(N^{-1/2})$. Practical efficiency also depends on variance and cost per sample.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Другой распространённый подход в научных расчётах — <strong>оценка по выборочному среднему (Sample Mean)</strong>. Она не требует поиска максимума функции и применима к знакопеременным функциям.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-calculator"></i> Математическое обоснование выборочного среднего</h4>
    <p>Пусть $X \\sim U(a, b)$ с плотностью $p(x) = \\frac{1}{b - a}$. Математическое ожидание:</p>
    $$\\mathbb{E}[f(X)] = \\frac{1}{b - a} \\int_a^b f(x)dx \\implies I = (b - a) \\mathbb{E}[f(X)]$$
    <p>По Закону больших чисел выборочное среднее сходится к мат. ожиданию:</p>
    $$I_N = \\frac{b - a}{N} \\sum_{i=1}^N f(X_i)$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-chart-line"></i> Сходимость $O(1/\\sqrt{N})$ и ЦПТ</h4>
    <p>По Центральной предельной теореме стандартная ошибка оценки равна:</p>
    $$\\text{SE} = \\frac{(b - a)\\sigma}{\\sqrt{N}} = O\\left(\\frac{1}{\\sqrt{N}}\\right)$$
    <p><strong>ВАЖНОЕ РАЗЪЯСНЕНИЕ:</strong></p>
    <ul>
        <li>Увеличение числа испытаний $N$ <strong>в среднем улучшает</strong> оценку.</li>
        <li>Однако каждое следующее конкретное испытание <strong>не обязательно ближе</strong> к точному значению из-за стохастических флуктуаций.</li>
    </ul>
</div>

<div class="theory-callout" style="border-left-color: #a855f7;">
    <h4><i class="fas fa-balance-scale"></i> Сравнение с классическим численным интегрированием</h4>
    <p><strong>Нельзя утверждать, что Монте-Карло всегда быстрее или точнее:</strong></p>
    <ul>
        <li><strong>Для одной переменной:</strong> У достаточно гладкой функции с ограниченной четвёртой производной погрешность Симпсона — $O(N^{-4})$, а стандартная ошибка независимого Монте-Карло при конечной дисперсии — $O(N^{-1/2})$. Симпсон часто эффективнее, но точность зависит от функции и констант в оценках погрешности.</li>
        <li><strong>Для многих переменных:</strong> Сетка с $m$ узлами по каждой оси требует $m^d$ точек. Степень $N^{-1/2}$ у Монте-Карло не меняется с размерностью, однако дисперсия, объём области и стоимость одного испытания могут расти с $d$. Универсального порога вроде $d\ge5$, после которого один метод всегда лучше, нет.</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример: сложный интеграл</h4>
    <p>$I = \\int_0^1 \\frac{\\sin(10x)}{1 + x^2}dx$. При $N = 10,000$ получаем $I_N \\approx 0.1485$ (Опорное значение высокоточной квадратуры: $\\approx 0.14658077...$, так как замкнутая элементарная первообразная отсутствует; погрешность: $\\approx 0.0019$).</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Думать, что для снижения погрешности в 10 раз достаточно в 10 раз увеличить $N$. Из-за $1/\\sqrt{N}$ требуется увеличить $N$ в <strong>$100$ раз</strong>.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: почему Монте-Карло полезен в финансовой математике и квантовой физике?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> В этих областях часто встречаются интегралы многих переменных, для которых полная сетка слишком велика. При независимых выборках и конечной дисперсии стандартная ошибка Монте-Карло убывает как $O(N^{-1/2})$. Эффективность зависит также от дисперсии и стоимости одного испытания.
    </div>
</details>
"""
                }
            }
        ]
    }
    chapter["subsections"].append(get_monte_carlo_uncertainty_section())
    return chapter
