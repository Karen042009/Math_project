/* Armenian AI voice guides. One shared player prevents overlapping narration. */
(function () {
    'use strict';

    const guides = {
        home: ['home', '#home .hero-buttons'],
        theory: ['theory', '#theory .page-title'],
        practice: ['practice', '#practice .page-title'],
        'problem-assistant': ['problem-assistant', '#practice .ai-header'],
        lab: ['lab', '#lab .page-title'],
        simulations: ['simulations', '#simulations .page-title'],
        contributions: ['contributions', '#contributions .contributions-heading'],
        basic: ['calculator-basic', '#lab-panel-basic .glass-panel'],
        prob: ['calculator-probability', '#lab-panel-prob'],
        calculus: ['calculator-calculus', '#lab-panel-calculus'],
        area: ['calculator-area', '#lab-panel-area'],
        volume: ['calculator-volume', '#lab-panel-volume'],
        motion: ['calculator-motion', '#lab-panel-motion'],
        'research-integral': ['research-integrals', '#lab-panel-research-integral'],
        'research-pi': ['research-pi', '#lab-panel-research-pi'],
        'research-risk': ['research-risk', '#lab-panel-research-risk'],
        'research-geometry': ['research-geometry', '#lab-panel-research-geometry'],
        study: ['research-study', '#lab-panel-study'],
        'sim-integral': ['simulation-integral', '#sim-integral'],
        sim_galton: ['simulation-galton', '#sim-galton'],
        sim_monty: ['simulation-monty', '#sim-monty'],
        sim_buffon: ['simulation-buffon', '#sim-buffon'],
        sim_coin: ['simulation-coin', '#sim-coin'],
        sim_dice: ['simulation-dice', '#sim-dice'],
        'research-walk': ['simulation-walk', '#sim-research-walk'],
    };
    const copy = {
        hy: ['AI օգնական', 'Դադարեցնել', 'Շարունակել', 'Բեռնվում է…', 'Չհաջողվեց նվագարկել աուդիոն։ Փորձեք կրկին։', 'Հայերեն ուղեցույց․ ձայնը գեներացված է AI-ով։'],
        en: ['AI guide · Armenian', 'Pause guide', 'Resume guide', 'Loading…', 'Could not play the audio. Please try again.', 'Armenian guide with an AI-generated voice.'],
        ru: ['AI-помощник · армянский', 'Пауза', 'Продолжить', 'Загрузка…', 'Не удалось воспроизвести аудио. Попробуйте ещё раз.', 'Руководство на армянском языке. Голос создан с помощью ИИ.'],
    };
    const labels = () => copy[typeof currentLang === 'undefined' ? 'hy' : currentLang] || copy.hy;
    const player = new Audio();
    player.preload = 'none';
    let selected = null, loading = false, revision = 0, status;

    function updateButtons() {
        document.querySelectorAll('[data-audio-guide]').forEach(button => {
            const active = button.dataset.audioGuide === selected;
            const playing = active && !player.paused;
            button.setAttribute('aria-pressed', String(playing || (active && loading)));
            button.setAttribute('aria-busy', String(active && loading));
            button.title = labels()[5];
            button.querySelector('i').className = `fas ${playing ? 'fa-pause' : 'fa-robot'}`;
            button.querySelector('span').textContent = labels()[active && loading ? 3 : playing ? 1 : active ? 2 : 0];
        });
    }

    window.stopAIGuide = function () {
        revision++;
        selected = null;
        loading = false;
        player.pause();
        player.currentTime = 0;
        if (status) { status.textContent = ''; status.hidden = true; }
        updateButtons();
    };

    window.playAIGuide = async function (key) {
        if (!guides[key]) return;
        if (selected === key && (loading || !player.paused)) {
            revision++;
            loading = false;
            player.pause();
            updateButtons();
            return;
        }
        const token = ++revision;
        if (status) { status.textContent = ''; status.hidden = true; }
        if (selected !== key) {
            player.pause();
            player.src = `assets/audio/${guides[key][0]}.mp3`;
            selected = key;
        }
        loading = true;
        updateButtons();
        try {
            await player.play();
        } catch (error) {
            if (token === revision) {
                window.stopAIGuide();
                status.textContent = labels()[4];
                status.hidden = false;
            }
        } finally {
            if (token === revision) { loading = false; updateButtons(); }
        }
    };

    window.refreshAudioGuides = function () {
        for (const [key, [, selector]] of Object.entries(guides)) {
            const host = document.querySelector(selector);
            if (!host) continue;
            let button = host.querySelector(`[data-audio-guide="${key}"]`)
                || host.querySelector(`button[onclick="playAIGuide('${key}')"]`);
            if (!button) {
                button = document.createElement('button');
                button.className = 'glow-btn ai-speech-btn small';
                if (host.matches('.lab-subpanel, .sim-panel') || key === 'basic') host.prepend(button);
                else host.append(button);
            }
            button.type = 'button';
            button.dataset.audioGuide = key;
            button.removeAttribute('onclick');
            button.style.removeProperty('display');
            button.innerHTML = '<i class="fas fa-robot" aria-hidden="true"></i><span></span>';
        }
        updateButtons();
    };

    player.addEventListener('ended', window.stopAIGuide);
    player.addEventListener('pause', updateButtons);
    player.addEventListener('playing', () => { loading = false; updateButtons(); });
    player.addEventListener('error', () => {
        if (!selected) return;
        window.stopAIGuide();
        status.textContent = labels()[4];
        status.hidden = false;
    });
    window.addEventListener('pagehide', window.stopAIGuide);
    document.addEventListener('DOMContentLoaded', () => {
        status = document.createElement('p');
        status.className = 'audio-guide-status';
        status.setAttribute('role', 'status');
        status.hidden = true;
        document.body.append(status);
        window.refreshAudioGuides();
        document.addEventListener('click', event => {
            const button = event.target.closest('[data-audio-guide]');
            if (button) window.playAIGuide(button.dataset.audioGuide);
        });
    });
})();
