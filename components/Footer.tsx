'use client';

import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Heart, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Code2, href: 'https://github.com/LipeProg', label: 'GitHub' },
    { icon: BriefcaseBusiness, href: 'https://www.linkedin.com/in/luis-felipe-9559982ab/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:proglipe@outlook.com', label: 'Email' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
              Luis Felipe
            </h3>
            <p className="text-gray-400 text-sm">
              Desenvolvedor Full-Stack apaixonado por criar soluções inovadoras e escaláveis.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-white mb-4">Navegação</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { label: 'Sobre', href: '#about' },
                { label: 'Projetos', href: '#projects' },
                { label: 'Contato', href: '#contact' },
                { label: 'GitHub', href: 'https://github.com/LipeProg' },
              ].map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#fbbf24' }}
                    className="transition-colors"
                  >
                    {link.label}
                  </motion.a>
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
            <h4 className="font-bold text-white mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#fbbf24' }}
                  className="p-2 border border-gray-700 rounded-lg text-gray-400 hover:border-yellow-500 transition-colors"
                  title={link.label}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p className="flex items-center gap-1">
            Feito com <Heart size={16} className="text-yellow-500 fill-yellow-500" /> por Luis Felipe © {currentYear}
          </p>
          <p>
            Desenvolvido com <span className="text-yellow-500">Next.js</span>, <span className="text-yellow-500">TypeScript</span> e <span className="text-yellow-500">Tailwind CSS</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
