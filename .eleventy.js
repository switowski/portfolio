const pluginNavigation = require('@11ty/eleventy-navigation');
const ErrorOverlay = require('eleventy-plugin-error-overlay');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const timeToRead = require('eleventy-plugin-time-to-read');
const eleventyPluginFeathericons = require('eleventy-plugin-feathericons');
const svgSprite = require('eleventy-plugin-svg-sprite');
const pluginRss = require('@11ty/eleventy-plugin-rss');
const brokenLinksPlugin = require('eleventy-plugin-broken-links');

// Markdown-it plugins
const markdownIt = require('markdown-it');
const markdownItSub = require('markdown-it-sub');
const markdownItSup = require('markdown-it-sup');
const markdownItFootnote = require('markdown-it-footnote');
const markdownItContainer = require('markdown-it-container');
const markdownItAnchor = require('markdown-it-anchor');

const filters = require('./utils/filters.js');
const asyncFilters = require('./utils/asyncFilters.js');
const shortcodes = require('./utils/shortcodes.js');
const asyncShortcodes = require('./utils/asyncShortcodes.js');
const helpers = require('./utils/helpers.js');

// Select posts with "featured: true" in the front matter
const featuredPosts = (p) => p.data.featured === true;

module.exports = function (config) {
  // Global data
  config.addGlobalData('NODE_ENV', process.env.NODE_ENV);

  // Don't process drafts in production
  if (process.env.NODE_ENV === 'production') {
    config.ignores.add('src/drafts/**/*.md');
  }

  // Plugins
  config.addPlugin(pluginNavigation);
  config.addPlugin(syntaxHighlight, {
    // Added in 3.1.1, add HTML attributes to the <pre> or <code> tags
    preAttributes: {
      // Added in 4.1.0 you can use callback functions too
      'data-language': function ({ language, content, options }) {
        return language;
      },
    },
  });
  config.addPlugin(ErrorOverlay);
  config.addPlugin(timeToRead);
  config.addPlugin(eleventyPluginFeathericons);
  config.addPlugin(pluginRss);
  config.addPlugin(brokenLinksPlugin, {
    cacheDuration: '1w', // Cache checked links for 1 week instead of 1 day
    loggingLevel: 1, // Only report broken links, ignore redirects
    excludeUrls: ['https://www.pexels.com/*', 'https://pixabay.com/*', 'https://open.spotify.com/*'], // Some websites block robots, so links seems broken
  });
  config.addPlugin(svgSprite, {
    path: './src/_assets/icons', // relative path to SVG directory
  });

  // Markdown-it plugins
  let options = {
    html: true,
  };
  let markdownLibrary = markdownIt(options)
    .use(markdownItSub)
    .use(markdownItSup)
    .use(markdownItFootnote)
    .use(markdownItContainer, 'callout-info')
    .use(markdownItContainer, 'callout-warning')
    .use(markdownItContainer, 'callout-success')
    .use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        placement: 'after',
        class: 'direct-link',
        symbol: '#',
      }),
      level: [1, 2, 3, 4],
      slugify: config.getFilter('slugify'),
    });
  config.setLibrary('md', markdownLibrary);

  // Filters
  Object.keys(filters).forEach((filterName) => {
    config.addFilter(filterName, filters[filterName]);
  });

  // Async filters
  Object.keys(asyncFilters).forEach((filterName) => {
    config.addNunjucksAsyncFilter(filterName, asyncFilters[filterName]);
  });

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    config.addNunjucksShortcode(shortcodeName, shortcodes[shortcodeName]);
  });

  // Async shortcodes
  Object.keys(asyncShortcodes).forEach((shortcodeName) => {
    config.addNunjucksAsyncShortcode(shortcodeName, asyncShortcodes[shortcodeName]);
  });

  // Layouts are now automatically loaded with with "dir:" config below
  // config.addLayoutAlias('base', 'layouts/base.njk');

  // Collections: Posts
  config.addCollection('posts', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md').filter(helpers.isLivePost);
  });
  // // Collections: Drafts
  // config.addCollection('drafts', function (collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/drafts/**/*.md');
  // });
  // Collections: Tags
  config.addCollection('tags', function (collectionApi) {
    let tagSet = new Set();
    collectionApi
      .getAll()
      .filter(helpers.isLivePost)
      .forEach((item) => {
        (item.data.tags || []).forEach((tag) => tagSet.add(tag));
      });
    return [...tagSet].sort();
  });
  // Collections: Featured posts
  config.addCollection('featured', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/posts/**/*.md').filter(featuredPosts);
  });

  // Browsersync config
  config.setBrowserSyncConfig({
    // Add config from ErrorOverlay plugin
    ...config.browserSyncConfig,
    files: ['dist/**/*'],
    // open: true,
    // snippet: false,
  });

  // Pass-through files
  config.addPassthroughCopy('src/static');
  config.addPassthroughCopy('src/site.webmanifest');
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy('_redirects');
  // Copy all covers for posts to be used by og:image/twitter:image social tags
  config.addPassthroughCopy('src/posts/**/cover.jpg');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_includes/layouts',
    },
    markdownTemplateEngine: 'njk', // process Nunjucks code in Markdown before rendering Markdown
    // templateFormats: ['html', 'njk', 'md', 'jpg', 'png'],
  };
};
