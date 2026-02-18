import photo from '../assets/photo.jpg'

function Home() {
  return (
    <section id="home" className="section sectionHome reveal" data-reveal>
      <div className="sectionInner">
        <div className="hero">
          <div className="heroContent">
            <h1 className="title reveal revealDelay1" data-reveal>
              Mdoughy Yanis
            </h1>
            <p className="subtitle reveal revealDelay2" data-reveal>
              Etudiant en informatique à Epitech Paris
            </p>
            <div className="actions reveal revealDelay3" data-reveal>
              <a className="button" href="#projects">Voir mes projets</a>
              <a className="button button-secondary" href="#contact">Me contacter</a>
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
