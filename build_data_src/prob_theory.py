# Probability Theory Course Chapters
# Restored, enhanced, and trilingual
import json
import os
from probability_refinements import get_probability_refinements

def get_probability_chapters():
    file_path = os.path.join(os.path.dirname(__file__), 'original_prob_theory.json')
    with open(file_path, 'r', encoding='utf-8') as f:
        chapters = json.load(f)
    refinements = get_probability_refinements()

    # Enhance chapters with explicit track and ensure preconditions
    for i, ch in enumerate(chapters):
        ch['track'] = 'probability'
        ch['id'] = f'prob-ch{i}'
        for sub in ch['subsections']:
            sub['track'] = 'probability'
            if sub['id'] in refinements:
                sub['content'] = refinements[sub['id']]
            
            # Enhance Buffon condition in theory-geometric-prob
            if sub['id'] == 'theory-geometric-prob':
                buffon_add_hy = """
<div class="theory-callout" style="border-left-color: var(--accent-gold); margin-top: 15px;">
    <h4><i class="fas fa-exclamation-circle"></i> Բյուֆոնի ասեղի դասական բանաձևի կարևոր նախապայմանը</h4>
    <p>Դասական բանաձևը՝ $P = \\frac{2l}{\\pi d}$, գործում է <strong>միայն կարճ ասեղի դեպքում ($l \\le d$)</strong>, որտեղ $l$-ը ասեղի երկարությունն է, իսկ $d$-ն՝ զուգահեռ գծերի հեռավորությունը։ Եթե $l > d$, ասեղը կարող է միաժամանակ հատել երկու կամ ավելի գծեր, և հավանականության ճշգրիտ բանաձևը պահանջում է ուղղիչ անդամ՝ $P = \\frac{2l}{\\pi d} - \\frac{2}{\\pi d}\\left(\\sqrt{l^2 - d^2} - d \\arccos(d/l)\\right)$։</p>
</div>
"""
                buffon_add_en = """
<div class="theory-callout" style="border-left-color: var(--accent-gold); margin-top: 15px;">
    <h4><i class="fas fa-exclamation-circle"></i> Critical Condition for Buffon's Needle Formula</h4>
    <p>The standard formula $P = \\frac{2l}{\\pi d}$ holds <strong>only for the short needle condition ($l \\le d$)</strong>, where $l$ is the needle length and $d$ is the line spacing. If $l > d$, the needle may cross multiple lines simultaneously, requiring the extended formula: $P = \\frac{2l}{\\pi d} - \\frac{2}{\\pi d}\\left(\\sqrt{l^2 - d^2} - d \\arccos(d/l)\\right)$.</p>
</div>
"""
                buffon_add_ru = """
<div class="theory-callout" style="border-left-color: var(--accent-gold); margin-top: 15px;">
    <h4><i class="fas fa-exclamation-circle"></i> Необходимое условие формулы иглы Бюффона</h4>
    <p>Классическая формула $P = \\frac{2l}{\\pi d}$ верна <strong>только при условии короткой иглы ($l \\le d$)</strong>, где $l$ — длина иглы, а $d$ — шаг линий. При $l > d$ игла может пересекать более одной линии, и точная вероятность вычисляется по расширенной формуле: $P = \\frac{2l}{\\pi d} - \\frac{2}{\\pi d}\\left(\\sqrt{l^2 - d^2} - d \\arccos(d/l)\\right)$.</p>
</div>
"""
                sub['content']['hy'] = sub['content']['hy'] + buffon_add_hy
                sub['content']['en'] = sub['content']['en'] + buffon_add_en
                sub['content']['ru'] = sub['content']['ru'] + buffon_add_ru

    return chapters
