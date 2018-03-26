var sentiment = require('sentiment');

class Tweet {
  constructor(twitterId, createdAt, text, userName, screenName, nrOfLikes, nrOfRetweets) {
    this.twitterId = twitterId;
    this.createdAt = createdAt;
    this.text = text;
    this.userName = userName;
    this.screenName = screenName;
    this.nrOfLikes = nrOfLikes;
    this.nrOfRetweets = nrOfRetweets;

    this.sentimentResult = sentiment(text);
    this.sentiment = this.sentimentResult['score'];
  }
}

module.exports.parseTweetResult = function (result) {
  rawTweets = result['statuses'];
  tweets = [];

  Object.entries(rawTweets).forEach(([, value]) => {
    newTweet = new Tweet(
        value['id'],
        value['created_at'],
        value['full_text'],
        value['user']['name'],
        value['user']['screen_name'],
        value['retweet_count'],
        value['favorite_count'],
      );
    tweets.push(newTweet);
  });

  return tweets;
}
