import type { Metadata } from 'next';
import SitePage from '../site-page';

export const metadata: Metadata = {
  title: 'AUTO BEJDA — Porsche Spezialisten',
  description: 'Service, Reparatur und Restaurierung klassischer und moderner Porsche Fahrzeuge. Familienbetrieb AUTO BEJDA in Jarošov nad Nežárkou.',
  alternates: { canonical: '/de', languages: { cs: '/', en: '/en', de: '/de' } },
};

export default function GermanPage() { return <SitePage locale="de" />; }
