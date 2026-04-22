import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useRoleData } from '../hooks/useRoleData'
import './About.css'

function renderParagraph(segments, i) {
  return (
    <p key={i}>
      {segments.map((seg, j) =>
        seg.highlight
          ? <span key={j} className="highlight">{seg.text}</span>
          : seg.text
      )}
    </p>
  )
}

export default function About() {
  const { ref, isInView } = useScrollReveal()
  const { about } = useRoleData()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="about-grid"
        >
          <motion.div variants={item} className="about-text">
            <p className="section-tag">// about me</p>
            <h2 className="section-title">Who I Am</h2>
            {about.paragraphs.map((segments, i) => renderParagraph(segments, i))}
            <div className="about-tags">
              {about.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="about-right">
            <div className="about-card">
              <div className="about-avatar">
                <div className="avatar-inner">
                  <span>AM</span>
                </div>
                <div className="avatar-ring" />
                <div className="avatar-ring ring-2" />
              </div>
            </div>

            <div className="about-stats">
              {about.stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="stat-card"
                  variants={item}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <span className="stat-value">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
