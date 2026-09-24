import "./Resume.css"
import Reveal from "./Reveal.jsx"


function Resume() {
  return (
    <section
      className="resume"
      id="resume"
      aria-labelledby="resume-title"
    >
      <div className="resume-container">

        <Reveal>
          <div className="resume-heading">

            <p className="resume-eyebrow">
              My Background
            </p>

            <h2 id="resume-title">
              Resume
            </h2>

            <p>
              A snapshot of my technical skills, experience,
              education, and development background.
            </p>

            <a
              className="resume-download"
              href="/Evaline_Arbogasti_Resume.pdf"
              download="Evaline_Arbogasti_Resume.pdf"
              aria-label="Download Evaline Arbogasti resume as a PDF"
            >
              Download Resume
            </a>

          </div>
        </Reveal>


        <div className="resume-grid">

          <Reveal direction="left">

            <article className="resume-card">

              <div
                className="resume-card-number"
                aria-hidden="true"
              >
                01
              </div>

              <h3>
                Professional Summary
              </h3>

              <p>
                Software developer with experience building and
                launching web and mobile applications from concept
                to completion.
              </p>

              <p>
                Comfortable working across different parts of a
  project, solving technical problems, improving
  existing systems, and creating reliable products
  that are ready for real users.
              </p>

            </article>

          </Reveal>


          <Reveal
            direction="right"
            delay={100}
          >

            <article className="resume-card">

              <div
                className="resume-card-number"
                aria-hidden="true"
              >
                02
              </div>

              <h3>
                Technical Skills
              </h3>


              <div className="resume-skill-group">

                <span
                  role="heading"
                  aria-level="4"
                >
                  Languages
                </span>

                <p>
                  Python · JavaScript · SQL · HTML · CSS
                </p>

              </div>


              <div className="resume-skill-group">

                <span
                  role="heading"
                  aria-level="4"
                >
                  Frameworks & Libraries
                </span>

                <p>
                  React · React Native · Expo · Expo Router ·
                  Flask · SQLAlchemy · Flask-Migrate ·
                  Flask-Limiter · Vite
                </p>

              </div>


              <div className="resume-skill-group">

                <span
                  role="heading"
                  aria-level="4"
                >
                  Methodologies & Concepts
                </span>

                <p>
                  REST APIs · CRUD · Authentication ·
                  Responsive Web Design · CORS ·
                  API Integration · JSON
                </p>

              </div>


              <div className="resume-skill-group">

                <span
                  role="heading"
                  aria-level="4"
                >
                  Tools & Platforms
                </span>

                <p>
                  Git · GitHub · VS Code · Linux · PostgreSQL ·
                  Supabase · Vercel · Render · Resend
                </p>

              </div>

            </article>

          </Reveal>


          <Reveal
            direction="left"
            delay={150}
          >

            <article className="resume-card">

              <div
                className="resume-card-number"
                aria-hidden="true"
              >
                03
              </div>

              <h3>
                Experience
              </h3>


              <div className="resume-entry">

                <span className="resume-entry-date">
                  Jan 2024 – May 2024
                </span>

                <h4>
                  Junior Software Developer Intern
                </h4>

                <p className="resume-company">
                  Bob Morgan Security Services
                </p>

                <ul>
                  <li>
                    Maintained backend infrastructure supporting
                    more than 500 users.
                  </li>

                  <li>
                    Improved troubleshooting workflows and reduced
                    issue-resolution time by 50%.
                  </li>

                  <li>
                    Supported day-to-day maintenance and reliability
                    of internal application systems.
                  </li>
                </ul>

              </div>


              <div className="resume-entry">

                <span className="resume-entry-date">
                  Jan 2024 – May 2024
                </span>

                <h4>
                  IT / Software Intern
                </h4>

                <p className="resume-company">
                  Bob Morgan Company
                </p>

                <ul>
                  <li>
                    Maintained IT systems and configured network
                    and security devices.
                  </li>

                  <li>
                    Supported technical operations and system
                    troubleshooting.
                  </li>
                </ul>

              </div>

            </article>

          </Reveal>


          <Reveal
            direction="right"
            delay={200}
          >

            <article className="resume-card">

              <div
                className="resume-card-number"
                aria-hidden="true"
              >
                04
              </div>

              <h3>
                Education
              </h3>


              <div className="resume-entry">

                <span className="resume-entry-date">
                  Completed November 2024
                </span>

                <h4>
                  Information Technology
                </h4>

                <p className="resume-company">
                  Jomo Kenyatta University of Agriculture
                  and Technology
                </p>

                <p>
                  Associate Degree
                </p>

              </div>


              <div className="resume-entry">

                <span className="resume-entry-date">
                  Completed November 2025
                </span>

                <h4>
                  Software Engineering Certificate
                </h4>

                <p className="resume-company">
                  Moringa School
                </p>

                <p>
                  Software engineering program.
                </p>

              </div>

            </article>

          </Reveal>

        </div>

      </div>
    </section>
  )
}


export default Resume