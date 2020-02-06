const { getPostById } = require('../db/queries/');

module.exports = (req, res, next) => {
  const { id } = req.params;
  getPostById(id)
    .then(result => {
      return res.json({ data: result });
    })
    .catch(next)
}
