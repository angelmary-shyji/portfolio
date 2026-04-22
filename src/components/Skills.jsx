import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRoleData } from '../hooks/useRoleData'
import './Skills.css'

export default function Skills() {
  const { ref, isInView } = useScrollReveal()
  const { skills } = useRoleData()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const chipVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={container}
        >
          <motion.div variants={cardVariant} className="section-header">
            <p className="section-tag">// what I know</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-subtitle">The tools and languages I use to bring ideas to life.</p>
          </motion.div>

          <div className="skills-grid">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                className="skill-card"
                variants={cardVariant}
                whileHover={{ y: -8, borderColor: 'var(--border-hover)' }}
                transition={{ duration: 0.2 }}
              >
                <div className="skill-card-header">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <motion.div className="skill-chips" variants={container}>
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="skill-chip"
                      variants={chipVariant}
                      whileHover={{ scale: 1.08, background: 'rgba(var(--accent-purple-rgb), 0.2)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
