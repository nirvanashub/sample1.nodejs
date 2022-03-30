const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.post('/Insert', (req, res) => {
    const conn = require('./connect');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student_details');
        const insertDocs = await collection.insertMany([{ name: 'ram', city: 'ujjain' }, { name: 'mohan', city: 'bhopal' },
         { name: 'sohan', city: 'ratlam' }]);
        console.log('Found documents =>', insertDocs);
        res.send({ status: 200, message: 'user inserted successfully', student: insertDocs })

    }).catch((e) => {
        console.log(e);
    })

});

app.get('/weather', (req, res) => {
    // code and logic that will be executed and return the data back to user/customer
});

app.get('/amIAuthorized', function (req, res) {
    res.status(300);
    res.send('Not authorized');
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});