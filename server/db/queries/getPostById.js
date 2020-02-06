const connection = require('../config/connection');
module.exports = (id) => {
	let data = {};
	return connection.query('SELECT * FROM posts WHERE posts.id =$1', [id])
		.then(({ rows }) => {
			data.post = rows[0];
			return connection.query('SELECT * FROM comments WHERE post_id=$1', [id])
		}).then(({ rows }) => {
			data.comments = rows;
			return data;
		});
};
