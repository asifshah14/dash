/** @type {import('tailwindcss').Config} */
export default {
  content: ['./client/index.html', './client/src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // Slate 900
        surface: '#1e293b',    // Slate 800
        primary: '#3b82f6',    // Blue 500
        'primary-hover': '#2563eb', // Blue 600
        text: {
          main: '#f8fafc',     // Slate 50
          muted: '#94a3b8',    // Slate 400
        },
        border: '#334155',     // Slate 700
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1280px',
        },
      },
      backgroundImage: {
        'gradient-subtle': 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)',
      },
    },
  },
  plugins: [],
};
