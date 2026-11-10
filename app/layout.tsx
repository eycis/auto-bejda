import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AUTO BEJDA — Specialisté na Porsche',
  description: 'Servis, opravy a renovace klasických i moderních vozů Porsche. Rodinná firma AUTO BEJDA v Jarošově nad Nežárkou. Náhradní díly a motorsport.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="cs"><body>{children}</body></html>;
}
