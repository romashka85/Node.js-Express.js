const url = require('url');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./error-handler')
const db = require('../config/dataBase')

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if(req.pathname.startsWith('/movies/details') && req.method === 'GET'){
        let filePath = path.normalize(path.join(__dirname, '../views/details.html'));
        let stream = fs.readFile(filePath, 'utf-8', (err, data) =>{
            if(err){
                errorHandler(err, res);
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            let movieIndex = req.pathname.substring(
                req.pathname.lastIndexOf('/') + 1,
                req.pathname.length);

            let movie = db[movieIndex];



            data = data.replace(
                '<div id="replaceMe">{{replaceMe}}</div>',
                '<div class="content">' +
                '<img src="' + movie.moviePoster + '" alt="" />' +
                '<h3>Tirle: ' + movie.movieTitle + '</h3>' +
                '<h3>Year: ' + movie.movieYear + '</h3>' +
                '<p3>' + movie.movieDescription + '</p3>' +
                '</div>'
            );


            res.write(data);
            res.end();

        });

    } else {
        return true;
    }
}