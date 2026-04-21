import { useRole } from './context/RoleContext'
import RoleSelector from './components/RoleSelector'
import RoleSwitcher from './components/RoleSwitcher'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  const { role, setRole } = useRole()

  if (!role) {
    return <RoleSelector onSelect={setRole} />
  }

  return (
    <>
      <RoleSwitcher />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
