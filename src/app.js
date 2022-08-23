if (process.env.USER) require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

//routers
const moviesRouter = require('./movies/movies.router');
const reviewsRouter = require('./reviews/reviews.router');
const theatersRouter = require('./theaters/theaters.router');

//errors
const errorHandler = require('./errors/errorHandler');
const notFound = require('./errors/notFound');

app.use(cors({ origin: 'https://shielded-hamlet-66106.herokuapp.com' }));
app.get('/', (req, res) => {
    res.send('CORS solved');
})
app.use(express.json());
app.use(express.static('public'));

app.use('/movies', moviesRouter);
app.use('/reviews', reviewsRouter);
app.use('/theaters', theatersRouter);

app.use(errorHandler);
app.use(notFound);

module.exports = app;
