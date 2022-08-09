const service = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function reviewList(req, res, next) {
    const { movieId } = req.params;
    res.json({ data: await service.reviewList(movieId) });
    //needs critic data added here...
}

async function theaterList(req, res, next) {
    const { movieId } = req.params;
    res.json({ data: await service.theaterList(movieId) });
}

async function list(req, res, next) {
    const data = await service.list();
    res.json({ data });
}

async function read(req, res) {
    const { movie: data } = res.locals;
    res.json({ data });
}

async function movieExists(req, res, next) {
    const movie = await service.read(req.params.movieId);
    if (movie) {
        res.locals.movie = movie;
        return next();
    }
    next({ status: 404, message: `Movie cannot be found.` });
}

module.exports = {
  list: asyncErrorBoundary(list),
  reviewList: asyncErrorBoundary(reviewList),
  theaterList: asyncErrorBoundary(theaterList),
  read: [asyncErrorBoundary(movieExists), read],
};