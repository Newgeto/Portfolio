import { SKILLS } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section sectionSkills reveal" data-reveal>
      <div className="sectionInner">
        <h2 className="sectionTitle">Compétences</h2>
        <div className="skillsCategories" aria-label="Compétences">
          <div className="skillCategory">
            <h3 className="skillCategoryTitle">Création</h3>
            <div className="skillLogoGrid">
              {SKILLS.creation.map(({ name, logo }) => (
                <div key={name} className="skillLogoItem" title={name}>
                  <img className="skillLogoImg" src={logo} alt={name} loading="lazy" />
                  <span className="skillLogoName">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skillCategory">
            <h3 className="skillCategoryTitle">Développement</h3>
            <div className="skillLogoGrid">
              {SKILLS.dev.map(({ name, logo }) => (
                <div key={name} className="skillLogoItem" title={name}>
                  <img className="skillLogoImg" src={logo} alt={name} loading="lazy" />
                  <span className="skillLogoName">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skillCategory">
            <h3 className="skillCategoryTitle">Outils & management</h3>
            <div className="skillLogoGrid">
              {SKILLS.tools.map(({ name, logo }) => (
                <div key={name} className="skillLogoItem" title={name}>
                  <img className="skillLogoImg" src={logo} alt={name} loading="lazy" />
                  <span className="skillLogoName">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
