const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.{vue,js,ts,jsx,tsx}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        'brand-green': {
          50: '#F9FAFA',
          100: '#F4F6F6',
          200: '#EAEDED',
          300: '#CAD3D1',
          400: '#95A6A3',
          500: '#607A75',
          600: '#406059',
          700: '#2B4E47',
          800: '#213F39',
          900: '#192F2A',
        },
        'brand-pink': {
          50: '#FFFDFD',
          100: '#FEFCFC',
          200: '#FEFAFA',
          300: '#FCF3F3',
          400: '#FAE7E6',
          500: '#F8E0DF',
          600: '#F7D9D8',
          700: '#F5CFCE',
          800: '#E2BDBC',
          900: '#D6B0AF',
        },
        // The following colours deviate from the tailwind default
        gray: colors.gray,
        green: colors.emerald,
        blue: colors.lightBlue,
        purple: colors.fuchsia,
      },
    },
  },
  variants: {},
  plugins: [],
}
