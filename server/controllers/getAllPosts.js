const getAllPosts = require('../db/queries/getAllPosts');

const allPosts = (req, res, next) => {
  getAllPosts()
    .then(({ rows }) => {
      return res.json({
        posts: rows
      });
    })
    .catch(next);
};
module.exports = allPosts;
