/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      colors: {
        term: {
          bg:   'oklch(0.14 0.015 240)',
          deep: 'oklch(0.11 0.015 240)',
          card: 'oklch(0.18 0.018 240)',
          cardHi: 'oklch(0.22 0.020 240)',
          line: 'oklch(0.25 0.018 240)',
          rule: 'oklch(0.32 0.020 240)',
          dim:  'oklch(0.58 0.015 240)',
          mid:  'oklch(0.78 0.012 240)',
          fg:   'oklch(0.96 0.005 240)',
          acc:  'oklch(0.78 0.145 160)',
          accHi:'oklch(0.86 0.155 160)',
          accBg:'oklch(0.22 0.040 160)',
          warn: 'oklch(0.75 0.110 85)',
          info: 'oklch(0.75 0.110 220)',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
