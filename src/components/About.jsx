import { useEffect, useRef, useState } from 'react'
import './About.css'

const STATS = [
  { label: 'CGPA', value: '9.5 / 10.0' },
  { label: 'DSA Problems Solved', value: '250+' },
  { label: 'Certification', value: 'Oracle Certified - Java SE' },
]

function About() {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  // useEffect + IntersectionObserver: reveal the section once it scrolls
  // into view, instead of animating everything on page load
  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef}>
      <div className="container">
        <span className="eyebrow">About</span>
        <h2 className="section-heading">A bit about how I work</h2>

        <div className={`about__grid reveal ${visible ? 'is-visible' : ''}`}>
          <p className="about__paragraph">
            I'm an Information Technology undergraduate at Saveetha
            Engineering College, Chennai, with a strong foundation in Java,
            object-oriented design, and database systems. I like taking
            projects from a rough idea to a working, secured application -
            most recently a full-stack blogging platform built with Spring
            Boot, Spring Security, and React. Outside of coursework, I spend
            time on LeetCode sharpening my grip on trees, graphs, and dynamic
            programming, and I help organize campus events that need the
            same thing good software needs: clear structure and reliable
            execution.
          </p>

          <div className="about__stats">
            {STATS.map((stat) => (
              <div className="about__stat-card" key={stat.label}>
                <p className="about__stat-value">{stat.value}</p>
                <p className="about__stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
