// Définition des classes de style
export const SKILLS_THEME = {
    MAIN_TITLE: "SKILLS",
    // Classe par défaut pour les tags
    TAG_CLASS: "border-gray-500 text-gray-200 hover:bg-gray-700/50 hover:border-cyan-500 transition duration-300",
    // Classe spécifique pour les technologies clés ou récentes
    KEY_TAG_CLASS: "border-cyan-500 text-cyan-400 bg-cyan-500/10 hover:bg-cyan-500/20 transition duration-300",
    // Classe pour le conteneur de catégorie
    CATEGORY_CONTAINER_CLASS: "mb-8"
};

// Tableau principal des compétences, catégorisé
export const skillsCategories = [
    {
        id: 1,
        name: "Frontend Development & UI/UX",
        categoryIcon: "CodeIcon", // Nom de l'icône pour la catégorie
        description: "Modern JavaScript frameworks, styling, and responsive design.",
        skills: [
            { name: "HTML", isKey: true, skillIcon: "Html5" },
            { name: "CSS", isKey: true, skillIcon: "Css3" },
            { name: "JavaScript", isKey: true, skillIcon: "Javascript" },
            { name: "TypeScript", isKey: true, skillIcon: "Typescript" },
            { name: "React", isKey: true, skillIcon: "React" },
            { name: "Angular", isKey: true, skillIcon: "Angular" },
            { name: "Bootstrap", isKey: true, skillIcon: "Bootstrap" },
            { name: "Tailwind CSS", isKey: true, skillIcon: "Tailwind" },
        ]
    },
    {
        id: 2,
        name: "Backend & Databases",
        categoryIcon: "DatabaseIcon", // Nom de l'icône pour la catégorie
        description: "Server-side logic, API development, and data management.",
        skills: [
            { name: "Node.js", isKey: true, skillIcon: "Nodejs" },
            { name: "Laravel", isKey: true, skillIcon: "Laravel" },
            { name: "MongoDB", isKey: true, skillIcon: "Mongodb" },
            { name: "MySQL", isKey: true, skillIcon: "Mysql" },
        ]
    },
    {
        id: 3,
        name: "DevOps & Cloud Technologies",
        categoryIcon: "CloudIcon", // Nom de l'icône pour la catégorie
        description: "Containerization, infrastructure as code, and continuous integration.",
        skills: [
            { name: "Docker", isKey: true, skillIcon: "Docker" },
            { name: "Kubernetes", isKey: true, skillIcon: "Kubernetes" },
            { name: "Terraform", isKey: true, skillIcon: "Terraform" },
            { name: "Git", isKey: true, skillIcon: "Git" },
            { name: "Cloudinary", isKey: true, skillIcon: "Cloudinary" },
        ]
    },
];