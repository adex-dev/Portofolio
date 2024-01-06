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
    screens: {
      '2xs': { min: '280px' },
      xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      'pro': { min: '1024px', max: '1366px' }, // Tablet (matches max: iPad Pro @ 1112px).
      lg: { min: '1200px' }, // Desktop smallest.
      xl: { min: '1259px' }, // Desktop wide.
      '2xl': { min: '1359px' } // Desktop widescreen.
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
        inter: ['inter'],
      },
    },
  },
  plugins: [],
}