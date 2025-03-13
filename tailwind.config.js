/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': '#0B2447', // More saturated navy
        'dark-navy': '#051937', // Deeper, richer navy
        'electric-blue': '#0066CC', // Brighter electric blue
        'bright-cyan': '#00B4D8', // More vibrant cyan
        '00a3ff': '#00A3FF', // Pure bright blue
        'neon-green': '#39FF14', // Vibrant neon green
        'gray': {
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
        },
        'white': '#FFFFFF',
        'f8f9fa': '#F8F9FA',
        'amber': {
          50: '#FFF8E1',
          100: '#FFECB3',
          200: '#FFE082',
          300: '#FFD54F',
          400: '#FFCA28',
          500: '#FFC107',
          600: '#FFB300',
          700: '#FFA000',
          800: '#FF8F00',
          900: '#FF6F00',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'gradient-y': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: 1,
            boxShadow: '0 0 20px rgba(0, 180, 216, 0.4), 0 0 40px rgba(0, 180, 216, 0.2)'
          },
          '50%': { 
            opacity: 0.8,
            boxShadow: '0 0 30px rgba(0, 180, 216, 0.5), 0 0 60px rgba(0, 180, 216, 0.3)'
          },
        },
      },
      borderWidth: {
        '3': '3px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.8)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.8)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-sm': {
          textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-md': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
        },
        '.text-shadow-none': {
          textShadow: 'none',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};