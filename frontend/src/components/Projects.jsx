import "./Projects.css"
import ProjectCard from "./ProjectCard.jsx"
import Reveal from "./Reveal.jsx"

import portfolioImage from "../assets/portfolio.png"
import ludoImage from "../assets/ludo.png"
import simsImage from "../assets/sims.png"


const projects = [
  {
    id: 1,

    category: "Full-Stack Web Application",

    title: "Developer Portfolio",

    description:
      "A full-stack developer portfolio built to showcase my projects, technical skills, and development experience while connecting a responsive React interface to a Flask API and PostgreSQL database.",

    technologies: [
      "React",
      "Vite",
      "Flask",
      "PostgreSQL",
      "SQLAlchemy",
    ],

    image: portfolioImage,

    links: {
      frontend:
        "https://github.com/EvaArbo/fullstack-portfolio",

      backend:
        "https://github.com/EvaArbo/fullstack-portfolio/tree/main/backend",

      live:
        "https://evaline-arbogasti.vercel.app/",
    },

    privateProject: false,
  },


  {
    id: 2,

    category: "Full-Stack Game",

    title: "Ludo Game",

    description:
      "A full-stack Ludo game built around interactive gameplay, game logic, player management, and PostgreSQL database integration.",

    technologies: [
      "JavaScript",
      "Python",
      "PostgreSQL",
    ],

    image: ludoImage,

    links: {
      frontend:
        "https://github.com/EvaArbo/LUDO-GAME",

      backend:
        "https://github.com/EvaArbo/LUDO-GAME-BACKEND",

      live:
        "https://ludo-game-ns8e.vercel.app/",
    },

    privateProject: false,
  },


  {
    id: 3,

    category: "Mobile Application",

    title: "SIMS",

    subtitle:
      "Smart Inventory Management System",

    description:
      "A mobile inventory management system for tracking organizational assets, managing users and permissions, handling inventory requests, and supporting QR-code and barcode workflows.",

    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "JavaScript",
    ],

    image: simsImage,

    links: {
      frontend: null,
      backend: null,
      live: null,
    },

    privateProject: true,
  },
]


function Projects() {
  return (
    <section
      id="projects"
      className="projects"
    >
      <div className="projects-content">

        <Reveal
          direction="zoom"
          distance={40}
          duration={1000}
        >
          <div className="projects-header">

            <p className="projects-label">
              Selected Work
            </p>

            <h2 className="projects-title">
              Projects
            </h2>

            <p className="projects-intro">
              A selection of web and mobile applications
              I&apos;ve built while developing my skills
              across frontend, backend, databases, and
              production deployment.
            </p>

          </div>
        </Reveal>


        <div className="projects-grid">

          {projects.map((project, index) => (
            <Reveal
              key={project.id}
              direction="up"
              delay={index * 160}
              distance={90}
              duration={1000}
            >
              <ProjectCard
                index={index}
                category={project.category}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                technologies={project.technologies}
                image={project.image}
                links={project.links}
                privateProject={project.privateProject}
              />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}


export default Projects