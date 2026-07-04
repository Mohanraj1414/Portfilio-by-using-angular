export interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  gradient: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  projects: WorkProject[];
}

export interface WorkProject {
  name: string;
  responsibilities: string[];
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  icon: string;
}

export interface Achievement {
  title: string;
  issuer: string;
  icon: string;
  color: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
