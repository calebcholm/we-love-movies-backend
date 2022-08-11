const service = require('./movies.service');
const reduceProperties = require('../utils/reduce-properties');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function reviewList(req, res, next) {
  const { movieId } = req.params;
  res.json({ data: await service.reviewList(movieId) });
}

async function theaterList(req, res, next) {
  const { movieId } = req.params;
  res.json({ data: await service.theaterList(movieId) });
}

async function list(req, res, next) {
  const data = await service.list(req.query.is_showing);
  res.json({ data });
}

async function read(req, res) {
  const { movie: data } = res.locals;
  res.json({ data });
}

async function isShowing(req, res, next) {
  res.json({ data: await service.list(req.query.is_showing) });
}

async function movieExists(req, res, next) {
  const movie = await service.read(req.params.movieId);
  if (movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: `Movie cannot be found.` });
}

function critic(req, res, next) {
  return next({ status: 404, message: `Critic cannot be found.`});
}

module.exports = {
  list: asyncErrorBoundary(list),
  isShowing,
  critic,
  reviewList: asyncErrorBoundary(reviewList),
  theaterList: asyncErrorBoundary(theaterList),
  read: [asyncErrorBoundary(movieExists), read],
};
