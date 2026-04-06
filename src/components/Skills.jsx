import './Skills.css'

const skillGroups = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['Java', 'JavaScript', 'Node.js', 'C', 'Python']
  },
  {
    category: 'Frameworks',
    icon: '⬡',
    skills: ['Spring Boot', 'React.js', 'Express.js']
  },
  {
    category: 'Databases',
    icon: '⊞',
    skills: ['MongoDB Atlas', 'MySQL']
  },
  {
    category: 'Cloud & DevOps',
    icon: '◈',
    skills: ['Vercel', 'Render', 'MongoDB Atlas', 'GitHub Actions']
  },
  {
    category: 'Tools',
    icon: '⚙',
    skills: ['Git', 'GitHub', 'Postman', 'IntelliJ IDEA', 'VS Code']
  },
  {
    category: 'Concepts',
    icon: '◎',
    skills: ['REST APIs', 'JWT Auth', 'RBAC', 'OOP', 'DSA', 'CI/CD']
  }
]

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div className="section-label reveal">
          <span className="label-line" />
          <span>03 — Technical Skills</span>
        </div>

        <h2 className="section-title reveal">Tech Arsenal</h2>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <div className="skill-card reveal" key={group.category} style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <div className="skill-tags">
                {group.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
