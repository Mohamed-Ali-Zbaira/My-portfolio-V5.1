import React from 'react';
import { projectsData, getTagColors } from '../data/ProjectsData'; // Import des données et de la fonction

const Projects = () => {
    // Couleurs et styles d'accentuation
    const ACCENT_COLOR_1 = "text-cyan-400";
    const ACCENT_HEX_1 = "#22D3EE"; // Cyan
    const ACCENT_HEX_2 = "#3B82F6"; // Blue
    const BORDER_COLOR = "border-cyan-500/30";
    const SHADOW_CYAN = "shadow-[0_0_15px_rgba(34,211,238,0.2)]";

    // Card Component (modifié pour utiliser les données de la liste et les fonctions utilitaires)
    const ProjectListItem = ({ project }) => (
        <a 
            href={project.webapp || project.github} // Utilise l'URL de l'application si elle existe, sinon GitHub
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
                flex flex-col md:flex-row items-start md:items-center 
                rounded-xl bg-gray-800/60 border ${BORDER_COLOR} 
                ${SHADOW_CYAN} transition duration-500 transform 
                hover:scale-[1.01] hover:bg-gray-700/70 group p-4
            `}
        >
            {/* Image Section (à gauche sur les grands écrans) */}
            <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-28 overflow-hidden rounded-lg md:mr-6 mb-4 md:mb-0">
                <img 
                    src={project.image} 
                    alt={`Image du projet: ${project.title}`} 
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-80"
                    onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                />
            </div>

            {/* Content Section (à droite de l'image) */}
            <div className="flex-grow">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition duration-300">
                    {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2 font-mono uppercase opacity-70">
                    {project.category} Project
                </p>
                <p className="text-gray-300 mb-4 text-base hidden sm:block"> 
                    {project.description}
                </p>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tagName, i) => {
                        // Utilisation de la fonction pour obtenir les couleurs
                        const colors = getTagColors(tagName); 
                        return (
                            <span 
                                key={i} 
                                className={`
                                    text-xs font-semibold px-3 py-1 rounded-full 
                                    ${colors.color} ${colors.bg} 
                                    border border-transparent hover:border-current
                                    transition duration-300
                                `}
                            >
                                {tagName}
                            </span>
                        )
                    })}
                </div>
                
                {/* CTA Arrow */}
                <div className={`mt-4 flex justify-end items-center text-sm font-semibold ${ACCENT_COLOR_1}`}>
                    {project.webapp ? 'Voir l\'application' : 'Voir sur GitHub'}
                    {/* Right Arrow SVG */}
                    <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" x2="19" y1="12" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                    </svg>
                </div>
            </div>
        </a>
    );

    return (
        // Main container with deep dark background
        <div className="isolate bg-gray-950 min-h-screen font-sans text-white pb-24">
            
            {/* Background Gradient Blur - Consistent Style */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className={`relative left-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[${ACCENT_HEX_1}] to-[${ACCENT_HEX_2}] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[120rem]`}
                />
            </div>

            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 space-y-8"> 
                
                {/* Header Section */}
                <header className="mx-auto max-w-2xl text-center">
                    <h2 className={`text-5xl font-extrabold tracking-tight text-balance ${ACCENT_COLOR_1} sm:text-6xl drop-shadow-lg`}
                        style={{textShadow: `0 0 10px rgba(34, 211, 238, 0.5)`}}>
                        Mes Projets Techniques
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                        Exploration des solutions Fullstack, DevOps et Cloud.
                    </p>
                </header>

                {/* Projects List */}
                <div className="space-y-6"> 
                    {projectsData.map((project, index) => (
                        <ProjectListItem key={index} project={project} />
                    ))}
                </div>

                {/* Call to action for more projects */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-400 italic">
                        Plus de projets sont disponibles sur mon dépôt Git.
                    </p>
                    <a 
                        href="https://github.com/Mohamed-Ali-Zbaira" // Supposition du lien Git général, mettez à jour si nécessaire
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center mt-4 px-6 py-3 border border-transparent text-base font-medium rounded-full ${ACCENT_COLOR_1} bg-cyan-900/50 hover:bg-cyan-900/80 transition duration-300 ${SHADOW_CYAN} text-shadow-md`}
                        style={{textShadow: `0 0 5px rgba(34, 211, 238, 0.8)`}}
                    >
                        Explorer sur GitHub
                        {/* GitHub Icon SVG */}
                        <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 4 5.41 5.41 0 0 0 16 1.34c-.66 0-1.3.17-2 .35A5.44 5.44 0 0 0 12 2c-1.84 0-2.88.8-3.5 1.34-.7.18-1.34.35-2 .35A5.41 5.41 0 0 0 4.09 4 5.07 5.07 0 0 0 4 4.77 5.44 5.44 0 0 0 4 11.23c0 5.47 3.3 6.66 6.44 7A3.37 3.37 0 0 0 10.94 19v3"/>
                        </svg>
                    </a>
                </div>

            </div>

            {/* Closing Gradient Blur - Consistent Style */}
            <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-0"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className={`relative right-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[${ACCENT_HEX_2}] to-[${ACCENT_HEX_1}] opacity-10 sm:right-[calc(50%-40rem)] sm:w-[120rem]`}
                />
            </div>
        </div>
    );
};

export default Projects;