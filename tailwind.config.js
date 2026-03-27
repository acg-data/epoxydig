/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          red: '#C8102E',
          'red-dark': '#A00D26',
          'red-light': '#E31C3D',
          grey: '#6B7280',
          'grey-dark': '#1F2937',
          'grey-light': '#9CA3AF',
          'grey-lighter': '#E5E7EB',
          white: '#FFFFFF',
          cream: '#F9FAFB',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}