const { DataTypes } = require('sequelize');

const userModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    validate: { notEmpty: { msg: "Username must be not empty" } }
  },
  password: {
    type: DataTypes.STRING,
    validate: { notEmpty: { msg: "Password must be not empty" } }
  }
};

const todoModel = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    validate: { notEmpty: { msg: "Title must be not empty" } }
  },
  description: {
    type: DataTypes.STRING,
    defaultValue: ""
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  trash: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
};

module.exports = {
  userModel,
  todoModel
};