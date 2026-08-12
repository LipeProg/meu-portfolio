import SectionTitle from '@/components/ui/SectionTitle/SectionTitle';
import { pageStyles as styles } from './page.styles';

export default function WritingsPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <SectionTitle title="Meus" highlightedText="Escritos" />
          <p className={styles.emptyState}>Esta área receberá escritos futuramente.</p>
        </div>
      </section>
    </main>
  );
}
