import { motion } from 'framer-motion'
import { ROLES } from '../context/RoleContext'
import './RoleSelector.css'

const icons = {
  'software-developer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'analyst': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  ),
  'web-developer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  'data-analyst': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'cybersecurity': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const activeRoles = ROLES.filter(r => !r.locked)
const lockedRoles = ROLES.filter(r => r.locked)

export default function RoleSelector({ onSelect }) {
  return (
    <div className="selector">
      <div className="selector-bg" />

      <motion.div
        className="selector-header"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="selector-greeting">Welcome, I'm</p>
        <h1 className="selector-name">Angel Mary Shyji</h1>
        <p className="selector-prompt">Choose the lens you'd like to explore my work through</p>
      </motion.div>

      <motion.div
        className="roles-wrapper"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="roles-row">
          {activeRoles.map(r => (
            <RoleCard key={r.id} role={r} onSelect={onSelect} />
          ))}
        </div>
        <div className="roles-row roles-row--locked">
          {lockedRoles.map(r => (
            <RoleCard key={r.id} role={r} onSelect={onSelect} />
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function RoleCard({ role, onSelect }) {
  return (
    <motion.div
      variants={cardVariant}
      className={`role-card ${role.locked ? 'locked' : ''}`}
      style={{ '--role-color': role.color }}
      onClick={() => !role.locked && onSelect(role.id)}
      whileHover={!role.locked ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      <div className="role-card-glow" />
      <div className="role-icon">{icons[role.id]}</div>
      <h3 className="role-label">{role.label}</h3>
      <p className="role-tagline">{role.tagline}</p>

      {role.locked ? (
        <div className="role-lock-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          {role.lockLabel}
        </div>
      ) : (
        <div className="role-enter">
          Enter
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      )}
    </motion.div>
  )
}
