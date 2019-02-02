const fs = require('fs');

const data = {
    firstName: 'Peter',
    lastName: 'Kyky',
    age: '21'
};

const myStr = 'hello world';

fs.writeFileSync('./data/data.json', JSON.stringify(data));