const fs = require('fs');


fs.rename('./data/in.js', './data/index.js', function(err) {
    if ( err ) console.log('ERROR: ' + err);
});