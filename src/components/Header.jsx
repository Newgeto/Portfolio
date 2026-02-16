import photo from '../assets/photo.jpg'

function Header() {
  return (
    <header className="appHeader">
      <div className="appHeaderInner">
        <a className="appHeaderBrand" href="#home" aria-label="Aller à l'accueil">
          <img className="appHeaderLogo" src={photo} alt="" />
          <span>Mdoughy Yanis</span>
        </a>

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
      </div>
    </header>
  )
}

export default Header
