import './Experience.css'

export default function Experience() {
  return (
    <section className="section experience-section" id="experience">
      <div className="section-inner">
        <div className="section-label reveal">
          <span className="label-line" />
          <span>02 — Experience & Education</span>
        </div>

        <h2 className="section-title reveal">Professional <em>Journey</em></h2>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot" />
              <div className="marker-line" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">Technical Trainer</h3>
                  <p className="timeline-company">CodeTantra Tech Solutions, Hyderabad</p>
                </div>
                <span className="timeline-date">Apr 2024 — Present</span>
              </div>
              <ul className="timeline-bullets">
                <li>Conducted hands-on workshops across <strong>15+ colleges</strong> teaching MERN Stack, Web Development, and DSA (C & Java).</li>
                <li>Trained <strong>2,500+ students</strong> with practical projects, coding sessions, and live deployments.</li>
                <li>Built and maintained full-stack applications using Java Spring Boot and MERN stack as part of curriculum.</li>
                <li>Mentored students on Git, GitHub, REST APIs, and real-world software development practices.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal">
            <div className="timeline-marker">
              <div className="marker-dot marker-dot--edu" />
            </div>
            <div className="timeline-content">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">B.Tech — Information Technology</h3>
                  <p className="timeline-company">Saranathan College of Engineering, Trichy</p>
                </div>
                <span className="timeline-date">2020 — 2024</span>
              </div>
              <p className="timeline-meta">CGPA: <strong>7.7 / 10</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
