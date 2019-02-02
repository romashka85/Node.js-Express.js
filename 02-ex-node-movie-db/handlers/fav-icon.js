const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    if (req.path === '/favicon.ico') {
        fs.readFile(path.join(__dirname,'../public/images/favicon.ico'), (err,data) => {
            if(err){
                console.log(err);
                return;
            }

            res.writeHead(200,{
                'Content-Type': 'image/x-icon'
            });
            res.write(data);
            res.end();
        });
    }
};