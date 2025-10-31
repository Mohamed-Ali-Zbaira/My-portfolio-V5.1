import React from 'react';
import {
  TIMELINE_THEME,
  professionalExperience,
  EXPERIENCE_STATIC_TEXT
} from '../data/ExperienceData';

const GithubLinkIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.2-.58.27-1.27-.08-2-2.46-.5-3.83.67-4.12 1.5.09-.58.46-1.3.98-2.12c-.51-.1-1.07-.12-1.63-.09-1.2.05-2.28.56-3.05 1.34-1.29 1.14-1.78 3.12-1.42 5.43" />
  </svg>
);


export function Experience() {

  const { DEFAULT_DOT_COLOR, CURRENT_DOT_COLOR, TAG_CLASS, CURRENT_STATUS_CLASS, PREVIOUS_STATUS_CLASS } = TIMELINE_THEME;

  const getStatusClass = (status) => {
    if (status === "Current Position") {
      return CURRENT_STATUS_CLASS;
    }
    return PREVIOUS_STATUS_CLASS;
  };

  const renderExperienceItem = (item) => {
    const dotColor = item.dotColorClass || DEFAULT_DOT_COLOR;
    const statusClass = getStatusClass(item.status);

    return (
      <div key={item.id} className="relative flex">
        {/* Point de la timeline (Visible uniquement sur les grands écrans pour l'effet) */}
        <div className="hidden sm:block">
            <div className={`absolute left-4 top-1 -translate-x-1/2 w-4 h-4 rounded-full ${dotColor} ring-4 ring-gray-900 z-10`}></div>
        </div>

        {/* Carte d'expérience */}
        {/* Suppression de ml-12 pour mobile. Utilisation de sm:ml-12 pour bureau. */}
        <div className="flex-1 rounded-lg bg-gray-800/80 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-sm sm:ml-12">
          
          <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <span className={statusClass}>
              {item.status}
            </span>
          </div>

          <p className="text-sm text-gray-400 mb-2">
            {item.company} | {item.duration} | {item.location}
          </p>

          <p className="text-gray-300 text-base/7 mb-4">{item.description}</p>


          <h4 className="font-semibold text-white mb-2">Key Contributions:</h4>
          <ul role="list" className="list-disc space-y-2 pl-5 text-gray-300 text-base/7">
            {item.contributions.map((contrib, index) => (
              <li key={index}>{contrib}</li>
            ))}
          </ul>

          {item.technologies && item.technologies.length > 0 && (
            <>
              <h4 className="font-semibold text-white mt-6 mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span key={index} className={TAG_CLASS}>
                    {tech}
                  </span>
                ))}
              </div>
            </>
          )}

          {item.projectLink && (
            <div className="mt-4 pt-4 border-t border-gray-700/50">
              <a href={item.projectLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors">
                View project on GitHub <GithubLinkIcon className="w-4 h-4 ml-2" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  };


  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 font-sans">
        
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

        {/* Contenu principal de l'expérience professionnelle */}
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="text-center mb-16 px-0 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {EXPERIENCE_STATIC_TEXT.mainTitle}
            </h1>
            <p className="mt-6 text-xl/8 text-gray-400 max-w-3xl mx-auto">
              {EXPERIENCE_STATIC_TEXT.subtitle}
            </p>
          </div>

          <div className="relative px-4 sm:px-0">
            {/* La ligne de timeline verticale (Masquée sur mobile, visible à partir de sm) */}
            <div className="hidden sm:block absolute left-4 top-0 h-full w-0.5 bg-gray-700 -z-1"></div>

            {/* Items d'expérience (MAP sur les données) */}
            {/* Ajout d'une marge au-dessus de chaque item sur mobile */}
            <div className="space-y-12">
              {professionalExperience.map(renderExperienceItem)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;