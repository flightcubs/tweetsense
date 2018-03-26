var express = require('express');

var app = express();
var db = require('./db');

var index = require('./routes/index');
var topics = require('./routes/topics');
var tweets = require('./routes/tweets');

app.use('/', index);
app.use('/topics', topics);
app.use('/tweets', tweets);

module.exports = app;
