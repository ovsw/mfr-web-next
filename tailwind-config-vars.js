const defaultTheme = require("tailwindcss/defaultTheme")

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    } else {
      return `rgb(var(${variableName})`
    }
  }
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Geomanist", "sans-serif"],
      serif: ["americane"],
      cursive: ["fave-script-pro", "cursive"],
    },
    extend: {
      textColor: {
        theme: {
          base: withOpacity(`--color-gray-dark`),
          body: withOpacity(`--color-gray-mid`),
          muted: withOpacity(`--color-gray-light`),
          inverted: withOpacity(`--color-white`),
          primary: withOpacity(`--color-mfr-green`),
          accent: withOpacity(`--color-mfr-red`),
        },
      },
      backgroundColor: {
        themeButton: {
          primary: {
            DEFAULT: withOpacity(`--color-mfr-green`),
            hover: withOpacity(`--color-mfr-green`),
          },
          accent: {
            DEFAULT: withOpacity(`--color-mfr-red`),
            hover: withOpacity(`--color-mfr-red`),
          },
        },
        themeFill: {
          DEFAULT: withOpacity(`--color-mfr-white`),
          primary: withOpacity(`--color-mfr-green`),
          accent: withOpacity(`--color-mfr-red`),
        },
      },
      borderColor: {
        theme: {
          primary: {
            base: withOpacity(`--color-mfr-green`),
            hover: withOpacity(`--color-mfr-green`),
          },
          accent: {
            DEFAULT: withOpacity(`--color-mfr-red`),
            hover: withOpacity(`--color-mfr-red`),
          },
        },
      },
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
