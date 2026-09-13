import "./About.css"
import Reveal from "./Reveal.jsx"

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <Reveal
          direction="zoom"
          distance={40}
          duration={1000}
        >
          <div className="about-header">
            <p className="about-label">Get to know me</p>
            <h2 className="about-title">About Me</h2>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal
            direction="left"
            distance={90}
            duration={1100}
          >
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
          </Reveal>

          <div className="about-highlights">
            <Reveal direction="right" delay={0}>
              <div className="about-card">
                <h3>Web Development</h3>
                <p>
                  Building responsive interfaces with React and JavaScript.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={120}>
              <div className="about-card">
                <h3>Mobile Development</h3>
                <p>
                  Creating mobile applications with React Native.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={240}>
              <div className="about-card">
                <h3>Backend Development</h3>
                <p>
                  Building APIs and server-side applications with Python and Flask.
                </p>
              </div>
            </Reveal>

            <Reveal direction="right" delay={360}>
              <div className="about-card">
                <h3>Always Learning</h3>
                <p>
                  Strengthening my skills by building and understanding real projects.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About