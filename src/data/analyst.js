export const analystData = {
  about: {
    paragraphs: [
      [
        { text: 'CS student at ' },
        { text: 'Dalhousie University', highlight: true },
        { text: ' with a strong interest in systems analysis, data-driven decision-making, and optimizing large-scale technical environments. I focus on understanding how complex systems operate end-to-end and identifying opportunities to improve performance, reliability, and user experience.' },
      ],
      [
        { text: 'During my co-op at ' },
        { text: 'Nova Scotia Health', highlight: true },
        { text: ', I worked on enterprise healthcare systems as part of the ' },
        { text: 'One Person One Record (OPOR)', highlight: true },
        { text: ' initiative. I analyzed and triaged technical issues, supported system workflows, and collaborated with cross-functional teams to ensure efficient resolution of incidents — strengthening my ability to break down complex problems and contribute to stable, high-availability environments.' },
      ],
      [
        { text: 'I bring experience with ticketing systems, system integrations, and a technical foundation in programming and cloud technologies — focused on ' },
        { text: 'bridging the gap between technical systems and business needs', highlight: true },
        { text: ' through structured analysis, clear communication, and continuous improvement.' },
      ],
    ],
    tags: ['Systems Thinker', 'Detail-Oriented', 'Problem Solver', 'Collaborative'],
    stats: [
      { value: '3rd', label: 'Year CS Student' },
      { value: 'OPOR', label: 'Enterprise Initiative' },
      { value: '∞', label: 'Always Improving' },
    ],
  },

  hero: {
    roles: ['Systems Analyst', 'CS Student @ Dalhousie', 'Problem Solver', 'Process Improver'],
    description: 'Computer Science student focused on systems analysis, workflow optimization, and enterprise-scale technical environments.',
  },

  skills: [
    {
      category: 'IT Service & Support',
      icon: '⊞',
      skills: ['ASSIST Ticketing System', 'Incident Triage', 'End-User Technical Support', 'Vendor Access Management', 'Fax Queue Configuration'],
    },
    {
      category: 'Analysis & Concepts',
      icon: '∑',
      skills: ['Systematic Debugging', 'Systems & Network Troubleshooting', 'Data Structures', 'Algorithms', 'Object-Oriented Design', 'IT Service Management'],
    },
    {
      category: 'Data & Tools',
      icon: '⚙',
      skills: ['SQL', 'MySQL', 'Python', 'Git', 'Firebase', 'Agile / XP'],
    },
    {
      category: 'Productivity',
      icon: '▦',
      skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint'],
    },
    {
      category: 'Soft Skills',
      icon: '◈',
      skills: ['Communication', 'Teamwork', 'Adaptability', 'Attention to Detail', 'Time Management'],
    },
  ],

  projects: [
    {
      title: 'Personal Portfolio',
      description:
        'Multi-role portfolio with a fullscreen role-selector, per-role CSS theming, role-specific content, and a floating role-switcher. Demonstrates structured system design, component architecture, and data-driven rendering.',
      tags: ['React', 'Framer Motion', 'CSS', 'Vite'],
      color: '#3b82f6',
      icon: '🌐',
      github: 'https://github.com/angelmary-shyji/portfolio',
    },
    {
      title: 'Collatz Sequence Analyzer',
      description:
        'Analyzes the Cousin of Collatz sequence to determine the number with the longest sequence in a range. Optimized to measure execution time — demonstrating systematic performance analysis and algorithmic thinking.',
      tags: ['Java', 'Algorithm Analysis', 'Performance', 'Optimization'],
      color: '#3b82f6',
      icon: '📊',
      github: 'https://github.com/angelmary-shyji/CousinOfCollatzOptimized',
    },
    {
      title: 'Huffman Coding',
      description:
        'Reads character probabilities, builds a Huffman tree, and generates encoding/decoding logic. Demonstrates structured data analysis, compression systems, and efficient information handling.',
      tags: ['Java', 'Data Analysis', 'Algorithms', 'Compression'],
      color: '#60a5fa',
      icon: '🗜️',
      github: 'https://github.com/angelmary-shyji/HuffmanCoding',
    },
    {
      title: 'To-Do List App',
      description:
        'Task-management web app with real-time DOM updates — no page reloads. A practical example of workflow design, user experience thinking, and clean system logic.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Workflow Design'],
      color: '#818cf8',
      icon: '✅',
      github: 'https://github.com/angelmary-shyji/ToDoList',
    },
    {
      title: 'Advanced Calculator',
      description:
        'Responsive calculator with accurate input handling, clear/delete functionality, and support for advanced operations. Reflects systematic logic design and clean UX.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Systems Logic'],
      color: '#38bdf8',
      icon: '🔢',
      github: 'https://github.com/angelmary-shyji/advanced-calculator',
    },
    {
      title: 'Digital Clock',
      description:
        'Real-time clock with 12-hour AM/PM formatting and a modern UI. Demonstrates time-based system logic, precision, and attention to functional design.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      color: '#0ea5e9',
      icon: '🕐',
      github: 'https://github.com/angelmary-shyji/digital-clock',
    },
    {
      title: 'Pac-Man Game',
      description:
        'Java recreation of Pac-Man with collision detection, score tracking, and game state management — showcasing structured system design and object-oriented architecture.',
      tags: ['Java', 'OOP', 'System Design', 'Algorithms'],
      color: '#6366f1',
      icon: '👾',
      github: 'https://github.com/angelmary-shyji/Pac-Man',
    },
    {
      title: 'Flappy Bird Clone',
      description:
        'Java game featuring gravity mechanics, randomized obstacles, and collision logic. Demonstrates rule-based system behaviour and iterative technical problem-solving.',
      tags: ['Java', 'OOP', 'Game Dev'],
      color: '#4f46e5',
      icon: '🐦',
      github: 'https://github.com/angelmary-shyji/Flappy-Bird',
    },
  ],

  experience: [
    {
      role: 'Student Analyst',
      company: 'Nova Scotia Health Authority',
      location: 'Halifax, NS',
      period: 'January 2026 – Present',
      description:
        'Support enterprise healthcare systems as part of the One Person One Record (OPOR) initiative, analyzing and resolving technical issues for clinical and administrative end-users across the province.',
      bullets: [
        'Analyze and triage incoming incidents and service requests using the ASSIST ticketing system, identifying patterns and escalating complex issues in alignment with IT service management practices.',
        'Assess system access workflows and coordinate vendor account renewals and extensions to maintain uninterrupted system availability and compliance.',
        'Collaborate with cross-functional teams to investigate and resolve system integration issues, contributing to stable, high-availability healthcare environments.',
      ],
      highlights: ['OPOR Initiative', 'Incident Analysis', 'ASSIST Ticketing', 'System Integration', 'Healthcare IT'],
      icon: '🏥',
    },
    {
      role: 'Cashier & Customer Service',
      company: 'Chatime',
      location: 'Bedford, NS',
      period: 'May 2024 – October 2025',
      description:
        'Delivered efficient service in a high-volume environment, responding promptly to customer needs and strengthening interpersonal and communication skills.',
      bullets: [],
      highlights: ['Customer Service', 'Communication', 'Teamwork', 'Time Management'],
      icon: '💼',
    },
  ],
}
