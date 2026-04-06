import './Achievements.css'

const stats = [
  { num: '525+', label: 'LeetCode Problems', sub: 'Global Rank 167,426' },
  { num: '229+', label: 'CodeChef Problems', sub: 'Rating 1471 · 2★' },
  { num: '188', label: 'Active Coding Days', sub: 'Max streak: 49 days' },
  { num: '699', label: 'Submissions / Year', sub: '15+ GitHub repos' }
]

const certs = [
  { title: 'Java 11', issuer: 'LinkedIn Learning' },
  { title: 'React.js Essential Training', issuer: 'LinkedIn Learning' },
  { title: 'MySQL & Frontend Development', issuer: 'Great Learning' },
  { title: 'Python Basics & Competitive Coding', issuer: 'Inlustro Learning' },
  { title: 'Java Skill Test', issuer: 'CodeChef — 97 Percentile' }
]

export default function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <div className="ach-inner">
        <div className="section-label reveal" style={{ color: 'var(--gold)' }}>
          <span className="label-line" style={{ background: 'var(--gold)' }} />
          <span>05 — Achievements & Certifications</span>
        </div>

        <h2 className="section-title reveal" style={{ color: 'var(--cream)' }}>
          Milestones & Recognition
        </h2>

        <div className="ach-stats reveal">
          {stats.map(s => (
            <div className="ach-stat" key={s.label}>
              <span className="ach-num">{s.num}</span>
              <span className="ach-label">{s.label}</span>
              <span className="ach-sub">{s.sub}</span>
            </div>
          ))}
        </div>

        <div className="ach-badges reveal">
          {/* <div className="badge-item">
            <span className="badge-icon">🏅</span>
            <span>50 Days Badge 2026</span>
          </div> */}
          <div className="badge-item">
            <span className="badge-icon">🏆</span>
            <span>Multiple LeetCode Contests & Badges</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">📌</span>
            <span>CodeChef Starters Contests and Badges</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🔗</span>
            <span>50 Days Coding Challenge — Daily GitHub pushes</span>
          </div>
          <div className="badge-item">
            <span className="badge-icon">🌐</span>
            <span>Open-source contributor on GitHub</span>
          </div>
        </div>

        <div className="certs-grid reveal">
          <h3 className="certs-heading">Certifications</h3>
          <div className="certs-list">
            {certs.map(c => (
              <div className="cert-item" key={c.title}>
                <div className="cert-dot" />
                <div>
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-issuer">{c.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
