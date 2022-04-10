var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectId;
router.delete('/delete', function (req, res, next) {
    const conn = require('../connect');
    conn.connFun().then(async (db) => {
        const collection = db.collection('student_details');
        const deleteResult = await collection.deleteOne({ _id: ObjectId(req.body.id)},
            { $set: req.body.data });
        res.render('update', { student_details: deleteResult });
            res.send({ status: 200, message: 'user Deleted successfully', student_details: deleteResult });
    }).catch((e) => {
        console.log(e);
    });
});
module.exports = router;