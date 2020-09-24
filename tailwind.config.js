module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      maxHeight: {
        halfscreen: "50vh",
      },
      width: {
        halfscreen: "50vw",
      },
      colors: {
        cultured: "#f1f1f1",
        spacecadet: "#323158",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
