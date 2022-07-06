const fs = require('fs');
const input = process.argv[2];

const word = input.split(' ');
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.includes(word));
});

