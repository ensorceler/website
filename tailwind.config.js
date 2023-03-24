const { fontFamily } = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...fontFamily.sans],
        overpassMono: ["var(--font-overpass-mono)", ...fontFamily.serif],
      },
      colors: {
        blurple: "#5865F2",
      },
      keyframes: {},
    },
  },
  plugins: [
    {
      handler: (tw) => {
        tw.matchUtilities(
          {
            "text-glow": (value) => ({
              "text-shadow": `0 0 10px ${value}, 0 0 150px ${value}`,
            }),
            glow: (value) => ({
              filter: `drop-shadow(0px 0px 7px ${value})`,
            }),
          },
          {
            values: flattenColorPalette(tw.theme("colors")),
            type: "color",
          }
        );
      },
    },
  ],
};
