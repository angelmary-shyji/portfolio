export const softwareDeveloperData = {
  about: {
    paragraphs: [
      [
        { text: 'CS student at ' },
        { text: 'Dalhousie University', highlight: true },
        { text: ' specializing in software engineering and scalable systems. I build with ' },
        { text: 'Java, Python, and JavaScript', highlight: true },
        { text: ' across full-stack, mobile, and cloud-native architectures on ' },
        { text: 'AWS', highlight: true },
        { text: '.' },
      ],
      [
        { text: 'Currently on co-op at ' },
        { text: 'Nova Scotia Health', highlight: true },
        { text: ', supporting the ' },
        { text: 'One Person One Record (OPOR)', highlight: true },
        { text: ' initiative — a province-wide enterprise system. I also build with ' },
        { text: 'Firebase', highlight: true },
        { text: ', RESTful APIs, and serverless cloud, with a strong emphasis on clean architecture and maintainable code.' },
      ],
    ],
    tags: ['Problem Solver', 'Fast Learner', 'Systems Thinker', 'Detail-Oriented'],
    stats: [
      { value: '3rd', label: 'Year CS Student' },
      { value: '7+', label: 'Projects Built' },
      { value: '∞', label: 'Always Learning' },
    ],
  },

  hero: {
    roles: ['Software Developer', 'CS Student @ Dalhousie', 'Problem Solver', 'Builder'],
    description:
      'Computer Science student passionate about building practical,\nscalable software — from algorithms to full-stack applications.',
  },

  skills: [
    {
      category: 'Languages',
      icon: '< />',
      skills: ['Java', 'Python', 'JavaScript', 'C', 'HTML', 'CSS', 'SQL'],
    },
    {
      category: 'Tools & Practices',
      icon: '⚙',
      skills: ['Git', 'JUnit', 'MySQL', 'Firebase', 'Agile / XP', 'CI/CD Fundamentals'],
    },
    {
      category: 'Concepts',
      icon: '∑',
      skills: ['Object-Oriented Design', 'Data Structures', 'Algorithms', 'Systematic Debugging', 'REST APIs', 'Systems & Network Troubleshooting'],
    },
    {
      category: 'IT Service & Support',
      icon: '⊞',
      skills: ['ASSIST Ticketing System', 'Incident Triage', 'End-User Technical Support', 'Vendor Access Management', 'Fax Queue Configuration'],
    },
    {
      category: 'Soft Skills',
      icon: '◈',
      skills: ['Communication', 'Teamwork', 'Adaptability', 'Time Management', 'Attention to Detail'],
    },
  ],

  projects: [
    {
      title: 'Pac-Man Game',
      description:
        'Java recreation of the classic Pac-Man arcade game. Integrated OOP for collision detection, score tracking, and game logic with engaging animations and responsive controls.',
      tags: ['Java', 'OOP', 'Game Dev', 'Algorithms'],
      color: '#f59e0b',
      icon: '👾',
      github: '#',
    },
    {
      title: 'Flappy Bird Clone',
      description:
        'Java implementation featuring gravity mechanics, randomized obstacles, collision detection, and score tracking — showcasing game development principles through interactive visuals.',
      tags: ['Java', 'Physics', 'Game Dev', 'Swing'],
      color: '#10b981',
      icon: '🐦',
      github: '#',
    },
    {
      title: 'Huffman Coding',
      description:
        'Reads character probabilities, builds a Huffman tree, and generates codes. Implements encoding and decoding to efficiently compress and decompress text.',
      tags: ['Java', 'Algorithms', 'Data Structures', 'Compression'],
      color: '#3b82f6',
      icon: '🗜️',
      github: '#',
    },
    {
      title: 'Collatz Sequence Analyzer',
      description:
        'Analyzes the Cousin of Collatz sequence to find the number with the longest sequence in a given range. Optimized to measure and output execution time efficiently.',
      tags: ['Java', 'Algorithms', 'Optimization'],
      color: '#ec4899',
      icon: '📊',
      github: '#',
    },
    {
      title: 'To-Do List App',
      description:
        'Interactive task-management web app with real-time DOM manipulation for task numbering and completion status — no page reloads required. Clean, user-friendly interface.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      color: '#8b5cf6',
      icon: '✅',
      github: '#',
    },
    {
      title: 'Digital Clock',
      description:
        'Real-time digital clock updating every second with 12-hour AM/PM formatting. Modern responsive UI with a blurred background overlay and custom imagery.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      color: '#06b6d4',
      icon: '🕐',
      github: '#',
    },
    {
      title: 'Advanced Calculator',
      description:
        'Responsive calculator supporting basic arithmetic and advanced operations like square and square root. Accurate input handling with clear/delete functionality.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      color: '#f97316',
      icon: '🔢',
      github: '#',
    },
  ],

  experience: [
    {
      role: 'Student Analyst',
      company: 'Nova Scotia Health Authority',
      location: 'Halifax, NS',
      period: 'January 2026 – Present',
      description:
        'Deliver frontline technical support to clinical and administrative end-users, troubleshooting system, access, and workflow issues in a healthcare IT environment.',
      bullets: [
        'Use the ASSIST ticketing system to log, track, triage, and resolve incidents and service requests in alignment with IT service management practices.',
        'Coordinate vendor account renewals and access extensions to ensure uninterrupted system availability and policy compliance.',
      ],
      highlights: ['Healthcare IT', 'ASSIST Ticketing', 'Incident Triage', 'Vendor Management', 'IT Support'],
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
