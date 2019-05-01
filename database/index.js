const mysql = require('mysql2');
const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Success connecting to the database!');
  })
  .catch(err => {
    console.log('Unable to connect to the database', err);
  });

  module.exports = connection;