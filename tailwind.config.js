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

const round = num =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "")
const rem = px => `${round(px / 16)}rem`

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
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
          accent: "rgba(224, 0, 51, 1)",
        },
      },
      backgroundColor: {
        themeButton: {
          primary: {
            DEFAULT: "#00764F",
            hover: "#00764F",
          },
          accent: {
            DEFAULT: "rgba(224, 0, 51, 1)",
            hover: "rgba(224, 0, 51, 1)",
          },
        },
        themeFill: {
          DEFAULT: "#FFFFFF",
          primary: "#00764F",
          accent: "rgba(224, 0, 51, 1)",
          offWhite: "#FAF7EA",
        },
      },
      borderColor: {
        theme: {
          primary: {
            base: "#00764F",
            hover: "#00764F",
          },
          accent: {
            DEFAULT: "rgba(224, 0, 51, 1)",
            hover: "rgba(224, 0, 51, 1)",
          },
        },
      },
      fill: {
        theme: {
          primary: "#00764F",
          accent: "rgba(224, 0, 51, 1)",
          white: "#FFFFFF",
          offWhite: "#FAF7EA",
        },
      },
      typography: theme => ({
        "3xl": {
          css: {
            fontSize: rem(28),
            lineHeight: round(40 / 28),
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
