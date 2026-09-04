import "./Projects.css"
import ProjectCard from "./ProjectCard.jsx"

const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    description:
      "A full-stack developer portfolio built with React, Flask, and PostgreSQL.",
    technologies: ["React", "Flask", "PostgreSQL"],
    links: {
      frontend: "https://github.com/EvaArbo/fullstack-portfolio",
      backend: null,
      live: null,
    },
  },

  {
    id: 2,
    title: "Ludo Game",
    description:
      "A full-stack game application focused on game logic, player management, and database integration.",
    technologies: ["JavaScript", "Python", "PostgreSQL"],
    links: {
      frontend: "https://github.com/EvaArbo/LUDO-GAME",
      backend: "https://github.com/EvaArbo/LUDO-GAME-BACKEND",
      live: "https://ludo-game-ns8e.vercel.app/",
    },
  },

  {
    id: 3,
    title: "SIMS - Smart Inventory Management System",
    description:
      "A full-stack mobile inventory management system for tracking assets, managing users and permissions, handling requests, and scanning QR codes and barcodes.",
    technologies: ["React Native", "Expo", "Expo Router", "JavaScript"],
    links: {
      frontend: null,
      backend: null,
      live: null,
    },
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
                links={project.links}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects