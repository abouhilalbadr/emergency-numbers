module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#023047',
      gray: '#E6ECF8',
      blue: '#005a9a',
			red: '#ee3a43',
      redAmb: '#ef4835',
      redPom: '#ed413d',
			purple: '#850085',
      lime: '#55bdba',
      yellow: '#f4c251',
      green: '#188d70',
      greenCov: '#00963f'
    },
    container: {
      center: true,
      default: '1rem',
      sm: '2rem',
      lg: '3rem',
      xl: '4rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
