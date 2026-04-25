# Angel Mary Shyji — Personal Portfolio

A multi-role personal portfolio built with React, featuring a role-selector landing page that lets visitors explore my work through different professional lenses — each with its own theme and tailored content.

## Roles

| Role | Theme | Status |
|---|---|---|
| Software Developer | VS Code Dark (charcoal + teal/blue) | ✅ Live |
| Analyst | Deep Navy (blue accents) | ✅ Live |
| Web Developer | Vibrant fuchsia / orange | ✅ Live |
| Data Analyst | — | 🔒 Certification Underway |
| Cybersecurity | — | 🔒 Certification Underway |

## Features

- **Role-selector landing page** — fullscreen portal with animated role cards
- **Per-role theming** — CSS custom properties swap the entire color palette on role selection
- **Per-role content** — skills, projects, experience, and about sections are all role-specific
- **Role switcher** — floating pill (bottom-right) lets visitors switch roles or return to the selector at any time
- **Particle canvas** — animated background particles that match each role's accent color
- **Typewriter effect** — role-specific cycling text in the hero section
- **Scroll-reveal animations** — sections animate in using Framer Motion
- **Fully responsive** — mobile-friendly across all breakpoints

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **Framer Motion** — animations and transitions
- **CSS Custom Properties** — runtime theme switching without a CSS-in-JS library

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # UI components (Hero, About, Skills, Projects, etc.)
├── context/
│   └── RoleContext.jsx    # Role state + ROLES config
├── data/
│   ├── roleData.js        # Routes role ID → role data
│   ├── softwareDeveloper.js
│   ├── analyst.js
│   └── webDeveloper.js
├── hooks/
│   ├── useRoleData.js     # Returns data for the active role
│   └── useScrollReveal.js
└── styles/
    ├── global.css         # Base styles and CSS variables
    └── themes.css         # Per-role CSS variable overrides
```

## Projects

| Project | Stack | Roles Featured In |
|---|---|---|
| Personal Portfolio | React, Framer Motion, Vite, CSS | All roles |
| To-Do List App | JavaScript, HTML, CSS | Software Developer, Web Developer |
| Digital Clock | JavaScript, HTML, CSS | Software Developer, Web Developer |
| Advanced Calculator | JavaScript, HTML, CSS | Software Developer, Web Developer |
| Pac-Man Game | Java, OOP | Software Developer, Analyst, Web Developer |
| Flappy Bird Clone | Java, OOP | Software Developer, Analyst, Web Developer |
| Huffman Coding | Java, Algorithms | Software Developer, Analyst, Web Developer |
| Collatz Sequence Analyzer | Java, Algorithms | Software Developer, Analyst, Web Developer |

## Adding a New Role

1. Create `src/data/yourRole.js` following the existing data shape (`about`, `hero`, `skills`, `projects`, `experience`)
2. Add a `case 'your-role'` in `src/data/roleData.js`
3. Add the role entry to the `ROLES` array in `src/context/RoleContext.jsx`
4. Add a theme block in `src/styles/themes.css`
5. Add a particle color entry in `src/components/Hero.jsx`

---

Built with React & Framer Motion · Angel Mary Shyji © 2026
