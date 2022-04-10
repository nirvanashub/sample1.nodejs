<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 4000;

app.get('/', function(req,res) {
    res.send('hello world')
});

app.get('/showMobileDetails', function (req, res) {
    const samsung = {
        model: 's3',
        releaseDate: '2020',
        price: 24345
    }
    res.send(samsung);
});

app.get('/weather', (req, res) => {
    // code and logic that will be executed and return the data back to user/customer
});

app.get('/amIAuthorized', function (req, res) {
    res.status(300);
    res.send('Not authorized');
});

app.get('/address/:city/:housenumber', (req, res) => {
console.log(req.params.city, req.params.housenumber);
res.send(`hello guys ${req.params.city} ${req.params.housenumber}`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});

// how to pass queryStrings in the get url
// how to pass parameters in the get url
=======
const express = require('express');
const app = express();
const port = 4000;

app.get('/', function(req,res) {
    res.send('hello world')
});

app.get('/showMobileDetails', function (req, res) {
    const samsung = {
        model: 's3',
        releaseDate: '2020',
        price: 24345
    }
    res.send(samsung);
});

app.get('/weather', (req, res) => {
    // code and logic that will be executed and return the data back to user/customer
});

app.get('/amIAuthorized', function (req, res) {
    res.status(300);
    res.send('Not authorized');
});

app.get('/address/:city/:housenumber', (req, res) => {
console.log(req.params.city, req.params.housenumber);
res.send(`hello guys ${req.params.city} ${req.params.housenumber}`)
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});

// how to pass queryStrings in the get url
// how to pass parameters in the get url
>>>>>>> a3339e7df4be0cb7ade162fd9eaa37cc9aaf406c
// how to make post calls