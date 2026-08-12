import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import TechBadge from '@/components/ui/TechBadge/TechBadge';
import { experiences } from '@/data/experience';
import { pageStyles as styles } from './page.styles';

export default function ExperiencePage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionTitle title="Experiência" highlightedText="Profissional" />

          {experiences.length === 0 ? (
            <p className={styles.emptyState}>
              Nenhuma experiência profissional adicionada até o momento.
            </p>
          ) : (
            <div className={styles.list}>
              {experiences.map((experience) => (
                <article key={experience.id} className={styles.card}>
                  <h2 className={styles.role}>{experience.role}</h2>
                  <p className={styles.organization}>{experience.organization}</p>
                  <p className={styles.period}>{experience.period}</p>
                  <p className={styles.description}>{experience.description}</p>
                  <div className={styles.technologies}>
                    {experience.technologies.map((technology) => (
                      <TechBadge key={technology} technology={technology} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
