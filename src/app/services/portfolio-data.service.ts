import { Injectable } from '@angular/core';
import {
  Project, Experience, SkillCategory,
  Education, Achievement, Service, NavLink
} from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {

  navLinks: NavLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'Aplyft — AI Powered Job Search Agent',
      description: 'AI-powered job search platform that parses resumes, fetches live jobs, filters fake listings, ranks jobs using FAISS-powered RAG, and provides personalized recommendations.',
      features: ['Resume Parsing', 'Live Job Search', 'AI Ranking', 'JWT Authentication', 'Dashboard', 'FAISS RAG', 'Groq Llama 3', 'LangGraph'],
      tech: ['FastAPI', 'React', 'LangGraph', 'Groq', 'FAISS', 'JWT', 'Tailwind CSS'],
      github: '#',
      demo: '#',
      featured: true,
      gradient: 'linear-gradient(135deg, #6c63ff, #00d2d3)'
    },
    {
      id: 2,
      title: 'Campus Collection & Distribution Framework',
      description: 'Desktop Student Management System with comprehensive CRUD operations, CSV export, calendar scheduling, PDF upload, and advanced search capabilities.',
      features: ['CRUD Operations', 'CSV Export', 'Calendar Scheduling', 'PDF Upload', 'Advanced Search', 'Student Management'],
      tech: ['Python', 'Tkinter', 'Pandas', 'MySQL'],
      github: '#',
      featured: false,
      gradient: 'linear-gradient(135deg, #fd79a8, #6c63ff)'
    }
  ];

  experiences: Experience[] = [
    {
      id: 1,
      role: 'Software Engineer Trainee',
      company: 'Alstonair Technologies Pvt Ltd',
      period: 'May 2025 – Present',
      projects: [
        {
          name: 'Fusteps — Career & Learning Platform',
          responsibilities: [
            'Built a multi-role web platform with 5 user roles using RBAC',
            'Designed secure dashboards for each role',
            'Developed Django ORM backend with REST APIs',
            'Integrated React frontend with mentoring workflows',
            'Created profile management and worked with MySQL'
          ],
          tech: ['Python', 'Django', 'React', 'MySQL', 'REST API', 'RBAC']
        },
        {
          name: 'New Age Land',
          responsibilities: [
            'Developed FastAPI backend with optimized queries',
            'Created responsive React UI components',
            'Integrated PostgreSQL and built REST APIs',
            'Improved overall application performance'
          ],
          tech: ['FastAPI', 'React', 'PostgreSQL']
        }
      ]
    }
  ];

  skillCategories: SkillCategory[] = [
    { name: 'Languages', icon: '💻', skills: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
    { name: 'Backend', icon: '⚙️', skills: ['FastAPI', 'Django', 'Node.js', 'REST API'] },
    { name: 'Frontend', icon: '🎨', skills: ['React.js', 'Angular', 'HTML5', 'CSS3', 'Bootstrap'] },
    { name: 'Database', icon: '🗄️', skills: ['PostgreSQL', 'MySQL', 'Oracle SQL'] },
    { name: 'AI / ML', icon: '🤖', skills: ['FAISS', 'SentenceTransformer', 'LangGraph', 'Groq', 'NumPy', 'Pandas'] },
    { name: 'Tools & Cloud', icon: '🛠️', skills: ['Git', 'GitHub', 'VS Code', 'AWS Basics', 'Docker'] },
  ];

  education: Education[] = [
    {
      degree: 'Master of Computer Applications',
      institution: 'RVS College of Engineering',
      period: '2023 – 2025',
      cgpa: '85%',
      icon: '🎓'
    },
    {
      degree: 'Bachelor of Science — Computer Science',
      institution: 'Dr. R. K. Shanmugam College',
      period: '2020 – 2023',
      cgpa: '85%',
      icon: '📚'
    }
  ];

  achievements: Achievement[] = [
    { title: 'The Synergic Star Award', issuer: 'Alstonair Technologies', icon: '⭐', color: '#f9ca24' },
    { title: 'Python Programming', issuer: 'HackerRank', icon: '🏆', color: '#6c63ff' },
    { title: 'Python Full Stack Development', issuer: 'JSpiders', icon: '🎖️', color: '#00d2d3' },
  ];

  services: Service[] = [
    {
      title: 'Python Backend Development',
      description: 'Scalable, production-ready Python backends with clean architecture.',
      icon: '🐍',
      features: ['FastAPI', 'Django', 'REST APIs', 'RBAC']
    },
    {
      title: 'REST API Development',
      description: 'Well-documented, secure, and performant REST APIs.',
      icon: '🔌',
      features: ['OpenAPI Docs', 'JWT Auth', 'Rate Limiting', 'Versioning']
    },
    {
      title: 'AI-Powered Applications',
      description: 'RAG pipelines, embeddings, and LLM-integrated backends.',
      icon: '🤖',
      features: ['FAISS', 'LangGraph', 'Groq', 'SentenceTransformer']
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end web applications from database to UI.',
      icon: '🚀',
      features: ['React', 'Angular', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Database Design',
      description: 'Optimized schemas, queries, and data modeling.',
      icon: '🗄️',
      features: ['PostgreSQL', 'MySQL', 'ORM', 'Query Optimization']
    },
    {
      title: 'System Design',
      description: 'Scalable architecture planning and implementation.',
      icon: '🏗️',
      features: ['Microservices', 'API Gateway', 'Caching', 'Load Balancing']
    }
  ];
}
