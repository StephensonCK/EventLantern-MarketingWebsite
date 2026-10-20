// Single source of truth for the two Bizzabo comparison pages.
// Bizzabo claims describe publicly listed information, are worded as such, and carry a date.
// Re-verify every row in `rows` and `sources` before changing AS_OF.

import type { Row, Source } from './comparison-cvent';

export const AS_OF = 'October 2026';

export const TRADEMARK_NOTE =
  'Bizzabo is a trademark of Bizzabo, Inc. EventLantern is not affiliated with or endorsed by Bizzabo. Information about Bizzabo comes from its public pricing page and third-party reviews as of ' +
  AS_OF +
  ' and may have changed. Check with the vendor for current terms.';

export const sources: Source[] = [
  {
    id: 'bizzabo',
    label: 'Bizzabo: published pricing page',
    href: 'https://www.bizzabo.com/pricing',
  },
  {
    id: 'g2',
    label: 'G2: Bizzabo reviews',
    href: 'https://www.g2.com/products/bizzabo/reviews',
  },
  {
    id: 'gartner',
    label: 'Gartner Peer Insights: Bizzabo reviews',
    href: 'https://www.gartner.com/reviews/market/event-marketing-and-management-platforms/vendor/bizzabo',
  },
];

export const rows: Row[] = [
  {
    topic: 'Published pricing',
    eventlantern: 'Free, $49/mo, and $249/mo, with every limit listed.',
    cvent: 'Lists $499 per user per month, or from $17,999 per year, with a 3-user minimum. Many add-ons are priced by quote.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Billing',
    eventlantern: 'Month to month. Cancel anytime.',
    cvent: 'Annual subscription. Single-event purchases are not offered.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Team members',
    eventlantern: 'Team collaboration is included on every plan.',
    cvent: 'Priced per user, with a 3-user minimum.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Virtual and hybrid events',
    eventlantern: 'Included on every plan, with Zoom and Microsoft Teams integrations.',
    cvent: 'Listed as a premium add-on without a public price.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Sponsor and speaker portals',
    eventlantern: 'Speaker management on every plan. Sponsor and exhibitor management on Professional ($249/mo).',
    cvent: 'Listed as premium add-ons without a public price.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Integrations, API, and SSO',
    eventlantern: 'Zoom and Microsoft Teams on every plan. HubSpot, Salesforce, Slack, Zapier and more on Professional. No SSO or API access.',
    cvent: 'Integrations, API, and SSO are listed as premium add-ons without a public price.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Attendee app',
    eventlantern: 'A mobile website that works in any phone browser. No native or custom app.',
    cvent: 'A custom app is listed as a premium add-on without a public price.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Badges and check-in',
    eventlantern: 'QR code check-in and badge printing on every plan.',
    cvent: 'Klik SmartBadge hardware is priced by quote.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Getting started',
    eventlantern: 'Self-serve. Create an event the same day, with no sales call.',
    cvent: 'Talk to Sales or request a demo.',
    sourceIds: ['bizzabo'],
  },
  {
    topic: 'Free plan',
    eventlantern: 'Yes. One active event, up to 50 attendees, no credit card.',
    cvent: 'No free plan listed.',
    sourceIds: ['bizzabo'],
  },
];

export const whereBizzaboFits = [
  {
    title: 'Wearable badge hardware',
    body: 'Bizzabo sells Klik SmartBadge, its own badge hardware. EventLantern covers QR code check-in and badge printing on every plan, but it is not a hardware vendor.',
  },
  {
    title: 'SSO, API access, or a custom app',
    body: 'Bizzabo lists SSO, API access, and a custom app as add-ons. EventLantern does not offer SSO, API access, or a custom app. Attendees use EventLantern as a mobile website. If your program requires any of these, Bizzabo is the better fit.',
  },
  {
    title: 'Programs above 5,000 attendees',
    body: 'EventLantern supports up to 5,000 attendees per event today. If you regularly run larger events, check that limit first.',
  },
  {
    title: 'An established vendor',
    body: 'Bizzabo has been selling to event teams for years. EventLantern is a newer company. If your buying process requires a vendor of that age, Bizzabo meets it and we do not yet.',
  },
];

export const whyLook = [
  {
    title: 'The starting price is five figures a year',
    body: 'Bizzabo lists its platform from $17,999 per year, billed annually, and does not offer single-event purchases. That is hard to justify for one conference or a small program.',
  },
  {
    title: 'Pricing is per user',
    body: 'The listed rate is $499 per user per month with a 3-user minimum, so adding teammates adds cost. EventLantern includes team collaboration on every plan.',
  },
  {
    title: 'Add-ons sit outside the base price',
    body: 'Bizzabo lists virtual events, sponsor and speaker portals, integrations, API, and SSO as premium add-ons, and badge hardware and services are quoted separately.',
  },
  {
    title: 'Customization and training',
    body: 'Reviewers commonly mention limited event-website customization and a learning curve that calls for training. EventLantern is one dashboard that a new organizer can open and use.',
  },
];

export const switching = [
  {
    title: 'Start free alongside your current setup',
    body: 'Create an event on the free plan while your current platform keeps running. Nothing is cancelled until you are ready.',
  },
  {
    title: 'Tell us what you are moving',
    body: 'Share your event size and what you run today, and we will help you plan the move. EventLantern’s built-in importer currently supports Cvent exports, so for Bizzabo we will work out the best route with you.',
  },
  {
    title: 'Switch when it suits you',
    body: 'Because EventLantern is month to month, you can run a single event on it first, then decide.',
  },
];

export const faqs = [
  {
    question: 'What is a good Bizzabo alternative for conferences?',
    answer:
      'EventLantern is an event management platform for corporate conferences, workshops, and meetups. It combines registration, ticketing, scheduling, speakers, sponsors, exhibitors, check-in, virtual and hybrid events, and analytics in one dashboard, with public pricing from free to $249 per month.',
  },
  {
    question: 'How much does Bizzabo cost?',
    answer:
      'Bizzabo’s pricing page lists $499 per user per month, or from $17,999 per year, billed annually with a 3-user minimum. Premium add-ons, badge hardware, and professional services are priced separately or by quote. Check Bizzabo for current terms.',
  },
  {
    question: 'Is there a free alternative to Bizzabo?',
    answer:
      'EventLantern has a free plan for one active event with up to 50 attendees and no credit card required. Paid plans start at $49 per month. Bizzabo does not list a free plan.',
  },
  {
    question: 'How is EventLantern priced compared with Bizzabo?',
    answer:
      'EventLantern publishes three plans: Free at $0, Starter at $49 per month, and Professional at $249 per month, all month to month, with team collaboration included. Stripe charges its own processing fees on paid tickets, and EventLantern adds no markup.',
  },
  {
    question: 'Can EventLantern handle enterprise conferences?',
    answer:
      'EventLantern supports multi-track scheduling, speaker management, sponsor and exhibitor operations, lead capture, role-based collaboration, analytics, and integrations including Salesforce and HubSpot, with up to 5,000 attendees per event on Professional. EventLantern does not offer SSO, API access, or a custom app, and attendees use it as a mobile website. For larger events, or programs that need SSO, API access, a custom app, or wearable badge hardware, Bizzabo may be the better fit.',
  },
  {
    question: 'Is EventLantern as established as Bizzabo?',
    answer:
      'No. Bizzabo has been serving event teams for years. EventLantern is a newer platform. You get a working product today, direct access to the team, and the ability to start free and leave any month.',
  },
  {
    question: 'How do I switch from Bizzabo to EventLantern?',
    answer:
      'Create a free account, set up your event, and run one event to compare. EventLantern’s built-in importer currently supports Cvent exports, so for a move from Bizzabo, use the form on this page and we will help you plan it. EventLantern is month to month, so you can move over gradually.',
  },
];
