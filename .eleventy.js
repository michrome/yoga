module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("friendlyDate", function (value) {
    return require("./src/date-helper.js").friendlyDate(value);
  });
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addWatchTarget("_tmp/");
  eleventyConfig.setBrowserSyncConfig({
    injectChanges: false,
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
  eleventyConfig.setUseGitIgnore(false);
};
