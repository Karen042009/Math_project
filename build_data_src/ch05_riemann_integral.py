from theory_additions import get_integral_properties_section

# Chapter 5: Մակերեսից դեպի որոշյալ ինտեգրալ (From Area to the Definite Integral)
# Subsections:
# 5.1: area-riemann-sums
# 5.2: definite-vs-indefinite

def get_chapter_5():
    chapter = {
        "title": {
            "hy": "5. Մակերեսից դեպի որոշյալ ինտեգրալ",
            "en": "5. From Area to the Definite Integral",
            "ru": "5. От площади к определенному интегралу"
        },
        "subsections": [
            {
                "id": "area-riemann-sums",
                "title": {
                    "hy": "Ռիմանի գումարները և մակերեսի մոտարկումը ուղղանկյուններով",
                    "en": "Riemann Sums and Rectangular Approximations",
                    "ru": "Суммы Римана и приближение площади прямоугольниками"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ինչպե՞ս գտնել կորագիծ սեղանի մակերեսը, եթե դպրոցական երկրաչափության բոլոր բանաձևերը միայն ուղիղ հատվածներով պատկերների համար են։ Լուծումը հանճարեղ է․ բաժանել տիրույթը բարակ ուղղանկյունների, հաշվել դրանց մակերեսների գումարը և անցնել սահմանին։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-layer-group"></i> Ռիմանի ինտեգրալի կառուցման 6 պարտադիր քայլերը</h4>
    <ol>
        <li><strong>Միջակայքի տրոհում․</strong> $[a, b]$ հատվածը բաժանում ենք $n$ փոքր մասերի․
            $$a = x_0 < x_1 < x_2 < \\dots < x_{n-1} < x_n = b$$
        </li>
        <li><strong>Ուղղանկյունների հավասար լայնությունը․</strong>
            $$\\Delta x = \\frac{b - a}{n}, \\quad x_i = a + i \\cdot \\Delta x$$
        </li>
        <li><strong>Ընտրանքային կետերի բարձրությունները․</strong> Յուրաքանչյուր $[x_{i-1}, x_i]$ ենթահատվածում ընտրում ենք կետ $\\xi_i$ (ձախ ծայրակետ, աջ ծայրակետ կամ միջնակետ) և հաշվում ֆունկցիայի արժեքը՝ $f(\\xi_i)$։</li>
        <li><strong>Ուղղանկյունների մակերեսների գումարը (Ռիմանի գումար)․</strong>
            $$S_n = \\sum_{i=1}^n f(\\xi_i) \\Delta x = f(\\xi_1)\\Delta x + f(\\xi_2)\\Delta x + \\dots + f(\\xi_n)\\Delta x$$
        </li>
        <li><strong>Տրոհման մանրացում․</strong> Մեծացնում ենք ուղղանկյունների քանակը՝ $n \\to \\infty$, որի հետևանքով լայնությունը ձգտում է զրոյի՝ $\\Delta x \\to 0$։</li>
        <li><strong>Սահմանային անցում դեպի որոշյալ ինտեգրալ․</strong>
            $$\\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(\\xi_i) \\Delta x$$
        </li>
    </ol>
</div>

<div class="theory-svg-container" style="text-align: center; margin: 20px 0;">
    <svg viewBox="0 0 500 200" style="max-width: 100%; height: auto; background: var(--bg-card); border-radius: 10px; border: 1px solid var(--glass-border);">
        <!-- Axes -->
        <line x1="40" y1="170" x2="460" y2="170" stroke="var(--text-muted)" stroke-width="1.5"/>
        <line x1="60" y1="190" x2="60" y2="20" stroke="var(--text-muted)" stroke-width="1.5"/>
        
        <!-- Rectangles for f(x)=x^2 on [0, 4] scaled -->
        <!-- x in [60, 420], delta x = 90, 4 rectangles -->
        <rect x="60" y="165" width="90" height="5" fill="rgba(56,189,248,0.3)" stroke="#38bdf8"/>
        <rect x="150" y="150" width="90" height="20" fill="rgba(56,189,248,0.3)" stroke="#38bdf8"/>
        <rect x="240" y="115" width="90" height="55" fill="rgba(56,189,248,0.3)" stroke="#38bdf8"/>
        <rect x="330" y="55" width="90" height="115" fill="rgba(56,189,248,0.3)" stroke="#38bdf8"/>
        
        <!-- Smooth curve y = f(x) -->
        <path d="M 60 170 Q 240 160 420 30" fill="none" stroke="var(--neon-purple)" stroke-width="3"/>
        
        <!-- Labels -->
        <text x="60" y="185" fill="var(--text-primary)" font-size="11" text-anchor="middle">a = x₀</text>
        <text x="150" y="185" fill="var(--text-muted)" font-size="10" text-anchor="middle">x₁</text>
        <text x="240" y="185" fill="var(--text-muted)" font-size="10" text-anchor="middle">x₂</text>
        <text x="330" y="185" fill="var(--text-muted)" font-size="10" text-anchor="middle">x₃</text>
        <text x="420" y="185" fill="var(--text-primary)" font-size="11" text-anchor="middle">b = x₄</text>
        <text x="105" y="160" fill="var(--accent-gold)" font-size="9" text-anchor="middle">Δx</text>
        
        <text x="250" y="25" fill="var(--neon-purple)" font-size="11" font-weight="bold" text-anchor="middle">Ռիմանի ուղղանկյունների գումար․ Σ f(ξᵢ)Δx</text>
    </svg>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-info-circle"></i> Ինտեգրալի նշանակումների բացատրությունը</h4>
    <ul>
        <li>$a$-ն կոչվում է <strong>ստորին սահման</strong> (Lower limit)։</li>
        <li>$b$-ն կոչվում է <strong>վերին սահման</strong> (Upper limit)։</li>
        <li>$f(x)$-ը կոչվում է <strong>ինտեգրանդ</strong> (Ֆունկցիան, որն ինտեգրվում է)։</li>
        <li>$dx$-ը Լայբնիցի անվերջ փոքր դիֆերենցիալն է, որը համապատասխանում է ուղղանկյունների $\\Delta x$ անվերջ փոքր լայնությանը։</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Մակերեսի մոտարկում $n=4$ ուղղանկյուններով</h4>
    <p>Գտնել $f(x) = x^2$ կորի տակ ընկած մակերեսը $[0, 1]$ հատվածում $n = 4$ հավասար մասերի բաժանմամբ․</p>
    <p>Լայնությունը՝ $\\Delta x = \\frac{1 - 0}{4} = 0.25$։ Կետերն են՝ $x_0=0, x_1=0.25, x_2=0.5, x_3=0.75, x_4=1$։</p>
    <p><strong>Աջ ծայրակետերի Ռիմանի գումար (Right Riemann Sum)․</strong></p>
    $$S_4 = [f(0.25) + f(0.5) + f(0.75) + f(1)] \\cdot 0.25$$
    $$S_4 = [0.0625 + 0.25 + 0.5625 + 1] \\cdot 0.25 = 1.875 \\cdot 0.25 = \\mathbf{0.46875}$$
    <p><strong>Ձախ ծայրակետերի Ռիմանի գումար (Left Riemann Sum)․</strong></p>
    $$s_4 = [f(0) + f(0.25) + f(0.5) + f(0.75)] \\cdot 0.25 = 0.875 \\cdot 0.25 = \\mathbf{0.21875}$$
    <p><em>Ճշգրիտ ինտեգրալը․</em> $\\int_0^1 x^2 dx = \\frac{1}{3} \\approx 0.3333$։ Ինչպես տեսնում ենք, ճշգրիտ արժեքը գտնվում է ձախ և աջ գումարների միջև՝ $0.21875 < 0.3333 < 0.46875$։ Երբ $n \\to \\infty$, երկու գումարներն էլ ձգտում են ճիշտ $1/3$-ի։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Կարծել, թե $dx$-ը ինտեգրալում պարզապես զարդարանք է կամ փակագիծ։</p>
    <p><strong>Ճշմարտություն․</strong> $dx$-ը ունի ֆիզիկական չափայնություն և խիստ մաթեմատիկական իմաստ․ դա ուղղանկյունների լայնությունն է։ Եթե $f(x)$-ը չափվում է մետր/վայրկյանով, իսկ $x$-ը՝ վայրկյանով, ապա $f(x)dx$ արտադրյալը չափվում է մետրերով։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ տեղի կունենա Ռիմանի գումարի սխալի հետ, եթե ուղղանկյունների թիվը $n$-ը մեծացնենք 10 անգամ։</summary>
    <div class="selftest-answer">
    <strong>Պատասխան․</strong> Լայնությունը $\Delta x$ կփոքրանա 10 անգամ։ Սահմանափակ առաջին ածանցյալ ունեցող ֆունկցիայի համար ձախ և աջ գումարների սխալի վերին գնահատականը $O(1/n)$ է։ Այս դասի հարթ օրինակներում սխալը հաճախ նվազում է մոտ 10 անգամ, բայց դա բոլոր ինտեգրելի ֆունկցիաների համար երաշխիք չէ։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
How can we determine the exact area under a curved graph when standard geometry provides formulas only for straight polygons? The solution is ingenious: partition the domain into narrow vertical strips, approximate each strip with a rectangle, and take the limit as the strips become infinitely narrow.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-layer-group"></i> Six Rigorous Steps of Riemann Integration</h4>
    <ol>
        <li><strong>Partition of interval $[a, b]$:</strong> $a = x_0 < x_1 < \dots < x_n = b$.</li>
        <li><strong>Uniform subinterval width:</strong> $\\Delta x = \\frac{b - a}{n}, \\, x_i = a + i \\Delta x$.</li>
        <li><strong>Sample point evaluation:</strong> Select sample points $\\xi_i \\in [x_{i-1}, x_i]$ and evaluate heights $f(\\xi_i)$.</li>
        <li><strong>Riemann sum:</strong> $S_n = \\sum_{i=1}^n f(\\xi_i) \\Delta x$.</li>
        <li><strong>Refinement:</strong> Let $n \\to \\infty \\iff \\Delta x \\to 0$.</li>
        <li><strong>Limit transition to the definite integral:</strong>
            $$\\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(\\xi_i) \\Delta x$$
        </li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Area under $f(x)=x^2$ with $n=4$</h4>
    <p>Interval $[0, 1]$ with $\\Delta x = 0.25$. Points: $0, 0.25, 0.5, 0.75, 1.0$.</p>
    <ul>
        <li>Left Riemann sum: $s_4 = [0 + 0.0625 + 0.25 + 0.5625](0.25) = \\mathbf{0.21875}$</li>
        <li>Right Riemann sum: $S_4 = [0.0625 + 0.25 + 0.5625 + 1.0](0.25) = \\mathbf{0.46875}$</li>
        <li>Exact integral: $\\int_0^1 x^2 dx = 1/3 \\approx \\mathbf{0.33333}$.</li>
    </ul>
    <p>Notice that $s_4 < 1/3 < S_4$. As $n \\to \\infty$, both bounds squeeze onto $1/3$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Treating $dx$ as merely cosmetic punctuation.</p>
    <p><strong>Reality:</strong> $dx$ represents the infinitesimal width $\\Delta x$ of each rectangular slice, carrying physical units (e.g., seconds in $\\int v(t)dt$) necessary for dimensional consistency.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What happens to the Riemann approximation error when $n$ is increased tenfold?</summary>
    <div class="selftest-answer">
    <strong>Answer:</strong> The width $\Delta x$ decreases tenfold. For functions with bounded first derivative, left and right sum error bounds are $O(1/n)$. In smooth examples of this kind, errors often decrease by roughly tenfold; this is not a guarantee for every integrable function.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Как найти точную площадь под криволинейным графиком? Метод состоит в разбиении области на тонкие вертикальные полоски, аппроксимации их прямоугольниками и переходе к пределу.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-layer-group"></i> 6 шагов построения интеграла Римана</h4>
    <ol>
        <li><strong>Разбиение $[a, b]$:</strong> $a = x_0 < x_1 < \dots < x_n = b$.</li>
        <li><strong>Шаг сетки:</strong> $\\Delta x = \\frac{b - a}{n}, \\, x_i = a + i \\Delta x$.</li>
        <li><strong>Выбор точек:</strong> Точки $\\xi_i \\in [x_{i-1}, x_i]$ задают высоты $f(\\xi_i)$.</li>
        <li><strong>Интегральная сумма Римана:</strong> $S_n = \\sum_{i=1}^n f(\\xi_i) \\Delta x$.</li>
        <li><strong>Измельчение:</strong> $n \\to \\infty \\iff \\Delta x \\to 0$.</li>
        <li><strong>Предельный переход:</strong>
            $$\\int_a^b f(x)dx = \\lim_{n \\to \\infty} \\sum_{i=1}^n f(\\xi_i) \\Delta x$$
        </li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: $f(x)=x^2$ при $n=4$</h4>
    <p>Отрезок $[0, 1]$, шаг $\\Delta x = 0.25$:</p>
    <ul>
        <li>Левая сумма Римана: $s_4 = 0.21875$.</li>
        <li>Правая сумма Римана: $S_4 = 0.46875$.</li>
        <li>Точный интеграл: $\\int_0^1 x^2 dx = 1/3 \\approx 0.33333$.</li>
    </ul>
    <p>Точное значение зажато между суммами: $0.21875 < 0.33333 < 0.46875$. При $n \\to \\infty$ обе суммы сходятся к $1/3$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Воспринимать $dx$ как пустую формальность.</p>
    <p><strong>Факт:</strong> $dx$ — это бесконечно малая ширина прямоугольника, определяющая физическую размерность площади.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: как изменится погрешность суммы Римана при 10-кратном увеличении $n$?</summary>
    <div class="selftest-answer">
    <strong>Ответ:</strong> Ширина $\Delta x$ уменьшится в 10 раз. При ограниченной первой производной верхние оценки погрешности левых и правых сумм имеют порядок $O(1/n)$. В таких гладких примерах ошибка часто уменьшается примерно в 10 раз, но для любой интегрируемой функции это не гарантируется.
    </div>
</details>
"""
                }
            },
            {
                "id": "definite-vs-indefinite",
                "title": {
                    "hy": "Որոշյալ ինտեգրալի սահմանումը, նշանով և երկրաչափական մակերեսներ",
                    "en": "Definite Integral, Signed vs Geometric Area",
                    "ru": "Определенный интеграл: знакопеременная и геометрическая площади"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Շատ սովորողներ շփոթում են անորոշ և որոշյալ ինտեգրալները, ինչպես նաև որոշյալ ինտեգրալի թվային արժեքը երկրաչափական մակերեսի հետ։ Տանք դրանց խիստ և հստակ տարբերակումը։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-balance-scale"></i> Անորոշ vs Որոշյալ ինտեգրալ</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Հատկանիշ</th><th>Անորոշ ինտեգրալ $\\int f(x)dx$</th><th>Որոշյալ ինտեգրալ $\\int_a^b f(x)dx$</th></tr>
        <tr><td><strong>Ի՞նչ է իրենից ներկայացնում</strong></td><td>Ֆունկցիաների անվերջ ընտանիք ($F(x) + C$)</td><td>Կոնկրետ իրական <strong>թիվ</strong></td></tr>
        <tr><td><strong>Սահմաններ</strong></td><td>Սահմաններ չկան</td><td>Ունի ստորին ($a$) և վերին ($b$) սահմաններ</td></tr>
        <tr><td><strong>Հաստատուն $+C$</strong></td><td>Պարտադիր է</td><td>Բացակայում է (կրճատվում է $F(b)-F(a)$-ում)</td></tr>
    </table>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-plus-minus"></i> Նշանով ինտեգրալ vs Երկրաչափական մակերես</h4>
    <p>Եթե ֆունկցիան ընդունում է ինչպես դրական, այնպես էլ բացասական արժեքներ․</p>
    <ul>
        <li><strong>Որոշյալ ինտեգրալ (նշանով գումար)․</strong> $x$ առանցքից վերև ընկած մակերեսները հաշվվում են «$+$» նշանով, իսկ առանցքից ներքև ընկածները՝ «$-$» նշանով։
            $$\\int_a^b f(x)dx = S_{\\text{վերև}} - S_{\\text{ներքև}}$$
        </li>
        <li><strong>Երկրաչափական մակերես (միշտ $\\ge 0$)․</strong> Պահանջում է ամբողջ տիրույթի բացարձակ արժեքը՝
            $$A = \\int_a^b |f(x)|dx = S_{\\text{վերև}} + S_{\\text{ներքև}}$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ $\\sin x$ ֆունկցիան $[0, 2\\pi]$ հատվածում</h4>
    <p><strong>1. Որոշյալ ինտեգրալ (նշանով արժեք)․</strong></p>
    $$\\int_0^{2\\pi} \\sin x dx = [-\\cos x]_0^{2\\pi} = (-\\cos(2\\pi)) - (-\\cos(0)) = -1 - (-1) = \\mathbf{0}$$
    <p>Ինչո՞ւ 0․ որովհետև $[0, \\pi]$ դրական ալիքի մակերեսը ($+2$) և $[\\pi, 2\\pi]$ բացասական ալիքի մակերեսը ($-2$) լրիվ համակշռում են միմյանց ($2 - 2 = 0$)։</p>
    <p><strong>2. Իրական երկրաչափական մակերես․</strong></p>
    $$A = \\int_0^{2\\pi} |\\sin x| dx = \\int_0^\\pi \\sin x dx + \\int_\\pi^{2\\pi} (-\\sin x) dx = 2 + 2 = \\mathbf{4}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Հաշվել մակերեսը նշանափոխ ֆունկցիայի համար առանց մոդուլի կամ առանց զրոյական կետերում միջակայքը բաժանելու, ստանալով 0 կամ բացասական մակերես։</p>
    <p><strong>Կանոն․</strong> Երկրաչափական մակերեսը չի կարող լինել բացասական։ Եթե գրաֆիկը հատում է $x$ առանցքը, հատվածը պետք է բաժանել մասերի՝ յուրաքանչյուրում ինտեգրելով $|f(x)|$-ը։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչի՞ է հավասար $y = x^3$ ֆունկցիայի և $x$ առանցքի միջև ընկած երկրաչափական մակերեսը $[-1, 1]$ հատվածում։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Որոշյալ ինտեգրալը $\\int_{-1}^1 x^3 dx = 0$ է (կենտ ֆունկցիա)։ Սակայն երկրաչափական մակերեսն է՝<br>
        $A = \\int_{-1}^0 (-x^3)dx + \\int_0^1 x^3 dx = \\left[-\\frac{x^4}{4}\\right]_{-1}^0 + \\left[\\frac{x^4}{4}\\right]_0^1 = \\frac{1}{4} + \\frac{1}{4} = \\mathbf{0.5}$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Learners often confuse the indefinite integral with the definite integral, or mistake the algebraic net signed value of an integral for total geometric area. Here we establish absolute mathematical clarity.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-balance-scale"></i> Indefinite vs Definite Integral</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Attribute</th><th>Indefinite Integral $\\int f(x)dx$</th><th>Definite Integral $\\int_a^b f(x)dx$</th></tr>
        <tr><td><strong>Entity</strong></td><td>Infinite family of functions ($F(x)+C$)</td><td>A single real <strong>number</strong></td></tr>
        <tr><td><strong>Limits</strong></td><td>None</td><td>Lower bound $a$, upper bound $b$</td></tr>
        <tr><td><strong>Constant $+C$</strong></td><td>Mandatory</td><td>Absent (cancels out in $F(b)-F(a)$)</td></tr>
    </table>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-plus-minus"></i> Signed Integral vs Total Geometric Area</h4>
    <ul>
        <li><strong>Definite Integral (Net Signed Area):</strong> Areas above the $x$-axis count positively; areas below count negatively.
            $$\\int_a^b f(x)dx = S_{\\text{above}} - S_{\\text{below}}$$
        </li>
        <li><strong>Geometric Area (Always $\\ge 0$):</strong> Integrates the absolute value:
            $$A = \\int_a^b |f(x)|dx = S_{\\text{above}} + S_{\\text{below}}$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: $\\sin x$ on $[0, 2\\pi]$</h4>
    <p>1. Net Definite Integral: $\\int_0^{2\\pi}\\sin x dx = [-\\cos x]_0^{2\\pi} = -1 - (-1) = \\mathbf{0}$.</p>
    <p>2. True Geometric Area: $A = \\int_0^\\pi \\sin x dx + \\int_\\pi^{2\\pi}(-\\sin x)dx = 2 + 2 = \\mathbf{4}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Integrating across $x$-intercepts without absolute value and concluding the area is zero or negative.</p>
    <p><strong>Rule:</strong> Geometric area is strictly non-negative. Split the integral at roots where $f(x)=0$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Find total geometric area bounded by $y=x^3$ and the $x$-axis on $[-1, 1]$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> The definite integral $\\int_{-1}^1 x^3 dx = 0$ (odd function symmetry). Total geometric area is $\\int_{-1}^0 (-x^3)dx + \\int_0^1 x^3 dx = 1/4 + 1/4 = \\mathbf{0.5}$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Неопределенный и определенный интегралы часто путают, как и алгебраический знакопеременный интеграл с геометрической площадью.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-balance-scale"></i> Неопределенный vs Определенный интеграл</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Свойство</th><th>Неопределенный $\\int f(x)dx$</th><th>Определенный $\\int_a^b f(x)dx$</th></tr>
        <tr><td><strong>Сущность</strong></td><td>Семейство функций $F(x)+C$</td><td>Действительное <strong>число</strong></td></tr>
        <tr><td><strong>Пределы</strong></td><td>Отсутствуют</td><td>Нижний $a$ и верхний $b$</td></tr>
        <tr><td><strong>Константа $+C$</strong></td><td>Обязательна</td><td>Отсутствует</td></tr>
    </table>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-plus-minus"></i> Алгебраический интеграл vs Геометрическая площадь</h4>
    <ul>
        <li><strong>Определенный интеграл (знакопеременная сумма):</strong> Область выше оси $Ox$ считается со знаком «$+$», ниже — со знаком «$-$»:
            $$\\int_a^b f(x)dx = S_{\\text{верх}} - S_{\\text{низ}}$$
        </li>
        <li><strong>Геометрическая площадь (всегда $\\ge 0$):</strong> Интеграл модуля функции:
            $$A = \\int_a^b |f(x)|dx = S_{\\text{верх}} + S_{\\text{низ}}$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: $\\sin x$ на $[0, 2\\pi]$</h4>
    <p>1. Определенный интеграл: $\\int_0^{2\\pi}\\sin x dx = [-\\cos x]_0^{2\\pi} = 0$.</p>
    <p>2. Геометрическая площадь: $A = \\int_0^\\pi \\sin x dx + \\int_\\pi^{2\\pi}(-\\sin x)dx = 2 + 2 = 4$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Интегрировать знакопеременную функцию без разбиения на интервалы постоянного знака, получая ноль вместо площади.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: какова геометрическая площадь под $y=x^3$ на $[-1, 1]$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Интеграл равен 0 (нечетная функция). Геометрическая площадь равна $\\int_{-1}^0 (-x^3)dx + \\int_0^1 x^3 dx = 0.25 + 0.25 = 0.5$.
    </div>
</details>
"""
                }
            }
        ]
    }
    chapter["subsections"].append(get_integral_properties_section())
    return chapter
