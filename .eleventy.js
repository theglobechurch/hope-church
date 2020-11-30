const collections = require("./utils/collections.js");
const filters = require("./utils/filters.js");

module.exports = function (eleventyConfig) {
  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // Alias these layouts
  eleventyConfig.addLayoutAlias("default", "base.njk");

  // Add Tailwind Output CSS as Watch Target
  eleventyConfig.addWatchTarget("./_tmp/static/css/style.css");

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./src/static/favicon.ico": "./favicon.ico",
    "./src/static/css": "./static/css",
    "./src/static/images/*.svg": "./static/images",
    "./src/static/fonts": "./static/fonts",
    "./src/static/js": "./static/js",
    "./_tmp/static/css/style.css": "./static/css/style.css",
  });

  // Collections
  Object.keys(collections).forEach((collectionName) => {
    eleventyConfig.addCollection(collectionName, collections[collectionName]);
  });

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName]);
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
      data: "_data",
      includes: "_includes",
    },
    templateFormats: ["html", "njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
  };
};
