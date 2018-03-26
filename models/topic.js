'use strict';
var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  query: {
    type: String,
    required: 'Kindly enter a query for the topic'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Topic', topicSchema);
module.exports = mongoose.model('Topic');
