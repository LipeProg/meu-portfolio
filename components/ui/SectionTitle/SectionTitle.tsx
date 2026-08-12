'use client';

import { motion } from 'framer-motion';
import { sectionTitleStyles as styles } from './SectionTitle.styles';

interface SectionTitleProps {
  title: string;
  highlightedText: string;
  description?: string;
}

export default function SectionTitle({
  title,
  highlightedText,
  description,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={styles.container}
    >
      <h2 className={styles.title}>
        {title}{' '}
        <span className={styles.highlightedText}>
          {highlightedText}
        </span>
      </h2>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.divider(Boolean(description))}></div>
    </motion.div>
  );
}
