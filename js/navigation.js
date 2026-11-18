/* Keep short, topic-specific tool lists while preserving each group's last selection. */
(function () {
    const labels = {
        labGroups: ['Հաշվիչների խմբեր', 'Calculator groups', 'Группы калькуляторов'],
        simulationGroups: ['Սիմուլյացիաների խմբեր', 'Simulation groups', 'Группы симуляций'],
        basics: ['Հիմնական և հավանականություն', 'Basics and probability', 'Основы и вероятность'],
        calculus: ['Անալիզ և երկրաչափություն', 'Calculus and geometry', 'Анализ и геометрия'],
        applications: ['Շարժում և ռիսկ', 'Motion and risk', 'Движение и риск'],
        monteCarlo: ['Մոնտե Կառլո', 'Monte Carlo', 'Монте-Карло'],
        experiments: ['Պատահական փորձեր', 'Random experiments', 'Случайные опыты'],
        models: ['Մոդելներ և պարադոքսներ', 'Models and paradoxes', 'Модели и парадоксы'],
    };
    const configurations = {
        lab: { container: '.lab-mode-tabs', selector: '.lab-mode-btn', groups: {
            basics: ['basic', 'prob', 'research-pi'],
            calculus: ['calculus', 'research-integral', 'area', 'volume', 'research-geometry', 'study'],
            applications: ['motion', 'research-risk'],
        } },
        simulations: { container: '.sim-tabs', selector: '.sim-tab-btn', groups: {
            monteCarlo: ['integral', 'buffon'],
            experiments: ['coin', 'dice'],
            models: ['galton', 'monty', 'research-walk'],
        } },
    };
    const text = key => labels[key]?.[({hy:0,en:1,ru:2})[typeof currentLang === 'undefined' ? 'hy' : currentLang] ?? 0] || key;
    const states = new Map();

    window.syncNavigationGroup = function (page, mode) {
        const state = states.get(page);
        if (!state) return;
        const group = Object.keys(state.config.groups).find(key => state.config.groups[key].includes(mode));
        if (!group) return;
        state.selected = group;
        state.remembered[group] = mode;
        state.buttons.forEach((button, id) => {
            button.hidden = !state.config.groups[group].includes(id);
            button.classList.toggle('active', id === mode);
        });
        state.bar.querySelectorAll('[data-nav-group]').forEach(button => {
            const selected = button.dataset.navGroup === group;
            button.classList.toggle('active', selected);
            button.setAttribute('aria-pressed', String(selected));
        });
    };

    window.refreshNavigationLanguage = function () {
        for (const [page, state] of states) {
            state.bar.setAttribute('aria-label', text(page === 'lab' ? 'labGroups' : 'simulationGroups'));
            state.bar.querySelectorAll('[data-nav-group]').forEach(button => { button.textContent = text(button.dataset.navGroup); });
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        for (const [page, config] of Object.entries(configurations)) {
            const container = document.querySelector(config.container);
            if (!container) continue;
            const buttons = new Map();
            container.querySelectorAll(config.selector).forEach(button => {
                const mode = page === 'lab' ? button.id.replace('lab-tab-', '')
                    : button.dataset.researchT === 'walk' ? 'research-walk'
                    : button.getAttribute('onclick')?.match(/showSimulation\('([^']+)'/)?.[1];
                if (mode) buttons.set(mode, button);
            });
            const bar = document.createElement('div');
            bar.className = 'navigation-groups';
            bar.setAttribute('role', 'group');
            const state = { config, buttons, bar, remembered: {}, selected: null };
            states.set(page, state);
            for (const group of Object.keys(config.groups)) {
                const button = document.createElement('button');
                button.type = 'button'; button.className = 'navigation-group-btn';
                button.dataset.navGroup = group;
                button.addEventListener('click', () => {
                    const mode = state.remembered[group] || config.groups[group][0];
                    if (page === 'lab') switchLabMode(mode, buttons.get(mode));
                    else showSimulation(mode, buttons.get(mode));
                });
                bar.append(button);
            }
            container.prepend(bar);
            const active = [...buttons].find(([, button]) => button.classList.contains('active'))?.[0] || [...buttons.keys()][0];
            window.syncNavigationGroup(page, active);
        }
        window.refreshNavigationLanguage();
    });
})();
