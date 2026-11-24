/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        stayea: {
          950: "#041517",
          900: "#082226",
          800: "#0c3b40",
          700: "#14535a",
          600: "#1d6c75",
          500: "#278792",
          400: "#3aa6b3",
          300: "#5ec7d4",
          200: "#92e3ee",
          100: "#c7f2f7",
          50: "#edfafb",
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px -10px rgba(58, 166, 179, 0.5)' },
          'to': { boxShadow: '0 0 30px 10px rgba(58, 166, 179, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
