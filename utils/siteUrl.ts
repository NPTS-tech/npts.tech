// The site's public address, used for canonical tags, share links, structured data, and the sitemap.
export const SITE = 'https://npts.tech'

// Full address of a page, e.g. '/about' → 'https://npts.tech/about/'.
// GitHub Pages serves every page from a folder, so the trailing slash is the address it doesn't redirect.
export function siteUrl(path: string) {
  const clean = path.split(/[?#]/)[0].replace(/\/+$/, '')
  return clean ? `${SITE}${clean}/` : `${SITE}/`
}
