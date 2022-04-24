var express = require('express');
const sql = require('mssql');
var router = express.Router();
const jwt = require('jsonwebtoken');
const verifyJwtAuth = require('../utils/authorization');
const moment = require('moment');


router.get('/updateAttendence', function (req, res, next) {
    try {
        verifyJwtAuth(req.cookies.info.code).then((result) => {
            if (result === 'Verified Successfully') {
                const email = req.cookies.info.username;
                const pool = require('../sqlconnect');
                pool.getPool().then(async (pool) => {
                    let response = await pool.request()
                        .input('email', sql.NVarChar, email)
                        .query(`select * from student WHERE email=@email`);
                    console.log(response);

                    if (response.recordset.length) {
                        const data = response.recordset[0];
                        const attendenceCount = (data.attendenceCount) + 1;
                        const dateTimeFormatUpdate = 'YYYY-MM-DD HH:mm:ss';
                        const lastUpdateDate = moment().format(dateTimeFormatUpdate);
                        const presentDate = moment().format(dateTimeFormatUpdate);
                        if (data.lastUpdateDate) {
                            const lastDate = moment(data.lastUpdateDate).format('yyyy-MM-DD')
                            const todayDate = moment().format('yyyy-MM-DD')
                            if (moment(lastDate).isBefore(todayDate, 'day') && !moment(lastDate).isSame(todayDate, 'day')) {
                                const updateRecord = await pool.request()
                                    .input('email', sql.NVarChar, email)
                                    .input('lastUpdateDate', sql.DateTime, lastUpdateDate)
                                    .input('presentDate', sql.DateTime, presentDate)
                                    .input('attendenceCount', sql.Int, attendenceCount)
                                    .query(` update student set lastUpdateDate=@lastUpdateDate,
                                    presentDate=@presentDate, attendenceCount=@attendenceCount where email=@email`);
                                res.render('error', { msg: 'success' })


                            } else {

                                //res.send('<h3>already updated!</h3>')
                                //res.render('homePage', {Msg: '<h3>Attendence Already Updated</h3>' });
                                res.render('error', { msg: 'failure' })

                            }
                        }
                        else {
                            const updateRecord = await pool.request()
                                .input('email', sql.VarChar, email)
                                .input('lastUpdateDate', sql.DateTime, lastUpdateDate)
                                .input('presentDate', sql.DateTime, presentDate)
                                .input('attendenceCount', sql.Int, attendenceCount)
                                .query(` update student set lastUpdateDate=@lastUpdateDate,
                            presentDate=@presentDate, attendenceCount=@attendenceCount where email=@email`);
                            res.render('error', { msg: 'success' })
                        }
                    }

                    else {
                        res.render('error', { msg: 'failure' })

                    }
                }
                ).catch((e) => {
                    console.error(e);
                })
            } else {
                res.send('<h3>login please!</h3>')
            }
        })
    } catch (err) {
        console.log('incorrect token!');
        res.send('<h3>login please!</h3>')
    }

});


module.exports = router;