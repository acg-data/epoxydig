/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Light theme - inverted
          white: '#FFFFFF',
          cream: '#F8F9FA',
          'cream-dark': '#E9ECEF',
          black: '#000000',
          'black-soft': '#1A1A1A',
          red: '#C8102E',
          'red-dark': '#A00D26',
          grey: '#6B7280',
          'grey-light': '#9CA3AF',
          'grey-lighter': '#E5E7EB',
          'grey-dark': '#374151',
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