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
        imperial: {
          950: "#02090b",
          900: "#041417",
          850: "#061e23",
          800: "#09292f",
          700: "#0e3a42",
          600: "#154d58",
        },
        gold: {
          100: "#fff8e7",
          200: "#ffecbe",
          300: "#ffe094",
          400: "#fcd066",
          500: "#f5b838",
          600: "#d9971e",
          700: "#b37410",
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        display: ['Montserrat', 'Playfair Display', 'sans-serif'],
        heading: ['Montserrat', 'Be Vietnam Pro', 'sans-serif'],
        sans: ['Be Vietnam Pro', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
