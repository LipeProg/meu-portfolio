export const socialLinksStyles = {
  // Contact buttons
  buttonsGroup: 'flex gap-4',
  buttonLink: [
    'rounded-lg border border-border-accent bg-surface/70 px-4 py-2 text-brand-strong',
    'transition-colors hover:bg-surface-soft',
  ].join(' '),

  // Footer icons
  footerGroup: 'flex gap-4',
  footerLink: [
    'rounded-lg border border-border-accent bg-surface/60 p-2 text-muted',
    'transition-colors hover:border-brand hover:text-brand-strong',
  ].join(' '),

  // Hero icons
  heroGroup: 'mt-8 flex gap-6',
  heroLink: 'text-muted transition-colors hover:text-brand-strong',
} as const;
