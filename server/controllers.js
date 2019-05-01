const db = require('../database/models.js');

module.exports = {
  post: (req, res) => {
    console.log('IN POST');

    const { todo, listName } = req.body;

    db.Todo.create({
      todo: todo,
      list_name: listName
    })
    .then(() => {
      res.status(201).send('Success creating entry!');
    })
    .catch(err => { 
      res.status(404).send(err);
    });
  },

  get: (req, res) => {
    console.log('IN GET');

    const { listName } = req.query;

    db.Todo.findAll({
      where: {
        list_name: listName 
      }
    })
    .then(todos => {
      if (todos) {
        res.status(200).send(todos);
      } else {
        res.status(404).send('List not found');
      }
    })
    .catch(err => {
      res.status(404).send(err)
    });
  },

  delete: (req, res) => {
    console.log('IN DELETE');

    const { index } = req.query;

    db.Todo.destroy({
      where: {
        id: index
      }
    })
    .then(() => {
      res.status(202).send('Todo deleted');
    })
    .catch(err => {
      res.status(404).send(err);
    });
  }
};