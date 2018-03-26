var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Require controller modules.
var tweet_controller = require('../controllers/tweet-controller');

/// TWEET ROUTES ///

// GET tweet list
router.get('/', tweet_controller.tweet_list);

module.exports = router;
