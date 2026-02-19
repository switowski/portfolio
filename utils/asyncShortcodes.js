// Only the image shortcodes makes sense to be async, other shortcodes won't benefit from being async

const Image = require('@11ty/eleventy-img');
const path = require('path');

// Helper to wrap HTML code in figure+figcaption
function _wrapFigure(output, caption) {
  return `
  <figure class='captioned-figure'>
    ${output}
    <figcaption>${caption}</figcaption>
  </figure>
  `;
}
function isGif(filepath) {
  const fileExt = filepath.split('.').pop();
  return ['gif'].includes(fileExt) ? true : false;
}

module.exports = {
  image: async function (src, alt = '', caption = '', cls = '', sizes = '100vw') {
    const srcPath = path.join('src/', src);

    sharpOptions = {
      // If we are converting a GIF, we need to make WebP format animated too
      animated: isGif(src),
      // Disable pixel limit because it fails for GIFs
      limitInputPixels: false,
    };

    let metadata = await Image(srcPath, {
      // Single width for GIFs (animated WebP is expensive), all widths including original for images
      widths: isGif(src) ? [920] : [250, 600, 920, null],
      // WebP only - supported by all modern browsers (Safari 14+, 2020)
      formats: ['webp'],
      outputDir: 'dist/img/',
      urlPath: '/img/',
      sharpOptions: sharpOptions,
      // Use better quality of WebP images (at the price of 2x bigger size)
      sharpWebpOptions: { nearLossless: true },
    });

    let imageAttributes = {
      alt,
      sizes,
      class: cls,
      loading: 'lazy',
      decoding: 'async',
    };

    const imageHTML = Image.generateHTML(metadata, imageAttributes, { whitespaceMode: 'inline' });
    return caption ? _wrapFigure(imageHTML, caption) : imageHTML;

    // Dry run with printing
    // metadata['dryRun'] = true;
    // const stats = await Image(srcPath, metadata);
    // console.log(stats);
  },

  // Shortcode that will prepend path to the current post (only use in posts)
  postImage: async function (
    src,
    alt = '',
    cls = '',
    caption = '',
    sizes = '(max-width: 639px) calc(100vw - 32px), (max-width: 767px) 608px, (max-width: 960px) calc(100vw - 40px), 920px'
  ) {
    // Use return await _image() if you need to handle exceptions!
    const dirname = path.dirname(this.page.filePathStem);
    return module.exports.image(path.join(dirname, src), alt, caption, cls, sizes);
  },
};
