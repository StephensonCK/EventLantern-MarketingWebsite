// Keyword-targeted solution pages. Every claim here must match the feature list and plan matrix
// in src/data/pricing.ts and the home page; do not add capabilities the product does not ship.

export interface Solution {
  slug: string;
  /** Short label for navigation and cross-links. */
  label: string;
  /** <title> tag. */
  title: string;
  /** Meta description, around 150 to 160 characters. */
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  intro: string;
  sections: { title: string; body: string }[];
  points: { title: string; description: string }[];
  plan: string;
  faqs: { question: string; answer: string }[];
}

export const solutions: Solution[] = [
  {
    slug: 'conference-management-software',
    label: 'Conference management',
    title: 'Conference Management Software | EventLantern',
    description:
      'Conference management software that handles multi-track scheduling, speakers, registration, check-in, sponsors, and analytics in one place. Start free.',
    eyebrow: 'Conference management software',
    h1: 'Conference management software that keeps the whole program in view.',
    lede: 'Build the agenda, manage speakers, sell tickets, check people in, and report on the result without stitching five tools together.',
    intro:
      'A conference is a program, a roster of speakers, a ticket queue, a sponsor list, and a front desk, all moving at once. EventLantern keeps them in one event context so a change to a session, a room, or a speaker shows up everywhere it matters.',
    sections: [
      {
        title: 'One agenda, many tracks',
        body: 'Build a multi-track schedule with rooms and time slots, attach speakers to sessions, and publish it on your event website and in the attendee portal.',
      },
      {
        title: 'Registration that matches your event',
        body: 'Custom registration forms, free and paid tickets, promo codes, and Stripe Connect payments, with attendee records you can filter, export, and track against payments.',
      },
      {
        title: 'A calm front desk',
        body: 'QR code check-in through a dedicated portal, plus badge printing with QR codes and your branding, so arrival day runs from the same data you planned with.',
      },
    ],
    points: [
      { title: 'Session scheduling', description: 'Multi-track agenda builder with rooms and time slots.' },
      { title: 'Speaker management', description: 'Speaker profiles with bios, photos, and social links.' },
      { title: 'Registration and ticketing', description: 'Custom forms, paid and free tickets, promo codes, and Stripe.' },
      { title: 'QR code check-in', description: 'A dedicated check-in portal for the front desk.' },
      { title: 'Badge printing', description: 'Professional badges with QR codes and your branding.' },
      { title: 'Reports and analytics', description: 'Registration trends, revenue tracking, and session popularity.' },
    ],
    plan: 'Session scheduling, speaker management, check-in, and badge printing are included on the Free plan, which covers one active event with up to 50 attendees. Larger conferences move to Starter (up to 500 attendees) or Professional (up to 5,000 attendees per event).',
    faqs: [
      {
        question: 'What is conference management software?',
        answer:
          'Conference management software helps organizers plan and run a conference: building the schedule, managing speakers, selling tickets, checking attendees in, working with sponsors, and measuring results. EventLantern covers each of those in one connected platform.',
      },
      {
        question: 'Can EventLantern handle multi-track conferences?',
        answer:
          'Yes. The agenda builder supports multiple tracks with rooms and time slots, and speakers attach directly to sessions.',
      },
      {
        question: 'How many attendees can a conference have?',
        answer:
          'The Free plan supports up to 50 attendees, Starter up to 500 per event, and Professional up to 5,000 per event.',
      },
    ],
  },
  {
    slug: 'event-registration-software',
    label: 'Event registration and ticketing',
    title: 'Event Registration & Ticketing Software | EventLantern',
    description:
      'Event registration software with custom forms, free and paid tickets, promo codes, and Stripe payments. No EventLantern markup on ticket sales. Start free.',
    eyebrow: 'Event registration software',
    h1: 'Event registration and ticketing without a platform fee on top.',
    lede: 'Collect the right information, sell free and paid tickets, and track every attendee and payment, with no EventLantern markup on ticket processing.',
    intro:
      'Registration is the first thing your attendees see and the data the rest of your event depends on. EventLantern ties the form, the ticket, the payment, and the attendee record together, so what you collect at sign-up is what you use at check-in and in your reports.',
    sections: [
      {
        title: 'Forms built around your event',
        body: 'Create custom registration forms that ask for what your event actually needs, for conferences, workshops, and meetups alike.',
      },
      {
        title: 'Paid and free tickets, with promo codes',
        body: 'Offer free and paid tickets, apply promo codes, and take card payments through Stripe Connect. Standard Stripe fees apply and go to Stripe; EventLantern adds no markup.',
      },
      {
        title: 'Attendee records you can work with',
        body: 'View, filter, and export attendees with payment tracking, then feed the same records into check-in, badges, and email campaigns.',
      },
    ],
    points: [
      { title: 'Custom registration forms', description: 'Collect exactly the details your event requires.' },
      { title: 'Paid and free tickets', description: 'Sell tickets or run free registration from the same setup.' },
      { title: 'Promo codes', description: 'Offer discounts on paid registration.' },
      { title: 'Stripe Connect', description: 'Card payments go through Stripe, with no EventLantern markup.' },
      { title: 'Attendee management', description: 'View, filter, and export attendees with payment tracking.' },
      { title: 'Attendee portal', description: 'Self-service access to sessions and registration.' },
    ],
    plan: 'Registration forms and the attendee portal are included on the Free plan. Paid registration, promo codes, and Stripe Connect are available on Starter ($49/mo) and Professional ($249/mo).',
    faqs: [
      {
        question: 'Does EventLantern take a cut of ticket sales?',
        answer:
          'No. EventLantern adds no markup on ticket processing. Standard Stripe fees of 2.9% + $0.30 per card transaction apply and are paid to Stripe.',
      },
      {
        question: 'Can I run free registration?',
        answer: 'Yes. Free registration is available on every plan, including Free.',
      },
      {
        question: 'Which plans include paid tickets and promo codes?',
        answer: 'Paid registration, promo codes, and Stripe Connect are included on Starter and Professional.',
      },
    ],
  },
  {
    slug: 'virtual-and-hybrid-event-software',
    label: 'Virtual and hybrid events',
    title: 'Virtual & Hybrid Event Software | EventLantern',
    description:
      'Run virtual and hybrid events from one platform: Zoom and Microsoft Teams integration, online registration, and attendance reporting on every plan.',
    eyebrow: 'Virtual and hybrid event software',
    h1: 'Virtual and hybrid event software on every plan.',
    lede: 'Run fully online events or blend in-person and remote attendance in one event, with Zoom and Microsoft Teams connected.',
    intro:
      'A hybrid event has two audiences and one program. EventLantern keeps registration, sessions, and reporting in a single event, so remote and in-room attendees are managed together instead of in separate tools.',
    sections: [
      {
        title: 'Online and in-person in one event',
        body: 'Blend in-person and virtual experiences in one event, with remote attendance and virtual networking alongside your on-site program.',
      },
      {
        title: 'Zoom and Microsoft Teams, connected',
        body: 'Generate Zoom meeting links for virtual and hybrid sessions, embed a join button on your public event page, and pull attendance reports afterward. Microsoft Teams is supported too.',
      },
      {
        title: 'Reporting across both audiences',
        body: 'Track registration trends, session popularity, and drop-off rates so you can see how remote and in-room attendees engaged.',
      },
    ],
    points: [
      { title: 'Virtual events', description: 'Fully online events with streaming, virtual networking, and remote attendance.' },
      { title: 'Hybrid events', description: 'Blend in-person and virtual experiences in one event.' },
      { title: 'Zoom integration', description: 'Auto-create meetings and embed a join button.' },
      { title: 'Microsoft Teams integration', description: 'Connect Teams for virtual sessions.' },
      { title: 'Surveys and feedback', description: 'Surveys linked to sessions or events.' },
      { title: 'Session trends', description: 'Popularity, attendance patterns, and drop-off rates.' },
    ],
    plan: 'Virtual and hybrid events, plus Zoom and Microsoft Teams integration, are included on every plan, including Free.',
    faqs: [
      {
        question: 'Does EventLantern support hybrid events?',
        answer: 'Yes. Virtual, in-person, and hybrid events are supported on every plan.',
      },
      {
        question: 'Which video tools does EventLantern integrate with?',
        answer: 'Zoom and Microsoft Teams are integrated and available on every plan.',
      },
    ],
  },
  {
    slug: 'sponsor-and-exhibitor-management-software',
    label: 'Sponsor and exhibitor management',
    title: 'Sponsor & Exhibitor Management Software | EventLantern',
    description:
      'Manage sponsors and exhibitors in one place: CRM pipeline, tiers, deliverables, portals, lead capture, and sponsor ROI dashboards. Built for event teams.',
    eyebrow: 'Sponsor and exhibitor management',
    h1: 'Sponsor and exhibitor management that proves its value.',
    lede: 'Track the pipeline, deliver on every commitment, give partners their own portal, and show sponsors the return.',
    intro:
      'Sponsors and exhibitors fund the event and judge it by results. EventLantern gives your team a pipeline and deliverables to work from, and gives partners a portal and ROI data to see what they got.',
    sections: [
      {
        title: 'A sponsor pipeline, not a spreadsheet',
        body: 'Run a CRM pipeline with tiers and deliverables, and give each sponsor a portal to see and complete what is expected of them.',
      },
      {
        title: 'Exhibitors with their own portal',
        body: 'Manage booth staff with a tier system and give exhibitors a portal of their own.',
      },
      {
        title: 'Leads and ROI you can show',
        body: 'Exhibitors scan and capture attendee leads and export reports, while sponsors see impression metrics, lead attribution, and ROI dashboards.',
      },
    ],
    points: [
      { title: 'Sponsor management', description: 'CRM pipeline with tiers, deliverables, and a sponsor portal.' },
      { title: 'Sponsor ROI', description: 'Impression metrics, lead attribution, and ROI dashboards.' },
      { title: 'Exhibitor management', description: 'Booth staff management with a tier system and exhibitor portal.' },
      { title: 'Lead capture', description: 'Scan and capture attendee leads, with exportable reports.' },
      { title: 'Team collaboration', description: 'Roles and invitations for your own team.' },
      { title: 'Secure portals', description: 'Portals use 256-bit cryptographically random tokens.' },
    ],
    plan: 'Sponsor management, exhibitor management, and lead capture are included on the Professional plan ($249/mo). Sponsor ROI is available from Starter.',
    faqs: [
      {
        question: 'Which plan includes sponsor and exhibitor management?',
        answer:
          'Sponsor management, exhibitor management, and lead capture are on the Professional plan. Sponsor ROI dashboards are available on Starter and Professional.',
      },
      {
        question: 'Do sponsors need to create an account?',
        answer:
          'No. Sponsor, exhibitor, and attendee portals use secure token links rather than passwords, so partners get access without managing another login.',
      },
    ],
  },
  {
    slug: 'event-check-in-and-badge-printing',
    label: 'Check-in and badge printing',
    title: 'Event Check-In & Badge Printing Software | EventLantern',
    description:
      'QR code event check-in and professional badge printing from the same attendee list you registered. Included on every plan, including Free.',
    eyebrow: 'Event check-in and badge printing',
    h1: 'QR code check-in and badge printing, from the list you already have.',
    lede: 'Print branded badges with QR codes, then check attendees in from a dedicated portal. Both are included on every plan.',
    intro:
      'Arrival day is where planning meets people. Because check-in and badges read from the same attendee records you collected at registration, there is no export, re-import, or second list to keep in sync.',
    sections: [
      {
        title: 'Badges that look like your event',
        body: 'Print professional badges with QR codes and your branding, using the logo, colors, and fonts you set once for the event.',
      },
      {
        title: 'A dedicated check-in portal',
        body: 'Scan QR codes at the door from a portal built for the front desk, so staff see what they need and nothing else.',
      },
      {
        title: 'Attendance that feeds your reports',
        body: 'Check-in data flows into analytics and post-event surveys without extra work.',
      },
    ],
    points: [
      { title: 'QR code check-in', description: 'Dedicated check-in portal for staff.' },
      { title: 'Badge printing', description: 'Professional badges with QR codes and your branding.' },
      { title: 'Branding', description: 'Custom logo, brand colors, and font settings.' },
      { title: 'Attendee management', description: 'One list across registration, badges, and check-in.' },
    ],
    plan: 'QR code check-in and badge printing are included on every plan, including the Free plan.',
    faqs: [
      {
        question: 'Is check-in included on the free plan?',
        answer: 'Yes. QR code check-in and badge printing are included on every plan, including Free.',
      },
      {
        question: 'Can I brand the badges?',
        answer: 'Yes. Badges carry QR codes and your branding, using the logo, brand colors, and font settings of your event.',
      },
    ],
  },
  {
    slug: 'event-website-builder',
    label: 'Event website builder',
    title: 'Event Website Builder | EventLantern',
    description:
      'Launch a branded public website for your event in one click, with templates, your colors and logo, and registration built in. Start free.',
    eyebrow: 'Event website builder',
    h1: 'An event website that is ready when your registration is.',
    lede: 'Generate a branded public site from your event data, with the agenda, speakers, and registration already connected.',
    intro:
      'Your event website should not be a separate project. EventLantern builds it from the event you already set up, so the schedule, speakers, and registration on the site are the live ones.',
    sections: [
      {
        title: 'One click from event to website',
        body: 'Create a public website with customizable templates, without a separate site build or copy-and-paste from your agenda.',
      },
      {
        title: 'Your brand, not ours',
        body: 'Set your logo, brand colors, and fonts once and carry them across the website, badges, and attendee experience.',
      },
      {
        title: 'Registration is already there',
        body: 'Visitors register on the same event, so what they sign up for is what you manage.',
      },
    ],
    points: [
      { title: 'Event website builder', description: 'One-click public websites with customizable templates.' },
      { title: 'Branding', description: 'Custom logo, brand colors, and font settings.' },
      { title: 'Registration and ticketing', description: 'Forms and tickets on the same event.' },
      { title: 'Session scheduling', description: 'The live agenda, published on the site.' },
    ],
    plan: 'The Free plan includes the Meetup website template. Starter and Professional unlock all templates.',
    faqs: [
      {
        question: 'Can I build an event website on the free plan?',
        answer: 'Yes. The Free plan includes the Meetup template; Starter and Professional include all templates.',
      },
      {
        question: 'Can I use my own branding?',
        answer: 'Yes. Custom branding with your logo, colors, and fonts is available on every plan.',
      },
    ],
  },
  {
    slug: 'meetup-and-workshop-management-software',
    label: 'Meetups and workshops',
    title: 'Meetup & Workshop Software | Free Plan | EventLantern',
    description:
      'Run meetups and workshops with free registration, QR check-in, a simple event website, and attendee management. Start free with no credit card.',
    eyebrow: 'Meetup and workshop software',
    h1: 'Meetup and workshop software that starts free.',
    lede: 'Register attendees, check them in, and follow up, with the tools in place from your first event and room to grow.',
    intro:
      'Small events deserve the same clarity as large ones. EventLantern gives meetups and workshops registration, check-in, an event page, and attendee records on the Free plan, with no credit card and no sales call.',
    sections: [
      {
        title: 'Set up in minutes',
        body: 'Create an event, open registration, and publish a page the same day. There is no onboarding cycle.',
      },
      {
        title: 'Everything you need on day one',
        body: 'Session scheduling, speaker profiles, QR check-in, badges, an attendee portal, and surveys are all included on the Free plan.',
      },
      {
        title: 'Room to grow',
        body: 'When a meetup becomes a series or a workshop becomes a conference, move to Starter or Professional without changing platforms.',
      },
    ],
    points: [
      { title: 'Free plan', description: 'One active event with up to 50 attendees, no credit card.' },
      { title: 'Event website', description: 'Meetup template included on Free.' },
      { title: 'QR code check-in', description: 'Check people in from a dedicated portal.' },
      { title: 'Surveys and feedback', description: 'Collect feedback linked to your event or sessions.' },
      { title: 'Virtual and hybrid', description: 'Run in person, online, or both.' },
    ],
    plan: 'The Free plan runs one active event with up to 50 attendees. Starter ($49/mo) covers three events up to 500 attendees each, and Professional ($249/mo) has unlimited events up to 5,000 attendees each.',
    faqs: [
      {
        question: 'Is EventLantern free for small meetups?',
        answer: 'Yes. The Free plan covers one active event with up to 50 attendees and requires no credit card.',
      },
      {
        question: 'Can I run recurring meetups?',
        answer:
          'Starter supports three events and Professional supports unlimited events, so a recurring series can run on a paid plan. The Free plan covers one active event at a time.',
      },
    ],
  },
];
