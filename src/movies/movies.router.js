const router = require('express').Router({ mergeParams: true });
const controller = require('./movies.controller');
const methodNotAllowed = require('../errors/methodNotAllowed');
const cors = require('cors');
const corsGet = cors({ methods: 'GET' });

router.use(cors());

router
  .route('/:movieId/critics')
  .get(corsGet, controller.critic)
  .options(corsGet)
  .all(methodNotAllowed);

router
  .route('/:movieId/reviews')
  .get(corsGet, controller.reviewList)
  .options(corsGet)
  .all(methodNotAllowed);

router
  .route('/:movieId/theaters')
  .get(corsGet, controller.theaterList)
  .options(corsGet)
  .all(methodNotAllowed);

router
  .route('/:movieId')
  .get(corsGet, controller.read)
  .options(corsGet)
  .all(methodNotAllowed);

router
  .route('/')
  .get(corsGet, controller.list)
  .options(corsGet)
  .all(methodNotAllowed);

module.exports = router;
