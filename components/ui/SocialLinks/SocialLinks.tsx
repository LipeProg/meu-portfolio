'use client';

import { motion } from 'framer-motion';
import { getSocialLinks } from '@/data/social';
import type { SocialLinkId } from '@/lib/types';
import { socialLinksStyles as styles } from './SocialLinks.styles';

interface SocialLinksProps {
  order: SocialLinkId[];
  variant: 'hero' | 'footer' | 'buttons';
}

export default function SocialLinks({ order, variant }: SocialLinksProps) {
  const links = getSocialLinks(order);

  if (variant === 'buttons') {
    return (
      <div className={styles.buttonsGroup}>
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.buttonLink}
          >
            {link.label}
          </motion.a>
        ))}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={styles.footerGroup}>
        {links.map((link) => (
          <motion.a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, color: 'var(--color-brand-strong)' }}
            className={styles.footerLink}
            title={link.label}
          >
            <link.icon size={20} />
          </motion.a>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className={styles.heroGroup}
    >
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          whileHover={{ scale: 1.1, color: 'var(--color-brand-strong)' }}
          className={styles.heroLink}
        >
          <link.icon size={28} />
        </motion.a>
      ))}
    </motion.div>
  );
}
