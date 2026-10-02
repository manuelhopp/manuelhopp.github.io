#!/usr/bin/env bash
# Rebuilds the generated files that two of the apps load, so no CDN is needed.
# Run from the repository root:  bash apps/src/build.sh   (needs Node.js)
#
# Only needed after you change classes or the colour config in
#   apps/Person_search.html or apps/bipolar_distance_embd.html  -> Tailwind CSS
#   apps/src/person_search.jsx                                   -> assets/js/person-search.js
set -euo pipefail

for pair in person_search:person-search bipolar:bipolar; do
  npx --yes tailwindcss@3.4.19 \
    -c "apps/src/tailwind.${pair%%:*}.config.js" \
    -i apps/src/tailwind.input.css \
    -o "assets/css/tailwind-${pair##*:}.css" --minify
done

# JSX -> plain JS (React.createElement), replaces the former in-browser Babel
npx --yes esbuild@0.25.10 apps/src/person_search.jsx --jsx=transform --target=es2018 \
  --banner:js="/* GENERATED from apps/src/person_search.jsx by apps/src/build.sh - edit the .jsx, not this file. */" \
  --outfile=assets/js/person-search.js
