const fs = require('fs');

loadFile();

function loadFile(){
    fs.readFile('./data/data.json', (err, data)=>{
        const parsedData = JSON.parse(data.toString());
        parsedData.firstName = 'George';
        fs.writeFile('./data/data.json', JSON.stringify(parsedData), err=>{
            if(err) {
                return console.log(err);
            }
        });
    });
}