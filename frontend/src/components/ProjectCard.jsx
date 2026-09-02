import "./ProjectCard.css"

function ProjectCard({ title, description, technologies }) {
  return (
    <div className="project-card">
      <h3 className="project-card-title">{title}</h3>

      <p className="project-card-description">{description}</p>

      <div className="project-technologies">
        {technologies.map((technology) => {
          return (
            <span className="project-tech" key={technology}>
              {technology}
            </span>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectCard