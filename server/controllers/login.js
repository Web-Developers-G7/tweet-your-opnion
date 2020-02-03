const jwt = require('jsonwebtoken');
const { generateToken } = require('./utils');
const { compare } = require('bcrypt');

const { loginSchema } = require('./validation');
const { getUserByEmail } = require('../db/queries');

module.exports = (req, res, next) => {
  const { body: userData } = req;

  if (Object.keys(userData).length !== 2) {
    next({ message: 'bad request', statusCode: 400 });
  }

  loginSchema
    .validate(userData)
    .then(() => getUserByEmail(userData.email))
    .then(({ rows }) => {
      if (!rows[0]) {
        throw { message: 'you are not signed up', statusCode: 404 };
      }
      return {
        authed: compare(userData.password, rows[0].password),
        user_id: rows[0].id
      };
    })
    .then(({ authed, user_id }) => {
      if (authed === false) {
        throw { message: 'incorrect password', statusCode: 403 };
      }
      return { token: generateToken(userData.email), id: user_id };
    })
    .then(({ token, id }) => {
      res.cookie('token', token);
      res.json({ id });
    })
    .catch(error => {
      if (error.name === 'ValidationError') {
        next({
          message: error.name,
          statusCode: 400,
          data: error.errors
        });
      } else next(error);
    });
};
