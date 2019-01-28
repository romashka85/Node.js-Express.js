const fs = require('fs');
const path = require('path');
const url = require('url');
const errorHandler = require('./error-handler');
const contentTypes = require('../config/contentTypes');

function getContentType(url){
    let extention = url.substring(url.lastIndexOf('.') + 1, url.length);
    return contentTypes[extention];
}

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if(req.pathname.startsWith('/public/') && req.method === 'GET'){
        let filePath = path.normalize(
            path.join(__dirname, '..' + req.pathname)
        )

        let stream = fs.createReadStream(filePath);

        stream.on('error',(err) =>{
            errorHandler(err, res);
            return;
        })

        res.writeHead(200, {
            'Content-Type': getContentType(req.pathname),
        });

        stream.pipe(res);
    }else {
        return true;
    }
}