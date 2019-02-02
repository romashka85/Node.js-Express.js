let homePageHandler = require('./home-handler');
let favIconHandler = require('./fav-icon');
let displayMoviesHandler = require('./displayMovies');
let addMovieHandler = require('./addMovie');
let detailsMovieHandler = require('./detailsMovie');
let statusHandler = require('./statusDatabase');
let staticHandler = require('./static-handler');


module.exports = [homePageHandler, favIconHandler, displayMoviesHandler,addMovieHandler, detailsMovieHandler,statusHandler,staticHandler];
