'use strict';

var mongoose = require('mongoose');
var Tweet = require('../models/tweet');

exports.tweet_list = function(req, res) {
  Tweet.find({}, function(err, tweet) {
    if (err)
      res.send(err);
    res.json(tweet);
  });
};
