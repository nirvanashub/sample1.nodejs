const express = require('express');
const app = express();
const port = 4000;

app.get('/paramsApi/:name/:age', function (req, res) {                              //url parameter
   res.send('Hello World' + req.params.name + req.params.age)
app.get('/paramsApi/:name/:age', function (req, res) {               //url parameterhttp://localhost:4000/paramsApi/shubham/25
    res.send('Hello World' + req.params.name + req.params.age)
});
app.get('/paramsApiQuery', function (req, res) {                              // query paramter
app.get('/paramsApiQuery', function (req, res) {                // query paramterhttp://localhost:4000/paramsApiQuery?name='ashok' &age=23
    res.send('Hello World' + req.query.name + req.query.age)
 });
 
});


app.get('/showMobileDetails', function (req, res) {
    const samsung = {
        model: 's3',
        releaseDate:'2020',
        price:24345
        }
    res.send(samsung);
});

app.get('/weather', (req, res) => {
    // code and logic that will be executed and return the data back to user/customer
}); 
});

app.get('/amIAuthorized', function (req, res) {
    res.status(300);
});