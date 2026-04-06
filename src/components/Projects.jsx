import './Projects.css'

const projects = [
  {
    year: '2026',
    number: '01',
    title: 'BillTrack',
    subtitle: 'Employee Bill Reimbursement System',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Cloudinary', 'Recharts'],
    live: 'https://bill-automation-gamma.vercel.app',
    highlights: [
      '5 role-based access levels with JWT auth',
      'Multi-stage bill approval workflow',
      'Nodemailer automated email notifications',
      'Analytics dashboards with Recharts',
      'Full CI/CD via GitHub Actions'
    ],
    tag: 'MERN Stack'
  },
  {
    year: '2025',
    number: '02',
    title: 'Fantasy Sports App',
    subtitle: 'Dream11 Clone',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    live: null,
    highlights: [
      'Dynamic team selection with live player stats',
      'Credit system & captain/vice-captain logic',
      'Contest creation & leaderboard ranking',
      'Points calculation engine',
      'Real-time score updates'
    ],
    tag: 'MERN Stack'
  },
  {
    year: '2024',
    number: '03',
    title: 'Employee Management System',
    subtitle: 'Spring Boot + React',
    stack: ['Spring Boot', 'React.js', 'MySQL', 'JWT', 'Swagger'],
    live: null,
    highlights: [
      'Full-stack with Spring Boot backend',
      'CRUD operations with role-based access',
      'JWT authentication',
      'REST API with Swagger documentation'
    ],
    tag: 'Java'
  },
  {
    year: '2024',
    number: '04',
    title: 'Stock Market Prediction',
    subtitle: 'AI-Powered Analysis',
    stack: ['Python', 'TensorFlow', 'LSTM', 'Pandas', 'Matplotlib'],
    live: null,
    highlights: [
      'LSTM & regression algorithms',
      'Historical + real-time data via Meta Market Data API',
      'Visualized insights with Matplotlib',
      'Trend prediction engine'
    ],
    tag: 'AI / ML'
  }
]

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-inner" style={{ maxWidth: '1000px' }}>
        <div className="section-label reveal">
          <span className="label-line" />
          <span>04 — Projects</span>
        </div>

        <h2 className="section-title reveal">Featured <em>Work</em></h2>

        <div className="projects-list">
          {projects.map((proj, i) => (
            <div className="project-item reveal" key={proj.number} style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="project-meta">
                <span className="project-number">{proj.number}</span>
                <span className="project-year">{proj.year}</span>
                <span className="project-tag">{proj.tag}</span>
              </div>

              <div className="project-body">
                <div className="project-top">
                  <div>
                    <h3 className="project-title">{proj.title}</h3>
                    <p className="project-subtitle">{proj.subtitle}</p>
                  </div>
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noreferrer" className="project-live">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      Live Demo
                    </a>
                  )}
                </div>

                <ul className="project-highlights">
                  {proj.highlights.map(h => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>

                <div className="project-stack">
                  {proj.stack.map(s => (
                    <span key={s} className="stack-badge">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
