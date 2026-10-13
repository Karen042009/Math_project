# Chapter 8: Ծավալների հաշվում և բանաձևերի ստացում (Volume Calculation and Derivations)
# Subsections:
# 8.1: volume-slicing-disks
# 8.2: volume-cylinder-cone-sphere

def get_chapter_8():
    return {
        "title": {
            "hy": "8. Ծավալների հաշվում և բանաձևերի ստացում",
            "en": "8. Volume Calculation and Geometric Derivations",
            "ru": "8. Вычисление объемов и геометрические выводы"
        },
        "subsections": [
            {
                "id": "volume-slicing-disks",
                "title": {
                    "hy": "Շերտավորման մեթոդ, սկավառակներ և օղակներ",
                    "en": "Slicing Method, Disks and Washers",
                    "ru": "Метод сечений, дисков и шайб"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ինչպես հարթ պատկերի մակերեսը ստացվում է բարակ ուղղանկյունների գումարից, այնպես էլ տարածական մարմնի ծավալը ստացվում է մարմինը բարակ շերտերի (կտրվածքների) բաժանելով և դրանց ծավալները ինտեգրելով։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-layer-group"></i> Շերտավորման մեթոդի հիմնական բանաձևը (Slicing Method)</h4>
    <p>Եթե մարմնի լայնական հատույթի մակերեսը $x$ առանցքին ուղղահայաց հարթությամբ տրված է $A(x)$ ֆունկցիայով, իսկ շերտի հաստությունը $dx$ է, ապա տարրական ծավալն է $dV = A(x) dx$։ Ամբողջ մարմնի ծավալն է՝</p>
    $$V = \\int_a^b A(x) dx$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-compact-disc"></i> Պտտման մարմիններ․ Սկավառակների և Օղակների մեթոդները</h4>
    <p><strong>1. Սկավառակների մեթոդ (Disk Method)․</strong> Երբ $y = R(x)$ կորը պտտվում է $x$ առանցքի շուրջ, յուրաքանչյուր լայնական հատույթ $R(x)$ շառավղով շրջան է ($A(x) = \\pi R(x)^2$)։</p>
    $$V = \\pi \\int_a^b [R(x)]^2 dx$$
    <p><strong>2. Օղակների մեթոդ (Washer Method)․</strong> Եթե պտտվող պատկերը սահմանափակված է արտաքին $R(x)$ և ներքին $r(x)$ շառավիղներով ($R(x) \\ge r(x) \\ge 0$)․</p>
    $$V = \\pi \\int_a^b ([R(x)]^2 - [r(x)]^2) dx$$
    <p><em>Պայմաններ․</em> Պտտման առանցքը $Ox$-ն է, իսկ շառավիղները՝ $R \\ge r \\ge 0$։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Պարաբոլի պտտումից առաջացած մարմին (Պարաբոլոիդ)</h4>
    <p><strong>Խնդիր․</strong> $y = \\sqrt{x}$ կորը $[0, 4]$ հատվածում պտտվում է $x$ առանցքի շուրջ։ Գտնել առաջացած մարմնի ծավալը։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Շառավիղը՝ $R(x) = \\sqrt{x}$։</li>
        <li>Հատույթի մակերեսը՝ $A(x) = \\pi [R(x)]^2 = \\pi (\\sqrt{x})^2 = \\pi x$։</li>
        <li>Ծավալը ստացվում է ինտեգրմամբ․
            $$V = \\pi \\int_0^4 x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\pi \\left( \\frac{16}{2} - 0 \\right) = \\mathbf{8\\pi \\approx 25.133 \\text{ ծավալային միավոր}}$$
        </li>
    </ol>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Օղակների մեթոդում գրել $\\pi \\int (R - r)^2 dx$՝ $\\pi \\int (R^2 - r^2) dx$-ի փոխարեն։</p>
    <p><strong>Կանոն․</strong> Օղակի մակերեսը արտաքին և ներքին շրջանների մակերեսների տարբերությունն է՝ $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$։ Շառավիղների տարբերության քառակուսին ($(R-r)^2$) մաթեմատիկորեն կոպիտ սխալ է։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ տեսք կունենա սկավառակների մեթոդի բանաձևը, եթե կորը պտտվի $y$ առանցքի շուրջ։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Եթե պտտվում է $y$ առանցքի շուրջ, ապա ինտեգրումը կատարվում է ըստ $y$-ի՝ $V = \\pi \\int_c^d [R(y)]^2 dy$, որտեղ $R(y) = x$-ը արտահայտված է $y$-ի միջոցով։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Just as 2D area arises from summing thin rectangular strips, the volume of a 3D solid is computed by slicing the solid into thin slabs and integrating their cross-sectional areas.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-layer-group"></i> Slicing Method Formula</h4>
    <p>If the cross-sectional area perpendicular to the $x$-axis is given by $A(x)$, an infinitesimal slice has volume $dV = A(x)dx$. The total volume is:</p>
    $$V = \\int_a^b A(x) dx$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-compact-disc"></i> Solids of Revolution: Disks and Washers</h4>
    <p><strong>1. Disk Method:</strong> Revolving $y = R(x)$ around the $x$-axis produces circular cross-sections of area $A(x) = \\pi [R(x)]^2$:</p>
    $$V = \\pi \\int_a^b [R(x)]^2 dx$$
    <p><strong>2. Washer Method:</strong> For hollow solids bounded by outer radius $R(x)$ and inner radius $r(x)$ ($R(x) \\ge r(x) \\ge 0$):</p>
    $$V = \\pi \\int_a^b ([R(x)]^2 - [r(x)]^2) dx$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Paraboloid of Revolution</h4>
    <p>Revolve $y = \\sqrt{x}$ on $[0, 4]$ about the $x$-axis:</p>
    $$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\int_0^4 x dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\mathbf{8\\pi \\approx 25.133 \\text{ units}^3}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Writing $\\pi \\int (R - r)^2 dx$ instead of $\\pi \\int (R^2 - r^2) dx$.</p>
    <p><strong>Correction:</strong> Washer area is the difference of circle areas: $\\pi R^2 - \\pi r^2 = \\pi(R^2 - r^2)$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: How does the formula adjust when revolving about the $y$-axis?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Integrate with respect to $y$: $V = \\pi \\int_c^d [R(y)]^2 dy$, where $x = R(y)$ expresses horizontal radius in terms of $y$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Объем трехмерного тела вычисляется путем рассечения его на тонкие слои и интегрирования площади поперечных сечений.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-layer-group"></i> Метод сечений</h4>
    $$V = \\int_a^b A(x) dx$$
    <p>где $A(x)$ — площадь поперечного сечения тела плоскостью, перпендикулярной оси $Ox$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-compact-disc"></i> Тела вращения: методы дисков и шайб</h4>
    <p><strong>Метод дисков:</strong> Вращение $y = R(x)$ вокруг оси $Ox$:</p>
    $$V = \\pi \\int_a^b [R(x)]^2 dx$$
    <p><strong>Метод шайб:</strong> Вращение полой области ($R(x) \\ge r(x) \\ge 0$):</p>
    $$V = \\pi \\int_a^b ([R(x)]^2 - [r(x)]^2) dx$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: параболоид вращения</h4>
    <p>Вращение $y = \\sqrt{x}$ на $[0, 4]$ вокруг оси $Ox$:</p>
    $$V = \\pi \\int_0^4 (\\sqrt{x})^2 dx = \\pi \\left[ \\frac{x^2}{2} \\right]_0^4 = \\mathbf{8\\pi \\approx 25.133\\text{ куб. ед.}}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Интегрировать $(R - r)^2$ вместо $(R^2 - r^2)$. Площадь кольца равна разности площадей кругов: $\\pi(R^2 - r^2)$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: как изменится формула при вращении вокруг оси $Oy$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Интегрирование ведется по переменной $y$: $V = \\pi \\int_c^d [R(y)]^2 dy$.
    </div>
</details>
"""
                }
            },
            {
                "id": "volume-cylinder-cone-sphere",
                "title": {
                    "hy": "Գլանի, կոնի և գնդի ծավալների ստացումը",
                    "en": "Derivation of Volumes: Cylinder, Cone, and Sphere",
                    "ru": "Вывод формул объема: цилиндр, конус и шар"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Դպրոցական դասագրքերում գլանի ($V = \\pi r^2 h$), կոնի ($V = \\frac{1}{3}\\pi r^2 h$) և գնդի ($V = \\frac{4}{3}\\pi R^3$) բանաձևերը հաճախ տրվում են առանց ապացուցման։ Ինտեգրալ հաշիվը թույլ է տալիս ստանալ դրանք բացարձակ երկրաչափական խստությամբ։
</p>

<div class="example-box">
    <h4><i class="fas fa-circle-notch"></i> 1. Գլանի ծավալի ստացումը</h4>
    <p><strong>Երկրաչափական մոդել․</strong> Գլանը ստացվում է $y = r$ հորիզոնական հատվածը $[0, h]$ հատվածում $x$ առանցքի շուրջ պտտելով։</p>
    <p><strong>Հաշվարկ․</strong></p>
    $$V = \\pi \\int_0^h [R(x)]^2 dx = \\pi \\int_0^h r^2 dx = \\pi r^2 [x]_0^h = \\pi r^2 (h - 0) = \\mathbf{\\pi r^2 h}$$
</div>

<div class="example-box">
    <h4><i class="fas fa-play" style="transform: rotate(90deg);"></i> 2. Կոնի ծավալի ստացումը</h4>
    <p><strong>Երկրաչափական մոդել․</strong> $r$ հիմքի շառավղով և $h$ բարձրությամբ կոնը ստացվում է $(0, 0)$ և $(h, r)$ կետերը միացնող ուղղի հատվածը $x$ առանցքի շուրջ պտտելով։</p>
    <p>Ուղղի հավասարումն է՝ $y = \\frac{r}{h} x$։</p>
    <p><strong>Հաշվարկ․</strong></p>
    $$V = \\pi \\int_0^h \\left( \\frac{r}{h} x \\right)^2 dx = \\pi \\frac{r^2}{h^2} \\int_0^h x^2 dx = \\pi \\frac{r^2}{h^2} \\left[ \\frac{x^3}{3} \\right]_0^h = \\pi \\frac{r^2}{h^2} \\left( \\frac{h^3}{3} \\right) = \\mathbf{\\frac{1}{3} \\pi r^2 h}$$
    <p><em>Բացատրություն․</em> $1/3$ գործակիցը բնականաբար առաջանում է $x^2$-ի նախնական ֆունկցիայի $x^3/3$-ի հայտարարից։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-globe"></i> 3. Գնդի ծավալի ստացումը</h4>
    <p><strong>Երկրաչափական մոդել․</strong> $R$ շառավղով գունդը ստացվում է $x^2 + y^2 = R^2$ շրջանագծի վերին կիսաշրջանը ($y = \\sqrt{R^2 - x^2}$) $[-R, R]$ հատվածում $x$ առանցքի շուրջ պտտելով։</p>
    <p><strong>Հաշվարկ․</strong></p>
    $$V = \\pi \\int_{-R}^R (\\sqrt{R^2 - x^2})^2 dx = \\pi \\int_{-R}^R (R^2 - x^2) dx$$
    <p>Քանի որ ֆունկցիան զույգ է, ինտեգրալը կրկնապատկում ենք $[0, R]$-ում․</p>
    $$V = 2\\pi \\int_0^R (R^2 - x^2) dx = 2\\pi \\left[ R^2 x - \\frac{x^3}{3} \\right]_0^R = 2\\pi \\left( R^2(R) - \\frac{R^3}{3} \\right) = 2\\pi \\left( \\frac{2}{3} R^3 \\right) = \\mathbf{\\frac{4}{3} \\pi R^3}$$
    <p>Ստացանք գնդի ծավալի համաշխարհային դասական բանաձևը։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Գնդի ծավալի ինտեգրալում $R^2$-ը համարել փոփոխական և ինտեգրել որպես $R^3/3$։</p>
    <p><strong>Կանոն․</strong> Գնդի շառավիղը ($R$) հաստատուն թիվ է (պարամետր), իսկ ինտեգրման փոփոխականը $x$-ն է։ Հետևաբար $\\int R^2 dx = R^2 x$։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչպե՞ս է գնդի ծավալի ածանցյալն ըստ շառավղի կապված նրա մակերևույթի մակերեսի հետ։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Եթե գնդի ծավալը ($V(R) = \\frac{4}{3}\\pi R^3$) ածանցենք ըստ շառավղի ($R$), կստանանք․<br>
        $V'(R) = \\frac{4}{3}\\pi (3R^2) = 4\\pi R^2$, որը հենց գնդային մակերևույթի (սֆերայի) մակերեսի ճշգրիտ բանաձևն է։ Շառավղի $dR$ աճը ավելացնում է $4\\pi R^2 dR$ ծավալով բարակ գնդային շերտ։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Rather than accepting volume formulas on faith, calculus allows us to derive the cylinder ($V = \\pi r^2 h$), cone ($V = \\frac{1}{3}\\pi r^2 h$), and sphere ($V = \\frac{4}{3}\\pi R^3$) with geometric elegance.
</p>

<div class="example-box">
    <h4><i class="fas fa-circle-notch"></i> 1. Cylinder Volume Derivation</h4>
    <p>Revolve the constant line $y = r$ on $[0, h]$ about the $x$-axis:</p>
    $$V = \\pi \\int_0^h r^2 dx = \\pi r^2 [x]_0^h = \\mathbf{\\pi r^2 h}$$
</div>

<div class="example-box">
    <h4><i class="fas fa-play" style="transform: rotate(90deg);"></i> 2. Cone Volume Derivation</h4>
    <p>Revolve the line segment from $(0, 0)$ to $(h, r)$, equation $y = \\frac{r}{h}x$ on $[0, h]$:</p>
    $$V = \\pi \\int_0^h \\left(\\frac{r}{h}x\\right)^2 dx = \\pi \\frac{r^2}{h^2} \\left[ \\frac{x^3}{3} \\right]_0^h = \\mathbf{\\frac{1}{3} \\pi r^2 h}$$
    <p>The factor $1/3$ emerges directly from the antiderivative $\\int x^2 dx = x^3/3$.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-globe"></i> 3. Sphere Volume Derivation</h4>
    <p>Revolve the upper semicircle $y = \\sqrt{R^2 - x^2}$ on $[-R, R]$ about the $x$-axis:</p>
    $$V = \\pi \\int_{-R}^R (R^2 - x^2)dx = 2\\pi \\int_0^R (R^2 - x^2)dx = 2\\pi \\left[ R^2 x - \\frac{x^3}{3} \\right]_0^R = \\mathbf{\\frac{4}{3} \\pi R^3}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Treating sphere radius $R$ as the integration variable instead of coordinate $x$. Note: $\\int R^2 dx = R^2 x$, since $R$ is constant.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Differentiate the sphere's volume $V(R) = \\frac{4}{3}\\pi R^3$ with respect to radius $R$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> $\\frac{dV}{dR} = 4\\pi R^2$, which is precisely the surface area of the sphere. An infinitesimal increase in radius $dR$ adds a shell of volume $4\\pi R^2 dR$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Интегральное исчисление позволяет строго вывести формулы объемов цилиндра ($V = \\pi r^2 h$), конуса ($V = \\frac{1}{3}\\pi r^2 h$) и шара ($V = \\frac{4}{3}\\pi R^3$).
</p>

<div class="example-box">
    <h4><i class="fas fa-circle-notch"></i> 1. Вывод объема цилиндра</h4>
    <p>Вращение отрезка $y = r$ на $[0, h]$ вокруг оси $Ox$:</p>
    $$V = \\pi \\int_0^h r^2 dx = \\pi r^2 [x]_0^h = \\mathbf{\\pi r^2 h}$$
</div>

<div class="example-box">
    <h4><i class="fas fa-play" style="transform: rotate(90deg);"></i> 2. Вывод объема конуса</h4>
    <p>Вращение прямой $y = \\frac{r}{h}x$ на $[0, h]$ вокруг оси $Ox$:</p>
    $$V = \\pi \\int_0^h \\left(\\frac{r}{h}x\\right)^2 dx = \\pi \\frac{r^2}{h^2} \\left[ \\frac{x^3}{3} \\right]_0^h = \\mathbf{\\frac{1}{3} \\pi r^2 h}$$
</div>

<div class="example-box">
    <h4><i class="fas fa-globe"></i> 3. Вывод объема шара</h4>
    <p>Вращение полуокружности $y = \\sqrt{R^2 - x^2}$ на $[-R, R]$ вокруг оси $Ox$:</p>
    $$V = 2\\pi \\int_0^R (R^2 - x^2)dx = 2\\pi \\left[ R^2 x - \\frac{x^3}{3} \\right]_0^R = \\mathbf{\\frac{4}{3} \\pi R^3}$$
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Интегрировать $R^2$ по $R$ вместо $x$. Радиус $R$ — константа, поэтому $\\int R^2 dx = R^2 x$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: чему равна производная объема шара $V(R)$ по радиусу $R$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> $V'(R) = 4\\pi R^2$, что в точности равно площади поверхности сферы.
    </div>
</details>
"""
                }
            }
        ]
    }
