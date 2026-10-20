// Competitors shown on /compare. To add one, append an entry here and build its two pages.
// Pricing lines must match the dated claims in that competitor's comparison-*.ts file.

export interface Competitor {
  name: string;
  /** Switch-intent page. */
  alternativeHref: string;
  /** Head-to-head page. */
  versusHref: string;
  pricing: string;
  billing: string;
  fits: string[];
}

export const competitors: Competitor[] = [
  {
    name: 'Cvent',
    alternativeHref: '/cvent-alternative',
    versusHref: '/eventlantern-vs-cvent',
    pricing: 'Quote-based. Cvent does not publish prices. Third-party reports describe an annual license plus per-registrant fees.',
    billing: 'Multi-year, auto-renewing terms are commonly reported.',
    fits: ['Very large or global programs', 'A vendor with a long track record', 'Deep enterprise procurement needs'],
  },
  {
    name: 'Bizzabo',
    alternativeHref: '/bizzabo-alternative',
    versusHref: '/eventlantern-vs-bizzabo',
    pricing: 'Lists $499 per user per month, or from $17,999 per year, with a 3-user minimum. Add-ons are priced separately or by quote.',
    billing: 'Annual subscription. Single-event purchases are not offered.',
    fits: ['SSO, API access, or a custom app', 'Wearable badge hardware', 'Events above 5,000 attendees'],
  },
];

/** Things EventLantern does not offer today. Shown plainly so buyers can rule it out early. */
export const notOffered = [
  'SSO',
  'API access',
  'A custom or native event app. Attendees use EventLantern as a mobile website.',
  'Wearable badge hardware. QR check-in and badge printing are included.',
  'Events above 5,000 attendees.',
];

export const AS_OF = 'October 2026';

export const TRADEMARK_NOTE =
  'Cvent and Bizzabo are trademarks of their respective owners. EventLantern is not affiliated with or endorsed by either company. Information about them comes from public sources and third-party reports as of ' +
  AS_OF +
  ' and may have changed. Check with each vendor for current terms.';
