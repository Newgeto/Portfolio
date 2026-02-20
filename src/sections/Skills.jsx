import { SKILLS } from '../data/skills'

function Skills() {
  return (
    <section id="skills" className="section sectionSkills reveal" data-reveal>
      <div className="sectionInner">
        <h2 className="sectionTitle">Compétences</h2>

        <div className="skillsFeatured" aria-label="Développement">
          <div className="skillCategory skillCategoryFeatured">
            <div className="skillCategoryHeader">
              <h3 className="skillCategoryTitle">Développement</h3>
            </div>
            <div className="skillLogoGrid skillLogoGridFeatured">
              {SKILLS.dev.map(({ name, logo }) => (
                <div key={name} className="skillLogoItem" title={name}>
                  <img className={`skillLogoImg${name === 'WordPress' ? ' skillLogoImgWordpress' : ''}`} src={logo} alt={name} loading="lazy" />
                  <span className="skillLogoName">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skillsCategories" aria-label="Autres compétences">
          <div className="skillCategory">
            <div className="skillCategoryHeader">
              <h3 className="skillCategoryTitle">Outils</h3>
            </div>
            <div className="skillLogoGrid">
              {SKILLS.tools.map(({ name, logo }) => (
                <div key={name} className="skillLogoItem" title={name}>
                  <img className={`skillLogoImg${name === 'WordPress' ? ' skillLogoImgWordpress' : ''}`} src={logo} alt={name} loading="lazy" />
                  <span className="skillLogoName">{name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="skillCategory">
            <div className="skillCategoryHeader">
              <h3 className="skillCategoryTitle">Création</h3>
            </div>
            <div className="skillLogoGrid">
              {SKILLS.creation.map(({ name, logo }) => (
                <div key={name} className="skillLogoItem" title={name}>
                  <img className={`skillLogoImg${name === 'WordPress' ? ' skillLogoImgWordpress' : ''}`} src={logo} alt={name} loading="lazy" />
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
