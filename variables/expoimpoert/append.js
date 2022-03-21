const fs = require('fs');
fs.appendFile('sample.txt', 'hello shubham', (error, data) => {
    console.log('the data is saved');
})