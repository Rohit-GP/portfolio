import './Certificates.css'

const CERTIFICATES = [
  {
    name: 'Oracle Certified Professional: Java SE Developer',
    issuer: 'Oracle University',
    date: 'Issued Dec 2025',
    description:
      'Demonstrated expertise in core Java, OOP, memory management, JPMS, Streams API, and concurrency.',
    link: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=DD1A5DC320120C113874BF7F7D12EEB98C861E798FD9DF87823704056000F766',
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google (Coursera)',
    date: 'Issued Dec 2025',
    description:
      'Demonstrated knowledge of generative AI, prompt engineering, responsible AI, and practical AI applications.',
    link: 'https://www.coursera.org/account/accomplishments/verify/5R71TZE52041',
  },
]

function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <span className="eyebrow">Certificates</span>
        <h2 className="section-heading">Certifications</h2>
        <p className="section-lede">
          Credentials that back up what's in the skills section above.
        </p>

        <div className="cert-grid">
          {CERTIFICATES.map((cert) => (
            <article className="cert-card" key={cert.name}>
              <div className="cert-card__badge" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.6 5.27 5.82.85-4.21 4.1 1 5.79L12 15.27 6.79 18l1-5.79-4.21-4.1 5.82-.85L12 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="cert-card__date">{cert.date}</p>
              <h3 className="cert-card__name">{cert.name}</h3>
              <p className="cert-card__issuer">{cert.issuer}</p>
              <p className="cert-card__description">{cert.description}</p>
              <a className="cert-card__link" href={cert.link} target="_blank">
                View credential →
              </a>
            </article>
          ))}

          <article className="cert-card cert-card--placeholder">
            <p className="cert-card__placeholder-label">Next up</p>
            <p>Space reserved for the next certification I earn.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Certificates
