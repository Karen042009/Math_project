# Chapter 12: Հավանականային սիմուլյացիաներ (Probabilistic Simulations)
# Subsections:
# 12.1: prob-simulations-lln
# 12.2: platform-simulations-guide

def get_chapter_12():
    return {
        "title": {
            "hy": "12. Հավանականային սիմուլյացիաներ և հարթակի գործիքները",
            "en": "12. Probabilistic Simulations and Platform Laboratory",
            "ru": "12. Вероятностные симуляции и лабораторные инструменты платформы"
        },
        "subsections": [
            {
                "id": "prob-simulations-lln",
                "title": {
                    "hy": "Պատահական փորձ, հաճախականություն և Մեծ թվերի օրենքը",
                    "en": "Random Experiments, Relative Frequency, and the Law of Large Numbers",
                    "ru": "Случайный эксперимент, относительная частота и Закон больших чисел"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ինչպե՞ս է համակարգիչը սովորում պատահականությունից։ Ցանկացած հավանականային սիմուլյացիայի հիմքում ընկած է երեք հասկացություն՝ <strong>պատահական փորձը</strong>, <strong>հարաբերական հաճախականությունը</strong> և <strong>Մեծ թվերի օրենքը (LLN)</strong>։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-random"></i> Հիմնական հասկացությունները</h4>
    <ul>
        <li><strong>Պատահական փորձ (Random Experiment)․</strong> Գործողություն կամ գործընթաց, որի ելքը հնարավոր չէ նախապես միանշանակ կանխատեսել, բայց հայտնի են բոլոր հնարավոր ելքերի բազմությունը՝ տարրական պատահույթների տարածությունը ($\\Omega$)։</li>
        <li><strong>Հարաբերական հաճախականություն ($f_N(A)$)․</strong> Եթե $N$ անկախ փորձերում $A$ պատահույթը տեղի է ունեցել $k_N$ անգամ, ապա նրա հաճախականությունն է՝
            $$f_N(A) = \\frac{k_N}{N}$$
        </li>
        <li><strong>Բեռնուլիի Մեծ թվերի օրենքը (1713 թ․)․</strong> Կամայական $\\varepsilon > 0$ դրական թվի համար, երբ փորձերի քանակը ձգտում է անվերջության ($N \\to \\infty$), հարաբերական հաճախականության շեղումը տեսական հավանականությունից ձգտում է զրոյի․
            $$\\lim_{N \\to \\infty} P\\left( |f_N(A) - P(A)| < \\varepsilon \\right) = 1$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Սիմուլյացիոն օրինակ․ Մետաղադրամի 10,000 նետում</h4>
    <p>Կատարյալ մետաղադրամի համար տեսական հավանականությունն է $P(\\text{Գերբ}) = 0.5$։</p>
    <ul>
        <li>$N = 10$ նետում․ Գերբ ընկավ 7 անգամ ($f_{10} = 0.70$, շեղումը՝ $0.20$)</li>
        <li>$N = 100$ նետում․ Գերբ ընկավ 54 անգամ ($f_{100} = 0.54$, շեղումը՝ $0.04$)</li>
        <li>$N = 1,000$ նետում․ Գերբ ընկավ 508 անգամ ($f_{1000} = 0.508$, շեղումը՝ $0.008$)</li>
        <li>$N = 10,000$ նետում․ Գերբ ընկավ 5,012 անգամ ($f_{10000} = 0.5012$, շեղումը՝ $0.0012$)</li>
    </ul>
    <p>Հաճախականության տատանումները սեղմվում են $0.5$-ի շուրջ՝ փորձնականորեն հաստատելով Մեծ թվերի օրենքը։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ․ «Խաղացողի մոլորությունը» (Gambler's Fallacy)</h4>
    <p><strong>Սխալ կարծիք․</strong> «Եթե մետաղադրամը 5 անգամ անընդմեջ ընկել է Գիր, ուրեմն հաջորդ նետմանը Գերբ ընկնելու հավանականությունը շատ ավելի մեծ է»։</p>
    <p><strong>Իրականություն․</strong> Մետաղադրամը «հիշողություն չունի»։ Յուրաքանչյուր նետում անկախ է նախորդներից, և 6-րդ նետմանը Գերբի հավանականությունը նախկինի պես ճիշտ $0.5$ է։ Մեծ թվերի օրենքը աշխատում է ոչ թե նախորդ շեղումները «փոխհատուցելով», այլ նոր փորձերի մեծ քանակի մեջ նախկին շեղումները <em>ջրիկացնելով (հալեցնելով)</em>։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ տարբերություն կա իրական պատահական թվերի (TRNG) և համակարգչային կեղծ-պատահական թվերի (PRNG) միջև։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Իրական պատահական թվերը գեներացվում են ֆիզիկական աղմուկից (օրինակ՝ ջերմային կամ ռադիոակտիվ տատանումներ)։ Համակարգչային PRNG-ները (ինչպիսին է JavaScript-ի <code>Math.random()</code>-ը կամ Mersenne Twister-ը) մաթեմատիկական դետերմինացված ալգորիթմներ են, որոնք ունեն հսկայական պարբերություն և վիճակագրորեն անզանազանելի են իրական պատահականությունից։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
How do computational simulations synthesize truth from stochasticity? Any probabilistic laboratory rests upon three pillars: <strong>random experiments</strong>, <strong>relative frequency</strong>, and the <strong>Law of Large Numbers (LLN)</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-random"></i> Foundations of Probabilistic Modeling</h4>
    <ul>
        <li><strong>Random Experiment:</strong> A non-deterministic process with a well-defined sample space $\\Omega$ of possible outcomes.</li>
        <li><strong>Relative Frequency ($f_N(A)$):</strong> If event $A$ occurs $k_N$ times across $N$ independent trials:
            $$f_N(A) = \\frac{k_N}{N}$$
        </li>
        <li><strong>Bernoulli's Weak Law of Large Numbers (1713):</strong> For any tolerance $\\varepsilon > 0$:
            $$\\lim_{N \\to \\infty} P\\left( |f_N(A) - P(A)| < \\varepsilon \\right) = 1$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Simulation Benchmark: 10,000 Coin Flips</h4>
    <p>Theoretical fair probability: $P(\\text{Heads}) = 0.5$.</p>
    <ul>
        <li>$N = 10$: $7$ Heads ($f_{10} = 0.70$, error: $0.20$)</li>
        <li>$N = 100$: $54$ Heads ($f_{100} = 0.54$, error: $0.04$)</li>
        <li>$N = 1,000$: $508$ Heads ($f_{1000} = 0.508$, error: $0.008$)</li>
        <li>$N = 10,000$: $5,012$ Heads ($f_{10000} = 0.5012$, error: $0.0012$)</li>
    </ul>
    <p>Empirical frequencies inexorably converge toward $0.5$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Gambler's Fallacy</h4>
    <p><strong>Myth:</strong> "After 5 consecutive Tails, a Head is 'due'."</p>
    <p><strong>Reality:</strong> The coin possesses no memory. Each toss remains statistically independent with $P(\\text{Head}) = 0.5$. The LLN works not by actively compensating past deviations, but by diluting them across vast sample sizes.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What distinguishes PRNGs from true physical random generators?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> True Random Number Generators (TRNGs) sample chaotic physical noise (quantum, thermal). Pseudo-Random Number Generators (PRNGs) are deterministic mathematical recurrences (e.g., Mersenne Twister) whose outputs are statistically indistinguishable from randomness for computational simulations.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Любая компьютерная вероятностная симуляция базируется на трех китах: <strong>случайном эксперименте</strong>, <strong>относительной частоте</strong> и <strong>Законе больших чисел (ЗБЧ)</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-random"></i> Фундаментальные понятия</h4>
    <ul>
        <li><strong>Случайный эксперимент:</strong> Процесс с недетерминированным исходом и известным пространством элементарных событий $\\Omega$.</li>
        <li><strong>Относительная частота ($f_N(A)$):</strong> Доля благоприятных исходов в $N$ испытаниях: $f_N(A) = k_N / N$.</li>
        <li><strong>Закон больших чисел Бернулли:</strong> Частота стремится по вероятности к теоретической вероятности $P(A)$ при $N \\to \\infty$.</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Симуляционный тест: 10,000 бросков монеты</h4>
    <p>Теоретическая вероятность: $P = 0.5$. С ростом $N$ от $10$ до $10,000$ частота стабилизируется: $0.70 \\to 0.54 \\to 0.508 \\to 0.5012$, наглядно демонстрируя ЗБЧ.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Ошибка игрока (Gambler's Fallacy)</h4>
    <p><strong>Заблуждение:</strong> Считать, что после серии орлов вероятность решки возрастает. Испытания независимы, и вероятность каждого броска неизменно равна $0.5$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: чем отличаются генераторы псевдослучайных чисел от физических случайных чисел?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Физические генераторы считывают тепловой или квантовый шум. Псевдослучайные алгоритмы (PRNG) детерминированы, но обладают гигантскими периодами и статистически неотличимы от идеального случайного шума.
    </div>
</details>
"""
                }
            },
            {
                "id": "platform-simulations-guide",
                "title": {
                    "hy": "Կայքի սիմուլյացիաների ուղեցույց (Մետաղադրամ, Զառ, Մոնտի Հոլլ, Գալտոն, Բյուֆոն)",
                    "en": "Platform Interactive Simulations Guide",
                    "ru": "Руководство по симуляторам платформы"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Այս կայքը հագեցած է ինտերակտիվ վիրտուալ լաբորատորիաներով։ Ստորև ներկայացված է յուրաքանչյուր սիմուլյացիայի գիտական կանխատեսումը, չափվող մեծությունները և կապը Մոնտե Կառլոյի մեթոդի հետ։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-flask"></i> Հարթակի սիմուլյացիաների համեմատական ուղեցույց</h4>
    <table class="theory-table" style="width: 100%;">
        <tr>
            <th>Սիմուլյացիա</th>
            <th>Փորձի կանոնները</th>
            <th>Տեսական կանխատեսում</th>
            <th>Կապը Մոնտե Կառլոյի հետ</th>
        </tr>
        <tr>
            <td><strong>1. Մոնտե Կառլոյի ինտեգրում</strong></td>
            <td>Պատահական կետերի նետում $f(x)$ կորի տիրույթում</td>
            <td>$I = \\int_a^b f(x)dx$, ճշգրիտ անալիտիկ արժեք</td>
            <td>Ուղղակի Մոնտե Կառլո թվային ինտեգրում ($O(1/\\sqrt{N})$)</td>
        </tr>
        <tr>
            <td><strong>2. Գալտոնի տախտակ (Quincunx)</strong></td>
            <td>Գնդիկները բախվում են մեխերին և շեղվում ձախ/աջ ($p=0.5$)</td>
            <td>Բինոմական բաշխում $B(n, 0.5)$, որը ձգտում է <strong>Նորմալ (Գաուսյան) կորին</strong></td>
            <td>Կենտրոնական սահմանային թեորեմի ֆիզիկական Մոնտե Կառլո ցուցադրում</td>
        </tr>
        <tr>
            <td><strong>3. Մոնտի Հոլլի պարադոքս</strong></td>
            <td>3 դուռ, 1 ավտոմեքենա, 2 այծ։ Խաղավարը բացում է այծով դուռը</td>
            <td>Մնալու դեպքում՝ $P = 1/3$, ընտրությունը <strong>փոխելու դեպքում՝ $P = 2/3$</strong></td>
            <td>Բարդ պայմանական հավանականության ստուգում վիճակագրական ընտրանքով</td>
        </tr>
        <tr>
            <td><strong>4. Բյուֆոնի ասեղ</strong></td>
            <td>$L$ երկարությամբ ասեղների պատահական նետում $d$ հեռավորությամբ գծերի վրա</td>
            <td>Հատման հավանականությունը՝ $P = \\frac{2L}{\\pi d} \\implies \\pi \\approx \\frac{2LN}{d N_{\\text{հատում}}}$</td>
            <td>Երկրաչափական Մոնտե Կառլոյի պատմական առաջին օրինակը (1777 թ․)</td>
        </tr>
        <tr>
            <td><strong>5. Զառի նետում (1 և 2 զառ)</strong></td>
            <td>6 նիստ ունեցող զառի նետումների գումար</td>
            <td>Մեկ զառի միջինը՝ $3.5$։ Երկու զառի գումարի ամենահավանական ելքը՝ $7$ ($P=6/36$)</td>
            <td>Դիսկրետ պատահական մեծությունների սպասման և բաշխման մոդելավորում</td>
        </tr>
        <tr>
            <td><strong>6. Մետաղադրամի նետում</strong></td>
            <td>Անկախ երկուական փորձեր ($p=0.5$)</td>
            <td>Հաճախականությունը ձգտում է $0.5$-ի</td>
            <td>Բեռնուլիի մեծ թվերի օրենքի բազային ցուցադրում</td>
        </tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լաբորատոր օրինակ․ Բյուֆոնի ասեղի սիմուլյացիան հարթակում</h4>
    <p>Ենթադրենք ասեղի երկարությունը հավասար է գծերի հեռավորությանը ($L = d$)։ Բանաձևը պարզեցվում է՝ $P = \\frac{2}{\\pi} \\implies \\pi = \\frac{2}{P} \\approx \\frac{2N}{N_{\\text{հատում}}}$։</p>
    <p>Սիմուլյատորում կատարում ենք $N = 5,000$ նետում։ Գծերը հատել են $N_{\\text{հատում}} = 3,184$ ասեղներ։</p>
    $$\\pi \\approx \\frac{2 \\times 5000}{3184} = \\frac{10000}{3184} \\approx \\mathbf{3.1407}$$
    <p>Սխալը կազմում է ընդամենը $|3.1407 - 3.14159| = 0.00089$։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ կարծիք Մոնտի Հոլլի մասին․</strong> Մտածել, որ խաղավարի դուռը բացելուց հետո մնացած երկու դռների շանսերը դառնում են 50/50։</p>
    <p><strong>Իրականություն․</strong> Խաղավարը դուռը չի բացում պատահականորեն․ նա <strong>գիտի</strong>, թե որտեղ է մեքենան, և միշտ բացում է այծով դուռ։ Ուստի սկզբնական ընտրության $1/3$ հավանականությունը մնում է նույնը, իսկ մնացած $2/3$ ամբողջ հավանականությունը կենտրոնանում է երկրորդ փակ դռան վրա։ Կայքի սիմուլյատորը դա ապացուցում է ակնառու փորձով։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչո՞ւ է Գալտոնի տախտակում գնդիկների բաշխումը ձգտում նորմալ (զանգակաձև) կորի։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Յուրաքանչյուր մեխի բախվելիս գնդիկը կատարում է անկախ պատահական քայլ՝ $+1/2$ աջ կամ $-1/2$ ձախ։ Ըստ Կենտրոնական սահմանային թեորեմի (CLT) և դը Մուավր-Լապլասի թեորեմի՝ մեծ թվով անկախ պատահական շեղումների գումարը բաշխվում է ըստ Նորմալ (Գաուսյան) օրենքի։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
This platform provides six interactive simulation laboratories. Below is the scientific breakdown connecting each simulation to Monte Carlo principles.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-flask"></i> Comparative Guide to Platform Simulations</h4>
    <table class="theory-table" style="width: 100%;">
        <tr>
            <th>Simulation</th>
            <th>Protocol</th>
            <th>Theoretical Prediction</th>
            <th>Monte Carlo Connection</th>
        </tr>
        <tr>
            <td><strong>1. Monte Carlo Integration</strong></td>
            <td>Random sampling under curve $f(x)$</td>
            <td>Exact definite integral $I = \\int_a^b f(x)dx$</td>
            <td>Direct numerical quadrature ($O(1/\\sqrt{N})$)</td>
        </tr>
        <tr>
            <td><strong>2. Galton Board</strong></td>
            <td>Peg collisions with $p=0.5$ left/right deflection</td>
            <td>Binomial $B(n, 0.5) \\to$ Gaussian Normal curve</td>
            <td>Physical Monte Carlo proof of the CLT</td>
        </tr>
        <tr>
            <td><strong>3. Monty Hall Paradox</strong></td>
            <td>Host reveals goat behind non-selected door</td>
            <td>Staying wins $1/3$; <strong>Switching wins $2/3$</strong></td>
            <td>Sampling proof of counter-intuitive conditional probability</td>
        </tr>
        <tr>
            <td><strong>4. Buffon's Needle</strong></td>
            <td>Tossing needles of length $L$ across lined floor $d$</td>
            <td>Crossing prob $P = \\frac{2L}{\\pi d} \\implies \\pi \\approx \\frac{2LN}{d N_{\\text{hits}}}$</td>
            <td>First historical geometric Monte Carlo experiment (1777)</td>
        </tr>
        <tr>
            <td><strong>5. Dice Throw</strong></td>
            <td>Single and double fair die tosses</td>
            <td>Mean 3.5; sum of two dice peaks at 7 ($P=6/36$)</td>
            <td>Discrete expectation and probability distribution</td>
        </tr>
        <tr>
            <td><strong>6. Coin Toss</strong></td>
            <td>Bernoulli trials ($p=0.5$)</td>
            <td>Frequency converges to $0.5$</td>
            <td>Direct demonstration of the Law of Large Numbers</td>
        </tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Benchmark: Buffon's Needle with $L = d$</h4>
    <p>Formula: $\\pi \\approx \\frac{2N}{N_{\\text{hits}}}$. In a simulated run with $N = 5,000$ tosses and $3,184$ crossings: $\\pi \\approx \\frac{10,000}{3,184} \\approx \\mathbf{3.1407}$ (error $< 0.0009$).</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall: Monty Hall 50/50 Fallacy</h4>
    <p><strong>Myth:</strong> "With two doors left, the odds are 50/50."</p>
    <p><strong>Fact:</strong> The host's choice is non-random: he possesses private information and intentionally exposes a goat. Switching captures the remaining $2/3$ probability.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Why does the Galton Board form a bell curve?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Each pin deflection is an independent Bernoulli step ($+1/2$ or $-1/2$). By the Central Limit Theorem and de Moivre-Laplace theorem, the sum of independent random steps converges to the Gaussian Normal Distribution.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Платформа оснащена интерактивными симуляторами. Ниже приведено сопоставление каждого виртуального эксперимента с принципами Монте-Карло.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-flask"></i> Сравнительная таблица симуляторов платформы</h4>
    <table class="theory-table" style="width: 100%;">
        <tr>
            <th>Симулятор</th>
            <th>Правила эксперимента</th>
            <th>Теоретический прогноз</th>
            <th>Связь с Монте-Карло</th>
        </tr>
        <tr>
            <td><strong>1. Интеграл Монте-Карло</strong></td>
            <td>Случайные точки под графиком $f(x)$</td>
            <td>Точное значение $\\int_a^b f(x)dx$</td>
            <td>Прямое вычисление интеграла со сходимостью $O(1/\\sqrt{N})$</td>
        </tr>
        <tr>
            <td><strong>2. Доска Гальтона</strong></td>
            <td>Шарики падают на штыри ($p=0.5$)</td>
            <td>Биномиальное $B(n, 0.5) \\to$ нормальная гауссиана</td>
            <td>Физическая демонстрация Центральной предельной теоремы</td>
        </tr>
        <tr>
            <td><strong>3. Парадокс Монти Холла</strong></td>
            <td>Ведущий открывает дверь с козой</td>
            <td>Не менять: $1/3$; <strong>Сменить дверь: $2/3$</strong></td>
            <td>Проверка сложной условной вероятности выборкой</td>
        </tr>
        <tr>
            <td><strong>4. Игла Бюффона</strong></td>
            <td>Бросание иглы $L$ на полосы шага $d$</td>
            <td>$P = \\frac{2L}{\\pi d} \\implies \\pi \\approx \\frac{2LN}{d N_{\\text{пересеч}}}$</td>
            <td>Исторически первый геометрический эксперимент Монте-Карло (1777 г.)</td>
        </tr>
        <tr>
            <td><strong>5. Бросок кубика</strong></td>
            <td>1 и 2 кубика</td>
            <td>Среднее $3.5$; сумма двух кубиков чаще всего $7$</td>
            <td>Моделирование дискретных случайных величин</td>
        </tr>
        <tr>
            <td><strong>6. Монета</strong></td>
            <td>Испытания Бернулли ($p=0.5$)</td>
            <td>Частота стремится к $0.5$</td>
            <td>Базовая иллюстрация Закона больших чисел</td>
        </tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример: Игла Бюффона</h4>
    <p>При $L = d$: $\\pi \\approx \\frac{2N}{N_{\\text{пересеч}}}$. При $5,000$ бросков и $3,184$ пересечений получаем $\\pi \\approx 3.1407$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Заблуждение: парадокс Монти Холла</h4>
    <p><strong>Миф:</strong> «Шансы 50 на 50, так как остались две двери».</p>
    <p><strong>Факт:</strong> Ведущий обладает полной информацией и открывает козу целенаправленно. Смена двери удваивает шансы на победу ($2/3$ против $1/3$).</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: почему доска Гальтона формирует нормальное распределение?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Падение шарика представляет собой сумму независимых случайных смещений влево/вправо. По Центральной предельной теореме эта сумма стремится к нормальному распределению.
    </div>
</details>
"""
                }
            }
        ]
    }
