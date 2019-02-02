const staticHandler = require('./static');
const homeHandler = require('./home');
const aboutHandler = require('./about');
const errorHandler = require('./error');

module.exports = [
    staticHandler,
    aboutHandler,
    homeHandler,
    errorHandler,
];