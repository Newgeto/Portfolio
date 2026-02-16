import './App.css'
import { useEffect } from 'react'
import photo from './assets/photo.jpg'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'
const SIMPLE = 'https://cdn.simpleicons.org'

const SKILLS = {
  creation: [
    { name: 'Canva', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQi4yHiBqzGRehgq1MwiJ7yxP1Lzif73hTUw&s' },
    { name: 'WordPress', logo: `${CDN}/wordpress/wordpress-original.svg` },
    { name: 'Photoshop', logo: `${CDN}/photoshop/photoshop-plain.svg` },
    { name: 'Figma', logo: `${CDN}/figma/figma-original.svg` },
  ],
  dev: [
    { name: 'HTML', logo: `${CDN}/html5/html5-original.svg` },
    { name: 'CSS', logo: `${CDN}/css3/css3-original.svg` },
    { name: 'React', logo: `${CDN}/react/react-original.svg` },
    { name: 'Express', logo: `${CDN}/express/express-original.svg` },
    { name: 'JavaScript', logo: `${CDN}/javascript/javascript-original.svg` },
    { name: 'TypeScript', logo: `${CDN}/typescript/typescript-original.svg` },
    { name: 'Python', logo: `${CDN}/python/python-original.svg` },
    { name: 'PHP', logo: `${CDN}/php/php-original.svg` },
  ],
  tools: [
    { name: 'Git', logo: `${CDN}/git/git-original.svg` },
    { name: 'GitHub', logo: `${CDN}/github/github-original.svg` },
    { name: 'Docker', logo: `${CDN}/docker/docker-original.svg` },
    { name: 'Burp Suite', logo: `${SIMPLE}/owasp/000000` },
    { name: 'Postman', logo: `${CDN}/postman/postman-original.svg` },
  ],
}

function App() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion) return

    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <main className="main">
        <section id="home" className="section sectionHome reveal" data-reveal>
          <div className="sectionInner">
            <div className="hero">
              <div className="heroContent">
                <h1 className="title">Mdoughy Yanis</h1>
                <p className="subtitle">Etudiant a Epitech paris en bachelor informatique passioner par le dev web</p>
                <div className="actions">
                  <a className="button" href="#projects">Voir mes projets</a>
                  <a className="button button-secondary" href="#contact">Me contacter</a>
                </div>
              </div>

              <div className="heroMedia">
                <img className="heroPhoto" src={photo} alt="Photo de Mdoughy Yanis" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section sectionAbout reveal" data-reveal>
          <div className="sectionInner">
            <h2 className="sectionTitle">À propos</h2>
            <div className="aboutCopy">
              <p>
                Passionné par l’informatique et le développement, j’aime comprendre comment fonctionnent les technologies qui nous entourent.  
                Je progresse à travers différents projets qui me permettent d’améliorer mes compétences et de me challenger.  
                Curieux et motivé, je m’intéresse aux nouvelles tendances du web pour continuer à évoluer.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section sectionProjects reveal" data-reveal>
          <div className="sectionInner">
            <h2 className="sectionTitle">Projets</h2>
            <div className="grid">
              <article className="card reveal" data-reveal>
                <h3 className="cardTitle">Créateur de CV — application web</h3>
                <p className="muted">
                  Application full stack de génération de CV. Backend en PHP, intégration frontend
                  HTML/CSS.
                </p>
                <div className="cardLinks">
                  <a href="#contact">Demander le lien</a>
                </div>
              </article>
              <article className="card reveal" data-reveal>
                <h3 className="cardTitle">E-Todos (type Trello) — application web</h3>
                <p className="muted">
                  API de gestion de tâches (CRUD) avec authentification JWT (Node.js & Express) et
                  interface web en JavaScript.
                </p>
                <div className="cardLinks">
                  <a href="https://github.com/Newgeto/E-Todos" target="_blank" rel="noreferrer">Voir le repo</a>
                </div>
              </article>
              <article className="card reveal" data-reveal>
                <h3 className="cardTitle">Pentest — OWASP Juice Shop</h3>
                <p className="muted">
                  Exploitation de vulnérabilités, compréhension des failles et bonnes pratiques de
                  sécurité web.
                </p>
                <div className="cardLinks">
                  <a href="https://github.com/Newgeto/Hack-and-Juice" target="_blank" rel="noreferrer">Voir le repo</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="skills" className="section sectionSkills reveal" data-reveal>
          <div className="sectionInner">
            <h2 className="sectionTitle">Compétences</h2>
            <div className="skillsCategories" aria-label="Compétences">
              <div className="skillCategory">
                <h3 className="skillCategoryTitle">Création</h3>
                <div className="skillLogoGrid">
                  {SKILLS.creation.map(({ name, logo }) => (
                    <div key={name} className="skillLogoItem" title={name}>
                      <img className="skillLogoImg" src={logo} alt={name} loading="lazy" />
                      <span className="skillLogoName">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skillCategory">
                <h3 className="skillCategoryTitle">Développement</h3>
                <div className="skillLogoGrid">
                  {SKILLS.dev.map(({ name, logo }) => (
                    <div key={name} className="skillLogoItem" title={name}>
                      <img className="skillLogoImg" src={logo} alt={name} loading="lazy" />
                      <span className="skillLogoName">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="skillCategory">
                <h3 className="skillCategoryTitle">Outils & management</h3>
                <div className="skillLogoGrid">
                  {SKILLS.tools.map(({ name, logo }) => (
                    <div key={name} className="skillLogoItem" title={name}>
                      <img className="skillLogoImg" src={logo} alt={name} loading="lazy" />
                      <span className="skillLogoName">{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section sectionContact reveal" data-reveal>
          <div className="sectionInner">
            <h2 className="sectionTitle">Contact</h2>

            <div className="contactGrid">
              <a
                className="contactCard"
                href="mailto:Yanis.mdoughy@outlook.fr?subject=Contact%20portfolio&body=Bonjour%20Yanis%2C%0A%0AJe%20te%20contacte%20suite%20%C3%A0%20ton%20portfolio.%0A%0A%5BExplique%20ton%20besoin%5D%0A%0ACordialement%2C%0A"
              >
                <div className="contactIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="contactValue">Yanis.mdoughy@outlook.fr</span>
              </a>

              <a className="contactCard" href="tel:+33662679122">
                <div className="contactIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="contactValue">06 62 67 91 22</span>
              </a>

              <a
                className="contactCard"
                href="https://linkedin.com/in/yanis-mdoughy-558a1028b/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contactIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
                <span className="contactValue">LinkedIn</span>
              </a>

              <a
                className="contactCard"
                href="https://github.com/Newgeto"
                target="_blank"
                rel="noreferrer"
              >
                <div className="contactIcon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </div>
                <span className="contactValue">GitHub</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footerInner">
          <span className="muted">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}

export default App
