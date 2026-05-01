'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, BriefcaseBusiness, Code2, Mail } from 'lucide-react';

export default function Hero() {
  const socialLinks = [
    { icon: Mail, href: 'mailto:proglipe@outlook.com', label: 'Email' },
    { icon: BriefcaseBusiness, href: 'https://www.linkedin.com/in/luis-felipe-9559982ab/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://github.com/LipeProg', label: 'GitHub' },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black pt-20 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Olá, sou <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Luis Felipe</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-400 mb-6 leading-relaxed"
            >
              Desenvolvedor em formação, focado em criar soluções web funcionais com React, C#, .NET e interfaces bem organizadas.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors"
              >
                Entre em Contato
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold rounded-lg transition-colors"
              >
                Ver Projetos
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-6 mt-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, color: '#fbbf24' }}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <link.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Animated Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-yellow-500/50 bg-gray-900 shadow-2xl shadow-black/50 lg:h-96 lg:w-96">
              <Image
                src="/fotoperfil.png"
                alt="Foto de Luis Felipe"
                fill
                priority
                sizes="(min-width: 1024px) 384px, 320px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-20"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={32} className="text-yellow-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
