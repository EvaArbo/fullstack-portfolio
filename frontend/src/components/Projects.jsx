import "./Projects.css"
import ProjectCard from "./ProjectCard.jsx"

const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    description:
      "A full-stack developer portfolio built with React, Flask, and PostgreSQL.",
    technologies: ["React", "Flask", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Ludo Game",
    description:
      "A game project focused on application logic, player management, and database integration.",
    technologies: ["Python", "SQLAlchemy", "PostgreSQL"],
  },
  {
    id: 3,
    title: "SIMS - Smart Inventory Management System",
    description:
      "A mobile inventory management application for tracking assets, managing users and permissions, handling requests, and scanning QR codes and barcodes.",
    technologies: ["React Native", "Expo", "Expo Router"],
  },
]

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-content">
        <div className="projects-header">
          <p className="projects-label">Selected work</p>
          <h2 className="projects-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects