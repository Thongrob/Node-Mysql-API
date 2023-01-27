var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//Connection string MySQL #1
// let mysql = require('mysql');

// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '123456',
//   database: 'dotnetinvdb'
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');
// });


//Test pool #2
// const {createPool} = require('mysql');

// const pool = createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '123456',
//     database: 'dotnetinvdb',
//     connectionLimit: 10
// })
// let sql = 'SELECT * FROM products';
// pool.query(sql, (err, result) => {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("Connect to database  successfully");
//     return console.log(result);
// })

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/API', indexRouter);
app.use('/users', usersRouter);

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
