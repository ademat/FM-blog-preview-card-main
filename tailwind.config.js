/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Figtree'],
    },
    colors: {
      yellow: '#F4D04E',
      gray: '#7F7F7F',
      black: '#111111',
      white: '#FFFFFF'   
    },
    boxShadow: {
      large: '16px 16px #111111'
    },
    borderRadius: {
      small: '4px',
      medium: '10px',
      large: '20px' 
    }
  },
  plugins: [],
}

