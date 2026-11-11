import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'AUTO BEJDA — Porsche Specialists',
  description: 'Service, repairs and restoration of classic and modern Porsche cars. Family-run AUTO BEJDA workshop in Jarošov nad Nežárkou.',
  alternates: { canonical: '/en', languages: { cs: '/', en: '/en', de: '/de' } },
};

export default function EnglishPage() { return <SitePage locale="en" />; }
