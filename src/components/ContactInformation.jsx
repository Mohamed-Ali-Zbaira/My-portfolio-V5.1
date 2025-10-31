import React from 'react';
// 1. Importer les données
import {
  THEME_COLORS,
  contactMethods,
  locationInfo,
  guaranteeItems,
  staticTexts
} from '../data/ContactInformationData';

// 2. Définir les icônes SVG comme des composants à part
// Cela permet d'utiliser le nom 'icon' dans le tableau de données.

const MailIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.44-.78-3.5.2-.58.27-1.27-.08-2-2.46-.5-3.83.67-4.12 1.5.09-.58.46-1.3.98-2.12c-.51-.1-1.07-.12-1.63-.09-1.2.05-2.28.56-3.05 1.34-1.29 1.14-1.78 3.12-1.42 5.43" />
    <path d="M9 19c-1.29 1.14-1.78 3.12-1.42 5.43" />
    <path d="M12 21.5C6.5 21.5 2 17 2 11.5S6.5 1.5 12 1.5 22 6 22 11.5c0 2.25-.78 4.35-2.08 6.05" />
    <path d="M19 19l-1-1" />
  </svg>
);

const LinkIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const MapPinIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="3" />
  </svg>
);

const ZapIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

// Map des icônes pour un rendu dynamique
const iconMap = {
  MailIcon,
  LinkedinIcon,
  GithubIcon,
  LinkIcon, // Ajout de la nouvelle icône
  MapPinIcon
};


// Main Contact Page Component
const ContactPage = () => {

  // Récupération des couleurs (ou les utiliser directement dans le JSX)
  const { ACCENT_COLOR_1, ACCENT_COLOR_2, ACCENT_HEX_1, ACCENT_HEX_2, GUARANTEE_COLOR } = THEME_COLORS;

  // Fonction utilitaire pour le rendu des cartes de contact
  const renderContactCard = (item) => {
    const IconComponent = iconMap[item.icon]; // Sélectionne le bon composant d'icône

    return (
      <div key={item.id} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            {/* Utilisation dynamique du composant d'icône */}
            {IconComponent && <IconComponent className={`w-6 h-6 ${ACCENT_COLOR_1} shrink-0`} />}
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          </div>
          <p className="text-gray-300 font-mono text-sm break-all">{item.value}</p>
          <p className="text-gray-400 text-xs italic">{item.description}</p>
          {item.link && ( // Conditionnel pour les liens (exclu la Location)
            <a href={item.link} target="_blank" rel="noopener noreferrer" className={`text-sm ${ACCENT_COLOR_2} hover-text-blue-400 transition-colors`}>
              {item.linkText}
            </a>
          )}
        </div>
      </div>
    );
  };

  // Rendu de la carte de localisation (similaire, mais pas dans le .map)
  const renderLocationCard = () => {
    const IconComponent = MapPinIcon;

    return (
      <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700/50 shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center space-x-3">
            {IconComponent && <IconComponent className={`w-6 h-6 ${ACCENT_COLOR_1} shrink-0`} />}
            <h3 className="text-xl font-semibold text-white">{locationInfo.title}</h3>
          </div>
          <p className="text-gray-300 font-mono text-sm break-all">{locationInfo.value}</p>
          <p className="text-gray-400 text-xs italic">{locationInfo.description}</p>
        </div>
      </div>
    );
  };


  return (
    // Main container with deep dark background
    <div className="isolate bg-gray-950 min-h-screen font-sans text-white pb-24">

      {/* Background Gradient Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          // Utilisation des HEX importés
          className={`relative left-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[${ACCENT_HEX_1}] to-[${ACCENT_HEX_2}] opacity-20 sm:left-[calc(50%-40rem)] sm:w-[120rem]`}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8 space-y-12">

        {/* 1. Header Section */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-5xl font-extrabold tracking-tight text-balance ${ACCENT_COLOR_1} sm:text-6xl drop-shadow-lg`}
            style={{ textShadow: `0 0 10px rgba(6, 182, 212, 0.5)` }}>
            {staticTexts.headerTitle} {/* Texte importé */}
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            {staticTexts.headerSubtitle} {/* Texte importé */}
          </p>
        </div>

        {/* 2. "Let's Connect!" Introduction Box */}
        <div className={`p-8 rounded-xl bg-gray-800/50 border border-blue-500/30 shadow-xl`}>
          <h3 className="text-2xl font-bold text-white mb-4">{staticTexts.introBoxTitle}</h3> {/* Texte importé */}
          <p className="text-gray-300 leading-relaxed">
            {staticTexts.introBoxContent} {/* Texte importé */}
          </p>
        </div>

        {/* 3. Contact Methods Grid (Itération des données) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Utilisation de map pour générer les cartes de contact */}
          {contactMethods.map(renderContactCard)}
        </div>

        {/* 4. Location Card (Rendu de la carte de localisation) */}
        {renderLocationCard()}

        {/* 5. Quick Response Guarantee Section (Itération des données) */}
        <div className={`p-8 rounded-xl bg-gray-800/50 border border-cyan-500/30 shadow-xl`}>
          <div className="flex items-center space-x-3 mb-4">
            {/* ZapIcon SVG utilisé directement car il n'est utilisé qu'une seule fois ici */}
            <ZapIcon className={`w-6 h-6 ${GUARANTEE_COLOR} shrink-0`} />
            <h3 className={`text-2xl font-bold ${GUARANTEE_COLOR}`}>{staticTexts.guaranteeTitle}</h3>
          </div>
          <ul className="list-none space-y-2 text-gray-300">
            {/* Utilisation de map pour générer la liste de garantie */}
            {guaranteeItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className={`mr-3 ${GUARANTEE_COLOR} font-mono`}>»</span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Closing Gradient Blur */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:bottom-0"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          // Utilisation des HEX importés
          className={`relative right-1/2 -z-10 aspect-[1155/678] w-[72.1875rem] max-w-none -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[${ACCENT_HEX_2}] to-[${ACCENT_HEX_1}] opacity-10 sm:right-[calc(50%-40rem)] sm:w-[120rem]`}
        />
      </div>
    </div>
  );
};

export const ContactInformation = ContactPage;

export default ContactPage;