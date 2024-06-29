/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "serif"],
      display: ["Titillium Web", "serif"],
    },
    extend: {
      colors: {
        text_primary: "#042A38",
        text_subheader: "#70B4C3",
        text_selected: "#18495C",
      }
    },
  },
  plugins: [],
}

