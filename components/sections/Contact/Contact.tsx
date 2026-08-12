'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import SocialLinks from '@/components/ui/SocialLinks/SocialLinks';
import { personal } from '@/data/personal';
import { getSocialLinks } from '@/data/social';
import type { ContactFormData } from '@/lib/types';
import { contactStyles as styles } from './Contact.styles';

const contactInfo = getSocialLinks(['email', 'linkedin', 'github']);

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
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

    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Title */}
        <SectionTitle
          title="Entre em"
          highlightedText="Contato"
          description="Tem uma ideia ou proposta? Vamos conversar! Ficarei feliz em ouvir você."
        />

        <div className={styles.content}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.contactList}
          >
            {contactInfo.map((info) => (
              <motion.a
                key={info.id}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ x: 10 }}
                className={styles.contactCard}
              >
                <div className={styles.contactIconWrapper}>
                  <info.icon size={24} className={styles.contactIcon} />
                </div>
                <div>
                  <h3 className={styles.contactTitle}>{info.label}</h3>
                  <p className={styles.contactValue}>{info.displayValue}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h3 className={styles.socialTitle}>Siga-me</h3>
              <SocialLinks order={['linkedin', 'github', 'email']} variant="buttons" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className={styles.form}
          >
            <div>
              <label className={styles.label}>Nome</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.field}
                placeholder="Seu nome"
              />
            </div>

            <div>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.field}
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label className={styles.label}>Mensagem</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
                placeholder="Sua mensagem aqui..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={styles.submitButton}
            >
              {submitted ? 'Email preparado' : 'Enviar Mensagem'} <Send size={20} />
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={styles.successMessage}
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
