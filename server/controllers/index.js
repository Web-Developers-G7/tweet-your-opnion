const signup = require('./signup');
const login = require('./login');
const getUserPosts = require('./getUserPosts');
const getAllPosts = require('./getAllPosts');
const errorHandler = require('./errors');

module.exports = {
  signup,
  login,
	getUserPosts,
	getAllPosts,
  errorHandler
};
