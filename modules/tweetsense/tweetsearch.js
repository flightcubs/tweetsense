var Twitter = require('twitter');
var parse = require('./parse');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_AT_KEY,
  access_token_secret: process.env.TWITTER_AT_SECRET
});

module.exports.getTweets = async function (query){
  try {
    var q = query;
    var result_type = 'popular';  // popular, recent or mixed
    var count = '100';
    var lang = 'en';
    var tweet_mode = 'extended';   // to get full tweet text
    var params = {q: q, result_type: result_type, count: count, lang: lang, tweet_mode: tweet_mode};
    let result = await client.get('search/tweets', params);
    tweets = parse.parseTweetResult(result);
    return tweets;
  } catch (err) {
    console.log(err);
  }
};
