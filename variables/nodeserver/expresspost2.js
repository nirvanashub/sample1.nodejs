const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/customerDetails', (req, res) => {
    console.log(req.body.name, req.body.age);
    res.send(`${req.body.name} ${req.body.age}`)
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});

// how to pass queryStrings in the get url
// how to pass parameters in the get url
// how to make post calls