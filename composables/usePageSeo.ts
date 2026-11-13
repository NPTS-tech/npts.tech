// Sets a page's title and description for search results and share previews.
// The title gets " · NPTS" added in the browser tab and search results (see app.vue).
export function usePageSeo(page: { title: string; description: string }) {
  useSeoMeta({
    title: page.title,
    ogTitle: page.title,
    description: page.description,
    ogDescription: page.description,
  })
}
