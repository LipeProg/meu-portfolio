import { socialUrls } from '@/data/social';
import type { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    title: 'E-Store Manager',
    description:
      'Sistema de gestão para ótica com controle de produtos, busca por nome, preço e código, além de interface administrativa para organizar estoque e vendas.',
    technologies: ['React', 'Material UI', 'JavaScript', 'CSS'],
    image: '/images/projects/Estore.png',
    github: socialUrls.github,
  },
  {
    title: 'JR Informática',
    description:
      'Página institucional para apresentar serviços de automação e tecnologia, com navegação simples, chamada de contato e seções voltadas para clientes.',
    technologies: ['React', 'Material UI', 'JavaScript', 'CSS'],
    image: '/images/projects/jrinfromatica.png',
    github: socialUrls.github,
  },
  {
    title: 'Chat de Apoio para Profissionais',
    description:
      'Protótipo de chat inteligente para responder dúvidas técnicas e apoiar profissionais com informações rápidas em um fluxo conversacional.',
    technologies: ['React', 'Node.js', 'API OpenAI'],
    github: socialUrls.github,
  },
];
