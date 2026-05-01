'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Mail, Send } from 'lucide-react';

const CONTACT_EMAIL = 'proglipe@outlook.com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contato pelo portfólio - ${formData.name}`);
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
    },
    {
      icon: BriefcaseBusiness,
      title: 'LinkedIn',
      value: 'linkedin.com/in/luis-felipe-9559982ab',
      href: 'https://www.linkedin.com/in/luis-felipe-9559982ab/',
    },
    {
      icon: Code2,
      title: 'GitHub',
      value: 'github.com/LipeProg',
      href: 'https://github.com/LipeProg',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
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
            Entre em <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem uma ideia ou proposta? Vamos conversar! Ficarei feliz em ouvir você.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.title}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-colors"
              >
                <div className="mt-2 p-3 bg-yellow-500/20 rounded-lg">
                  <info.icon size={24} className="text-yellow-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{info.title}</h3>
                  <p className="text-gray-400">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h3 className="font-bold text-white mb-4">Siga-me</h3>
              <div className="flex gap-4">
                {[
                  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luis-felipe-9559982ab/' },
                  { name: 'GitHub', url: 'https://github.com/LipeProg' },
                  { name: 'Email', url: `mailto:${CONTACT_EMAIL}` },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-yellow-500 text-yellow-500 rounded-lg hover:bg-yellow-500/10 transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                placeholder="Sua mensagem aqui..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {submitted ? 'Email preparado' : 'Enviar Mensagem'} <Send size={20} />
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center text-sm"
              >
                Seu aplicativo de email foi aberto com a mensagem preenchida.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
