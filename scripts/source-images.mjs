/**
 * Source the firm's atmosphere & remaining practice imagery from Pexels
 * (Pexels License — free for commercial use, no attribution required).
 *
 * Each photo ID below was downloaded and VISUALLY VERIFIED to suit its slot and
 * the Zambian / African market before being added here. Processing is light and
 * natural — resize + mozjpeg only, no heavy duotone/filters — per the brief.
 *
 * Run: node scripts/source-images.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'src', 'assets', 'images');
mkdirSync(out, { recursive: true });

// pexels id -> [destination, target max width]  (all verified African/legal imagery)
const jobs = [
  [7875834, 'hero-home.jpg', 2200], // confident African woman advocate in her office
  [5669619, 'hero-generic.jpg', 1800], // scales of justice + gavel — neutral legal backdrop
  [37129341, 'about-firm.jpg', 1700], // four African women advocates (wigs / professional)
  [34659065, 'about-story.jpg', 1600], // African barrister in wig & robe (studio portrait)
  [8111866, 'contact-office.jpg', 1800], // stylish law-firm office interior
  [4427430, 'team-group.jpg', 2000], // a law firm team in a panelled office
  [6077447, 'practice-oaths.jpg', 1600], // gavel + signing a document — notarial / oaths
];

for (const [id, dest, w] of jobs) {
  try {
    const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`;
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await sharp(buf)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(out, dest));
    console.log(`  ok ${dest}`);
  } catch (e) {
    console.warn(`  ! ${dest}: ${e.message}`);
  }
}
console.log('done');
