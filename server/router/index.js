const Router = require('express').Router();

const { signup, login, getUserPosts, getPostById } = require('../controllers');
const { authorizeUser } = require('../middlewares');
const { errorHandler } = require('../controllers');

Router.post('/signup', signup);
Router.post('/login', login);
Router.use(authorizeUser);
Router.get('/posts/:id', getPostById)
Router.get('/getUserPosts', getUserPosts);
Router.use(errorHandler);

module.exports = Router;
