import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Timeline.css'

const education = [
  {
    degree: 'Bachelor of Computer Science',
    school: 'Dalhousie University',
    location: 'Halifax, NS',
    period: '2023 – 2027',
    description: '5 of 8 semesters complete. Focused on software development, algorithms, data structures, and system design.',
    highlights: ['Dean\'s List Eligible', 'Data Structures', 'Algorithms', 'OOP', 'Database Systems'],
    icon: '🎓',
  },
]

export default function Education() {
  const { ref, isInView } = useScrollReveal()

  return (
    <section id="education" className="timeline-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-header">
            <p className="section-tag">// where I'm learning</p>
            <h2 className="section-title">Education</h2>
            <p className="section-subtitle">My academic background and achievements.</p>
          </div>

          <div className="timeline">
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isInView={isInView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index, isInView }) {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 + 0.2 }}
    >
      <div className="timeline-dot">
        <span>{item.icon}</span>
      </div>
      <div className="timeline-content">
        <div className="timeline-header">
          <div>
            <h3 className="timeline-title">{item.degree}</h3>
            <p className="timeline-org">{item.school} — {item.location}</p>
          </div>
          <span className="timeline-period">{item.period}</span>
        </div>
        <p className="timeline-description">{item.description}</p>
        <div className="timeline-highlights">
          {item.highlights.map(h => (
            <span key={h} className="highlight-chip">{h}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
