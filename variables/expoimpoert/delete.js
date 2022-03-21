const fs = require('fs');
fs.unlink('sample.txt', (error) => {
    console.log('deleted');
})
