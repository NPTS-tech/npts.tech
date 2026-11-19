// Google Analytics. Loads only on the live site, and only once a measurement ID is set
// (GA_MEASUREMENT_ID, see nuxt.config.ts), so local previews never count as visits.
// Page views (including moving between pages) are tracked automatically by Google Analytics.
// It also records a few actions that matter to NPTS: donate clicks, email links, and form submits.
export default defineNuxtPlugin(() => {
  const id = useRuntimeConfig().public.gaMeasurementId as string
  if (!id || location.hostname !== 'npts.tech') return

  const w = window as any
  w.dataLayer = w.dataLayer || []
  w.gtag = function () { w.dataLayer.push(arguments) }
  w.gtag('js', new Date())
  w.gtag('config', id)

  const s = document.createElement('script')
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(s)

  const track = (name: string, params: Record<string, string> = {}) => w.gtag('event', name, params)

  // Clicks on the Stripe donation link and on email links.
  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a')
    if (!a) return
    if (a.href.includes('donate.stripe.com')) track('donate_click', { page: location.pathname })
    else if (a.href.startsWith('mailto:')) track('email_click', { page: location.pathname })
  })

  // Contact and interest forms (they open the visitor's email app).
  document.addEventListener('submit', () => track('form_submit', { page: location.pathname }))
})
