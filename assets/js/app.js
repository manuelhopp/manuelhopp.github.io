/* =========================================
   1. TAILWIND CONFIGURATION
   ========================================= */
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['DM Sans', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            colors: {
                academic: {
                    50:  '#fdf6f0',
                    100: '#f5e3d0',
                    200: '#eac7a6',
                    300: '#d9a07a',
                    400: '#d4784d',
                    500: '#c4622d',
                    600: '#a34e20',
                    700: '#823c17',
                    900: '#1c1714',
                    950: '#110d0a',
                }
            }
        }
    }
};

/* =========================================
   2. CONTENT RENDERING & EMAIL ENCRYPTION
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {

    // Helper: Safely get element
    const el = (id) => document.getElementById(id);

    // --- A. Render Personal Info ---
    if (el('profile-name')) el('profile-name').textContent = profileData.personal.name;
    if (el('nav-name')) el('nav-name').textContent = profileData.personal.name;
    if (el('profile-role')) el('profile-role').textContent = profileData.personal.role;
    if (el('profile-inst')) el('profile-inst').innerHTML = `${profileData.personal.institution}<br>${profileData.personal.university}`;
    if (el('profile-img')) el('profile-img').src = profileData.personal.imagePath;

    // --- B. Render Email (Base64 Obfuscation & Click-to-Copy) ---
    // The email is decoded and assembled here. It does not exist in plaintext in the source.
    const mailLinks = document.querySelectorAll('.email-link');
    const decodedUser = atob(profileData.personal.emailUser);
    const decodedDomain = atob(profileData.personal.emailDomain);
    const fullEmail = `${decodedUser}@${decodedDomain}`;

    mailLinks.forEach(link => {
        link.href = `mailto:${fullEmail}`;
        // Only set text content if the link is empty or explicitly asks for the address
        if (link.classList.contains('show-email-text')) {
            link.textContent = "Contact Me";
        }
    });

    const copyBtns = document.querySelectorAll('.email-copy-btn');
    copyBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText(fullEmail).then(() => {
                const tooltip = btn.querySelector('.copy-tooltip');
                if (tooltip) {
                    const originalText = tooltip.textContent;
                    tooltip.textContent = "Copied!";
                    btn.classList.add('copied');
                    setTimeout(() => {
                        tooltip.textContent = originalText;
                        btn.classList.remove('copied');
                    }, 2000);
                }
            }).catch(err => {
                console.error("Could not copy email: ", err);
            });
        });
    });

    // --- C. Render About & Highlights ---
    if (el('about-content')) el('about-content').innerHTML = profileData.about;

    if (el('highlights-list')) {
        el('highlights-list').innerHTML = profileData.highlights.map(item => `
            <li class="flex items-start">
                <i class="ph ph-check-circle text-academic-500 mt-1 mr-3 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">${item}</span>
            </li>
        `).join('');
    }

    // --- D. Render Interests (Badges) ---
    if (el('interests-list')) {
        el('interests-list').innerHTML = profileData.interests.map(interest =>
            `<span class="keyword-tag hover-lift cursor-default">${interest}</span>`
        ).join('');
    }

    // --- D2. Render Skills (Badges) ---
    if (el('skills-list')) {
        el('skills-list').innerHTML = profileData.skills.map(skill =>
            `<span class="skill-tag cursor-default">${skill}</span>`
        ).join('');
    }

    // --- E. Render Publications ---
    if (el('publications-list')) {
        el('publications-list').innerHTML = profileData.publications.map(pub =>
            `<div class="relative">
                <div class="absolute -left-6 top-2 h-3 w-3 rounded-full border-2 border-white dark:border-stone-900 bg-academic-500"></div>
                <div class="keyword-tag mb-2" style="font-size:0.68rem;font-weight:700;letter-spacing:0.08em;">${pub.year}</div>
                <h3 class="font-serif text-base font-bold text-slate-900 dark:text-gray-100 leading-snug mb-1">${pub.title}</h3>
                <p class="text-stone-500 dark:text-stone-400 italic text-sm">${pub.venue}</p>
                <p class="text-stone-600 dark:text-stone-300 mt-1.5 text-sm">${pub.authors}</p>
                ${pub.link ? `
                    <a href="${pub.link}" target="_blank" rel="noopener" class="text-academic-500 hover:text-academic-600 text-xs inline-flex items-center gap-1 mt-2 font-medium">
                        ${pub.linkText || 'View'} <i class="ph ph-arrow-right" aria-hidden="true"></i>
                    </a>
                ` : ''}
            </div>`
        ).join('');
    }

    // --- F. Render Teaching ---
    if (el('teaching-list')) {
        el('teaching-list').innerHTML = profileData.teaching.map(item => `
            <li class="flex gap-3">
                <i class="ph ${item.icon} text-academic-500 text-lg mt-0.5"></i>
                <div>
                    <p class="text-sm font-semibold text-slate-900 dark:text-gray-200">${item.title}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">${item.subtitle}</p>
                </div>
            </li>
        `).join('');
    }

    // --- G. Render Talks ---
    if (el('talks-list')) {
        el('talks-list').innerHTML = profileData.talks.map(talk => `
            <div class="flex gap-4">
                <div class="flex-shrink-0 mt-1">
                    <i class="ph ${talk.icon} text-xl text-gray-400"></i>
                </div>
                <div>
                    <h4 class="font-semibold text-slate-900 dark:text-white">${talk.title}</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-400">${talk.location}</p>
                    ${talk.description ? `<p class="text-sm text-gray-700 dark:text-gray-300 mt-1">${talk.description}</p>` : ''}
                </div>
            </div>
        `).join('');
    }
});


/* =========================================
   3. UI INTERACTION (Dark Mode & Menu)
   ========================================= */
// Check local storage or system preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
document.getElementById('mobile-theme-toggle')?.addEventListener('click', toggleTheme);

const menuBtn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');
menuBtn?.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


/* =========================================
   4. ADVANCED EFFECTS (Scroll & Reveal)
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    // A. Scroll Progress Bar
    const progressBar = document.getElementById('scroll-progress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        });
    }

    // B. Staggered Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target); // Reveal once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // C. Initialize Hero Background Topological Canvas
    initHeroCanvas();
});

/* =========================================
   5. TOPOLOGICAL BACKGROUND CANVAS
   ========================================= */
function initHeroCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    let devicePixelRatio = window.devicePixelRatio || 1;

    // Node count
    const numNodes = 32;
    const nodes = [];
    let currentThreshold = 120;
    let targetThreshold = 120;

    // Mouse coordinates relative to canvas
    const mouse = { x: 0, y: 0, active: false };

    // Setup canvas dimension with high-DPI scaling
    function resize() {
        const rect = canvas.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        devicePixelRatio = window.devicePixelRatio || 1;

        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    window.addEventListener('resize', resize);
    resize();

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
        nodes.push({
            x: Math.random() * (width || 800),
            y: Math.random() * (height || 300),
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            radius: 2 + Math.random() * 1.5,
            baseVx: 0,
            baseVy: 0
        });
        nodes[i].baseVx = nodes[i].vx;
        nodes[i].baseVy = nodes[i].vy;
    }

    // Keep track of mouse state
    const heroSection = canvas.closest('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.active = true;
        });

        heroSection.addEventListener('mouseleave', () => {
            mouse.active = false;
        });
    }

    // Helper: Distance between two nodes/points
    function dist(p1, p2) {
        return Math.hypot(p1.x - p2.x, p1.y - p2.y);
    }

    function animate(timestamp) {
        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        const isDark = document.documentElement.classList.contains('dark');
        
        // Define colors based on theme
        const nodeColor = isDark ? 'rgba(212, 120, 77, 0.7)' : 'rgba(196, 98, 45, 0.6)';
        const edgeColor = isDark ? 'rgba(140, 128, 116, 0.12)' : 'rgba(120, 108, 96, 0.08)';
        const triangleColor = isDark ? 'rgba(196, 98, 45, 0.035)' : 'rgba(196, 98, 45, 0.015)';
        const cavityColor = '196, 98, 45'; // RGB values for terracotta

        // Pulse factor for cavities
        const pulse = 0.65 + 0.35 * Math.sin(timestamp * 0.0025);

        // Update connection threshold dynamically based on mouse position (filtration parameter ε)
        if (mouse.active) {
            const pct = Math.max(0, Math.min(1, mouse.x / width));
            targetThreshold = 60 + pct * 120; // ε varies from 60px to 180px
        } else {
            targetThreshold = 120; // Default threshold when mouse is inactive
        }
        currentThreshold = currentThreshold * 0.92 + targetThreshold * 0.08;

        // Update positions & bounce (no mouse attraction)
        for (let i = 0; i < numNodes; i++) {
            const node = nodes[i];

            // Slow drift
            node.x += node.vx;
            node.y += node.vy;

            // Bounce off edges with minor padding
            const pad = 10;
            if (node.x < pad) { node.x = pad; node.vx *= -1; }
            if (node.x > width - pad) { node.x = width - pad; node.vx *= -1; }
            if (node.y < pad) { node.y = pad; node.vy *= -1; }
            if (node.y > height - pad) { node.y = height - pad; node.vy *= -1; }
        }

        // Build adjacency representation using dynamic threshold
        const edgesSet = new Set();
        const adj = Array.from({ length: numNodes }, () => []);

        for (let i = 0; i < numNodes; i++) {
            for (let j = i + 1; j < numNodes; j++) {
                if (dist(nodes[i], nodes[j]) < currentThreshold) {
                    adj[i].push(j);
                    adj[j].push(i);
                    edgesSet.add(`${i}-${j}`);
                }
            }
        }

        function hasEdge(u, v) {
            return edgesSet.has(u < v ? `${u}-${v}` : `${v}-${u}`);
        }

        // 1. Find Triangles (3-cycles) -> Contractible simplices
        const triangles = [];
        for (let i = 0; i < numNodes; i++) {
            for (let idx = 0; idx < adj[i].length; idx++) {
                const j = adj[i][idx];
                if (j > i) {
                    for (let idx2 = 0; idx2 < adj[j].length; idx2++) {
                        const k = adj[j][idx2];
                        if (k > j && hasEdge(i, k)) {
                            triangles.push([i, j, k]);
                        }
                    }
                }
            }
        }

        // Draw triangles (filled 2-simplices)
        ctx.fillStyle = triangleColor;
        triangles.forEach(([i, j, k]) => {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.lineTo(nodes[k].x, nodes[k].y);
            ctx.closePath();
            ctx.fill();
        });

        // 2. Find Chordless 4-cycles -> 1D topological cavities (holes)
        const cavities = [];
        for (let u = 0; u < numNodes; u++) {
            for (let w = u + 1; w < numNodes; w++) {
                if (hasEdge(u, w)) continue; // chordal edge exists

                const common = [];
                for (let idx = 0; idx < adj[u].length; idx++) {
                    const neigh = adj[u][idx];
                    if (hasEdge(w, neigh)) {
                        common.push(neigh);
                    }
                }

                if (common.length >= 2) {
                    for (let idx1 = 0; idx1 < common.length; idx1++) {
                        for (let idx2 = idx1 + 1; idx2 < common.length; idx2++) {
                            const v1 = common[idx1];
                            const v2 = common[idx2];

                            // Chordless condition: no edge between v1 and v2
                            if (hasEdge(v1, v2)) continue;

                            // Deduplication condition
                            if (u < v1 && u < v2) {
                                cavities.push([u, v1, w, v2]);
                            }
                        }
                    }
                }
            }
        }

        // Draw cavities (H1 topological holes)
        cavities.forEach(([u, v1, w, v2]) => {
            const cx = (nodes[u].x + nodes[v1].x + nodes[w].x + nodes[v2].x) / 4;
            const cy = (nodes[u].y + nodes[v1].y + nodes[w].y + nodes[v2].y) / 4;

            // Distance to vertices to define radius of gradient
            const rAvg = (dist(nodes[u], {x: cx, y: cy}) +
                          dist(nodes[v1], {x: cx, y: cy}) +
                          dist(nodes[w], {x: cx, y: cy}) +
                          dist(nodes[v2], {x: cx, y: cy})) / 4;

            // Radial gradient fill
            const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rAvg);
            grad.addColorStop(0, `rgba(${cavityColor}, ${0.24 * pulse})`);
            grad.addColorStop(0.5, `rgba(${cavityColor}, ${0.12 * pulse})`);
            grad.addColorStop(1, `rgba(${cavityColor}, 0)`);

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(nodes[u].x, nodes[u].y);
            ctx.lineTo(nodes[v1].x, nodes[v1].y);
            ctx.lineTo(nodes[w].x, nodes[w].y);
            ctx.lineTo(nodes[v2].x, nodes[v2].y);
            ctx.closePath();
            ctx.fill();

            // Dashed pulsing border
            ctx.strokeStyle = `rgba(${cavityColor}, ${0.45 * pulse})`;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
            ctx.setLineDash([]);

            // Draw scientific marker "H₁" (first homology generator) at the center
            ctx.fillStyle = isDark ? `rgba(230, 221, 213, ${0.4 + 0.3 * pulse})` : `rgba(28, 24, 22, ${0.4 + 0.3 * pulse})`;
            ctx.font = 'italic 10px Merriweather, serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('H₁', cx, cy);
        });

        // 3. Draw Edges
        ctx.strokeStyle = edgeColor;
        ctx.lineWidth = 0.8;
        edgesSet.forEach(key => {
            const [i, j] = key.split('-').map(Number);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
        });

        // 4. Draw Nodes and dynamic coordinates
        for (let i = 0; i < numNodes; i++) {
            const node = nodes[i];
            ctx.fillStyle = nodeColor;
            ctx.beginPath();
            ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
            ctx.fill();

            // Hover features: highlight local nodes and render coordinates/simplices
            if (mouse.active) {
                const dMouse = dist(node, mouse);
                if (dMouse < 80) {
                    // Highlight node with an outer ring
                    ctx.strokeStyle = `rgba(${cavityColor}, 0.8)`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
                    ctx.stroke();

                    // Coordinates label (scientific touch)
                    ctx.fillStyle = isDark ? 'rgba(230, 221, 213, 0.7)' : 'rgba(28, 24, 22, 0.7)';
                    ctx.font = '7px monospace';
                    ctx.textAlign = 'left';
                    ctx.fillText(`[x:${Math.round(node.x)}, y:${Math.round(node.y)}]`, node.x + 8, node.y - 4);
                    ctx.fillText(`v_${i}`, node.x + 8, node.y + 4);

                    // Draw line from mouse to node
                    ctx.strokeStyle = isDark ? 'rgba(212, 120, 77, 0.15)' : 'rgba(196, 98, 45, 0.12)';
                    ctx.lineWidth = 1;
                    ctx.setLineDash([2, 2]);
                    ctx.beginPath();
                    ctx.moveTo(mouse.x, mouse.y);
                    ctx.lineTo(node.x, node.y);
                    ctx.stroke();
                    ctx.setLineDash([]);
                }
            }
        }

        // Draw mouse coordinate crosshair
        if (mouse.active) {
            ctx.strokeStyle = isDark ? 'rgba(212, 120, 77, 0.15)' : 'rgba(196, 98, 45, 0.1)';
            ctx.lineWidth = 0.5;
            // horizontal line
            ctx.beginPath();
            ctx.moveTo(0, mouse.y);
            ctx.lineTo(width, mouse.y);
            ctx.stroke();
            // vertical line
            ctx.beginPath();
            ctx.moveTo(mouse.x, 0);
            ctx.lineTo(mouse.x, height);
            ctx.stroke();

            // Label at crosshair
            ctx.fillStyle = isDark ? 'rgba(230, 221, 213, 0.5)' : 'rgba(28, 24, 22, 0.5)';
            ctx.font = '8px monospace';
            ctx.textAlign = 'left';
            ctx.fillText(`x:${Math.round(mouse.x)}, y:${Math.round(mouse.y)}`, mouse.x + 10, mouse.y - 12);
            ctx.fillText(`ε:${Math.round(currentThreshold)}px`, mouse.x + 10, mouse.y + 2);
        }

        animationFrameId = requestAnimationFrame(animate);
    }

    animationFrameId = requestAnimationFrame(animate);
}

