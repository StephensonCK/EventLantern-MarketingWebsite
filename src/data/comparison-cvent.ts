// Single source of truth for the two Cvent comparison pages.
// Cvent claims describe publicly reported information, are worded as such, and carry a date.
// Re-verify every row in `rows` and `sources` before changing AS_OF.

export const AS_OF = 'October 2026';

export const TRADEMARK_NOTE =
  'Cvent is a trademark of Cvent, Inc. EventLantern is not affiliated with or endorsed by Cvent. Information about Cvent comes from public sources and third-party reports as of ' +
  AS_OF +
  ' and may have changed. Check with the vendor for current terms.';

export interface Source {
  id: string;
  label: string;
  href: string;
}

export const sources: Source[] = [
  {
    id: 'docket',
    label: 'Docket: Cvent pricing, license fees and per-registrant costs',
    href: 'https://docket.io/resources/research/cvent-pricing',
  },
  {
    id: 'inevent',
    label: 'InEvent: Cvent pricing guide',
    href: 'https://inevent.com/blog/tech-and-trends/cvent-pricing-guide.html',
  },
  {
    id: 'engine',
    label: 'Engine: Cvent pricing and contract terms',
    href: 'https://engine.com/blog/cvent-pricing',
  },
  {
    id: 'capterra',
    label: 'Capterra: Cvent Registration pricing model',
    href: 'https://www.capterra.com/p/10017520/Cvent-Registration/reviews/',
  },
];

export interface Row {
  topic: string;
  eventlantern: string;
  cvent: string;
  /** Source ids backing the Cvent column. Empty means "not publicly listed". */
  sourceIds: string[];
}

export const rows: Row[] = [
  {
    topic: 'Pricing',
    eventlantern: 'Public: Free, $49/mo, $249/mo.',
    cvent: 'Quote-based. Cvent does not publish prices.',
    sourceIds: ['docket', 'capterra'],
  },
  {
    topic: 'Pricing structure',
    eventlantern: 'One flat monthly plan. Limits are listed on the pricing page.',
    cvent: 'Reported as an annual license plus a per-registrant fee, with implementation on top.',
    sourceIds: ['docket', 'capterra'],
  },
  {
    topic: 'Estimated cost',
    eventlantern: '$0 to $249 per month. Stripe processing fees apply to paid tickets, with no EventLantern markup.',
    cvent: 'Third-party estimates run roughly $20K to $79K+ per year, plus about $7 to $12 per registrant per event. These are estimates, not Cvent prices.',
    sourceIds: ['docket', 'inevent'],
  },
  {
    topic: 'Contract',
    eventlantern: 'Month to month. Cancel anytime.',
    cvent: 'Reported as 1 to 3 year terms with auto-renewal.',
    sourceIds: ['docket', 'engine'],
  },
  {
    topic: 'Getting started',
    eventlantern: 'Self-serve. Create an event the same day, with no sales call.',
    cvent: 'Sales conversation required for a quote. Reported implementation fees and admin training.',
    sourceIds: ['docket'],
  },
  {
    topic: 'Moving your data',
    eventlantern: 'Built-in Import From Cvent tool for attendees, sessions and agenda, speakers, and sponsors and exhibitors, with automatic column matching.',
    cvent: 'Data export options are set by Cvent. Check with the vendor.',
    sourceIds: [],
  },
  {
    topic: 'Free plan',
    eventlantern: 'Yes. One active event, up to 50 attendees, no credit card.',
    cvent: 'No public free plan listed.',
    sourceIds: [],
  },
  {
    topic: 'Registration, scheduling, speakers, check-in',
    eventlantern: 'Included on every plan.',
    cvent: 'Available, with modules and packaging set per contract.',
    sourceIds: [],
  },
  {
    topic: 'Sponsors, exhibitors, lead capture',
    eventlantern: 'Included on Professional ($249/mo).',
    cvent: 'Available, with modules and packaging set per contract.',
    sourceIds: [],
  },
  {
    topic: 'Virtual and hybrid events',
    eventlantern: 'Included on every plan, with Zoom and Microsoft Teams integrations.',
    cvent: 'Available, with modules and packaging set per contract.',
    sourceIds: [],
  },
];

export const whereCventFits = [
  {
    title: 'Very large or global programs',
    body: 'If you run events with tens of thousands of attendees across many regions and languages, Cvent has years of experience at that scale. EventLantern handles up to 5,000 attendees per event today.',
  },
  {
    title: 'A long vendor track record',
    body: 'Cvent is an established vendor with a large customer base and a long procurement history. EventLantern is a newer company. If your buying process requires a vendor of that age, Cvent meets it and we do not yet.',
  },
  {
    title: 'Deep enterprise procurement needs',
    body: 'If you need custom contracts, dedicated account management, or a bundled suite beyond events, Cvent is built for that buying model.',
  },
];

export const whyLook = [
  {
    title: 'You cannot see the price',
    body: 'Cvent does not publish pricing, so you need a sales conversation to learn what an event will cost. EventLantern publishes every plan.',
  },
  {
    title: 'Costs add up in layers',
    body: 'Third-party reports describe an annual license, per-registrant fees, and implementation costs. That is hard to justify for a single conference or a small program.',
  },
  {
    title: 'Long contracts',
    body: 'Multi-year, auto-renewing terms are commonly reported. EventLantern is month to month.',
  },
  {
    title: 'Setup takes time',
    body: 'Reviewers commonly mention training and a learning curve for new administrators. EventLantern is one dashboard that a new organizer can open and use.',
  },
];

export const switching = [
  {
    title: 'Start free alongside your current setup',
    body: 'Create an event on the free plan while your current platform keeps running. Nothing is cancelled until you are ready.',
  },
  {
    title: 'Import your Cvent event',
    body: 'Admins see an Import From Cvent button on the Events page. Export your attendees, sessions and agenda, speakers, and sponsors and exhibitors from Cvent, upload the files, and EventLantern matches Cvent column names automatically.',
  },
  {
    title: 'Switch when it suits you',
    body: 'Because EventLantern is month to month, you can run a single event on it first, then decide.',
  },
];

export const importSteps = [
  { title: 'Event basics', body: 'Enter the event name, dates, timezone, and venue.' },
  { title: 'Export from Cvent', body: 'Follow the step-by-step export instructions for attendees, sessions and agenda, speakers, and sponsors and exhibitors. Each has a sample file to download.' },
  { title: 'Upload files', body: 'CSV or Excel, up to 10 MB and 5,000 rows per file.' },
  { title: 'Match columns', body: 'Cvent column names are matched automatically. You can correct any match.' },
  { title: 'Review', body: 'See how many of each type will come in and preview the first rows. Rows that will be skipped, such as those with no email, are listed, and attendees with the same email are combined.' },
  { title: 'Import', body: 'EventLantern creates the event as a draft and links you to it.' },
];

export const importNotes = [
  'No emails are sent. Imported attendees, speakers, and sponsors are not notified.',
  'Sponsor and exhibitor tiers are created at $0, so set your prices afterward.',
  'Plan limits apply. Sponsors and exhibitors need a paid plan that includes them, and the event counts toward your plan’s event limit.',
  'Cvent’s exports do not include speaker photos, so add those afterward.',
  'All or nothing. If an import fails partway, nothing is saved.',
];

export const faqs = [
  {
    question: 'What is a good Cvent alternative for conferences?',
    answer:
      'EventLantern is an event management platform for corporate conferences, workshops, and meetups. It combines registration, ticketing, scheduling, speakers, sponsors, exhibitors, check-in, virtual and hybrid events, and analytics in one dashboard, with public pricing from free to $249 per month.',
  },
  {
    question: 'Is there a free alternative to Cvent?',
    answer:
      'EventLantern has a free plan for one active event with up to 50 attendees and no credit card required. Paid plans start at $49 per month. Cvent does not list a public free plan.',
  },
  {
    question: 'How much does Cvent cost?',
    answer:
      'Cvent does not publish its prices, so a quote is required. Third-party sources describe a model of an annual license plus per-registrant fees and implementation, with estimates of roughly $20K to $79K+ per year and about $7 to $12 per registrant per event. These are estimates from competitors and review sites, not Cvent prices.',
  },
  {
    question: 'How is EventLantern priced compared with Cvent?',
    answer:
      'EventLantern publishes three plans: Free at $0, Starter at $49 per month, and Professional at $249 per month, all month to month. Stripe charges its own processing fees on paid tickets, and EventLantern adds no markup.',
  },
  {
    question: 'Can EventLantern handle enterprise conferences?',
    answer:
      'EventLantern supports multi-track scheduling, speaker management, sponsor and exhibitor operations, lead capture, role-based collaboration, analytics, and integrations including Salesforce and HubSpot, with up to 5,000 attendees per event on Professional. For events beyond that scale, or programs that need a long-established vendor, Cvent may be the better fit.',
  },
  {
    question: 'Is EventLantern as established as Cvent?',
    answer:
      'No. Cvent is a long-established vendor with a large customer base. EventLantern is a newer platform. You get a working product today, direct access to the team, and the ability to start free and leave any month.',
  },
  {
    question: 'How do I switch from Cvent to EventLantern?',
    answer:
      'Use the Import From Cvent button on the Events page. Export your attendees, sessions and agenda, speakers, and sponsors and exhibitors from Cvent, upload them as CSV or Excel files (up to 10 MB and 5,000 rows each), review the column matches, and EventLantern creates the event as a draft. No emails are sent to imported attendees. Speaker photos are not included in Cvent exports, so add those afterward.',
  },
];
