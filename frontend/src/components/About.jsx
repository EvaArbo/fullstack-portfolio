import { useEffect, useRef } from "react"
import "./About.css"
import Reveal from "./Reveal.jsx"


function LiveAboutCard({
  title,
  description,
  index,
}) {
  const cardRef = useRef(null)

  const pointerRef = useRef({
    x: 0,
    y: 0,
  })

  const titleId =
    `about-card-${index}-title`


  useEffect(() => {
    const card = cardRef.current

    if (!card) {
      return
    }


    const shouldReduceMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce), (hover: none), (pointer: coarse)",
      ).matches


    if (shouldReduceMotion) {
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
        index * 1.6


      const floatY =
        Math.sin(
          seconds * 0.8 +
          phase,
        ) * 4


      const floatX =
        Math.cos(
          seconds * 0.65 +
          phase,
        ) * 2


      const ambientRotateX =
        Math.sin(
          seconds * 0.55 +
          phase,
        ) * 1.2


      const ambientRotateY =
        Math.cos(
          seconds * 0.6 +
          phase,
        ) * 1.5


      const pointerRotateX =
        pointerRef.current.y *
        -1.5


      const pointerRotateY =
        pointerRef.current.x *
        2


      const rotateX =
        ambientRotateX +
        pointerRotateX


      const rotateY =
        ambientRotateY +
        pointerRotateY


      card.style.setProperty(
        "--about-float-x",
        `${floatX}px`,
      )


      card.style.setProperty(
        "--about-float-y",
        `${floatY}px`,
      )


      card.style.setProperty(
        "--about-rotate-x",
        `${rotateX}deg`,
      )


      card.style.setProperty(
        "--about-rotate-y",
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
      className="about-card"
      aria-labelledby={titleId}
    >
      <h3 id={titleId}>
        {title}
      </h3>

      <p>
        {description}
      </p>
    </article>
  )
}


function About() {
  return (
    <section
      id="about"
      className="about"
      aria-labelledby="about-title"
    >
      <div className="about-content">

        <Reveal
          direction="zoom"
          distance={40}
          duration={1000}
        >
          <div className="about-header">

            <p className="about-label">
              Get to know me
            </p>

            <h2
              id="about-title"
              className="about-title"
            >
              About Me
            </h2>

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
                I’m a full-stack and mobile developer who enjoys
                turning ideas into practical, user-friendly
                applications. I work with React and JavaScript on
                the web, React Native for mobile applications, and
                Python and Flask on the backend.
              </p>

              <p className="about-description">
                I enjoy understanding how each part of an
                application works, from the interface users interact
                with to the APIs and databases working behind the
                scenes. I’m continuously improving my skills by
                building real projects and learning through
                hands-on development.
              </p>

            </div>
          </Reveal>


          <div
            className="about-highlights"
            aria-label="Development areas"
          >

            <Reveal
              direction="right"
              delay={0}
            >
              <LiveAboutCard
                title="Web Development"
                description="Building responsive interfaces with React and JavaScript."
                index={0}
              />
            </Reveal>


            <Reveal
              direction="right"
              delay={120}
            >
              <LiveAboutCard
                title="Mobile Development"
                description="Creating mobile applications with React Native."
                index={1}
              />
            </Reveal>


            <Reveal
              direction="right"
              delay={240}
            >
              <LiveAboutCard
                title="Backend Development"
                description="Building APIs and server-side applications with Python and Flask."
                index={2}
              />
            </Reveal>


            <Reveal
              direction="right"
              delay={360}
            >
              <LiveAboutCard
                title="Always Learning"
                description="Strengthening my skills by building and understanding real projects."
                index={3}
              />
            </Reveal>

          </div>

        </div>

      </div>
    </section>
  )
}


export default About