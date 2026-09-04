import "./Contact.css"
import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  function handleChange(event) {
    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(formData)

    setStatus("Message ready to send!")

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="contact-header">
          <p className="contact-label">Let's connect</p>
          <h2 className="contact-title">Contact Me</h2>

          <p className="contact-description">
            Have a project, opportunity, or idea you'd like to discuss?
            Send me a message and I'll get back to you.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

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
            <label htmlFor="email">Email</label>

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
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button className="contact-button" type="submit">
            Send Message
          </button>
        </form>

        {status && <p className="contact-status">{status}</p>}
      </div>
    </section>
  )
}

export default Contact