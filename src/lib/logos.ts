// Official brand marks for the tools EventLantern integrates with.
// Source: the "SVG Logos" set (gilbarbara/logos, CC0) via @iconify-json/logos. Marks keep their
// own brand colors; they are never recolored. Product names and logos belong to their owners.
import iconSet from '@iconify-json/logos/icons.json';

type Logo = { body: string; viewBox: string };

type RawIcon = { body: string; width?: number; height?: number };
const icons = iconSet.icons as Record<string, RawIcon>;

const fromSet = (key: string): Logo => {
  const icon = icons[key];
  if (!icon) throw new Error(`Missing logo "${key}" in @iconify-json/logos`);
  return { body: icon.body, viewBox: `0 0 ${icon.width ?? iconSet.width} ${icon.height ?? iconSet.height}` };
};

// HubSpot only ships as a full wordmark. The sprocket is the orange "o", so keep the orange
// shapes and crop to them.
const hubspot = (): Logo => {
  const { body } = icons.hubspot;
  const sprocket = (body.match(/<path[^>]*fill="#f8761f"[^>]*\/>/g) ?? []).join('');
  if (!sprocket) throw new Error('HubSpot sprocket not found in @iconify-json/logos');
  return { body: sprocket, viewBox: '364 0 102 149' };
};

const logos = {
  zoom: () => fromSet('zoom-icon'),
  teams: () => fromSet('microsoft-teams'),
  hubspot,
  salesforce: () => fromSet('salesforce'),
  slack: () => fromSet('slack-icon'),
  twilio: () => fromSet('twilio-icon'),
  mailchimp: () => fromSet('mailchimp-icon'),
  sendgrid: () => fromSet('sendgrid-icon'),
  zapier: () => fromSet('zapier-icon'),
} satisfies Record<string, () => Logo>;

export type LogoName = keyof typeof logos;
export const getLogo = (name: LogoName): Logo => logos[name]();
