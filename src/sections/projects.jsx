function Projects() {
  return (
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
  )
}

export default Projects
