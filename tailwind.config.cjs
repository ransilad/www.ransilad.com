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
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite alternate'
      },
      boxShadow: {
        '3xl-center': '0 0px 104px -40px'
      }
    }
  },
  plugins: []
}
