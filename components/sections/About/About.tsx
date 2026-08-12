'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { personal } from '@/data/personal';
import { skills } from '@/data/skills';
import { aboutStyles as styles } from './About.styles';

const MotionLink = motion.create(Link);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <SectionTitle title="Sobre" highlightedText="Mim" />

        <div className={styles.introduction}>
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.biography}
          >
            {personal.biography.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <MotionLink
              href="/contato"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.contactLink}
            >
              Saiba Mais
            </MotionLink>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.highlights}
          >
            {personal.educationHighlights.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className={styles.highlightCard}
              >
                <p className={styles.highlightValue}>{stat.value}</p>
                <p className={styles.highlightLabel}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.skillsTitle}>Habilidades</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.skillsGrid}
          >
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={styles.skillCard}
              >
                <h4 className={styles.skillCategory}>{skillGroup.category}</h4>
                <ul className={styles.skillList}>
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className={styles.skillItem}>
                      <span className={styles.skillMarker}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
