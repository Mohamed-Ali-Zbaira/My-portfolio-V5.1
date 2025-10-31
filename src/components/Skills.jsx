import React from 'react';
// 1. Importer les données
import {
  skillsCategories,
  SKILLS_THEME
} from '../data/SkillsData';

// --- Définitions des icônes SVG pour les catégories ---

// Icône principale pour la page (PencilIcon)
const PencilIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="m18 13-6 6-4-4 6-6" />
    <path d="m17 13 4-4-6-6-4 4 6 6z" />
  </svg>
);

// 1. Frontend Development & UI/UX Icon
const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

// 2. Backend & Databases Icon
const DatabaseIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M21 19c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14" />
    <path d="M21 5v14" />
  </svg>
);

// 3. DevOps & Cloud Technologies Icon
const CloudIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20" />
    <path d="M18 10h-6" />
    <path d="M18 14h-6" />
    <path d="M18 6h-6" />
    <path d="M12 18h-6" />
    <path d="M12 6h-6" />
  </svg>
);

// Icône générique pour les SKILLS individuels
const DotIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" />
  </svg>
);

// Map des icônes de catégories
const categoryIconMap = {
  CodeIcon,
  DatabaseIcon,
  CloudIcon
};


export function Skills() {

  const { TAG_CLASS, KEY_TAG_CLASS, CATEGORY_CONTAINER_CLASS } = SKILLS_THEME;

  // Fonction de rendu d'un tag de compétence
  const renderSkillTag = (skill) => {
    const baseClasses = "inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium";
    const customClasses = skill.isKey ? KEY_TAG_CLASS : TAG_CLASS;
    const iconColor = skill.isKey ? "text-cyan-400" : "text-gray-400"; // Couleur pour le point

    return (
      <span
        key={skill.name}
        className={`${baseClasses} ${customClasses}`}
      >
        {/* Logo/Icône de la compétence individuelle (DotIcon pour simuler un logo) */}
        <DotIcon className={`w-3 h-3 mr-2 ${iconColor}`} />
        {skill.name}
      </span>
    );
  };

  // Fonction de rendu d'une catégorie complète
  const renderSkillCategory = (category) => {
    const CategoryIcon = categoryIconMap[category.categoryIcon];

    return (
      <div key={category.id} className={CATEGORY_CONTAINER_CLASS}>
        <div className="flex items-center border-b border-gray-700/50 pb-2 mb-4">
          {/* Logo/Icône de la catégorie */}
          {CategoryIcon && <CategoryIcon className="w-6 h-6 mr-3 text-cyan-400 shrink-0" />}

          <h3 className="text-2xl font-semibold text-white">
            {category.name}
          </h3>
        </div>
        <p className="text-gray-400 mb-4">{category.description}</p>
        <div className="flex flex-wrap gap-3">
          {category.skills.map(renderSkillTag)}
        </div>
      </div>
    );
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 font-sans">

      {/* Rendu des SVG de fond... (non modifié) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-800"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>


      {/* Contenu principal des Compétences */}
      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <PencilIcon className="mx-auto h-10 w-10 text-cyan-400 mb-4" />
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            {SKILLS_THEME.MAIN_TITLE}
          </h1>
          <p className="mt-4 text-xl/8 text-gray-400">
            A curated list of technologies and tools I master.
          </p>
        </div>

        {/* Rendu des catégories de compétences */}
        <div className="bg-gray-800/80 p-8 rounded-xl shadow-2xl ring-1 ring-white/10">
          {skillsCategories.map(renderSkillCategory)}
        </div>

      </div>
    </div>
  );
}

export default Skills;