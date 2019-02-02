const url = require('url');
const fs = require('fs');
const path = require('path');
const errorHandler = require('./error-handler');
const db = require('../config/dataBase');

module.exports = (req, res) => {
    req.pathName = req.pathname || url.parse(req.url).pathname;

    if(req.pathName === '/' && req.method === 'GET'){
        let filePath = path.normalize(path.join(__dirname, '../views/status.html'));
        let stream = fs.readFile(filePath, 'utf-8', (err, data) =>{
            if(err){
                errorHandler(err, res);
                return;
            }

            res.writeHead(200, {
                'Content-Type': 'text/html',
            });

            data = data.replace('{{replaceMe}}', 'Total number of movies: '+ db.length);
            res.write(data);
            res.end();
        });
    } else {
        return true;
    }
};