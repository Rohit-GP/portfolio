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
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com&su=Portfolio%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            Email
          </a>
          <a href="https://github.com/Rohit-GP" className="contact__link" target="_blank">
            GitHub
          </a>
          <a href="https://linkedin.com/in/Rohit-GP" className="contact__link" target="_blank">
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
