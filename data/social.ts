import { BriefcaseBusiness, Code2, Mail } from 'lucide-react';
import { personal } from '@/data/personal';
import type { SocialLink, SocialLinkId } from '@/lib/types';

export const socialUrls = {
  email: `mailto:${personal.email}`,
  linkedin: 'https://www.linkedin.com/in/luis-felipe-9559982ab/',
  github: 'https://github.com/LipeProg',
} as const;

const socialLinksById: Record<SocialLinkId, SocialLink> = {
  email: {
    id: 'email',
    label: 'Email',
    href: socialUrls.email,
    displayValue: personal.email,
    icon: Mail,
  },
  linkedin: {
    id: 'linkedin',
    label: 'LinkedIn',
    href: socialUrls.linkedin,
    displayValue: 'linkedin.com/in/luis-felipe-9559982ab',
    icon: BriefcaseBusiness,
  },
  github: {
    id: 'github',
    label: 'GitHub',
    href: socialUrls.github,
    displayValue: 'github.com/LipeProg',
    icon: Code2,
  },
};

export const getSocialLinks = (order: SocialLinkId[]) =>
  order.map((id) => socialLinksById[id]);
