# apps/src

Sources for the generated files used by the apps (the apps no longer load anything from a CDN):

- `person_search.jsx` -> `assets/js/person-search.js` (React JSX, compiled ahead of time)
- `tailwind.*.config.js` + `tailwind.input.css` -> `assets/css/tailwind-*.css`

Rebuild after editing them: `bash apps/src/build.sh` from the repository root.
Vendored libraries live in `assets/vendor/` (React 18.3.1, Chart.js 4.4.0, MathJax 3.2.2); fonts in `assets/fonts/apps/` via `assets/css/app-fonts.css`.
