export const sectionTitleStyles = {
  // Typography
  container: 'mb-16 text-center',
  title: 'mb-4 text-4xl font-bold md:text-5xl',
  highlightedText: [
    'bg-gradient-to-r from-brand-strong to-brand-hover bg-clip-text',
    'text-transparent',
  ].join(' '),
  description: 'mx-auto max-w-2xl text-muted',

  // Decoration
  divider: (hasDescription: boolean) =>
    [
      'mx-auto h-1 w-20 rounded-full',
      'bg-gradient-to-r from-brand-hover to-brand',
      hasDescription ? 'mt-4' : '',
    ]
      .filter(Boolean)
      .join(' '),
} as const;
