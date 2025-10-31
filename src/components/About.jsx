import React from 'react';
import { professionalProfile, educationData } from '../data/AboutData';

const About = () => {
  const ACCENT_COLOR_1 = "text-cyan-400";
  const ACCENT_HEX_1 = "#22D3EE";
  const ACCENT_HEX_2 = "#3B82F6";
  const BORDER_COLOR = "border-cyan-500/30";

  const renderSummary = () => ({ __html: professionalProfile.summary });

  return (
    <div className="isolate bg-gray-950 min-h-screen font-sans text-white pb-24">
      {/* ----------------- Background Gradients (Top) ----------------- */}
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
      {/* ----------------- Fin des Gradients ----------------- */}

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 space-y-16">

        {/* ==================== Header Section ==================== */}
        <header className="mx-auto max-w-2xl text-center">
          <h2 className={`text-4xl font-extrabold tracking-tight text-balance ${ACCENT_COLOR_1} sm:text-6xl drop-shadow-lg`}
            style={{ textShadow: `0 0 10px rgba(34, 211, 238, 0.5)` }}>
            About Me
          </h2>
          <p className="mt-4 text-lg text-gray-400 sm:text-xl">
            A dedicated developer focused on fullstack reliability and cloud architecture.
          </p>
        </header>

        {/* ==================== Professional Summary ==================== */}
        <div className={`p-6 sm:p-8 rounded-xl bg-gray-800/50 border ${BORDER_COLOR} shadow-2xl`}>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center sm:text-3xl">
            <svg className={`w-7 h-7 mr-3 ${ACCENT_COLOR_1} sm:w-8 sm:h-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            {professionalProfile.title}
          </h3>
          <p className="text-gray-300 leading-relaxed text-base mt-2 sm:text-lg"
            dangerouslySetInnerHTML={renderSummary()}
          />
        </div>

        {/* ==================== Educational Journey ==================== */}
        <div className={`p-6 sm:p-8 rounded-xl bg-gray-800/50 border ${BORDER_COLOR} shadow-2xl`}>
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center sm:text-3xl">
            <svg className={`w-7 h-7 mr-3 ${ACCENT_COLOR_1} sm:w-8 sm:h-8`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.42 10.97l-7.77-7.77A2.5 2.5 0 0 0 12 2a2.5 2.5 0 0 0-1.65.68l-7.77 7.77A2 2 0 0 0 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6a2 2 0 0 0-.58-1.42z" />
              <path d="M12 2v20" />
              <path d="M16 16c1.66 0 3-1.34 3-3V7l-4 4-3-3-3 3-4-4v6c0 1.66 1.34 3 3 3h10Z" />
            </svg>
            Educational Journey
          </h3>

          <ol className="relative border-l border-gray-700 space-y-8">
            {educationData.map((item, index) => (
              <li key={index} className="ml-6">
                <span className={`absolute flex items-center justify-center w-3 h-3 rounded-full -left-[6.5px] ring-4 ring-gray-950 bg-cyan-400`}></span>

                <div className="p-4 bg-gray-700/50 rounded-lg shadow-md transition duration-300 hover:bg-gray-700/80">
                  <div className="flex items-start mb-1"> {/* items-start pour un meilleur alignement vertical sur mobile */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={`Logo de ${item.institution}`}
                        className="w-10 h-10 rounded-full object-contain p-1 mr-3 border border-gray-600/50 bg-white shadow-lg shrink-0 sm:w-12 sm:h-12 sm:mr-4"
                      />
                    )}
                    <div>
                      <h4 className="text-lg font-semibold text-white sm:text-xl">
                        {item.institution}
                      </h4>
                      <p className="text-sm font-medium text-gray-300 sm:text-base">
                        {item.course}
                      </p>
                    </div>
                  </div>

                  <time className={`block mt-2 mb-2 text-sm font-normal leading-none ${ACCENT_COLOR_1}`}>
                    {item.period}
                  </time>
                  <p className="text-sm text-gray-400 mt-1 italic">
                    {item.details}
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Grade: <span className="text-gray-400 italic">{item.grade}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ----------------- Background Gradients (Bottom) ----------------- */}
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
      {/* ----------------- Fin des Gradients ----------------- */}
    </div>
  );
};

export default About;