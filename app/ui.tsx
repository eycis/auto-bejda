'use client';
import { useRef } from 'react';
import type { Locale } from './translations';
const photos = [
  { src: '/images/gallery-1.jpg', alt: 'Závodní Porsche týmu GT2 Motorsport' },
  { src: '/images/gallery-2.jpg', alt: 'Renovovaná karoserie Porsche na výstavě' },
  { src: '/images/gallery-3.jpg', alt: 'Porsche s označením Auto Bejda na startu závodu' },
];
const labels = {
  cs: { enlarge: 'Zvětšit fotografii', enlarged: 'Zvětšená fotografie', close: 'Zavřít' },
  en: { enlarge: 'Enlarge photo', enlarged: 'Enlarged photo', close: 'Close' },
  de: { enlarge: 'Foto vergrößern', enlarged: 'Vergrößertes Foto', close: 'Schließen' },
};

export default function Gallery({ locale }: { locale: Locale }) {
  const label = labels[locale];
  const dialog = useRef<HTMLDialogElement>(null);
  const selected = useRef<HTMLImageElement>(null);
  function open(src: string, alt: string) {
    if (selected.current) { selected.current.src = src; selected.current.alt = alt; }
    dialog.current?.showModal();
  }
  return <><div className="gallery-grid">{photos.map((p, i) => <button key={p.src} className="gallery-photo" onClick={() => open(p.src, p.alt)} aria-label={`${label.enlarge} ${i + 1}`}><img src={p.src} alt={p.alt} loading="lazy" /><span>0{i + 1}<span aria-hidden="true">↗</span></span></button>)}</div><dialog ref={dialog} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }} aria-label={label.enlarged}><button className="dialog-close" onClick={() => dialog.current?.close()} aria-label={label.close}>{label.close} ×</button><img ref={selected} alt="" /></dialog></>;
}
