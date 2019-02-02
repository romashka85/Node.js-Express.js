const url = require('url');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./error-handler');
const db = require('../config/dataBase');

module.exports = (req, res) => {
    req.pathName = req.pathname || url.parse(req.url).pathname;

    if(req.pathName === '/viewAllMovies' && req.method === 'GET'){
        let filePath = path.normalize(path.join(__dirname, '../views/viewAll.html'));
        let stream = fs.readFile(filePath, 'utf-8', (err, data) =>{
            if(err){
                errorHandler(err, res);
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            let moviesData = '';

            for(let i=0; i<db.length; i++){
                moviesData += '<div class="movie"><a href="/movies/details/'+i+'"><img class="moviePoster" src="'+ db[i].moviePoster +'" /></a></div>';
            }


            data = data.replace('{{replaceMe}}', moviesData);


            res.write(data);
            res.end();

        });

    } else {
        return true;
    }
};