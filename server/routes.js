const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/todoList')
  .get(controllers.get)
  .post(controllers.post)
  .delete(controllers.delete)


// if we have more than one route:
// router
//   .route('/chores')
//   .get(controllers.chores.get)
//   .post(controllers.chores.post)

module.exports = router;