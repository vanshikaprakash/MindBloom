/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Satoshi', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        bloom: {
          cream: '#f7f2ea',
          peach: '#f6cdb6',
          pink: '#f3b7d1',
          lavender: '#c9b7ff',
          sky: '#b8dcff',
          mint: '#bff0df',
          navy: '#1c1f2a',
          midnight: '#10131b',
        },
        glow: {
          peach: 'rgba(246, 205, 182, 0.5)',
          lavender: 'rgba(201, 183, 255, 0.5)',
          mint: 'rgba(191, 240, 223, 0.5)',
          sky: 'rgba(184, 220, 255, 0.5)',
        },
      },
      boxShadow: {
        soft: '0 20px 50px -25px rgba(20, 15, 35, 0.25)',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 15px 40px -20px rgba(94, 71, 150, 0.55)',
        card: '0 18px 45px -30px rgba(17, 14, 31, 0.6)',
      },
      backgroundImage: {
        'bloom-gradient':
          'radial-gradient(circle at top, rgba(184, 220, 255, 0.6), transparent 55%), radial-gradient(circle at 30% 20%, rgba(243, 183, 209, 0.5), transparent 55%), radial-gradient(circle at 70% 10%, rgba(191, 240, 223, 0.45), transparent 50%), linear-gradient(140deg, #f7f2ea 0%, #f4e5f6 35%, #e3f0ff 100%)',
        'bloom-gradient-dark':
          'radial-gradient(circle at top, rgba(94, 71, 150, 0.35), transparent 55%), radial-gradient(circle at 20% 20%, rgba(81, 122, 170, 0.35), transparent 50%), radial-gradient(circle at 80% 10%, rgba(36, 64, 94, 0.5), transparent 50%), linear-gradient(160deg, #0b0d14 0%, #161b28 45%, #10131b 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.65, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.06)', opacity: 1 },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        shimmer: 'shimmer 8s ease infinite',
        'pulse-soft': 'pulseSoft 3.4s ease-in-out infinite',
        breathe: 'breathe 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

