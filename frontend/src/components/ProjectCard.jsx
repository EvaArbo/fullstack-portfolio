import {
  FaArrowUpRightFromSquare,
  FaCode,
  FaGithub,
  FaLock,
} from "react-icons/fa6"

import {
  useEffect,
  useRef,
} from "react"

import "./ProjectCard.css"


function ProjectCard({
  category,
  title,
  subtitle,
  description,
  technologies,
  image,
  links,
  privateProject,
  index = 0,
}) {
  const cardRef = useRef(null)

  const pointerRef = useRef({
    x: 0,
    y: 0,
  })

  const titleId =
    `project-${index}-title`


  useEffect(() => {
    const card = cardRef.current

    if (!card) {
      return
    }


    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches


    if (prefersReducedMotion) {
      return
    }


    function handlePointerMove(event) {
      const x =
        (
          event.clientX /
          window.innerWidth -
          0.5
        ) * 2

      const y =
        (
          event.clientY /
          window.innerHeight -
          0.5
        ) * 2


      pointerRef.current = {
        x,
        y,
      }
    }


    window.addEventListener(
      "pointermove",
      handlePointerMove,
    )


    let animationFrame


    function animate(time) {
      const seconds =
        time / 1000

      const phase =
        index * 1.8


      const floatY =
        Math.sin(
          seconds * 1.1 +
          phase,
        ) * 8


      const floatX =
        Math.cos(
          seconds * 0.8 +
          phase,
        ) * 3


      const ambientRotateX =
        Math.sin(
          seconds * 0.7 +
          phase,
        ) * 2.5


      const ambientRotateY =
        Math.cos(
          seconds * 0.75 +
          phase,
        ) * 3


      const pointerRotateX =
        pointerRef.current.y *
        -3


      const pointerRotateY =
        pointerRef.current.x *
        4


      const rotateX =
        ambientRotateX +
        pointerRotateX


      const rotateY =
        ambientRotateY +
        pointerRotateY


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


      animationFrame =
        requestAnimationFrame(
          animate,
        )
    }


    animationFrame =
      requestAnimationFrame(
        animate,
      )


    return () => {
      window.removeEventListener(
        "pointermove",
        handlePointerMove,
      )


      cancelAnimationFrame(
        animationFrame,
      )
    }
  }, [index])


  return (
    <article
      ref={cardRef}
      className="project-card"
      aria-labelledby={titleId}
    >

      <div className="project-image-container">

        <img
          src={image}
          alt={`${title} project preview`}
          className="project-image"
          loading="lazy"
          decoding="async"
        />

        <div className="project-category">
          {category}
        </div>

      </div>


      <div className="project-card-content">

        <div className="project-heading">

          <h3
            id={titleId}
            className="project-card-title"
          >
            {title}
          </h3>


          {subtitle && (
            <p className="project-subtitle">
              {subtitle}
            </p>
          )}

        </div>


        <p className="project-card-description">
          {description}
        </p>


        <div className="project-tech-section">

          <p className="project-section-label">
            Tech Stack
          </p>


          <ul className="project-technologies">

            {technologies.map((technology) => (
              <li
                className="project-tech"
                key={technology}
              >
                {technology}
              </li>
            ))}

          </ul>

        </div>


        <div className="project-links">

          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                project-link
                project-link-primary
              "
              aria-label={`View ${title} live demo in a new tab`}
            >
              <FaArrowUpRightFromSquare
                aria-hidden="true"
              />

              <span>
                Live Demo
              </span>
            </a>
          )}


          {links?.frontend && (
            <a
              href={links.frontend}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${title} frontend source code on GitHub in a new tab`}
            >
              <FaGithub
                aria-hidden="true"
              />

              <span>
                Frontend
              </span>
            </a>
          )}


          {links?.backend && (
            <a
              href={links.backend}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`View ${title} backend source code in a new tab`}
            >
              <FaCode
                aria-hidden="true"
              />

              <span>
                Backend
              </span>
            </a>
          )}


          {privateProject && (
            <div className="project-private">

              <FaLock
                aria-hidden="true"
              />

              <div>
                <strong>
                  Private Project
                </strong>

                <span>
                  Source code is not publicly available.
                </span>
              </div>

            </div>
          )}

        </div>

      </div>

    </article>
  )
}


export default ProjectCard