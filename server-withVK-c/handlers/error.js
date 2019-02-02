const fs = require('fs');

function errorHandler(req, res) {
    fs.readFile('./error.html', 'utf8', (err, data) => {
        res.sendHtml('./error.html');
    });
}

module.exports = errorHandler;