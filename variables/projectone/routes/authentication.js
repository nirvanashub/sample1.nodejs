var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/auth', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    const pool = require('../sqlconnect');
    if (req.body.email && req.body.lname) {
        pool.getPool().then(async (pool) => {
            let result = await pool.request()
                .input('name', req.body.name)
                .input('lastname', req.body.lastname)
                .query(`SELECT * FROM regfarm WHERE name=@name AND lastname=@lastname`)
                
            if (result.recordset.length) {
                try {
                    const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' });
                    const info = {
                        username: result.recordset[0].email,
                        code: token,
                        role: 'regfarm'
                    }
                    res.cookie('info', info, { maxAge: 150000 });
                    res.redirect('/homePage')
                } catch (err) {
                    res.render('login', { errMsg: err });
                }

            } else {
                res.render('login', { errMsg: 'Record not found or invalid user name password' });
            }
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('login', { errMsg: 'Enter email and password' });
    }
});



router.get('/homePage', function (req, res) {
    res.render('homePage');
});

module.exports = router;
