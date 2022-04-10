var express = require('express');
const sql = require('mssql');
//const app = require('../app');
var router = express.Router();

router.get('/getRecord', function(req, res, next) {
    const pool = require('../sqlconnect');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
   .query(`select * from regfarm`);
    res.render('getRecord', { student: result.recordset});

}).catch((e) => {
    console.error(e);
})
});

router.get('/deleteRecord/:id', function(req, res, next) {
  const pool = require('../sqlconnect');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
  .query(`DELETE FROM regfarm WHERE name=${req.params.id}`);
    res.redirect('/getRecord');

  }).catch((e) => {
    console.error(e);
  })
});

router.get('/getRecordById/:id', function(req, res, next) {
  const pool = require('../sqlconnect');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
  .input('name', sql.Int,req.params.id)
  .query(`select * from regfarm WHERE name=@name`);
  res.render('edit', { student: result.recordset[0]});

}).catch((e) => {
  console.error(e);
})
});

router.post('/updateRecordById', function(req, res, next) {
  const pool = require('../sqlconnect');
pool.getPool().then(async (pool) => {
  let result = await pool.request()
    .input('name', sql.VarChar,req.body.name)
   .input('lastname', sql.VarChar,req.body.lastname)
   .input('fathername', sql.VarChar,req.body.fathername)
   .input('mothername', sql.VarChar,req.body.mothername)
   .input('dob', sql.VarChar,req.body.dob)
   .input('city', sql.VarChar,req.body.city)
   .input('pincode', sql.Int,req.body.pincode)
   .input('address', sql.VarChar,req.body.address)

 .query(`UPDATE regfarm 
  SET name=@name, lastname=@lastname, fathername=@fathername, mothername=@mothername,
  dob=@dob, city=@city, pincode=@pincode, address=@address
  WHERE name=${req.query.name}`);
  res.redirect('getRecord')

}).catch((e) => {
  console.error(e);
 })
});

module.exports = router;