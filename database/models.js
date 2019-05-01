const Sequelize = require('sequelize');
const connection = require('./index.js');

const Todo = connection.define(
  'todo', 
  {
    todo: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    list_name: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  },
  { timestamps: false }
);

connection.sync({ force: false });

module.exports.Todo = Todo;