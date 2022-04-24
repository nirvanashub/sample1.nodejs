var express = require('express');
const sql= require('mssql');
var router = express.Router();

router.get('/giveComment', function(req,res,next){
    res.render('comment');
});



router.get('/getComment', function (req, res, next) {
    const pool = require('../sqlconnect');
    pool.getPool().then(async (pool) => {
      let result = await pool.request()
        .query(`select * from comment`);
      res.render('getComment', { comment: result.recordset });
     
  
    }).catch((e) => {
      console.log(e);
    })
  });

router.post('/postComment', function(req,res,next){
    const pool = require('../sqlconnect');
    pool.getPool().then(async(pool)=>{
        let result= await pool.request()
        .input('comment', sql.NVarChar,req.body.comment)
        .query(`insert into comment(comment) values(@comment)`)
       // .query(`insert into studentfk(id,present) values(( select id from student where email=@email),'2001-02-03')`);//testing
        

    console.dir(result)
    res.redirect('/getRouter');

    }).catch((e)=>{
        console.error(e);
    })
});
module.exports = router;