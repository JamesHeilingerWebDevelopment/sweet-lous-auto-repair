const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    boxShadow: {
      'sharp': 'box-shadow: 5px 5px 0px 0px rgba(35,31,32,1)'
    },
    extend: {
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
          lighter: '#CEE9E8',
          light: '#B4E0E1',
          DEFAULT: '#5CCACE',
          dark: '#3ABEC0',
          darker: '#02ACA9',
        },
        'mc-pink': {
          light: '#F596B6',
          DEFAULT: '#F386AF',
          dark: '#EF689B',
          '50': '#fde7ef',
          '100': '#facfdf',
          '200': '#f8b6cf',
          '300': '#f59ebf',
          '400': '#F386AF',
          '500': '#ed4d89',
          '600': '#e51764',
          '700': '#ab114b',
          '800': '#720b32',
          '900': '#390619',
        },
        'mc-black': {
          DEFAULT: '#231F20'
        },
        'mc-white': {
          DEFAULT: '#FCFAFB'
        },
        'mc-yellow': {
          DEFAULT: '#EAA80B'
        },
        'mc-brown': {
          DEFAULT: '#ce995c'
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
  variants: {},
  plugins: [],
}
