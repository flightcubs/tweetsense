var Twitter = require('twitter');
var parse = require('./parse');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_AT_KEY,
  access_token_secret: process.env.TWITTER_AT_SECRET
});

var query = process.argv[2];
var result_type = 'popular';  // popular, recent or mixed
var count = '100';
var lang = 'en';
var tweet_mode = 'extended';   // to get full tweet text
var params = {q: query, result_type: result_type, count: count, lang: lang, tweet_mode: tweet_mode};

function getTweets(params){
  client.get('search/tweets', params)
    .then(function (result) {
      tweets = parse.parseTweetResult(result);
      nrOfTweets = Object.keys(tweets).length;
      console.log('Successfully retreived search results from Twitter');
      console.log(`Fetched ${nrOfTweets} tweets`);
      Object.entries(tweets).forEach(([, value]) => {
        console.log(value['sentiment']);
      });
      return tweets;

    })
    .catch(function (error) {
      console.log(error);
      throw error;
    })
};

getTweets(params);
