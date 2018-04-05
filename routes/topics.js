var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// Require controller modules.
var topic_controller = require('../controllers/topic-controller');

/// TOPIC ROUTES ///

// GET topics list
router.get('/', topic_controller.topic_list);

// POST new topic
router.post('/create', topic_controller.topic_create_post);

// GET a topic
router.get('/:topicId', topic_controller.topic_detail);

// PUT (update) a topic
router.get('/:topicId', topic_controller.topic_update);

// DELETE a topic
router.delete('/:topicId', topic_controller.topic_delete)

// GET a topic tweets
router.get('/:topicId/tweets', topic_controller.topic_tweets);

module.exports = router;
