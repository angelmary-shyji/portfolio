# Angel Mary Shyji — Personal Portfolio

A personal developer portfolio built with React, covering my software and web development work: skills, projects, experience, and a working contact form.

## Features

- **Particle canvas** — animated background particles in the hero section
- **Typewriter effect** — cycling titles in the hero section
- **Scroll-reveal animations** — sections animate in using Framer Motion
- **Working contact form** — EmailJS integration sends messages directly to inbox
- **Fully responsive** — mobile-friendly across all breakpoints

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — build tool and dev server
- **Framer Motion** — animations and transitions
- **CSS Custom Properties** — theming without a CSS-in-JS library
- **EmailJS** — contact form email delivery (no backend required)

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

> **Contact form:** requires a `.env` file with your EmailJS credentials (not committed to git):
> ```
> VITE_EMAILJS_SERVICE_ID=your_service_id
> VITE_EMAILJS_TEMPLATE_ID=your_template_id
> VITE_EMAILJS_PUBLIC_KEY=your_public_key
> ```

## Project Structure

```
src/
├── components/        # UI components (Hero, About, Skills, Projects, etc.)
├── data/
│   └── portfolio.js       # All site content (about, hero, skills, projects, experience)
├── hooks/
│   └── useScrollReveal.js
└── styles/
    ├── global.css         # Base styles and CSS variables
    └── themes.css         # Site color theme
```

## Projects

| Project | Stack |
|---|---|
| Personal Portfolio | React, Framer Motion, Vite, CSS |
| Pac-Man Game | Java, OOP |
| Flappy Bird Clone | Java, OOP |
| Huffman Coding | Java, Algorithms |
| Collatz Sequence Analyzer | Java, Algorithms |
| To-Do List App | JavaScript, HTML, CSS |
| Digital Clock | JavaScript, HTML, CSS |
| Advanced Calculator | JavaScript, HTML, CSS |

---

Built with React & Framer Motion · Angel Mary Shyji © 2026
