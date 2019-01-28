const http = require('http');
// const greeter = require('./greeter');


const port = 8080;

// greeter.greed('Ivailo', (message) => {
//     console.log(new Date().getTime());
// });

http
    .createServer((req, res) => {
        res.write('Hello world');
        res.end();
    })
    .listen(port);

    console.log(`Web Server started at port: ${port}`);