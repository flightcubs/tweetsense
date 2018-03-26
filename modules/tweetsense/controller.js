var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new Schema({
  _id: Schema.Types.ObjectId,
  query: {
    type: String,
    required: 'Kindly enter a query for the topic'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

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


mongoose.model('Topic', topicSchema);
mongoose.model('Tweet', tweetSchema);

var Topic = mongoose.model('Topic');
var Tweet = mongoose.model('Tweet');

module.exports.listTopics = async function(req, res) {
  try {
    dbres = await Topic.find({}, function(err, topic) {
      if (err) {
        console.log(err);
      }
    });
    return dbres;
  } catch (err){
    console.log(err);
  }
};

module.exports.tweet_create = function(tweet, topic) {
  var new_tweet = new Tweet({
    topic: topic['_id'],
    twitterId: tweet['twitterId'],
    created: tweet['createdAt'],
    text: tweet['text'],
    userName: tweet['userName'],
    screenName: tweet['screenName'],
    nrOfLikes: tweet['nrOfLikes'],
    nrOfRetweets: tweet['nrOfRetweets'],
    sentiment: tweet['sentiment']
  });

  new_tweet.save(function (err) {
    if (err) {
      console.log(err);
    }
  });
};
