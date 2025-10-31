import './App.css'
import { MainContent } from './components/MainContent'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ContactBanner } from './components/ContactBanner.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Experience } from './components/Experience'
import { useState, useEffect } from 'react'
import { ContactInformation } from './components/ContactInformation.jsx'
import Skills from './components/Skills.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0f1c] flex flex-col">
        <ContactBanner isScrolled={isScrolled} />
        <Navbar isScrolled={isScrolled} />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactInformation/>} />
          <Route path="/skills" element={<Skills/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App