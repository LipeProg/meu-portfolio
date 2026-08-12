'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import TechBadge from '@/components/ui/TechBadge/TechBadge';
import type { Project } from '@/lib/types';
import { projectCardStyles as styles } from './ProjectCard.styles';

interface ProjectCardProps {
  project: Project;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className={styles.card}
    >
      <div className={styles.media}>
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot do projeto ${project.title}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className={styles.image}
          />
        ) : (
          <div className={styles.imageFallback}>
            <Code2 size={64} className={styles.fallbackIcon} />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((technology) => (
            <TechBadge key={technology} technology={technology} />
          ))}
        </div>

        <div className={styles.links}>
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={styles.repositoryLink}
            >
              <Code2 size={18} />
              <span className={styles.repositoryLabel}>GitHub</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
