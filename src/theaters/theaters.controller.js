const service = require('./theaters.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');
const mapProperties = require('../utils/map-properties');
const reduceProperties = require('../utils/reduce-properties');

async function list(req, res, next) {
  res.json({ data: await service.list() });
}

module.exports = {
  list: [asyncErrorBoundary(list)],
};
