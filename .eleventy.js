const svgContents = require("eleventy-plugin-svg-contents");


module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy({ "assets/images": "images" });
    eleventyConfig.addPlugin(svgContents);



    eleventyConfig.addCollection("episodes", function(collection) {
      // get unsorted items
      // console.log(collection)
      return collection.getFilteredByTag('episode').reverse();
    });

    eleventyConfig.addFilter("slice", function(allItems, startSlice, endSlice) { return allItems.slice(startSlice, endSlice); });
  
  };