const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Geomanist", "sans-serif"],
      serif: ["americane"],
      cursive: ["fave-script-pro", "cursive"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00764F",
          dark: "#00764F",
          light: "#00764F",
        },
        accent: {
          DEFAULT: "#CC0829",
          dark: "#CC0829",
          light: "#CC0829",
        },
        secondary: {
          DEFAULT: "#FEF7C1",
        },
        background: {
          DEFAULT: "#FBF8EB",
        },
        dark: {
          DEFAULT: "#363232",
          body: "#ff0000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
