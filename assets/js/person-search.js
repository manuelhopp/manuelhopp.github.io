/* GENERATED from apps/src/person_search.jsx by apps/src/build.sh - edit the .jsx, not this file. */
const { useState, useEffect, useMemo } = React;
const Icons = {
  Search: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "11", cy: "11", r: "8" }), /* @__PURE__ */ React.createElement("path", { d: "m21 21-4.3-4.3" })),
  BookOpen: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" }), /* @__PURE__ */ React.createElement("path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" })),
  FileText: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" }), /* @__PURE__ */ React.createElement("polyline", { points: "14 2 14 8 20 8" })),
  Copy: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2" }), /* @__PURE__ */ React.createElement("path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" })),
  Check: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polyline", { points: "20 6 9 17 4 12" })),
  ChevronLeft: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "m15 18-6-6 6-6" })),
  Layers: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }), /* @__PURE__ */ React.createElement("polyline", { points: "2 17 12 22 22 17" }), /* @__PURE__ */ React.createElement("polyline", { points: "2 12 12 17 22 12" })),
  Sun: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "12", r: "4" }), /* @__PURE__ */ React.createElement("path", { d: "M12 2v2" }), /* @__PURE__ */ React.createElement("path", { d: "M12 20v2" }), /* @__PURE__ */ React.createElement("path", { d: "m4.93 4.93 1.41 1.41" }), /* @__PURE__ */ React.createElement("path", { d: "m17.66 17.66 1.41 1.41" }), /* @__PURE__ */ React.createElement("path", { d: "M2 12h2" }), /* @__PURE__ */ React.createElement("path", { d: "M20 12h2" }), /* @__PURE__ */ React.createElement("path", { d: "m6.34 17.66-1.41 1.41" }), /* @__PURE__ */ React.createElement("path", { d: "m19.07 4.93-1.41 1.41" })),
  Moon: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" })),
  Home: () => /* @__PURE__ */ React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, /* @__PURE__ */ React.createElement("path", { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), /* @__PURE__ */ React.createElement("polyline", { points: "9 22 9 12 15 12 15 22" }))
};
const PROXY_URL = "https://corsproxy.io/?";
const S2_BASE = "https://api.semanticscholar.org/graph/v1";
const OA_BASE = "https://api.openalex.org";
const normalizeAuthor = (data, source) => {
  var _a, _b, _c, _d, _e;
  if (source === "openalex") {
    return {
      id: data.id,
      uniqueId: `oa_${data.id}`,
      name: data.display_name,
      affiliation: ((_b = (_a = data.last_known_institutions) == null ? void 0 : _a[0]) == null ? void 0 : _b.display_name) || ((_c = data.last_known_institution) == null ? void 0 : _c.display_name) || "Independent Scholar",
      citationCount: data.cited_by_count || 0,
      worksCount: data.works_count || 0,
      hIndex: ((_d = data.summary_stats) == null ? void 0 : _d.h_index) || "N/A",
      source: "openalex",
      original: data
    };
  } else if (source === "s2") {
    return {
      id: data.authorId,
      uniqueId: `s2_${data.authorId}`,
      name: data.name,
      affiliation: ((_e = data.affiliations) == null ? void 0 : _e[0]) || "Independent Scholar",
      citationCount: data.citationCount || 0,
      worksCount: data.paperCount || "N/A",
      hIndex: data.hIndex || "N/A",
      source: "s2",
      original: data
    };
  }
};
const normalizeWork = (data, source) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
  let work = {
    title: "",
    year: 0,
    authors: [],
    journal: "",
    volume: "",
    issue: "",
    pages: "",
    doi: "",
    url: "",
    source
  };
  if (source === "openalex") {
    work.title = data.title || "Untitled Work";
    work.year = data.publication_year;
    work.authors = (data.authorships || []).map((ship) => {
      var _a2;
      return (_a2 = ship.author) == null ? void 0 : _a2.display_name;
    }).filter(Boolean);
    work.journal = ((_b = (_a = data.primary_location) == null ? void 0 : _a.source) == null ? void 0 : _b.display_name) || "";
    work.volume = ((_c = data.biblio) == null ? void 0 : _c.volume) || "";
    work.issue = ((_d = data.biblio) == null ? void 0 : _d.issue) || "";
    work.pages = ((_e = data.biblio) == null ? void 0 : _e.first_page) && ((_f = data.biblio) == null ? void 0 : _f.last_page) ? `${data.biblio.first_page}\u2013${data.biblio.last_page}` : ((_g = data.biblio) == null ? void 0 : _g.first_page) || "";
    work.doi = data.doi || "";
    work.url = data.doi || ((_h = data.primary_location) == null ? void 0 : _h.landing_page_url) || "";
  } else if (source === "s2") {
    work.title = data.title || "Untitled Work";
    work.year = data.year;
    work.authors = (data.authors || []).map((a) => a.name).filter(Boolean);
    work.journal = data.venue || "";
    work.doi = ((_i = data.externalIds) == null ? void 0 : _i.DOI) || data.doi || "";
    work.url = data.url || ((_j = data.openAccessPdf) == null ? void 0 : _j.url) || (work.doi ? `https://doi.org/${work.doi}` : "");
  }
  return work;
};
const deduplicateWorks = (allWorks) => {
  const uniqueMap = /* @__PURE__ */ new Map();
  allWorks.forEach((work) => {
    if (!work.title) return;
    const titleKey = work.title.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
    const key = `${titleKey}_${work.year || "nd"}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, work);
    } else {
      const existing = uniqueMap.get(key);
      if (!existing.doi && work.doi) {
        uniqueMap.set(key, work);
      } else if (!existing.journal && work.journal && existing.doi === work.doi) {
        uniqueMap.set(key, work);
      }
    }
  });
  return Array.from(uniqueMap.values()).sort((a, b) => (b.year || 0) - (a.year || 0));
};
const formatAuthorsAPA = (authorNames) => {
  if (!authorNames || authorNames.length === 0) return "Unknown Author";
  const formatName = (name) => {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) return parts[0];
    const last = parts[parts.length - 1];
    const initials = parts.slice(0, parts.length - 1).map((p) => p[0].toUpperCase() + ".").join(" ");
    return `${last}, ${initials}`;
  };
  const formattedList = authorNames.map(formatName);
  if (formattedList.length === 1) return formattedList[0];
  if (formattedList.length === 2) return `${formattedList[0]}, & ${formattedList[1]}`;
  if (formattedList.length > 20) {
    return `${formattedList.slice(0, 19).join(", ")}, ... ${formattedList[formattedList.length - 1]}`;
  }
  return `${formattedList.slice(0, -1).join(", ")}, & ${formattedList[formattedList.length - 1]}`;
};
const getAPA = (work) => {
  const authors = formatAuthorsAPA(work.authors);
  const year = `(${work.year || "n.d."})`;
  const title = work.title;
  const journal = work.journal || "";
  const volume = work.volume || "";
  const issue = work.issue ? `(${work.issue})` : "";
  const pages = work.pages ? `, ${work.pages}` : "";
  const doi = work.doi ? work.doi.startsWith("http") ? work.doi : `https://doi.org/${work.doi}` : "";
  const url = !work.doi && work.url ? work.url : "";
  let plainText = `${authors} ${year}. ${title}.`;
  if (journal) {
    plainText += ` ${journal}`;
    if (volume) plainText += `, ${volume}`;
    if (issue) plainText += `${issue}`;
    if (pages) plainText += `${pages}`;
    plainText += `.`;
  }
  if (doi) plainText += ` ${doi}`;
  else if (url) plainText += ` ${url}`;
  const jsx = /* @__PURE__ */ React.createElement("span", { className: "apa-citation leading-relaxed text-slate-800 dark:text-stone-200" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-slate-900 dark:text-white font-sans" }, authors), " ", year, ". ", /* @__PURE__ */ React.createElement("span", { className: "font-serif" }, title), ".", " ", journal && /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("em", { className: "text-slate-700 dark:text-stone-300" }, journal), volume && /* @__PURE__ */ React.createElement("span", null, ", ", /* @__PURE__ */ React.createElement("em", null, volume)), issue, pages, "."), doi && /* @__PURE__ */ React.createElement("a", { href: doi, target: "_blank", rel: "noreferrer", className: "text-terracotta-deep hover:text-terracotta-deep dark:text-study-accent dark:hover:text-white transition-colors underline ml-1 break-all text-xs font-mono" }, doi), !doi && url && /* @__PURE__ */ React.createElement("a", { href: url, target: "_blank", rel: "noreferrer", className: "text-terracotta-deep hover:text-terracotta-deep dark:text-study-accent dark:hover:text-white transition-colors underline ml-1 break-all text-xs font-mono" }, url));
  return { plainText, jsx };
};
const copyToClipboard = async (text) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      console.warn("Clipboard API failed, trying fallback...", e);
    }
  }
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  let success = false;
  try {
    success = document.execCommand("copy");
  } catch (err) {
    success = false;
  }
  document.body.removeChild(textArea);
  return success;
};
const Header = ({ resetApp, isDark, toggleTheme }) => /* @__PURE__ */ React.createElement("header", { className: "sticky top-0 z-50 bg-paper/90 dark:bg-study-dark/90 backdrop-blur-md border-b border-paper-hairline dark:border-study-hairline transition-colors duration-300" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between" }, /* @__PURE__ */ React.createElement(
  "div",
  {
    className: "flex items-center gap-3 cursor-pointer group select-none",
    onClick: resetApp
  },
  /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 bg-terracotta text-white flex items-center justify-center shadow-sm group-hover:bg-terracotta-deep transition-colors" }, /* @__PURE__ */ React.createElement(Icons.BookOpen, null)),
  /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("span", { className: "font-serif font-bold text-lg text-slate-900 dark:text-white tracking-tight leading-none" }, "ScholarCite"), /* @__PURE__ */ React.createElement("span", { className: "text-[11px] font-mono text-terracotta-deep dark:text-study-accent font-semibold" }, "Multi-Source")), /* @__PURE__ */ React.createElement("p", { className: "text-[11px] text-stone-500 dark:text-stone-400 font-medium" }, "Dr. Manuel D. S. Hopp \u2022 Academic Tools"))
), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3" }, /* @__PURE__ */ React.createElement(
  "a",
  {
    href: "../index.html",
    className: "hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-terracotta-deep dark:hover:text-white border border-paper-hairline dark:border-study-hairline hover:border-terracotta transition-colors",
    title: "Return to Main Homepage"
  },
  /* @__PURE__ */ React.createElement(Icons.Home, null),
  /* @__PURE__ */ React.createElement("span", null, "Homepage")
), /* @__PURE__ */ React.createElement(
  "button",
  {
    onClick: toggleTheme,
    "aria-label": "Toggle Theme",
    className: "p-2 border border-paper-hairline dark:border-study-hairline hover:border-terracotta dark:hover:border-terracotta text-stone-700 dark:text-stone-300 hover:text-terracotta-deep transition-colors"
  },
  isDark ? /* @__PURE__ */ React.createElement(Icons.Sun, null) : /* @__PURE__ */ React.createElement(Icons.Moon, null)
))));
const SearchScreen = ({ onProfilesSelect }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [status, setStatus] = useState("");
  const [selectedIds, setSelectedIds] = useState(/* @__PURE__ */ new Set());
  const [error, setError] = useState("");
  const searchAuthors = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setHasSearched(true);
    setStatus("Querying OpenAlex and Semantic Scholar APIs...");
    setResults([]);
    setError("");
    setSelectedIds(/* @__PURE__ */ new Set());
    const p1 = fetch(`${OA_BASE}/authors?search=${encodeURIComponent(query)}&per-page=6`).then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    }).then((data) => (data.results || []).map((r) => normalizeAuthor(r, "openalex"))).catch((err) => {
      console.warn("OpenAlex fetch failed:", err);
      return null;
    });
    const p2 = fetch(`${PROXY_URL}${encodeURIComponent(`${S2_BASE}/author/search?query=${encodeURIComponent(query)}&fields=name,citationCount,hIndex,affiliations,paperCount&limit=6`)}`).then((res) => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    }).then((data) => (data.data || []).map((r) => normalizeAuthor(r, "s2"))).catch((err) => {
      console.warn("Semantic Scholar fetch failed:", err);
      return null;
    });
    try {
      const [oaResults, s2Results] = await Promise.all([p1, p2]);
      if (oaResults === null && s2Results === null) {
        setError("Could not reach OpenAlex or Semantic Scholar. Please check your connection and try again.");
      } else if (oaResults === null || s2Results === null) {
        setError(`${oaResults === null ? "OpenAlex" : "Semantic Scholar"} did not respond - showing results from the other source only.`);
      }
      const combined = [...oaResults || [], ...s2Results || []].sort((a, b) => b.citationCount - a.citationCount);
      setResults(combined);
    } finally {
      setLoading(false);
      setStatus("");
    }
  };
  const toggleSelection = (uniqueId) => {
    const newSet = new Set(selectedIds);
    if (newSet.has(uniqueId)) {
      newSet.delete(uniqueId);
    } else {
      newSet.add(uniqueId);
    }
    setSelectedIds(newSet);
  };
  const handleCombine = () => {
    const selectedProfiles = results.filter((r) => selectedIds.has(r.uniqueId));
    onProfilesSelect(selectedProfiles);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col items-center py-16 px-4 fade-in pb-32 max-w-4xl mx-auto w-full" }, /* @__PURE__ */ React.createElement("div", { className: "text-center max-w-2xl w-full mb-10" }, /* @__PURE__ */ React.createElement("div", { className: "inline-block border-l-2 border-terracotta pl-3 mb-3" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs uppercase tracking-wider font-semibold text-terracotta-deep dark:text-study-accent" }, "Bibliographic Query Tool")), /* @__PURE__ */ React.createElement("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight" }, "Author & Publication Explorer"), /* @__PURE__ */ React.createElement("p", { className: "text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed" }, "Search cross-database profiles from OpenAlex and Semantic Scholar. Select matching author profiles to merge and generate unified APA 7th bibliographies.")), /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-2xl mb-10" }, /* @__PURE__ */ React.createElement("form", { onSubmit: searchAuthors, className: "relative flex shadow-sm border border-paper-hairline dark:border-study-hairline bg-white dark:bg-study-surface focus-within:border-terracotta transition-colors" }, /* @__PURE__ */ React.createElement("div", { className: "relative flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400" }, /* @__PURE__ */ React.createElement(Icons.Search, null)), /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      className: "block w-full pl-11 pr-4 py-3.5 text-slate-900 dark:text-white placeholder-stone-400 border-none outline-none text-base bg-transparent font-sans",
      placeholder: "Search researcher name (e.g., 'Manuel Hopp', 'Demis Hassabis')",
      value: query,
      onChange: (e) => setQuery(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "submit",
      disabled: loading,
      className: "px-6 py-3.5 bg-terracotta hover:bg-terracotta-deep text-white font-semibold btn-editorial text-sm flex items-center gap-2 transition-colors disabled:opacity-50"
    },
    loading ? "Searching..." : "Search"
  ))), /* @__PURE__ */ React.createElement("div", { className: "w-full max-w-2xl space-y-4" }, status && /* @__PURE__ */ React.createElement("div", { className: "text-center text-xs font-mono text-terracotta-deep dark:text-study-accent animate-pulse py-2" }, status), error && /* @__PURE__ */ React.createElement("div", { className: "text-center text-xs font-mono text-terracotta-deep dark:text-study-accent py-2", role: "alert" }, error), hasSearched && results.length === 0 && !loading && !status && !error && /* @__PURE__ */ React.createElement("div", { className: "text-center text-stone-500 dark:text-stone-400 py-12 glass-card" }, /* @__PURE__ */ React.createElement("p", { className: "font-serif text-lg text-slate-800 dark:text-stone-200 mb-1" }, "No researcher profiles found"), /* @__PURE__ */ React.createElement("p", { className: "text-xs" }, "Try adjusting spelling or searching with alternative name variants.")), results.map((author) => {
    const isSelected = selectedIds.has(author.uniqueId);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: author.uniqueId,
        onClick: () => toggleSelection(author.uniqueId),
        className: `p-5 glass-card cursor-pointer select-none transition-all border ${isSelected ? "border-terracotta ring-1 ring-terracotta bg-terracotta-50/50 dark:bg-terracotta-900/10" : "border-paper-hairline dark:border-study-hairline hover:border-terracotta/50"}`
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-start gap-4" }, /* @__PURE__ */ React.createElement("div", { className: `w-5 h-5 mt-1 border flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? "bg-terracotta border-terracotta text-white" : "border-stone-300 dark:border-stone-600 bg-white dark:bg-study-dark"}` }, isSelected && /* @__PURE__ */ React.createElement(Icons.Check, null)), /* @__PURE__ */ React.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap items-center justify-between gap-2 mb-1" }, /* @__PURE__ */ React.createElement("h3", { className: "font-serif font-bold text-lg text-slate-900 dark:text-white leading-snug" }, author.name), /* @__PURE__ */ React.createElement("span", { className: author.source === "openalex" ? "keyword-tag text-[10px]" : "skill-tag text-[10px]" }, author.source === "openalex" ? "OpenAlex" : "Semantic Scholar")), /* @__PURE__ */ React.createElement("p", { className: "text-stone-600 dark:text-stone-300 text-sm mb-3" }, author.affiliation), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 text-xs text-stone-500 dark:text-stone-400 font-mono" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ React.createElement(Icons.FileText, null), /* @__PURE__ */ React.createElement("strong", { className: "text-slate-800 dark:text-stone-200" }, author.citationCount.toLocaleString()), " citations"), author.hIndex !== "N/A" && /* @__PURE__ */ React.createElement("span", null, "\u2022 h-index: ", /* @__PURE__ */ React.createElement("strong", { className: "text-slate-800 dark:text-stone-200" }, author.hIndex)), author.worksCount !== "N/A" && /* @__PURE__ */ React.createElement("span", null, "\u2022 ", /* @__PURE__ */ React.createElement("strong", { className: "text-slate-800 dark:text-stone-200" }, author.worksCount), " works"))))
    );
  })), selectedIds.size > 0 && /* @__PURE__ */ React.createElement("div", { className: "fixed bottom-8 z-50 animate-bounce-short" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleCombine,
      className: "bg-slate-900 dark:bg-study-surface text-white px-6 py-3.5 shadow-2xl flex items-center gap-3 hover:bg-terracotta dark:hover:bg-terracotta transition-all border border-paper-hairline dark:border-study-hairline"
    },
    /* @__PURE__ */ React.createElement("span", { className: "bg-terracotta w-6 h-6 flex items-center justify-center text-xs font-mono font-bold text-white" }, selectedIds.size),
    /* @__PURE__ */ React.createElement("span", { className: "font-sans font-semibold text-sm" }, selectedIds.size > 1 ? "Merge & View Combined Works" : "View Author Works"),
    /* @__PURE__ */ React.createElement(Icons.Layers, null)
  )));
};
const CitationCard = ({ work }) => {
  const [copied, setCopied] = useState(false);
  const { plainText, jsx } = getAPA(work);
  const handleCopy = async () => {
    const ok = await copyToClipboard(plainText);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "p-5 glass-card relative overflow-hidden group" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row items-start justify-between gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex-grow pr-2" }, /* @__PURE__ */ React.createElement("div", { className: "mb-3 text-[14px]" }, jsx), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400" }, /* @__PURE__ */ React.createElement("span", { className: work.source === "openalex" ? "keyword-tag text-[10px]" : "skill-tag text-[10px]" }, work.source === "openalex" ? "OpenAlex" : "Semantic Scholar"), /* @__PURE__ */ React.createElement("span", null, work.year || "n.d."), work.journal && /* @__PURE__ */ React.createElement("span", { className: "truncate max-w-[240px] text-stone-600 dark:text-stone-400" }, work.journal))), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: handleCopy,
      className: `flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-semibold transition-colors border ${copied ? "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 border-emerald-300" : "bg-white dark:bg-study-surface text-stone-700 dark:text-stone-300 border-paper-hairline dark:border-study-hairline hover:border-terracotta"}`,
      title: "Copy APA Citation"
    },
    copied ? /* @__PURE__ */ React.createElement(Icons.Check, null) : /* @__PURE__ */ React.createElement(Icons.Copy, null),
    /* @__PURE__ */ React.createElement("span", null, copied ? "Copied" : "Copy")
  )));
};
const ProfileScreen = ({ profiles, onBack }) => {
  const [works, setWorks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allCopied, setAllCopied] = useState(false);
  const primaryProfile = useMemo(() => {
    return [...profiles].sort((a, b) => b.citationCount - a.citationCount)[0];
  }, [profiles]);
  useEffect(() => {
    const fetchAllWorks = async () => {
      setLoading(true);
      let allFetches = [];
      profiles.forEach((p) => {
        if (p.source === "openalex") {
          const promise = fetch(`${OA_BASE}/works?filter=author.id:${p.id.split("/").pop()}&sort=publication_date:desc&per-page=100`).then((res) => res.json()).then((data) => (data.results || []).map((r) => normalizeWork(r, "openalex"))).catch((e) => {
            console.warn("OA fetch err", e);
            return [];
          });
          allFetches.push(promise);
        } else {
          const url = `${S2_BASE}/author/${p.id}/papers?fields=title,year,venue,authors,url,publicationDate,externalIds,openAccessPdf&limit=100`;
          const promise = fetch(`${PROXY_URL}${encodeURIComponent(url)}`).then((res) => res.json()).then((data) => (data.data || []).map((r) => normalizeWork(r, "s2"))).catch((e) => {
            console.warn("S2 fetch err", e);
            return [];
          });
          allFetches.push(promise);
        }
      });
      try {
        const resultsArray = await Promise.all(allFetches);
        const flattened = resultsArray.flat();
        const uniqueSorted = deduplicateWorks(flattened);
        setWorks(uniqueSorted);
      } catch (error) {
        console.error("Failed to fetch publications", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllWorks();
  }, [profiles]);
  const copyAllCitations = async () => {
    const fullText = works.map((w) => getAPA(w).plainText).join("\n\n");
    const ok = await copyToClipboard(fullText);
    if (ok) {
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 2500);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "flex-1 flex flex-col fade-in pb-24" }, /* @__PURE__ */ React.createElement("div", { className: "bg-paper-hero dark:bg-study-hero border-b border-paper-hairline dark:border-study-hairline py-10 transition-colors" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-5xl mx-auto px-4 sm:px-6" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: onBack,
      className: "text-xs font-semibold text-stone-600 dark:text-stone-400 hover:text-terracotta-deep dark:hover:text-white mb-6 flex items-center gap-1.5 transition-colors border border-paper-hairline dark:border-study-hairline px-3 py-1.5 bg-white dark:bg-study-surface w-fit"
    },
    /* @__PURE__ */ React.createElement(Icons.ChevronLeft, null),
    /* @__PURE__ */ React.createElement("span", null, "Back to Search")
  ), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col md:flex-row items-start md:items-center gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 bg-terracotta text-white flex items-center justify-center font-serif text-2xl font-bold shadow-md flex-shrink-0" }, primaryProfile.name.charAt(0)), /* @__PURE__ */ React.createElement("div", { className: "flex-grow" }, /* @__PURE__ */ React.createElement("div", { className: "border-l-3 border-terracotta pl-3 mb-1" }, /* @__PURE__ */ React.createElement("h1", { className: "font-serif text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white" }, primaryProfile.name)), /* @__PURE__ */ React.createElement("p", { className: "text-stone-600 dark:text-stone-300 text-sm font-medium mb-3" }, primaryProfile.affiliation), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, profiles.map((p) => /* @__PURE__ */ React.createElement("span", { key: p.uniqueId, className: p.source === "openalex" ? "keyword-tag" : "skill-tag" }, p.source === "openalex" ? "OpenAlex Profile" : "Semantic Scholar Profile"))))))), /* @__PURE__ */ React.createElement("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 py-10 w-full" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10" }, profiles.map((p) => /* @__PURE__ */ React.createElement("div", { key: p.uniqueId, className: "p-5 glass-card border-l-4 border-terracotta" }, /* @__PURE__ */ React.createElement("div", { className: "text-[11px] font-mono uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2" }, p.source === "openalex" ? "OpenAlex Metrics" : "Semantic Scholar Metrics"), /* @__PURE__ */ React.createElement("div", { className: "flex gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-mono font-bold text-slate-900 dark:text-white" }, p.citationCount.toLocaleString()), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-500" }, "Citations")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "text-2xl font-mono font-bold text-slate-900 dark:text-white" }, p.hIndex), /* @__PURE__ */ React.createElement("div", { className: "text-xs text-stone-500" }, "h-index")))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-3 border-b border-paper-hairline dark:border-study-hairline" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", { className: "font-serif text-xl font-bold text-slate-900 dark:text-white" }, "Publications & Citations"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-stone-500 dark:text-stone-400 font-mono mt-0.5" }, works.length, " deduplicated works \u2022 formatted in APA 7th Edition")), works.length > 0 && /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: copyAllCitations,
      className: "btn-editorial px-4 py-2 bg-terracotta hover:bg-terracotta-deep text-white text-xs font-mono font-semibold flex items-center gap-2 transition-colors"
    },
    allCopied ? /* @__PURE__ */ React.createElement(Icons.Check, null) : /* @__PURE__ */ React.createElement(Icons.Copy, null),
    /* @__PURE__ */ React.createElement("span", null, allCopied ? "All Works Copied!" : "Copy All (APA)")
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, loading ? /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, [1, 2, 3, 4].map((i) => /* @__PURE__ */ React.createElement("div", { key: i, className: "p-6 glass-card animate-pulse h-28 bg-stone-100 dark:bg-study-surface/40" }))) : works.map((work, idx) => /* @__PURE__ */ React.createElement(CitationCard, { key: `${work.title}_${idx}`, work })), !loading && works.length === 0 && /* @__PURE__ */ React.createElement("div", { className: "text-center py-12 glass-card text-stone-500" }, "No publications found for the selected author profiles.")))));
};
const App = () => {
  const [selectedProfiles, setSelectedProfiles] = useState([]);
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("scholarcite_theme");
    if (saved) return saved === "dark";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("scholarcite_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("scholarcite_theme", "light");
    }
  }, [isDark]);
  const toggleTheme = () => setIsDark(!isDark);
  return /* @__PURE__ */ React.createElement("div", { className: "flex flex-col min-h-screen" }, /* @__PURE__ */ React.createElement(
    Header,
    {
      resetApp: () => setSelectedProfiles([]),
      isDark,
      toggleTheme
    }
  ), selectedProfiles.length > 0 ? /* @__PURE__ */ React.createElement(
    ProfileScreen,
    {
      profiles: selectedProfiles,
      onBack: () => setSelectedProfiles([])
    }
  ) : /* @__PURE__ */ React.createElement(SearchScreen, { onProfilesSelect: setSelectedProfiles }));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ React.createElement(App, null));
