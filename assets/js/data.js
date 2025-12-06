/**
 * DATA FILE
 * Update your profile information, publications, and interests here.
 */

const profileData = {
    // 1. Personal Details
    // Email is split to prevent bots from scraping it (Obfuscation).
    personal: {
        name: "Dr. Manuel D. S. Hopp",
        role: "Postdoctoral Researcher",
        institution: "Hector Research Institute of Education Sciences and Psychology",
        university: "University of Tübingen",
        emailUser: "manuel.hopp",     // Part before @
        emailDomain: "uni-tuebingen.de", // Part after @
        imagePath: "assets/images/Manuel_D._S._Hopp.png" // Update this path if you move the image
    },

    // 2. About Me Text (Supports HTML tags like <strong>)
    about: `
        <p class="mb-4">
        I am a postdoctoral researcher at the Hector Research Institute of Education Sciences and Psychology. I integrate <strong>educational psychology with computational network analysis</strong> to examine the structural determinants of learning.
        </p>
        <p class="mb-4">
        My research models <strong>"content topology"</strong> (the structural landscape of text) using <strong>persistent homology</strong> (mathematical tools for analyzing data shapes) and <strong>Large Language Models</strong> (LLMs). My primary objective is to investigate how this information architecture shapes the trajectory of student <strong>curiosity and motivation</strong>.
        </p>
        <p class="mb-4">
        In parallel, I assess the predictive capacity of text embeddings and the evaluative reliability of LLMs. Future work will extend to neurophysiological analysis (measuring biological responses) to examine the brain activity patterns of children during engagement with educational content.
        </p>
        <p>
        Previously, during my PhD, I investigated peer influence, loneliness, and creativity-driven friendship formation using social network analysis in educational settings.
        </p>
        `,

    // 3. Research Interests (Keywords)
    interests: [
        "Educational Psychology",
        "Curiosity",
        "Talent Development",
        "Network Analysis",
        "LLMs",
        "AI",
        "Persistent Homology"
    ],

    // 3b. Additional Skills
    skills: [
        "Photography",
        "Video and Audio Production",
        "3D Design",
        "IT",
        "Arch, btw :)"
    ],

    // 4. Research Highlights
    highlights: [
        "<strong>Curiosity & Content Topology:</strong> Applying persistent homology (computational shape analysis) to map the structural attributes of knowledge in instructional texts onto curiosity.",
        "<strong>Predictive Modeling & LLMs:</strong> Evaluating the predictive capacity of text embeddings and the reliability of Large Language Models.",
        "<strong>Social Network Analysis:</strong> Examining peer influence dynamics and friendship formation structure in educational settings.",
        "<strong>Neurophysiological Analysis:</strong> Investigating neural correlates (brain activity patterns) of engagement during learning."
    ],

    // 5. Selected Publications
    publications: [
        {
            year: "2025",
            title: "Persistent Homology of Topic Networks for the Prediction of Reader Curiosity",
            venue: "Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (ACL)",
            authors: "Hopp, M. D. S., Labatut, V., Amalvy, A., Dufour, R., Stone, H., Jach, H., & Murayama, K.",
            link: "https://doi.org/10.18653/v1/2025.acl-long.1364",
            linkText: "Read Paper"
        },
        {
            year: "2025",
            title: "Capturing the complex: An intraindividual temporal network analysis of learning resource regulation",
            venue: "Education Sciences, 15(6), 728",
            authors: "Harder, B., Naujoks-Schober, N., & Hopp, M. D. S.",
            link: "https://doi.org/10.3390/educsci15060728",
            linkText: "Read Paper"
        },
        {
            year: "2023",
            title: "Connected – A multiscale study of social network functions",
            venue: "Doctoral Dissertation, Friedrich-Alexander-Universität Erlangen-Nürnberg",
            authors: "Hopp, M. D. S.",
            link: "https://open.fau.de/handle/openfau/23604",
            linkText: "Read Dissertation"
        },
        {
            year: "2022",
            title: "The structure of social networks and its link to higher education students’ socio-emotional loneliness during COVID-19",
            venue: "Frontiers in Psychology, 12, 733867",
            authors: "Hopp, M. D. S., Händel, M., Bedenlier, S., et al.",
            link: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2021.733867/full",
            linkText: "Read Paper"
        }
    ],

    // 6. Teaching
    teaching: [
        {
            title: "Educational Psychology",
            subtitle: "Seminars & Workshops",
            icon: "ph-chalkboard-teacher"
        },
        {
            title: "Network Analysis Methods",
            subtitle: "Seminars & Workshops",
            icon: "ph-graph"
        },
        {
            title: "Quantitative Data Analysis with R",
            subtitle: "Seminars & Workshops",
            icon: "ph-function"
        }
    ],

    // 7. Talks
    talks: [
        {
            title: "Curiosity as a catalyst (PAEPS 2025)",
            location: "Jena, Germany • Sep 2025",
            description: "Simulating the development of domain-specific interest in knowledge networks.",
            icon: "ph-presentation-chart"
        },
        {
            title: "Persistent homology of topic networks (ACL 2025)",
            location: "Vienna, Austria • Jul 2025",
            description: "Poster presentation at the Annual Meeting of the Association for Computational Linguistics.",
            icon: "ph-files"
        },
        {
            title: "Social integration of high-achieving students (GEBF 2024)",
            location: "Potsdam, Germany • Mar 2024",
            description: "",
            icon: "ph-users-three"
        }
    ]
};
