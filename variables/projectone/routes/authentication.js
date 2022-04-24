var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');
const { query } = require('express');

router.post('/auth', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    const pool = require('../sqlconnect');
    if (req.body.email && req.body.lname) {
        pool.getPool().then(async (pool) => {
            let result = await pool.request()
                .input('email', req.body.email)
                .input('lname', req.body.lname)
                .query(`SELECT * FROM student WHERE email = @email AND lname=@lname`)

            if (result.recordset.length) {
                try {
                    const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' });
                    const info = {
                        username: result.recordset[0].email,
                        code: token,
                        role: 'student'
                    }
                    res.cookie('info', info, { maxAge: 150000 });

                    res.redirect('/homePage')
                } catch (err) {
                    res.render('login', { errMsg: err });
                }

            } else {
                res.render('login', { errMsg: 'failure' });
            }
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('login', { errMsg: 'failure' });
    }
});



router.get('/homePage', function (req, res, next) {
    const pool = require('../sqlconnect');
    pool.getPool().then(async (pool) => {
        let result = await pool.request()
            .query(`select comment from comment`);

        var comment = result.recordset
        var a = [];
        for (var i = 0; i < JSON.stringify(comment.length); i++) {

            a.unshift(comment[i].comment);
        }
        console.log(a);


        res.render('homePage', { title: 'Students Home Page', comment: a });




        // next();
    });
});


// router.get('/getComment', function (req, res, next) {
//     const pool = require('../sqlserver');
//     pool.getPool().then(async (pool) => {
//         let result = await pool.request()
//             .query(`select * from comment`);
//         res.render('getComment', { comment: result.recordset });


//     }).catch((e) => {
//         console.log(e);
//     })
// });
module.exports = router;