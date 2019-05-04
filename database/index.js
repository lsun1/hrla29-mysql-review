const Sequelize = require('sequelize');
// const mysql = require('mysql2'); //not required??
//sequelize cannot make a db

const connection = new Sequelize('todo_list', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => {
    console.log('Success connecting to the database');
  })  //promises are baked into sequelize
  .catch(err => {
    console.error('Unable to connect to the database');
  })

  module.exports = connection;
