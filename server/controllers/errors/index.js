module.exports = (err, req, res, next) => {
	console.log(err);
	if (!err.statusCode) err.statusCode = 500;
	return res.status(err.statusCode).json({
		message: err.message,
		data: err.data,
	});
};
