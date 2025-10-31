// Définition des couleurs pour les points de la timeline, les tags et le statut.
// Vous pouvez ajuster les classes Tailwind ici.
export const TIMELINE_THEME = {
    // Couleurs pour les points de la timeline
    DEFAULT_DOT_COLOR: "bg-blue-500", 
    CURRENT_DOT_COLOR: "bg-green-500",
    
    // Classes pour les tags/technologies
    TAG_CLASS: "px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 ring-1 ring-inset ring-indigo-500/20",
    
    // Classes pour les statuts
    CURRENT_STATUS_CLASS: "px-3 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 ring-1 ring-inset ring-green-500/20",
    PREVIOUS_STATUS_CLASS: "px-3 py-1 text-xs font-medium rounded-full bg-gray-500/10 text-gray-400 ring-1 ring-inset ring-gray-500/20"
};

// Contenu statique de la page
export const EXPERIENCE_STATIC_TEXT = {
    mainTitle: "Professional Experience",
    subtitle: "My professional journey and skills highlights"
};

// Tableau principal des expériences
// L'ordre des éléments ici sera l'ordre d'affichage (du plus récent au plus ancien, selon votre CV)
export const professionalExperience = [
    {
        id: 1,
        title: "Freelance, Junior DevOps",
        company: "Remote",
        location: "Sfax",
        duration: "04/2025 - Present", // 04/2025 - Sfax (d'après l'image)
        status: "Current Position",
        dotColorClass: TIMELINE_THEME.CURRENT_DOT_COLOR,
        description: "Worked on two web applications: a logistics dashboard for shipment tracking and a secure e-learning platform with user management and content delivery.",
        contributions: [
            "Developed applications on cloud VPS using Infrastructure as Code (Terraform & Ansible)",
            "Created CI/CD pipelines with GitHub Actions for automated deployment",
            "Implemented DevSecOps practices: vulnerability scans (Trivy, Snyk), SSL certificates, and monitoring with Prometheus and Grafana"
        ],
        technologies: ["React js", "Node.js", "Kubernetes", "Terraform", "Ansible", "GitHub Actions", "Prometheus", "Grafana"],
        projectLink: null // Pas de lien GitHub pour cette entrée
    },
    {
        id: 2,
        title: "Freelance, Fullstack Web Developer & Junior DevOps",
        company: "Remote",
        location: "Sfax",
        duration: "11/2024 - 03/2025",
        status: "Previous Role",
        dotColorClass: TIMELINE_THEME.DEFAULT_DOT_COLOR,
        description: "Designed and deployed a fullstack web platform for hotel room booking, client management, and internal operations.",
        contributions: [
            "Built a responsive front-end with React.js and a RESTful API in Laravel",
            "Containerized the application using Docker and Docker Compose",
            "Managed VPS deployment with SSL integration and custom domain configuration"
        ],
        technologies: ["Laravel", "React.js", "MySQL", "Docker", "Nginx"],
        projectLink: null
    },
    {
        id: 3,
        title: "Web Developer Intern",
        company: "Doxso Technologies",
        location: "Sfax, Tunisia",
        duration: "01/2024 - 06/2024",
        status: "Previous Role",
        dotColorClass: TIMELINE_THEME.DEFAULT_DOT_COLOR,
        description: "During my final-year internship, I led the development of an innovative medical platform, **AlooDoctoor**, designed to enhance patient data management and facilitate communication among healthcare professionals.",
        contributions: [
            "Front-end development using HTML5, CSS, and JavaScript.",
            "Back-end implementation with PHP and Laravel to ensure a secure and scalable architecture.",
            "Database management with MySQL, focusing on data centralization and confidentiality.",
            "Utilized XAMPP for local development and testing."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "HTML5", "CSS", "JavaScript", "XAMPP"],
        projectLink: "https://github.com/your-project-link-aloodoctoor" // Lien fictif, mettez le vrai si vous l'avez
    },
    {
        id: 4,
        title: "Web Developer Intern",
        company: "Exadev",
        location: "Sfax, Tunisia",
        duration: "01/2023 - 02/2023",
        status: "Previous Role",
        dotColorClass: TIMELINE_THEME.DEFAULT_DOT_COLOR,
        description: "During my second-year internship, I led the development of a fully functional E-commerce Website, applying my web development skills.",
        contributions: [
            "Front-end design with HTML5 and CSS.",
            "Back-end development with PHP and Laravel.",
            "Utilizing XAMPP for local development and testing.",
            "Manage the database with MySQL."
        ],
        technologies: ["Laravel", "PHP", "MySQL", "HTML5", "CSS", "XAMPP"],
        projectLink: "https://github.com/your-project-link-exadev" // Lien fictif
    },
    {
        id: 5,
        title: "Web Development Intern",
        company: "UIB - Groupe Société Générale",
        location: "Sfax, Tunisia",
        duration: "01/2022 - 02/2022",
        status: "Previous Role",
        dotColorClass: TIMELINE_THEME.DEFAULT_DOT_COLOR,
        description: "During my first-year internship at UIB - Groupe Société Générale, I designed and developed a professional portfolio.",
        contributions: [
            "Front-end design using HTML, CSS, JavaScript, and React"
        ],
        technologies: ["React", "HTML", "CSS", "JavaScript"],
        projectLink: "https://github.com/your-project-link-uib" // Lien fictif
    }
];