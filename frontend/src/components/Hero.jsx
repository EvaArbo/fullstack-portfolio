import "./Hero.css"
import profileImage from "../assets/eva3.jpeg"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm Arbogasti</p>

          <h1 className="hero-title">
            Full-Stack & Mobile Developer
          </h1>

          <p className="hero-description">
            I build modern web and mobile experiences that are clean,
            functional, and made to solve real problems.
          </p>

          <p className="hero-tech">
            React • React Native • JavaScript • Python • Flask
          </p>

          <div className="hero-actions">
            <a href="#projects">View My Work</a>
            <a href="#contact">Get In Touch</a>
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