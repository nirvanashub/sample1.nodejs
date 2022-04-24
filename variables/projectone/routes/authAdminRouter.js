var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/authAdmin', function (req, res, next) {
    const privateKey = '!@#DFTbnhu*';
    const pool = require('../sqlserver');
    if (req.body.adminEmail && req.body.password) {
        pool.getPool().then(async (pool) => {
            let result = await pool.request()
                .input('adminEmail', req.body.adminEmail)
                .input('password', req.body.password)
                .query(`SELECT * FROM admin WHERE adminEmail = @adminEmail AND password=@password`)

            if (result.recordset.length) {
                try {
                    const token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'HS256' });
                    const info = {
                        username: result.recordset[0].adminEmail
                    }

                    res.cookie('info', info, { maxAge: 150000 });

                    res.redirect('/getRouter')
                } catch (err) {
                    res.render('adminLogin');
                }

            } else {
                res.render('adminLogin');
            }
        }).catch((e) => {
            console.error(e);
        })
    } else {
        res.render('adminLogin');
    }
});



router.get('/homepage', function (req, res) {
    res.render('homePage');
});

module.exports = router;