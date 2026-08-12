export const pageStyles = {
  main: 'min-h-screen bg-canvas pt-16',
  section: 'bg-surface py-20',
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  emptyState: [
    'mx-auto max-w-2xl rounded-lg border border-border-soft bg-surface-soft p-8',
    'text-center text-muted',
  ].join(' '),
  list: 'grid gap-6',
  card: 'rounded-lg border border-border-soft bg-surface p-6',
  role: 'text-xl font-bold text-ink',
  organization: 'mt-1 font-medium text-brand-strong',
  period: 'mt-1 text-sm text-muted',
  description: 'mt-4 leading-relaxed text-muted',
  technologies: 'mt-5 flex flex-wrap gap-2',
} as const;
