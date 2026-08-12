export const heroStyles = {
  // Structure
  section: [
    'flex min-h-screen items-center justify-center pb-10 pt-24 sm:pt-28',
    'bg-gradient-to-b from-canvas via-surface-soft to-canvas',
  ].join(' '),
  container: 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
  content: [
    'grid items-center gap-14',
    'md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-20',
  ].join(' '),
  textContent: 'relative z-10',

  // Introduction
  greeting: 'mb-4 text-sm font-semibold tracking-wide text-brand-strong sm:text-base',
  highlightedName: 'font-bold',
  title: [
    'max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-ink',
    'sm:text-6xl lg:text-7xl',
  ].join(' '),
  specialties: [
    'mt-4 bg-gradient-to-r from-brand-strong via-brand-hover to-brand bg-clip-text',
    'text-xl font-semibold text-transparent sm:text-2xl',
  ].join(' '),
  description: [
    'mt-6 max-w-2xl text-base leading-relaxed text-muted',
    'sm:text-lg',
  ].join(' '),

  // Actions
  actions: 'mt-8 flex flex-col gap-3 sm:flex-row sm:items-center',
  primaryAction: [
    'inline-flex items-center justify-center gap-2 rounded-lg bg-brand-action px-7 py-3',
    'font-bold text-white shadow-soft',
    'transition-colors hover:bg-brand-action-hover',
  ].join(' '),
  secondaryAction: [
    'inline-flex items-center justify-center gap-2 rounded-lg',
    'border border-border-accent bg-surface px-7 py-3',
    'font-bold text-brand-strong shadow-soft',
    'transition-colors hover:border-brand hover:bg-surface-soft',
  ].join(' '),

  // Technologies
  technologies: [
    'mt-7 flex flex-wrap items-center gap-y-2',
    'text-sm font-medium text-muted',
  ].join(' '),
  technology: 'flex items-center',
  technologySeparator: 'mx-2 text-brand-hover',

  // Profile image
  imageColumn: 'relative flex items-center justify-center md:justify-end',
  imageVisual: [
    'relative isolate h-64 w-64',
    'sm:h-80 sm:w-80 lg:h-[22rem] lg:w-[22rem]',
  ].join(' '),
  primaryShape: [
    'absolute -inset-5 -z-20 rotate-3 rounded-[2.5rem]',
    'bg-surface-accent',
  ].join(' '),
  secondaryShape: [
    'absolute -bottom-8 -right-8 -z-10 h-32 w-32 rounded-full',
    'bg-complementary/50 blur-sm',
  ].join(' '),
  imageFrame: [
    'relative h-full w-full overflow-hidden rounded-[2rem]',
    'border border-border-soft bg-surface shadow-soft',
  ].join(' '),
  image: 'object-cover',

  // Scroll indicator
  scrollIndicator: 'mt-12 flex justify-center md:mt-16',
  scrollIcon: 'text-brand-strong',
} as const;
