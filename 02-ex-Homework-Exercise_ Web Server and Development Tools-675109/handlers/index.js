const homeHandler = require('./home');
const staticFilesHandler = require('./static-files');
const allMoviesHandler = require('./all-movies');
const addMovieHandler = require('./add-movie');
const singleMoviePageHandler = require('./single-movie-page')

module.exports = [homeHandler, staticFilesHandler, allMoviesHandler, addMovieHandler, singleMoviePageHandler];