import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import './Projects.css'

const projects = [
  {
    title: 'Pac-Man Game',
    description: 'A faithful Java recreation of the classic Pac-Man arcade game with ghost AI pathfinding, score tracking, and multiple levels.',
    tags: ['Java', 'OOP', 'Game Dev', 'Algorithms'],
    color: '#f59e0b',
    icon: '👾',
    github: 'https://github.com/',
  },
  {
    title: 'Flappy Bird Clone',
    description: 'A smooth Java implementation of Flappy Bird with physics simulation, collision detection, and progressive difficulty scaling.',
    tags: ['Java', 'Physics', 'Game Dev', 'Swing'],
    color: '#10b981',
    icon: '🐦',
    github: 'https://github.com/',
  },
  {
    title: 'To-Do List App',
    description: 'A full-featured task management web app with drag-and-drop reordering, local storage persistence, and priority filtering.',
    tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    color: '#8b5cf6',
    icon: '✅',
    github: 'https://github.com/',
  },
  {
    title: 'Digital Clock',
    description: 'An interactive digital clock with multiple time zone support, alarm functionality, and smooth animated transitions.',
    tags: ['JavaScript', 'CSS', 'HTML', 'Animations'],
    color: '#06b6d4',
    icon: '🕐',
    github: 'https://github.com/',
  },
  {
    title: 'Huffman Coding',
    description: 'An implementation of the Huffman coding algorithm for lossless data compression with file encoding and decoding support.',
    tags: ['Python', 'Algorithms', 'Data Structures'],
    color: '#ec4899',
    icon: '🗜️',
    github: 'https://github.com/',
  },
  {
    title: 'Calculator',
    description: 'A sleek browser-based scientific calculator with keyboard support, history log, and expression parsing.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    color: '#f97316',
    icon: '🔢',
    github: 'https://github.com/',
  },
]

export default function Projects() {
  const { ref, isInView } = useScrollReveal()
  const [hovered, setHovered] = useState(null)

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  }

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          variants={container}
        >
          <motion.div variants={card} className="section-header">
            <p className="section-tag">// what I've built</p>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">A selection of things I've designed and built.</p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="project-card"
                variants={card}
                onHoverStart={() => setHovered(i)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.25 }}
                style={{ '--card-color': project.color }}
              >
                <div className="project-card-glow" />

                <div className="project-top">
                  <span className="project-icon">{project.icon}</span>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/></svg>
                    </a>
                    <a href="#" className="project-link" aria-label="Live Demo">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      className="project-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
