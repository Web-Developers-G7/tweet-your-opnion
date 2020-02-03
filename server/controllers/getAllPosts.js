const getAllPosts = require('../db/queries/getAllPosts');

const allPosts = (req, res, next) => {
  const { id } = req.params;
  getAllPosts(id)
    .then(({ rows }) => {
      return res.json({
        data: rows
      });
    })
    .catch(next);
};
module.exports = allPosts;
