const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/customerDetails', (req, res) => {
    const conn = require('./connect');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student_details');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        res.send({ status: 200, message: 'user find successfully', student: findResult })

    }).catch((e) => {
        console.log(e);
    })

});

app.put('/Update', (req, res) => {
    const conn = require('./connect');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student');
        const updateResult = await collection.updateOne({ name: 'golu', age: '17' }, { $set: { name: 'bholu', age: 24 } });
        console.log('Found documents =>', updateResult);
        res.send({ status: 200, message: 'user added successfully', student: updateResult })

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