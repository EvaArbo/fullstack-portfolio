import "./ProjectCard.css"

function ProjectCard({
  title,
  description,
  technologies,
  image,
  links,
}) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img
          src={image}
          alt={`${title} project preview`}
          className="project-image"
        />
      </div>

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

      <div className="project-links">
        {links.source && (
          <a href={links.source} target="_blank" rel="noreferrer">
            Source Code
          </a>
        )}

        {links.frontend && (
          <a href={links.frontend} target="_blank" rel="noreferrer">
            Frontend Code
          </a>
        )}

        {links.backend && (
          <a href={links.backend} target="_blank" rel="noreferrer">
            Backend Code
          </a>
        )}

        {links.live && (
          <a href={links.live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard