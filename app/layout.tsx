import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/layout/Footer/Footer';
import Navbar from '@/components/layout/Navbar/Navbar';
import { personal } from '@/data/personal';
import { layoutStyles as styles } from './layout.styles';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `${personal.name} | ${personal.professionalTitle}`,
  description: personal.metaDescription,
  keywords: ['desenvolvedor', 'full-stack', 'react', 'next.js', 'c#', '.net'],
  authors: [{ name: personal.name }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f7fff9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={styles.html}>
      <body className={`${inter.className} ${styles.body}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
