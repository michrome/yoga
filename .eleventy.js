module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("friendlyDate", function (value) {
    return require("./src/date-helper.js").friendlyDate(value);
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addWatchTarget("./css/");
  eleventyConfig.on("beforeWatch", () => {
    require("child_process").execSync("npm run css");
  });
  eleventyConfig.setBrowserSyncConfig({
    snippetOptions: {
      // Insert BrowserSync's JavaScript immediately after the DOCTYPE tag,
      // instead of the <body> tag.
      rule: {
        match: /<!DOCTYPE html>/i,
        fn: function (snippet, match) {
          return snippet + match;
        },
      },
    },
  });
};
