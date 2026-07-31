import { useState } from 'react'
import './Skills.css'
import { useReveal } from '../hooks/useReveal.js'

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}-original.svg`

// Skills without an official brand mark fall back to a small custom line icon
const CUSTOM_ICON_PATHS = {
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  plug: (
    <>
      <path d="M9 2v4M15 2v4M7 8h10l-1 5a4 4 0 0 1-8 0L7 8Z" />
      <path d="M12 17v5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 2 9l10 6 10-6-10-6Z" />
      <path d="M2 15l10 6 10-6" />
    </>
  ),
  tree: (
    <>
      <line x1="12" y1="6" x2="7" y2="12" />
      <line x1="12" y1="6" x2="17" y2="12" />
      <line x1="7" y1="12" x2="4" y2="18" />
      <line x1="7" y1="12" x2="10" y2="18" />
      <line x1="17" y1="12" x2="14" y2="18" />
      <line x1="17" y1="12" x2="20" y2="18" />
      <circle cx="12" cy="6" r="2" />
      <circle cx="7" cy="12" r="1.8" />
      <circle cx="17" cy="12" r="1.8" />
    </>
  ),
  api: (
    <>
      <path d="M7 7 3 12l4 5" />
      <path d="M17 7l4 5-4 5" />
      <path d="M14 4l-4 16" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </>
  ),
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4" />
    </>
  ),
}


const SKILLS = [
  { name: 'Java', category: 'Languages', level: 'Core', icon: devicon('java/java') },
  { name: 'Spring Boot', category: 'Frameworks', level: 'Core', icon: devicon('spring/spring') },
  { name: 'React', category: 'Frameworks', level: 'Core', icon: devicon('react/react') },
  { name: 'SQL', category: 'Languages', level: 'Core', custom: 'database' },

  { name: 'HTML5', category: 'Languages', level: 'Core', icon: devicon('html5/html5') },
  { name: 'CSS3', category: 'Languages', level: 'Core', icon: devicon('css3/css3') },
  { name: 'Git', category: 'Tools', level: 'Core', icon: devicon('git/git') },
  { name: 'OOP', category: 'Core', level: 'Core', custom: 'layers' },

  { name: 'DSA', category: 'Core', level: 'Core', custom: 'tree' },
  { name: 'GitHub', category: 'Tools', level: 'Core', icon: devicon('github/github'), invert: true },
  { name: 'VS Code', category: 'Tools', level: 'Core', icon: devicon('vscode/vscode') },

  { name: 'JavaScript', category: 'Languages', level: 'Comfortable', icon: devicon('javascript/javascript') },
  { name: 'Python', category: 'Languages', level: 'Comfortable', icon: devicon('python/python') },
  { name: 'C++', category: 'Languages', level: 'Comfortable',icon: devicon('cplusplus/cplusplus') },
  { name: 'C', category: 'Languages', level: 'Comfortable', icon: devicon('c/c') },

  { name: 'Spring Security', category: 'Frameworks', level: 'Comfortable', icon: devicon('spring/spring') },
  { name: 'JDBC', category: 'Frameworks', level: 'Comfortable', custom: 'plug' },
  { name: 'NumPy', category: 'Frameworks', level: 'Learning', icon: devicon('numpy/numpy') },
  { name: 'Pandas', category: 'Frameworks', level: 'Learning', icon: devicon('pandas/pandas') },
  { name: 'Scikit-Learn', category: 'Frameworks', level: 'Learning', icon: devicon('scikitlearn/scikitlearn') },

  // { name: 'IntelliJ IDEA', category: 'Tools', level: 'Core', icon: devicon('intellij/intellij') },
  { name: 'RESTful APIs', category: 'Core', level: 'Comfortable', custom: 'api' },
  { name: 'JWT Authentication', category: 'Core', level: 'Comfortable', custom: 'lock' },
  // { name: 'ML Fundamentals', category: 'Core', level: 'Learning', custom: 'chip' },
]

const FILTERS = ['Featured', 'Languages', 'Frameworks', 'Tools', 'Core']

function SkillIcon({ skill }) {
  if (skill.custom) {
    return (
      <svg
        className="skill-card__svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {CUSTOM_ICON_PATHS[skill.custom]}
      </svg>
    )
  }
  return (
    <img
      src={skill.icon}
      alt=""
      className={`skill-card__img ${skill.invert ? 'skill-card__img--invert' : ''}`}
      loading="lazy"
    />
  )
}

function Skills() {
  // useState + event handling: clicking a pill filters which skill cards show
  const [activeFilter, setActiveFilter] = useState('Featured')
  const [gridRef, visible] = useReveal(0.1)

  const visibleSkills =
    activeFilter === 'Featured'
      ? SKILLS.filter((skill) => skill.level === 'Core')
      : SKILLS.filter((skill) => skill.category === activeFilter)

  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2 className="section-heading">What I build with</h2>
        <p className="section-lede">
          A snapshot of the languages, frameworks, and tools I reach for most
          - organized by category, not by guesswork.
        </p>

        <div className="skills__tabs" role="tablist">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              role="tab"
              aria-selected={activeFilter === filter}
              className={`skills__tab ${activeFilter === filter ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div
          ref={gridRef}
          className={`skills__grid reveal ${visible ? 'is-visible' : ''}`}
        >
          {visibleSkills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              <span
                className={`skill-card__level skill-card__level--${skill.level.toLowerCase()}`}
              >
                {skill.level}
              </span>

              <div className="skill-card__content">
                <div className="skill-card__icon">
                  <SkillIcon skill={skill} />
                </div>

                <p className="skill-card__name">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
