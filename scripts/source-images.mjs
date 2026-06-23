/**
 * Source ALL of the firm's imagery from Pexels (Pexels License — free for
 * commercial use, no attribution required).
 *
 * Every photo ID below was downloaded and VISUALLY VERIFIED to (a) be African /
 * Zambian-appropriate, (b) reflect this male-led firm (predominantly men; the
 * only women appear in the family-law and property contexts), and (c) be
 * top-notch for its slot. NONE of these photos are shared with other client
 * sites. Processing is light & natural — resize + mozjpeg, no heavy filters.
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

// pexels id -> [destination, target max width]
const jobs = [
  // --- hero & atmosphere ---
  [34850167, 'hero-home.jpg', 1600], // distinguished senior African barrister (wig & robe) — gravitas
  [5669619, 'hero-generic.jpg', 1800], // scales of justice + gavel — neutral legal backdrop
  [5583960, 'about-firm.jpg', 1500], // African advocate on the phone in a high-rise office
  [34659065, 'about-story.jpg', 1500], // African barrister in wig & robe (studio portrait)
  [6077644, 'contact-office.jpg', 1800], // African advocate reviewing legal documents
  [9301197, 'team-group.jpg', 1700], // four African men collaborating in a modern office
  // --- practice areas ---
  [32800772, 'practice-litigation.jpg', 1400], // young African barrister, dramatic studio portrait
  [9301745, 'practice-corporate.jpg', 1500], // two African men in a business discussion
  [8293778, 'practice-conveyancing.jpg', 1500], // handover of house keys (property transfer)
  [5058925, 'practice-employment.jpg', 1400], // African professional, welcoming handshake in office
  [29801855, 'practice-family.jpg', 1400], // African family (parents & child) in traditional attire
  [5060564, 'practice-debt.jpg', 1400], // African professional reviewing accounts / a ledger
  [6077447, 'practice-oaths.jpg', 1500], // gavel + signing a document — notarial / oaths
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
