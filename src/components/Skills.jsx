import { useState } from 'react'
import './Skills.css'
import { useReveal } from '../hooks/useReveal.js'

const devicon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}-original.svg`

// Skills without an official brand mark use small custom line icons
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

  brain: (
    <>
      <path d="M9 4a3 3 0 0 0-5 2.2A3.5 3.5 0 0 0 5 13a3 3 0 0 0 4 4" />
      <path d="M15 4a3 3 0 0 1 5 2.2A3.5 3.5 0 0 1 19 13a3 3 0 0 1-4 4" />
      <path d="M9 4v16M15 4v16" />
      <path d="M9 8c-2 0-3-1-3-2M9 13c-2 0-3-1-3-3M15 8c2 0 3-1 3-2M15 13c2 0 3-1 3-3" />
    </>
  ),

  redis: (
    <>
      <path d="M4 8l8-3 8 3-8 3-8-3Z" />
      <path d="M4 8v4l8 3 8-3V8" />
      <path d="M4 12v4l8 3 8-3v-4" />
    </>
  ),

  docker: (
    <>
      <path d="M3 15h18" />
      <path d="M5 15V9h3v6M9 15V7h3v8M13 15V9h3v6M17 15v-3h3" />
      <path d="M3 15c.5 3 3 5 7 5h4c4 0 7-2 8-5" />
    </>
  ),
}

const SKILLS = [
  // Languages
  {
    name: 'Java',
    category: 'Languages',
    level: 'Core',
    icon: devicon('java/java'),
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 'Core',
    icon: devicon('python/python'),
  },
  {
    name: 'SQL',
    category: 'Languages',
    level: 'Core',
    custom: 'database',
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    level: 'Comfortable',
    icon: devicon('javascript/javascript'),
  },
  {
    name: 'C++',
    category: 'Languages',
    level: 'Comfortable',
    icon: devicon('cplusplus/cplusplus'),
  },
  {
    name: 'C',
    category: 'Languages',
    level: 'Comfortable',
    icon: devicon('c/c'),
  },
  {
    name: 'HTML5',
    category: 'Languages',
    level: 'Core',
    icon: devicon('html5/html5'),
  },
  {
    name: 'CSS3',
    category: 'Languages',
    level: 'Core',
    icon: devicon('css3/css3'),
  },

  // Frameworks & Libraries
  {
    name: 'Spring Boot',
    category: 'Frameworks',
    level: 'Core',
    icon: devicon('spring/spring'),
  },
  {
    name: 'Spring Security',
    category: 'Frameworks',
    level: 'Comfortable',
    icon: devicon('spring/spring'),
  },
  {
    name: 'FastAPI',
    category: 'Frameworks',
    level: 'Comfortable',
    custom: 'api',
  },
  {
    name: 'React',
    category: 'Frameworks',
    level: 'Core',
    icon: devicon('react/react'),
  },
  {
    name: 'LangGraph',
    category: 'Frameworks',
    level: 'Learning',
    custom: 'brain',
  },
  {
    name: 'JDBC',
    category: 'Frameworks',
    level: 'Comfortable',
    custom: 'plug',
  },

  // Databases
  {
    name: 'PostgreSQL',
    category: 'Databases',
    level: 'Comfortable',
    icon: devicon('postgresql/postgresql'),
  },
  {
    name: 'MySQL',
    category: 'Databases',
    level: 'Comfortable',
    icon: devicon('mysql/mysql'),
  },

  // Infrastructure
  {
    name: 'Redis',
    category: 'Infrastructure',
    level: 'Learning',
    custom: 'redis',
  },
  {
    name: 'Docker',
    category: 'Infrastructure',
    level: 'Learning',
    custom: 'docker',
  },

  // Core
  {
    name: 'OOP',
    category: 'Core',
    level: 'Core',
    custom: 'layers',
  },
  {
    name: 'DSA',
    category: 'Core',
    level: 'Core',
    custom: 'tree',
  },
  {
    name: 'RESTful APIs',
    category: 'Core',
    level: 'Comfortable',
    custom: 'api',
  },
  {
    name: 'JWT Authentication',
    category: 'Core',
    level: 'Comfortable',
    custom: 'lock',
  },

  // Tools
  {
    name: 'Git',
    category: 'Tools',
    level: 'Core',
    icon: devicon('git/git'),
  },
  {
    name: 'GitHub',
    category: 'Tools',
    level: 'Core',
    icon: devicon('github/github'),
    invert: true,
  },
  {
    name: 'VS Code',
    category: 'Tools',
    level: 'Core',
    icon: devicon('vscode/vscode'),
  },

  // Learning
  {
    name: 'NumPy',
    category: 'Frameworks',
    level: 'Learning',
    icon: devicon('numpy/numpy'),
  },
  {
    name: 'Pandas',
    category: 'Frameworks',
    level: 'Learning',
    icon: devicon('pandas/pandas'),
  },
  {
    name: 'Scikit-Learn',
    category: 'Frameworks',
    level: 'Learning',
    icon: devicon('scikitlearn/scikitlearn'),
  },
]

const FILTERS = [
  'Featured',
  'Languages',
  'Frameworks',
  'Databases',
  'Infrastructure',
  'Tools',
  'Core',
]

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
      className={`skill-card__img ${
        skill.invert ? 'skill-card__img--invert' : ''
      }`}
      loading="lazy"
    />
  )
}

function Skills() {
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
              className={`skills__tab ${
                activeFilter === filter ? 'skills__tab--active' : ''
              }`}
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
