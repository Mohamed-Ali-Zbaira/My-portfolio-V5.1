import {
  UserCircleIcon,
  CodeBracketIcon,
  ServerStackIcon,
} from '@heroicons/react/20/solid'

// Import des données externes
import {
  MAIN_CONTENT_HEADER,
  MAIN_CONTENT_IMAGE,
  mainFeatures,
} from '../data/MainContentData'

// Mappage des noms d'icônes aux composants Heroicons
const IconMap = {
  UserCircleIcon: UserCircleIcon,
  CodeBracketIcon: CodeBracketIcon,
  ServerStackIcon: ServerStackIcon,
}

export const MainContent = () => {
  const ICON_COLOR_CLASS = 'text-cyan-400'

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-16 lg:gap-y-20 items-center">

        {/* Left Section */}
        <div className="lg:pr-8">
          <div className="max-w-2xl lg:max-w-lg">
            {/* Titre */}
            <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {MAIN_CONTENT_HEADER}
            </p>

            {/* Description */}
            <dl className="mt-6 sm:mt-10 space-y-6 sm:space-y-8 text-sm sm:text-base text-gray-400">
              {mainFeatures.map((feature) => {
                const FeatureIcon = IconMap[feature.icon]
                return (
                  <div key={feature.id} className="relative pl-8 sm:pl-9">
                    <dt className="inline font-semibold text-white">
                      {FeatureIcon && (
                        <FeatureIcon
                          aria-hidden="true"
                          className={`absolute top-1 left-0 h-5 w-5 ${ICON_COLOR_CLASS}`}
                        />
                      )}
                      {feature.title}.
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center lg:justify-end py-10 sm:py-16 lg:py-24">
          <img
            alt={MAIN_CONTENT_IMAGE.alt}
            src={MAIN_CONTENT_IMAGE.src}
            className="w-64 sm:w-96 lg:w-[32rem] rounded-xl shadow-xl ring-1 ring-white/10 object-cover"
          />
        </div>
      </div>
    </div>
  )
}
