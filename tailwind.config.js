/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': 'url(../images/line-pattern-background.png)',
      },
      fontFamily: {
        'Inter': 'Inter, sans-serif',
        'SourceCodePro': 'Source Code Pro',
      },
      colors: {
        'dark': '#04020A',
        'secondary-white': '#D7D7D7',
      }
    },
  },
  plugins: [],
}
