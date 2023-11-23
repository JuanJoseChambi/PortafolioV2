/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins":['Poppins', "sans-serif"]
      },
      textColor: {
        "whiteText": "#DCDEDD",
        "grey-light": "#9b9b9b",
        "grey-dark": "#4e4e4e"
      },
      fontSize: {
        "xxs":"10px"
      }
    },
  },
  plugins: [],
}

