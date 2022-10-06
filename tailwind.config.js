/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backgroundImg': "url('/BG.jpg')",

      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'roboto': ['Roboto', 'sans-serif'],
      'poppins':['Poppins', 'sans-serif']
   
    },
    fontSize: {
      xsm:'14px',
      sm: '16px',
      base: '22px',
      xl: '38px',
      xxl:"45px"

    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    letterSpacing: {
      tightest: '-0.846154px',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    maxWidth: {
      'sm': '579px',
      'md': '630px',
    },
    maxHeight:{
      "sm":"100%"
    }

  },
  plugins: [],
}
