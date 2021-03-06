var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var stylus = require('stylus');
var helmet = require('helmet');
var minify = require('express-minify');
var compression = require('compression');

var index = require('./routes/index');
var personal = require('./routes/personal');

var app = express();
var env = process.env.NODE_ENV || 'development';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

if (env == 'production') {
  var cacheAge = 60000 * 60 * 24 * 30;

  app.use(helmet());
  app.use(compression());
  app.use(minify());

  app.use(stylus.middleware({
    src: __dirname + '/views',
    dest: __dirname + '/public',
    compress: true,
    sourcemap: true
  }));
  app.use(express.static(path.join(__dirname, 'public'), { maxAge: cacheAge }));
}
else {
  app.use(stylus.middleware({
    src: __dirname + '/views',
    dest: __dirname + '/public'
  }));
  app.use(express.static(path.join(__dirname, 'public')));
}

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/personal', personal);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('That page could not be found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  var errorMessage = "It's not you, it's me."
  
  res.locals.error = req.app.get('env') === 'development' ? err : {
    message: errorMessage,
    stack: "Something went wrong. Please try again later."
  };

  res.status(err.status || 500);
  res.render('error', {
    title: errorMessage,
    description: "Something went wrong when serving this page."
  });
});

module.exports = app;
