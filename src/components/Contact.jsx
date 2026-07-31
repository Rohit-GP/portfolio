import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__content">
          <span className="eyebrow">Contact</span>

          <h2 className="section-heading">Let's work together</h2>

          <p className="section-lede">
            I'm open to internships and collaborative projects. The fastest
            way to reach me is email.
          </p>
        </div>

        <div className="contact__links">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=youremail@gmail.com&su=Portfolio%20Inquiry"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>

          <a
            href="https://github.com/Rohit-GP"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/Rohit-GP"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/Rohit_GP/"
            className="contact__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            LeetCode
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

export default Contact;