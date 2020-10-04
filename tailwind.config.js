module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        cultured: "#f1f1f1",
        spacecadet: "#323158",
        liberty: "#5A589D",
        darkslateblue: "#444276",
      },
      screens: {
        tiny: { max: "374px" },
      },
    },
    typography: {
      default: {
        css: {
          color: "#fff",
          "h2, h3, h4": {
            color: "#fff",
          },
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
