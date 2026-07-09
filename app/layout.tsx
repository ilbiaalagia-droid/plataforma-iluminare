import './globals.css';

export const metadata = {
  title: 'Central Iluminare',
  description: 'Sistema de gestão da Iluminare',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
