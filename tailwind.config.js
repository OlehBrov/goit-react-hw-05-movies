/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        headerShadow: '0px 11px 28px -7px rgba(0,0,0,0.75)',
        cardShadow: ' 0px 0px 12px 3px rgba(77,77,77,1)',
        inputShadow: '0px 0px 3px rgba(66,66,66,.50)',
      },
      backgroundImage: {
        descrGradient: 'linear-gradient(0deg, rgba(222,203,164,1) 0%, rgba(62,81,81,1) 100%)'
      },
      spacing: {
        "3px": "3px",
        "200px": "200px",
        "280px": "280px"
      },
      height: {
        280: "280px"
      },
      width: {
        200: "200px"
      }
    },
  },
  plugins: [],
};
