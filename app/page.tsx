import About from '@/components/sections/About/About';
import Contact from '@/components/sections/Contact/Contact';
import Hero from '@/components/sections/Hero/Hero';
import Projects from '@/components/sections/Projects/Projects';
import { pageStyles as styles } from './page.styles';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
