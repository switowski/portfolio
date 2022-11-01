const fs = require('fs');
const crypto = require('crypto');
const CleanCSS = require('clean-css');

const { DateTime, Duration } = require('luxon');
// https://nodejs.org/api/util.html#util_util_inspect_object_options
const inspect = require('util').inspect;

const helpers = require('./utils/helpers.js');

// Return number of similar tags (or 0 if tagsA is undefined)
const getSimilarTags = function (tagsA, tagsB) {
  return tagsA?.filter(Set.prototype.has, new Set(tagsB)).length || 0;
};

module.exports = {
  // Text transformation filters
  // Unused for now
  // excerpt: function (str) {
  //   // TODO: Make it better
  //   return str.substring(0, 200).concat('...');
  // },

  // Generate hash from the content of a file
  hash: function (filepath) {
    const fileBuffer = fs.readFileSync('./dist' + filepath);
    const hash = crypto.createHash('sha1').update(fileBuffer).digest('base64');
    return hash;
  },
  // Unused for now
  // cssmin: function (code) {
  //   return new CleanCSS({}).minify(code).styles;
  // },

  // Data filters
  formatDate: function (date, format) {
    return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(format);
  },
  dateFromISO: function (timestamp) {
    return DateTime.fromISO(timestamp, { zone: 'utc' }).toJSDate();
  },
  humanizeDuration: function (date, format) {
    return Duration.fromISO(date).toHuman(format);
  },

  // Limit the number of elements returned from collection
  limit: function (arr, limit) {
    return arr.slice(0, limit);
  },

  // Return posts with at least one tag in common for generating similar posts (if not specified manually)
  generateSimilar: function (collection, path, tags) {
    return collection
      .filter((post) => {
        return getSimilarTags(post.data.tags, tags) >= 1 && post.data.page.inputPath !== path;
      })
      .sort((a, b) => {
        return getSimilarTags(b.data.tags, tags) - getSimilarTags(a.data.tags, tags);
      });
  },

  // Return similar posts specified in "similar" item in front matter of a given post
  filterSimilar: function (collection, related) {
    const filtered = collection.filter((page) => related.includes(page.fileSlug));
    // Sort returned posts by their position in front matter
    return filtered.sort((a, b) => related.indexOf(a.fileSlug) - related.indexOf(b.fileSlug));
  },

  // Filter out posts that are not live (publication date is in the future)
  filterLivePosts: function (collection) {
    return collection.filter(helpers.isLivePost);
  },

  // Filter data collection and only pick items where attr is equal to value (e.g. to pick featured talks)
  // If we need to reuse this, make it more generic: https://11ty.rocks/eleventyjs/data-arrays/
  filterAttr: function (arr, attr, val) {
    return arr.filter((item) => item[attr] === val);
  },

  // Helper to inspect variables
  debug: function (content) {
    return `<pre>${inspect(content)}</pre>`;
  },

  // Shuffle (randomize) list
  shuffle: function (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  },
};
