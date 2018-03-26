// Load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var db = require('./db');
var mongoose = require('mongoose');

var tweetsearch = require('./tweetsearch');
var controller = require('./controller');

/* Get all topics from db
Loop through each topic and perform a twitter search
Receive a parsed list of tweet objects
For each tweet, save to db with respective topic id */
async function runForEachTopic() {
  try{
    console.log('Running tweetsense');
    var topicList = await controller.listTopics();
    for (let i = 0; i < topicList.length; ++i) {
      let topic = topicList[i];
      tweetList = await tweetsearch.getTweets(topic['query']);
      for (let j = 0; j < tweetList.length; ++j) {
        let tweet = tweetList[j];
        controller.tweet_create(tweet, topic);
      }
    }
    mongoose.connection.close();
  } catch (err){
    console.log(err);
  }
}

if (require.main == module) {
  // If running as script
  console.log('Running as script');
  runForEachTopic();
} else {
  // Being required
  module.exports.runForEachTopic = runForEachTopic;
}
