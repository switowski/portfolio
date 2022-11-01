// Helper functions used in different places
const now = new Date();

module.exports = {
  // Returns false for posts in the future
  isLivePost: function (p) {
    return process.env.NODE_ENV === 'development' ? true : p.date <= now;
  },
};
