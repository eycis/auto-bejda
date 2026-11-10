# AUTO BEJDA

Firemní web v češtině. Next.js App Router, React, TypeScript, responzivní CSS. E-shop zatím není součástí webu.

## Lokální spuštění

```sh
npm ci
npm run dev
```

Kontroly: `npm run typecheck` a `npm run build`. Produkční server: `npm start`.

## Vercel

Importujte tento adresář jako projekt Next.js. Build command `npm run build`, výstupní adresář ponechte výchozí. Projekt nevyžaduje proměnné prostředí. Doménu autobejda.cz připojte až po kontrole nové verze; DNS stávajícího webu nebylo změněno.

## Obsah a fotografie

Kontakty, adresa provozovny a zaměření: https://www.autobejda.cz/
Historie (od roku 1993): https://www.autobejda.cz/ostatn%C3%AD/o-n%C3%A1s

Fotografie byly staženy z veřejných článků o firmě podle zadání uživatelky. Instagram firmy nebyl spolehlivě identifikován. Původní galerie firmy odmítala stahování obrázků (HTTP 403).

- `hero.jpg`: https://www.motormix.cz/gt2-motorsport-vojtech-bejda-st-agatha-2024 — v článku uvedeno „Foto: Auto Bejda“.
- `story.jpg`, `gallery-2.jpg`: https://porsche-club.cz/post/auto-bejda-s-r-o-specializovany-servis-porsche — renovované Porsche na výstavě.
- `gallery-1.jpg`, `gallery-3.jpg`: https://www.motormix.cz/vojtech-bejda-vir-2023-preview — v článku uvedeno „Foto: GT2 Motorsport“.

Veřejná dostupnost fotografií sama neprokazuje licenci k dalšímu použití; oprávnění k publikaci těchto snímků musí mít provozovatel webu.

Písma Barlow Condensed a DM Sans se načítají z Google Fonts; při jejich nedostupnosti se použijí systémová písma. Web nemá analytiku, formulář, ukládání cookies ani databázi. Kontakt funguje přes telefon a e-mail, galerie přes nativní dialog (Escape zavírá).
