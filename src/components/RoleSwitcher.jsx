import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRole, ROLES } from '../context/RoleContext'
import './RoleSwitcher.css'

export default function RoleSwitcher() {
  const { role, setRole } = useRole()
  const [open, setOpen] = useState(false)
  const current = ROLES.find(r => r.id === role)

  return (
    <div className="role-switcher-wrap">
      <AnimatePresence>
        {open && (
          <motion.div
            className="role-switcher-menu"
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
          >
            <p className="switcher-menu-label">Switch experience</p>
            {ROLES.map(r => (
              <button
                key={r.id}
                className={`switcher-option ${r.id === role ? 'active' : ''} ${r.locked ? 'locked' : ''}`}
                style={{ '--role-color': r.color }}
                onClick={() => {
                  if (!r.locked) {
                    setRole(r.id)
                    setOpen(false)
                  }
                }}
                disabled={r.locked}
              >
                <span className="switcher-dot" />
                <span className="switcher-option-label">{r.label}</span>
                {r.locked && <span className="switcher-lock-tag">Soon</span>}
              </button>
            ))}
            <div className="switcher-divider" />
            <button
              className="switcher-back"
              onClick={() => { setRole(null); setOpen(false) }}
            >
              ← Back to selector
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="role-switcher-pill"
        style={{ '--role-color': current?.color }}
        onClick={() => setOpen(o => !o)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="pill-dot" />
        <span className="pill-label">{current?.label}</span>
        <svg
          className={`pill-chevron ${open ? 'open' : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </motion.button>
    </div>
  )
}
