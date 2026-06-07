import { Level } from '../types';

export const levels: Level[] = [
  {
    num: '00',
    title: 'BASICS',
    subtitle: 'Intro to Syntax & Logic',
    desc: 'Master variables, data types, conditions, and basic loops in Java and Python.',
    color: '#f59e0b', // Amber
    glow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    num: '01',
    title: 'CORE',
    subtitle: 'OOP & Data Structures',
    desc: 'Learn Object-Oriented Programming, classes, inheritance, lists, stacks, and queues.',
    color: '#3b82f6', // Blue
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    num: '02',
    title: 'ADVANCED',
    subtitle: 'Backend Frameworks & APIs',
    desc: 'Build REST APIs, manage database connections with JPA/Hibernate, and manage data models.',
    color: '#7c3aed', // Purple
    glow: 'rgba(124, 58, 237, 0.15)',
  },
  {
    num: '03',
    title: 'PROJECTS',
    subtitle: 'Docker, AWS & System Design',
    desc: 'Deploy containerized applications, design cloud microservices, and optimize systems for scale.',
    color: '#0ea5e9', // Sky
    glow: 'rgba(14, 165, 233, 0.15)',
  },
  {
    num: '04',
    title: 'CAREER',
    subtitle: 'Mock Interviews & Placements',
    desc: 'Prepare for algorithmic whiteboard interviews, polish profiles, and secure tech placements.',
    color: '#00ff88', // Green
    glow: 'rgba(0, 255, 136, 0.15)',
  },
];
