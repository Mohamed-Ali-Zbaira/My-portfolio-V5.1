// --- COULEURS et THÈME ---
// Définissez les couleurs réutilisables ici.
export const THEME_COLORS = {
    ACCENT_COLOR_1: "text-cyan-500", // Couleurs Tailwind pour le texte
    ACCENT_COLOR_2: "text-blue-500",
    ACCENT_HEX_1: "#06B6D4", // Hex pour le dégradé (Cyan)
    ACCENT_HEX_2: "#3B82F6", // Hex pour le dégradé (Blue)
    GUARANTEE_COLOR: "text-green-400", // Couleur pour la section de garantie
};

// --- MÉTHODES DE CONTACT (Grid) ---
// Cette structure remplace les 4 CARDs du grid.
export const contactMethods = [
    {
        id: 1,
        title: "Email",
        icon: "MailIcon", // Le nom de l'icône (vous utiliserez le nom pour déterminer le SVG)
        value: "dev.mohamedalizbaira@gmail.com", // Votre adresse e-mail (d'après l'image)
        description: "Best way to reach me for professional inquiries.",
        link: "mailto:dev.mohamedalizbaira@gmail.com",
        linkText: "Click to email 📧"
    },
    {
        id: 2,
        title: "LinkedIn",
        icon: "LinkedinIcon",
        value: "https://www.linkedin.com/in/mohamed-ali-zbaira", // Votre LinkedIn (d'après l'image)
        description: "Connect with me professionally.",
        link: "https://www.linkedin.com/in/mohamed-ali-zbaira",
        linkText: "Click to LinkedIn 🔗"
    },
    {
        id: 3,
        title: "GitHub",
        icon: "GithubIcon",
        value: "https://github.com/Mohamed-Ali-Zbaira", // Votre GitHub (d'après l'image)
        description: "Check out my open source contributions and projects.",
        link: "https://github.com/Mohamed-Ali-Zbaira",
        linkText: "Click to github 🧑‍💻"
    },
    {
        id: 4,
        title: "Portfolio", // J'ai remplacé Instagram par Portfolio (d'après l'image)
        icon: "LinkIcon", // Nouveau nom d'icône pour le Portfolio
        value: "https://my-portfolio-iota-gilt.vercel.app", // Votre Portfolio (d'après l'image)
        description: "See a showcase of my best work and projects.",
        link: "https://my-portfolio-iota-gilt.vercel.app",
        linkText: "Click to see portfolio ✨"
    }
];

// --- AUTRES INFORMATIONS ---
export const locationInfo = {
    title: "Location",
    icon: "MapPinIcon",
    value: "Sfax, Tunisia", // Votre emplacement (d'après l'image)
    description: "Open to remote work worldwide."
};

// --- GARANTIE DE RÉPONSE ---
// Cette structure remplace la liste de la section de garantie.
export const guaranteeItems = [
    "Email responses: Within 24 hours",
    "Project inquiries: Within 48 hours",
    "Urgent matters: Same day response"
];

// --- TEXTES STATIQUES ---
export const staticTexts = {
    headerTitle: "Contact Information",
    headerSubtitle: "Let's connect and build something amazing together",
    introBoxTitle: "Let's Connect!",
    introBoxContent: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about JavaScript and modern web development. Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible.",
    guaranteeTitle: "Quick Response Guarantee"
};