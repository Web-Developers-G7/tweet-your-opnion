const connection = require('../config/connection');

const allPosts = (userId) => {
  return connection.query('SELECT * FROM posts INNER JOIN users on users.id=$1',[userId]);
};

module.exports = allPosts;
