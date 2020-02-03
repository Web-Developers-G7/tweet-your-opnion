const connection = require('../config/connection');

module.exports = id => {
	return connection.query('SELECT * FROM users INNER JOIN posts on posts.user_id=users.id WHERE users.id = $1', [id]);
};
