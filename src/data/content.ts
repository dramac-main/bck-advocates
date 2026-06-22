/**
 * Narrative content for Home & About — mission, vision, who-we-are, values,
 * differentiators and the firm's way of working. Firm voice, capability-based
 * (no fabricated history, awards or client names).
 */

export const mission =
  'To provide clear, dependable and ethical legal counsel that protects our clients’ interests and helps them resolve matters with confidence.';

export const vision =
  'To be a trusted name at the Zambian Bar — recognised for sound judgment, diligent advocacy and the highest standards of professional integrity.';

export const whoWeAre = {
  heading: 'A trusted firm of advocates in Lusaka',
  paragraphs: [
    'Barnaby, Chitundu & Khunga Advocates is a Lusaka-based law firm of Advocates of the High Court and Supreme Court of Zambia and Commissioners for Oaths, acting for businesses, institutions and individuals across a broad range of legal matters.',
    'Our approach is straightforward: understand the matter fully, advise clearly, and act diligently in our clients’ best interests — whether at the negotiating table, the registry or the courtroom.',
  ],
  callout:
    'We believe legal counsel should be clear, dependable and grounded in genuine care for the outcome — the standard we hold ourselves to on every matter.',
};

export interface Value {
  icon: 'shield' | 'award' | 'document' | 'lock' | 'handshake' | 'scales';
  title: string;
  text: string;
}

export const coreValues: readonly Value[] = [
  {
    icon: 'shield',
    title: 'Integrity',
    text: 'We hold to the highest ethical standards, dealing honestly and transparently with clients, the courts and one another.',
  },
  {
    icon: 'award',
    title: 'Excellence',
    text: 'We bring meticulous preparation, sound research and careful drafting to every matter, large or small.',
  },
  {
    icon: 'document',
    title: 'Diligence',
    text: 'We are thorough and dependable, attending to detail and to deadlines so that nothing is left to chance.',
  },
  {
    icon: 'lock',
    title: 'Confidentiality',
    text: 'We treat every client’s affairs in the strictest confidence, as our professional duty requires.',
  },
  {
    icon: 'handshake',
    title: 'Client Commitment',
    text: 'We listen, we explain, and we keep our clients’ objectives at the centre of the advice we give.',
  },
  {
    icon: 'scales',
    title: 'Sound Judgment',
    text: 'We give candid, considered counsel — telling clients not only what they may do, but what they should.',
  },
];

export interface Differentiator {
  icon: 'scales' | 'briefcase' | 'target' | 'handshake' | 'lock' | 'clock';
  title: string;
  text: string;
}

export const whyChooseUs: readonly Differentiator[] = [
  {
    icon: 'scales',
    title: 'Advocates of the Superior Courts',
    text: 'Advocates of the High Court and Supreme Court of Zambia, able to see your matter through at every level.',
  },
  {
    icon: 'briefcase',
    title: 'Breadth Under One Roof',
    text: 'Seven practice areas in a single firm, so you have one trusted partner whatever the matter.',
  },
  {
    icon: 'target',
    title: 'Practical, Commercial Advice',
    text: 'Counsel tied to your objectives — not just technically correct, but genuinely useful in the real world.',
  },
  {
    icon: 'handshake',
    title: 'Partner-Led Attention',
    text: 'Your matter is handled with care and seniority, with direct access to the people doing the work.',
  },
  {
    icon: 'lock',
    title: 'Discreet & Professional',
    text: 'Confidentiality and the highest professional standards are observed on every matter we accept.',
  },
  {
    icon: 'clock',
    title: 'Responsive & Accessible',
    text: 'Prompt communication and a firm that is easy to reach — with Commissioners for Oaths on hand.',
  },
];

export interface ApproachStep {
  n: string;
  title: string;
  text: string;
}

export const approach: readonly ApproachStep[] = [
  {
    n: '01',
    title: 'Understand',
    text: 'We take the time to understand your objectives, the facts and the wider context of your matter.',
  },
  {
    n: '02',
    title: 'Advise',
    text: 'We give clear, candid advice on your position, your options and the likely road ahead.',
  },
  {
    n: '03',
    title: 'Plan',
    text: 'We agree a practical strategy and a sensible budget with you before we act.',
  },
  {
    n: '04',
    title: 'Act',
    text: 'We act diligently — drafting, negotiating, registering or litigating as the matter demands.',
  },
  {
    n: '05',
    title: 'Keep You Informed',
    text: 'We keep you updated at every stage, in plain language, through to resolution.',
  },
];

export const valueCommitments: readonly string[] = [
  'Clear, candid advice',
  'Transparent fee arrangements',
  'Diligent, careful work',
  'Confidentiality, always',
  'Prompt communication',
];
