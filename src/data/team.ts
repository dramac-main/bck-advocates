/**
 * The firm's people. Drives the /team page and the home-page team teaser.
 *
 * IMPORTANT: there are no photographs of these individuals. We deliberately use a
 * tasteful monogram (initials) treatment in brand blue rather than stock or AI
 * faces on real named people. Bios are CLEARLY-MARKED PLACEHOLDERS — the client
 * supplies the real names, qualifications and biographies.
 *
 * Known facts (from the brief) are stated; everything still to come is flagged
 * with `placeholder: true`, which renders a visible "to be confirmed" note.
 */

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  /** Monogram shown on the (photo-free) card */
  initials: string;
  /** Known qualifications, or '' if none confirmed yet */
  credentials: string;
  /** Short professional placeholder — the firm supplies the full biography */
  bio: string;
  /** When true, the card shows a visible "full profile to be confirmed" note */
  placeholder: boolean;
}

export const team: readonly TeamMember[] = [
  {
    slug: 'barnaby',
    name: 'Barnaby',
    role: 'Founding Partner',
    initials: 'B',
    credentials: '',
    bio: 'Barnaby is a Founding and Name Partner of the firm. The full name, qualifications and biography will be published here once confirmed by the firm.',
    placeholder: true,
  },
  {
    slug: 'mwamba-chitundu',
    name: 'Mwamba Chitundu',
    role: 'Managing Partner',
    initials: 'MC',
    credentials: 'LLB · Advocate of the High Court & Supreme Court of Zambia (AHCZ, ASCZ)',
    bio: 'Mwamba Chitundu is the firm’s Managing Partner and an Advocate of the High Court and Supreme Court of Zambia. A fuller professional biography will be added here once confirmed by the firm.',
    placeholder: true,
  },
  {
    slug: 'm-khunga',
    name: 'Mr. M. Khunga',
    role: 'Partner',
    initials: 'MK',
    credentials: '',
    bio: 'Mr. Khunga is a Partner of the firm. The full name, qualifications and biography will be published here once confirmed by the firm.',
    placeholder: true,
  },
  {
    slug: 'thandekile-ndhlovu',
    name: 'Thandekile Ndhlovu',
    role: 'Legal Practitioner',
    initials: 'TN',
    credentials: '',
    bio: 'Thandekile Ndhlovu is a Legal Practitioner with the firm, working alongside the partners across its practice areas. A full profile will be added here once confirmed by the firm.',
    placeholder: true,
  },
  {
    slug: 'mwape-mwape',
    name: 'Mwape Mwape',
    role: 'Legal Intern',
    initials: 'MM',
    credentials: '',
    bio: 'Mwape Mwape is a Legal Intern with the firm, assisting with legal research and client matters. A full profile will be added here once confirmed by the firm.',
    placeholder: true,
  },
];
