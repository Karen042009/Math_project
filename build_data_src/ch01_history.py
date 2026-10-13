from theory_diagrams import refine_theory_diagrams
# Chapter 1: Պատմական ներածություն (Historical Introduction)
# Subsections:
# 1.1: history-calculus
# 1.2: history-monte-carlo

def get_chapter_1():
    chapter = {
        "title": {
            "hy": "1. Պատմական ներածություն․ Ինտեգրալի և Մոնտե Կառլոյի ծագումը",
            "en": "1. Historical Introduction: Origins of Calculus & Monte Carlo",
            "ru": "1. Историческое введение: Истоки анализа и метода Монте-Карло"
        },
        "subsections": [
            {
                "id": "history-calculus",
                "title": {
                    "hy": "Անկանոն պատկերների մակերեսներից մինչև Ռիման",
                    "en": "From Irregular Areas to Riemann Integrals",
                    "ru": "От площадей неправильных фигур до интегралов Римана"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ինտեգրալ հաշվի գաղափարը չի ծնվել մեկ ակնթարթում կամ մեկ գիտնականի կողմից։ Այն հազարամյակների ընթացքում առաջացել է բնական, ճարտարագիտական և ֆիզիկական երեք հիմնարար խնդիրներից․
</p>
<ul class="theory-list">
    <li><strong>Անկանոն պատկերների մակերեսների որոշում․</strong> Եթե ուղղանկյան կամ եռանկյան մակերեսը հաշվվում է պարզ բանաձևով, ինչպե՞ս գտնել կորագիծ սահմաններով պատկերների (օրինակ՝ պարաբոլի, շրջանի կամ էլիպսի) ճշգրիտ մակերեսը։</li>
    <li><strong>Մարմինների ծավալների հաշվում․</strong> Ինչպե՞ս գտնել կոնի, գնդի կամ բարդ պտտական մարմնի ծավալը՝ իմանալով միայն նրա լայնական հատույթները։</li>
    <li><strong>Շարժման և կուտակվող մեծությունների ուսումնասիրություն․</strong> Եթե մարմնի արագությունը անընդհատ փոխվում է ժամանակի ընթացքում, ինչպե՞ս գտնել անցած ընդհանուր ճանապարհը կամ կատարված աշխատանքը։</li>
</ul>

<div class="theory-callout">
    <h4><i class="fas fa-landmark"></i> Պատմական զարգացման երեք գլխավոր հանգրվանները</h4>
    <p><strong>1. Արքիմեդեսի սպառման մեթոդը (Մ․թ․ա․ 3-րդ դար)․</strong> Հին Հունաստանում Արքիմեդեսը կիրառեց «սպառման մեթոդը» (Method of Exhaustion)՝ կորագիծ պատկերների մեջ ներգծելով և արտագծելով բազմանկյուններ։ Իր «Պարաբոլի քառակուսացումը» (<em>Quadrature of the Parabola</em>) աշխատությունում նա ապացուցեց, որ պարաբոլական սեգմենտի մակերեսը հավասար է իր հիմքով և գագաթով կառուցված եռանկյան մակերեսի $\\frac{4}{3}$ մասին։</p>
    <p><strong>2. Իսահակ Նյուտոն և Գոթֆրիդ Լայբնից (17-րդ դար)․</strong> 1660-1670-ական թվականներին Նյուտոնը (ֆլյուքսիաների տեսություն, <em>De analysi per aequationes numero terminorum infinitas</em>, 1669) և Լայբնիցը (1675 թ․ ձեռագրեր) միմյանցից անկախ բացահայտեցին հիմնարար կապը ածանցման և ինտեգրման միջև։ Լայբնիցն է ստեղծել այսօրվա նշանակումները՝ $\\int$ նշանը (լատիներեն <em>summa</em> բառի երկարաձիգ S տառից) և անվերջ փոքր $dx$ դիֆերենցիալը։</p>
    <p><strong>3. Բեռնհարդ Ռիման (1854 թ․)․</strong> Իր «Եռանկյունաչափական շարքերով ֆունկցիայի ներկայացման մասին» հաբիլիտացիոն աշխատանքում (<em>Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe</em>) Ռիմանը տվեց որոշյալ ինտեգրալի խիստ մաթեմատիկական սահմանումը՝ հիմնված ինտեգրալային գումարների սահմանի վրա։</p>
</div>

<!-- Responsive diagram inserted by theory_diagrams.py -->

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Պատմական օրինակ․ Արքիմեդեսի պարաբոլի սեգմենտը</h4>
    <p>Դիտարկենք $y = 1 - x^2$ պարաբոլի և $x$ առանցքի միջև ընկած տիրույթը $[-1, 1]$ հատվածում։</p>
    <p>Ներգծված եռանկյան գագաթներն են $(-1, 0)$, $(1, 0)$ և $(0, 1)$։</p>
    <p>Եռանկյան մակերեսը՝ $S_{\\triangle} = \\frac{1}{2} \\times \\text{հիմք} \\times \\text{բարձրություն} = \\frac{1}{2} \\times 2 \\times 1 = 1$։</p>
    <p>Ըստ Արքիմեդեսի թեորեմի՝ պարաբոլի ամբողջ սեգմենտի մակերեսն է՝</p>
    $$S = \\frac{4}{3} S_{\\triangle} = \\frac{4}{3} \\times 1 = \\frac{4}{3} \\approx 1.3333$$
    <p><em>Ստուգում ժամանակակից ինտեգրալով․</em></p>
    $$\\int_{-1}^1 (1 - x^2)dx = \\left[ x - \\frac{x^3}{3} \\right]_{-1}^1 = \\left(1 - \\frac{1}{3}\\right) - \\left(-1 + \\frac{1}{3}\\right) = \\frac{2}{3} - \\left(-\\frac{2}{3}\\right) = \\frac{4}{3}$$
    <p>Արդյունքները համընկնում են բացարձակ ճշգրտությամբ։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված պատմական սխալ</h4>
    <p><strong>Սխալ կարծիք․</strong> «Ինտեգրալը հորինել է Իսահակ Նյուտոնը միայնակ»։</p>
    <p><strong>Իրականություն․</strong> Ինտեգրալ հաշվի ստեղծումը բազմադարյա կոլեկտիվ աշխատանք է։ Երկրաչափական հիմքերը դրել են հույները (Էվդոքսոս, Արքիմեդես), 17-րդ դարում Ֆերման, Կավալիերին և Բարոուն մշակել են անվերջ փոքրերի մեթոդները, իսկ Նյուտոնն ու Լայբնիցը միմյանցից անկախ միավորել են դրանք միասնական համակարգում։ Լայբնիցի սիմվոլիկան այնքան կատարյալ էր, որ այն օգտագործվում է մինչ օրս։</p>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-book"></i> Վստահելի աղբյուրներ և հղումներ</h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
        <li>Archimedes (c. 250 BCE). <em>Quadrature of the Parabola</em>. Translated by T. L. Heath, Cambridge University Press, 1897.</li>
        <li>Newton, Isaac (1711). <em>De analysi per aequationes numero terminorum infinitas</em>. London.</li>
        <li>Leibniz, Gottfried Wilhelm (1686). <em>De Geometria Recondita et Analysi Indivisibilium atque Infinitorum</em>. Acta Eruditorum.</li>
        <li>Riemann, Bernhard (1868). <em>Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe</em>. Abhandlungen der Königlichen Gesellschaft der Wissenschaften zu Göttingen, Band 13.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչո՞ւ Լայբնիցը ընտրեց հենց $\\int$ նշանը որպես ինտեգրալի սիմվոլ։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Լայբնիցը ինտեգրալը դիտարկում էր որպես անվերջ թվով անվերջ փոքր մեծությունների (շերտերի) գումար։ Ուստի նա վերցրեց լատիներեն <em>«Summa»</em> (գումար) բառի առաջին տառը՝ երկարաձիգ <strong>ſ</strong> տառը, որը հետագայում վերածվեց ժամանակակից $\\int$ նշանի։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
The concept of the integral was not discovered overnight by a single individual. Over more than two millennia, it grew out of three fundamental mathematical, physical, and engineering challenges:
</p>
<ul class="theory-list">
    <li><strong>Determining areas of irregular curved figures:</strong> While rectangles and triangles have simple area formulas, how can one determine the exact area under curved boundaries such as parabolas, circles, or ellipses?</li>
    <li><strong>Calculating volumes of three-dimensional solids:</strong> How can one find the volume of a sphere, cone, or irregular solid of revolution knowing only its cross-sectional profiles?</li>
    <li><strong>Analyzing motion and accumulated physical quantities:</strong> When velocity varies continuously over time, how do we determine total distance traveled or work performed by a variable force?</li>
</ul>

<div class="theory-callout">
    <h4><i class="fas fa-landmark"></i> Three Landmark Epochs of Calculus</h4>
    <p><strong>1. Archimedes and the Method of Exhaustion (3rd Century BCE):</strong> In ancient Syracuse, Archimedes perfected the method of exhaustion by inscribing and circumscribing polygons to squeeze the true area of curved figures. In <em>Quadrature of the Parabola</em>, he proved that the area of a parabolic segment equals $\\frac{4}{3}$ of the inscribed triangle.</p>
    <p><strong>2. Isaac Newton & Gottfried Wilhelm Leibniz (17th Century):</strong> In the late 1660s and 1670s, Newton (theory of fluxions, <em>De analysi</em>, 1669) and Leibniz (manuscripts of autumn 1675) independently discovered the profound inverse relationship between differentiation and integration. Leibniz invented the enduring notation: the elongated S ($\\int$ from Latin <em>summa</em>) and the infinitesimal differential $dx$.</p>
    <p><strong>3. Bernhard Riemann (1854):</strong> In his foundational habilitation thesis <em>Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe</em>, Riemann placed the definite integral on a rigorous foundation based on partitions and limits of approximating sums.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Historical Example: Archimedes' Parabolic Segment</h4>
    <p>Consider the region bounded by $y = 1 - x^2$ and the $x$-axis on $[-1, 1]$.</p>
    <p>The vertices of the inscribed triangle are $(-1, 0)$, $(1, 0)$, and $(0, 1)$.</p>
    <p>Triangle area: $S_{\\triangle} = \\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2 \\times 1 = 1$.</p>
    <p>By Archimedes' theorem, the total parabolic area is:</p>
    $$S = \\frac{4}{3} S_{\\triangle} = \\frac{4}{3} \\times 1 = \\frac{4}{3} \\approx 1.3333$$
    <p><em>Modern calculus verification:</em></p>
    $$\\int_{-1}^1 (1 - x^2)dx = \\left[ x - \\frac{x^3}{3} \\right]_{-1}^1 = \\frac{4}{3}$$
    <p>Archimedes' classical geometric deduction perfectly matches modern calculus.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Historical Pitfall</h4>
    <p><strong>Myth:</strong> "Calculus was invented solely by Isaac Newton in isolation."</p>
    <p><strong>Reality:</strong> Calculus emerged through centuries of collaborative progress. Ancient Greeks developed exhaustion; 17th-century pioneers (Fermat, Cavalieri, Barrow) solved tangents and quadratures; Newton and Leibniz synthesized the framework independently; and Leibniz's notation proved so superior that it remains the worldwide standard.</p>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-book"></i> Verified Academic Sources & References</h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
        <li>Archimedes (c. 250 BCE). <em>Quadrature of the Parabola</em>. Translated by T. L. Heath, Cambridge University Press, 1897.</li>
        <li>Newton, Isaac (1711). <em>De analysi per aequationes numero terminorum infinitas</em>. London.</li>
        <li>Leibniz, Gottfried Wilhelm (1686). <em>De Geometria Recondita et Analysi Indivisibilium atque Infinitorum</em>. Acta Eruditorum.</li>
        <li>Riemann, Bernhard (1868). <em>Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe</em>. Göttingen Abhandlungen, Vol. 13.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Why did Leibniz choose the symbol $\\int$ for integration?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Leibniz viewed integration as the summation of infinitely many infinitesimal elements ($f(x)dx$). He chose the elongated letter <strong>ſ</strong> (the long s), representing the Latin word <em>Summa</em> (sum), which evolved into the modern integral sign $\\int$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Идея интегрального исчисления не возникла в один момент и не принадлежит единственному гению. На протяжении более двух тысячелетий она формировалась под влиянием трех практических задач:
</p>
<ul class="theory-list">
    <li><strong>Определение площадей криволинейных фигур:</strong> Если площадь прямоугольника вычисляется тривиально, то как найти точную площадь под криволинейными границами (парабола, окружность, эллипс)?</li>
    <li><strong>Вычисление объемов пространственных тел:</strong> Как определить объем конуса, шара или произвольного тела вращения, зная лишь форму его поперечных сечений?</li>
    <li><strong>Исследование движения и накапливающихся величин:</strong> Если скорость объекта непрерывно меняется во времени, как найти пройденный путь или совершенную переменной силой работу?</li>
</ul>

<div class="theory-callout">
    <h4><i class="fas fa-landmark"></i> Три ключевые вехи развития математического анализа</h4>
    <p><strong>1. Метод исчерпывания Архимеда (III в. до н.э.):</strong> В трактате «Квадратура параболы» Архимед вписывал и описывал многоугольники, доказав, что площадь сегмента параболы равна $\\frac{4}{3}$ площади вписанного треугольника.</p>
    <p><strong>2. Исаак Ньютон и Готфрид Лейбниц (XVII в.):</strong> В 1660–1670-х годах Ньютон («метод флюксий», <em>De analysi</em>, 1669) и Лейбниц (рукописи осени 1675 г.) независимо друг от друга открыли взаимную обратность дифференцирования и интегрирования. Лейбниц ввел символ интеграла $\\int$ (от латинского <em>summa</em>) и дифференциал $dx$.</p>
    <p><strong>3. Бернхард Риман (1854 г.):</strong> В работе <em>Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe</em> Риман сформулировал современное строгое определение определенного интеграла через предел интегральных сумм.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Исторический пример: параболический сегмент Архимеда</h4>
    <p>Рассмотрим область под $y = 1 - x^2$ над осью $Ox$ на отрезке $[-1, 1]$.</p>
    <p>Вписанный треугольник имеет вершины $(-1, 0)$, $(1, 0)$ и $(0, 1)$.</p>
    <p>Площадь треугольника: $S_{\\triangle} = \\frac{1}{2} \\times 2 \\times 1 = 1$.</p>
    <p>По теореме Архимеда площадь сегмента параболы равна:</p>
    $$S = \\frac{4}{3} S_{\\triangle} = \\frac{4}{3} \\times 1 = \\frac{4}{3} \\approx 1.3333$$
    <p><em>Проверка современным интегралом:</em></p>
    $$\\int_{-1}^1 (1 - x^2)dx = \\left[ x - \\frac{x^3}{3} \\right]_{-1}^1 = \\frac{4}{3}$$
    <p>Геометрический результат Архимеда точно совпадает с формулой Ньютона–Лейбница.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Распространенное заблуждение</h4>
    <p><strong>Миф:</strong> «Интеграл изобрел исключительно Исаак Ньютон в одиночку».</p>
    <p><strong>Факт:</strong> Анализ создавался коллективными усилиями: Архимед заложил основы исчерпывания, Ферма, Кавальери и Барроу исследовали бесконечно малые величины, а Ньютон и Лейбниц независимо синтезировали теорию. Символика Лейбница оказалась настолько удачной, что используется во всем мире и поныне.</p>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-book"></i> Достоверные источники и литература</h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
        <li>Archimedes (c. 250 BCE). <em>Quadrature of the Parabola</em>. Translated by T. L. Heath, Cambridge University Press, 1897.</li>
        <li>Newton, Isaac (1711). <em>De analysi per aequationes numero terminorum infinitas</em>. London.</li>
        <li>Leibniz, Gottfried Wilhelm (1686). <em>De Geometria Recondita et Analysi Indivisibilium atque Infinitorum</em>. Acta Eruditorum.</li>
        <li>Riemann, Bernhard (1868). <em>Über die Darstellbarkeit einer Function durch eine trigonometrische Reihe</em>. Göttingen Abhandlungen, Bd. 13.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: почему Лейбниц выбрал знак $\\int$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Лейбниц понимал интеграл как непрерывную сумму бесконечно малых элементов $f(x)dx$. Он взял первую букву латинского слова <em>Summa</em> — удлиненную букву <strong>ſ</strong>, которая со временем превратилась в привычный знак $\\int$.
    </div>
</details>
"""
                }
            },
            {
                "id": "history-monte-carlo",
                "title": {
                    "hy": "Մոնտե Կառլոյի մեթոդի պատմությունը․ Ուլամ, ֆոն Նեյման, Մետրոպոլիս",
                    "en": "History of the Monte Carlo Method: Ulam, von Neumann, Metropolis",
                    "ru": "История метода Монте-Карло: Улам, фон Нейман, Метрополис"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
20-րդ դարի կեսերին, երբ ֆիզիկոսներն ու մաթեմատիկոսները բախվեցին միջուկային ֆիզիկայի բարդագույն բազմաչափ խնդիրներին, դասական մաթեմատիկական անալիզի և թվային ինտեգրման սովորական ալգորիթմները անզոր գտնվեցին։ Այս ճգնաժամը ծնեց նոր հեղափոխական մոտեցում՝ <strong>Մոնտե Կառլոյի մեթոդը</strong>։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-dice"></i> Պասիանսից մինչև ENIAC․ Ստեղծման իրական պատմությունը</h4>
    <p><strong>1. Ստանիսլավ Ուլամի ինտուիտիվ հայտնագործությունը (1946 թ․)․</strong> Լոս Ալամոսի ազգային լաբորատորիայում աշխատող լեհ-ամերիկացի նշանավոր մաթեմատիկոս Ստանիսլավ Ուլամը, ապաքինվելով ծանր վիրահատությունից, ժամանակն անցկացնում էր պասիանս (Canfield solitaire) խաղալով։ Նա ցանկացավ հաշվել խաղը հաղթելու ճշգրիտ հավանականությունը։ Զուտ կոմբինատոր հաշվարկները անտանելի բարդ էին։ Եվ նրա մտքում ծագեց հանճարեղ միտք․ <em>«Ինչո՞ւ չխաղալ 100 անգամ պատահական բաշխմամբ և պարզապես հաշվել հաղթանակների բաժինը»</em>։</p>
    <p><strong>2. Ջոն ֆոն Նեյմանի ալգորիթմական ձևակերպումը․</strong> Ուլամն իր գաղափարը կիսեց 20-րդ դարի խոշորագույն մաթեմատիկոս Ջոն ֆոն Նեյմանի հետ։ Ֆոն Նեյմանը անմիջապես հասկացավ դրա հզորությունը նեյտրոնների դիֆուզիայի և ռադիոակտիվ նյութերում շղթայական ռեակցիաների բազմաչափ ինտեգրալների համար։ Նա մշակեց ալգորիթմները առաջին էլեկտրոնային համակարգչի՝ <strong>ENIAC</strong>-ի համար։</p>
    <p><strong>3. Նիկոլաս Մետրոպոլիսը և անվանումը․</strong> Ծրագրի գաղտնիության նպատակով Նիկոլաս Մետրոպոլիսն առաջարկեց ծածկանուն՝ <strong>«Մոնտե Կառլո»</strong>՝ ի պատիվ Մոնակոյի հռչակավոր խաղատան, որտեղ Ուլամի հորեղբայրը հաճախ էր պարտքեր վերցնում ռուլետկա խաղալու համար։ 1949 թվականին Մետրոպոլիսն ու Ուլամը հրապարակեցին իրենց պատմական աշխատությունը՝ <em>«The Monte Carlo Method»</em>։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Պատմական կիրառություն․ Նեյտրոնների դիֆուզիան</h4>
    <p>Ուրանի կամ պլուտոնիումի միջուկում նեյտրոնը բախվում է ատոմներին, ցրվում կամ առաջացնում տրոհում։ Յուրաքանչյուր նեյտրոնի համար․</p>
    <ol>
        <li>Գեներացվում է պատահական թիվ նրա ազատ վազքի երկարության համար։</li>
        <li>Գեներացվում են պատահական անկյուններ $(\\theta, \\phi)$ շարժման ուղղության համար։</li>
        <li>Գեներացվում է պատահական ելք՝ տրոհո՞ւմ, կլանո՞ւմ, թե՞ արտահոսք մարմնից։</li>
    </ol>
    <p>Մոդելավորելով միլիոնավոր նման նեյտրոնների հետագծեր՝ գիտնականները ստացան կրիտիկական զանգվածի ճշգրիտ արժեքը առանց վտանգավոր փորձերի։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված թյուրիմացություն</h4>
    <p><strong>Սխալ կարծիք․</strong> «Մոնտե Կառլոյի մեթոդը հավասարազոր է պարզ պատահական գուշակության»։</p>
    <p><strong>Իրականություն․</strong> Մեթոդը հիմնված է Մեծ թվերի օրենքի (LLN) և Կենտրոնական սահմանային թեորեմի (CLT) վրա։ Անկախ ընտրանքների ու վերջավոր դիսպերսիայի դեպքում ընտրանքային միջինի գնահատականի ստանդարտ սխալը նվազում է $O(N^{-1/2})$ կարգով։ Սա յուրաքանչյուր փորձի սխալի խիստ վերին սահման չէ։ Աստիճանը չի փոխվում չափայնության հետ, սակայն սխալի հաստատունը կարող է փոխվել։</p>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-book"></i> Հիմնական գիտական հրապարակումներ</h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
        <li>Metropolis, Nicholas; Ulam, Stanislaw (1949). <em>The Monte Carlo Method</em>. Journal of the American Statistical Association, 44(247), pp. 335–341.</li>
        <li>Ulam, Stanislaw (1976). <em>Adventures of a Mathematician</em>. Charles Scribner's Sons, New York.</li>
        <li>von Neumann, John (1951). <em>Various techniques used in connection with random digits</em>. National Bureau of Standards Applied Mathematics Series, 12, pp. 36–38.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ո՞րն էր Ուլամի առաջին խնդիրը, որը նրան հանգեցրեց Մոնտե Կառլոյի մեթոդի գաղափարին։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Պասիանս (Canfield solitaire) թղթախաղի հաղթանակի հավանականության գնահատումը։ Քանի որ 52 խաղաքարտերի բոլոր հնարավոր դասավորությունների կոմբինատոր հաշվարկը գերազանցում էր մարդկային հնարավորությունները, նա հասկացավ, որ 100 անգամ պատահական փորձարկելը կտա գործնականորեն հիանալի մոտարկում։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
In the mid-20th century, physicists and mathematicians confronting multidimensional nuclear physics problems found classical analytical tools and standard numerical grids paralyzed. This computational gridlock gave birth to a revolutionary paradigm: <strong>The Monte Carlo Method</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-dice"></i> From Solitaire to ENIAC: The True Genesis</h4>
    <p><strong>1. Stanislaw Ulam's Solitaire Epiphany (1946):</strong> At Los Alamos, Polish-American mathematician Stanislaw Ulam was recovering from encephalitis while playing Canfield solitaire. Wondering about his exact odds of winning, he realized pure combinatorial counting of $52!$ permutations was hopelessly intractable. Then came the revelation: <em>"Why not lay out 100 random games and simply count the fraction of successful outcomes?"</em></p>
    <p><strong>2. John von Neumann's Computational Architecture:</strong> Ulam shared the breakthrough with John von Neumann. Von Neumann immediately recognized its immense potential for neutron transport and nuclear chain reactions where analytical differential equations failed. He formulated the mathematical algorithms and programmed them on <strong>ENIAC</strong>, the world's first general-purpose electronic computer.</p>
    <p><strong>3. Nicholas Metropolis and the Codename:</strong> For project secrecy, Nicholas Metropolis suggested the codename <strong>"Monte Carlo"</strong>, inspired by the casino in Monaco where Ulam's uncle borrowed money to play roulette. In 1949, Metropolis and Ulam published their historic paper: <em>"The Monte Carlo Method"</em>.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Historical Application: Neutron Diffusion</h4>
    <p>In a fissile core, a neutron scatters, triggers fission, or escapes. For each simulated particle:</p>
    <ol>
        <li>A random number determines its mean free path length.</li>
        <li>Random angles $(\\theta, \\phi)$ choose the trajectory direction.</li>
        <li>A random outcome determines whether collision causes fission, capture, or leakage.</li>
    </ol>
    <p>By simulating millions of statistical trajectories, Los Alamos scientists determined critical mass with unprecedented precision without hazardous trial-and-error experiments.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Misconception</h4>
    <p><strong>Myth:</strong> "Monte Carlo is just random guesswork."</p>
    <p><strong>Reality:</strong> The method uses the Law of Large Numbers and the Central Limit Theorem. For independent samples with finite variance, the sample-mean estimator has standard error $O(N^{-1/2})$. This is not a strict upper bound on every run's error. The exponent does not change with dimension, but the error constant may change.</p>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-book"></i> Key Academic Publications</h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
        <li>Metropolis, Nicholas; Ulam, Stanislaw (1949). <em>The Monte Carlo Method</em>. Journal of the American Statistical Association, 44(247), pp. 335–341.</li>
        <li>Ulam, Stanislaw (1976). <em>Adventures of a Mathematician</em>. Charles Scribner's Sons, New York.</li>
        <li>von Neumann, John (1951). <em>Various techniques used in connection with random digits</em>. NBS Applied Mathematics Series, 12, pp. 36–38.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What specific problem first triggered Ulam's Monte Carlo breakthrough?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Estimating the winning probability of Canfield solitaire. Realizing that computing the exact combinatorial probabilities for 52 cards was practically impossible, he reasoned that playing 100 random hands and recording the frequency of wins would provide an accurate estimate.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
В середине XX века ученые в Лос-Аламосе столкнулись с задачами многомерного переноса излучения, для которых классический математический анализ и сеточные методы оказались бессильны из-за «проклятия размерности». Ответом стал революционный подход: <strong>метод Монте-Карло</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-dice"></i> От пасьянса до ЭНИАКа: подлинная история создания</h4>
    <p><strong>1. Интуитивное озарение Станислава Улама (1946 г.):</strong> Выздоравливая после болезни в Лос-Аламосе, польско-американский математик Станислав Улам раскладывал пасьянс «Канфилд». Он захотел вычислить точную вероятность выигрыша. Комбинаторный перебор $52!$ вариантов был немыслим. Тогда Улама осенило: <em>«Почему бы просто не сыграть 100 случайных партий и не сосчитать процент побед?»</em></p>
    <p><strong>2. Алгоритмическая реализация Джона фон Неймана:</strong> Улам поделился идеей с Джоном фон Нейманом. Тот мгновенно оценил колоссальную перспективу идеи для моделирования диффузии нейтронов в делящихся материалах и запрограммировал метод на первом электронном компьютере <strong>ENIAC</strong>.</p>
    <p><strong>3. Николас Метрополис и секретное название:</strong> Для соблюдения секретности Николас Метрополис предложил кодовое имя <strong>«Монте-Карло»</strong> в честь знаменитого казино в Монако, где дядя Улама занимал деньги для игры в рулетку. В 1949 году вышла эпохальная статья Метрополиса и Улама: <em>«The Monte Carlo Method»</em>.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Исторический пример: диффузия нейтронов</h4>
    <p>При моделировании движения нейтрона в ядре урана:</p>
    <ol>
        <li>Случайное число задает длину свободного пробега до столкновения.</li>
        <li>Случайные углы $(\\theta, \\phi)$ определяют направление рассеяния.</li>
        <li>Случайное событие определяет исход: деление, поглощение или утечка наружу.</li>
    </ol>
    <p>Моделирование миллионов траекторий позволило точно рассчитать критическую массу без опасных натурных экспериментов.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Распространенное заблуждение</h4>
    <p><strong>Миф:</strong> «Метод Монте-Карло — это просто ненаучное случайное угадывание».</p>
    <p><strong>Факт:</strong> Метод опирается на Закон больших чисел и Центральную предельную теорему. Для независимых выборок с конечной дисперсией стандартная ошибка оценки по выборочному среднему убывает как $O(N^{-1/2})$. Это не строгая верхняя граница погрешности каждого запуска. Степень не меняется с размерностью, но константа может меняться.</p>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-book"></i> Ключевые научные публикации</h4>
    <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
        <li>Metropolis, Nicholas; Ulam, Stanislaw (1949). <em>The Monte Carlo Method</em>. Journal of the American Statistical Association, 44(247), pp. 335–341.</li>
        <li>Ulam, Stanislaw (1976). <em>Adventures of a Mathematician</em>. Charles Scribner's Sons, New York.</li>
        <li>von Neumann, John (1951). <em>Various techniques used in connection with random digits</em>. NBS Applied Mathematics Series, 12, pp. 36–38.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: какая прикладная задача подтолкнула Улама к идее метода Монте-Карло?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Оценка вероятности выигрыша в карточный пасьянс «Канфилд». Поняв безнадежность аналитического подсчета для 52 карт, Улам пришел к выводу, что розыгрыш 100 случайных партий даст прекрасную практическую оценку.
    </div>
</details>
"""
                }
            }
        ]
    }
    return refine_theory_diagrams(chapter)
