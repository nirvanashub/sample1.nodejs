var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/insert', function(req, res, next) {
const conn = require('../connect');    
conn.connFun().then(async (db) => {
const collection = db.collection('student_details');
const insertResult = await collection.insertmany(req.body.data);
console.log( insertResult);
res.render('insertRouter',{student_details:insertResult});


    }).catch((e) => {
        console.log(e);
    })   


});
module.exports = router;