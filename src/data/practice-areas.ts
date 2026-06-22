/**
 * The firm's practice areas. This drives BOTH the /practice-areas grid and each
 * /practice-areas/[slug] detail page — edit here once and everything updates.
 *
 * The set follows the build brief (a standard Zambian-advocates offering) and is
 * to be confirmed with the client. `image` is a filename in src/assets/images/;
 * `icon` maps to a key in Icon.astro.
 */

export interface PracticeArea {
  slug: string;
  title: string;
  shortTitle: string;
  icon:
    | 'litigation'
    | 'corporate'
    | 'conveyancing'
    | 'employment'
    | 'family'
    | 'debt'
    | 'oaths';
  image: string;
  /** One-line summary for cards & grids */
  summary: string;
  /** SEO meta description for the detail page */
  metaDescription: string;
  /** Lead paragraph(s) on the detail page */
  intro: string[];
  /** "What we handle" bullet list */
  capabilities: string[];
  /** Who the area is for */
  idealFor: string[];
}

export const practiceAreas: readonly PracticeArea[] = [
  {
    slug: 'litigation-dispute-resolution',
    title: 'Litigation & Dispute Resolution',
    shortTitle: 'Litigation & Disputes',
    icon: 'litigation',
    image: 'practice-litigation.jpg',
    summary:
      'Measured, persuasive advocacy in and out of court — protecting your position when matters are contested.',
    metaDescription:
      'Litigation and dispute resolution in Lusaka, Zambia — commercial litigation in the High Court Commercial Registry, civil disputes, arbitration and mediation by BCK Advocates.',
    intro: [
      'When a dispute arises, you need advocates who combine meticulous preparation with clear, decisive strategy. As Advocates of the High Court and Supreme Court of Zambia, we represent clients in the Subordinate Courts, the High Court — including the Commercial Registry — the Court of Appeal and the Supreme Court.',
      'We assess every matter on its merits and on your commercial objectives. Where a negotiated settlement, arbitration or mediation serves you better than a trial, we pursue it; where the courtroom is unavoidable, we advocate firmly and with care for your cost and reputation.',
    ],
    capabilities: [
      'Commercial & contractual litigation',
      'Civil litigation in the Subordinate & High Courts',
      'Arbitration & mediation (alternative dispute resolution)',
      'Urgent applications, injunctions & interlocutory relief',
      'Appeals to the Court of Appeal & Supreme Court',
      'Pre-action assessment, strategy & risk advice',
    ],
    idealFor: ['Businesses & directors', 'Creditors', 'Individuals', 'Claimants & respondents'],
  },
  {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial Law',
    shortTitle: 'Corporate & Commercial',
    icon: 'corporate',
    image: 'practice-corporate.jpg',
    summary:
      'From incorporation to complex transactions — the legal backbone that lets your business move with confidence.',
    metaDescription:
      'Corporate and commercial law in Zambia — company incorporation at PACRA, commercial contracts, corporate governance, joint ventures and regulatory compliance by BCK Advocates, Lusaka.',
    intro: [
      'Every sound enterprise rests on sound legal foundations. We advise businesses at every stage — from registration and structuring at PACRA to the negotiation of commercial agreements — with counsel that is commercially aware, not merely technically correct.',
      'We help you document agreements clearly, govern your company in line with the Companies Act and meet your regulatory obligations, so you can pursue opportunities with confidence and manage risk before it becomes a dispute.',
    ],
    capabilities: [
      'Company incorporation & structuring (PACRA)',
      'Commercial contracts & agreement drafting',
      'Corporate governance & statutory compliance',
      'Shareholder & joint-venture agreements',
      'Mergers, acquisitions & business transfers',
      'Ongoing transactional & advisory support',
    ],
    idealFor: ['Startups & SMEs', 'Established companies', 'Investors', 'Boards & directors'],
  },
  {
    slug: 'conveyancing-property',
    title: 'Conveyancing & Property Law',
    shortTitle: 'Conveyancing & Property',
    icon: 'conveyancing',
    image: 'practice-conveyancing.jpg',
    summary:
      'Secure conveyancing and property counsel — from a single home to large-scale development.',
    metaDescription:
      'Conveyancing and property law in Zambia — transfers of land, title deeds, caveats, leases, mortgages and land disputes handled with precision by BCK Advocates at the Lands & Deeds Registry.',
    intro: [
      'Property is among the most significant investments our clients make. We handle conveyancing with precision and care — preparing and registering transfers, assignments and leases, and ensuring that title is sound and your interests are fully protected at the Lands & Deeds Registry.',
      'We also protect property interests through the timely lodging of caveats, advise on mortgages and charges, and act on subdivisions, consents to assign and the resolution of land and boundary disputes.',
    ],
    capabilities: [
      'Residential & commercial conveyancing',
      'Transfers, assignments & registration of title',
      'Lodging & withdrawal of caveats',
      'Lease & tenancy agreements',
      'Mortgages, charges & securities',
      'Subdivisions, consents & land disputes',
    ],
    idealFor: ['Home buyers & sellers', 'Developers', 'Landlords & tenants', 'Lenders & investors'],
  },
  {
    slug: 'employment-labour',
    title: 'Employment & Labour Law',
    shortTitle: 'Employment & Labour',
    icon: 'employment',
    image: 'practice-employment.jpg',
    summary:
      'Clear, compliant employment frameworks — and steady representation when workplace disputes arise.',
    metaDescription:
      'Employment and labour law in Zambia — contracts and policies under the Employment Code Act, disciplinary and termination advice, redundancy and representation before the courts by BCK Advocates.',
    intro: [
      'Sound employment practice protects both employers and employees. We draft contracts and policies that are fair, enforceable and fully compliant with the Employment Code Act and related Zambian labour law, helping organisations build stable, well-governed workplaces.',
      'When grievances, disciplinary matters, terminations or redundancies arise, we advise and represent clients pragmatically — resolving matters efficiently while safeguarding relationships, reputations and compliance.',
    ],
    capabilities: [
      'Employment contracts & workplace policies',
      'Disciplinary processes & grievances',
      'Terminations, dismissals & redundancies',
      'Labour relations & collective matters',
      'Statutory & regulatory compliance (NAPSA, Code)',
      'Representation in employment & labour disputes',
    ],
    idealFor: ['Employers', 'HR & people teams', 'Executives', 'Employees'],
  },
  {
    slug: 'family-law',
    title: 'Family Law',
    shortTitle: 'Family',
    icon: 'family',
    image: 'practice-family.jpg',
    summary:
      'Sensitive, discreet guidance through life’s most personal legal matters — with your family’s wellbeing first.',
    metaDescription:
      'Family law in Zambia — divorce and separation, child custody and maintenance, matrimonial property settlements, wills and estate administration handled discreetly by BCK Advocates in Lusaka.',
    intro: [
      'Family matters call for a steady hand and a compassionate ear. We guide clients through divorce, separation and related proceedings with discretion and sensitivity, keeping the focus on protecting what matters most — particularly the welfare of children.',
      'Whether resolving custody and maintenance, dividing matrimonial property, or preparing wills and administering estates, we work toward fair, durable outcomes — through agreement wherever possible, and firm representation where necessary.',
    ],
    capabilities: [
      'Divorce & judicial separation',
      'Child custody, access & maintenance',
      'Matrimonial property settlements',
      'Spousal maintenance',
      'Wills, probate & estate administration',
      'Mediation & amicable resolution',
    ],
    idealFor: ['Spouses & partners', 'Parents', 'Families', 'Executors & beneficiaries'],
  },
  {
    slug: 'debt-recovery',
    title: 'Debt Recovery & Commercial Recoveries',
    shortTitle: 'Debt Recovery',
    icon: 'debt',
    image: 'practice-debt.jpg',
    summary:
      'Firm, efficient recovery of what you are owed — from first demand to enforcement of judgment.',
    metaDescription:
      'Debt recovery and commercial recoveries in Zambia — demand letters, summary and default judgment, garnishee and writs of execution, and statutory demands by BCK Advocates, Lusaka.',
    intro: [
      'Unpaid debts tie up cash flow and management time. We pursue recoveries firmly and cost-effectively, beginning with well-judged demand correspondence and structured negotiation, and escalating to court only where it is the right commercial decision.',
      'Where proceedings are necessary, we move efficiently — obtaining default and summary judgment where appropriate and enforcing it through writs of execution, garnishee proceedings and, for corporate debtors, statutory demands and winding-up.',
    ],
    capabilities: [
      'Letters of demand & negotiated settlement',
      'Default & summary judgment',
      'Writs of execution & garnishee proceedings',
      'Statutory demands & winding-up of debtor companies',
      'Enforcement & realisation of securities',
      'Portfolio & bulk recoveries for institutions',
    ],
    idealFor: ['Banks & lenders', 'Businesses & suppliers', 'Landlords', 'Institutional creditors'],
  },
  {
    slug: 'commissioner-for-oaths',
    title: 'Commissioner for Oaths & Notarial Services',
    shortTitle: 'Oaths & Notarial',
    icon: 'oaths',
    image: 'practice-oaths.jpg',
    summary:
      'Administering oaths and attesting documents with authority — for use in Zambia and abroad.',
    metaDescription:
      'Commissioner for Oaths and notarial services in Lusaka, Zambia — affidavits, statutory declarations, oaths and affirmations, and the attestation and certification of documents by BCK Advocates.',
    intro: [
      'As Commissioners for Oaths, the partners are authorised to administer oaths and affirmations and to take affidavits and statutory declarations — a service often needed at short notice and always handled promptly and properly.',
      'We attest, witness and certify documents for use before courts, government departments, banks and institutions, both within Zambia and, where required, for use abroad — ensuring each document is executed in the correct form.',
    ],
    capabilities: [
      'Administering oaths & affirmations',
      'Affidavits & sworn statements',
      'Statutory declarations',
      'Attesting & witnessing signatures',
      'Certifying true copies of documents',
      'Authentication of documents for local & foreign use',
    ],
    idealFor: ['Individuals', 'Businesses', 'Applicants & deponents', 'Banks & institutions'],
  },
];

/** Look up a single practice area by its slug. */
export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((a) => a.slug === slug);
}
