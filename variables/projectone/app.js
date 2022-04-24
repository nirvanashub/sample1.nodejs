var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser=require("body-parser");
var cookieParser=require('cookie-parser');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mobileRouter =require('./routes/mobileRouter.js');
//const findRouter =require('./routes/mongofind.js');
//const insertRouter =require('./routes/mongoInsert.js');
const updateRouter = require('./routes/updateRouter')
const deleteRouter = require('./routes/deleteRouter')
const formRouter = require('./routes/formRouter');
const getRouter = require('./routes/getRouter');
const loginRouter=require('./routes/loginRouter');
const authentication=require('./routes/authentication');
const logout=require('./routes/logout');
const attendence=require('./routes/attendence');
const aLoginRouter=require('./routes/adminLogin');
const authAdminRouter=require('./routes/authAdminRouter');
const commentRouter = require('./routes/comment');
const postCommentRouter = require('./routes/comment');
const getCommentRouter = require('./routes/comment');


// const logout=require('./routes/logout');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

  
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.get('/mobile',mobileRouter);
//app.get('/mongofind',findRouter);
//app.post('/insert',insertRouter);
app.put('/update',updateRouter)
app.delete('/delete',deleteRouter);
app.get('/getForm',formRouter);
app.post('/postRegDetails',formRouter);
app.get('/getRouter',getRouter);

app.get('/loginForm',loginRouter)
app.post('/auth',authentication);
app.get('/homePage',authentication);
app.get('/logout',logout);
app.post('/updateRecordById',getRouter);
app.get('/deleteRecord/:id',getRouter);
app.get('/updateAttendence',attendence);
app.get('/admin',aLoginRouter)
app.post('/authAdmin',authAdminRouter);

app.get('/giveComment',commentRouter);
app.post('/postComment',postCommentRouter);
app.get('/getcomment',getCommentRouter);





// catch 404 and forward to error handler
// app.use(function(req, res, next) {
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