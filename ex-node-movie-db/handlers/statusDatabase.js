const fs = require('fs');
const path = require('path');
let db = require('../config/dataBase');


module.exports = (req, res) => {
    if (req.headers.statusheader === 'Full') {
        let fileToLoad = path.join(__dirname, '../views/status.html');
        fs.readFile(fileToLoad, (err, data) => {
            if (err) {
                console.log(err);
                return;
            }

            res.writeHead(200, {
                'Content-Type':'text/html'
            });
            data = data.toString().replace('{{replaceMe}}',`Total number of movies -> ${db.length}`);
            res.write(data);
            res.end();
        });
    }
};