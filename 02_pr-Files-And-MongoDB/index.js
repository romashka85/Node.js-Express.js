const fs = require('fs');
const path = require('path');
const http = require('http');

const port = 8080;

const comments = [
    {
        author: 'Peter',
        content: 'hi guys'
    },
    {
        author: 'George',
        content: 'hello Peter'
    }
]

http.createServer((req, res) => {
    fs.readFile(path.resolve('./static/index.html'), (err, page)=>{
       
        if(err){
            res.writeHead(500);
            res.write('Server error');
            res.end();
            console.error(err);
            return;
        }
        let commentsHtml = '';
        for(let comment of comments){
            commentsHtml += `<div>
            <span>From: ${comment.author}</span>
            <p>${comment.content}</p>
            </div>`;
        }
        res.write(page.toString().replace('{{comments}}', commentsHtml));
        res.end();
    });
   
}).listen(port, (err)=> console.log('Listening on port' + port));