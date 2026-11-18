/* Small parameter/result snapshots; rich sample arrays are regenerated from their seeds. */
(function () {
    const key = 'probspaceExperimentsV1', limit = 30;
    const labels = {
        title:['Փորձերի պատմություն','Experiment history','История опытов'],
        empty:['Պահպանված փորձ դեռ չկա։','No saved experiments yet.','Сохранённых опытов пока нет.'],
        restore:['Վերաբացել փորձը','Restore experiment','Открыть опыт'],
        remove:['Ջնջել','Delete','Удалить'],
        unavailable:['Պատմությունը հասանելի է այս այցի ընթացքում․ դիտարկիչը չի թույլատրում տեղային պահպանումը։','History is available during this visit; browser storage is unavailable.','История доступна в этом посещении; локальное сохранение недоступно.'],
        result:['Պահպանված արդյունք','Saved result','Сохранённый результат'],
        limit:['Պահվում են վերջին 30 փորձերի պարամետրերն ու արդյունքները։','Parameters and results of the latest 30 experiments are stored.','Сохраняются параметры и результаты последних 30 опытов.'],
        integral:['Կրկնելի ինտեգրալներ','Reproducible integrals','Воспроизводимые интегралы'],
        pi:['π-ի գնահատում','Estimating π','Оценка π'], walk:['Պատահական քայլք','Random walk','Случайное блуждание'],
        risk:['Ֆինանսական մոդել','Financial model','Финансовая модель'], geometry:['Մակերես և ծավալ','Area and volume','Площадь и объём'],
        study:['Հետազոտություն','Investigation','Исследование'], definite:['Որոշյալ ինտեգրալ','Definite integral','Определённый интеграл'],
        simulation:['Ինտեգրման սիմուլյացիա','Integration simulation','Симуляция интегрирования'],
        failed:['Չհաջողվեց վերաբացել․ ստուգեք փորձի պարամետրերը։','Could not restore; check the experiment parameters.','Не удалось открыть: проверьте параметры опыта.'],
    };
    const t = k => labels[k]?.[({hy:0,en:1,ru:2})[typeof currentLang === 'undefined' ? 'hy' : currentLang] ?? 0] || k;
    const esc = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
    let storageAvailable = true, records = [], restoring = false;
    const valid = r => r && typeof r.id === 'string' && ['integral','pi','walk','risk','geometry','study','definite','simulation'].includes(r.type) && r.fields && typeof r.fields === 'object' && !Array.isArray(r.fields) && Object.values(r.fields).every(v=>typeof v === 'string' && v.length <= 300) && Number.isFinite(Date.parse(r.createdAt));
    let raw = '[]';
    try { raw = localStorage.getItem(key) || '[]'; } catch { storageAvailable = false; }
    try { const data = JSON.parse(raw); if (Array.isArray(data)) records = data.filter(valid).slice(0,limit); } catch { records = []; }
    function persist() {
        try { localStorage.setItem(key, JSON.stringify(records)); storageAvailable = true; } catch { storageAvailable = false; }
        render();
    }
    function render() {
        document.querySelectorAll('[data-experiment-history]').forEach(root => {
            root.innerHTML = `<h3>${esc(t('title'))}</h3><p class="research-note">${esc(t(storageAvailable?'limit':'unavailable'))}</p>${records.length ? records.map(record => {
                const estimates = Array.isArray(record.summary?.estimate) ? record.summary.estimate : [record.summary?.estimate];
                const result = estimates.filter(Number.isFinite).map(n=>Number(n.toPrecision(8))).join(' · ');
                const date = new Date(record.createdAt).toLocaleString(typeof currentLang==='undefined'?'hy':currentLang,{timeZone:'Asia/Yerevan'});
                return `<article class="experiment-record"><div><strong>${esc(t(record.type))}</strong><p>${esc(record.fields.expression || '')} · N=${esc(record.fields.n || record.fields.paths || '—')} · seed=${esc(record.fields.seed || '0')}</p><p>${esc(t('result'))}: ${esc(result || '—')} · ${esc(date)}</p></div><div class="research-actions"><button type="button" class="glow-btn small" data-history-restore="${esc(record.id)}">${esc(t('restore'))}</button><button type="button" class="glow-btn secondary small" data-history-remove="${esc(record.id)}">${esc(t('remove'))}</button></div></article>`;
            }).join('') : `<p>${esc(t('empty'))}</p>`}`;
        });
    }
    const api = {
        add(type, fields, summary = {}) {
            if (restoring) return;
            const record = {id:Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,9),createdAt:new Date().toISOString(),type,fields:{...fields},summary};
            if (!valid(record)) return;
            records.unshift(record); records = records.slice(0,limit); persist();
        },
        list: () => JSON.parse(JSON.stringify(records)),
        render,
    };
    window.ExperimentHistory = api;
    window.refreshHistoryLanguage = render;
    document.addEventListener('DOMContentLoaded', () => {
        document.addEventListener('click', async event => {
            if(event.target.closest('[data-open-history]')) {
                showPage('lab');switchLabMode('study',document.getElementById('lab-tab-study'));
                const history=document.getElementById('study-history');history.open=true;history.scrollIntoView({block:'start',behavior:'instant'});return;
            }
            const remove = event.target.closest('[data-history-remove]');
            if (remove) { records = records.filter(r=>r.id!==remove.dataset.historyRemove); persist(); return; }
            const button = event.target.closest('[data-history-restore]');
            if (!button) return;
            const record = records.find(r=>r.id===button.dataset.historyRestore);
            if (!record) return;
            button.disabled = true; restoring = true;
            try {
                if (record.type === 'study') await window.restoreStudyExperiment(record.fields);
                else if(record.type==='simulation') window.restoreIntegralSimulation(record.fields);
                else if (record.type === 'definite') {
                    showPage('lab'); switchLabMode('calculus', document.getElementById('lab-tab-calculus')); switchCalcSubmode('def');
                    for (const [field,id] of Object.entries({expression:'def-input-fx',a:'def-input-a',b:'def-input-b',n:'def-input-n',method:'def-select-method',seed:'def-input-seed'})) {
                        document.getElementById(id).value = record.fields[field] || '';
                    }
                    calculateDefiniteIntegral();
                } else await window.restoreResearchExperiment(record.type, record.fields);
            } catch { button.insertAdjacentText('afterend',t('failed')); }
            finally { restoring = false; button.disabled = false; }
        });
        render();
    });
})();
