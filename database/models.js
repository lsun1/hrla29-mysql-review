const Sequelize = require('sequelize'); //require sequelize
const connection = require('./index.js'); //require database

const Todo = connection.define('todos', {  //table name
  todo: {
    type: Sequelize.STRING(50), //50 character limit
    allowNull: false //forcing user to enter something
  },
  listName: {
    type: Sequelize.STRING(50),
    allowNull: false
  }
}, { timestamps: false }); //set timestamps field off

connection.sync({ force: false }); //makes sure your tables won't be overwritten

module.exports.Todo = Todo; //export module as Todo