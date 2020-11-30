const path = require("path");
const util = require("util");
const glob = require("glob");
const sharp = require("sharp");
const mkdirp = require("mkdirp");

const outputPath = "_site/static/images/";

const resizeConf = {
  sizes: [
    {
      width: 250,
      height: 250,
      rename: { suffix: "-sq-250" },
    },
    {
      width: 550,
      height: 550,
      rename: { suffix: "-sq-550" },
    },
  ],
  jpegOptions: {
    quality: 80,
    progressive: true,
    withMetadata: false,
    force: false,
    //   withoutEnlargement: true,
    //   errorOnUnusedImage: false,
    //   errorOnEnlargement: false
  },
  pngOptions: {
    compressionLevel: 8,
    force: false,
  },
};

module.exports = class {
  async data() {
    const filePath = path.join(__dirname, `/images/`);
    return {
      permalink: `/static/images/images.json`,
      eleventyExcludeFromCollections: true,
      filePath,
    };
  }

  async loadImages(imgFolder) {
    const cwd = path.resolve(imgFolder.file);
    const getImages = util.promisify(glob);
    const processedImages = [];

    const imgs = await getImages("**/*(*.jpg|*.png|*.gif)", { cwd: cwd });
    imgs.forEach(function (img) {
      const ext = path.extname(img);
      const base = path.basename(img, ext);
      const dir = path.dirname(img);

      mkdirp.sync(path.join(outputPath, dir));

      let passThroughImg = sharp(imgFolder.file + img);
      passThroughImg.toFile(path.join(outputPath, dir, base + ext));

      resizeConf.sizes.forEach(function (size) {
        const newPath = path.join(
          outputPath,
          dir,
          base + size.rename.suffix + ext,
        );
        const image = sharp(imgFolder.file + img);
        image
          .jpeg(resizeConf.jpegOptions)
          .png(resizeConf.pngOptions)
          .resize({
            width: size.width,
            height: size.height ? size.height : null,
            withoutEnlargement: true,
            kernel: "lanczos2",
          })
          .toFile(newPath);
      });

      processedImages.push(img);
    });

    return JSON.stringify(processedImages, null, "\t");
  }

  async render({ filePath }) {
    try {
      return await this.loadImages({ file: filePath });
    } catch (err) {
      throw new Error(err);
    }
  }
};
