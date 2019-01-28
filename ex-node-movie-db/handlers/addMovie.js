const fs = require('fs');
const path = require('path');
const qs = require('querystring');
let database = require('../config/dataBase');



function loadAddPage(res,callback){
    fs.readFile(path.join(__dirname, '../views/addMovie.html'), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        if(callback){
            data = callback(data);
        }

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        res.end();

    });
}


module.exports = (req, res) => {
    if (req.path === '/addMovie' && req.method === 'GET') {
      loadAddPage(res);
    } else if (req.path === '/addMovie' && req.method === 'POST') {
        let dataString = '';

        req.on('data', (data) => {
            dataString += data;
        });
        
        req.on('end', () => {
            let movie = qs.parse(dataString);

            if (movie.movieTitle === "" || movie.moviePoster === "") {
                loadAddPage(res, (data) => {
                    return data = data.toString().replace('{{content}}','<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>')
                });
            } else {
                loadAddPage(res, (data) => {
                    return data = data.toString().replace('{{content}}','<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>')
                });
                database.push(movie);
            }
        });

    }
};