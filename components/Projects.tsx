'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Store Manager',
      description: 'Sistema de gestão para ótica com controle de produtos, busca por nome, preço e código, além de interface administrativa para organizar estoque e vendas.',
      technologies: ['React', 'Material UI', 'JavaScript', 'CSS'],
      image: '/Estore.png',
      github: 'https://github.com/LipeProg',
    },
    {
      title: 'JR Informática',
      description: 'Página institucional para apresentar serviços de automação e tecnologia, com navegação simples, chamada de contato e seções voltadas para clientes.',
      technologies: ['React', 'Material UI', 'JavaScript', 'CSS'],
      image: '/jrinfromatica.png',
      github: 'https://github.com/LipeProg',
    },
    {
      title: 'Chat de Apoio para Profissionais',
      description: 'Protótipo de chat inteligente para responder dúvidas técnicas e apoiar profissionais com informações rápidas em um fluxo conversacional.',
      technologies: ['React', 'Node.js', 'API OpenAI'],
      github: 'https://github.com/LipeProg',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi durante minha trajetória acadêmica e profissional.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-gray-700 hover:border-yellow-500 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-950">
                {'image' in project && project.image ? (
                  <Image
                    src={project.image}
                    alt={`Screenshot do projeto ${project.title}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gray-950">
                    <Code2 size={64} className="text-yellow-500" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-yellow-400">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs rounded-full border border-yellow-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    <Code2 size={18} />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <motion.a
            href="https://github.com/LipeProg"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            Ver Mais Projetos <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
