let http = require('http');
let port = 8000;
let url = require('url');
let handlers = require('./handlers/index');
let statusHandler = require('./handlers/statusDatabase');

http
    .createServer((req, res) => {
        req.path = url.parse(req.url).pathname;
        if(req.headers.statusheader === 'Full'){
            statusHandler(req, res);
        }else {
            for (let handler of handlers) {
                handler(req, res);
            }
        }
        
    }).listen(port);

console.log('Working on Server');
