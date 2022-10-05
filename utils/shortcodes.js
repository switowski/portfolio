module.exports = {
  // Generate URL to another post (similar to Jekyll's post_url)
  postUrl: function (slug) {
    const collections = this.ctx?.collections || {};
    // Search in the "posts" collection
    const posts = collections.posts || [];
    const page = posts.find((p) => p.fileSlug === slug);
    if (page) {
      // We found a matching slug/filePathStem, return the page's `url` property.
      return page.url;
    }
    // FAIL
    throw new Error(`Unknown page slug: "${slug}"`);
  },

  // Generate ASCIMENA HTML code
  ascii: function (id) {
    return `
    <div class="tc">
      <script id="${id}" src="https://asciinema.org/a/${id}.js" async ></script>
    </div>
    `;
  },
};
