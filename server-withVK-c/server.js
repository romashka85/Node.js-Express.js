const http = require('http');
const url = require('url');
const fs = require('fs');
const handlers = require('./handlers/index');

const port = 8080;

http
    .createServer((req, res) => {
        req.path = url.parse(req.url).pathname;
        res.sendHtml = (path) => {
            fs.readFile(path, (err, data) => {
                res.writeHead(200, {
                    'content-type': 'text/html',
                });
                res.write(data);
                res.end();
            });
        };
        // eslint-disable-next-line no-restricted-syntax
        for (const handler of handlers) {
            if (handler(req, res) !== true) {
                break;
            }
        }
    }).listen(port);

console.log(`Web Server started at port: ${port}`);