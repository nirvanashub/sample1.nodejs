const fs = require('fs');
   
// Using fs.exists() method
fs.exists('exist.txt', (exists) => {
  console.log(exists ? 'Found' : 'Not Found!');
});
