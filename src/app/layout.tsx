import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jolie Lopes Pavan | Software Engineer & AI Researcher',
  description: 'Portfólio de Jolie Lopes Pavan - Engenharia de Software @ UFG, Pesquisadora em IA Agêntica e Desenvolvedora de Software.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>✨</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="antialiased selection:bg-indigo-500/30 selection:text-indigo-300">
        {children}
      </body>
    </html>
  );
}
