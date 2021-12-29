const svgContents = require("eleventy-plugin-svg-contents");
const rssPlugin = require('@11ty/eleventy-plugin-rss');


module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy({ "assets/images": "images" });
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(rssPlugin);



    eleventyConfig.addCollection("episodes", function(collection) {
      // get unsorted items
      const episodesList = collection.getFilteredByTag('episode').reverse();
      console.log(episodesList.length)
      return episodesList;
    });

    eleventyConfig.addFilter("slice", function(allItems, startSlice, endSlice) { return allItems.slice(startSlice, endSlice); });
  
  };