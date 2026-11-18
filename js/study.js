/* Side-by-side investigations and a small persistent predict/observe/explain notebook. */
(function () {
    const E = window.ResearchEngine;
    const copy = {
        title:['Հետազոտություն','Investigation','Исследование'], comparison:['Մեթոդների համեմատություն','Compare methods','Сравнение методов'],
        precision:['Որքա՞ն փորձ է պետք','How many samples?','Сколько нужно испытаний?'], seeds:['Փորձեր տարբեր seed-երով','Experiments with different seeds','Опыты с разными seed'],
        errors:['Սխալների բացատրություն','Understanding errors','Объяснение ошибок'], tasks:['Հետազոտական առաջադրանքներ','Research tasks','Исследовательские задания'],
        intro:['Համեմատիր արդյունքները, գնահատիր ճշտությունը և գրանցիր քո եզրակացությունը։','Compare results, assess precision and record your conclusion.','Сравните результаты, оцените точность и запишите вывод.'],
        mode:['Ուղղություն','Investigation','Направление'], expression:['Ֆունկցիա f(x)','Function f(x)','Функция f(x)'], a:['Ստորին սահման a','Lower bound a','Нижний предел a'], b:['Վերին սահման b','Upper bound b','Верхний предел b'],
        n:['Ընտրանքի / ենթամիջակայքերի քանակ','Samples / subintervals','Число точек / интервалов'], seed:['Սկզբնարժեք (seed)','Seed','Начальное значение (seed)'],
        epsilon:['Ցանկալի բացարձակ ճշտություն ε','Desired absolute precision ε','Желаемая абсолютная точность ε'], confidence:['Վստահության մակարդակ','Confidence level','Уровень доверия'],
        run:['Գործարկել հետազոտությունը','Run investigation','Запустить исследование'], busy:['Հաշվարկվում է…','Computing…','Вычисление…'],
        method:['Մեթոդ','Method','Метод'], estimate:['Մոտարկում','Estimate','Оценка'], evaluations:['f(x)-ի հաշվարկների քանակ','Function evaluations','Вычисления f(x)'],
        absolute:['Բացարձակ սխալ','Absolute error','Абсолютная ошибка'], relative:['Հարաբերական սխալ','Relative error','Относительная ошибка'], se:['Ստանդարտ սխալ (SE)','Standard error (SE)','Стандартная ошибка (SE)'], ci:['Մոտավոր վստահության միջակայք','Approximate confidence interval','Приблизительный доверительный интервал'],
        monte_carlo:['Մոնտե Կառլո','Monte Carlo','Монте-Карло'], trapezoid:['Սեղանների կանոն','Trapezoidal rule','Правило трапеций'], simpson:['Սիմպսոնի կանոն','Simpson’s rule','Правило Симпсона'],
        exact:['Նյուտոն–Լեյբնիցի արժեք','Newton–Leibniz value','Значение по Ньютону–Лейбницу'], reference:['Սիմպսոնի հղումային արժեք (20000 միջակայք)','Simpson reference (20000 intervals)','Опорное значение Симпсона (20000 интервалов)'],
        comparisonNote:['Մոնտե Կառլոյի N-ը ընտրանքի քանակն է, մյուս մեթոդներինը՝ ենթամիջակայքերի։ Կենտ n-ի դեպքում Սիմպսոնը գործածում է հաջորդ զույգ թիվը։ Հաշվարկների սյունակը ցույց է տալիս իրական ծախսը։ Հղումային արժեքի հաշվարկը համեմատվող մեթոդների ծախսի մեջ ներառված չէ։','Monte Carlo N counts samples; the other methods count subintervals. Simpson rounds odd n up to the next even integer. The evaluation column shows actual cost. Reference evaluation cost is excluded.','В Монте-Карло N — число точек, в других методах — число интервалов. Для Симпсона нечётное n увеличивается до чётного. Столбец вычислений показывает реальную стоимость без расчёта опорного значения.'],
        useful:['Ե՞րբ ընտրել Մոնտե Կառլոն','When should you choose Monte Carlo?','Когда выбирать Монте-Карло?'],
        usefulNote:['Պարզ, հարթ միաչափ ֆունկցիաների համար Սիմպսոնի կանոնը հաճախ ավելի ճշգրիտ է նույն ծախսով։ Մոնտե Կառլոն հատկապես օգտակար է շատ փոփոխականներով ինտեգրալների, բարդ տիրույթների և պատահական սցենարների մոդելավորման համար։ Այս էջի միաչափ օրինակը բացատրում է տարբերությունը, բայց չի չափում բազմաչափ խնդիրների արդյունավետությունը։','For simple smooth one-dimensional functions, Simpson’s rule is often more accurate at a similar cost. Monte Carlo is especially useful for high-dimensional integrals, complicated domains and random-scenario models. This one-dimensional example explains the tradeoff but does not benchmark high-dimensional problems.','Для простых гладких одномерных функций правило Симпсона часто точнее при сопоставимой стоимости. Монте-Карло особенно полезен для многомерных интегралов, сложных областей и случайных сценариев. Этот одномерный пример объясняет различие, но не измеряет эффективность многомерных задач.'],
        precisionNote:['N-ի գնահատականը նախնական ընտրանքի դիսպերսիայով նորմալ մոտարկում է։ Այն ենթադրում է անկախ ընտրանք և վերջավոր դիսպերսիա։ Փոքր SE-ն, այդ թվում՝ զրոն, ճշտության ապացույց չէ։ Նոր անկախ փորձի սխալը կարող է գերազանցել ε-ն։','N uses a pilot variance and a normal approximation, assuming independent samples and finite variance. A small SE, including zero, does not prove accuracy. A new independent run may have error above ε.','Оценка N использует пилотную дисперсию и нормальное приближение при независимых точках и конечной дисперсии. Малый SE, в том числе нулевой, не доказывает точность. Ошибка нового независимого опыта может превысить ε.'],
        estimateN:['Ինտեգրալի համար մոտավոր անհրաժեշտ N','Estimated N for the integral','Оценка необходимого N для интеграла'],
        piBound:['π-ի համար պահպանողական N՝ Հյոֆդինգի սահմանով','Conservative N for π: Hoeffding bound','Консервативное N для π: граница Хёффдинга'],
        boundNote:['π-ի սահմանը վերաբերում է անկախ, հավասարաչափ ընտրված կետերին և π≈4·Nներս/N գնահատմանը։ Այն օգտագործում է N≥8·ln(2/α)/ε², որտեղ α=1−վստահության մակարդակ։ Սա հավանականային սահման է, ոչ յուրաքանչյուր փորձի երաշխիք։','The π bound assumes independent uniform points and π≈4·Ninside/N. It uses N≥8·ln(2/α)/ε² with α=1−confidence. This is a probabilistic bound, not a guarantee for every run.','Граница для π предполагает независимые равномерные точки и π≈4·Nвнутри/N: N≥8·ln(2/α)/ε², где α=1−уровень доверия. Это вероятностная граница, а не гарантия для каждого запуска.'],
        tooLarge:['Գնահատված N-ը գերազանցում է այս էջի 100000 ընտրանքի գործարկման սահմանը։','The estimated N exceeds this page’s 100000-sample execution limit.','Оценка N превышает лимит запуска этой страницы — 100000 точек.'],
        seedNote:['Նույն seed-ը, նույն ֆունկցիան և նույն N-ը կրկնում են արդյունքը։ Seed-ը փոխելը նոր ընտրանք է ստեղծում, բայց չի ընտրում պարտադիր ավելի ճշգրիտ արդյունք։','The same seed, function and N reproduce the result. Changing the seed changes the sample, but does not necessarily improve accuracy.','Одинаковые seed, функция и N воспроизводят результат. Другой seed меняет выборку, но не обязательно повышает точность.'],
        relativeZero:['Հղումային արժեքը զրո է․ հարաբերական սխալ չի հաշվվում։','The reference is zero; relative error is undefined.','Опорное значение равно нулю: относительная ошибка не определена.'],
        errorLesson:['Օրինակ՝ I=1/3, մոտարկում՝ 0.3348, SE=0.003։ Բացարձակ սխալը համեմատում է ճշգրիտ արժեքի հետ, իսկ SE-ն գնահատում է ընտրանքից կախված տատանումը։ 95% միջակայքը կառուցված է մեծ ընտրանքի նորմալ մոտարկմամբ։','Example: I=1/3, estimate=0.3348, SE=0.003. Absolute error compares with the exact value; SE estimates sampling variability. The 95% interval below uses a large-sample normal approximation.','Пример: I=1/3, оценка=0.3348, SE=0.003. Абсолютная ошибка сравнивает с точным значением, SE оценивает случайный разброс. 95% интервал ниже использует нормальное приближение для большой выборки.'],
        meanError:['Միջին սխալը և միջինի սխալը','Mean error and error of the mean','Средняя ошибка и ошибка среднего'],
        meanErrorNote:['Մեսրոպի N=100-ի հինգ փորձերում միջին π-ն 3.08 է։ Հինգ բացարձակ սխալների միջինը 0.099681 է, իսկ |3.08−π|≈0.061593։ Դրանք տարբեր չափումներ են։','In Mesrop’s five N=100 runs, mean π is 3.08. The mean of five absolute errors is 0.099681, whereas |3.08−π|≈0.061593. They measure different things.','В пяти опытах Месропа при N=100 среднее π равно 3.08. Средняя абсолютная ошибка — 0.099681, а |3.08−π|≈0.061593. Это разные показатели.'],
        mesrop:['Մեսրոպի 20 փորձերի գրաֆիկները','Charts of Mesrop’s 20 experiments','Графики 20 опытов Месропа'],
        mesropNote:['Ձախում՝ բոլոր 20 արդյունքներն ու խմբերի միջինները, աջում՝ միջին բացարձակ սխալը։ Ընդհատ 1/√N գիծը N=100-ում մասշտաբավորված ուղեցույց է, ոչ տվյալներին պարտադիր համապատասխանող օրենք։','Left: all 20 results and group means. Right: mean absolute error. The dashed 1/√N line is scaled at N=100 as a guide, not a required fit to these observations.','Слева — 20 результатов и средние по группам, справа — средняя абсолютная ошибка. Пунктир 1/√N масштабирован при N=100 как ориентир, а не обязательная аппроксимация наблюдений.'],
        source:['Աղբյուր և աղյուսակներ','Source and tables','Источник и таблицы'], png:['Ներբեռնել գրաֆիկը՝ PNG','Download chart as PNG','Скачать график PNG'],
        glossary:['Տերմինների բառարան','Glossary','Словарь терминов'], history:['Փորձերի պատմություն','Experiment history','История опытов'],
        task:['Առաջադրանք','Task','Задание'], scale:['N և 4N․ ինչպե՞ս է փոխվում SE-ն','N and 4N: how does SE change?','N и 4N: как меняется SE?'], reproducible:['Նույն seed-ով կրկնելիություն','Repeatability with the same seed','Повторяемость с тем же seed'], methods:['Համեմատիր երեք մեթոդները','Compare three methods','Сравните три метода'],
        predict:['1. Կանխատեսում','1. Prediction','1. Прогноз'], observe:['2. Դիտարկում','2. Observation','2. Наблюдение'], explain:['3. Բացատրություն / եզրակացություն','3. Explanation / conclusion','3. Объяснение / вывод'],
        saveNotes:['Պահպանել գրառումները','Save notes','Сохранить записи'], saved:['Գրառումները պահպանված են այս դիտարկչում։','Notes saved in this browser.','Записи сохранены в этом браузере.'], notSaved:['Դիտարկիչը թույլ չի տալիս պահպանում․ գրառումները կգործեն այս այցի ընթացքում։','Browser storage is unavailable; notes remain for this visit.','Локальное сохранение недоступно; записи доступны в этом посещении.'],
        taskIntro:['Նախ գրիր կանխատեսումդ, ապա գործարկիր փորձը։ Արդյունքից հետո նկարագրիր դիտարկումն ու բացատրությունը։','Write a prediction before running. After the experiment, record what you observed and explain it.','До запуска запишите прогноз. После опыта опишите наблюдение и объясните его.'],
        needPrediction:['Նախ գրիր կանխատեսումը։','Write your prediction first.','Сначала запишите прогноз.'],
        scaleNote:['Օգտագործվում են նույն հաջորդականության առաջին N և 4N արժեքները։ SE-ի սպասվող մոտավոր հարաբերությունը 1/2 է, իսկ առանձին բացարձակ սխալը կարող է աճել։ Այս առաջադրանքի համար N≤25000։','Uses the first N and 4N values of the same sequence. The expected approximate SE ratio is 1/2; an individual absolute error can increase. This task requires N≤25000.','Используются первые N и 4N значений одной последовательности. Ожидаемое приближённое отношение SE — 1/2, но отдельная абсолютная ошибка может вырасти. Для задания N≤25000.'],
        invalid:['Ստուգեք ֆունկցիան և դաշտերի սահմանները։ Պահանջվում է վերջավոր, անընդհատ ֆունկցիա։','Check the function and field limits. Use a finite, continuous function.','Проверьте функцию и ограничения полей. Нужна конечная непрерывная функция.'],
        ready:['Ընտրիր ուղղությունը և գործարկիր հետազոտությունը։','Choose an investigation and run it.','Выберите направление и запустите исследование.'],
    };
    const t = k => copy[k]?.[({hy:0,en:1,ru:2})[typeof currentLang==='undefined'?'hy':currentLang] ?? 0] || k;
    const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
    const num = n => Number.isFinite(n) ? Math.abs(n)>0&&Math.abs(n)<1e-6 ? n.toExponential(5) : Number(n.toPrecision(9)).toString() : '—';
    const range = ci => ci ? `[${ci.map(num).join(', ')}]` : '—';
    const table = (heads,rows) => `<div class="research-table-wrap" tabindex="0"><table class="research-table"><thead><tr>${heads.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(v=>`<td>${esc(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    let panel, form, saved = null, notebook = {}, revision = 0;
    const notebookKey = 'probspaceNotebookV1';
    try { const data=JSON.parse(localStorage.getItem(notebookKey)||'{}'); if(data&&typeof data==='object'&&!Array.isArray(data)) notebook=data; } catch {}
    const taskId = () => form.elements.task.value;
    function notesForm() {
        const notes=notebook[taskId()] || {};
        return `<p class="research-note">${esc(t('taskIntro'))}</p>${['predict','observe','explain'].map(k=>`<label>${esc(t(k))}<textarea name="${k}" maxlength="4000" rows="3">${esc(typeof notes[k]==='string'?notes[k]:'')}</textarea></label>`).join('')}<button type="button" class="glow-btn secondary" data-save-notes>${esc(t('saveNotes'))}</button><p data-notes-status role="status"></p>`;
    }
    function captureNotes() {
        const record={};
        for(const key of ['predict','observe','explain']) record[key]=panel.querySelector(`[name=${key}]`)?.value || '';
        notebook[taskId()] = record;
    }
    function saveNotes() {
        captureNotes();
        try { localStorage.setItem(notebookKey,JSON.stringify(notebook)); panel.querySelector('[data-notes-status]').textContent=t('saved'); }
        catch { panel.querySelector('[data-notes-status]').textContent=t('notSaved'); }
    }
    function updateMode() {
        const mode=form.elements.studyMode.value;
        panel.querySelector('[data-precision-fields]').hidden=mode!=='precision';
        panel.querySelector('[data-task-fields]').hidden=mode!=='tasks';
        panel.querySelector('[data-function-fields]').hidden=mode==='errors';
        form.querySelectorAll('[data-precision-fields] input, [data-precision-fields] select').forEach(input=>{input.disabled=mode!=='precision';});
        panel.querySelector('[data-notebook]').hidden=mode!=='tasks';
        panel.querySelector('[data-study-run]').hidden=mode==='errors';
        if(mode==='errors') renderLesson();
        else if(saved?.fields.studyMode===mode) renderResult();
        else panel.querySelector('[data-study-output]').innerHTML=`<p>${esc(t('ready'))}</p>`;
    }
    function compile(fields) {
        const a=Number(fields.a),b=Number(fields.b),n=Number(fields.n),seed=Number(fields.seed);
        if (![a,b].every(Number.isFinite)||Math.max(Math.abs(a),Math.abs(b))>10000||a===b||!Number.isInteger(n)||n<30||n>100000) throw new Error('limits');
        const fn=MathEvaluator.compile(fields.expression);
        if(CalculusEngine.checkSingularity(fn,Math.min(a,b),Math.max(a,b),1000).hasSingularity) throw new Error('function');
        let reference, exact=false;
        try {
            const primitive=MathEvaluator.antiderivative(MathEvaluator.parse(fields.expression));
            reference=MathEvaluator.evalAst(primitive,{x:b})-MathEvaluator.evalAst(primitive,{x:a});
            exact=Number.isFinite(reference);
        } catch {}
        if(!exact) reference=CalculusEngine.simpson(fn,a,b,20000);
        if(!Number.isFinite(reference)) throw new Error('reference');
        return {fn,a,b,n,seed,reference,exact};
    }
    async function run() {
        if(!form.reportValidity()) return;
        if(form.elements.studyMode.value==='tasks') {
            captureNotes();
            if(!notebook[taskId()].predict.trim()) { panel.querySelector('[data-notes-status]').textContent=t('needPrediction'); panel.querySelector('[name=predict]').focus(); return; }
        }
        const fields=Object.fromEntries(new FormData(form)), token=++revision, button=panel.querySelector('[data-study-run]');
        button.disabled=true; button.textContent=t('busy');
        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
        try {
            const options=compile(fields); let data;
            if(fields.studyMode==='precision') data=E.planSamples({...options,pilot:options.n,epsilon:Number(fields.epsilon),confidence:Number(fields.confidence)});
            else if(fields.studyMode==='seeds') data=[0,1,2].map(i=>({seed:(options.seed+i)>>>0,...E.integrals({...options,seed:(options.seed+i)>>>0,functions:[options.fn]})}));
            else if(fields.studyMode==='tasks'&&fields.task==='scale') {
                if(options.n>25000) throw new Error('count');
                data=[options.n,4*options.n].map(n=>E.integrals({...options,n,functions:[options.fn]}).results[0]);
            } else if(fields.studyMode==='tasks'&&fields.task==='reproducible') data=[0,1].map(()=>E.integrals({...options,functions:[options.fn]}).results[0]);
            else data=E.compare(options);
            if(token!==revision) return;
            saved={fields,options,data}; renderResult();
            if(fields.studyMode==='tasks') saveNotes();
            const estimate=fields.studyMode==='precision'?data.result.estimate:fields.studyMode==='seeds'?data.map(d=>d.results[0].estimate):data.map(d=>d.estimate);
            window.ExperimentHistory?.add('study',fields,{estimate});
        } catch { panel.querySelector('[data-study-output]').innerHTML=`<p class="research-error" role="alert">${esc(t('invalid'))}</p>`; }
        finally { if(token===revision){button.disabled=false;button.textContent=t('run');} }
    }
    function renderResult() {
        if(!saved) return;
        const {fields,options:o,data:d}=saved;
        let html=`<p><strong>${esc(t(o.exact?'exact':'reference'))}: ${num(o.reference)}</strong></p>`;
        if(fields.studyMode==='precision') {
            html+=table([t('estimateN'),t('piBound')],[[d.estimateN.toLocaleString(),d.piBoundN.toLocaleString()]]);
            html+=`<p>ε=${num(d.epsilon)}; ${esc(t('confidence'))}=${d.confidence*100}%; pilot N=${d.pilot}; SE=${num(d.result.se)}</p><p class="research-note">${esc(t('precisionNote'))}</p><p class="research-steps">N ≈ (z · SE · √pilot / ε)²<br>Nπ ≥ 8 · ln(2/α) / ε²</p><p class="research-note">${esc(t('boundNote'))}</p>`;
            if(d.estimateN>100000) html+=`<p>${esc(t('tooLarge'))}</p>`;
        } else if(fields.studyMode==='seeds') {
            html+=table(['seed',t('estimate'),t('absolute'),t('se'),t('ci')],d.map(r=>[r.seed,num(r.results[0].estimate),num(Math.abs(r.results[0].estimate-o.reference)),num(r.results[0].se),range(r.results[0].ci)]));
            html+=`<p class="research-note">${esc(t('seedNote'))}</p>`;
            html+=table(['seed','x₁','x₂','x₃','x₄','x₅'],d.map(r=>[r.seed,...r.first.map(row=>num(row[1]))]));
        } else if(fields.studyMode==='tasks'&&['scale','reproducible'].includes(fields.task)) {
            html+=table(['N',t('estimate'),t('absolute'),t('se')],d.map(r=>[r.n,num(r.estimate),num(Math.abs(r.estimate-o.reference)),num(r.se)]));
            html+=`<p class="research-note">${esc(t(fields.task==='scale'?'scaleNote':'seedNote'))}</p>`;
            if(fields.task==='scale') html+=`<p>SE₄ₙ / SEₙ = ${d[0].se>0?num(d[1].se/d[0].se):'—'}</p>`;
        } else {
            html+=table([t('method'),t('estimate'),t('absolute'),t('relative'),t('se'),t('evaluations')],d.map(r=>[t(r.method),num(r.estimate),num(Math.abs(r.estimate-o.reference)),o.reference!==0?num(100*Math.abs((r.estimate-o.reference)/o.reference))+'%':'—',num(r.se),r.evaluations]));
            html+=`<p class="research-note">${esc(t('comparisonNote'))}</p>`;
            html+=`<h3>${esc(t('useful'))}</h3><p class="research-note">${esc(t('usefulNote'))}</p><a href="https://cswr.nrhstat.org/mci.html" target="_blank" rel="noopener noreferrer">Computational Statistics with R — Monte Carlo integration ↗</a>`;
            if(o.reference===0)html+=`<p>${esc(t('relativeZero'))}</p>`;
        }
        panel.querySelector('[data-study-output]').innerHTML=html;
    }
    function renderLesson() {
        const absolute=Math.abs(.3348-1/3);
        panel.querySelector('[data-study-output]').innerHTML=`<h3>${esc(t('errors'))}</h3><p>${esc(t('errorLesson'))}</p>${table([t('method'),t('estimate')],[[t('absolute'),`|0.3348 − 1/3| ≈ ${num(absolute)}`],[t('relative'),`${num(absolute/(1/3)*100)}%`],[t('se'),'0.003'],[t('ci'),'0.3348 ± 1.96 × 0.003 = [0.32892, 0.34068]']])}<h3>${esc(t('meanError'))}</h3><p>${esc(t('meanErrorNote'))}</p><p><button type="button" class="glow-btn secondary" data-glossary-term="se">${esc(t('glossary'))}</button></p><a href="https://cswr.nrhstat.org/mci.html" target="_blank" rel="noopener noreferrer">Computational Statistics with R — Monte Carlo integration ↗</a>`;
    }
    function refresh() {
        if(!panel) return;
        document.getElementById('lab-tab-study').textContent=t('title');
        panel.querySelectorAll('[data-study-t]').forEach(el=>{el.textContent=t(el.dataset.studyT);});
        panel.querySelector('.study-material img').alt=t('mesrop');
        const notes=panel.querySelector('[data-notebook]');
        if(notes.querySelector('textarea')) captureNotes();
        notes.innerHTML=notesForm(); updateMode(); window.ExperimentHistory?.render();
    }
    window.refreshStudyLanguage=refresh;
    window.restoreStudyExperiment=async fields=>{
        showPage('lab');switchLabMode('study',document.getElementById('lab-tab-study'));
        for(const [key,value] of Object.entries(fields))if(form.elements[key])form.elements[key].value=value;
        panel.querySelector('[data-notebook]').innerHTML=notesForm();updateMode();await run();
    };
    document.addEventListener('DOMContentLoaded',()=>{
        const tabs=document.querySelector('.lab-mode-tabs');
        if(!tabs)return;
        const button=document.createElement('button');button.id='lab-tab-study';button.className='lab-mode-btn';button.dataset.studyT='title';button.textContent=t('title');button.addEventListener('click',()=>switchLabMode('study',button));tabs.append(button);
        panel=document.createElement('div');panel.id='lab-panel-study';panel.className='lab-subpanel glass-panel research-panel';panel.style.gridColumn='1 / -1';panel.style.display='none';
        const tag=k=>`<span data-study-t="${k}">${esc(t(k))}</span>`;
        const input=(key,value,min,max,step=1)=>`<label>${tag(key)}<input name="${key}" type="number" value="${value}" min="${min}" max="${max}" step="${step}" required></label>`;
        panel.innerHTML=`<h2>${tag('title')}</h2><p class="research-note">${tag('intro')}</p><p><button type="button" class="glow-btn secondary small" data-glossary-term="monteCarlo">${tag('glossary')}</button></p><form class="research-form"><label class="research-wide">${tag('mode')}<select name="studyMode">${['comparison','precision','seeds','errors','tasks'].map(key=>`<option value="${key}" data-study-t="${key}">${esc(t(key))}</option>`).join('')}</select></label><div data-function-fields class="research-form research-wide"><label>${tag('expression')}<input name="expression" value="x^2" maxlength="200" required></label>${input('a',0,-10000,10000,'any')}${input('b',1,-10000,10000,'any')}${input('n',1000,30,100000)}${input('seed',0,0,4294967295)}</div><div data-precision-fields class="research-form research-wide" hidden>${input('epsilon',.01,.000001,100,'any')}<label>${tag('confidence')}<select name="confidence"><option value="0.95">95%</option><option value="0.99">99%</option></select></label></div><label data-task-fields class="research-wide" hidden>${tag('task')}<select name="task">${['scale','reproducible','methods'].map(key=>`<option value="${key}" data-study-t="${key}">${esc(t(key))}</option>`).join('')}</select></label><button type="submit" class="glow-btn" data-study-run data-study-t="run">${esc(t('run'))}</button></form><div data-notebook class="study-notebook" hidden></div><div data-study-output aria-live="polite"></div><details class="study-material"><summary>${tag('mesrop')}</summary><figure><img src="assets/contributions/mesrop-pi-analysis.svg" alt="${esc(t('mesrop'))}" loading="lazy"><figcaption data-study-t="mesropNote">${esc(t('mesropNote'))}</figcaption></figure><a href="assets/contributions/mesrop-pi-analysis.html" target="_blank" rel="noopener noreferrer" data-study-t="source">${esc(t('source'))}</a> · <a href="assets/contributions/mesrop-pi-analysis.png" download data-study-t="png">${esc(t('png'))}</a></details><details id="study-history" class="study-material"><summary>${tag('history')}</summary><div data-experiment-history></div></details>`;
        tabs.parentElement.append(panel);form=panel.querySelector('form');
        panel.querySelector('[data-notebook]').innerHTML=notesForm();
        form.addEventListener('submit',event=>{event.preventDefault();run();});
        form.addEventListener('input',event=>{
            revision++;panel.querySelector('[data-study-run]').disabled=false;panel.querySelector('[data-study-run]').textContent=t('run');
            saved=null;
            if(event.target.name==='task')panel.querySelector('[data-notebook]').innerHTML=notesForm();
            updateMode();
        });
        panel.addEventListener('click',event=>{if(event.target.closest('[data-save-notes]'))saveNotes();});
        panel.querySelector('[data-notebook]').addEventListener('input',()=>{captureNotes();saveNotes();});
        updateMode();window.ExperimentHistory?.render();
    });
})();
