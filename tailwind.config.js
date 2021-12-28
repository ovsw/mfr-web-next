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

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}),${opacityValue})`
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
          base: "#363232",
          body: "#707070",
          muted: "#707070",
          inverted: "#ffffff",
          primary: "#00764F",
          accent: "#CC0829",
        },
      },
      backgroundColor: {
        themeButton: {
          primary: {
            DEFAULT: "#00764F",
            hover: "#00764F",
          },
          accent: {
            DEFAULT: "#CC0829",
            hover: "#CC0829",
          },
        },
        themeFill: {
          DEFAULT: "#FBF8EB",
          primary: "#00764F",
          accent: "#CC0829",
        },
      },
      borderColor: {
        theme: {
          primary: {
            base: "#00764F",
            hover: "#00764F",
          },
          accent: {
            DEFAULT: "#CC0829",
            hover: "#CC0829",
          },
        },
      },
      fill: {
        theme: {
          primary: "#00764F",
          accent: "#CC0829",
          white: "#FFFFFF",
          offWhite: "#FBF8EB",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
