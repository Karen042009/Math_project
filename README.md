# Probability Pro

A comprehensive, interactive educational platform for Probability Theory and Statistics.

## Features

1.  **Theory Encyclopedia**: Structured learning with definitions, theorems, and proofs.
2.  **Practice Arena**: Gamified problem solving with smart hints that link back to theory.
3.  **The Lab**: Advanced calculator and distribution visualizer.
4.  **Simulations**: Interactive experiments (Galton Board, Monty Hall, Buffon's Needle).

## How to Run

Since this is a static web application using vanilla HTML/CSS/JS, you can simply open the `index.html` file in any modern web browser.

For the best experience (especially with browser security policies regarding ES modules or local file access), it is recommended to serve it via a local server:

```bash
# Python 3
python3 -m http.server

# Node.js (http-server)
npx http-server .
```

Then navigate to `http://localhost:8000`.

## Optional: AI (Gemini)

The AI Practice checker is **disabled by default** to avoid committing API keys into the repository.

To enable it, inject your key at runtime (local-only), e.g. add this before `js/ai.js` in `index.html`:

```html
<script>
  window.GEMINI_API_KEY = "YOUR_KEY_HERE";
</script>
```

## Technologies

*   **Core**: HTML5, CSS3, Vanilla JavaScript
*   **Math Rendering**: MathJax
*   **Fonts**: Google Fonts (Inter, Montserrat)
*   **Icons**: FontAwesome
