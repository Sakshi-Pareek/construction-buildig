/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'heropattern': "url('assets/images/webp/hreo_bg.webp')",
        'inputpattern': "url('assets/images/webp/imput-bg.webp')",
      },
      backgroundSize: {
        'bgfull': '100% 100%',
      },
      screens: {
        '3xl': '1700px',
        'xs': '425px',
      },
      boxShadow: {
        "btn_shadow": '2px 5px 10px #ffffff',
        "card_shadow": ' 9px 16px 32px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

