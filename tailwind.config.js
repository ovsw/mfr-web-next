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
      // sans: ["Geomanist", "sans-serif"],
      sans: ["gilroy", "sans-serif"],
      // serif: ["americane"],
      serif: ["gilroy"],
      // cursive: ["fave-script-pro", "cursive"],
      cursive: ["Kalam", "cursive"],
    },
    extend: {
      colors: {
        primary: "#00764F",
        // accent: "rgba(224, 0, 51, 1)",
        accent: {
          DEFAULT: "#CC083E",
          50: "#FB91A1",
          100: "#FA7D90",
          200: "#F8566E",
          300: "#F72F4D",
          400: "#F30A3C",
          500: "#CC081C",
          600: "#960620",
          700: "#60041E",
          800: "#2A020D",
          900: "#000000",
        },
        tertiary: {
          DEFAULT: "#FEF7C1",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFCE9",
          500: "#FEF7C1",
          600: "#FDEF85",
          700: "#FCE749",
          800: "#FBE00C",
          900: "#C7B103",
        },
      },
      textColor: {
        theme: {
          offWhite: "#FAF7EA",
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
          white: "#FFFFFF",
          primary: "#00764F",
          accent: "rgba(224, 0, 51, 1)",
          offWhite: "#FAF7EA",
          tertiary: "#FEF7C1",
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
          muslin: "transparent",
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
