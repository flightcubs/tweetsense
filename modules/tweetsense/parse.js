var sentiment = require('sentiment');

class Tweet {
  constructor(twitterId, url, text, username, nrOfLikes, nrOfRetweets) {
    this.twitterId = twitterId;
    this.url = url;
    this.text = text;
    this.username = username;
    this.nrOfLikes = nrOfLikes;
    this.nrOfRetweets = nrOfRetweets;

    sentimentResult = sentiment(text);
    this.sentiment = sentimentResult['score'];

  }
}
