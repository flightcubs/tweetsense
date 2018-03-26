var express = require('express');

var app = express();
var db = require('./db');

var index = require('./routes/index');
var topics = require('./routes/topics');

app.use('/', index);
app.use('/topics', topics);

module.exports = app;
