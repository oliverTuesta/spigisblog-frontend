module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)',
      },
    },
  },
  colors: {
    current: 'currentColor',
    transparent: 'transparent',
    black: '#1D1F2C',
    gray: '#3C3F4E',
    primary: '#E07A5F',
    yellow: {
      100: '#FFF9E5',
      400: '#F2CC8F',
    },
    green: '#81B29A',
    'body-color': '#FFF9E5',
  },
  plugins: [],
};
