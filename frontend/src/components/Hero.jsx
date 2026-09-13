import { useEffect, useRef, useState } from "react"
import "./Hero.css"
import profileImage from "../assets/eva3.jpeg"

function Hero() {
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  const heroRef = useRef(null)

  useEffect(() => {
    const heroElement = heroRef.current

    if (!heroElement) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting)
      },
      {
        threshold: 0.35,
      },
    )

    observer.observe(heroElement)

    return () => {
      observer.disconnect()
    }
  }, [])

  function handlePointerMove(event) {
    const heroElement = heroRef.current

    if (!heroElement) {
      return
    }

    const rectangle = heroElement.getBoundingClientRect()

    const x =
      ((event.clientX - rectangle.left) / rectangle.width) * 100

    const y =
      ((event.clientY - rectangle.top) / rectangle.height) * 100

    heroElement.style.setProperty(
      "--pointer-x",
      `${x}%`,
    )

    heroElement.style.setProperty(
      "--pointer-y",
      `${y}%`,
    )
  }

  function handlePointerLeave() {
    const heroElement = heroRef.current

    if (!heroElement) {
      return
    }

    heroElement.style.setProperty(
      "--pointer-x",
      "50%",
    )

    heroElement.style.setProperty(
      "--pointer-y",
      "50%",
    )
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className={`hero ${isHeroVisible ? "hero-visible" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">
            Hello, I'm Arbogasti
          </p>

          <div className="hero-title-mask">
            <h1 className="hero-title">
              Full-Stack & Mobile Developer
            </h1>
          </div>

          <p className="hero-description">
            I build modern web and mobile experiences that are clean,
            functional, and made to solve real problems.
          </p>

          <p className="hero-tech">
            React • React Native • JavaScript • Python • Flask
          </p>

          <div className="hero-actions">
            <a href="#projects">
              View My Work
            </a>

            <a href="#contact">
              Get In Touch
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src={profileImage}
            alt="Portrait of Evaline Arbogasti"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero