"""Check lesson graphics against y=x², independently of their SVG paths."""
import re
import sys
import unittest
from pathlib import Path
from xml.etree import ElementTree

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "build_data_src"))
from theory_diagrams import COPY, figure


class DiagramTests(unittest.TestCase):
    def svg(self, kind, lang):
        return ElementTree.fromstring(re.search(r"<svg\b.*?</svg>", figure(kind, lang), re.S)[0])

    def test_translations_have_titles_and_wrappable_legends(self):
        for lang in COPY:
            for kind in ["history", "function", "derivative", "riemann"]:
                markup = figure(kind, lang)
                self.assertIn(f'<figcaption>{COPY[lang][kind]}</figcaption>', markup)
                if kind != "history":
                    self.assertIn('class="diagram-note"', markup)
                    # Long descriptions must live outside SVG text coordinates.
                    for text in self.svg(kind, lang).iter("text"):
                        self.assertLess(len(text.text or ""), 10)

    def test_marked_points_lie_on_the_parabola(self):
        for lang in COPY:
            for kind in ["function", "derivative"]:
                for point in self.svg(kind, lang).iter("circle"):
                    x = (float(point.get("cx")) - 60) / 90
                    y = (250 - float(point.get("cy"))) / 12
                    self.assertAlmostEqual(y, x*x)

    def test_left_rectangles_use_left_endpoint_values(self):
        for lang in COPY:
            rectangles = list(self.svg("riemann", lang).iter("rect"))
            self.assertEqual(len(rectangles), 3)  # The first rectangle has zero height.
            for rect in rectangles:
                left = (float(rect.get("x")) - 60) / 90
                height = float(rect.get("height")) / 12
                self.assertEqual(float(rect.get("width")) / 90, 1)
                self.assertAlmostEqual(height, left*left)


if __name__ == "__main__":
    unittest.main()
