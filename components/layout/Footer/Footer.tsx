'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import { navigation } from '@/data/navigation';
import { personal } from '@/data/personal';
import { footerStyles as styles } from './Footer.styles';

const MotionLink = motion.create(Link);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.brand}>
              {personal.name}
            </h3>
            <p className={styles.description}>
              {personal.footerDescription}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.heading}>Navegação</h4>
            <ul className={styles.navigation}>
              {navigation.map((link) => (
                <li key={link.label}>
                  <MotionLink
                    href={link.href}
                    whileHover={{ x: 5, color: 'var(--color-brand-strong)' }}
                    className={styles.navigationLink}
                  >
                    {link.label}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className={styles.heading}>Conecte-se</h4>
            <SocialLinks order={['github', 'linkedin', 'email']} variant="footer" />
          </motion.div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={styles.bottom}
        >
          <p className={styles.credit}>
            Feito com <Heart size={16} className={styles.heart} /> por {personal.name} © {currentYear}
          </p>
          <p>
            Desenvolvido com <span className={styles.technology}>Next.js</span>, <span className={styles.technology}>TypeScript</span> e <span className={styles.technology}>Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
