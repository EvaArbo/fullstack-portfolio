import { useEffect, useRef } from "react"
import "./ProjectCard.css"

function ProjectCard({
  title,
  description,
  technologies,
  image,
  links,
  index = 0,
}) {
  const cardRef = useRef(null)

  const pointerRef = useRef({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const card = cardRef.current

    if (!card) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReducedMotion) {
      return
    }

    function handlePointerMove(event) {
      const x =
        (event.clientX / window.innerWidth - 0.5) * 2

      const y =
        (event.clientY / window.innerHeight - 0.5) * 2

      pointerRef.current = {
        x,
        y,
      }
    }

    window.addEventListener("pointermove", handlePointerMove)

    let animationFrame

    function animate(time) {
      const seconds = time / 1000

      const phase = index * 1.8

      const floatY =
        Math.sin(seconds * 1.1 + phase) * 10

      const floatX =
        Math.cos(seconds * 0.8 + phase) * 4

      const ambientRotateX =
        Math.sin(seconds * 0.7 + phase) * 3

      const ambientRotateY =
        Math.cos(seconds * 0.75 + phase) * 4

      const pointerRotateX =
        pointerRef.current.y * -4

      const pointerRotateY =
        pointerRef.current.x * 5

      const rotateX =
        ambientRotateX + pointerRotateX

      const rotateY =
        ambientRotateY + pointerRotateY

      card.style.setProperty(
        "--card-float-y",
        `${floatY}px`,
      )

      card.style.setProperty(
        "--card-float-x",
        `${floatX}px`,
      )

      card.style.setProperty(
        "--card-rotate-x",
        `${rotateX}deg`,
      )

      card.style.setProperty(
        "--card-rotate-y",
        `${rotateY}deg`,
      )

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      )

      cancelAnimationFrame(animationFrame)
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className="project-card"
    >
      <div className="project-image-container">
        <img
          src={image}
          alt={`${title} project preview`}
          className="project-image"
        />
      </div>

      <h3 className="project-card-title">
        {title}
      </h3>

      <p className="project-card-description">
        {description}
      </p>

      <div className="project-technologies">
        {technologies.map((technology) => {
          return (
            <span
              className="project-tech"
              key={technology}
            >
              {technology}
            </span>
          )
        })}
      </div>

      <div className="project-links">
        {links.frontend && (
          <a
            href={links.frontend}
            target="_blank"
            rel="noreferrer"
          >
            Frontend Code
          </a>
        )}

        {links.backend && (
          <a
            href={links.backend}
            target="_blank"
            rel="noreferrer"
          >
            Backend Code
          </a>
        )}

        {links.live && (
          <a
            href={links.live}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard