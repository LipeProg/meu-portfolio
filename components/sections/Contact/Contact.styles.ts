export const contactStyles = {
  // Structure
  section: 'bg-surface-accent py-20',
  container: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  content: 'grid gap-12 md:grid-cols-2',

  // Contact information
  contactList: 'space-y-8',
  contactCard: [
    'flex items-start gap-4 rounded-lg border border-border-soft bg-surface p-4',
    'transition-colors hover:border-brand',
  ].join(' '),
  contactIconWrapper: 'mt-2 rounded-lg bg-surface-soft p-3',
  contactIcon: 'text-brand-strong',
  contactTitle: 'mb-1 font-bold text-ink',
  contactValue: 'text-muted',

  // Social links
  socialSection: 'pt-8',
  socialTitle: 'mb-4 font-bold text-ink',

  // Form
  form: 'space-y-4',
  label: 'mb-2 block text-sm font-medium text-ink',
  field: [
    'w-full rounded-lg border border-border-soft bg-surface px-4 py-3',
    'text-ink placeholder-muted/70',
    'transition-colors focus:border-brand-hover focus:outline-none',
  ].join(' '),
  textarea: [
    'w-full resize-none rounded-lg border border-border-soft bg-surface px-4 py-3',
    'text-ink placeholder-muted/70',
    'transition-colors focus:border-brand-hover focus:outline-none',
  ].join(' '),
  submitButton: [
    'flex w-full items-center justify-center gap-2',
    'rounded-lg bg-brand-action px-6 py-3',
    'font-bold text-white transition-colors hover:bg-brand-action-hover',
  ].join(' '),
  successMessage: 'text-center text-sm text-brand-strong',
} as const;
