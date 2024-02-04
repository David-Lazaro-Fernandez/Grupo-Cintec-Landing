import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'swipe':{
          '0%':{transform: 'translate(0)'},
          '100%':{transform: 'translate(-100%)'},
          
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'horizontal-scroll': 'swipe 28s linear infinite backwards',
        'spin-slow': 'spin 3s linear infi6nite',
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'title': '1.75rem',
      },
      colors:{
        'primary':'#1D2764',
        'secondary':'#F55019',
        'background':'#F3F5FF',
        'paper':'#9AA7C1',
        'light':'#FFBDA8',

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config