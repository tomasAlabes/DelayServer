var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/*.html', function(req, res) {
  res.sendfile('views/'+req.path);
});

app.get(['/stylesheets/*.css', '/javascripts/*.js'], function(req, res) {
    var delay = req.query.delay ? req.query.delay * 1000 : 0;
    setTimeout(function(){
        res.sendfile('public/'+req.path);
    }, delay);
});

module.exports = app;
