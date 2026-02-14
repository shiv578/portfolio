
export interface TimelineItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description: string;
  performance: string;
  achievements: string[];
visuals: string;
  type: 'SCHOOL' | 'DIPLOMA' | 'UNIVERSITY';
}

export interface Skill {
  name: string;
  level: string;
  badge?: string;
  details: string[];
  category: 'PROGRAMMING' | 'AI' | 'DEVOPS' | 'DB';
}

export interface Project {
  title: string;
  overview: string;
  timeline: string;
  status: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  links: { label: string; url: string }[];
}
