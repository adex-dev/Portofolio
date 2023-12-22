/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  mode:'JIT',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
    },
    extend: {
      colors:{
        dark:'#0f172a',
        secondary:'#6b7280'
      },
      fontFamily: {
        dominereg: ['domine-reg'],
        dominebold: ['domine-bold'],
        dominemedium: ['domine-medium'],
        dominesemi: ['domine-semi'],
      },
    },
  },
  plugins: [],
}