/* Search the source text without hydrating all lessons; terms open in a native dialog. */
(function () {
    const copy = {
        search:['Որոնել տեսության մեջ','Search the theory','Поиск по теории'], placeholder:['Օրինակ՝ Բայես, ինտեգրալ, ստանդարտ սխալ…','For example: Bayes, integral, standard error…','Например: Байес, интеграл, стандартная ошибка…'],
        results:['Գտնված բաժիններ','Matching sections','Найденные разделы'], noResults:['Համապատասխան բաժին չի գտնվել։','No matching sections.','Подходящих разделов не найдено.'],
        glossary:['Տերմինների բառարան','Glossary','Словарь терминов'], close:['Փակել','Close','Закрыть'], termsSearch:['Որոնել տերմինը','Search terms','Найти термин'],
        source:['Լրացուցիչ ընթերցանություն','Further reading','Дополнительное чтение'], count:['Ցուցադրված / գտնված','Shown / found','Показано / найдено'],
    };
    const terms = {
        monteCarlo: {name:['Մոնտե Կառլոյի մեթոդ','Monte Carlo method','Метод Монте-Карло'],definition:['Պատահական ընտրանքներով թվային գնահատում ստանալու մեթոդների ընտանիք։ Օրինակ՝ ինտեգրալը կարելի է գնահատել ֆունկցիայի պատահական արժեքների միջինով։','A family of numerical methods using random samples. For example, an integral can be estimated from the mean of randomly sampled function values.','Семейство численных методов, использующих случайные выборки. Например, интеграл оценивают средним значений функции в случайных точках.']},
        integral: {name:['Որոշյալ ինտեգրալ','Definite integral','Определённый интеграл'],definition:['Ֆունկցիայի կուտակված ազդեցությունը միջակայքում։ Երկրաչափորեն հաշվում է նշանով մակերեսը․ առանցքից ներքևի մասը բացասական ներդրում ունի։','Accumulated effect of a function over an interval. Geometrically it gives signed area; regions below the axis contribute negatively.','Накопленный эффект функции на интервале. Геометрически это площадь со знаком: область под осью даёт отрицательный вклад.']},
        seed: {name:['Սկզբնարժեք (seed)','Seed','Начальное значение (seed)'],definition:['Կեղծ պատահական թվերի գեներատորի սկզբնական կարգավորումը։ Նույն գեներատորը, seed-ը և գործողությունների հերթականությունը կրկնում են ընտրանքը։ Seed-ը ճշտության երաշխիք չէ։','Initial setting of a pseudorandom generator. The same generator, seed and sequence of operations reproduce the sample. A seed does not guarantee accuracy.','Начальная настройка генератора псевдослучайных чисел. Одинаковые генератор, seed и порядок операций воспроизводят выборку. Seed не гарантирует точность.']},
        estimate: {name:['Գնահատում / մոտարկում','Estimate / approximation','Оценка / приближение'],definition:['Ընտրանքից հաշվարկված արժեք, որն օգտագործվում է անհայտ կամ դժվար հաշվվող մեծությունը մոտավոր ներկայացնելու համար։','A value calculated from a sample to approximate an unknown or difficult-to-compute quantity.','Значение, рассчитанное по выборке для приближённого представления неизвестной или сложной для вычисления величины.']},
        absolute: {name:['Բացարձակ սխալ','Absolute error','Абсолютная ошибка'],definition:['|մոտարկում−ճշգրիտ արժեք|։ Հաշվելու համար պետք է իմանալ ճշգրիտ կամ վստահելի հղումային արժեքը։','|estimate−exact value|. Computing it requires an exact or reliable reference value.','|оценка−точное значение|. Для вычисления нужно точное или надёжное опорное значение.']},
        relative: {name:['Հարաբերական սխալ','Relative error','Относительная ошибка'],definition:['Բացարձակ սխալը բաժանած ճշգրիտ արժեքի բացարձակ մեծությանը։ Տոկոսներով արտահայտելիս բազմապատկվում է 100-ով։ Զրո հղումային արժեքի դեպքում սահմանված չէ։','Absolute error divided by the magnitude of the exact value; multiply by 100 for a percentage. Undefined when the reference is zero.','Абсолютная ошибка, делённая на модуль точного значения; для процентов умножают на 100. При нулевом опорном значении не определена.']},
        se: {name:['Ստանդարտ սխալ (SE)','Standard error (SE)','Стандартная ошибка (SE)'],definition:['Գնահատման ընտրանքային տատանման չափը։ Անկախ ընտրանքի միջինի համար մոտավոր SE=s/√N, իսկ ինտեգրալի դեպքում՝ |b−a|s/√N։ Սա առանձին փորձի փաստացի սխալը չէ։','Measures sampling variability of an estimator. For an independent sample mean, estimated SE=s/√N; for the integral it is |b−a|s/√N. It is not the actual error of one run.','Характеризует случайный разброс оценки. Для среднего независимой выборки SE≈s/√N, для интеграла — |b−a|s/√N. Это не фактическая ошибка отдельного опыта.']},
        ci: {name:['Վստահության միջակայք','Confidence interval','Доверительный интервал'],definition:['Ընտրանքից կառուցվող միջակայք։ Օրինակ՝ 95% մեթոդի միջակայքերը նույն պայմաններով կրկնելիս երկարաժամկետ մոտ 95%-ը պարունակում է իրական արժեքը։ Փոքր ընտրանքի կամ անհամապատասխան ենթադրությունների դեպքում մոտարկումը կարող է անվստահելի լինել։','An interval constructed from a sample. With a valid 95% procedure, about 95% of intervals in repeated use cover the true value. Small samples or unsuitable assumptions can make an approximation unreliable.','Интервал, построенный по выборке. При корректной 95% процедуре около 95% интервалов при повторном использовании содержат истинное значение. Малые выборки или неверные предположения могут сделать приближение ненадёжным.']},
        variance: {name:['Դիսպերսիա','Variance','Дисперсия'],definition:['Միջինից շեղումների քառակուսիներով չափվող ցրվածություն։ Ընտրանքային ուղղված գնահատման մեջ քառակուսային շեղումների գումարը բաժանվում է N−1-ի։','Dispersion measured by squared deviations from the mean. The unbiased sample estimate divides the sum of squared deviations by N−1.','Разброс, измеряемый квадратами отклонений от среднего. Исправленная выборочная оценка делит сумму квадратов отклонений на N−1.']},
        n: {name:['Ընտրանքի քանակ N','Sample size N','Размер выборки N'],definition:['Փորձում օգտագործված պատահական արժեքների քանակը։ Անկախ, վերջավոր դիսպերսիայով միջինների դեպքում SE-ն սովորաբար մասշտաբավորվում է 1/√N-ով։','Number of random values used in an experiment. For independent averages with finite variance, SE typically scales as 1/√N.','Число случайных значений в опыте. Для независимых средних с конечной дисперсией SE обычно меняется как 1/√N.']},
        repetitions: {name:['Անկախ կրկնություններ','Independent repetitions','Независимые повторы'],definition:['Նույն պայմաններով, նոր պատահական ընտրանքներով առանձին փորձեր։ Դրանց համեմատությունը ցույց է տալիս արդյունքների տատանումը։','Separate experiments with the same settings and fresh random samples. Comparing them shows result variability.','Отдельные опыты с одинаковыми условиями и новыми случайными выборками. Сравнение показывает разброс результатов.']},
        lln: {name:['Մեծ թվերի օրենք','Law of large numbers','Закон больших чисел'],definition:['Համապատասխան պայմաններում ընտրանքային միջինը մեծ N-ի դեպքում մոտենում է մաթեմատիկական սպասմանը։ Օրենքը չի պահանջում, որ ամեն հաջորդ քայլը լինի ավելի ճշգրիտ։','Under suitable conditions, the sample mean approaches the expectation as N grows. It does not require every next step to be more accurate.','При подходящих условиях выборочное среднее приближается к математическому ожиданию с ростом N. Каждый следующий шаг не обязан быть точнее.']},
    };
    const language = () => ({hy:0,en:1,ru:2})[typeof currentLang==='undefined'?'hy':currentLang] ?? 0;
    const tr = arr => arr[language()];
    const t = k => tr(copy[k]);
    const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
    const normalize = s => String(s).normalize('NFKC').toLocaleLowerCase().replace(/\s+/g,' ').trim();
    let searchRoot, dialog, selectedTerm='monteCarlo', timer;
    const indexes=new Map();
    function index() {
        const key=language(); if(indexes.has(key))return indexes.get(key);
        const parser=new DOMParser(), list=[];
        for(const chapter of window.probabilityData?.theory || [])for(const section of chapter.subsections || []) {
            const lang=typeof currentLang==='undefined'?'hy':currentLang;
            const title=section.title[lang]||section.title.hy||section.title.en;
            const body=parser.parseFromString(section.content[lang]||section.content.hy||section.content.en||'','text/html').body.textContent;
            list.push({id:section.id,title,chapter:chapter.title[lang]||chapter.title.hy,body,searchTitle:normalize(title),searchBody:normalize(body)});
        }
        indexes.set(key,list);return list;
    }
    function search() {
        if(!searchRoot)return;
        const query=normalize(searchRoot.querySelector('input').value), results=searchRoot.querySelector('[data-theory-results]'), status=searchRoot.querySelector('[role=status]');
        if(!query){results.innerHTML='';results.hidden=true;status.textContent='';return;}
        const words=query.split(' '), matches=index().filter(row=>words.every(w=>row.searchTitle.includes(w)||row.searchBody.includes(w))).sort((a,b)=>Number(b.searchTitle.includes(query))-Number(a.searchTitle.includes(query)));
        const visible=matches.slice(0,12);
        status.textContent=matches.length?`${t('count')}: ${visible.length} / ${matches.length}`:t('noResults');
        results.innerHTML=visible.map(row=>{
            const pos=row.searchBody.indexOf(words[0]), start=Math.max(0,pos-45), snippet=row.body.replace(/\s+/g,' ').slice(start,start+180);
            return `<li><button type="button" data-search-section="${esc(row.id)}"><strong>${esc(row.title)}</strong><span>${esc(row.chapter)}</span><small>${esc(snippet)}…</small></button></li>`;
        }).join('');results.hidden=!visible.length;
    }
    function renderTerms() {
        if(!dialog)return;
        const query=normalize(dialog.querySelector('input').value);
        dialog.querySelector('[data-term-list]').innerHTML=Object.entries(terms).filter(([,v])=>normalize(tr(v.name)+' '+tr(v.definition)).includes(query)).map(([key,term])=>`<details ${key===selectedTerm?'open':''}><summary>${esc(tr(term.name))}</summary><p>${esc(tr(term.definition))}</p></details>`).join('');
    }
    window.showGlossary = function (term='monteCarlo') {
        if(!dialog)return;
        selectedTerm=terms[term]?term:'monteCarlo';dialog.querySelector('input').value='';renderTerms();
        if(!dialog.open)dialog.showModal();
        dialog.querySelector('details[open]')?.scrollIntoView({block:'nearest'});
    };
    window.refreshLearningLanguage = function () {
        if(searchRoot) {
            searchRoot.querySelector('label').textContent=t('search');
            searchRoot.querySelector('input').placeholder=t('placeholder');
            searchRoot.querySelector('[data-glossary-term]').textContent=t('glossary');search();
        }
        if(dialog) {
            dialog.querySelector('h2').textContent=t('glossary');dialog.querySelector('[data-close]').textContent=t('close');
            dialog.querySelector('input').placeholder=t('termsSearch');dialog.querySelector('input').setAttribute('aria-label',t('termsSearch'));renderTerms();
            dialog.querySelector('a').textContent=t('source')+' — Computational Statistics with R ↗';
        }
        const seedLabel=document.querySelector('label[for="def-input-seed"]');
        if(seedLabel)seedLabel.textContent=tr(terms.seed.name)+' (Monte Carlo)';
    };
    document.addEventListener('DOMContentLoaded',()=>{
        const theory=document.getElementById('theory');if(!theory)return;
        searchRoot=document.createElement('div');searchRoot.className='theory-search';searchRoot.setAttribute('role','search');
        searchRoot.innerHTML=`<label for="theory-search-input"></label><div class="theory-search-controls"><input type="search" id="theory-search-input" maxlength="120" autocomplete="off" aria-controls="theory-search-results"><button type="button" class="glow-btn secondary" data-glossary-term="monteCarlo"></button></div><p role="status"></p><ul id="theory-search-results" data-theory-results hidden></ul>`;
        theory.querySelector('.theory-track-tabs').before(searchRoot);
        searchRoot.querySelector('input').addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(search,150);});
        searchRoot.querySelector('input').addEventListener('keydown',event=>{
            if(event.key==='Escape')searchRoot.querySelector('[data-theory-results]').hidden=true;
            if(event.key==='ArrowDown'){event.preventDefault();searchRoot.querySelector('[data-search-section]')?.focus();}
            if(event.key==='Enter'){event.preventDefault();searchRoot.querySelector('[data-search-section]')?.click();}
        });
        searchRoot.addEventListener('click',event=>{const button=event.target.closest('[data-search-section]');if(button){scrollToTheory(button.dataset.searchSection);searchRoot.querySelector('[data-theory-results]').hidden=true;}});
        dialog=document.createElement('dialog');dialog.id='glossary-dialog';dialog.className='glossary-dialog';dialog.setAttribute('aria-labelledby','glossary-title');
        dialog.innerHTML='<div class="glossary-header"><h2 id="glossary-title"></h2><button type="button" class="glow-btn secondary small" data-close></button></div><input type="search" maxlength="80"><div data-term-list></div><p><a href="https://cswr.nrhstat.org/mci.html" target="_blank" rel="noopener noreferrer"></a></p>';
        document.body.append(dialog);dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());dialog.querySelector('input').addEventListener('input',renderTerms);
        document.addEventListener('click',event=>{const button=event.target.closest('[data-glossary-term]');if(button){event.preventDefault();window.showGlossary(button.dataset.glossaryTerm);}});
        window.refreshLearningLanguage();
    });
})();
