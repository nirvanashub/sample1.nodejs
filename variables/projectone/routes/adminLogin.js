var express = require('express');
var router = express.Router();
const sql = require('mssql');

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('adminLogin', {errMsg:'',msg:''});
});  

module.exports = router;