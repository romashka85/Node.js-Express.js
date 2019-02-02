const fs = require('fs');

const files = fs.readdirSync('./');
const syncFiles = fs.readdir('../../ffclear', (err, data)=>{
if(err){
    console.log('Warning err!');
    return;
}
console.log(data);
});

console.log(files);