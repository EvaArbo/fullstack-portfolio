import "./About.css"

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <div className="about-header">
          <p className="about-label">Get to know me</p>
          <h2 className="about-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p className="about-description">
              I’m a full-stack and mobile developer who enjoys turning ideas
              into practical, user-friendly applications. I work with React
              and JavaScript on the web, React Native for mobile applications,
              and Python and Flask on the backend.
            </p>

            <p className="about-description">
              I enjoy understanding how each part of an application works,
              from the interface users interact with to the APIs and databases
              working behind the scenes. I’m continuously improving my skills
              by building real projects and learning through hands-on
              development.
            </p>
          </div>

          <div className="about-highlights">
            <div className="about-card">
              <h3>Web Development</h3>
              <p>Building responsive interfaces with React and JavaScript.</p>
            </div>

            <div className="about-card">
              <h3>Mobile Development</h3>
              <p>Creating mobile applications with React Native.</p>
            </div>

            <div className="about-card">
              <h3>Backend Development</h3>
              <p>Building APIs and server-side applications with Python and Flask.</p>
            </div>

            <div className="about-card">
              <h3>Always Learning</h3>
              <p>Strengthening my skills by building and understanding real projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About