import type { PersonalData } from '@/lib/types';

export const personal: PersonalData = {
  name: 'Luis Felipe',
  professionalTitle: 'Desenvolvedor Full-Stack',
  hero: {
    greeting: 'Olá, eu sou',
    title: 'Full Stack Developer',
    specialties: 'Web, Backend & Data',
    description:
      'Desenvolvo aplicações web, APIs e soluções orientadas a dados, transformando ideias em produtos digitais funcionais, organizados e preparados para evoluir.',
    technologies: ['Next.js', 'TypeScript', 'Python', 'Django', '.NET'],
  },
  metaDescription:
    'Portfólio profissional de Luis Felipe, desenvolvedor em formação com foco em React, C#, .NET e soluções web.',
  biography: [
    'Olá! Meu nome é Luis Felipe, sou desenvolvedor em formação com experiência em projetos acadêmicos e práticos. Atualmente curso Ciência da Computação e já concluí um curso técnico em Análise e Desenvolvimento de Sistemas.',
    'Tenho interesse especial em C# e .NET para backend, além de experiência em frontend com React. Estou sempre em busca de aprender novas tecnologias e expandir minhas habilidades, com foco em evoluir também na área de ciência de dados.',
    'Gosto de resolver problemas complexos, transformar ideias em soluções funcionais e colaborar em projetos que gerem impacto real. Meu objetivo é construir soluções que unam inovação, eficiência e valor.',
  ],
  educationHighlights: [
    { value: 'ADS', label: 'Técnico concluído' },
    { value: 'CC', label: 'Graduação em andamento' },
    { value: '.NET', label: 'Foco em backend' },
    { value: 'React', label: 'Frontend web' },
  ],
  email: 'proglipe@outlook.com',
  profileImage: '/images/profile/fotoperfil.png',
  profileImageAlt: 'Foto de Luis Felipe',
  footerDescription:
    'Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e escaláveis.',
};
