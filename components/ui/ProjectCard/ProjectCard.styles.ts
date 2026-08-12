export const projectCardStyles = {
  // Card
  card: [
    'group overflow-hidden rounded-lg border border-border-soft',
    'bg-surface',
    'transition-all duration-300 hover:border-brand hover:shadow-soft',
  ].join(' '),

  // Media
  media: 'relative h-48 overflow-hidden bg-surface-soft',
  image: 'object-cover transition-transform duration-300 group-hover:scale-105',
  imageFallback: 'flex h-full items-center justify-center bg-surface-soft',
  fallbackIcon: 'text-brand-strong',

  // Content
  content: 'p-6',
  title: 'mb-3 text-xl font-bold text-brand-strong',
  description: 'mb-4 text-sm leading-relaxed text-muted',
  technologies: 'mb-6 flex flex-wrap gap-2',

  // Repository link
  links: 'flex gap-4',
  repositoryLink: [
    'flex items-center gap-2 text-muted',
    'transition-colors hover:text-brand-strong',
  ].join(' '),
  repositoryLabel: 'text-sm',
} as const;
