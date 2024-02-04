import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      animation:{
        'horizontal-scroll': 'swipe 28s linear infinite backwards',
        'spin-slow': 'spin 3s linear infi6nite',
        
      },
      keyframes:{
        'swipe':{
          '0%':{transform: 'translate(0)'},
          '100%':{transform: 'translate(-100%)'},
          
        }
      }
       
    },
  },
  plugins: [],
};
export default config;
