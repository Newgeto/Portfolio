function Projects() {
  const projects = [
    {
      id: 'Rustodo',
      title: 'Rustodo',
      description: "Application 'Todo' en Rust avec interface graphique et sauvegarde automatique des tâches.",
      link: { label: 'Voir la repo', href: 'https://github.com/Newgeto/Rustodo' },
      // Pas de dates
    },
    {
      id: 'Flaskops',
      title: 'Flaskops',
      description: "Projet récent utilisant Flask pour créer une API et gérer des opérations back-end de manière efficace.",
      link: { label: 'Voir la repo', href: 'https://github.com/Newgeto/Flaskops' },
      // Pas de dates
    },
    {
      id: 'Showeather',
      title: 'Showeather',
      description: "Application météo en temps réel avec React + Vite et l'API OpenWeatherMap.",
      link: { label: 'Voir la repo', href: 'https://github.com/Newgeto/showeather' },
      // Pas de dates
    },
    {
      id: 'Hack-and-Juice',
      title: 'Hack and Juice',
      description: "Exploration des vulnérabilités courantes des applications web en travaillant sur OWASP Juice Shop.",
      link: { label: 'Voir la repo', href: 'https://github.com/Newgeto/Hack-and-Juice' },
      dates: { start: '01/12/2025', end: '19/12/2025' },
    },
    {
      id: 'E-todos',
      title: 'E-Todos',
      description: "Application interactive de gestion de tâches avec Node.js, Express, CORS et JWT.",
      link: { label: 'Voir la repo', href: 'https://github.com/Newgeto/E-Todos' },
      dates: { start: '03/11/2025', end: '28/11/2025' },
    },
    {
      id: 'Cv-builder',
      title: 'CV Builder',
      description: "Générateur de CV dynamique en PHP pour créer un CV professionnel facilement.",
      link: { label: 'Voir la repo', href: 'https://github.com/Newgeto/CV-Builder' },
      dates: { start: '30/10/2025', end: '02/11/2025' },
    },
  ]

  return (
    <section id="projects" className="section sectionProjects reveal" data-reveal>
      <div className="sectionInner">
        <h2 className="sectionTitle">Projets</h2>
        <div className="projectsGrid">
          {projects.map((project) => (
            <article key={project.id} className="projectItem card reveal" data-reveal>
              <div className="projectHeader">
                <h3 className="projectTitle">{project.title}</h3>
              </div>

              <p className="projectDescription">{project.description}</p>

              {project.dates?.start && project.dates?.end && (
                <div className="projectMeta" aria-label="Période du projet">
                  <span className="projectDates">
                    Du&nbsp;<strong>{project.dates.start}</strong>&nbsp;au&nbsp;<strong>{project.dates.end}</strong>
                  </span>
                </div>
              )}

              <div className="projectActions" aria-label="Lien du projet">
                <a
                  className="projectButton"
                  href={project.link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.link.label}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects