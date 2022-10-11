const theme = document.documentElement.getAttribute('data-theme');

const giscusAttributes = {
  src: 'https://giscus.app/client.js',
  'data-repo': 'switowski/switowski.com-comments',
  'data-repo-id': 'R_kgDOIMKu_A',
  'data-category': 'Announcements',
  'data-category-id': 'DIC_kwDOIMKu_M4CR62c',
  'data-mapping': 'pathname',
  'data-strict': '0',
  'data-reactions-enabled': '0',
  'data-emit-metadata': '0',
  'data-input-position': 'top',
  'data-theme': theme,
  'data-lang': 'en',
  crossorigin: 'anonymous',
  async: '',
};

const giscusScript = document.createElement('script');
Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));

const commentsContainer = document.getElementById('comments');
commentsContainer.appendChild(giscusScript);
