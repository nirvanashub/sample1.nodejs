var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require("body-parser");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter =require('./routes/mobileRouter.js');
// const findRouter =require('./routes/mongofind.js');
// const abcRouter =require('./routes/abcRouter.js');
//const postRouter= require('./routes/postRouter');
const findRouter= require('./routes/findRouter.js');
const insertRouter=require('./routes/insertRouter');
const updateRouter=require('./routes/updateRouter');
const deleteRouter=require('./routes/deleteRouter');


var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/mobile',mobileRouter);
app.get('/mobile/:name',mobileRouter);
//app.post('/addName',postRouter);
app.get('/findRouter',findRouter);
app.post('/insert',insertRouter);
app.post('/update',updateRouter);
app.post('/delete',deleteRouter);


// app.get('/find',findRouter);
// app.get('/abc',abcRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

