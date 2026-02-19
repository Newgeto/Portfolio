function Formation() {
  const items = [
    {
      years: '2025 – 2028',
      title: 'Bachelor Informatique',
      place: 'EPITECH (Paris)',
      status: 'Diplôme en cours',
    },
    {
      years: '2023 – 2024',
      title: 'Mention complémentaire niveau 4 — Services numériques aux organisations',
      place: 'Groupe Scolaire Saint-Jean de Montmartre, Paris',
      status: 'Diplôme obtenu (mention assez bien)',
    },
    {
      years: '2022 – 2023',
      title: 'Bac pro — Métiers du commerce et de la vente',
      place: 'Groupe Scolaire Saint-Jean de Montmartre, Paris',
      status: 'Diplôme obtenu (mention assez bien)',
    },
  ]

  return (
    <section id="formation" className="section sectionFormation reveal" data-reveal>
      <div className="sectionInner">
        <h2 className="sectionTitle">Formation</h2>
        <div className="resumeTimeline" aria-label="Formations">
          {items.map((item) => (
            <div key={item.years + item.title} className="resumeItem reveal" data-reveal>
              <div className="resumeRail" aria-hidden="true">
                <span className="resumeDot" />
              </div>
              <article className="resumeCard">
                <header className="resumeCardHeader">
                  <h3 className="resumeTitle">{item.title}</h3>
                  <span className="resumeBadge">{item.years}</span>
                </header>
                <p className="resumeMeta">
                  {item.place === 'EPITECH (Paris)' ? (
                    <span className="formationHighlight">{item.place}</span>
                  ) : (
                    item.place
                  )}
                </p>
                <p className="resumeCopy muted">{item.status}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Formation
