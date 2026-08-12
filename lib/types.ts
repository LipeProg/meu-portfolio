import type { LucideIcon } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  technologies: string[];
}

export type SocialLinkId = 'email' | 'linkedin' | 'github';

export interface SocialLink {
  id: SocialLinkId;
  label: string;
  href: string;
  displayValue: string;
  icon: LucideIcon;
}

export interface EducationHighlight {
  value: string;
  label: string;
}

export interface HeroContent {
  greeting: string;
  title: string;
  specialties: string;
  description: string;
  technologies: string[];
}

export interface PersonalData {
  name: string;
  professionalTitle: string;
  hero: HeroContent;
  metaDescription: string;
  biography: string[];
  educationHighlights: EducationHighlight[];
  email: string;
  profileImage: string;
  profileImageAlt: string;
  footerDescription: string;
}
