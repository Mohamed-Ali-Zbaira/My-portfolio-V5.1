

export const MAIN_CONTENT_HEADER = "Software Engineer";

export const MAIN_CONTENT_IMAGE = {
    src: "https://res.cloudinary.com/dvurao8cs/image/upload/v1761592777/Blue_Black_Tech_Programmer_Presentation_mggnjp.jpg",
    alt: "Developer working at night"
};

export const mainFeatures = [
    {
        id: 1,
        title: "Profile Summary",
        description: "Passionate Software Engineer focused on web development and cloud technologies, turning ideas into efficient digital solutions through clean code and continuous learning.",
        // Icône plus pertinente pour un profil/résumé
        icon: "UserCircleIcon", 
    },
    {
        id: 2,
        title: "Fullstack Development",
        description: "Experienced with Angular, React.js, Node.js, and Laravel. I enjoy building secure, scalable, and efficient web applications.",
        // Icône plus pertinente pour le développement
        icon: "CodeBracketIcon", 
    },
    {
        id: 3,
        title: "DevOps & Cloud",
        description: "I’m growing my expertise in DevOps and cloud technologies, using Docker, Terraform, and Ansible to enhance automation and deployment efficiency.",
        // Icône plus pertinente pour le cloud/serveur
        icon: "ServerStackIcon", 
    },
];

export default { MAIN_CONTENT_HEADER, MAIN_CONTENT_IMAGE, mainFeatures };