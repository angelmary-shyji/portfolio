export const portfolioData = {
  about: {
    paragraphs: [
      [
        { text: 'CS student at ' },
        { text: 'Dalhousie University', highlight: true },
        { text: ' focused on software engineering and web development. I build with ' },
        { text: 'Java, Python, JavaScript, and React', highlight: true },
        { text: ' across full-stack, front-end, and cloud-native applications on ' },
        { text: 'AWS', highlight: true },
        { text: '.' },
      ],
      [
        { text: 'Currently on co-op at ' },
        { text: 'Nova Scotia Health', highlight: true },
        { text: ', supporting the ' },
        { text: 'One Person One Record (OPOR)', highlight: true },
        { text: ' initiative — a province-wide enterprise system — including a clinical dashboard used across the province. I also build with ' },
        { text: 'Firebase', highlight: true },
        { text: ', RESTful APIs, and serverless cloud, with a strong emphasis on clean architecture and maintainable code.' },
      ],
      [
        { text: 'I enjoy turning ideas into ' },
        { text: 'interactive digital experiences', highlight: true },
        { text: ' and continuously improving my skills to build reliable, high-quality software.' },
      ],
    ],
    tags: ['Problem Solver', 'Fast Learner', 'Creative Coder', 'Detail-Oriented'],
    stats: [
      { value: '3rd', label: 'Year CS Student' },
      { value: '7+', label: 'Projects Built' },
      { value: '∞', label: 'Always Learning' },
    ],
  },

  hero: {
    roles: ['Software Developer', 'Web Developer', 'CS Student @ Dalhousie', 'Problem Solver'],
    description: 'Computer Science student building practical, scalable software and clean, responsive web experiences — from algorithms to full-stack applications.',
  },

  skills: [
    {
      category: 'Languages',
      icon: '< />',
      skills: ['Java', 'Python', 'JavaScript', 'C', 'HTML', 'CSS', 'SQL'],
    },
    {
      category: 'Front-End',
      icon: '✦',
      skills: ['React', 'Responsive Design', 'DOM Manipulation', 'CSS Animations', 'Flexbox & Grid', 'UI/UX Principles'],
    },
    {
      category: 'Cloud & Back-End',
      icon: '☁',
      skills: ['AWS', 'Serverless Functions', 'Firebase', 'REST APIs', 'MySQL'],
    },
    {
      category: 'Tools & Practices',
      icon: '⚙',
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'JUnit', 'Agile / XP', 'CI/CD Fundamentals'],
    },
    {
      category: 'Concepts',
      icon: '∑',
      skills: ['Object-Oriented Design', 'Data Structures', 'Algorithms', 'Systematic Debugging', 'Systems & Network Troubleshooting'],
    },
    {
      category: 'IT Service & Support',
      icon: '⊞',
      skills: ['ASSIST Ticketing System', 'Incident Triage', 'End-User Technical Support', 'Vendor Access Management', 'Fax Queue Configuration'],
    },
    {
      category: 'Soft Skills',
      icon: '◈',
      skills: ['Communication', 'Teamwork', 'Problem Solving', 'Creativity', 'Adaptability', 'Time Management', 'Attention to Detail'],
    },
  ],

  projects: [
    {
      title: 'Personal Portfolio',
      description:
        'This portfolio — a responsive single-page site with an animated particle canvas, typewriter hero, scroll-reveal sections, and CSS custom-property theming. Built with React and Framer Motion.',
      tags: ['React', 'Framer Motion', 'CSS', 'Vite'],
      color: '#8b5cf6',
      icon: '🌐',
      github: 'https://github.com/angelmary-shyji/portfolio',
    },
    {
      title: 'Pac-Man Game',
      description:
        'Java recreation of the classic Pac-Man arcade game. Integrated OOP for collision detection, score tracking, and game logic with engaging animations and responsive controls.',
      tags: ['Java', 'OOP', 'Game Dev', 'Algorithms'],
      color: '#f59e0b',
      icon: '👾',
      github: 'https://github.com/angelmary-shyji/Pac-Man',
    },
    {
      title: 'Flappy Bird Clone',
      description:
        'Java implementation featuring gravity mechanics, randomized obstacles, collision detection, and score tracking — showcasing game development principles through interactive visuals.',
      tags: ['Java', 'Physics', 'Game Dev', 'Swing'],
      color: '#10b981',
      icon: '🐦',
      github: 'https://github.com/angelmary-shyji/Flappy-Bird',
    },
    {
      title: 'Huffman Coding',
      description:
        'Reads character probabilities, builds a Huffman tree, and generates codes. Implements encoding and decoding to efficiently compress and decompress text.',
      tags: ['Java', 'Algorithms', 'Data Structures', 'Compression'],
      color: '#3b82f6',
      icon: '🗜️',
      github: 'https://github.com/angelmary-shyji/HuffmanCoding',
    },
    {
      title: 'Collatz Sequence Analyzer',
      description:
        'Analyzes the Cousin of Collatz sequence to find the number with the longest sequence in a given range. Optimized to measure and output execution time efficiently.',
      tags: ['Java', 'Algorithms', 'Optimization'],
      color: '#ec4899',
      icon: '📊',
      github: 'https://github.com/angelmary-shyji/CousinOfCollatzOptimized',
    },
    {
      title: 'To-Do List App',
      description:
        'Interactive task-management web app with real-time DOM manipulation — tasks add, complete, and delete dynamically with no page reloads. Features live task numbering and visual strikethrough feedback.',
      tags: ['JavaScript', 'HTML', 'CSS', 'DOM'],
      color: '#8b5cf6',
      icon: '✅',
      github: 'https://github.com/angelmary-shyji/ToDoList',
    },
    {
      title: 'Digital Clock',
      description:
        'Real-time digital clock updating every second with 12-hour AM/PM formatting. Modern responsive UI with a blurred background overlay and custom imagery.',
      tags: ['JavaScript', 'HTML', 'CSS', 'UI Design'],
      color: '#06b6d4',
      icon: '🕐',
      github: 'https://github.com/angelmary-shyji/digital-clock',
    },
    {
      title: 'Advanced Calculator',
      description:
        'Responsive calculator supporting basic arithmetic and advanced operations like square and square root. Accurate input handling with clear/delete functionality and a clean, consistent interface.',
      tags: ['JavaScript', 'HTML', 'CSS', 'UI Design'],
      color: '#f97316',
      icon: '🔢',
      github: 'https://github.com/angelmary-shyji/advanced-calculator',
    },
  ],

  experience: [
    {
      role: 'Student Analyst',
      company: 'Nova Scotia Health Authority',
      location: 'Halifax, NS',
      period: 'January 2026 – August 2026',
      description:
        'Deliver frontline technical support to clinical and administrative end-users in a healthcare IT environment, and contribute to web-based systems under the One Person One Record (OPOR) initiative.',
      bullets: [
        'Supported and tested a province-wide clinical dashboard, identifying UI inconsistencies and workflow inefficiencies to improve the experience for clinical staff.',
        'Use the ASSIST ticketing system to log, track, triage, and resolve incidents and service requests in alignment with IT service management practices.',
        'Coordinate vendor account renewals and access extensions to ensure uninterrupted system availability and policy compliance.',
      ],
      highlights: ['Healthcare IT', 'OPOR Initiative', 'Dashboard Support', 'ASSIST Ticketing', 'Incident Triage', 'Vendor Management'],
      icon: '🏥',
    },
    {
      role: 'Cashier & Customer Service',
      company: 'Chatime',
      location: 'Bedford, NS',
      period: 'May 2024 – October 2025',
      description:
        'Delivered efficient service in a high-volume environment by responding promptly to customer needs and inquiries.',
      bullets: [
        'Strengthened interpersonal and communication skills through daily customer interactions.',
      ],
      highlights: ['Customer Service', 'Communication', 'Teamwork', 'Time Management'],
      icon: '💼',
    },
  ],
}
