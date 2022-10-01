/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins : ['"Poppins" , sans-serif']
      },
      objectPosition : {
        circleTop : "calc(50% - 250px)",
        circleLeft: "calc(50% - 170px)"
      },
      colors: {
        title: "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)",
        subtitle: " rgba(255, 255, 255, 0.7)"
      },
      backgroundColor: {
        line: "rgba(255, 255, 255, 0.7)",
        footer: "rgba(11, 10, 12, 0.2)"
      },
      boxShadow: {
        item: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)"
      }
    },
  },
  plugins: [],
}
