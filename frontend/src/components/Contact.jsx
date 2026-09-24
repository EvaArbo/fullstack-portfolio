import "./Contact.css"
import { useState } from "react"
import Reveal from "./Reveal.jsx"

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
  FaLocationDot,
} from "react-icons/fa6"


const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000"


function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)


  function handleChange(event) {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))

    if (status && !isSubmitting) {
      setStatus("")
    }
  }


  async function handleSubmit(event) {
    event.preventDefault()

    if (isSubmitting) {
      return
    }

    setIsSubmitting(true)
    setStatus("")

    let slowMessageTimer

    try {
      slowMessageTimer = window.setTimeout(() => {
        setStatus(
          "Still sending your message. This may take a few seconds.",
        )
      }, 5000)

      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        },
      )

      window.clearTimeout(slowMessageTimer)

      let data = {}

      try {
        data = await response.json()
      } catch {
        data = {}
      }


      if (!response.ok) {
        setStatus(
          data.message ||
          "Something went wrong. Please try again.",
        )

        return
      }


      setStatus(
        data.message ||
        "Your message was sent successfully.",
      )


      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      window.clearTimeout(slowMessageTimer)

      console.error(
        "Contact form error:",
        error,
      )

      setStatus(
        "Could not connect to the server. Please try again.",
      )
    } finally {
      window.clearTimeout(slowMessageTimer)

      setIsSubmitting(false)
    }
  }


  return (
    <section
      id="contact"
      className="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-content">

        <Reveal
          direction="left"
          distance={110}
          duration={1100}
        >
          <div className="contact-info">

            <p className="contact-label">
              Let&apos;s connect
            </p>


            <h2
              id="contact-title"
              className="contact-title"
            >
              Contact Me
            </h2>


            <p className="contact-description">
              Have a project, opportunity, or idea you&apos;d like
              to discuss? Send me a message and I&apos;ll get back
              to you.
            </p>


            <div
              className="contact-links"
              aria-label="Contact and professional links"
            >

              <a
                href="https://github.com/EvaArbo"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit my GitHub profile"
              >
                <span className="contact-link-icon">
                  <FaGithub aria-hidden="true" />
                </span>

                <span className="contact-link-text">
                  <strong>
                    GitHub
                  </strong>

                  <small>
                    View my projects
                  </small>
                </span>
              </a>


              <a
                href="https://www.linkedin.com/in/evelyne-arbogasti-7aa7ba299/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                aria-label="Visit my LinkedIn profile"
              >
                <span className="contact-link-icon">
                  <FaLinkedin aria-hidden="true" />
                </span>

                <span className="contact-link-text">
                  <strong>
                    LinkedIn
                  </strong>

                  <small>
                    Connect professionally
                  </small>
                </span>
              </a>


              <a
                href="/Evaline_Arbogasti_Resume.pdf"
                download="Evaline_Arbogasti_Resume.pdf"
                className="contact-link"
                aria-label="Download my resume"
              >
                <span className="contact-link-icon">
                  <FaFilePdf aria-hidden="true" />
                </span>

                <span className="contact-link-text">
                  <strong>
                    Resume
                  </strong>

                  <small>
                    Download my resume
                  </small>
                </span>
              </a>


              <a
                href="#contact-form"
                className="contact-link"
                aria-label="Go to the contact form"
              >
                <span className="contact-link-icon">
                  <FaEnvelope aria-hidden="true" />
                </span>

                <span className="contact-link-text">
                  <strong>
                    Message
                  </strong>

                  <small>
                    Send me a message below
                  </small>
                </span>
              </a>


              <a
                href="https://www.google.com/maps/search/?api=1&query=Tacoma%2C+Washington"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link contact-location"
                aria-label="View Tacoma, Washington on Google Maps"
              >
                <span className="contact-link-icon">
                  <FaLocationDot aria-hidden="true" />
                </span>

                <span className="contact-link-text">
                  <strong>
                    Location
                  </strong>

                  <small>
                    Tacoma, Washington
                  </small>
                </span>
              </a>

            </div>

          </div>
        </Reveal>


        <Reveal
          direction="right"
          distance={110}
          duration={1100}
          delay={180}
        >
          <div className="contact-form-container">

            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
              aria-busy={isSubmitting}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  maxLength={120}
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  maxLength={255}
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  maxLength={5000}
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                ></textarea>

              </div>


              <button
                className="contact-button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>


            {status && (
              <p
                className="contact-status"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  )
}


export default Contact