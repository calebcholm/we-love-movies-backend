const router = require('express').Router();
const controller = require('./critics.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');
const cors = require('cors');

router.use(cors());

router
    .route('/:criticId')
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed);

module.exports = router;