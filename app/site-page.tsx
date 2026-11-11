import Gallery from './ui';
import { Locale, translations } from './translations';

const Arrow = () => <span aria-hidden="true">↗</span>;
const localePaths: Record<Locale, string> = { cs: '/', en: '/en', de: '/de' };

export default function SitePage({ locale }: { locale: Locale }) {
  const t = translations[locale];
  return <div lang={locale}>
    <header className="header">
      <a className="wordmark" href={localePaths[locale]} aria-label={t.homeLabel}>AUTO BEJDA<span>{t.specialist}</span></a>
      <nav aria-label={t.navLabel}><a href="#sluzby">{t.nav[0]}</a><a href="#pribeh">{t.nav[1]}</a><a href="#galerie">{t.nav[2]}</a></nav>
      <nav className="language-switcher" aria-label="Language / Jazyk / Sprache">{(['cs', 'en', 'de'] as Locale[]).map(lang => <a key={lang} href={localePaths[lang]} hrefLang={lang} lang={lang} aria-current={lang === locale ? 'page' : undefined}>{lang === 'cs' ? 'CZ' : lang.toUpperCase()}</a>)}</nav>
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title"><img className="hero-image" src="/images/hero.jpg" alt="Auto Bejda Porsche Cayman race car" fetchPriority="high" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow"><span className="red-line" /> {t.heroKicker}</p><h1 id="hero-title">{t.heroTitle[0]}<br />{t.heroTitle[1]}<em>{t.heroTitle[2]}</em></h1><p className="hero-description">{t.heroText[0]}<br />{t.heroText[1]}</p><a className="button" href="#kontakt">{t.heroCta} <Arrow /></a></div><div className="hero-bottom"><span>{t.heroClaim}</span><a href="#sluzby">{t.discover} <span aria-hidden="true">↓</span></a></div><span className="hero-side" aria-hidden="true">{t.side}</span></section>
      <section className="intro wrap" id="sluzby"><div><p className="eyebrow">{t.servicesKicker}</p><h2>{t.servicesTitle[0]}<br />{t.servicesTitle[1]}</h2></div><p className="intro-copy">{t.servicesIntro}</p></section>
      <section className="services wrap" aria-label={t.nav[0]}>{t.services.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</section>
      <section className="story" id="pribeh"><div className="story-photo"><img src="/images/story.jpg" alt="Restored classic Porsche body and engine on display" loading="lazy" /><span>{t.storyPhoto}</span></div><div className="story-content"><p className="eyebrow">{t.storyKicker}</p><h2>{t.storyTitle[0]}<br />{t.storyTitle[1]}</h2><p>{t.story[0]}</p><p>{t.story[1]}</p><a className="text-link" href="#kontakt">{t.meet} <Arrow /></a><div className="story-note"><strong>1993</strong><span>{t.since[0]}<br />{t.since[1]}</span></div></div></section>
      <section className="generations wrap"><p className="eyebrow">{t.generationsKicker}</p><div className="generation-grid"><article><span>{t.classic[0]}</span><h3>{t.classic[1]}<br />{t.classic[2]}</h3><p>{t.classic[3]}</p><a className="text-link" href="tel:+420608283328">Pavel Bejda · +420 608 283 328 <Arrow /></a></article><article><span>{t.modern[0]}</span><h3>{t.modern[1]}<br />{t.modern[2]}</h3><p>{t.modern[3]}</p><a className="text-link" href="tel:+420728407374">Vojtěch Bejda · +420 728 407 374 <Arrow /></a></article></div></section>
      <section className="gallery-section wrap" id="galerie"><div className="section-top"><div><p className="eyebrow">{t.galleryKicker}</p><h2>{t.galleryTitle}</h2></div><span className="gallery-hint">{t.galleryHint} <Arrow /></span></div><Gallery locale={locale} /></section>
      <section className="contact" id="kontakt"><div className="wrap"><p className="eyebrow">{t.contactKicker}</p><div className="contact-heading"><h2>{t.contactTitle[0]}<br /><em>{t.contactTitle[1]}</em></h2><p>{t.contactText[0]}<br />{t.contactText[1]}</p></div><div className="contact-grid"><article><span>{t.classicContact}</span><h3>Pavel Bejda</h3><a className="phone" href="tel:+420608283328">+420 608 283 328</a><a href="mailto:pavel.bejda@autobejda.cz">pavel.bejda@autobejda.cz <Arrow /></a></article><article><span>{t.modernContact}</span><h3>Ing. Vojtěch Bejda</h3><a className="phone" href="tel:+420728407374">+420 728 407 374</a><a href="mailto:vojtech.bejda@autobejda.cz">vojtech.bejda@autobejda.cz <Arrow /></a></article><article><span>{t.where}</span><h3>Jarošov nad Nežárkou</h3><p>Jarošov nad Nežárkou 41<br />378 41 · {t.newSite}</p><a href="https://www.google.com/maps/search/?api=1&query=Auto+Bejda+Jaro%C5%A1ov+nad+Ne%C5%BE%C3%A1rkou+41" target="_blank" rel="noopener noreferrer">{t.directions} <Arrow /></a></article></div></div></section>
    </main>
    <footer className="wrap"><a className="wordmark" href={localePaths[locale]}>AUTO BEJDA<span>{t.footer}</span></a><span>© {new Date().getFullYear()} AUTO BEJDA s.r.o.</span><a href="#">{t.top} ↑</a></footer>
  </div>;
}
