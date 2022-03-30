const fs = require('fs');
fs.writeFile('.\sample.txt', 'hello shubham', (error, data) => {
    console.log('the data is saved');
})