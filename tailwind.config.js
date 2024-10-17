/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
            'clip-path': 'inset(100% 100% 0 0)',
          },
          '100%': {
            opacity: '1',
            'clip-path': 'inset(0 0 0 0)',
          },
        },
      },
      animation: {
        'appear': 'appear 2s linear forwards',
      },
        animation: {
            fadeInUp: 'fadeInUp 1s ease-out',
        },
        keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'wave-animation': 'wave-animation 2.1s infinite',
      },
      transformOrigin: {
        'custom': '70% 70%',
      },
      
    },
    
},
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.filter-grayscale': {
          filter: 'grayscale(100%)',
        },
      });
    }
  ],
}