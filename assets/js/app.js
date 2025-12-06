/* =========================================
   1. TAILWIND CONFIGURATION
   ========================================= */
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
            },
            colors: {
                academic: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0ea5e9',
                    900: '#0f172a',
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

    // --- B. Render Email (Obfuscation) ---
    // The email is assembled here. It does not exist in the HTML source.
    const mailLinks = document.querySelectorAll('.email-link');
    const fullEmail = `${profileData.personal.emailUser}@${profileData.personal.emailDomain}`;

    mailLinks.forEach(link => {
        link.href = `mailto:${fullEmail}`;
        // Only set text content if the link is empty or explicitly asks for the address
        if (link.classList.contains('show-email-text')) {
            link.textContent = "Contact Me";
        }
    });

    // --- C. Render About & Highlights ---
    if (el('about-content')) el('about-content').innerHTML = profileData.about;

    if (el('highlights-list')) {
        el('highlights-list').innerHTML = profileData.highlights.map(item => `
            <li class="flex items-start">
                <i class="ph ph-check-circle text-blue-500 mt-1 mr-3 flex-shrink-0"></i>
                <span class="text-gray-700 dark:text-gray-300">${item}</span>
            </li>
        `).join('');
    }

    // --- D. Render Interests (Badges) ---
    if (el('interests-list')) {
        el('interests-list').innerHTML = profileData.interests.map(interest => `
            <span class="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                ${interest}
            </span>
        `).join('');
    }

    // --- D2. Render Skills (Badges) ---
    if (el('skills-list')) {
        el('skills-list').innerHTML = profileData.skills.map(skill => `
            <span class="px-3 py-1 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                ${skill}
            </span>
        `).join('');
    }

    // --- E. Render Publications ---
    if (el('publications-list')) {
        el('publications-list').innerHTML = profileData.publications.map(pub => `
            <div class="relative">
                <div class="absolute -left-6 top-1.5 h-4 w-4 rounded-full border-2 border-white dark:border-slate-900 bg-blue-500"></div>
                <div class="text-sm text-blue-600 dark:text-blue-400 font-bold mb-1">${pub.year}</div>
                <h3 class="text-lg font-semibold text-slate-900 dark:text-gray-100 leading-tight">${pub.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 italic text-sm mt-1">${pub.venue}</p>
                <p class="text-gray-700 dark:text-gray-300 mt-2 text-sm">${pub.authors}</p>
                ${pub.link ? `
                    <a href="${pub.link}" target="_blank" class="text-blue-500 hover:underline text-xs inline-flex items-center gap-1 mt-1">
                        ${pub.linkText || 'View'} <i class="ph ph-arrow-right"></i>
                    </a>
                ` : ''}
            </div>
        `).join('');
    }

    // --- F. Render Teaching ---
    if (el('teaching-list')) {
        el('teaching-list').innerHTML = profileData.teaching.map(item => `
            <li class="flex gap-3">
                <i class="ph ${item.icon} text-blue-500 text-lg mt-0.5"></i>
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
   4. CANVAS NETWORK ANIMATION
   ========================================= */
const canvas = document.getElementById('network-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height, particles = [];

    const config = {
        count: 60,
        distance: 150,
        speed: 0.5,
        lightNode: 'rgba(148, 163, 184, 0.5)',
        lightLine: 'rgba(203, 213, 225, 0.4)',
        darkNode: 'rgba(71, 85, 105, 0.5)',
        darkLine: 'rgba(51, 65, 85, 0.3)'
    };

    function resize() {
        width = canvas.width = canvas.parentElement.offsetWidth;
        height = canvas.height = canvas.parentElement.offsetHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * config.speed;
            this.vy = (Math.random() - 0.5) * config.speed;
            this.size = Math.random() * 2 + 1;
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw(isDark) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? config.darkNode : config.lightNode;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        for (let i = 0; i < config.count; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        const isDark = document.documentElement.classList.contains('dark');

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < config.distance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = isDark ? config.darkLine : config.lightLine;
                    ctx.lineWidth = 1 - dist / config.distance;
                    ctx.stroke();
                }
            }
        }
        particles.forEach(p => { p.update(); p.draw(isDark); });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    resize();
    init();
    animate();
}
