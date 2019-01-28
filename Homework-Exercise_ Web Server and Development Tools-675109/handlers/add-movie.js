const url = require('url');
const fs = require('fs');
const qs = require('querystring');
const path = require('path');
const errorHandlerR = require('./error-handler');
const db = require('../config/dataBase');

function loadPage(res, fileChanging){
    let filePath = path.normalize(path.join(__dirname, '../views/addMovie.html'));
    let stream = fs.readFile(filePath, 'utf-8', (err, data) => {
        if(err){
            errorHandlerR(err, res);
            return;
        }

        if(fileChanging){
            data = fileChanging(data);
        }

        res.writeHead(200, {
            'Content-Type': 'text/html',
        });

        res.write(data);
        res.end();
    });
}

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if(req.pathname === '/addMovie' && req.method === 'GET'){
        loadPage(res);
    } else if(req.pathname === '/addMovie' && req.method === 'POST'){
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            let movie = qs.parse(body);
            if(!movie.movieTitle || !movie.moviePoster){
                loadPage(res, (data) =>{
                    return data.replace('{{replaceMe}}', '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>')
                })
            } else {
                db.push(movie);
                loadPage(res, (data) =>{
                    return data.replace('{{replaceMe}}', '<div id="successBox"><h2 id="successMsg">Movie added</h2></div>')
                })
            }
        });

    }else {
        return true;
    }
};