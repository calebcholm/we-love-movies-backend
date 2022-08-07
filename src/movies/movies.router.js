const router = require('express').Router();
const controller = require('./movies.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');
const cors = require('cors');

router.use(cors());

//router
  //.route('/?is_showing=true')
  //.get(controller.read)
  //.put(controller.update)
  //.delete(controller.delete)
  //.all(methodNotAllowed);

router
  .route('/')
  .get(controller.list)
  .all(methodNotAllowed);

module.exports = router;
