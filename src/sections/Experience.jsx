function Experience() {
  return (
    <section id="experience" className="section sectionExperience reveal" data-reveal>
      <div className="sectionInner">
        <h2 className="sectionTitle">Expérience professionnelle</h2>
        <div className="resumeTimeline" aria-label="Expériences">
          <div className="resumeItem reveal" data-reveal>
            <div className="resumeRail" aria-hidden="true">
              <span className="resumeDot" />
            </div>
            <article className="resumeCard">
              <header className="resumeCardHeader">
                <h3 className="resumeTitle">Helpdesk</h3>
                <span className="resumeBadge">2 mois</span>
              </header>
              <p className="resumeMeta">
                <a href="https://www.interface-formation.net/" target="_blank" rel="noreferrer">
                  Association Interface Formation
                </a>
              </p>
              <div className="resumeActions" aria-label="Lien de l'entreprise">
                <a className="resumeButton" href="https://www.interface-formation.net/" target="_blank" rel="noreferrer">
                  Voir le site
                </a>
              </div>
              <p className="resumeCopy">
                Participation à la gestion et à la maintenance du parc informatique (postes utilisateurs, périphériques).
                Création de guides d’utilisation et assistance technique auprès des utilisateurs. Contribution à la mise à jour
                et à l’amélioration du site web de l’association, dans le cadre d’un dispositif d’accompagnement à l’insertion
                professionnelle des bénéficiaires.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
