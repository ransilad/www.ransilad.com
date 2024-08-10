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
      colors: {
        concrete: '#F3F3F3',
        primary: '#00ca5b',
        emperor: '#515151',
        background: '#0c0a09'
      },
      backgroundImage: {
        'contact-me-banner': "url('/images/contact-me-banner.webp')"
      }
    }
  },
  plugins: []
}
