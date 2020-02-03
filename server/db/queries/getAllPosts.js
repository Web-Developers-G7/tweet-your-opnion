const connection = require('../config/connection');

const allPosts = () => {
  return connection.query('SELECT * FROM posts returning *');
};

module.exports = allPosts;
