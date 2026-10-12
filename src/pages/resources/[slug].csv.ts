import type { APIRoute } from 'astro';
import { resources, type Resource } from '../../data/resources';

export function getStaticPaths() {
  return resources.map((resource) => ({ params: { slug: resource.slug }, props: { resource } }));
}

export const GET: APIRoute = ({ props }) => {
  const resource = props.resource as Resource;
  const quote = (value: string) => `"${value.replaceAll('"', '""')}"`;
  const csv = [resource.columns, ...resource.rows].map((row) => row.map(quote).join(',')).join('\r\n');
  return new Response(`\uFEFF${csv}\r\n`, {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
};
