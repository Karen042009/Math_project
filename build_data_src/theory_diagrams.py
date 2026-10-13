"""Responsive lesson figures: short SVG labels, with prose outside the plot."""
COPY = {
    "hy": {
        "history": "Ինտեգրալի պատմական զարգացումը",
        "eras": [("Արքիմեդես", "Մ․թ․ա․ 3-րդ դար", "Սպառման մեթոդ"), ("Նյուտոն և Լայբնից", "1665–1675 թթ․", "Ածանցման և ինտեգրման կապը"), ("Բ․ Ռիման", "1854 թ․", "Ինտեգրալային գումարների սահմանը")],
        "function": "Ֆունկցիայի գրաֆիկը․ յուրաքանչյուր x-ին՝ մեկ y",
        "function_note": "Ընդհատված գծերով կետերի կոորդինատները տեղափոխում ենք առանցքներին։",
        "derivative": "Հատողից դեպի շոշափող",
        "curve": "Ֆունկցիայի գրաֆիկ", "secant": "P և Q կետերով հատող", "tangent": "Շոշափողը P կետում",
        "derivative_note": "Երբ h → 0, Q կետը կորի վրայով մոտենում է P-ին, իսկ հատողը՝ շոշափողին։",
        "riemann": "Ռիմանի ձախ ուղղանկյունների գումարը",
        "riemann_note": "y = x², [0, 4], n = 4․ բարձրությունը վերցվում է ձախ ծայրակետում։ Առաջին ուղղանկյան բարձրությունը 0 է։",
    },
    "en": {
        "history": "Historical development of the integral",
        "eras": [("Archimedes", "3rd century BCE", "Method of exhaustion"), ("Newton and Leibniz", "1665–1675", "Connecting differentiation and integration"), ("B. Riemann", "1854", "Limits of integral sums")],
        "function": "A function graph: one y for each x",
        "function_note": "The dashed lines project each point's coordinates onto the axes.",
        "derivative": "From secant to tangent",
        "curve": "Function graph", "secant": "Secant through P and Q", "tangent": "Tangent at P",
        "derivative_note": "As h → 0, Q approaches P along the curve and the secant approaches the tangent.",
        "riemann": "Left-endpoint Riemann sum",
        "riemann_note": "y = x², [0, 4], n = 4: each height is taken at the left endpoint. The first rectangle has height 0.",
    },
    "ru": {
        "history": "Историческое развитие интеграла",
        "eras": [("Архимед", "III век до н. э.", "Метод исчерпывания"), ("Ньютон и Лейбниц", "1665–1675", "Связь дифференцирования и интегрирования"), ("Б. Риман", "1854", "Предел интегральных сумм")],
        "function": "График функции: каждому x соответствует одно y",
        "function_note": "Пунктирные линии проецируют координаты точек на оси.",
        "derivative": "От секущей к касательной",
        "curve": "График функции", "secant": "Секущая через P и Q", "tangent": "Касательная в P",
        "derivative_note": "При h → 0 точка Q приближается к P вдоль кривой, а секущая — к касательной.",
        "riemann": "Левая сумма Римана",
        "riemann_note": "y = x², [0, 4], n = 4: высоту берём в левом конце. Высота первого прямоугольника равна 0.",
    },
}

AXES = '''<g class="diagram-axes">
<path d="M40 250H475 M60 282V35"/>
<text x="475" y="274" text-anchor="end">x</text><text x="42" y="38" text-anchor="end">y</text>
</g>'''
CURVE = '<path class="diagram-curve" d="M60 250 Q240 250 420 58"/>'


def figure(kind, lang):
    c = COPY[lang]
    title = c[kind]
    if kind == "history":
        items = "".join(f'<li><span class="era-step">{i:02}</span><h4>{name}</h4><p class="era-date">{date}</p><p>{detail}</p></li>' for i, (name, date, detail) in enumerate(c["eras"], 1))
        return f'<figure class="theory-figure"><figcaption>{title}</figcaption><ol class="theory-timeline">{items}</ol></figure>'
    if kind == "function":
        marks = '''<g class="diagram-blue"><path d="M195 223V250 M60 223H195"/><circle cx="195" cy="223" r="5"/>
<text x="195" y="274" text-anchor="middle">x₁</text><text x="48" y="226" text-anchor="end">f₁</text></g>
<g class="diagram-green"><path d="M330 142V250 M60 142H330"/><circle cx="330" cy="142" r="5"/>
<text x="330" y="274" text-anchor="middle">x₂</text><text x="48" y="145" text-anchor="end">f₂</text></g>'''
        legend = '<p class="diagram-key"><span class="key-blue">f₁ = f(x₁)</span><span class="key-green">f₂ = f(x₂)</span></p>'
    elif kind == "derivative":
        marks = '''<path class="diagram-secant" d="M165 252L420 82"/>
<path class="diagram-tangent" d="M150 250L420 106"/>
<circle cx="240" cy="202" r="5" fill="var(--accent-gold)"/><text x="222" y="188" fill="var(--text-primary)">P</text>
<circle cx="330" cy="142" r="5" fill="#38bdf8"/><text x="345" y="166" fill="var(--text-primary)">Q</text>
<path class="diagram-h" d="M330 278H240 M247 273L240 278L247 283"/><text x="285" y="296" text-anchor="middle" fill="var(--text-muted)">h → 0</text>'''
        legend = f'<ul class="diagram-key"><li class="key-purple">{c["curve"]}</li><li class="key-blue">{c["secant"]}</li><li class="key-green">{c["tangent"]}</li></ul>'
    else:
        # x in [0,4]: screen x = 60+90*x, screen y = 250-12*x*x.
        marks = '''<g class="diagram-rectangles"><rect x="150" y="238" width="90" height="12"/><rect x="240" y="202" width="90" height="48"/><rect x="330" y="142" width="90" height="108"/></g>
<g class="diagram-ticks"><text x="60" y="274" text-anchor="middle">x₀</text><text x="150" y="274" text-anchor="middle">x₁</text><text x="240" y="274" text-anchor="middle">x₂</text><text x="330" y="274" text-anchor="middle">x₃</text><text x="420" y="274" text-anchor="middle">x₄</text></g>
<text x="105" y="238" text-anchor="middle" fill="var(--text-muted)">Δx</text>'''
        legend = '<p class="diagram-key">Σ f(xᵢ) Δx</p>'
    # Rectangles go behind the curve and points; text never shares space with legends.
    drawing = marks + AXES + CURVE if kind == "riemann" else AXES + CURVE + marks
    return f'<figure class="theory-figure"><figcaption>{title}</figcaption><svg viewBox="0 0 520 310" role="img" aria-label="{title}">{drawing}</svg>{legend}<p class="diagram-note">{c[kind + "_note"]}</p></figure>'


def refine_theory_diagrams(chapter):
    kinds = {"history-calculus": "history", "func-change-graphs": "function", "derivative-meaning-derivation": "derivative", "area-riemann-sums": "riemann"}
    for sub in chapter["subsections"]:
        kind = kinds.get(sub["id"])
        if not kind:
            continue
        for lang, text in sub["content"].items():
            drawing = figure(kind, lang)
            marker = "<!-- Responsive diagram inserted by theory_diagrams.py -->"
            if marker in text:
                text = text.replace(marker, drawing)
            else:
                text = text.replace('<div class="example-box">', drawing + '\n<div class="example-box">', 1)
            sub["content"][lang] = text
    return chapter
