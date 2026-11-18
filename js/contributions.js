/* Submitted work and planned roles are deliberately recorded separately. */
(function () {
    const text = {
        title: ['Ով ինչ է արել', 'Who did what', 'Кто что сделал'],
        intro: ['Նախագծի մասնակիցները, նրանց ներկայացրած աշխատանքները և թեմաները բացատրող լրացուցիչ ընթերցանություն՝ Վիքիպեդիայից ու այլ բաց կայքերից։', 'Project participants, their submitted work, and supplementary explanations from Wikipedia and other public websites.', 'Участники проекта, представленные работы и дополнительные объяснения из Википедии и других открытых сайтов.'],
        project: ['Ուսումնական նախագիծ · 12 ԱԲ · 2026–2027', 'School project · Class 12 AB · 2026–2027', 'Учебный проект · 12 АБ · 2026–2027'],
        teacher: ['Նախագծի ղեկավար՝ Մ. Սարդարյան՝ ըստ ուսումնական պլանի։', 'Project supervisor: M. Sardaryan, as named in the project plan.', 'Руководитель проекта: М. Сардарян, согласно учебному плану.'],
        person: ['Մասնակից', 'Participant', 'Участник'],
        role: ['Դերը՝ ըստ պլանի', 'Role in the plan', 'Роль по плану'],
        work: ['Փաստացի ներկայացված աշխատանք', 'Actually submitted work', 'Представленная работа'],
        source: ['Լրացուցիչ ընթերցանություն', 'Further reading', 'Дополнительное чтение'],
        submitted: ['Ներկայացված նյութը', 'Submitted material', 'Представленный материал'],
        noLink: ['Նյութի հղում դեռ չկա', 'No material link yet', 'Ссылка на материал пока отсутствует'],
        print: ['Տպել / պահել PDF', 'Print / save as PDF', 'Печать / сохранить PDF'],
        notes: ['Նյութերի մասին', 'About the materials', 'О материалах'],
        duplicate: ['«Ստեփան.pdf» և «Դավիթ.pdf» անուններով ուղարկված ֆայլերը նույնական են․ երկուսն էլ Դավիթ Ասատրյանի ինտեգրալների աշխատանքն են։ Ստեփանի ներդրումը ներկայացված է նրա HTML ֆայլի հիման վրա։', 'The files supplied as “Ստեփան.pdf” and “Դավիթ.pdf” are identical and both contain David Asatryan’s integral report. Stepan’s contribution is described from his HTML file.', 'Файлы «Ստեփան.pdf» и «Դավիթ.pdf» идентичны: оба содержат работу Давида Асатряна об интегралах. Вклад Степана описан по его HTML-файлу.'],
        linkedNote: ['Մեսրոպի Google Docs փաստաթուղթը բացելու համար կարող է պահանջվել Google հաշիվ կամ ընթերցման թույլտվություն։', 'Opening Mesrop’s Google Docs document may require a Google account or reading permission.', 'Для открытия документа Месропа в Google Docs может потребоваться аккаунт Google или разрешение на чтение.'],
        codeNote: ['Արթուրի կոդը պահպանված է ուղարկված ալգորիթմներով։ Պատճենման ընթացքում ձևափոխված __name__ == "__main__" գործարկման պայմանը վերականգնված է։', 'Arthur’s code preserves the submitted algorithms. The __name__ == "__main__" entry condition, distorted by message formatting, has been restored.', 'В коде Артура сохранены присланные алгоритмы. Условие запуска __name__ == "__main__", искажённое форматированием сообщения, восстановлено.'],
    };
    const members = [
        {
            name: 'Խումարյան Գրիշա',
            role: ['Թիմի ղեկավար / կոորդինատոր', 'Team leader / coordinator', 'Руководитель команды / координатор'],
            work: ['Կատարել է նախագծի կայքի ստեղծման և զարգացման աշխատանքը՝ կազմակերպելով նյութերի տեղադրումն ու գործառույթների ավելացման ընթացքը։', 'Created and developed the project website, organizing the incorporation of materials and the addition of features.', 'Выполнил работу по созданию и развитию сайта проекта, организовав размещение материалов и добавление функций.'],
            status: ['Նախագծի կայք', 'Project website', 'Сайт проекта'],
            kind: 'confirmed', links: [
                {href:'index.html#home',label:['Բացել նախագծի կայքը','Open the project website','Открыть сайт проекта']},
                {href:'js/app.js',download:true,label:['Կայքի հիմնական կոդը (.js)','Main website code (.js)','Основной код сайта (.js)']}
            ],
        },
        {
            name: 'Կյուրեղյան Ստեփան',
            role: ['Մոդելավորող', 'Model designer', 'Моделировщик'],
            work: ['Ներկայացրել է «Monte Carlo π Lab» HTML սիմուլյացիան․ քառակուսու և քառորդ շրջանի մեջ պատահական կետերով π-ի մոտարկում, 100–100000 կետի ընտրություն, անիմացիա, դադար/շարունակել, զրոյացում, բացարձակ և տոկոսային սխալ։', 'Submitted the “Monte Carlo π Lab” HTML simulation: estimating π with random points in a square and quarter circle, 100–100000 samples, animation, pause/resume, reset, and absolute and percentage errors.', 'Представил HTML-симуляцию «Monte Carlo π Lab»: оценка π случайными точками в квадрате и четверти круга, 100–100000 точек, анимация, пауза/продолжение, сброс, абсолютная и процентная ошибки.'],
            status: ['HTML սիմուլյացիա', 'HTML simulation', 'HTML-симуляция'], kind: 'reviewed',
            links: [{ href: 'assets/contributions/stepan-pi.html', label: ['Բացել Ստեփանի HTML աշխատանքը', 'Open Stepan’s HTML submission', 'Открыть HTML-работу Степана'] }],
        },
        {
            name: 'Ասատրյան Դավիթ',
            role: ['Անալիտիկ՝ ինտեգրալների մասնագետ', 'Analyst: integral specialist', 'Аналитик: специалист по интегралам'],
            work: ['Ներկայացրել է ∫₀¹x²dx և ∫₀¹eˣdx ինտեգրալների աշխատանքը՝ Նյուտոն–Լեյբնիցի ճշգրիտ լուծումներով, Մոնտե Կառլոյի մոտարկումներով, առաջին հինգ ընտրանքի աղյուսակներով, N=5,10,100,1000,10000 համեմատությամբ և NumPy seed(0) կոդով։', 'Submitted a report on ∫₀¹x²dx and ∫₀¹eˣdx with exact Newton–Leibniz solutions, Monte Carlo estimates, the first five samples, comparisons at N=5,10,100,1000,10000, and NumPy seed(0) code.', 'Представил работу об интегралах ∫₀¹x²dx и ∫₀¹eˣdx с точными решениями по Ньютону–Лейбницу, оценками Монте-Карло, первыми пятью точками, сравнением при N=5,10,100,1000,10000 и кодом NumPy seed(0).'],
            status: ['PDF աշխատանք', 'PDF report', 'Работа в PDF'], kind: 'reviewed',
            links: [{ href:'assets/contributions/david-integrals.pdf', label:['Բացել Դավիթի PDF աշխատանքը', 'Open David’s PDF report', 'Открыть PDF-работу Давида'] }],
        },
        {
            name: 'Դանիելյան Արթուր',
            role: ['Ծրագրավորող', 'Programmer', 'Программист'],
            work: ['Ներկայացրել է NumPy-ով Python կոդ՝ π-ի մոտարկման համար [-1,1]² քառակուսում կետերի ընտրությամբ և x²-ի ինտեգրալի համար [0,2]-ում՝ ընտրանքի միջինով։ Կոդը գործարկում է 100000 փորձ և արդյունքները համեմատում π-ի ու 8/3-ի հետ՝ հաշվելով բացարձակ սխալը։', 'Submitted NumPy/Python code estimating π from points in the square [-1,1]² and integrating x² over [0,2] by the sample mean. The script runs 100000 samples and compares with π and 8/3 using absolute errors.', 'Представил код Python/NumPy для оценки π точками в квадрате [-1,1]² и интеграла x² на [0,2] методом выборочного среднего. Скрипт использует 100000 точек и сравнивает результаты с π и 8/3 по абсолютной ошибке.'],
            status: ['Python կոդ', 'Python code', 'Код Python'], kind: 'reviewed',
            links: [{href:'assets/contributions/arthur-monte-carlo.py',download:true,label:['Ներբեռնել Արթուրի Python կոդը','Download Arthur’s Python code','Скачать Python-код Артура']}],
        },
        {
            name: 'Կարապետյան Մեսրոպ',
            role: ['Վիճակագիր / ռիսկերի վերլուծաբան', 'Statistician / risk analyst', 'Статистик / аналитик рисков'],
            work: ['Վերլուծել է π-ի մոտարկման 20 Մոնտե Կառլոյի փորձ՝ N=100,1000,10000,100000 արժեքներից յուրաքանչյուրի համար 5 կրկնությամբ։ Ներկայացրել է առանձին արդյունքներն ու բացարձակ սխալանքները, միջին π-ի և միջին բացարձակ սխալանքի աղյուսակները։ Այդ փորձերում միջին բացարձակ սխալանքը նվազել է 0.099681-ից մինչև 0.003076։', 'Analyzed 20 Monte Carlo estimates of π: five repetitions each at N=100,1000,10000,100000. Presented individual estimates and absolute errors, plus tables of mean π and mean absolute error. Across these experiments, the mean absolute error decreased from 0.099681 to 0.003076.', 'Проанализировал 20 оценок π методом Монте-Карло: по пять повторов при N=100,1000,10000,100000. Представил отдельные оценки и абсолютные ошибки, таблицы среднего π и средней абсолютной ошибки. В этих опытах средняя абсолютная ошибка снизилась с 0.099681 до 0.003076.'],
            status: ['Վիճակագրական վերլուծություն', 'Statistical analysis', 'Статистический анализ'], kind: 'reviewed',
            links: [
                {href:'assets/contributions/mesrop-pi-analysis.html',label:['Բացել Մեսրոպի վերլուծությունն ու աղյուսակները','Open Mesrop’s analysis and tables','Открыть анализ и таблицы Месропа']},
                {href:'assets/contributions/mesrop-pi-analysis.csv',download:true,label:['Ներբեռնել 20 փորձերի տվյալները՝ CSV','Download the 20 experiments as CSV','Скачать данные 20 опытов в CSV']},
                {href:'https://docs.google.com/document/d/13DUP6UqVrntDlilQpOCy1FWjfMN-U61alg_3dRZcGVk/edit?usp=sharing',label:['Բացել Մեսրոպի Google Docs փաստաթուղթը','Open Mesrop’s Google Docs document','Открыть документ Месропа в Google Docs']}
            ],
        },
        {
            name: 'Հալևորյան Արեն',
            role: ['Վիզուալիզացիայի պատասխանատու', 'Visualization lead', 'Ответственный за визуализацию'],
            work: ['Աշխատանք դեռ չի ներկայացվել։', 'Work has not yet been submitted.', 'Работа пока не представлена.'],
            status: ['Աշխատանք դեռ չի ներկայացվել', 'Work not yet submitted', 'Работа пока не представлена'], kind: 'pending', links: [],
        },
    ];
    const readings = {
        monteCarlo: { href:'https://en.wikipedia.org/wiki/Monte_Carlo_method', publisher:'Wikipedia · EN', title:['Մոնտե Կառլոյի մեթոդը','Monte Carlo method','Метод Монте-Карло'], description:['Մեթոդի գաղափարը, պատմությունը և կիրառությունները։','The method’s idea, history and applications.','Идея метода, история и области применения.'] },
        monteCarloRu: { href:'https://ru.wikipedia.org/wiki/Метод_Монте-Карло', publisher:'Википедия · RU', title:['Մոնտե Կառլոյի մեթոդը՝ ռուսերեն','Monte Carlo method in Russian','Метод Монте-Карло на русском'], description:['Բացատրություն՝ պատահական փորձերի և թվային գնահատման օրինակներով։','An explanation with random experiments and numerical estimation examples.','Объяснение со случайными испытаниями и примерами численных оценок.'] },
        mathworld: { href:'https://mathworld.wolfram.com/MonteCarloMethod.html', publisher:'Wolfram MathWorld · EN', title:['Մեթոդի մաթեմատիկական ակնարկ','Mathematical overview of the method','Математический обзор метода'], description:['Համառոտ մաթեմատիկական տեղեկանք Մոնտե Կառլոյի մասին։','A concise mathematical reference on Monte Carlo.','Краткая математическая справка о методе Монте-Карло.'] },
        pi: { href:'https://www.101computing.net/estimating-pi-using-the-monte-carlo-method/', publisher:'101 Computing · EN', title:['π-ի գնահատումը պատահական կետերով','Estimating π with random points','Оценка π случайными точками'], description:['Քառակուսու և շրջանի մեթոդի բացատրություն ու ծրագրավորման օրինակ։','The square-and-circle method explained with a programming example.','Метод квадрата и круга с объяснением и примером программирования.'] },
        integration: { href:'https://en.wikipedia.org/wiki/Monte_Carlo_integration', publisher:'Wikipedia · EN', title:['Մոնտե Կառլոյով ինտեգրում','Monte Carlo integration','Интегрирование Монте-Карло'], description:['Որոշյալ ինտեգրալի գնահատումը պատահական ընտրանքով։','Estimating a definite integral using random samples.','Оценка определённого интеграла случайной выборкой.'] },
        textbook: { href:'https://cswr.nrhstat.org/mci.html', publisher:'Computational Statistics with R · EN', title:['Ինտեգրման մեթոդի բացատրությունը՝ դասագրքից','A textbook explanation of integration','Объяснение интегрирования из учебника'], description:['Ընտրանքի միջինով գնահատման բանաձևեր և օրինակներ։','Sample-mean estimation formulas and examples.','Формулы и примеры оценивания по выборочному среднему.'] },
        random: { href:'https://en.wikipedia.org/wiki/Pseudorandom_number_generator', publisher:'Wikipedia · EN', title:['Կեղծ պատահական թվերի գեներատոր','Pseudorandom number generator','Генератор псевдослучайных чисел'], description:['Ինչպես են ալգորիթմները ստեղծում պատահականին նման թվային հաջորդականություններ։','How algorithms generate sequences that resemble random numbers.','Как алгоритмы создают последовательности, похожие на случайные числа.'] },
        error: { href:'https://en.wikipedia.org/wiki/Standard_error', publisher:'Wikipedia · EN', title:['Ստանդարտ սխալը և ընտրանքի քանակը','Standard error and sample size','Стандартная ошибка и размер выборки'], description:['Գնահատման տատանման կապը ընտրանքի քանակի հետ։','How estimator variability relates to sample size.','Связь разброса оценки с размером выборки.'] },
        finance: { href:'https://en.wikipedia.org/wiki/Monte_Carlo_methods_in_finance', publisher:'Wikipedia · EN', title:['Մոնտե Կառլոյի մեթոդները ֆինանսներում','Monte Carlo methods in finance','Методы Монте-Карло в финансах'], description:['Ֆինանսական մոդելավորման մեջ պատահական սցենարների կիրառությունները։','Applications of random scenarios in financial modeling.','Применение случайных сценариев в финансовом моделировании.'] },
        visualization: { href:'https://en.wikipedia.org/wiki/Data_and_information_visualization', publisher:'Wikipedia · EN', title:['Տվյալների վիզուալիզացիա','Data and information visualization','Визуализация данных и информации'], description:['Տվյալների ներկայացումը գրաֆիկներով և այլ տեսողական ձևերով։','Presenting data through charts and other visual forms.','Представление данных графиками и другими визуальными средствами.'] },
    };
    const topicReadings = [['monteCarlo','monteCarloRu','mathworld'],['pi'],['integration','textbook'],['random'],['error','finance'],['visualization']];
    members.forEach((member, i) => { member.readingIds = topicReadings[i]; });
    window.projectReadings = readings;
    const lang = () => ({hy:0,en:1,ru:2})[typeof currentLang === 'undefined' ? 'hy' : currentLang] ?? 0;
    const tr = values => values[lang()];
    const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
    window.projectContributions = members;
    window.refreshContributionsLanguage = function () {
        const page = document.getElementById('contributions');
        if (!page) return;
        const t = key => escape(tr(text[key]));
        page.setAttribute('aria-label', tr(text.title));
        page.innerHTML = `<header class="contributions-heading"><p class="contributions-kicker">${t('project')}</p><h1 class="page-title">${t('title')}</h1><p>${t('intro')}</p><p>${t('teacher')}</p><button type="button" class="glow-btn secondary contributions-print">${t('print')}</button></header><div class="contributions-table-wrap" tabindex="0"><table class="contributions-table"><caption>${t('title')}</caption><thead><tr>${['person','role','work','source'].map(key=>`<th scope="col">${t(key)}</th>`).join('')}</tr></thead><tbody>${members.map(m=>`<tr><th scope="row">${escape(m.name)}<span class="contribution-status ${m.kind}">${escape(tr(m.status))}</span></th><td>${escape(tr(m.role))}</td><td>${escape(tr(m.work))}<div class="contribution-submission"><span>${t('submitted')}</span>${m.links.length ? '' : t('noLink')}${m.links.map(link=>`<a href="${escape(link.href)}" ${link.download?'download':'target="_blank" rel="noopener noreferrer"'}>${escape(tr(link.label))} ↗</a>`).join('')}</div></td><td>${m.readingIds.map(id=>{ const r=readings[id]; return `<div class="contribution-reading"><a href="${escape(r.href)}" target="_blank" rel="noopener noreferrer">${escape(tr(r.title))} ↗</a><span>${escape(r.publisher)}</span><p>${escape(tr(r.description))}</p></div>`; }).join('')}</td></tr>`).join('')}</tbody></table></div><details class="contributions-notes"><summary>${t('notes')}</summary>${['duplicate','linkedNote','codeNote'].map(key=>`<p>${t(key)}</p>`).join('')}</details>`;
        page.querySelector('.contributions-print').addEventListener('click', () => {
            const notes = page.querySelector('details'), wasOpen = notes.open;
            notes.open = true;
            window.addEventListener('afterprint', () => { notes.open = wasOpen; }, { once: true });
            window.print();
        });
    };
    document.addEventListener('DOMContentLoaded', window.refreshContributionsLanguage);
})();
