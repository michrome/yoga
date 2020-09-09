module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("friendlyDate", function (value) {
    return require("./src/date-helper.js").friendlyDate(value);
  });
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
};
