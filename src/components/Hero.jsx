import { useEffect, useState } from 'react'
import './Hero.css'
import profile from '../assets/pp(2).jpeg'

const ROLES = [
  'Full-Stack Developer',
  'Java & Spring Boot Developer',
  'Competitive Programmer',
]

const STACK_BADGES = ['Java', 'Spring Boot', 'React', 'MySQL']

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)

  // useEffect + useState: cycle through roles on an interval, like a status
  // line reporting what this developer currently is
  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">Portfolio</span>
          <h1 className="hero__name">Rohit GP</h1>
          <p className="hero__role" aria-live="polite">
            {ROLES[roleIndex]}
          </p>
          <p className="hero__intro">
            B.Tech Information Technology student who enjoys building clean,
            secure full-stack applications and solving data structure
            problems for fun. Comfortable across the stack, from JWT-secured
            Spring Boot APIs to responsive React interfaces.
          </p>

          <div className="hero__actions">
            <a
              className="hero__btn hero__btn--primary"
              href="/resume1.pdf"
              download
            >
              Download Resume
            </a>
            <a className="hero__btn hero__btn--ghost" href="#projects">
              View Projects
            </a>
          </div>

          <div className="hero__stack">
            {STACK_BADGES.map((badge) => (
              <span key={badge} className="hero__stack-badge">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__visual">
          <svg
            className="hero__graph"
            viewBox="0 0 220 220"
            aria-hidden="true"
          >
            <g className="hero__graph-edges">
              <line x1="110" y1="30" x2="60" y2="90" />
              <line x1="110" y1="30" x2="160" y2="90" />
              <line x1="60" y1="90" x2="30" y2="150" />
              <line x1="60" y1="90" x2="90" y2="150" />
              <line x1="160" y1="90" x2="140" y2="150" />
              <line x1="160" y1="90" x2="190" y2="150" />
            </g>
            <g className="hero__graph-nodes">
              <circle cx="110" cy="30" r="7" />
              <circle cx="60" cy="90" r="6" />
              <circle cx="160" cy="90" r="6" />
              <circle cx="30" cy="150" r="5" />
              <circle cx="90" cy="150" r="5" />
              <circle cx="140" cy="150" r="5" />
              <circle cx="190" cy="150" r="5" />
            </g>
          </svg>

          <div className="hero__frame">
            <img
              src={profile}
              alt="Portrait placeholder"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
