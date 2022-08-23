if (process.env.USER) require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.get('/', function (req, res, next) {
    res.sendStatus(200)
});

//routers
const moviesRouter = require('./movies/movies.router');
const reviewsRouter = require('./reviews/reviews.router');
const theatersRouter = require('./theaters/theaters.router');

//errors
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');

app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);
app.use('/theaters', theatersRouter);

app.use(errorHandler);
app.use(notFound);

module.exports = app;
