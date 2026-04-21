import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './About.css'

const stats = [
  { value: '3rd', label: 'Year CS Student' },
  { value: '5+', label: 'Projects Built' },
  { value: '∞', label: 'Always Learning' },
]

export default function About() {
  const { ref, isInView } = useScrollReveal()

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
            <p>
              I'm a 3rd-year Computer Science student at <span className="highlight">Dalhousie University</span> (Halifax, NS),
              I'm passionate about writing
              clean, efficient code and building software that makes a real difference.
            </p>
            <p>
              My journey started with building games in Java and has evolved into full-stack web development,
              data structures, and algorithm design. I love tackling challenging problems and turning
              ideas into polished products.
            </p>

            <div className="about-tags">
              {['Problem Solver', 'Fast Learner', 'Team Player', 'Detail-Oriented'].map(tag => (
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
              {stats.map((s, i) => (
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
