const service = require('./movies.service');
const asyncErrorBoundary = require('../errors/asyncErrorBoundary');

async function list(req, res, next) {
    const data = await service.list();
    res.json({ data });
}

async function read(req, res) {
    const knexInstance = req.app.get('db');
    const { movie } = res.locals;
    res.json({ data: movie });
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [read],
}