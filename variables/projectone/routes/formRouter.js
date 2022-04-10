var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');


router.get('/getForm', function (req, res, next) {
   const privateKey = '!@#DFTbnhu*';
   console.log(req.cookies.loggedIn.token);
   if (req.cookies.loggedIn) {
     jwt.verify(req.cookies.loggedIn.token, privateKey, { algorithm: 'HS256' }, function (err, decoded) {
       if (err) {
         res.render(401).send('Your session timedout, please login again');
       } else {
         console.log(decoded) 
        
       }
     });
   } 
  res.render('showForm');
 });


router.post('/postRegDetails', function (req, res, next) {
  const pool = require('../sqlconnect');
  pool.getPool().then(async (pool) => {
    let result = await pool.request()
      .input('name', sql.VarChar, req.body.name)
      .input('lastname', sql.VarChar, req.body.lastname)
      .input('fathername', sql.VarChar, req.body.fathername)
      .input('mothername', sql.VarChar, req.body.mothername)
      .input('dob', sql.Int, req.body.dob)
      .input('city', sql.VarChar, req.body.city)
      .input('pincode', sql.Int, req.body.pincode)
      .input('address', sql.VarChar, req.body.address)

      .query(`INSERT INTO regfarm(name,lastname,fathername,mothername,dob,city,pincode,address) Values(@name,@lastname,@fathername,@mothername,@dob,@city,@pincode,@address)`)
    console.dir(result)
    res.redirect('/loginForm');

  }).catch((e) => {
    console.error(e);
  })

});

module.exports = router;