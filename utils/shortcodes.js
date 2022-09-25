const eleventyImage = require("@11ty/eleventy-img");

module.exports = {
  basicImg: async function(filepath, alt, widths, classes, sizes) {

		let options = {
			formats: ["webp", "png"],
			widths: widths || [null],
			urlPath: "/static/images/",
			outputDir: "./_site/static/images/",
		};

		let stats = await eleventyImage(`./src${filepath}`, options);

		return eleventyImage.generateHTML(stats, {
			alt,
			loading: "lazy",
			decoding: "async",
			sizes: sizes || "(min-width: 22em) 30vw, 100vw",
			class: classes,
		});
	}
}
