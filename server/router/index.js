const Router = require('express').Router();

const {
  signup,
  login,
  getUserPosts,
  getAllPosts,
  userData
} = require('../controllers');
const { authorizeUser } = require('../middlewares');
const { errorHandler } = require('../controllers');

Router.post('/signup', signup);
Router.post('/login', login);
Router.use(authorizeUser);
Router.get('/posts/:id', getAllPosts);
Router.get('/user/:id', userData);
Router.get('/getUserPosts', getUserPosts);
Router.use(errorHandler);

module.exports = Router;
