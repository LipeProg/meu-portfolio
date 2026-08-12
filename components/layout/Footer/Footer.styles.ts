export const footerStyles = {
  // Structure
  root: 'border-t border-border-accent bg-surface-accent',
  container: 'mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8',
  grid: 'mb-8 grid gap-8 md:grid-cols-3',

  // Brand
  brand: [
    'mb-2 bg-gradient-to-r from-brand-strong to-brand-hover bg-clip-text',
    'text-2xl font-bold text-transparent',
  ].join(' '),
  description: 'text-sm text-muted',

  // Navigation
  heading: 'mb-4 font-bold text-ink',
  navigation: 'space-y-2 text-sm text-muted',
  navigationLink: 'transition-colors',

  // Bottom bar
  divider: [
    'my-8 h-px w-full',
    'bg-gradient-to-r from-transparent via-border-accent to-transparent',
  ].join(' '),
  bottom: [
    'flex flex-col items-center justify-between md:flex-row',
    'text-sm text-muted',
  ].join(' '),
  credit: 'flex items-center gap-1',
  heart: 'fill-brand-hover text-brand-hover',
  technology: 'text-brand-strong',
} as const;
