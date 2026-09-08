import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h3>Arbogasti ♥</h3>
          <p>Full-Stack & Mobile Developer</p>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/EvaArbo"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/evaline-arbogasti-7aa7ba299/?isSelfProfile=true"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Evaline Arbogasti. Built with React.
        </p>
      </div>
    </footer>
  )
}

export default Footer