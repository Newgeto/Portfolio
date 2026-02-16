import photo from '../assets/photo.jpg'

function Home() {
  return (
    <section id="home" className="section sectionHome reveal" data-reveal>
      <div className="sectionInner">
        <div className="hero">
          <div className="heroContent">
            <h1 className="title">Mdoughy Yanis</h1>
            <p className="subtitle">Étudiant en bachelor informatique à Epitech Paris, passionné par le développement web</p>
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
  )
}

export default Home
