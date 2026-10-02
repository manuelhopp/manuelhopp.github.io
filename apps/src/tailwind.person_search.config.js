// Tailwind config for apps/Person_search.html (extracted unchanged from the former inline CDN config).
module.exports = {
  "darkMode": "class",
  "content": [
    "apps/Person_search.html"
  ],
  "theme": {
    "extend": {
      "colors": {
        "terracotta": {
          "50": "#fff4ed",
          "100": "#ffe6d5",
          "500": "#f86116",
          "600": "#b83b05",
          "700": "#8f2e03",
          "DEFAULT": "#f86116",
          "light": "#fb7c3c",
          "deep": "#b83b05"
        },
        "paper": {
          "DEFAULT": "#f1f5f9",
          "hero": "#edf2f7",
          "surface": "#ffffff",
          "hairline": "#dbe3ec"
        },
        "study": {
          "dark": "#0a0f15",
          "hero": "#0f161f",
          "surface": "#101822",
          "hairline": "#16222f",
          "accent": "#fb7c3c"
        }
      },
      "fontFamily": {
        "serif": [
          "Merriweather",
          "Georgia",
          "serif"
        ],
        "sans": [
          "DM Sans",
          "system-ui",
          "sans-serif"
        ],
        "mono": [
          "JetBrains Mono",
          "monospace"
        ]
      }
    }
  }
};
