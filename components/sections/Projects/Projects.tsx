'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ProjectCard from '@/components/ui/ProjectCard/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { projects } from '@/data/projects';
import { socialUrls } from '@/data/social';
import { projectsStyles as styles } from './Projects.styles';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <SectionTitle
          title="Meus"
          highlightedText="Projetos"
          description="Conheça alguns dos projetos que desenvolvi durante minha trajetória acadêmica e profissional."
        />

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.grid}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className={styles.allProjectsWrapper}
        >
          <motion.a
            href={socialUrls.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.allProjectsLink}
          >
            Ver Mais Projetos <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
