import './globals.css';

export const metadata = {
  title: 'Luis Felipe | Portifolio',
  description: 'Portifolio pessoal de Luis Felipe, desenvolvedor em formacao.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
