import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Let's work together</h2>
          <p className="section-lede" style={{ marginBottom: 0 }}>
            I'm open to internships and collaborative projects. The fastest
            way to reach me is email.
          </p>
        </div>

        <div className="contact__links">
          <a href="mailto:youremail@example.com" className="contact__link">
            youremail@example.com
          </a>
          <a href="https://github.com/yourusername" className="contact__link">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className="contact__link">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="container">
        <p className="contact__footer">
          Built with React · Chennai, India
        </p>
      </div>
    </section>
  )
}

export default Contact
