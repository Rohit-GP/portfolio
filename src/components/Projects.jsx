import { useState } from 'react'
import './Projects.css'

const PROJECTS = [
  {
    name: 'BlogApp',
    timeline: 'Feb 2026 – Mar 2026',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React', 'MySQL', 'REST APIs'],
    github: 'https://github.com/Rohit-GP/blog-app',
    demo: '',
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

      <div className="project-card__links">
        <a href={project.github} className="project-card__link" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          GitHub
        </a>
        <a href={project.demo} className="project-card__link" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M6 3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-3M9 3h4v4M13 3 6.5 9.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Live Demo
        </a>
      </div>

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
          a working deployment - not just a tutorial follow-along.
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
