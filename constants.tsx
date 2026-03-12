
import { TimelineItem, Skill, Project } from './types';
import school from './components/assest/school.png';
import diploma from './components/assest/diploma.png';
import lpu from './components/assest/lpu.png';




export interface Certificate {
  title: string;
  provider: string;
  date: string;
  duration: string;
  grade?: string;
  credentialId: string;
  verifyLink: string;
  skills: string[];
  category: string;
}

export const TIMELINE_DATA: (TimelineItem & { detailedProfile?: any })[] = [
  {
    id: 'ccds',
    type: 'SCHOOL',
    title: 'Matriculation',
    institution: 'Christ Church Diocesan School (CCDS), Patna',
    period: '2020 Completion',
    performance: '76.6% | 8.2 CGPA',
    description: "One of Patna's most prestigious Christian Minority institutions, established in 1972. Known for producing IITians and leaders.",
    achievements: [
    
    ],
    // Points to the Pink Neon School Building provided in the previous step
    visuals: school, 
    detailedProfile: {
      established: '1972',
      board: 'CBSE',
      affiliation: '330057',
      legacy: '53+ Years of Excellence',
      campus: 'Peacock Block (Patna)'
    }
  },
  {
    id: 'diploma',
    type: 'DIPLOMA',
    title: 'Diploma in Mechatronics',
    institution: 'Tool Room & Training Centre (MSME-GOI)',
    period: '2020 - 2023',
    performance: '70.93% | First Division',
    description: 'Government of India Autonomous Institute. Specialized in robotics, automation, and industrial systems.',
    achievements: [
      
    ],
    visuals: diploma,
    detailedProfile: {
      parentBody: 'Ministry of MSME, Govt of India',
      accreditation: 'NCVT, DGT',
      specialization: 'Industrial Automation'
    }
  },
  {
    id: 'lpu',
    type: 'UNIVERSITY',
    title: 'BTech Computer Science & Engineering',
    institution: 'Lovely Professional University (LPU)',
    period: '2024 - 2027',
    performance: '8.1 CGPA (Current)',
    description: "India's largest private university. Successfully transitioned from hardware (Mechatronics) to scalable software architecture.",
    achievements: [
     
    ],
    visuals: lpu,
    detailedProfile: {
      naac: 'A++ Grade',
      nirf: '31st (Univ Rank)',
    }
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'C++',
    level: 'Legend',
    badge: '5★ HackerRank',
    category: 'PROGRAMMING',
    details: ['200+ LeetCode Problems', 'Acceptance Rate: 80%', 'Contest Rating: 1,542', 'Global Rank: Top 25%']
  },
  {
    name: 'Python',
    level: 'Expert',
    badge: '4★ HackerRank',
    category: 'AI',
    details: ['Master Generative AI Certified', 'NLP Sentiment Analysis Project', 'Algo Tutor AI Mastery']
  },
  {
    name: 'JS / Node.js',
    level: 'Elite',
    badge: '5★ JS/Node Gold',
    category: 'PROGRAMMING',
    details: ['Express.js Framework Expert', 'JWT & OAuth 2.0 Auth', 'Real-time WebSocket implementation']
  },
  {
    name: 'PHP',
    level: 'Advanced',
    category: 'PROGRAMMING',
    details: ['Secure CRUD Architecture', 'Vanilla PHP Property MS', 'XSS & CSRF Protection Expert']
  },
  {
    name: 'DevOps & Cloud',
    level: 'Intermediate',
    category: 'DEVOPS',
    details: ['NPTEL Elite Certification', 'AWS & Azure Fundamentals', 'Ubuntu Server Administration']
  },
  {
    name: 'Databases',
    level: 'Advanced',
    category: 'DB',
    details: ['MongoDB Aggregation Pipeline', 'MySQL Index Optimization', 'Normalized 3NF Architectures']
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    title: 'AI-Powered NLP',
    provider: 'Algo Tutor',
    date: 'June 2025',
    duration: '45 Hours',
    grade: 'O Grade (91%)',
    credentialId: 'ALGO-NLP-2025-0678',
    verifyLink: 'https://drive.google.com/file/d/1_E97p6pYHuN_e_XMCCWHZj193xLLFn4z/view?usp=sharing',
    skills: ['NLTK', 'Sentiment Analysis', 'Tokenization'],
    category: 'AI'
  },
  {
    title: 'Master Generative AI',
    provider: 'Infosys Springboard',
    date: 'Aug 2025',
    duration: '40 Hours',
    credentialId: 'INF-GAI-9921',
    verifyLink: 'https://drive.google.com/file/d/1oC83oGuOnorTZHnDZAL3mx0S94M-xR6R/view?usp=drive_link',
    skills: ['LLM', 'Prompt Engineering', 'LangChain'],
    category: 'AI'
  },
  {
    title: 'Cloud Computing Elite',
    provider: 'NPTEL (IIT KGP)',
    date: 'Apr 2025',
    duration: '12 Weeks',
    grade: 'Elite (47%)',
    credentialId: 'NPTEL24CS72',
    verifyLink: 'https://drive.google.com/file/d/1x6CjIP5KXY3uFVKSPqZuIjtVpFGr_ifY/view?usp=sharing',
    skills: ['IaaS/PaaS/SaaS', 'Virtualization', 'Cloud Security'],
    category: 'DEVOPS'
  },
  {
  title: "Database Mastery",
  provider: "AlgoTutor Academy",
  date: "Aug 15, 2025",
  duration: "Training Program",
  category: "Database",
  credentialId: "DBM-2025.08.15.589761.0001",
  grade: "Completed with Excellence",
  skills: ["SQL", "Database Design", "Normalization", "Problem Solving", "Query Optimization"],
  verifyLink: "https://drive.google.com/file/d/1U2qqjlnaF9uoGpqPmWcPIlvGor21iiZy/view?usp=sharing"
},
{
  title: "Oops In Cpp",
  provider: "Neo Colab",
  date: "Dec 05, 2024",
  duration: "72 Hours",
  category: "Programming",
  credentialId: "LPU-375o95p95q9D33d87",
  grade: "Successfully Completed",
  skills: [
    "OOP Concepts",
    "Classes & Objects",
    "Inheritance",
    "Polymorphism",
    "Encapsulation",
    "Abstraction"
  ],
  verifyLink: "https://drive.google.com/file/d/1p_si-YWZx3hKY5hldHH8L9r9a505s9j5/view?usp=drive_link"
  
},
{
  title: "Data Structures and Algorithm",
  provider: "Lovely Professional University",
  date: "Dec 05, 2024",
  duration: "72 Hours",
  category: "Data Structures",
  credentialId: "LPU-20c16B61CJ2DK30L8",
  grade: "Successfully Completed",
  skills: [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Sorting Algorithms",
    "Searching Algorithms",
    "Time Complexity"
  ],
  verifyLink: "https://drive.google.com/file/d/1U1a2_UuKoL0PZnFdVXVSozVm0LG4LX92/view?usp=sharing6"
}



];

export const PROJECTS: Project[] = [
  {
    title: 'Fit Nation',
    overview: 'A full-stack health dashboard integrating Google Fit API to track steps, BMI, water intake, and tasks with a gamified streak system.',
    timeline: 'Oct - Dec 2025',
    status: 'V2.0 Active',
    tech: ['React', 'Node.js', 'MongoDB', 'Google Fit OAuth', 'Recharts'],
    metrics: [
      { label: 'Steps Tracked', value: '1 lkh+' },
      { label: 'Active Streak', value: '31 Days' },
      { label: 'Avg Session', value: '1.1 K' }
    ],
    links: [
       { label: 'Demo', url: 'https://fitnationn.vercel.app/' },
      { label: 'Source', url: 'https://github.com/shiv578/Fitnationproject' }
    ]
  },
  {
    title: 'Property Management',
    overview: 'High-security real estate platform built with vanilla PHP. Features advanced search filters, 15+ table normalized schema, and multi-role access.',
    timeline: 'Feb - Apr 2025',
    status: 'Stable',
    tech: ['PHP', 'MySQL', 'Tailwind', 'JS'],
    metrics: [
      { label: 'Listings', value: '50+' },
      { label: 'Performance', value: '92' },
      { label: 'SQL Safety', value: '100%' }
    ],
    links: [
      { label: 'Demo', url: '#' },
      { label: 'Source', url: 'https://github.com/shiv578/Property-Management' }
    ]
  }
];
