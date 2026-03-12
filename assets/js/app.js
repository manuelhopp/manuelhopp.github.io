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

    // --- B. Render Email (Base64 Obfuscation) ---
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
});
