const signup = require('./signup');
const login = require('./login');
const getUserPosts = require('./getUserPosts');
const errorHandler = require('./errors');
const getPostById = require('./getPostById')

module.exports = {
	signup,
	login,
	getUserPosts,
	errorHandler,
	getPostById
};
