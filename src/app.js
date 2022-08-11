if (process.env.USER) require('dotenv').config();
const express = require('express');
const app = express();

//routers
//const criticsRouter = require('./critics/critics.router');
const moviesRouter = require('./movies/movies.router');
const reviewsRouter = require('./reviews/reviews.router');
const theatersRouter = require('./theaters/theaters.router');

//errors
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');

app.use(express.json());

//app.use('/critics', criticsRouter);
app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);
app.use('/theaters', theatersRouter);

app.use(errorHandler);
app.use(notFound);

module.exports = app;
