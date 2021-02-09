const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    './dist/**/*.html',
    './dist/**/*.js'
  ],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        'sharp': '5px 5px 0px 0px rgba(35,31,32,1)'
      },
      colors: {
        'mc-blue': {
          '50': '#def4f5',
          '100': '#beeaeb',
          '200': '#9ddfe2',
          '300': '#7dd5d8',
          '400': '#5CCACE',
          '500': '#39babf',
          '600': '#2e9599',
          '700': '#227073',
          '800': '#174a4c',
          '900': '#0b2526',
        },
        'mc-black': {
          DEFAULT: '#231F20'
        },
        'mc-harvest': {
          '50': '#fae4d0',
          '100': '#f6caa1',
          '200': '#f1b073',
          '300': '#ed9544',
          '400': '#eb882c',
          '500': '#e87b16',
          '600': '#ba6211',
          '700': '#8b4a0d',
          '800': '#5d3108',
          '900': '#2e1804',
        }
      },
      fontFamily: {
        script: ["mr_de_havilandregular", ...defaultTheme.fontFamily.sans],
        script2: ["pinyon_scriptregular", ...defaultTheme.fontFamily.sans],
        body: ["marcellusregular", ...defaultTheme.fontFamily.serif]
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['active'],
      transform: ['active'],
      translate: ['active']
    }
  },
  plugins: [],
}
