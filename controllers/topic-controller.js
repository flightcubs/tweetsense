'use strict';

var mongoose = require('mongoose');
var Topic = require('../models/topic');
var Tweet = require('../models/tweet');

exports.topic_list = function(req, res) {
  Topic.find({}, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};

exports.topic_create_post = function(req, res) {
  var new_topic = new Topic(req.body);
  new_topic.save(function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};

exports.topic_detail = function(req, res) {
  Topic.findById(req.params.topicId, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};

exports.topic_update = function(req, res) {
  Topic.findOneAndUpdate({_id: req.params.topicId}, req.body, {new: true}, function(err, topic) {
    if (err)
      res.send(err);
    res.json(topic);
  });
};

exports.topic_delete = function(req, res) {
  Topic.remove({
    _id: req.params.topicId
  }, function(err, topic) {
    if (err)
      res.send(err);
    res.json({ message: 'Topic successfully deleted' });
  });
};

exports.topic_tweets = function(req, res) {
  Tweet.find({topic: req.params.topicId}, function(err, tweets) {
    if (err)
      res.send(err);
    res.json(tweets);
  });
};
