'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ExternalLink } from 'lucide-react';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import { personal } from '@/data/personal';
import { socialUrls } from '@/data/social';
import { heroStyles as styles } from './Hero.styles';

const MotionLink = motion.create(Link);

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={styles.textContent}
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={styles.greeting}
            >
              {personal.hero.greeting}{' '}
              <span className={styles.highlightedName}>{personal.name}</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className={styles.title}
            >
              {personal.hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className={styles.specialties}
            >
              {personal.hero.specialties}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className={styles.description}
            >
              {personal.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className={styles.actions}
            >
              <MotionLink
                href="/projetos"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={styles.primaryAction}
              >
                Ver projetos
                <ArrowRight size={18} aria-hidden="true" />
              </MotionLink>

              <motion.a
                href={socialUrls.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={styles.secondaryAction}
              >
                <ExternalLink size={18} aria-hidden="true" />
                GitHub
              </motion.a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={styles.technologies}
              aria-label="Principais tecnologias"
            >
              {personal.hero.technologies.map((technology, index) => (
                <li key={technology} className={styles.technology}>
                  {technology}
                  {index < personal.hero.technologies.length - 1 && (
                    <span className={styles.technologySeparator} aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </motion.ul>

            <SocialLinks order={['email', 'linkedin']} variant="hero" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className={styles.imageColumn}
          >
            <div className={styles.imageVisual}>
              <div className={styles.primaryShape} aria-hidden="true"></div>
              <div className={styles.secondaryShape} aria-hidden="true"></div>

              <div className={styles.imageFrame}>
                <Image
                  src={personal.profileImage}
                  alt={personal.profileImageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 352px, (min-width: 768px) 320px, 256px"
                  className={styles.image}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className={styles.scrollIndicator}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={32} className={styles.scrollIcon} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
