/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        'primary': '#5b7196', // Blue
        'blue-gray': {
          50:  '#f5f7fa',
          100: '#e4e9f0',
          200: '#cbd6e2',
          300: '#aab8cc',
          400: '#889bb5',
          500: '#5b7196', // base
          600: '#4d5f7d',
          700: '#404e66',
          800: '#2c3749',
          900: '#282f3c',
        }
      }
    },
	},
	plugins: [],
}
