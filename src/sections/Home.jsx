import photo from '../assets/photo.jpg'
import cvPdf from '../assets/cv-yanis-mdoughy.pdf'

function Home() {
  const cvHref = cvPdf

  return (
    <section id="home" className="section sectionHome reveal" data-reveal>
      <div className="sectionInner">
        <div className="hero">
          <div className="heroContent">
            <h1 className="title reveal revealDelay1" data-reveal>
              Mdoughy Yanis
            </h1>
            <a
              className="heroSchoolLink reveal revealDelay2"
              data-reveal
              href="https://www.epitech.eu/ecole-informatique-paris/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="epitechLogo"
                src="https://www.epitech.eu/wp-content/themes/epitech/assets/favicon/favicon-32x32.png"
                alt="Logo Epitech"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = 'https://yt3.googleusercontent.com/4dwyYBfUJPi-2Twhf5yHUMEQrniqJfLDMxzGbqqqrqhMC3DH3dfbytt-J7u_isYKTo7yoQNSDw=s900-c-k-c0x00ffffff-no-rj'
                }}
              />
              <span className="heroSchoolText">Epitech Paris</span>
            </a>
            <div className="heroBadges reveal revealDelay3" data-reveal aria-label="Profil">
              <span className="heroPill">1ère année Bachelor Informatique</span>
              <span className="heroPill heroPillAccent">À la recherche d’un stage</span>
            </div>
            <p className="heroLocation muted reveal revealDelay3" data-reveal>
              Paris, Île-de-France, France
            </p>
            <div className="actions reveal revealDelay3" data-reveal>
              <a className="button" href="#projects">Voir mes projets</a>
              <a className="button button-secondary" href="#contact">Me contacter</a>
              <a className="button button-secondary" href={cvHref} target="_blank" rel="noreferrer">
                Voir CV
              </a>
            </div>
          </div>

          <div className="heroMedia">
            <img className="heroPhoto" src={photo} alt="Photo de profil" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
