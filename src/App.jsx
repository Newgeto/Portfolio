import './styles/index.css'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './sections/Home.jsx'
import About from './sections/About.jsx'
import Experience from './sections/Experience.jsx'
import Formation from './sections/Formation.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const elements = document.querySelectorAll('[data-reveal]')

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Header />

      <main className="main">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Formation />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App