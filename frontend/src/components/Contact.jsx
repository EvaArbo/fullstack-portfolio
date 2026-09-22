import "./Contact.css"
import { useState } from "react"
import Reveal from "./Reveal.jsx"


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

    setFormData({
      ...formData,
      [name]: value,
    })

    if (status) {
      setStatus("")
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    setIsSubmitting(true)
    setStatus("")

    const minimumSendingTime = new Promise((resolve) => {
      setTimeout(resolve, 700)
    })

    try {
      const [response] = await Promise.all([
        fetch(
          `${API_URL}/api/contact`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify(formData),
          },
        ),

        minimumSendingTime,
      ])

      const data = await response.json()

      if (!response.ok) {
        setStatus(
          data.message ||
          "Something went wrong. Please try again.",
        )

        return
      }

      setStatus(data.message)

      setFormData({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      await minimumSendingTime

      console.error(
        "Contact form error:",
        error,
      )

      setStatus(
        "Could not connect to the server. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="contact"
    >
      <div className="contact-content">

        <Reveal
          direction="left"
          distance={110}
          duration={1100}
        >
          <div className="contact-info">

            <p className="contact-label">
              Let's connect
            </p>

            <h2 className="contact-title">
              Contact Me
            </h2>

            <p className="contact-description">
              Have a project, opportunity, or idea you'd like to discuss?
              Send me a message and I'll get back to you.
            </p>

            <div className="contact-note">

              <p className="contact-note-title">
                Private by design
              </p>

              <p>
                This form sends messages through my backend,
                so my receiving contact information does not
                need to be displayed publicly.
              </p>

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
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
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
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
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
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
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