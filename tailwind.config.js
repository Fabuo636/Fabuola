/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#faf7f2',
        ink: '#1a1817',
        stone: {
          450: '#8a8580',
        },
        accent: '#e8552f',
      },
      fontFamily: {
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Archivo"', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
  plugins: [],
}
