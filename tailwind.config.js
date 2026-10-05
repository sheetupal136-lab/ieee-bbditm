/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ieee: {
          blue: '#00629B',       // Official IEEE Blue
          dark: '#002855',       // Deep IEEE Navy
          light: '#0085CA',      // IEEE Bright Blue
          cyan: '#00A3E0',       // IEEE Cyan accent
          navy: '#071529',       // Deep background navy
          slate: '#0F233D',      // Card navy
          surface: '#152E50',    // Elevated navy
          border: 'rgba(0, 98, 155, 0.25)',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'subtle-blue': '0 4px 20px -2px rgba(0, 98, 155, 0.15)',
        'glow-blue': '0 0 25px -5px rgba(0, 163, 224, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
