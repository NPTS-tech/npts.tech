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
      colors: {
        terminal: {
          bg: '#0D2637',
          text: '#ADDCD4',
          accent: '#A77B4E',
          dark: '#084D65',
          light: '#D1DAD6'
        }
      },
      fontFamily: {
        sans: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'typewriter': 'typing 1s steps(40, end) both',
        'typewriter-delayed': 'typing 1s steps(40, end) 1s both',
        'flicker': 'flicker 0.15s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        typing: {
          '0%': { maxWidth: '0%' },
          '100%': { maxWidth: '100%' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 0.99 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0.85 },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #084D65, 0 0 10px #084D65', borderColor: '#084D65' },
          'to': { boxShadow: '0 0 15px #ADDCD4, 0 0 20px #ADDCD4', borderColor: '#ADDCD4' }
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
