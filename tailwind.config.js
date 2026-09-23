/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './carreiras.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F2F6FF',
          100: '#DCE8FF',
          200: '#BBD1FF',
          300: '#8FB2FF',
          400: '#5C8BFF',
          500: '#2E6BFF',
          600: '#1E4DA8',
          700: '#153170',
          800: '#0F2350',
          900: '#0A1733',
          950: '#060F24',
        },
        accent: {
          DEFAULT: '#3B82F6',
          soft: '#60A5FA',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,23,51,.04), 0 12px 32px -12px rgba(10,23,51,.16)',
        card: '0 1px 3px rgba(10,23,51,.06), 0 20px 48px -20px rgba(10,23,51,.22)',
        glow: '0 12px 40px -12px rgba(46,107,255,.55)',
      },
      maxWidth: {
        content: '1200px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
