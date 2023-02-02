/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '590px',
			md: '640px',
			lg: '900px',
			xl: '1600px',
		},
		extend: {
			colors: {
        alabaster: '#F8F8F8',
        concrete: '#F3F3F3',
				primary: '#49be7e',
				emperor: '#515151',
      }
		},
	},
	plugins: [],
}