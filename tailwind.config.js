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
          bg:   'oklch(0.17 0.008 150)',
          deep: 'oklch(0.13 0.008 150)',
          card: 'oklch(0.20 0.008 150)',
          line: 'oklch(0.28 0.020 150)',
          rule: 'oklch(0.34 0.020 150)',
          dim:  'oklch(0.55 0.010 150)',
          mid:  'oklch(0.72 0.010 150)',
          fg:   'oklch(0.93 0.006 150)',
          acc:  'oklch(0.82 0.170 150)',
          accHi:'oklch(0.90 0.170 150)',
          warn: 'oklch(0.72 0.090 90)',
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
