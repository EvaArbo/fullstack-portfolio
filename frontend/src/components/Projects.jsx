import "./Projects.css"
import ProjectCard from "./ProjectCard.jsx"
import Reveal from "./Reveal.jsx"

import portfolioImage from "../assets/portfolio.png"
import ludoImage from "../assets/ludo.png"
import simsImage from "../assets/sims.png"

const projects = [
  {
    id: 1,
    title: "Developer Portfolio",
    description:
      "A full-stack developer portfolio built with React, Flask, and PostgreSQL.",
    technologies: ["React", "Flask", "PostgreSQL"],
    image: portfolioImage,
    links: {
      frontend: "https://github.com/EvaArbo/fullstack-portfolio",
      backend: "https://github.com/EvaArbo/fullstack-portfolio/tree/main/backend",
      live: "https://portfolio-frontend-sage-delta.vercel.app/",
    },
  },

  {
    id: 2,
    title: "Ludo Game",
    description:
      "A full-stack game application focused on game logic, player management, and database integration.",
    technologies: ["JavaScript", "Python", "PostgreSQL"],
    image: ludoImage,
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
    image: simsImage,
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
        <Reveal
          direction="zoom"
          distance={40}
          duration={1000}
        >
          <div className="projects-header">
            <p className="projects-label">Selected work</p>
            <h2 className="projects-title">Projects</h2>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, index) => {
            return (
              <Reveal
                key={project.id}
                direction="up"
                delay={index * 160}
                distance={90}
                duration={1000}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  image={project.image}
                  links={project.links}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects