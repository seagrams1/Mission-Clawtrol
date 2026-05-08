/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f7ff',
          pink: '#ff00aa',
          purple: '#9d00ff',
          green: '#00ff9d',
        }
      },
      fontFamily: {
        mono: ['VT323', 'monospace'],
        cyber: ['Courier New', 'monospace']
      }
    },
  },
  plugins: [],
}