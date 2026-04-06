import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">BR</span>
          <span className="footer-name">Balamurugan R</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} — Crafted with care
        </p>
        <div className="footer-links">
          <a href="https://github.com/bala2003rk" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/balamurugan-rk-2003rk" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:muruganrajendran23@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
