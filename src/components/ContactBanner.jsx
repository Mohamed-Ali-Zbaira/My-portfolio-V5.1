import React, { useEffect, useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

export const ContactBanner = ({ isScrolled }) => {
  const [isVisible, setIsVisible] = useState(true)

  // Masquer après 20 secondes uniquement sur mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768
    if (isMobile) {
      const timer = setTimeout(() => setIsVisible(false), 80000)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed top-0 left-0 w-full z-[60]
                  bg-gray-800/50 text-gray-100 backdrop-blur-sm
                  flex flex-col sm:flex-row items-center justify-center 
                  gap-2 px-4 py-2 sm:py-3 transition-transform duration-300
                  ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="flex items-center text-xs sm:text-sm">
        <strong className="font-semibold mr-1">Let’s get in touch:</strong>
        <EnvelopeIcon className="h-4 w-4 text-indigo-400 mr-1" />
        <a
          href="mailto:dev.mohamedalizbaira@gmail.com"
          className="hover:underline"
        >
          dev.mohamedalizbaira@gmail.com
        </a>
      </div>

      <a
        href="tel:+21622016178"
        className="flex items-center rounded-full bg-white/10 
                   px-2.5 py-0.5 sm:px-3.5 sm:py-1 text-xs sm:text-sm 
                   font-semibold text-white ring-1 ring-inset ring-white/20 
                   hover:bg-white/15"
      >
        <PhoneIcon className="h-4 w-4 text-indigo-400 mr-1" />
        +216 22 016 178
      </a>
    </div>
  )
}
