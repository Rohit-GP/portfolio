import { useState } from 'react'
import './Skills.css'

const CATEGORIES = {
  Languages: ['Java', 'Python', 'SQL', 'C++', 'C', 'JavaScript', 'HTML5', 'CSS3'],
  'Frameworks & Libraries': [
    'Spring Boot',
    'Spring Security',
    'React',
    'JDBC',
    'NumPy',
    'Pandas',
    'Scikit-Learn',
  ],
  'Developer Tools': ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA'],
  'Core Competencies': [
    'OOP',
    'Data Structures & Algorithms',
    'RESTful APIs',
    'JWT Authentication',
    'ML Fundamentals',
  ],
}

const TABS = Object.keys(CATEGORIES)

function Skills() {
  // useState + event handling: clicking a tab filters the visible chips
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2 className="section-heading">What I build with</h2>
        <p className="section-lede">
          A snapshot of the languages, frameworks, and tools I reach for most
          — organized by category, not by guesswork.
        </p>

        <div className="skills__tabs" role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === tab}
              className={`skills__tab ${activeTab === tab ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="skills__card">
          <div className="skills__chips">
            {CATEGORIES[activeTab].map((skill) => (
              <span className="skills__chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
