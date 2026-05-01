'use client';

import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['C#', '.NET', 'Node.js', 'APIs REST'] },
    { category: 'Dados e Ferramentas', items: ['SQL Server', 'Git', 'Docker', 'VS Code'] },
    { category: 'Soft Skills', items: ['Comunicação', 'Trabalho em equipe', 'Resolução de problemas', 'Aprendizado contínuo'] },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 bg-black">
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
            Sobre <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              Olá! Meu nome é Luis Felipe, sou desenvolvedor em formação com experiência em projetos acadêmicos 
              e práticos. Atualmente curso Ciência da Computação e já concluí um curso técnico em Análise e 
              Desenvolvimento de Sistemas.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Tenho interesse especial em C# e .NET para backend, além de experiência em frontend com React. 
              Estou sempre em busca de aprender novas tecnologias e expandir minhas habilidades, com foco em evoluir 
              também na área de ciência de dados.
            </p>

            <p className="text-gray-300 leading-relaxed">
              Gosto de resolver problemas complexos, transformar ideias em soluções funcionais e colaborar em projetos 
              que gerem impacto real. Meu objetivo é construir soluções que unam inovação, eficiência e valor.
            </p>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-6 px-6 py-2 border-2 border-yellow-500 text-yellow-500 rounded-lg font-semibold hover:bg-yellow-500/10 transition-colors"
            >
              Saiba Mais
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: 'ADS', label: 'Técnico concluído' },
              { number: 'CC', label: 'Graduação em andamento' },
              { number: '.NET', label: 'Foco em backend' },
              { number: 'React', label: 'Frontend web' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition-colors"
              >
                <p className="text-3xl font-bold text-yellow-500 mb-2">{stat.number}</p>
                <p className="text-gray-400">{stat.label}</p>
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
          <h3 className="text-2xl font-bold mb-8 text-center">Habilidades</h3>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            {skills.map((skillGroup) => (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg border border-gray-700 hover:border-yellow-500 transition-all"
              >
                <h4 className="text-yellow-500 font-bold mb-4">{skillGroup.category}</h4>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-gray-300 text-sm flex items-center">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
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
