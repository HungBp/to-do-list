/* eslint-disable no-unused-vars */
/*global process*/

const { Sequelize } = require('sequelize');
const { userModel, todoModel } = require('../model/dbModel');
// initialize db
const sequelize = new Sequelize(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`, {logging: false});
const User = sequelize.define('User', userModel);
const Todo = sequelize.define('Todo', todoModel);

// check db connection
sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully'))
  .catch(error => console.error('Unable to connect to the database'));

// add user model to request
const userModelReq = (req, res, next) => {
  User.sync(); /* User.sync({ alter: true }); */
  req.user = User;
  next();
};

// add todo model to request
const todoModelReq = (req, res, next) => {
  Todo.sync();
  req.todo = Todo;
  next();
};

module.exports = {
  userModelReq,
  todoModelReq
}