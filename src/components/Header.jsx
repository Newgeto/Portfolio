import photo from '../assets/photo.jpg'
import { useEffect, useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header className="appHeader">
      <div className="appHeaderInner">
        <a className="appHeaderBrand" href="#home" aria-label="Aller à l'accueil">
          <img className="appHeaderLogo" src={photo} alt="" />
          <span>Mdoughy Yanis</span>
        </a>

        <div className="appHeaderNav">
          <nav className="appHeaderLinks" aria-label="Liens rapides">
            <a className="appHeaderLink" href="mailto:Yanis.mdoughy@outlook.fr">
              Email
            </a>
            <a
              className="appHeaderLink"
              href="https://linkedin.com/in/yanis-mdoughy-558a1028b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="appHeaderLink"
              href="https://github.com/Newgeto"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </nav>

          <button
            type="button"
            className="appHeaderToggle"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobileMenu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true">☰</span>
          </button>
        </div>
      </div>

      <div
        id="mobileMenu"
        className={`appHeaderMenu${menuOpen ? ' is-open' : ''}`}
        aria-label="Menu mobile"
      >
        <a className="appHeaderMenuLink" href="mailto:Yanis.mdoughy@outlook.fr" onClick={() => setMenuOpen(false)}>
          Email
        </a>
        <a
          className="appHeaderMenuLink"
          href="https://linkedin.com/in/yanis-mdoughy-558a1028b/"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          LinkedIn
        </a>
        <a
          className="appHeaderMenuLink"
          href="https://github.com/Newgeto"
          target="_blank"
          rel="noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          GitHub
        </a>
      </div>
    </header>
  )
}

export default Header
