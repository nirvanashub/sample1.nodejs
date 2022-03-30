var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/findRouter', function(req, res, next) {
    const conn = require('../connect');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student_details');
        const findResult = await collection.find({}).toArray();
        res.render('findRouter', { customers: findResult});
    }).catch((e) => {
        console.log(e);
    })

});

module.exports = router;