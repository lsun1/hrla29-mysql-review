const db = require('../database/models.js'); //linking db to server

//!! post requests are in body (req.body) !!
module.exports = {
  post: (req, res) => {
    console.log('IN POST');
    const { todo, listName } = req.body;

    db.Todo.create({   //exported Todo module
      todo: todo,
      listName: listName
    })
    .then(() => {
      res.status(201).send('Success creating new entry');
    })
    .catch(err => {
      res.status(404).send('Error creating new entry', err);
    });
  },
  get: (req, res) => {
    console.log('IN GET');

    const listName = req.query; //req requests always in req.query, decontruct from req.query

    db.Todo.findAll({    //can also use findAll() with no params in this case
      listName: listName
    })
    .then(todos => {
      if (todos) {
        res.status(200).send(todos)
      } else {
        res.status(404).send('List not found');
      }
    })
    .catch(err => {
      res.status(404).send('Error getting items', err);
    });
  },
  delete: (req, res) => {
    console.log('IN DELETE');

    const { listName, index } = req.query;  //not req.params because of axios

    db.Todo.destroy({
      where: {
        id: index
      }
    })
    .then(() => {
      res.status(202).send('Todo deleted');
    })
    .catch(err => {
      res.status(404).send('Item does not exist', err);
    })
  }
};