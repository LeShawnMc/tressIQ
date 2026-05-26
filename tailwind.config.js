/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tiq-dark': '#111111',
        'tiq-cream': '#f5f1ea',
        'tiq-gold': '#c8a46a',
        'tiq-brown': '#4b3832',
        'tiq-gold-border': 'rgba(200,164,106,0.3)',
        'tiq-gold-border-light': 'rgba(200,164,106,0.2)',
        'tiq-brown-bg': 'rgba(75,56,50,0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
