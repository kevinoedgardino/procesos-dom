/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				darkBlue: '#0b1120'
			}
		},
		backgroundImage: {
			gradient:
			'linear-gradient(106.89deg, rgba(192, 132, 252, 0.1) 15.73%, rgba(14, 165, 233, 0.22) 15.74%, rgba(79, 70, 229, 0.22) 80.91%)'
		},
		blur: {
			gradient: '118px'
		},
		dropShadow: {
			black: '2px 2px 4px #0000009e'
		},
		fontFamily: {
			body: ['Roboto', 'system-ui', 'sans-serif']
		}
	},
	plugins: []
}
