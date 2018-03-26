'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tweetSchema = new Schema({
  topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
  twitterId: Number,
  created: Date,
  text: String,
  userName: String,
  screenName: String,
  nrOfLikes: Number,
  nrOfRetweets: Number,
  sentiment: Number
});

mongoose.model('Tweet', tweetSchema);
module.exports = mongoose.model('Tweet');
