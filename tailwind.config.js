/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      animation: {
        'flotar': 'flotar 8s infinite linear',
        'rotarrr': 'rotarrr 16s infinite linear'
      },
      keyframes: {
        'flotar': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'rotarrr': {
          '0%': { transform: 'rotate(0deg)'},
          '100%': { transform: 'rotate(360deg)'}
        }
      },
      fontFamily: {
        'fira-code': ['Fira Code', 'monospace'], 
      },
    },
 // Mantén extend dentro de theme si necesitas extender temas existentes
  },
  
  plugins: [],
 
}