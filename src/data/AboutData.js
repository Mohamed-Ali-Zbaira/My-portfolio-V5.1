
export const professionalProfile = {
    title: "Software Engineer",
    // Texte brut (sans balises <strong>) pour simplifier le rendu dans About.jsx
    summary: "Software Engineer passionate about web development and new technologies, I specialize in Fullstack development with hands-on experience in Angular, React.js, Node.js, and Laravel. I also have a growing interest in DevOps practices, particularly with Docker, Kubernetes, Terraform, and CI/CD automation for efficient cloud deployment. Graduated in Computer Science from ISET Sfax, with a focus on Information Systems Development, I have gained a solid foundation in software engineering and database management. Motivated by innovation, code quality, and scalability, I aim to design modern, secure, and efficient web solutions. Always eager to learn, I strive to contribute to impactful digital projects and continuously improve my technical and problem-solving skills."
};


/**
 * 2. Données pour la section Parcours Éducatif.
 */
export const educationData = [
    {
        institution: "Higher Institute of Technological Studies of Sfax (ISET Sfax)",
        course: "Bachelor’s Degree in Computer Science (Specialization: Computer Systems Development)",
        period: "September 2021 – 2024",
        details: "Successfully completed a program focused on fullstack development, DevOps, and cloud technologies.",
        grade: "Good",
        // Image de ISET Sfax
        image: "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1697570771/Portfolio/vy5lhqz6ct7obadir4b0.png"
    },
    {
        institution: "Ali Bourguiba High School, Mahres",
        course: "Technical Baccalaureate (Technical Stream)",
        period: "September 2020 – June 2021",
        details: "Successfully completed high school education and was admitted to higher studies.",
        grade: "Good",
        // Image de Ali Bourguiba High School
        image: "https://res.cloudinary.com/dkrfmqbj1/image/upload/v1697570823/Portfolio/abj9nqzcbwawdffjndnn.webp"
    },
];

export default { professionalProfile, educationData };