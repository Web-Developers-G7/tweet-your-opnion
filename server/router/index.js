const Router = require('express').Router();

const { signup, login, getUserPosts, getAllPosts } = require('../controllers');
const { authorizeUser } = require('../middlewares');
const { errorHandler } = require('../controllers');

Router.post('/signup', signup);
Router.post('/login', login);
Router.use(authorizeUser);
Router.get('/getUserPosts', getUserPosts);
Router.get('/posts', getAllPosts);
Router.use(errorHandler);

module.exports = Router;
