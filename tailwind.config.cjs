/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '590px',
      md: '640px',
      lg: '1025px',
      xl: '1600px'
    },
    extend: {
      fontSize: {
        '2xs': '0.625rem'
      },
      colors: {
        concrete: '#F3F3F3',
        primary: '#00ca5b',
        emperor: '#515151',
        background: '#0c0a09'
      },
      keyframes: {
        float: {
          '0%': { translate: '0 0' },
          '50%': { translate: '0 -15px' },
          '100%': { translate: '0 0' }
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(10)' },
          '100%': { transform: 'rotate(-360deg) scale(10)' }
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite alternate',
        'fade-in': 'fade-in 1s var(--animation-delay, 0ms) ease forwards',
        'fade-in-down': 'fade-in-down 1s var(--animation-delay, 0ms) ease forwards',
        rotate: 'rotate 10s linear infinite'
      },
      boxShadow: {
        '3xl-center': '0 0px 104px -40px'
      }
    }
  },
  plugins: []
}
