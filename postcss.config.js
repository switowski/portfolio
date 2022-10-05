const cssnano = require('cssnano');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('postcss-extend-rule'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
    process.env.NODE_ENV === 'production' ? cssnano({ preset: 'default' }) : null,
  ],
};
