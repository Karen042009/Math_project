# Assembler for js/data.js
# Unifies Probability, Calculus & Integrals, and Supplementary Tracks
import json
import os
import subprocess

from prob_theory import get_probability_chapters
from ch01_history import get_chapter_1
from ch02_func_limits import get_chapter_2
from ch03_derivative import get_chapter_3
from ch04_antiderivative import get_chapter_4
from ch05_riemann_integral import get_chapter_5
from ch06_newton_leibniz import get_chapter_6
from ch07_areas import get_chapter_7
from ch08_volumes import get_chapter_8
from ch09_kinematics import get_chapter_9
from ch10_numerical import get_chapter_10
from ch11_monte_carlo import get_chapter_11
from ch12_simulations import get_chapter_12
from ch13_algebra_crypto import get_chapter_13
from problems import get_practice_problems
from ui_updater import get_updated_ui

def fix_backslashes(obj):
    if isinstance(obj, str):
        while "\\\\" in obj:
            obj = obj.replace("\\\\", "\\")
        return obj
    elif isinstance(obj, dict):
        return {k: fix_backslashes(v) for k, v in obj.items()}
    elif isinstance(obj, list):
        return [fix_backslashes(x) for x in obj]
    return obj

def tag_track(chapter, track, ch_id):
    chapter['track'] = track
    chapter['id'] = ch_id
    for sub in chapter.get('subsections', []):
        sub['track'] = track
    return chapter

def assemble():
    print("Collecting UI strings...")
    ui = get_updated_ui()

    print("Collecting Probability Theory Chapters...")
    prob_theory = get_probability_chapters()
    print(f"Probability chapters count: {len(prob_theory)}")

    print("Collecting Calculus & Integrals Theory Chapters...")
    calc_raw = [
        tag_track(get_chapter_1(), 'integral', 'calc-ch1'),
        tag_track(get_chapter_2(), 'integral', 'calc-ch2'),
        tag_track(get_chapter_3(), 'integral', 'calc-ch3'),
        tag_track(get_chapter_4(), 'integral', 'calc-ch4'),
        tag_track(get_chapter_5(), 'integral', 'calc-ch5'),
        tag_track(get_chapter_6(), 'integral', 'calc-ch6'),
        tag_track(get_chapter_7(), 'integral', 'calc-ch7'),
        tag_track(get_chapter_8(), 'integral', 'calc-ch8'),
        tag_track(get_chapter_9(), 'integral', 'calc-ch9'),
        tag_track(get_chapter_10(), 'integral', 'calc-ch10'),
        tag_track(get_chapter_11(), 'integral', 'calc-ch11'),
        tag_track(get_chapter_12(), 'integral', 'calc-ch12')
    ]

    print("Collecting Supplementary Chapter (Data Protection & Algebra)...")
    supp_chapter = tag_track(get_chapter_13(), 'supplementary', 'supp-ch1')

    # All chapters combined for universal lookup
    all_theory = prob_theory + calc_raw + [supp_chapter]
    theory = fix_backslashes(all_theory)

    theory_tracks = {
        "probability": fix_backslashes(prob_theory),
        "integral": fix_backslashes(calc_raw),
        "supplementary": fix_backslashes([supp_chapter])
    }

    print(f"Total theory chapters: {len(theory)}")
    total_subsections = sum(len(ch['subsections']) for ch in theory)
    print(f"Total theory subsections: {total_subsections}")

    print("Collecting practice problems...")
    problems = fix_backslashes(get_practice_problems())
    print(f"Problems count: {len(problems)}")

    tail_path = os.path.join(os.path.dirname(__file__), 'dynamic_tail.js')
    with open(tail_path, 'r', encoding='utf-8') as f:
        tail = f.read()

    output = []
    output.append("/*\n * DATA.JS — Knowledge Base\n * ProbSpace: Probability Theory and Calculus & Integrals Platform\n * Complete Trilingual Educational Platform with 2 Main Tracks\n */\n")
    output.append("window.probabilityData = {\n")
    output.append("  /* ===================== UI STRINGS ===================== */\n")
    output.append("  ui: " + json.dumps(ui, ensure_ascii=False, indent=2) + ",\n\n")
    output.append("  /* ===================== THEORY CONTENT (ALL SECTIONS) ===================== */\n")
    output.append("  theory: " + json.dumps(theory, ensure_ascii=False, indent=2) + ",\n\n")
    output.append("  /* ===================== THEORY BY TRACKS ===================== */\n")
    output.append("  theoryTracks: " + json.dumps(theory_tracks, ensure_ascii=False, indent=2) + ",\n\n")
    output.append("  /* ===================== PRACTICE PROBLEMS ===================== */\n")
    output.append("  problems: " + json.dumps(problems, ensure_ascii=False, indent=2) + ",\n\n")
    output.append("  /* ===================== DYNAMIC TEMPLATES & GENERATOR ===================== */\n")
    output.append("  " + tail.lstrip())

    with open('build_data_src/lab_translations.json', encoding='utf-8') as f:
        output.append("\nwindow.calcPhraseData = " + json.dumps(json.load(f),ensure_ascii=False) + ";\n")
    result_js = "".join(output)

    target_path = 'js/data.js'
    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(result_js)

    print(f"Wrote {len(result_js)} characters to {target_path}")

    # Validate syntax with node
    print("Validating syntax with Node.js...")
    res = subprocess.run(['node', '-c', target_path], capture_output=True, text=True)
    if res.returncode == 0:
        print("SUCCESS! js/data.js is 100% valid JavaScript.")
    else:
        print("ERROR validating js/data.js:")
        print(res.stderr)
        exit(1)

if __name__ == '__main__':
    assemble()
