module.exports = {
  plugins: [
    require("tailwindcss")("tailwind.config.js"),
    // require("@fullhuman/postcss-purgecss")({
    //   content: ["*.*"],
    //   defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // }),
    // require("postcss-clean"),
  ],
};
