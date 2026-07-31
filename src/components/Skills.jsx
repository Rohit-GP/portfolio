import { useState } from 'react'
import './Skills.css'

const SKILLS = [
  { name: 'Java', category: 'Languages', level: 'Core' },
  { name: 'HTML5', category: 'Languages', level: 'Core' },
  { name: 'CSS3', category: 'Languages', level: 'Core' },
  { name: 'SQL', category: 'Languages', level: 'Core' },
  { name: 'JavaScript', category: 'Languages', level: 'Comfortable' },
  { name: 'Python', category: 'Languages', level: 'Comfortable' },
  { name: 'C++', category: 'Languages', level: 'Comfortable' },
  { name: 'C', category: 'Languages', level: 'Comfortable' },

  { name: 'Spring Boot', category: 'Frameworks', level: 'Core' },
  { name: 'React', category: 'Frameworks', level: 'Core' },
  { name: 'Spring Security', category: 'Frameworks', level: 'Comfortable' },
  { name: 'JDBC', category: 'Frameworks', level: 'Comfortable' },
  { name: 'NumPy', category: 'Frameworks', level: 'Learning' },
  { name: 'Pandas', category: 'Frameworks', level: 'Learning' },
  { name: 'Scikit-Learn', category: 'Frameworks', level: 'Learning' },

  { name: 'Git', category: 'Tools', level: 'Core' },
  { name: 'GitHub', category: 'Tools', level: 'Core' },
  { name: 'VS Code', category: 'Tools', level: 'Core' },

  { name: 'OOP', category: 'Core', level: 'Core' },
  { name: 'Data Structures & Algorithms', category: 'Core', level: 'Core' },
  { name: 'RESTful APIs', category: 'Core', level: 'Core' },
  { name: 'JWT Authentication', category: 'Core', level: 'Comfortable' },
  { name: 'ML Fundamentals', category: 'Core', level: 'Learning' },
]

const FILTERS = ['Featured', 'Languages', 'Frameworks', 'Tools', 'Core']

function Skills() {
  // useState + event handling: clicking a pill filters which skill cards show
  const [activeFilter, setActiveFilter] = useState('Featured')

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

        <div className="skills__grid">
          {visibleSkills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <span className={`skill-card__level skill-card__level--${skill.level.toLowerCase()}`}>
                {skill.level}
              </span>
              <p className="skill-card__name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
