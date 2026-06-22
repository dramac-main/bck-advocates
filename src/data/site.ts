/**
 * SINGLE SOURCE OF TRUTH for firm details.
 *
 * Values are taken from Barnaby, Chitundu & Khunga Advocates' logo, business
 * cards and the build brief. Items the client still needs to confirm or supply
 * are marked `TODO (client)` — nothing here is fabricated.
 *
 * Before go-live, the client must supply / confirm:
 *   • a real Web3Forms access key (see `web3formsKey`) — the enquiry form cannot
 *     deliver email until it is set;
 *   • social-media page URLs (`socials`);
 *   • office hours (`hours` are sensible defaults — confirm);
 *   • PACRA / TPIN registration numbers, if they are to appear in the footer;
 *   • confirmation of the public domain (currently bckadvocates.co.zm).
 */

export const site = {
  name: 'Barnaby, Chitundu & Khunga Advocates',
  shortName: 'BCK Advocates',
  /** Formal style used in schema / legal lines */
  legalName: 'Messrs Barnaby, Chitundu & Khunga Advocates',
  /** Descriptor from the firm's letterhead & business cards */
  tagline: 'Advocates & Commissioners for Oaths',
  /** Footer / closing line */
  promise: 'Counsel you can trust. Advocacy you can rely on.',
  /** Default meta description (used when a page sets none) */
  description:
    'Barnaby, Chitundu & Khunga Advocates (BCK Advocates) is a Lusaka law firm — Advocates of the High Court and Supreme Court of Zambia and Commissioners for Oaths — providing litigation, corporate & commercial, conveyancing, employment, family, debt recovery and notarial services.',

  /** Production domain. Must match `site` in astro.config.mjs. TODO (client): confirm. */
  url: 'https://bckadvocates.co.zm',

  contact: {
    /** Primary landline */
    phone: '+260 211 295 809',
    phoneHref: 'tel:+260211295809',
    /** Mobile (also the WhatsApp line) */
    mobile: '+260 977 371 556',
    mobileHref: 'tel:+260977371556',
    email: 'barnabychitundu@gmail.com',
    /** Secondary email from the business card */
    emailAlt: 'jmchitundu@gmail.com',
    /** Digits only, with country code, for wa.me links */
    whatsappDigits: '260977371556',
    whatsappMessage:
      "Hello BCK Advocates, I'd like to request a consultation.",
  },

  address: {
    street: 'No. 10 Mfukwe Road',
    street2: 'Off Nationalist Road',
    area: 'Burma Residential Area',
    city: 'Lusaka',
    province: 'Lusaka Province',
    postal: 'P.O. Box 542, Post Net Manda Hill, Lusaka',
    country: 'Zambia',
    countryCode: 'ZM',
    /** Used for the Google Maps embed */
    mapQuery: 'Mfukwe Road, Burma Residential Area, Lusaka, Zambia',
    /** Approx. geo for LegalService schema (Burma Residential Area, Lusaka). TODO (client): refine pin. */
    geo: { lat: -15.4015, lng: 28.2952 },
  },

  /** Office hours (display + schema). Sensible defaults — TODO (client): confirm. */
  hours: [
    { days: 'Monday – Friday', time: '08:00 – 17:00' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday & public holidays', time: 'Closed' },
  ],

  socials: {
    facebook: '', // add the page URL when available (leave '' to hide the icon)
    linkedin: '',
    instagram: '',
  },

  /**
   * Web3Forms access key (https://web3forms.com) — drives the contact form.
   * TODO (client): create a free key and paste it here. Until then the form
   * will show a friendly error on submit.
   */
  web3formsKey: 'REPLACE-WITH-WEB3FORMS-ACCESS-KEY',

  /** Public credentials for the footer / trust sections (factual, from the brief). */
  registration: {
    courts: 'Advocates of the High Court & Supreme Court of Zambia',
    laz: 'Members of the Law Association of Zambia',
    oaths: 'Commissioners for Oaths',
  },
} as const;

/** Headline figures for the stats band — capability- & credential-based (no fabricated metrics). */
export const stats: ReadonlyArray<{ value: string; label: string }> = [
  { value: '7', label: 'Practice areas under one roof' },
  { value: '5', label: 'Dedicated legal professionals' },
  { value: 'HC · SC', label: 'Advocates of Zambia’s superior courts' },
  { value: 'LAZ', label: 'Members of the Law Association of Zambia' },
];

/** Build a WhatsApp click-to-chat URL. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsappDigits}`;
  const text = message ?? site.contact.whatsappMessage;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/** Full one-line address string. */
export function fullAddress(): string {
  const a = site.address;
  return [a.street, a.area, a.city, a.country].filter(Boolean).join(', ');
}
