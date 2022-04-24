var express = require('express');
const sql = require('mssql');
var router = express.Router();


router.get('/loginForm', function (req, res, next) {

  res.render('login', { errMsg: 'success', errMsg: 'failure' });
});

module.exports = router;
