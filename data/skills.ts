import type { SkillCategory } from '@/lib/types';

export const skills: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['C#', '.NET', 'Node.js', 'APIs REST'],
  },
  {
    category: 'Dados e Ferramentas',
    items: ['SQL Server', 'Git', 'Docker', 'VS Code'],
  },
  {
    category: 'Soft Skills',
    items: [
      'Comunicação',
      'Trabalho em equipe',
      'Resolução de problemas',
      'Aprendizado contínuo',
    ],
  },
];
