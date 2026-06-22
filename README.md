# Barnaby, Chitundu & Khunga Advocates — website

Marketing website for **BCK Advocates**, a Lusaka, Zambia law firm
(Advocates & Commissioners for Oaths). Static site, built with Astro.

## Stack

- **Astro 6** (static output, `build.format: 'directory'` → clean URLs)
- **Tailwind CSS v4** (CSS-first `@theme` in `src/styles/global.css`)
- **TypeScript** (strict)
- Self-hosted variable fonts — **Source Serif 4** (display) + **Public Sans** (body)
- `@astrojs/sitemap`, `LegalService` JSON-LD, Open Graph + Twitter cards
- Pure CSS + vanilla JS for all motion (no animation libraries)

## Commands

```bash
npm install        # NOTE: package.json pins vite to 7.3.5 (overrides) — required for Tailwind v4
npm run dev        # http://localhost:4321
npm run build      # → dist/  (clean: 13 pages)
npm run preview    # serve the production build
npm run check      # astro check (0 errors)

node scripts/gen-assets.mjs      # regenerate favicons + og-image
node scripts/source-images.mjs   # re-fetch/optimise the Pexels imagery
node scripts/shot.mjs <url> <out.png> [w] [h] [viewport]   # CDP screenshot (needs Edge on :9222)
```

## Content is data-driven

Everything lives in `src/data/` — edit there once and the whole site updates:

- `site.ts` — firm name, contact, address, hours, credentials, stats
- `practice-areas.ts` — the 7 practice areas + their detail pages
- `team.ts` — the people (photo-free monogram treatment)
- `content.ts` — mission, vision, values, differentiators, approach

## Before go-live — client TODOs

Search the codebase for `TODO (client)`. The key items (all in `src/data/site.ts`):

1. **Web3Forms key** — set `web3formsKey` with a free key from web3forms.com, or the
   contact form cannot deliver email.
2. **Domain** — confirm `url` here and `site` in `astro.config.mjs` (currently
   `bckadvocates.co.zm`).
3. **Office hours** — `hours` are sensible defaults; confirm.
4. **Socials** — add Facebook / LinkedIn / Instagram URLs (blank = hidden).
5. **Map pin** — `address.geo` is approximate for Burma Residential Area; refine.
6. **Team** — names, qualifications and **photographs** are placeholders. Cards use a
   tasteful initials monogram in brand blue until real bios/photos are supplied (no
   stock or AI faces are used on real named people). Confirm Barnaby's & Mr. Khunga's
   full names. Update `src/data/team.ts`; add photos via a `photo` field + `TeamCard`.

## Imagery

All photography is license-free **Pexels** stock (Pexels License — commercial use, no
attribution required), chosen to suit each practice and the Zambian/African market.
Replace with the firm's own photography when available (`src/assets/images/`).

## Brand

- Primary blue `#11689B`, navy `#0E456B` / deep `#0A3251`, light grey `#EBECED`,
  charcoal `#2B2B2B`.
- The header/footer lockup rebuilds the firm's serif wordmark in HTML, anchored by the
  "BCK" lettermark tile (also the favicon). To use a pure wordmark with no tile, pass
  `tile={false}` to `<Logo />`.

## Deploy

Static — deploy `dist/` anywhere.

- **Apache / cPanel**: `public/.htaccess` is included (clean URLs, 404, compression,
  caching, security headers). Uncomment the HTTPS block once the domain & SSL are live.
- **Vercel / Netlify**: zero-config static deploy of the build output.

---

Designed & built by Dramac Marketing Agency.
