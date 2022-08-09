const knex = require('../db/connection');

function reviewList(movieId) {
    return knex('reviews as r')
        .select('r.*')
        .where({ 'r.movie_id': movieId });
}

function theaterList(movieId) {
  return knex('theaters as t')
    .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
    .join('movies as m', 'mt.movie_id', 'm.movie_id')
    .select('t.*')
    .where({ 'm.movie_id': movieId })
    .where('is_showing');
}

function list() {
  return knex('movies').select('*');
}

function read(movieId) {
  return knex('movies as m')
    .select('m.*')
    .where({ 'm.movie_id': movieId })
    .first();
}

module.exports = {
  list,
  reviewList,
  theaterList,
  read,
};
