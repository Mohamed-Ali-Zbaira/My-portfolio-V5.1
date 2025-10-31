// E:\we will come back\1-Full Stack JavaScript Training Program (MERN)\projects\medPortolio\src\data\ProjectsData.js

// Mappage de couleurs pour les technologies utilisées
const TAG_COLOR_MAP = {
    'REACT': { color: "text-cyan-400", bg: "bg-cyan-900/50" },
    'NEXT JS': { color: "text-white", bg: "bg-gray-800/50" },
    'JAVASCRIPTS': { color: "text-yellow-400", bg: "bg-yellow-900/50" },
    'TYPESCRIPT': { color: "text-blue-400", bg: "bg-blue-900/50" },
    'NODE.JS': { color: "text-green-400", bg: "bg-green-900/50" },
    'EXPRESS JS': { color: "text-green-400", bg: "bg-green-900/50" },
    'MONGODB': { color: "text-green-500", bg: "bg-green-900/50" },
    'LARAVEL': { color: "text-red-600", bg: "bg-red-900/50" },
    'PHP': { color: "text-purple-400", bg: "bg-purple-900/50" },
    'MYSQL': { color: "text-yellow-400", bg: "bg-yellow-900/50" },
    'DJANGO': { color: "text-green-400", bg: "bg-green-900/50" },
    'SPRING BOOT': { color: "text-green-500", bg: "bg-green-900/50" },
    'ANGULAR': { color: "text-red-600", bg: "bg-red-900/50" },
    'HTML': { color: "text-orange-400", bg: "bg-orange-900/50" },
    'CSS': { color: "text-blue-400", bg: "bg-blue-900/50" },
    'CSS TAILWIND': { color: "text-cyan-400", bg: "bg-cyan-900/50" },
    'BOOTSTRAP': { color: "text-purple-400", bg: "bg-purple-900/50" },
    'DEFAULT': { color: "text-gray-400", bg: "bg-gray-700/50" }, 
};

export const getTagColors = (tagName) => {
    const key = tagName.toUpperCase().replace(/\./g, '').replace(/\s/g, ''); 
    return TAG_COLOR_MAP[key] || TAG_COLOR_MAP['DEFAULT'];
};


// --- Données des Projets (Le nouveau projet est en tête de liste) ---
export const projectsData = [
    // NOUVEAU PROJET MIS EN AVANT
    {
        id: 1, // Nouvel ID
        title: "AlooDoctoor: Plateforme Médicale",
        date: "Date à spécifier", // Ajoutez la date réelle du projet
        description:
            "Conception et développement d'une plateforme médicale sécurisée pour la gestion efficace des données des patients et l'amélioration de la communication entre les professionnels de la santé, utilisant Laravel et MySQL.",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1730836846/GIT%20Development%20of%20a%20Medical%20Platform/screencapture-127-0-0-1-8000-2024-11-05-20_58_35_vpula9.png",
        tags: [
            "PHP",
            "LARAVEL",
            "MySQL",
            "HTML",
            "CSS",
            "JAVASCRIPT",
        ],
        category: "Web Application",
        github: "https://github.com/Mohamed-Ali-Zbaira/AlooDoctoor-Development-of-a-Medical-Platform",
        webapp: "", // Remplir si une démo live est disponible
    },
    // PROJETS EXISTANTS (décalés)
    {
        id: 9,
        title: "E-commerce",
        date: "01/2022 – 02/2022 | Sfax",
        description:
            "My E-commerce project, carried out during my second-year internship, aims to put into practice the skills acquired during my web development studies and create a functional and professional E-commerce platform.",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1697286997/Project%20Laravel/Client/xkusejtebudbbdqdlxy5.png",
        tags: [
            "HTML",
            "CSS",
            "JAVASCRIPTS",
            "PHP",
            "LARAVEL",
            "Mysql",
        ],
        category: "web app",
        github: "https://github.com/MedAlizbaira/E-commerce",
        webapp: "",
    },
    {
        id: 9,
        title: "Reservation-ticket",
        date: "03/2022 – 04/2022 | Sfax",
        description:
            "Online reservation system for sports and film tickets. User and ticket management, authentication, and administrator dashboard.",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1705695864/Reservation-ticket/screencapture-127-0-0-1-3000-2023-12-13-16_27_53_ghqbi0.png",
        tags: [
            "HTML",
            "CSS",
            "Css Tailwind",
            "JAVASCRIPTS",
            "Next Js",
            "Express Js",
            "MongoDB",
        ],
        category: "web app",
        github: "https://github.com/Mohamed-Ali-Zbaira/Reservation-ticket",
        webapp: "",
    },
    {
        id: 9,
        title: "RendezvousHub",
        date: "04/2022 – 04/2022 | Sfax",
        description:
            "Optimize your appointment management with RendezVousPro. Create, edit, and track your appointments with ease. Never miss a crucial meeting again thanks to our efficient application.",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1697803976/RendezvousHub/uerpztgt2q1xfesg3hok.png",
        tags: [
            "HTML",
            "CSS",
            "JAVASCRIPTS",
            "bootstrap",
            "React",
        ],
        category: "web app",
        github: "https://github.com/MedAlizbaira/RendezvousHub",
        webapp: "https://rendezvous-hub.vercel.app/",
    },
    {
        id: 9,
        title: "ArtyProd",
        date: "04/2022 – 05/2022 | Sfax",
        description:
            "ArtyProd, a graphic design, audiovisual production, and 3D design agency, aims to create a web application to showcase its services to users. The application allows users to explore the agency's portfolio, learn about its services, view team members, and contact the agency.",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1699703187/Artyprod/g66ojzncm9hdr1yufddb.png",
        tags: [
            "HTML",
            "CSS",
            "JAVASCRIPTS",
            "CSS Tailwind",
            "Django",
        ],
        category: "web app",
        github: "https://github.com/MedAlizbaira/ArtyProd",
        webapp: "https://github.com/MedAlizbaira/ArtyProd",
    },
    {
        id: 9,
        title: "Commerce Électronique",
        date: "04/2022 – 05/2022 | Sfax",
        description:
            "Ce projet est un site de commerce électronique spécialisé dans la vente en ligne de légumes et de fruits. Les clients peuvent parcourir une large gamme de produits frais",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1699736780/Commerce-electronique/betgj62f17okgmhnukdn.png",
        tags: [
            "HTML",
            "CSS",
            "JAVASCRIPTS",
            "bootstrap",
            "Django",
        ],
        category: "web app",
        github: "https://github.com/MedAlizbaira/Commerce-electronique",
        webapp: "https://github.com/MedAlizbaira/Commerce-electronique",
    },
    {
        id: 9,
        title: "InvoiceSwiftAngular",
        date: "09/2023 – 09/2023 | Sfax",
        description:
            "About Angular-powered invoicing app: Seamlessly manage invoices with client selection, item details, and real-time total calculations. Leverages Angular's two-way data binding and modular components for a dynamic and user-friendly experience. Ideal for showcasing modern web development principles",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1699717285/Angular-Invoice-Manager/j5ju34lrbi6bc3a4sji3.png",
        tags: [
            "HTML",
            "CSS",
            "JAVASCRIPTS",
            "bootstrap",
            "Angular",
        ],
        category: "web app",
        github: "https://github.com/MedAlizbaira/InvoiceSwiftAngular",
        webapp: "https://invoiceswift-angular.vercel.app/",
    },
    {
        id: 3,
        title: "North Africa's Tunisia Diamond",
        date: "10/2023 – 11/2023 | Sfax",
        description:
            "North Africa's Tunisia Diamond: Manages hotels, users; features include CRUD operations for hotels, user registration, login",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1705695174/North%20Africa%27s%20Tunisia%20Diamond/Capture_d_%C3%A9cran_2024-01-19_211205_utxikw.png",
        tags: ["HTML",
            "CSS",
            "JAVASCRIPTS",
            "Express Js",
            "Angular",],
        category: "web app",
        github: "https://github.com/Mohamed-Ali-Zbaira/North-Africa-s-Tunisia-Diamond___front-end",
        webapp: "",
    },
    {
        id: 3,
        title: "Client and Invoice Management ",
        date: "11/2023 – 12/2023 | Sfax",
        description:
            "Client and invoice management system. Efficient, activation, address-based tracking, statistics. Database, UI design, data analysis proficiency demonstrated",
        image:
            "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1705697987/mp-fe-Mohamed-Ali-Zbaira/386870827_261514060272079_7432626746948972750_n_sibbau.png",
        tags: ["HTML",
            "CSS",
            "JAVASCRIPTS",
            "Spring Boot",
            "Angular",],
        category: "web app",
        github: "https://github.com/Mohamed-Ali-Zbaira/mp-fe-Mohamed-Ali-Zbaira",
        webapp: "",
    },
];