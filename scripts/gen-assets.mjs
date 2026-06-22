/**
 * Brand-asset pipeline for BCK Advocates:
 *  1. Rasterise favicon.svg → favicon-32.png (transparent) + apple-touch-icon.png.
 *  2. Build a 1200×630 og-image.jpg — a branded navy card with the BCK wordmark.
 *
 * Run:  node scripts/gen-assets.mjs
 * Requires `sharp` (already present via Astro's image pipeline).
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');

const BRAND = '#11689b';
const NAVY = '#0e456b';
const NAVY_DEEP = '#0a3251';
const CLOUD = '#ebeced';
const SERIF = "'Source Serif 4','Source Serif 4 Variable',Georgia,'Times New Roman',serif";
const SANS = "'Public Sans','Public Sans Variable',Segoe UI,Arial,sans-serif";

// --- favicons from the SVG lettermark ---
const svg = join(publicDir, 'favicon.svg');
if (existsSync(svg)) {
  await sharp(svg, { density: 384 }).resize(32, 32).png().toFile(join(publicDir, 'favicon-32.png'));
  // apple-touch: flatten onto brand blue so the rounded-corner transparency fills in
  await sharp(svg, { density: 384 })
    .resize(180, 180)
    .flatten({ background: BRAND })
    .png()
    .toFile(join(publicDir, 'apple-touch-icon.png'));
  console.log('favicon-32.png + apple-touch-icon.png written.');
} else {
  console.warn('favicon.svg not found — skipped favicons.');
}

// --- branded OG image (1200×630) ---
const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY_DEEP}"/>
    </linearGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect x="0" y="0" width="1200" height="8" fill="${BRAND}"/>

  <!-- BCK tile -->
  <g transform="translate(90,150)">
    <path d="M0 0 H92 A42 42 0 0 1 134 42 V134 H42 A42 42 0 0 1 0 92 Z" fill="${BRAND}"/>
    <text x="67" y="74" text-anchor="middle" dominant-baseline="central" font-family="${SERIF}" font-size="54" font-weight="700" letter-spacing="-1" fill="${CLOUD}">BCK</text>
  </g>

  <!-- Wordmark -->
  <text x="92" y="360" font-family="${SERIF}" font-size="62" font-weight="700" fill="#ffffff">Barnaby, Chitundu &amp; Khunga</text>
  <text x="94" y="410" font-family="${SANS}" font-size="23" font-weight="600" letter-spacing="6" fill="#9fc9e8">ADVOCATES &amp; COMMISSIONERS FOR OATHS</text>

  <!-- Divider + credentials -->
  <rect x="94" y="452" width="64" height="3" fill="${BRAND}"/>
  <text x="94" y="505" font-family="${SANS}" font-size="25" fill="rgba(255,255,255,0.82)">Advocates of the High Court &amp; Supreme Court of Zambia</text>
  <text x="94" y="540" font-family="${SANS}" font-size="25" fill="rgba(255,255,255,0.82)">Litigation · Corporate · Conveyancing · Family · Notarial — Lusaka</text>
</svg>`;

await sharp(Buffer.from(ogSvg)).jpeg({ quality: 88, mozjpeg: true }).toFile(join(publicDir, 'og-image.jpg'));
console.log('og-image.jpg written.');
