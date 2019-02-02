const fs = require('fs');
const path = require('path');

module.exports = (req,res) => {
    if(req.path === '/'){
        fs.readFile(path.join(__dirname,'../views/home.html'), (err,data) => {
            if(err){
                console.log(err);
                return;
            }

            res.writeHead(200, {
                'Content-Type':'text/html'
            });
            res.write(data);
            res.end();
        });
    }
};