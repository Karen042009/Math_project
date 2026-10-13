# Chapter 9: Դիրքի, արագության և արագացման կապը (Kinematics)
# Subsections:
# 9.1: kinematics-velocity-acceleration
# 9.2: motion-constant-variable-accel

def get_chapter_9():
    return {
        "title": {
            "hy": "9. Դիրքի, արագության և արագացման կապը",
            "en": "9. Kinematics: Position, Velocity, and Acceleration",
            "ru": "9. Кинематика: связь положения, скорости и ускорения"
        },
        "subsections": [
            {
                "id": "kinematics-velocity-acceleration",
                "title": {
                    "hy": "Դիրք, ակնթարթային արագություն և արագացում",
                    "en": "Position, Instantaneous Velocity, and Acceleration in 1D",
                    "ru": "Положение, мгновенная скорость и ускорение в 1D"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Մաթեմատիկական անալիզի պատմական հիմնական շարժիչ ուժը եղել է մեխանիկան։ Ուղղագիծ շարժման օրինակով ածանցյալն ու ինտեգրալը ստանում են պարզ և ակնառու ֆիզիկական իմաստ։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-tachometer-alt"></i> Ուղիղ կապեր (Ածանցյալներ)</h4>
    <p>Ենթադրենք նյութական կետը շարժվում է առանցքի երկայնքով, և նրա դիրքի կոորդինատը ժամանակի $t$ պահին տրված է $s(t)$ ֆունկցիայով։</p>
    <ul>
        <li><strong>Ակնթարթային արագություն․</strong> Դիրքի փոփոխման արագությունն է ժամանակի ընթացքում՝
            $$v(t) = s'(t) = \\frac{ds}{dt}$$
        </li>
        <li><strong>Արագացում․</strong> Արագության փոփոխման արագությունն է ժամանակի ընթացքում (դիրքի երկրորդ կարգի ածանցյալը)՝
            $$a(t) = v'(t) = s''(t) = \\frac{dv}{dt} = \\frac{d^2s}{dt^2}$$
        </li>
    </ul>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-history"></i> Հակադարձ կապեր (Ինտեգրալներ)</h4>
    <p>Եթե հայտնի է արագացումը $a(t)$ կամ արագությունը $v(t)$, ապա ինտեգրմամբ վերականգնում ենք շարժումը․</p>
    $$v(t) = v_0 + \\int_{t_0}^t a(\\tau) d\\tau, \\quad \\text{որտեղ } v_0 = v(t_0)$$
    $$s(t) = s_0 + \\int_{t_0}^t v(\\tau) d\\tau, \\quad \\text{որտեղ } s_0 = s(t_0)$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-road"></i> Տեղաշարժ vs Անցած ճանապարհ</h4>
    <p>Երբ մարմինը շարժվում է հետ ու առաջ, պետք է խստորեն տարբերակել․</p>
    <ul>
        <li><strong>Տեղաշարժ (Displacement, $\\Delta s$)․</strong> Դիրքի վերջնական և սկզբնական կետերի վեկտորական/հանրահաշվական տարբերությունն է․
            $$\\Delta s = s(t) - s(t_0) = \\int_{t_0}^t v(\\tau) d\\tau$$
        </li>
        <li><strong>Անցած ընդհանուր ճանապարհ (Total Distance, $D$)․</strong> Հետագծի ընդհանուր երկարությունն է (միշտ $\\ge 0$)․
            $$D = \\int_{t_0}^t |v(\\tau)| d\\tau$$
        </li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Ուղղությունը փոխող մասնիկ</h4>
    <p><strong>Խնդիր․</strong> Մասնիկի արագությունը տրված է $v(t) = 6t - 18$ (մ/վ) բանաձևով $[0, 5]$ վայրկյան միջակայքում։ Սկզբնական դիրքը՝ $s(0) = 0\\text{ մ}$։</p>
    <p><strong>1. Դիրքը և տեղաշարժը․</strong></p>
    $$s(t) = 0 + \\int_0^t (6\\tau - 18)d\\tau = 3t^2 - 18t$$
    $$s(5) = 3(5)^2 - 18(5) = 75 - 90 = \\mathbf{-15\\text{ մ (Տեղաշարժը)}}$$
    <p><strong>2. Անցած ճանապարհը․</strong></p>
    <p>Արագությունը դառնում է զրո $6t - 18 = 0 \\implies t = 3\\text{ վ}$ պահին։ $[0, 3]$-ում $v \\le 0$ (հետ է շարժվում), իսկ $[3, 5]$-ում $v \\ge 0$ (առաջ է շարժվում)։</p>
    $$D = \\int_0^3 -(6t - 18)dt + \\int_3^5 (6t - 18)dt$$
    $$= \\left[ -3t^2 + 18t \\right]_0^3 + \\left[ 3t^2 - 18t \\right]_3^5 = (-27 + 54) + [(75 - 90) - (27 - 54)] = 27 + [-15 - (-27)] = 27 + 12 = \\mathbf{39\\text{ մ}}$$
    <p>Մասնիկը անցել է 39 մետր, թեև նրա տեղաշարժը ընդամենը $-15$ մետր է։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Ճանապարհը հաշվել $\\int v(t)dt$ բանաձևով, երբ մարմինը կանգնել և հետ է շարժվել։</p>
    <p><strong>Կանոն․</strong> Ճանապարհը միշտ հաշվվում է արագության մոդուլի ինտեգրմամբ՝ $\\int |v(t)|dt$։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ի՞նչ է արագության գրաֆիկի տակ ընկած մակերեսը $v(t) \\ge 0$ դեպքում։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Երբ $v(t) \\ge 0$, արագության գրաֆիկի և ժամանակի առանցքի միջև ընկած մակերեսը թվապես հավասար է մարմնի <strong>անցած ճանապարհին</strong>։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Mechanics was the prime historical catalyst for calculus. In one-dimensional kinematics, differentiation and integration embody direct, intuitive physical realities.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-tachometer-alt"></i> Direct Rates (Derivatives)</h4>
    <p>For position coordinate $s(t)$ along an axis:</p>
    <ul>
        <li><strong>Instantaneous Velocity:</strong> $v(t) = s'(t) = \\frac{ds}{dt}$</li>
        <li><strong>Acceleration:</strong> $a(t) = v'(t) = s''(t) = \\frac{dv}{dt}$</li>
    </ul>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-history"></i> Inverse Accumulation (Integrals)</h4>
    $$v(t) = v_0 + \\int_{t_0}^t a(\\tau) d\\tau$$
    $$s(t) = s_0 + \\int_{t_0}^t v(\\tau) d\\tau$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-road"></i> Displacement vs Total Distance Traveled</h4>
    <ul>
        <li><strong>Displacement (Net Position Change):</strong> $\\Delta s = s(t) - s(t_0) = \\int_{t_0}^t v(\\tau) d\\tau$</li>
        <li><strong>Total Distance Traveled:</strong> $D = \\int_{t_0}^t |v(\\tau)| d\\tau$</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Particle Reversing Direction</h4>
    <p>Velocity: $v(t) = 6t - 18$ m/s on $[0, 5]$ s, with initial position $s(0) = 0$ m.</p>
    <ul>
        <li>Velocity vanishes at $t = 3$ s (reversal point).</li>
        <li>Displacement: $s(5) = \\int_0^5 (6t-18)dt = [3t^2 - 18t]_0^5 = 75 - 90 = \\mathbf{-15\\text{ m}}$.</li>
        <li>Total Distance: $D = \\int_0^3 -(6t-18)dt + \\int_3^5 (6t-18)dt = 27 + 12 = \\mathbf{39\\text{ m}}$.</li>
    </ul>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Integrating velocity directly to calculate distance when velocity changes sign.</p>
    <p><strong>Rule:</strong> Distance requires $\\int |v(t)|dt$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: What does the area under $v(t)$ represent when $v(t) \\ge 0$?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> When velocity is non-negative, the geometric area under $v(t)$ between $t_1$ and $t_2$ exactly equals the distance traveled.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Механика послужила главной движущей силой создания математического анализа. В одномерном движении производная и интеграл обретают наглядный физический смысл.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-tachometer-alt"></i> Прямая связь (производные)</h4>
    <p>Координата положения: $s(t)$.</p>
    <ul>
        <li><strong>Мгновенная скорость:</strong> $v(t) = s'(t) = \\frac{ds}{dt}$</li>
        <li><strong>Ускорение:</strong> $a(t) = v'(t) = s''(t) = \\frac{dv}{dt}$</li>
    </ul>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-history"></i> Обратная связь (интегралы)</h4>
    $$v(t) = v_0 + \\int_{t_0}^t a(\\tau) d\\tau, \\quad s(t) = s_0 + \\int_{t_0}^t v(\\tau) d\\tau$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-road"></i> Перемещение vs Пройденный путь</h4>
    <ul>
        <li><strong>Перемещение (алгебраическое изменение координаты):</strong> $\\Delta s = s(t) - s(t_0) = \\int_{t_0}^t v(\\tau) d\\tau$</li>
        <li><strong>Пройденный путь (длина траектории, $\\ge 0$):</strong> $D = \\int_{t_0}^t |v(\\tau)| d\\tau$</li>
    </ul>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: разворот движения</h4>
    <p>Скорость: $v(t) = 6t - 18$ м/с на $[0, 5]$ с ($s(0) = 0$).</p>
    <p>Остановка в момент $t = 3$ с.</p>
    <ul>
        <li>Перемещение: $\\Delta s = \\int_0^5 (6t-18)dt = -15\\text{ м}$.</li>
        <li>Пройденный путь: $D = \\int_0^3 -(6t-18)dt + \\int_3^5 (6t-18)dt = 27 + 12 = \\mathbf{39\\text{ м}}$.</li>
    </ul>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Вычислять путь простым интегралом $\\int v(t)dt$ при смене направления движения.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: каков геометрический смысл площади под графиком $v(t)$ при $v(t) \\ge 0$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> При неотрицательной скорости площадь под графиком $v(t)$ численно равна пройденному пути.
    </div>
</details>
"""
                }
            },
            {
                "id": "motion-constant-variable-accel",
                "title": {
                    "hy": "Հաստատուն և փոփոխական արագացում, տեղաշարժ և ճանապարհ",
                    "en": "Constant and Variable Acceleration, Displacement vs Distance",
                    "ru": "Постоянное и переменное ускорение, перемещение и путь"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Դպրոցական ֆիզիկայի բոլոր հայտնի բանաձևերը հավասարաչափ արագացող շարժման համար հանդիսանում են ինտեգրման պարզագույն հետևանքներ։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-square-root-alt"></i> Հավասարաչափ արագացող շարժման բանաձևերի ստացումը ($a = \\text{const}$)</h4>
    <p>Ենթադրենք արագացումը հաստատուն է՝ $a(t) = a$։ Սկզբնական պայմանները $t = 0$ պահին՝ $v(0) = v_0$, $s(0) = s_0$։</p>
    <p><strong>1. Արագության ստացումը․</strong></p>
    $$v(t) = v_0 + \\int_0^t a \\, d\\tau = v_0 + a [\\tau]_0^t = \\mathbf{v_0 + at}$$
    <p><strong>2. Դիրքի ստացումը․</strong></p>
    $$s(t) = s_0 + \\int_0^t v(\\tau) d\\tau = s_0 + \\int_0^t (v_0 + a\\tau) d\\tau = s_0 + \\left[ v_0 \\tau + \\frac{a\\tau^2}{2} \\right]_0^t = \\mathbf{s_0 + v_0 t + \\frac{at^2}{2}}$$
    <p>Ստացանք ֆիզիկայի դասական կինեմատիկական հավասարումները։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Փոփոխական արագացմամբ շարժում</h4>
    <p><strong>Խնդիր․</strong> Հրթիռի արագացումը մեկնարկից հետո աճում է ըստ $a(t) = 3t^2$ (մ/վ$^2$) օրենքի։ Գտնել նրա արագությունը և բարձրությունը $t = 4\\text{ վ}$ պահին, եթե $v(0) = 0\\text{ մ/վ}$ և $s(0) = 0\\text{ մ}$։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Արագությունը՝
            $$v(t) = 0 + \\int_0^t 3\\tau^2 d\\tau = \\left[ \\tau^3 \\right]_0^t = t^3 \\implies v(4) = 4^3 = \\mathbf{64\\text{ մ/վ}}$$
        </li>
        <li>Բարձրությունը (դիրքը)՝
            $$s(t) = 0 + \\int_0^t \\tau^3 d\\tau = \\left[ \\frac{\\tau^4}{4} \\right]_0^t = \\frac{t^4}{4} \\implies s(4) = \\frac{4^4}{4} = 4^3 = \\mathbf{64\\text{ մ}}$$
        </li>
    </ol>
    <p><em>Ստուգում ածանցմամբ․</em> $s'(t) = (t^4/4)' = t^3 = v(t)$, և $v'(t) = (t^3)' = 3t^2 = a(t)$։ Բոլոր չափայնությունները (մ, մ/վ, մ/վ$^2$) պահպանված են։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> $s = v_0 t + at^2/2$ բանաձևը կիրառել փոփոխական արագացման դեպքում (օրինակ՝ վերևի հրթիռի համար)։</p>
    <p><strong>Կանոն․</strong> Այդ բանաձևը ճիշտ է <strong>միայն հաստատուն արագացման</strong> ($a = \\text{const}$) դեպքում։ Փոփոխական $a(t)$-ի դեպքում պարտադիր պետք է ինտեգրել։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչպե՞ս է ստացվում $v^2 - v_0^2 = 2a(s - s_0)$ հայտնի բանաձևը ինտեգրման միջոցով։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Քանի որ $a = \\frac{dv}{dt} = \\frac{dv}{ds} \\frac{ds}{dt} = v \\frac{dv}{ds}$ (շղթայական կանոն), ստանում ենք $a \\, ds = v \\, dv$։ Ինտեգրելով երկու կողմերը․ $\\int_{s_0}^s a \\, ds = \\int_{v_0}^v v \\, dv \\implies a(s - s_0) = \\frac{v^2 - v_0^2}{2} \\implies v^2 - v_0^2 = 2a(s - s_0)$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
The classic equations of uniformly accelerated motion in elementary physics are direct consequences of integrating a constant derivative.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-square-root-alt"></i> Derivation of Constant Acceleration Equations ($a = \\text{const}$)</h4>
    <p>Starting with $a(t) = a$ and initial conditions $v(0) = v_0, s(0) = s_0$ at $t = 0$:</p>
    <ol>
        <li>Velocity: $v(t) = v_0 + \\int_0^t a \\, d\\tau = \\mathbf{v_0 + at}$.</li>
        <li>Position: $s(t) = s_0 + \\int_0^t (v_0 + a\\tau)d\\tau = \\mathbf{s_0 + v_0 t + \\frac{1}{2}at^2}$.</li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Variable Acceleration</h4>
    <p>A rocket accelerates according to $a(t) = 3t^2$ m/s$^2$ ($v_0 = 0, s_0 = 0$).</p>
    <ul>
        <li>Velocity: $v(t) = \\int_0^t 3\\tau^2 d\\tau = t^3 \\implies v(4) = \\mathbf{64\\text{ m/s}}$.</li>
        <li>Position: $s(t) = \\int_0^t \\tau^3 d\\tau = \\frac{t^4}{4} \\implies s(4) = \\mathbf{64\\text{ m}}$.</li>
    </ul>
    <p><em>Check:</em> $s'(t) = t^3 = v(t)$, and $v'(t) = 3t^2 = a(t)$. Units match rigorously.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Using $s = v_0 t + \\frac{1}{2}at^2$ when acceleration varies with time.</p>
    <p><strong>Rule:</strong> That formula applies <strong>only</strong> when $a$ is constant. Variable acceleration requires integration.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Derive Torricelli's formula $v^2 - v_0^2 = 2a(s - s_0)$ via calculus.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> By the chain rule, $a = \\frac{dv}{dt} = \\frac{dv}{ds}\\frac{ds}{dt} = v\\frac{dv}{ds} \\implies a\\,ds = v\\,dv$. Integrating: $\\int_{s_0}^s a\\,ds = \\int_{v_0}^v v\\,dv \\implies a(s - s_0) = \\frac{v^2 - v_0^2}{2} \\implies v^2 - v_0^2 = 2a(s - s_0)$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Классические уравнения равноускоренного движения из школьного курса физики являются прямым следствием интегрирования константы.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-square-root-alt"></i> Вывод формул равноускоренного движения ($a = \\text{const}$)</h4>
    <ol>
        <li>Скорость: $v(t) = v_0 + \\int_0^t a \\, d\\tau = \\mathbf{v_0 + at}$.</li>
        <li>Положение: $s(t) = s_0 + \\int_0^t (v_0 + a\\tau) d\\tau = \\mathbf{s_0 + v_0 t + \\frac{at^2}{2}}$.</li>
    </ol>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример: переменное ускорение</h4>
    <p>Ускорение ракеты: $a(t) = 3t^2$ м/с$^2$ ($v_0 = 0, s_0 = 0$).</p>
    <ul>
        <li>Скорость: $v(t) = \\int_0^t 3\\tau^2 d\\tau = t^3 \\implies v(4) = 64\\text{ м/с}$.</li>
        <li>Высота: $s(t) = \\int_0^t \\tau^3 d\\tau = \\frac{t^4}{4} \\implies s(4) = 64\\text{ м}$.</li>
    </ul>
    <p><em>Проверка:</em> $s'(t) = t^3 = v(t)$, $v'(t) = 3t^2 = a(t)$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Применять формулу $s = v_0 t + at^2/2$ при переменном ускорении.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: как получить формулу Торричелли $v^2 - v_0^2 = 2a(s - s_0)$?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> $a = v\\frac{dv}{ds} \\implies a\\,ds = v\\,dv$. Интегрируя обе части: $a(s - s_0) = \\frac{v^2 - v_0^2}{2} \\implies v^2 - v_0^2 = 2a(s - s_0)$.
    </div>
</details>
"""
                }
            }
        ]
    }
