var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
const bodyParser = require("body-parser");    


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter=require('./routes/mobileRouter.js');
const postRouter=require('./routes/postRouter');
const findRouter=require('./routes/findRouter');
const insertRouter=require('./routes/insertRouter');
const updateRouter=require('./routes/updateRouter');
const deleteRouter=require('./routes/deleteRouter');
const loginRouter=require('./routes/loginRouter');
const authentication=require('./routes/authentication');
const logout=require('./routes/logout');
var app = express();

const formRouter=require('./routes/formRouter');
const getRouter=require('./routes/getRouter');
///const { application } = require('express');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/find',findRouter);
app.post('/insert',insertRouter);
app.put('/update',updateRouter);
app.delete('/delete',deleteRouter);
app.get('/getForm',formRouter);
app.use('/',indexRouter);
app.use('/users',usersRouter);
app.get('/mobile',mobileRouter);
app.get('/post',postRouter);

app.post('/postRegDetails',formRouter);
app.get('/getRecord',getRouter);
app.get('/deleteRecord/:id',getRouter);
app.get('/getRecordById/:id',getRouter);
app.post('/updateRecordById',getRouter);

app.get('/loginForm',loginRouter);
app.post('/auth',authentication);
app.get('/homePage',authentication);
app.get('/logout',logout);



// catch 404 and forward to error handler
// app.use(function(err,req, res, next) {
//   next(createError(404));
// });
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app; 