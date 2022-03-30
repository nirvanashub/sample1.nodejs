const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/customerDetails', (req, res) => {
    const conn = require('./conn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('Customer');
        const findResult = await collection.find({}).toArray();
        console.log('Found documents =>', findResult);
        res.send({ status: 200, message: 'user find successfully', Customers: findResult })

    }).catch((e) => {
        console.log(e);
    })

});

app.delete('/Delete', (req, res) => {
    const conn = require('./conn');
    conn.connFun().then(async (db) => {
        const collection = db.collection('customer');
        const deleteResult = await collection.delete({ a: 1,});
        console.log('Found documents =>', deleteResult);
        const findResult2 = await collection.find({});
        console.log('Found documents =>', findResult2);
        res.send({ status: 200, message: 'user deleted successfully', Customers: deleteResult })

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