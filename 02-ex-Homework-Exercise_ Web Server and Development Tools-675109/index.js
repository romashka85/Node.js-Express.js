const http = require('http');
const port = 3000;
const handlers = require('./handlers')
const statusHandler = require('./handlers/status')

http.createServer((req, res) => {
    if(req.headers['statusheader'] === 'Full'){
        statusHandler(req, res);
    } else {
        for(let handler of handlers){
            if(!handler(req, res)){
                break;
            }
        }
    }
}).listen(port);