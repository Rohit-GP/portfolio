import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    name: 'BlogApp',
    timeline: 'Feb 2026 – Mar 2026',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'REST APIs'],
    summary:
      'A responsive full-stack blogging platform for creating, editing, and publishing posts with real-time UI updates.',
    highlights: [
      'Secured backend REST endpoints using Spring Security and stateless JWT authentication, controlling role-based access to protected resources.',
      'Designed a normalized MySQL relational database schema and integrated Spring Data JPA/JDBC for optimized querying and data persistence.',
      'Built the frontend in React, with a clean UI for authoring and managing posts.',
    ],
  },
]

function ProjectCard({ project }) {
  // useState + event handling: toggle to reveal the detailed highlights
  const [expanded, setExpanded] = useState(false)

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3>{project.name}</h3>
        <span className="project-card__timeline">{project.timeline}</span>
      </div>

      <p className="project-card__summary">{project.summary}</p>

      <div className="project-card__stack">
        {project.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      {expanded && (
        <ul className="project-card__highlights">
          {project.highlights.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      )}

      <button
        className="project-card__toggle"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? 'Hide details' : 'View details'}
        <span className={`project-card__chevron ${expanded ? 'is-open' : ''}`}>
          ↓
        </span>
      </button>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="eyebrow">Projects</span>
        <h2 className="section-heading">Selected work</h2>
        <p className="section-lede">
          Projects where I took an idea through design, implementation, and
          a working deployment — not just a tutorial follow-along.
        </p>

        <div className="project-grid">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}

          <div className="project-card project-card--placeholder">
            <p className="project-card__placeholder-label">Next up</p>
            <p>More projects are on the way as I keep building.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
