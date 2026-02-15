/**
 * Prepends the Astro base URL to internal paths.
 * Use this for ALL internal <a href> links.
 */
const BASE = import.meta.env.BASE_URL; // e.g. "/EXPORTANDESV5/"

export function url(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}

/** For static assets in /public */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
