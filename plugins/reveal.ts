// v-reveal: animates an element in the first time it scrolls into view.
//   v-reveal            fade and rise
//   v-reveal="150"      same, 150ms later (stagger items in a row)
//   v-reveal.left / .right / .zoom   come in from the side, or scale up
// Elements also get the class "is-in", which child animations (bars, checklists) key off.
// With JavaScript off or "reduce motion" on, everything simply shows.
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', {
    getSSRProps: (binding) => ({ 'data-reveal': Object.keys(binding.modifiers)[0] ?? '' }),
    mounted(el: HTMLElement, binding) {
      el.setAttribute('data-reveal', Object.keys(binding.modifiers)[0] ?? '')
      if (binding.value) el.style.setProperty('--delay', `${binding.value}ms`)
      if (!('IntersectionObserver' in window)) return el.classList.add('is-in')
      const io = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) {
          el.classList.add('is-in')
          io.disconnect()
        }
      }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
      io.observe(el)
    },
  })
})
