require("dotenv").config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("mongoose")

//connection to data base
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to DataBase"));

// mongoose.connect("mongodb://localhost:27017/revision_4sim2")
//   .then(() => { console.log("databse connected"); })
//   .catch((exc) => { console.log(exc); })

// mongoose.connect("mongodb+srv://ghassen:2289022890@cluster0.gcbuy.mongodb.net/test")
//   .then(() => { console.log("databse connected"); })
//   .catch((exc) => { console.log(exc); })


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var produtsRouter = require('./routes/Journey.route');
var picture = require('./routes/uploadDownload');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.static(path.join(__dirname, 'uploads')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/journey', produtsRouter);
app.use('/uploads', picture);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
