const knex = require('../db/connection');
const addCritic = require('../utils/addCritic')

function reviewList(movieId) {
  return knex('reviews as r')
    .join('critics as c', 'r.critic_id', 'c.critic_id')
    .where({ 'r.movie_id': movieId })
    .select(
      'r.*',
      'c.critic_id as critic.critic_id',
      'c.preferred_name as critic.preferred_name',
      'c.surname as critic.surname',
      'c.organization_name as critic.organization_name'
    )
    .then(addCritic);
}

function theaterList(movieId) {
  return knex('theaters as t')
    .join('movies_theaters as mt', 't.theater_id', 'mt.theater_id')
    .select('t.*')
    .where({ 'mt.movie_id': movieId });
}

function list(isShowing) {
  if (isShowing === 'true') {
    return listShowing();
  }
  return knex('movies').select('*');
}

function read(movieId) {
  return knex('movies as m')
    .select('m.*')
    .where({ 'm.movie_id': movieId })
    .first();
}

function listShowing() {
  return knex('movies as m')
    .join('movies_theaters as mt', 'm.movie_id', 'mt.movie_id')
    .select(
      'm.movie_id',
      'm.title',
      'm.runtime_in_minutes',
      'm.rating',
      'm.description',
      'm.image_url'
    )
    .groupBy('m.movie_id')
    .where({ is_showing: true });
}

module.exports = {
  list,
  listShowing,
  reviewList,
  theaterList,
  read,
};
