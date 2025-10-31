import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export const Navbar = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`fixed left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'top-0' : 'top-12'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO ou titre */}
        <div className="text-white font-semibold text-lg">
          
        </div>

        {/* Bouton hamburger (mobile/tablette) placé à droite */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-indigo-300" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-indigo-300" />
            )}
          </button>
        </div>

        {/* Liens de navigation - version desktop */}
        <ul
          className="hidden sm:flex space-x-6 text-white font-medium items-center 
                     bg-opacity-50 bg-opacity-70 rounded-2xl backdrop-blur-sm px-10 py-2"
        >
          <li>
            <Link to="/" className="hover:text-indigo-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-indigo-400">
              About
            </Link>
          </li>
          <li>
            <Link to="/experience" className="hover:text-indigo-400">
              Experience
            </Link>
          </li>
          <li>
            <Link to="/skills" className="hover:text-indigo-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-indigo-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-indigo-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu déroulant version mobile */}
      {isOpen && (
        <div className="sm:hidden bg-gray-800/90 backdrop-blur-md text-white px-6 py-4 rounded-b-2xl">
          <ul className="flex flex-col space-y-3 text-center">
            <li>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 block"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 block"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 block"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 block"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 block"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-400 block"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
