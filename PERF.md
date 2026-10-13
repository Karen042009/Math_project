# Theory navigation performance

Measured locally on 2026-10-13 with Chromium through Playwright CLI at
`http://localhost:8000`, with MathJax loaded and without CPU/network throttling.
These are synthetic debugging observations, not production INP or RUM results.

## Cause

The previous renderer inserted the entire selected course and asked MathJax to
process the full document repeatedly. The integral track produced 32,635 DOM
elements and 792 formula containers. A blur entrance animation also applied to
the whole reading page. Switching to this track blocked the synchronous call for
5,079 ms; the first completion observation was at 5,190 ms.

## Retained changes

- Render the outline first, then hydrate subsections as they approach the viewport.
- Typeset only requested containers, serially, with one job started per frame.
- Clear MathJax bookkeeping before replacing content and skip hidden pages.
- Cache completed theory bodies so revisiting them does not typeset them again.
- Remove the theory page's blur entrance and pause its background particles.
- Jump directly to subsection anchors. Smooth scrolling across placeholders
  caused intermediate content to mount and move the requested heading.

## Verification

Final desktop run: reset to home and the probability outline, scroll to the top,
then time `showPage('theory'); switchTheoryTrack('integral')`. Observe for 1.5 s
using a 20 ms interval to detect main-thread stalls.

| Observation | Result |
| --- | ---: |
| Synchronous navigation call | 17 ms |
| Largest observed 20 ms timer interval | 125 ms |
| Hydrated subsections after settling | 2 |
| Theory DOM elements after settling | 996 |
| Rendered formula containers | 16 |
| MathJax error nodes | 0 |

Earlier intermediate runs measured 42–75 ms synchronous navigation; the final
run additionally avoids smooth scrolling through unmounted sections. Measurements
vary by device, viewport, browser cache, and subsection content. The initial view
now processes only what is needed rather than paying the full-course cost. Each
individual MathJax typesetting job still runs on the main thread; the queue does
not guarantee a fixed rendering time for arbitrarily large subsections.

Browser checks covered the new integral-properties lesson, Monte Carlo uncertainty
lesson, and CLT lesson in Armenian, English, and Russian, including automatic
switching between tracks. All nine tested destinations settled 90 px below the
viewport top and had zero MathJax error nodes.

At a 390 × 844 viewport, the two new lessons were also checked in Armenian and
Russian: document width stayed at 390 px, anchors settled at 90 px, and no MathJax
error nodes appeared.

Regression guards:

```bash
node tests/regression.cjs
node tests/math-renderer.cjs
```

The tests check that hidden theory stays an outline, repeated navigation preserves
its DOM, and math jobs are deduplicated, serialized, cancellable, and cached after
completion. Course generation also validates JavaScript syntax:

```bash
python3 build_data_src/assembler.py
```
