import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Luis Felipe | Desenvolvedor Full-Stack',
  description: 'Portfólio profissional de Luis Felipe, desenvolvedor em formação com foco em React, C#, .NET e soluções web.',
  keywords: ['desenvolvedor', 'full-stack', 'react', 'next.js', 'c#', '.net'],
  authors: [{ name: 'Luis Felipe' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1e1e1e',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
