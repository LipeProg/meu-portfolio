import type { NavigationItem } from '@/lib/types';

export const navigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Experiência', href: '/experiencia' },
  { label: 'Projetos', href: '/projetos' },
  { label: 'Escritos', href: '/escritos' },
  { label: 'Contato', href: '/contato' },
];

export const mainNavigation = navigation.filter((item) => item.href !== '/');
