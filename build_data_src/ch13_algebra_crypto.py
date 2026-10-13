# Chapter 13: Ինչպես է հանրահաշիվը պաշտպանում տվյալները (How Algebra Protects Data)
# Standalone Concluding Topic
# Subsections:
# 13.1: algebra-modular-foundations
# 13.2: algebra-crypto-rsa-keys

def get_chapter_13():
    return {
        "title": {
            "hy": "13. Ինչպես է հանրահաշիվը պաշտպանում տվյալները",
            "en": "13. How Algebra Protects Data: Cryptography & RSA",
            "ru": "13. Как алгебра защищает данные: криптография и RSA"
        },
        "subsections": [
            {
                "id": "algebra-modular-foundations",
                "title": {
                    "hy": "Բաժանելիություն, պարզ թվեր, Էվկլիդեսի ալգորիթմ և մոդուլային թվաբանություն",
                    "en": "Divisibility, Primes, Euclidean Algorithm, and Modular Arithmetic",
                    "ru": "Делимость, простые числа, алгоритм Евклида и модульная арифметика"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Երբ մենք ինտերնետում գաղտնաբառ ենք մուտքագրում, բանկային փոխանցում կատարում կամ կոդավորված նամակ ուղարկում, մեր անվտանգությունը պաշտպանված չէ ֆիզիկական կողպեքներով։ Մեր տվյալները պաշտպանում է <strong>վերացական հանրահաշիվը և թվերի տեսությունը</strong>։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-divide"></i> 1. Բաժանելիություն և պարզ թվեր</h4>
    <p>Ասում ենք, որ $b$ ամբողջ թիվը բաժանվում է $a \\ne 0$ թվի վրա ($a \\mid b$), եթե գոյություն ունի այնպիսի $k$ ամբողջ թիվ, որ $b = a \\cdot k$։</p>
    <p><strong>Պարզ թիվ (Prime Number)․</strong> 1-ից մեծ բնական թիվ, որը բացի 1-ից և իրենից չունի այլ դրական բաժանարար ($2, 3, 5, 7, 11, 13, \\dots$)։</p>
    <p><em>Թվաբանության հիմնական թեորեմը․</em> 1-ից մեծ յուրաքանչյուր բնական թիվ միարժեքորեն վերլուծվում է պարզ արտադրիչների (մինչև արտադրիչների կարգը)․ $n = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-project-diagram"></i> 2. Ամենամեծ ընդհանուր բաժանարար (ԱՄԵԲ / GCD) և Էվկլիդեսի ալգորիթմ</h4>
    <p>Երկու թվերի ամենամեծ ընդհանուր բաժանարարը՝ $\\gcd(a, b)$-ն, կարելի է գտնել աներևակայելի արագ՝ <strong>Էվկլիդեսի ալգորիթմով</strong>․</p>
    $$\\gcd(a, b) = \\gcd(b, a \\bmod b), \\quad \\text{մինչև մնացորդը դառնա } 0$$
    <p>Եթե $\\gcd(a, b) = 1$, ապա $a$-ն և $b$-ն կոչվում են <strong>փոխադարձաբար պարզ թվեր (Coprime)</strong>։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-clock"></i> 3. Մոդուլային թվաբանություն և համեմատություններ (Clock Arithmetic)</h4>
    <p>Մոդուլային թվաբանությունը «ժամացույցի թվաբանություն» է։ Ասում ենք, որ $a$ և $b$ թվերը <strong>համեմատելի են ըստ $n$ մոդուլի</strong> ($a \\equiv b \\pmod n$), եթե նրանց տարբերությունը բաժանվում է $n$-ի վրա ($n \\mid (a - b)$) կամ նրանք $n$-ի բաժանելիս տալիս են նույն մնացորդը։</p>
    <p>Օրինակ՝ $17 \\equiv 5 \\pmod{12}$, որովհետև $17 - 5 = 12$։</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-key"></i> 4. Մոդուլային հակադարձ և աստիճան բարձրացնելը</h4>
    <p><strong>Մոդուլային բազմապատկական հակադարձ․</strong> $a$ թվի հակադարձն ըստ $n$ մոդուլի կոչվում է այնպիսի $x$ թիվ, որ․</p>
    $$a \\cdot x \\equiv 1 \\pmod n$$
    <p><strong>ԳՈՅՈՒԹՅԱՆ ՊԱՐՏԱԴԻՐ ՊԱՅՄԱՆ․</strong> $a$-ի մոդուլային հակադարձը գոյություն ունի <strong>այն և միայն այն դեպքում, երբ $a$-ն և $n$-ը փոխադարձաբար պարզ են՝ $\\gcd(a, n) = 1$</strong>։</p>
    <p><strong>Մոդուլային աստիճան (Square-and-Multiply)․</strong> $a^b \\pmod n$ արտահայտությունը կարելի է հաշվել չափազանց արագ՝ քառակուսի բարձրացնելու ալգորիթմով ($O(\\log b)$ քայլերով), առանց հսկայական միջանկյալ թվեր ստանալու։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Լուծված օրինակ․ Էվկլիդեսի ալգորիթմ և մոդուլային հակադարձ</h4>
    <p><strong>1. Գտնել $\\gcd(252, 105)$․</strong></p>
    <ul>
        <li>$252 = 2 \\times 105 + 42 \\implies \\gcd(252, 105) = \\gcd(105, 42)$</li>
        <li>$105 = 2 \\times 42 + 21 \\implies \\gcd(105, 42) = \\gcd(42, 21)$</li>
        <li>$42 = 2 \\times 21 + 0 \\implies \\gcd(42, 21) = \\mathbf{21}$։</li>
    </ul>
    <p><strong>2. Գտնել $3$-ի հակադարձը $\\pmod 7$․</strong></p>
    <p>Փնտրում ենք $x$, որ $3x \\equiv 1 \\pmod 7$։ Ստուգենք մնացորդները․</p>
    <ul>
        <li>$3 \\times 1 = 3 \\not\\equiv 1$</li>
        <li>$3 \\times 2 = 6 \\not\\equiv 1$</li>
        <li>$3 \\times 3 = 9 \\equiv 2$</li>
        <li>$3 \\times 4 = 12 \\equiv 5$</li>
        <li>$3 \\times 5 = 15 = 2 \\times 7 + 1 \\equiv \\mathbf{1 \\pmod 7}$</li>
    </ul>
    <p>Ուստի $3$-ի մոդուլային հակադարձն է $x = \\mathbf{5}$։</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Տարածված սխալ</h4>
    <p><strong>Սխալ․</strong> Համեմատության երկու կողմերը բաժանել թվի վրա առանց ստուգելու փոխադարձաբար պարզ լինելը։ Օրինակ՝ $2x \\equiv 2 \\pmod 4 \\implies x \\equiv 1 \\pmod 4$։</p>
    <p><strong>Իրականություն․</strong> $2x \\equiv 2 \\pmod 4$-ի լուծումներն են ինչպես $x = 1$, այնպես էլ $x = 3$ ($2 \\times 3 = 6 \\equiv 2 \\pmod 4$)։ Կրճատել կարելի է միայն այն ժամանակ, երբ բաժանարարը փոխադարձաբար պարզ է մոդուլի հետ։</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Գոյություն ունի՞ արդյոք $4$-ի մոդուլային հակադարձը $\\pmod{10}$։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Ոչ։ Քանի որ $\\gcd(4, 10) = 2 \\ne 1$, $4$-ը և $10$-ը փոխադարձաբար պարզ չեն։ Ցանկացած $4x$ թիվ զույգ է, ուստի $4x - 1$-ը միշտ կենտ է և երբեք չի կարող բաժանվել 10-ի վրա։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
When passwords, payments, or medical data traverse the internet, security is guarded not by physical vault doors, but by <strong>abstract algebra and number theory</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-divide"></i> 1. Divisibility and Prime Numbers</h4>
    <p>An integer $b$ is divisible by non-zero integer $a$ ($a \\mid b$) if $b = a \\cdot k$ for some $k \\in \\mathbb{Z}$.</p>
    <p><strong>Prime Number:</strong> An integer $p > 1$ whose only positive divisors are $1$ and $p$.</p>
    <p><strong>Fundamental Theorem of Arithmetic:</strong> Every integer $n > 1$ factors uniquely into prime powers: $n = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-project-diagram"></i> 2. Greatest Common Divisor and the Euclidean Algorithm</h4>
    <p>The greatest common divisor $\\gcd(a, b)$ is efficiently computed using the <strong>Euclidean Algorithm</strong>:</p>
    $$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$
    <p>If $\\gcd(a, b) = 1$, $a$ and $b$ are called <strong>coprime</strong>.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-clock"></i> 3. Modular Arithmetic and Congruence</h4>
    <p>We write $a \\equiv b \\pmod n$ if $n$ divides $(a - b)$, meaning $a$ and $b$ leave the same remainder when divided by $n$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-key"></i> 4. Modular Multiplicative Inverse</h4>
    <p>The inverse of $a$ modulo $n$ is an integer $x$ such that:</p>
    $$a \\cdot x \\equiv 1 \\pmod n$$
    <p><strong>EXISTENCE CONDITION:</strong> The modular inverse exists <strong>if and only if $\\gcd(a, n) = 1$</strong>.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Worked Example: Inverse of 3 Modulo 7</h4>
    <p>Find $x$ such that $3x \\equiv 1 \\pmod 7$. Checking values: $3 \\times 5 = 15 = 2 \\times 7 + 1 \\equiv 1 \\pmod 7$. Thus, the modular inverse is $x = \\mathbf{5}$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Common Pitfall</h4>
    <p><strong>Mistake:</strong> Dividing out common factors without coprimality: $2x \\equiv 2 \\pmod 4$ has solutions $x \\equiv 1$ and $x \\equiv 3 \\pmod 4$.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Does 4 have a modular inverse modulo 10?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> No. Since $\\gcd(4, 10) = 2 \\ne 1$, 4 and 10 are not coprime. For any integer $x$, $4x$ is even, so $4x - 1$ is odd and can never be a multiple of 10.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
При передаче паролей или банковских платежей безопасность обеспечивается не механическими сейфами, а <strong>абстрактной алгеброй и теорией чисел</strong>.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-divide"></i> 1. Делимость и простые числа</h4>
    <p>Число $a$ делит $b$ ($a \\mid b$), если $b = a \\cdot k$. Простое число имеет ровно два делителя: 1 и само себя.</p>
    <p><strong>Основная теорема арифметики:</strong> Любое число $n > 1$ единственным образом раскладывается на простые множители.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-project-diagram"></i> 2. Алгоритм Евклида</h4>
    $$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$
    <p>Если $\\gcd(a, b) = 1$, числа называются <strong>взаимно простыми</strong>.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-clock"></i> 3. Модульная арифметика</h4>
    <p>$a \\equiv b \\pmod n \\iff n \\mid (a - b)$.</p>
</div>

<div class="theory-callout">
    <h4><i class="fas fa-key"></i> 4. Обратный элемент по модулю</h4>
    $$a \\cdot x \\equiv 1 \\pmod n$$
    <p><strong>Условие существования:</strong> обратный элемент существует <strong>тогда и только тогда, когда $\\gcd(a, n) = 1$</strong>.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-check-circle"></i> Пример: обратный элемент к 3 по модулю 7</h4>
    <p>$3 \\times 5 = 15 = 2 \\times 7 + 1 \\equiv 1 \\pmod 7 \\implies x = 5$.</p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-exclamation-triangle"></i> Типичная ошибка</h4>
    <p><strong>Ошибка:</strong> Сокращать модульные сравнения на делитель, не являющийся взаимно простым с модулем.</p>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: существует ли обратный к 4 по модулю 10?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Нет, так как $\\gcd(4, 10) = 2 \\ne 1$.
    </div>
</details>
"""
                }
            },
            {
                "id": "algebra-crypto-rsa-keys",
                "title": {
                    "hy": "Հանրային բանալիներ, RSA ալգորիթմի օրինակ և իրական կրիպտոգրաֆիա",
                    "en": "Public Keys, RSA Algorithm Step-by-Step, and Real-World Cryptography",
                    "ru": "Открытые ключи, алгоритм RSA и реальная криптография"
                },
                "content": {
                    "hy": r"""
<p class="theory-lead">
Մինչև 1970-ական թվականները գաղտնագրությունը պահանջում էր, որ հաղորդագրություն ուղարկողն ու ստացողը նախապես գաղտնի կերպով փոխանակեն նույն բանալին (Սիմետրիկ կրիպտոգրաֆիա)։ Հեղափոխությունը տեղի ունեցավ, երբ Ռոն Ռիվեստը, Ադի Շամիրը և Լեոնարդ Ադլմանը 1977 թ․ ստեղծեցին <strong>RSA ալգորիթմը</strong>՝ հիմնված ասիմետրիկ բանալիների և պարզ թվերի վրա։
</p>

<div class="theory-callout">
    <h4><i class="fas fa-unlock-alt"></i> Ասիմետրիկ կրիպտոգրաֆիայի հիմնական գաղափարը</h4>
    <p>Յուրաքանչյուր օգտատեր ունի <strong>երկու բանալի</strong>․</p>
    <ul>
        <li><strong>Բաց (հանրային) բանալի (Public Key)․</strong> Հասանելի է բոլորին։ Ցանկացած մարդ կարող է դրանով կողպել (կոդավորել) հաղորդագրությունը։</li>
        <li><strong>Փակ (գաղտնի) բանալի (Private Key)․</strong> Պահվում է միայն սեփականատիրոջ մոտ։ Միայն այս բանալին կարող է բացել (վերծանել) կողպված հաղորդագրությունը։</li>
    </ul>
    <p>Այս համակարգը հիմնված է «միակողմանի ֆունկցիայի» (One-way Trapdoor function) վրա․ երկու մեծ պարզ թվեր բազմապատկելը հեշտ է, բայց նրանց արտադրյալը պարզ արտադրիչների վերլուծելը (ֆակտորիզացիա) չափազանց բարդ է։</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-calculator"></i> RSA ալգորիթմի քայլ առ քայլ ուսումնական օրինակ</h4>
    <p><strong>Քայլ 1․ Ընտրում ենք երկու պարզ թիվ․</strong></p>
    $$p = 7, \\quad q = 11$$
    <p><strong>Քայլ 2․ Հաշվում ենք մոդուլը $n$․</strong></p>
    $$n = p \\cdot q = 7 \\cdot 11 = \\mathbf{77}$$
    <p><strong>Քայլ 3․ Հաշվում ենք Էյլերի ֆունկցիան $\\phi(n)$․</strong></p>
    $$\\phi(n) = (p - 1)(q - 1) = (7 - 1)(11 - 1) = 6 \\cdot 10 = \\mathbf{60}$$
    <p><strong>Քայլ 4․ Ընտրում ենք բաց ցուցիչը $e$․</strong></p>
    <p>Անհրաժեշտ է, որ $1 < e < 60$ և $\\gcd(e, 60) = 1$։ Ընտրենք $\\mathbf{e = 7}$ (քանի որ $\\gcd(7, 60) = 1$)։</p>
    <p><strong>Քայլ 5․ Հաշվում ենք փակ ցուցիչը $d$ (մոդուլային հակադարձը)․</strong></p>
    $$e \\cdot d \\equiv 1 \\pmod{\\phi(n)} \\implies 7d \\equiv 1 \\pmod{60}$$
    <p>Գտնենք $d$-ն Էվկլիդեսի ընդլայնված ալգորիթմով․ $7 \\times 43 = 301 = 5 \\times 60 + 1 \\equiv 1 \\pmod{60}$։ Ուստի $\\mathbf{d = 43}$։</p>
    <div style="background: rgba(168,85,247,0.1); padding: 10px; border-radius: 8px; margin: 10px 0;">
        <strong>Բաց բանալի․</strong> $(e, n) = (7, 77)$<br>
        <strong>Փակ բանալի․</strong> $(d, n) = (43, 77)$
    </div>
    <p><strong>Քայլ 6․ Կոդավորում (Encryption)․</strong></p>
    <p>Ենթադրենք ցանկանում ենք ուղարկել $m = 9$ գաղտնի թիվը ($m < n$)․</p>
    $$c = m^e \\bmod n = 9^7 \\bmod 77$$
    <p>Հաշվենք աստիճանը․ $9^2 = 81 \\equiv 4 \\pmod{77}$, $9^4 \\equiv 4^2 = 16$, $9^7 = 9^4 \\cdot 9^2 \\cdot 9 \\equiv 16 \\cdot 4 \\cdot 9 = 576$։</p>
    $$576 = 7 \\times 77 + 37 \\implies \\mathbf{c = 37 \\text{ (Գաղտնագրված հաղորդագրությունը)}}$$
    <p><strong>Քայլ 7․ Վերծանում (Decryption)․</strong></p>
    <p>Ստացողը վերծանում է իր փակ $d = 43$ բանալիով․</p>
    $$m' = c^d \\bmod n = 37^{43} \\bmod 77$$
    <p>Մոդուլային հաշվարկը տալիս է․ $m' = \\mathbf{9}$։</p>
    <p><strong>Սկզբնական հաղորդագրությունը լիովին վերականգնված է։</strong></p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-shield-alt"></i> Կարևոր նախազգուշացում․ Ուսումնական vs Իրական կիրառություն</h4>
    <p><strong>Ուշադրություն․</strong> Վերևում բերված փոքր թվերով ($p=7, q=11$) օրինակը <strong>միայն ու միայն ուսուցողական նպատակով է</strong>։ Ցանկացած համակարգիչ $n = 77$-ը կարող է վայրկյանի միլիոներորդական մասում վերլուծել պարզ արտադրիչների։</p>
    <p><strong>Իրական անվտանգության պահանջները․</strong></p>
    <ul>
        <li>Իրական RSA-ում $p$ և $q$ թվերը ընտրվում են հսկայական՝ առնվազն 1024-ից 2048 բիթ երկարությամբ (ավելի քան 300-600 տասնորդական թվանշան)։ $n$-ը պետք է լինի առնվազն 2048 կամ 4096 բիթ։</li>
        <li>Երբեք չի կիրառվում «պարզամիտ» (textbook) RSA։ Պարտադիր է կիրառել ստուգված լիցքավորման սխեմաներ (օրինակ՝ <strong>OAEP</strong> — Optimal Asymmetric Encryption Padding), որպեսզի կանխվեն մաթեմատիկական հարձակումները։</li>
        <li>Ծածկագրումը միշտ իրականացվում է միջազգային ստուգված գրադարաններով (OpenSSL, WebCrypto)։</li>
    </ul>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-layer-group"></i> Կարևոր տարբերակում․ Գաղտնագրում, Հեշավորում և Թվային ստորագրություն</h4>
    <p>Այս երեքը հաճախ շփոթում են, սակայն դրանք սկզբունքորեն տարբեր գործողություններ են․</p>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Հասկացություն</th><th>Ի՞նչ է անում</th><th>Հետադարձելի՞ է</th><th>Նպատակը</th></tr>
        <tr><td><strong>Գաղտնագրում (Encryption)</strong></td><td>Տեքստը վերածում է անընթեռնելի ծածկագրի բանալիով</td><td><strong>Այո</strong> (փակ բանալիով վերծանվում է)</td><td>Գաղտնիություն (Confidentiality)</td></tr>
        <tr><td><strong>Հեշավորում (Hashing)</strong></td><td>Կամայական ծավալի տվյալներից ստանում է ֆիքսված երկարության մատնահետք (օր․՝ SHA-256)</td><td><strong>ՈՉ (Միակողմանի է)</strong></td><td>Ամբողջականության ստուգում (Integrity)</td></tr>
        <tr><td><strong>Թվային ստորագրություն (Digital Signature)</strong></td><td>Հաղորդագրության հեշը կոդավորվում է հեղինակի <em>փակ</em> բանալիով</td><td>Ստուգվում է հեղինակի <em>բաց</em> բանալիով</td><td>Նույնականացում և անհերքելիություն (Authenticity)</td></tr>
    </table>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Ինքնաստուգման հարց․ Ինչո՞ւ չի կարելի գաղտնաբառերը պահել բազայում գաղտնագրված տեսքով, այլ պետք է պահել հեշավորված։</summary>
    <div class="selftest-answer">
        <strong>Պատասխան․</strong> Եթե գաղտնաբառերը գաղտնագրված են, ապա գոյություն ունի վերծանման բանալի։ Եթե հաքերը գողանա բազան և բանալին, նա կիմանա բոլոր օգտատերերի գաղտնաբառերը։ Իսկ հեշավորումը միակողմանի է (անշրջելի)․ նույնիսկ հեշը գողանալու դեպքում սկզբնական գաղտնաբառը մաթեմատիկորեն անհնար է հետ վերականգնել։
    </div>
</details>
""",
                    "en": r"""
<p class="theory-lead">
Until the 1970s, cryptography required both sender and receiver to share an identical secret key in advance (Symmetric Cryptography). The paradigm shifted in 1977 when Ron Rivest, Adi Shamir, and Leonard Adleman created the <strong>RSA cryptosystem</strong>, utilizing asymmetric number-theoretic trapdoors.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-unlock-alt"></i> Core Concept of Asymmetric Cryptography</h4>
    <p>Each participant controls a <strong>key pair</strong>:</p>
    <ul>
        <li><strong>Public Key:</strong> Freely disseminated. Anyone can use it to encrypt a message.</li>
        <li><strong>Private Key:</strong> Kept strictly confidential. Only this key can decrypt the message.</li>
    </ul>
    <p>Security rests upon an algebraic trapdoor: multiplying two prime numbers is computationally trivial, but factoring their product back into primes is sub-exponentially intractable.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-calculator"></i> Step-by-Step Educational RSA Walkthrough</h4>
    <p><strong>Step 1: Choose two primes:</strong> $p = 7, \\, q = 11$.</p>
    <p><strong>Step 2: Compute modulus:</strong> $n = p \\cdot q = 7 \\cdot 11 = \\mathbf{77}$.</p>
    <p><strong>Step 3: Compute Euler's totient:</strong> $\\phi(n) = (p-1)(q-1) = 6 \\cdot 10 = \\mathbf{60}$.</p>
    <p><strong>Step 4: Choose public exponent $e$:</strong> Select $e = 7$, satisfying $\\gcd(7, 60) = 1$.</p>
    <p><strong>Step 5: Compute private exponent $d$:</strong> Solve $7d \\equiv 1 \\pmod{60}$. Since $7 \\times 43 = 301 = 5 \\times 60 + 1$, $\\mathbf{d = 43}$.</p>
    <p>Public Key: $(e, n) = (7, 77)$. Private Key: $(d, n) = (43, 77)$.</p>
    <p><strong>Step 6: Encryption:</strong> Message $m = 9$. Ciphertext $c = m^e \\bmod n = 9^7 \\bmod 77 = \\mathbf{37}$.</p>
    <p><strong>Step 7: Decryption:</strong> $m' = c^d \\bmod n = 37^{43} \\bmod 77 = \\mathbf{9}$.</p>
    <p><strong>The original plaintext is verified and restored.</strong></p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-shield-alt"></i> Crucial Warning: Educational vs Real-World Implementations</h4>
    <p><strong>Educational Toy:</strong> The small numbers ($p=7, q=11$) above are strictly for conceptual demonstration.</p>
    <p><strong>Production Security Standards:</strong></p>
    <ul>
        <li>Modern RSA uses 2048-bit to 4096-bit moduli (600+ decimal digits).</li>
        <li>"Textbook RSA" is never deployed directly. Randomized padding schemes such as <strong>OAEP</strong> (Optimal Asymmetric Encryption Padding) are mandatory to protect against chosen-ciphertext and algebraic attacks.</li>
        <li>Always employ peer-reviewed cryptographic libraries (WebCrypto, OpenSSL).</li>
    </ul>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-layer-group"></i> Critical Distinctions: Encryption, Hashing, Digital Signatures</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Concept</th><th>Function</th><th>Reversibility</th><th>Core Purpose</th></tr>
        <tr><td><strong>Encryption</strong></td><td>Transforms plaintext into ciphertext via key</td><td><strong>Yes (with private key)</strong></td><td>Confidentiality</td></tr>
        <tr><td><strong>Hashing</strong></td><td>Generates fixed-size digest (e.g. SHA-256)</td><td><strong>No (strictly one-way)</strong></td><td>Integrity verification</td></tr>
        <tr><td><strong>Digital Signature</strong></td><td>Hash encrypted with signer's <em>private</em> key</td><td>Verified using signer's <em>public</em> key</td><td>Authenticity & non-repudiation</td></tr>
    </table>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Self-Test Question: Why are passwords hashed rather than encrypted?</summary>
    <div class="selftest-answer">
        <strong>Answer:</strong> Encryption is reversible and requires a decryption key. If an attacker breaches the database and discovers the key, all passwords are compromised. Hashing is irreversible; even with full database access, recovering original passwords requires impractical brute-force inversion.
    </div>
</details>
""",
                    "ru": r"""
<p class="theory-lead">
До 1970-х годов шифрование требовало тайного предварительного обмена одинаковым ключом (симметричные шифры). Революцией стало появление в 1977 году <strong>криптосистемы RSA</strong> (Ривест, Шамир, Адлеман), основанной на асимметричных ключах и теории чисел.
</p>

<div class="theory-callout">
    <h4><i class="fas fa-unlock-alt"></i> Принцип асимметричной криптографии</h4>
    <ul>
        <li><strong>Открытый ключ (Public Key):</strong> Доступен всем. Любой может зашифровать им сообщение.</li>
        <li><strong>Закрытый ключ (Private Key):</strong> Хранится в строжайшей тайне у владельца. Только он может расшифровать сообщение.</li>
    </ul>
    <p>В основе лежит односторонняя функция: перемножить два больших простых числа вычислительно легко, но факторизовать их произведение обратно на множители практически невозможно.</p>
</div>

<div class="example-box">
    <h4><i class="fas fa-calculator"></i> Пошаговый учебный пример RSA</h4>
    <ol>
        <li>Простые числа: $p = 7, \\, q = 11$.</li>
        <li>Модуль: $n = 7 \\cdot 11 = \\mathbf{77}$.</li>
        <li>Функция Эйлера: $\\phi(n) = (7 - 1)(11 - 1) = \\mathbf{60}$.</li>
        <li>Открытая экспонента: $e = 7$ (так как $\\gcd(7, 60) = 1$).</li>
        <li>Закрытая экспонента: $7d \\equiv 1 \\pmod{60} \\implies \\mathbf{d = 43}$ ($7 \\times 43 = 301 = 5 \\times 60 + 1$).</li>
        <li>Открытый ключ: $(7, 77)$. Закрытый ключ: $(43, 77)$.</li>
        <li>Шифрование $m = 9$: $c = 9^7 \\bmod 77 = \\mathbf{37}$.</li>
        <li>Расшифрование: $m' = 37^{43} \\bmod 77 = \\mathbf{9}$.</li>
    </ol>
    <p><strong>Исходное сообщение успешно восстановлено!</strong></p>
</div>

<div class="pitfall-box">
    <h4><i class="fas fa-shield-alt"></i> Важное предупреждение: учебный пример vs реальная криптография</h4>
    <p><strong>Внимание:</strong> Малые числа ($p=7, q=11$) служат <strong>исключительно для обучения</strong>.</p>
    <ul>
        <li>В реальном RSA используются ключи размером от 2048 до 4096 бит (сотни десятичных знаков).</li>
        <li>«Чистый» RSA в продакшене не используется: обязательно применение схем дополнения (OAEP) для защиты от алгебраических атак.</li>
    </ul>
</div>

<div class="theory-callout" style="border-left-color: #38bdf8;">
    <h4><i class="fas fa-layer-group"></i> Разграничение: шифрование, хеширование, электронная подпись</h4>
    <table class="theory-table" style="width: 100%;">
        <tr><th>Понятие</th><th>Действие</th><th>Обратимость</th><th>Цель</th></tr>
        <tr><td><strong>Шифрование</strong></td><td>Превращение в шифротекст ключом</td><td><strong>Да (закрытым ключом)</strong></td><td>Конфиденциальность</td></tr>
        <tr><td><strong>Хеширование</strong></td><td>Сжатие данных в фиксированный дайджест (SHA-256)</td><td><strong>Нет (строго одностороннее)</strong></td><td>Проверка целостности</td></tr>
        <tr><td><strong>Электронная подпись</strong></td><td>Хеш шифруется <em>закрытым</em> ключом автора</td><td>Проверяется <em>открытым</em> ключом</td><td>Аутентификация и авторство</td></tr>
    </table>
</div>

<details class="selftest-box">
    <summary><i class="fas fa-question-circle"></i> Вопрос для самопроверки: почему пароли в базах данных хешируют, а не шифруют?</summary>
    <div class="selftest-answer">
        <strong>Ответ:</strong> Шифрование обратимо и требует ключа. При утечке ключа все пароли раскрываются. Хеширование необратимо: восстановить исходный пароль из хеша математически невозможно.
    </div>
</details>
"""
                }
            }
        ]
    }
