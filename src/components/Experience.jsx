import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRoleData } from '../hooks/useRoleData'
import './Timeline.css'

export default function Experience() {
  const { ref, isInView } = useScrollReveal()
  const { experience } = useRoleData()

  return (
    <section id="experience" className="timeline-section alt-bg">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <p className="section-tag">// where I've worked</p>
            <h2 className="section-title">Experience</h2>
            <p className="section-subtitle">Professional roles and the skills I've built.</p>
          </div>

          <div className="timeline">
            {experience.map((item, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                initial={{ opacity: 0, x: -40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
              >
                <div className="timeline-dot">
                  <span>{item.icon}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-title">{item.role}</h3>
                      <p className="timeline-org">{item.company} — {item.location}</p>
                    </div>
                    <span className="timeline-period">{item.period}</span>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="timeline-bullets">
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                  <div className="timeline-highlights">
                    {item.highlights.map(h => (
                      <span key={h} className="highlight-chip">{h}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
