import { createContext, useContext, useState, useEffect } from 'react'

export const ROLES = [
  {
    id: 'software-developer',
    label: 'Software Developer',
    tagline: 'Full-stack engineering & system design',
    color: '#569cd6',
    locked: false,
  },
  {
    id: 'analyst',
    label: 'Analyst',
    tagline: 'Technical operations & process improvement',
    color: '#3b82f6',
    locked: false,
  },
  {
    id: 'web-developer',
    label: 'Web Developer',
    tagline: 'Creative interfaces & front-end experiences',
    color: '#e879f9',
    locked: false,
  },
  {
    id: 'data-analyst',
    label: 'Data Analyst',
    tagline: 'Exploring data-driven decision making',
    color: '#10b981',
    locked: true,
    lockLabel: 'Certification Underway',
  },
  {
    id: 'cybersecurity',
    label: 'Cybersecurity',
    tagline: 'Securing systems & digital infrastructure',
    color: '#22c55e',
    locked: true,
    lockLabel: 'Certification Underway',
  },
]

const RoleContext = createContext(null)

export function RoleProvider({ children }) {
  const [role, setRole] = useState(null)

  useEffect(() => {
    if (role) {
      document.body.setAttribute('data-role', role)
    } else {
      document.body.removeAttribute('data-role')
    }
  }, [role])

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  )
}

export const useRole = () => useContext(RoleContext)
