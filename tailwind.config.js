/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: '#46EBCE',
      gray: {
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937'
      },
      white: '#ffffff'
    },
    minHeight: {
      '1/3': '30vh',
      '2/5': '40vh',
      '1/2': '50vh',
      '3/5': '60vh',
      '4/5': '80vh',
      'screen': '100vh'
    },
    backgroundImage: {
      'homepage-cover': "url('/homepage_cover.jpg')",
    }
  },
  darkMode: 'class',
  plugins: [],
}
