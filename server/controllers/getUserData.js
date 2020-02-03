const userData = require('../db/queries/getUserById');

const data = (req, res, next) => {
  const { id } = req.params;
  userData(id)
    .then(({ rows }) => {
      res.json(rows);
    })
    .catch(next);
};

module.exports = data;
