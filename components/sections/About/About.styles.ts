export const aboutStyles = {
  // Structure
  section: 'bg-surface py-20',
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  introduction: 'mb-16 grid items-center gap-12 md:grid-cols-2',

  // Biography
  biography: 'space-y-4',
  paragraph: 'leading-relaxed text-ink',
  contactLink: [
    'mt-6 inline-block rounded-lg border-2 border-border-accent bg-surface-accent px-6 py-2',
    'font-semibold text-brand-strong',
    'transition-colors hover:bg-surface-soft',
  ].join(' '),

  // Education highlights
  highlights: 'grid grid-cols-2 gap-4',
  highlightCard: [
    'rounded-lg border border-border-soft p-6',
    'bg-surface',
    'transition-colors hover:border-brand',
  ].join(' '),
  highlightValue: 'mb-2 text-3xl font-bold text-brand-strong',
  highlightLabel: 'text-muted',

  // Skills
  skillsTitle: 'mb-8 text-center text-2xl font-bold',
  skillsGrid: 'grid gap-6 md:grid-cols-4',
  skillCard: [
    'rounded-lg border border-border-soft p-6',
    'bg-surface',
    'transition-all hover:border-brand',
  ].join(' '),
  skillCategory: 'mb-4 font-bold text-brand-strong',
  skillList: 'space-y-2',
  skillItem: 'flex items-center text-sm text-muted',
  skillMarker: 'mr-2 h-2 w-2 rounded-full bg-brand-hover',
} as const;
