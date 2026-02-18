function Projects() {
  const formatDate = (value) => {
    const dateStr = String(value || '').split(' ')[0]
    return dateStr.replace(/(\d+)\/(\d+)\/(\d+)/, '$1 / $2 / $3')
  }

  const projects = [
    {
      id: 'Pentest OWASP Juice Shop',
      title: 'OWASP Juice Shop - Pentest',
      description: 'Un projet où j\'ai exploré les vulnérabilités communes des applications web sur OWASP Juice Shop.',
      link: {
        label: 'Voir le dépôt',
        href: 'https://github.com/Newgeto/Pentest-OWASP-Juice-Shop',
      },
      dates: {
        start: '01/12/2025 08:00',
        registrationEnd: '05/12/2025 18:00',
        end: '19/12/2025 19:00',
      },
    },
    {
      id: 'E-todos',
      title: 'E-Todos',
      description: 'Une application de gestion de tâches interactive construite avec Node.js, Express, CORS, JWT.',
      link: {
        label: 'Voir le dépôt',
        href: 'https://github.com/Newgeto/E-Todos',
      },
      video: {
        src: '/videos/e-todos-demo.mp4',
        type: 'video/mp4',
      },
      dates: {
        start: '03/11/2025 08:00',
        registrationEnd: '09/11/2025 23:42',
        end: '28/11/2025 19:00',
      },
    },
    {
      id: 'Cv builder',
      title: 'CV Builder',
      description: 'Un générateur de CV dynamique développé avec PHP permettant de créer un CV professionnel facilement.',
      link: {
        label: 'Voir le dépôt',
        href: 'https://github.com/Newgeto/CV-Builder',
      },
      dates: {
        start: '30/10/2025 00:00',
        registrationEnd: '30/10/2025 15:00',
        end: '02/11/2025 23:42',
      },
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

              <div className="projectMeta" aria-label="Période du projet">
                <span className="projectDates">
                  Du&nbsp;<strong>{formatDate(project.dates.start)}</strong>&nbsp;au&nbsp;<strong>{formatDate(project.dates.end)}</strong>
                </span>
              </div>

              <div className="projectActions" aria-label="Lien du projet">
                <a
                  className="projectButton"
                  href={project.link.href}
                  target={project.link.href.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.href.startsWith('http') ? 'noreferrer' : undefined}
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
