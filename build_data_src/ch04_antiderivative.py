# Chapter 4: Նախնական ֆունկցիա և անորոշ ինտեգրալ (Antiderivative and Indefinite Integral)
# Subsections:
# 4.1: antiderivative-indefinite-integral
# 4.2: integration-methods-techniques

def get_chapter_4():
    return {
        "title": {
            "hy": "4. Նախնական ֆունկցիա և անորոշ ինտեգրալ",
            "en": "4. Antiderivative and Indefinite Integral",
            "ru": "4. Первообразная и неопределенный интеграл"
        },
        "subsections": [
            {
                "id": "antiderivative-indefinite-integral",
                "title": {
                    "hy": "Նախնական ֆունկցիա, ինտեգրման հաստատուն C և հիմնական աղյուսակը",
                    "en": "Antiderivative, Constant C, and Standard Integral Table",
                    "ru": "Первообразная, константа C и базовая таблица интегралов"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Եթե ածանցումը տրված ֆունկցիայից նրա փոփոխության արագության որոշումն է, ապա <strong>ինտեգրումը</strong> հակադարձ խնդիրն է․ իմանալով փոփոխման արագությունը՝ վերականգնել սկզբնական ֆունկցիան։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-undo"></i> Սահմանում և ինտեգրման հաստատուն $C$-ի անհրաժեշտությունը</h4>
    <p><strong>Սահմանում․</strong> $F(x)$ ֆունկցիան կոչվում է $f(x)$-ի <strong>նախնական ֆունկցիա</strong> տրված միջակայքում, եթե այդ միջակայքի բոլոր $x$-երի համար՝</p>
    $$F'(x) = f(x)$$
    <p><strong>Ինչո՞ւ նախնական ֆունկցիան միակ չէ․</strong> Քանի որ ցանկացած հաստատուն $C$ թվի ածանցյալը 0 է ($(C)' = 0$), ապա․</p>
    $$(F(x) + C)' = F'(x) + 0 = f(x)$$
    <p>Սա նշանակում է, որ եթե $F(x)$-ը նախնական է, ապա $F(x)+C$ ընտանիքի բոլոր ֆունկցիաները նույնպես նախնական են։ Երկրաչափորեն դրանք միմյանց զուգահեռ ուղղահայաց շեղված կորերի ընտանիք են։</p>
    <p><strong>Անորոշ ինտեգրալի նշանակումը․</strong> $f(x)$ ֆունկցիայի բոլոր նախնական ֆունկցիաների ընտանիքը նշանակվում է․</p>
    $$\\int f(x)dx = F(x) + C$$
    <p>Այստեղ $\\int$-ը ինտեգրալի նշանն է, $f(x)$-ը՝ ինտեգրալի տակ գտնվող ֆունկցիան (ինտեգրանդը), իսկ $dx$-ը՝ ինտեգրման փոփոխականը։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-table"></i> Հիմնական ինտեգրալների աղյուսակը</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Ինտեգրալ</th><th>Նախնական ֆունկցիաների ընտանիք</th><th>Պայմաններ</th></tr>
        <tr><td>$\\int x^n dx$</td><td>$\\frac{x^{n+1}}{n+1} + C$</td><td><strong>$n \\ne -1$</strong></td></tr>
        <tr><td>$\\int \\frac{1}{x} dx$</td><td>$\\ln|x| + C$</td><td>$x \\ne 0$</td></tr>
        <tr><td>$\\int e^x dx$</td><td>$e^x + C$</td><td>Բոլոր $x \\in \\mathbb{R}$</td></tr>
        <tr><td>$\\int \\sin x dx$</td><td>$-\\cos x + C$</td><td>Անկյունը՝ ռադիաններով</td></tr>
        <tr><td>$\\int \\cos x dx$</td><td>$\\sin x + C$</td><td>Անկյունը՝ ռադիաններով</td></tr>
        <tr><td>$\\int k f(x) dx$</td><td>$k \\int f(x)dx$</td><td>Հաստատունի դուրսբերում</td></tr>
        <tr><td>$\\int (f(x) \\pm g(x))dx$</td><td>$\\int f(x)dx \\pm \\int g(x)dx$</td><td>Գումարի ինտեգրալ</td></tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ և ստուգում ածանցմամբ</h4>
    <p><strong>Խնդիր․</strong> Հաշվել $\\int (6x^2 - 4e^x + \\frac{3}{x}) dx$ ($x > 0$)։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Կիրառում ենք գումարի և հաստատուն արտադրիչի կանոնները․
            $$\\int (6x^2 - 4e^x + \\frac{3}{x}) dx = 6\\int x^2 dx - 4\\int e^x dx + 3\\int \\frac{1}{x} dx$$
        </li>
        <li>Օգտվում ենք աղյուսակից․
            $$= 6 \\cdot \\frac{x^3}{3} - 4e^x + 3\\ln|x| + C = \\mathbf{2x^3 - 4e^x + 3\\ln|x| + C}$$
        </li>
    </ol>
    <p><strong>Ստուգում ածանցմամբ (միշտ պարտադիր է)․</strong></p>
    $$(2x^3 - 4e^x + 3\\ln|x| + C)' = (2x^3)' - (4e^x)' + (3\\ln x)' + (C)' = 6x^2 - 4e^x + \\frac{3}{x} + 0$$
    <p>Արդյունքը ճշգրիտ համընկնում է սկզբնական ինտեգրանդի հետ։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալներ</h4>
    <ul style="margin: 0; padding-left: 18px;">
        <li><strong>Մոռանալ $+C$-ն․</strong> Անորոշ ինտեգրալը ոչ թե մեկ ֆունկցիա է, այլ ֆունկցիաների ամբողջ ընտանիք։ Առանց $+C$-ի պատասխանը թերի է։</li>
        <li><strong>$n = -1$ դեպքը աստիճանի բանաձևում․</strong> $\\int x^{-1} dx = \\int \\frac{1}{x} dx$-ի դեպքում չի կարելի գրել $\\frac{x^0}{0}$։ Դրա պատասխանը բնական լոգարիթմն է՝ $\\ln|x| + C$։</li>
        <li><strong>Մոռանալ մոդուլը լոգարիթմում․</strong> $\\int \\frac{1}{x} dx = \\ln|x| + C$, քանի որ $x$-ը կարող է լինել բացասական։</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Գտնել $f(x) = 3x^2$ ֆունկցիայի այն նախնականը, որը բավարարում է $F(1) = 7$ պայմանին։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> $\\int 3x^2 dx = x^3 + C$։ Տեղադրենք տրված պայմանը՝ $F(1) = 1^3 + C = 7 \\implies 1 + C = 7 \\implies C = 6$։ Հետևաբար, պահանջվող մասնավոր նախնականն է՝ $F(x) = x^3 + 6$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
If differentiation determines the instantaneous rate of change of a function, <strong>integration</strong> solves the inverse problem: given the rate of change, reconstruct the original accumulated function.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-undo"></i> Definition and the Necessity of the Constant C</h4>
    <p><strong>Definition:</strong> A function $F(x)$ is an <strong>antiderivative</strong> of $f(x)$ on an interval if, for all $x$ in that interval:</p>
    $$F'(x) = f(x)$$
    <p><strong>Why is the antiderivative not unique?</strong> Because the derivative of any arbitrary constant $C$ is zero ($(C)' = 0$), we have:</p>
    $$(F(x) + C)' = F'(x) + 0 = f(x)$$
    <p>Geometrically, $F(x) + C$ represents a vertical family of parallel translated curves. The totality of all antiderivatives is called the <strong>indefinite integral</strong>:</p>
    $$\\int f(x)dx = F(x) + C$$
    <p>Here $\\int$ is the integral sign, $f(x)$ is the integrand, and $dx$ identifies the integration variable.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-table"></i> Table of Standard Indefinite Integrals</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Integral</th><th>Family of Antiderivatives</th><th>Conditions</th></tr>
        <tr><td>$\\int x^n dx$</td><td>$\\frac{x^{n+1}}{n+1} + C$</td><td><strong>$n \\ne -1$</strong></td></tr>
        <tr><td>$\\int \\frac{1}{x} dx$</td><td>$\\ln|x| + C$</td><td>$x \\ne 0$</td></tr>
        <tr><td>$\\int e^x dx$</td><td>$e^x + C$</td><td>All $x \\in \\mathbb{R}$</td></tr>
        <tr><td>$\\int \\sin x dx$</td><td>$-\\cos x + C$</td><td>Radians</td></tr>
        <tr><td>$\\int \\cos x dx$</td><td>$\\sin x + C$</td><td>Radians</td></tr>
        <tr><td>$\\int k f(x)dx$</td><td>$k \\int f(x)dx$</td><td>Linearity</td></tr>
        <tr><td>$\\int (f \\pm g)dx$</td><td>$\\int f dx \\pm \\int g dx$</td><td>Linearity</td></tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example and Verification by Differentiation</h4>
    <p><strong>Problem:</strong> Evaluate $\\int (6x^2 - 4e^x + \\frac{3}{x})dx$ ($x > 0$).</p>
    <p><strong>Solution:</strong></p>
    $$= 6\\frac{x^3}{3} - 4e^x + 3\\ln|x| + C = \\mathbf{2x^3 - 4e^x + 3\\ln|x| + C}$$
    <p><strong>Check via differentiation:</strong></p>
    $$(2x^3 - 4e^x + 3\\ln|x| + C)' = 6x^2 - 4e^x + \\frac{3}{x} + 0 = 6x^2 - 4e^x + \\frac{3}{x}$$
    <p>The derivative exactly matches the integrand.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfalls</h4>
    <ul style="margin: 0; padding-left: 18px;">
        <li><strong>Omitting $+C$:</strong> The indefinite integral denotes a whole family of functions, not a single one.</li>
        <li><strong>Power rule division by zero:</strong> For $x^{-1}$, power rule fails ($x^0/0$). The correct antiderivative is $\\ln|x| + C$.</li>
        <li><strong>Omitting absolute value:</strong> Always write $\\ln|x|$ since the domain of $1/x$ includes negative real numbers.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Find the specific antiderivative of $f(x)=3x^2$ satisfying $F(1)=7$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> The general antiderivative is $F(x) = x^3 + C$. Applying the initial condition: $F(1) = 1^3 + C = 7 \\implies C = 6$. Thus, the specific antiderivative is $F(x) = x^3 + 6$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
Если дифференцирование находит скорость изменения, то <strong>интегрирование</strong> решает обратную задачу: зная скорость, восстановить первоначальную функцию.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-undo"></i> Определение и необходимость константы C</h4>
    <p><strong>Определение:</strong> Функция $F(x)$ называется <strong>первообразной</strong> для $f(x)$ на промежутке, если для всех точек этого промежутка:</p>
    $$F'(x) = f(x)$$
    <p><strong>Почему первообразная неоднозначна?</strong> Производная любой константы $C$ равна 0 ($(C)' = 0$), поэтому:</p>
    $$(F(x) + C)' = F'(x) + 0 = f(x)$$
    <p>Семейство всех первообразных называется <strong>неопределенным интегралом</strong>:</p>
    $$\\int f(x)dx = F(x) + C$$
</div>

<div class="theory-callout">
    <h4><i class="fas fa-table"></i> Таблица основных неопределенных интегралов</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Интеграл</th><th>Первообразная</th><th>Условия</th></tr>
        <tr><td>$\\int x^n dx$</td><td>$\\frac{x^{n+1}}{n+1} + C$</td><td><strong>$n \\ne -1$</strong></td></tr>
        <tr><td>$\\int \\frac{1}{x} dx$</td><td>$\\ln|x| + C$</td><td>$x \\ne 0$</td></tr>
        <tr><td>$\\int e^x dx$</td><td>$e^x + C$</td><td>Для всех $x \\in \\mathbb{R}$</td></tr>
        <tr><td>$\\int \\sin x dx$</td><td>$-\\cos x + C$</td><td>В радианах</td></tr>
        <tr><td>$\\int \\cos x dx$</td><td>$\\sin x + C$</td><td>В радианах</td></tr>
    </table>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример с проверкой</h4>
    <p><strong>Задача:</strong> Вычислить $\\int (6x^2 - 4e^x + \\frac{3}{x}) dx$ ($x > 0$).</p>
    <p><strong>Решение:</strong> $2x^3 - 4e^x + 3\\ln|x| + C$.</p>
    <p><strong>Проверка дифференцированием:</strong> $(2x^3 - 4e^x + 3\\ln|x| + C)' = 6x^2 - 4e^x + \\frac{3}{x}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичные ошибки</h4>
    <ul style="margin: 0; padding-left: 18px;">
        <li><strong>Пропуск константы $+C$:</strong> Неопределенный интеграл — это семейство функций, а не одна функция.</li>
        <li><strong>Применение степенного правила к $1/x$:</strong> Нельзя делить на ноль; первообразная $1/x$ равна $\\ln|x|+C$.</li>
    </ul>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: найдите частную первообразную для $f(x)=3x^2$, если $F(1)=7$.</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Общий вид $F(x) = x^3 + C$. Из условия: $1^3 + C = 7 \\implies C = 6$. Частная первообразная: $F(x) = x^3 + 6$.
    </div>
</details>
"""
                }
            },
            {
                "id": "integration-methods-techniques",
                "title": {
                    "hy": "Ինտեգրման մեթոդներ․ փոխարինում և մասերով ինտեգրում",
                    "en": "Integration Techniques: Substitution and By Parts",
                    "ru": "Методы интегрирования: замена переменной и по частям"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Ի տարբերություն ածանցման, որտեղ ցանկացած բանաձև ունի ավտոմատ կանոն, ինտեգրումը պահանջում է հատուկ մեթոդների տիրապետում։ Երկու ամենահզոր հիմնարար եղանակներն են <strong>փոփոխականի փոխարինումը</strong> և <strong>մասերով ինտեգրումը</strong>։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-exchange-alt"></i> 1. Փոփոխականի փոխարինման մեթոդ (u-Substitution)</h4>
    <p>Այս մեթոդը բարդ ֆունկցիայի ածանցյալի կանոնի շրջումն է․</p>
    $$\\int f(g(x)) \\cdot g'(x) dx = \\int f(u) du, \\quad \\text{որտեղ } u = g(x), \\, du = g'(x)dx$$
    <p><strong>Նպատակը․</strong> Ինտեգրանդում նկատել մի արտահայտություն ($u$) և նրա ածանցյալը ($du$), որպեսզի բարդ ինտեգրալը վերածվի պարզ աղյուսակային տեսքի։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ 1․ Փոխարինման մեթոդ</h4>
    <p><strong>Խնդիր․</strong> Հաշվել $\\int 2x e^{x^2} dx$։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Նկատում ենք, որ $x^2$-ի ածանցյալը $2x$ է։ Կատարում ենք փոխարինում՝ $u = x^2$։</li>
        <li>Հաշվում ենք դիֆերենցիալը՝ $du = (x^2)' dx = 2x dx$։</li>
        <li>Տեղադրում ենք ինտեգրալի մեջ․
            $$\\int 2x e^{x^2} dx = \\int e^{x^2} (2x dx) = \\int e^u du$$
        </li>
        <li>Աղյուսակային ինտեգրում՝ $\\int e^u du = e^u + C$։</li>
        <li>Վերադառնում ենք սկզբնական $x$ փոփոխականին՝ $\\mathbf{e^{x^2} + C}$։</li>
    </ol>
    <p><strong>Ստուգում ածանցմամբ․</strong> $(e^{x^2} + C)' = e^{x^2} \\cdot (x^2)' = 2x e^{x^2}$։ Ճիշտ է։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-puzzle-piece"></i> 2. Մասերով ինտեգրման մեթոդ (Integration by Parts)</h4>
    <p>Այս մեթոդը հիմնված է արտադրյալի ածանցման կանոնի վրա՝ $(uv)' = u'v + uv'$։ Երկու կողմերն ինտեգրելով՝ ստանում ենք հայտնի բանաձևը․</p>
    $$\\int u \\, dv = u \\cdot v - \\int v \\, du$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ 2․ Մասերով ինտեգրում</h4>
    <p><strong>Խնդիր․</strong> Հաշվել $\\int x \\cos x dx$։</p>
    <p><strong>Լուծում․</strong></p>
    <ol>
        <li>Ընտրում ենք $u = x$ (որովհետև ածանցելիս այն պարզանում է) և $dv = \\cos x dx$։</li>
        <li>Հաշվում ենք $du$-ն և $v$-ն․
            $$du = dx, \\quad v = \\int \\cos x dx = \\sin x$$
        </li>
        <li>Կիրառում ենք բանաձևը․
            $$\\int x \\cos x dx = u \\cdot v - \\int v \\, du = x \\sin x - \\int \\sin x dx$$
        </li>
        <li>Քանի որ $\\int \\sin x dx = -\\cos x$, ստանում ենք․
            $$x \\sin x - (-\\cos x) + C = \\mathbf{x \\sin x + \\cos x + C}$$
        </li>
    </ol>
    <p><strong>Ստուգում ածանցմամբ․</strong></p>
    $$(x \\sin x + \\cos x + C)' = (x)' \\sin x + x (\\sin x)' + (\\cos x)' = 1 \\cdot \\sin x + x \\cos x - \\sin x = x \\cos x$$
    <p>Ստուգումը լիովին հաստատում է պատասխանի ճշտությունը։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Փոխարինում կատարելուց հետո մոռանալ վերադառնալ սկզբնական $x$ փոփոխականին (օրինակ՝ թողնել $e^u+C$), կամ մասերով ինտեգրման մեջ նշանների սխալ թույլ տալ ($-\\int v du$-ի բացասական նշանի հետ)։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչպե՞ս կատարել $\\int x e^x dx$ ինտեգրումը։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Մասերով ինտեգրմամբ․ $u = x \\implies du = dx$, $dv = e^x dx \\implies v = e^x$։<br>
        $\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C = e^x(x - 1) + C$։<br>
        <em>Ստուգում․</em> $(e^x(x-1))' = e^x(x-1) + e^x(1) = x e^x$։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Unlike differentiation, which follows deterministic programmatic rules, integration is an art requiring tactical methods. The two core foundational techniques are <strong>Substitution</strong> and <strong>Integration by Parts</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-exchange-alt"></i> 1. The Method of Substitution (u-Sub)</h4>
    <p>This method reverses the Chain Rule of differentiation:</p>
    $$\\int f(g(x)) g'(x) dx = \\int f(u) du, \\quad \\text{where } u = g(x), \\, du = g'(x)dx$$
    <p>Identify an inner function $u$ whose derivative $du$ appears as a multiplying factor in the integrand.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example 1: Substitution</h4>
    <p><strong>Evaluate:</strong> $\\int 2x e^{x^2} dx$.</p>
    <ol>
        <li>Substitute $u = x^2 \\implies du = 2x dx$.</li>
        <li>Rewrite: $\\int e^u du = e^u + C$.</li>
        <li>Back-substitute: $\\mathbf{e^{x^2} + C}$.</li>
    </ol>
    <p><em>Check:</em> $(e^{x^2} + C)' = e^{x^2} \\cdot 2x$. Verified.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-puzzle-piece"></i> 2. Integration by Parts</h4>
    <p>Derived by integrating the product rule $(uv)' = u'v + uv'$:</p>
    $$\\int u \\, dv = u v - \\int v \\, du$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example 2: Integration by Parts</h4>
    <p><strong>Evaluate:</strong> $\\int x \\cos x dx$.</p>
    <ol>
        <li>Set $u = x \\implies du = dx$, and $dv = \\cos x dx \\implies v = \\sin x$.</li>
        <li>Apply formula: $\\int x \\cos x dx = x \\sin x - \\int \\sin x dx = x \\sin x - (-\\cos x) + C = \\mathbf{x \\sin x + \\cos x + C}$.</li>
    </ol>
    <p><em>Check:</em> $(x\\sin x + \\cos x)' = \\sin x + x\\cos x - \\sin x = x\\cos x$. Verified.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Forgetting to substitute back to the original variable $x$, or mismanaging minus signs in $\\int u dv = uv - \\int v du$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Evaluate $\\int x e^x dx$.</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> By parts: $u = x, dv = e^x dx \\implies du = dx, v = e^x$.<br>
        $\\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C = e^x(x - 1) + C$.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
В отличие от дифференцирования, интегрирование требует применения специальных методов. Двумя важнейшими базовыми приемами являются <strong>метод замены переменной</strong> и <strong>интегрирование по частям</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-exchange-alt"></i> 1. Метод замены переменной</h4>
    <p>Обращение цепного правила дифференцирования:</p>
    $$\\int f(g(x)) g'(x) dx = \\int f(u) du, \\quad u = g(x), \\, du = g'(x)dx$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример 1: замена переменной</h4>
    <p><strong>Вычислить:</strong> $\\int 2x e^{x^2} dx$.</p>
    <ol>
        <li>Замена $u = x^2 \\implies du = 2x dx$.</li>
        <li>Интеграл: $\\int e^u du = e^u + C$.</li>
        <li>Возврат к $x$: $\\mathbf{e^{x^2} + C}$.</li>
    </ol>
    <p><em>Проверка:</em> $(e^{x^2} + C)' = 2x e^{x^2}$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-puzzle-piece"></i> 2. Интегрирование по частям</h4>
    <p>Выводится из производной произведения:</p>
    $$\\int u \\, dv = u v - \\int v \\, du$$
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Разобранный пример 2: интегрирование по частям</h4>
    <p><strong>Вычислить:</strong> $\\int x \\cos x dx$.</p>
    <ol>
        <li>$u = x \\implies du = dx$, $dv = \\cos x dx \\implies v = \\sin x$.</li>
        <li>Формула: $\\int x \\cos x dx = x \\sin x - \\int \\sin x dx = \\mathbf{x \\sin x + \\cos x + C}$.</li>
    </ol>
    <p><em>Проверка:</em> $(x\\sin x + \\cos x)' = \\sin x + x\\cos x - \\sin x = x\\cos x$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Распространенная ошибка</h4>
    <p><strong>Ошибка:</strong> Забывать вернуться к исходной переменной $x$ или путать знаки в формуле интегрирования по частям.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: вычислите $\\int x e^x dx$.</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> По частям: $u=x, dv=e^x dx \\implies du=dx, v=e^x$.<br>
        $\\int x e^x dx = x e^x - \\int e^x dx = e^x(x - 1) + C$.
    </div>
</details>
"""
                }
            }
        ]
    }
