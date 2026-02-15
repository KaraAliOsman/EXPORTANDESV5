/**
 * Prepends the Astro base URL to internal paths.
 * Handles trailing slash correctly.
 */
const RAW_BASE = import.meta.env.BASE_URL; // "/EXPORTANDESV5" (no trailing slash)
const BASE = RAW_BASE.endsWith("/") ? RAW_BASE : `${RAW_BASE}/`;

export function url(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
