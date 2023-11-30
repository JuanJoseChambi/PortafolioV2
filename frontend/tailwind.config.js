/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        "px-screen-laptop": "630px",
        "px-screen-pc": "900px"
      },
      fontFamily: {
        "poppins":['Poppins', "sans-serif"]
      },
      textColor: {
        "white-light": "#DCDEDD",
        "grey-light": "#9b9b9b",
        "grey-dark": "#4e4e4e"
      },
      fontSize: {
        "xxs":"10px"
      },
      backgroundColor: {
        "white-light": "#DCDEDD",
        "grey-light": "#9b9b9b",
        "grey-dark": "#4e4e4e"
      },
      blur: {
        "xs": "2px"
      },
      outlineColor: {
        "white-light": "#DCDEDD",
        "grey-light": "#9b9b9b",
        "grey-dark": "#4e4e4e"
      }
    },
  },
  plugins: [],
}

