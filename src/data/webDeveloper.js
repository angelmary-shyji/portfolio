export const webDeveloperData = {
  about: {
    paragraphs: [
      [
        { text: 'CS student at ' },
        { text: 'Dalhousie University', highlight: true },
        { text: ' with a strong interest in web development and building clean, responsive, and user-friendly applications. I work with ' },
        { text: 'HTML, CSS, JavaScript, and React', highlight: true },
        { text: ' to create intuitive front-end experiences, backed by reliable APIs and cloud-based solutions.' },
      ],
      [
        { text: 'During my co-op at ' },
        { text: 'Nova Scotia Health', highlight: true },
        { text: ', I contributed to a healthcare dashboard as part of the ' },
        { text: 'One Person One Record (OPOR)', highlight: true },
        { text: ' initiative — working on real-world web-based systems, improving workflows, and solving technical issues that translate directly into building efficient and scalable web applications.' },
      ],
      [
        { text: 'I enjoy turning ideas into ' },
        { text: 'interactive digital experiences', highlight: true },
        { text: ' and continuously improving my skills to develop high-quality, performance-focused websites.' },
      ],
    ],
    tags: ['UI Builder', 'Creative Coder', 'Detail-Oriented', 'Fast Learner'],
    stats: [
      { value: '3+', label: 'Web Projects' },
      { value: 'React', label: 'Primary Framework' },
      { value: '∞', label: 'Always Building' },
    ],
  },

  hero: {
    roles: ['Web Developer', 'CS Student @ Dalhousie', 'UI Builder', 'Creative Coder'],
    description: 'Computer Science student crafting clean, responsive web experiences — from intuitive UIs to reliable cloud-backed applications.',
  },

  skills: [
    {
      category: 'Front-End',
      icon: '< />',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'DOM Manipulation'],
    },
    {
      category: 'Styling & Design',
      icon: '✦',
      skills: ['CSS Animations', 'Flexbox', 'CSS Grid', 'UI/UX Principles', 'Component Design'],
    },
    {
      category: 'Tools & Workflow',
      icon: '⚙',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'REST APIs', 'Firebase'],
    },
    {
      category: 'Cloud & Back-End',
      icon: '☁',
      skills: ['AWS', 'Serverless Functions', 'Firebase Auth', 'JSON / API Integration'],
    },
    {
      category: 'Soft Skills',
      icon: '◈',
      skills: ['Attention to Detail', 'Creativity', 'Problem Solving', 'Communication', 'Adaptability'],
    },
  ],

  projects: [
    {
      title: 'Personal Portfolio',
      description:
        'This portfolio — a multi-role site with a fullscreen role-selector, per-role CSS theming, role-specific content, animated particle canvas, and a floating role-switcher. Built with React and Framer Motion.',
      tags: ['React', 'Framer Motion', 'CSS', 'Vite'],
      color: '#e879f9',
      icon: '🌐',
      github: 'https://github.com/angelmary-shyji',
    },
    {
      title: 'To-Do List App',
      description:
        'Interactive task-management web app with real-time DOM manipulation — tasks add, complete, and delete dynamically with no page reloads. Features live task numbering and visual strikethrough feedback.',
      tags: ['JavaScript', 'HTML', 'CSS', 'DOM'],
      color: '#f0abfc',
      icon: '✅',
      github: '#',
    },
    {
      title: 'Digital Clock',
      description:
        'Real-time digital clock updating every second using JavaScript timing functions. 12-hour AM/PM formatting with a modern, responsive UI featuring a blurred background overlay and custom imagery.',
      tags: ['JavaScript', 'HTML', 'CSS', 'UI Design'],
      color: '#fb923c',
      icon: '🕐',
      github: '#',
    },
    {
      title: 'Advanced Calculator',
      description:
        'Responsive calculator supporting basic arithmetic and advanced operations like square and square root. Accurate input handling with clear/delete functionality and a clean, consistent interface.',
      tags: ['JavaScript', 'HTML', 'CSS', 'UI Design'],
      color: '#fbbf24',
      icon: '🔢',
      github: '#',
    },
    {
      title: 'Pac-Man Game',
      description:
        'Java recreation of Pac-Man with OOP-based collision detection, score tracking, and game logic — demonstrating structured UI rendering and interactive interface design.',
      tags: ['Java', 'OOP', 'Game Dev', 'UI'],
      color: '#c084fc',
      icon: '👾',
      github: '#',
    },
    {
      title: 'Flappy Bird Clone',
      description:
        'Java game with gravity mechanics, randomized obstacles, and collision detection. Showcases interactive visuals and responsive controls through clean game loop design.',
      tags: ['Java', 'Game Dev', 'UI', 'Physics'],
      color: '#a78bfa',
      icon: '🐦',
      github: '#',
    },
    {
      title: 'Huffman Coding',
      description:
        'Reads character probabilities, builds a Huffman tree, and implements encoding and decoding — a strong example of algorithmic thinking applied to data efficiency.',
      tags: ['Java', 'Algorithms', 'Data Structures'],
      color: '#818cf8',
      icon: '🗜️',
      github: '#',
    },
    {
      title: 'Collatz Sequence Analyzer',
      description:
        'Analyzes the Cousin of Collatz sequence to find the longest result in a range, with execution time measurement — focused on performance and algorithmic optimization.',
      tags: ['Java', 'Algorithms', 'Performance'],
      color: '#7dd3fc',
      icon: '📊',
      github: '#',
    },
  ],

  experience: [
    {
      role: 'Student Analyst — Web & Dashboard Systems',
      company: 'Nova Scotia Health Authority',
      location: 'Halifax, NS',
      period: 'January 2026 – Present',
      description:
        'Contributed to web-based healthcare systems as part of the One Person One Record (OPOR) initiative, including supporting a clinical dashboard used across the province.',
      bullets: [
        'Supported and tested a healthcare dashboard, identifying UI inconsistencies and workflow inefficiencies to improve the end-user experience for clinical staff.',
        'Troubleshot browser-based system issues and coordinated resolutions using the ASSIST ticketing system, ensuring consistent web application availability.',
        'Coordinated vendor access renewals for web-integrated third-party systems, maintaining uninterrupted service and compliance.',
      ],
      highlights: ['Dashboard Support', 'OPOR Initiative', 'Web Systems', 'ASSIST Ticketing', 'Healthcare IT'],
      icon: '🌐',
    },
    {
      role: 'Cashier & Customer Service',
      company: 'Chatime',
      location: 'Bedford, NS',
      period: 'May 2024 – October 2025',
      description:
        'Delivered efficient service in a high-volume environment, strengthening interpersonal and communication skills.',
      bullets: [],
      highlights: ['Customer Service', 'Communication', 'Teamwork', 'Time Management'],
      icon: '💼',
    },
  ],
}
