import photo from '../assets/photo.jpg'
import cvPdf from '../assets/cv-yanis-mdoughy.pdf'
import emailLogo from '../assets/email-logo.svg'
import cvLogo from '../assets/cv-logo.svg'
import linkedinLogo from '../assets/linkedin-logo.svg'
import githubLogo from '../assets/github-logo.svg'

function Header() {
  const cvHref = cvPdf

  return (
    <header className="appHeader">
      <div className="appHeaderInner">
        <a className="appHeaderBrand" href="#home" aria-label="Aller à l'accueil">
          <img className="appHeaderLogo" src={photo} alt="" />
          <span>Mdoughy Yanis</span>
        </a>

        <nav className="appHeaderLinks" aria-label="Liens rapides">
          <a className="appHeaderLink" href="mailto:Yanis.mdoughy@outlook.fr" aria-label="Email">
            <img src={emailLogo} alt="Email" className="appHeaderLinkIcon" />
          </a>
          <a className="appHeaderLink" href={cvHref} target="_blank" rel="noreferrer" aria-label="CV">
            <img src={cvLogo} alt="CV" className="appHeaderLinkIcon" />
          </a>
          <a
            className="appHeaderLink"
            href="https://linkedin.com/in/yanis-mdoughy-558a1028b/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinLogo} alt="LinkedIn" className="appHeaderLinkIcon" />
          </a>
          <a
            className="appHeaderLink"
            href="https://github.com/Newgeto"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <img src={githubLogo} alt="GitHub" className="appHeaderLinkIcon" />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
