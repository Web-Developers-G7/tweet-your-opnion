const connection = require('../config/connection');

module.exports = ({ postId, userId, content }) => {
	return connection.query(
		'INSERT INTO comments (post_id, user_id, comment_content) VALUES ($1, $2, $3) returning *',
		[postId, userId, content],
	);
};
