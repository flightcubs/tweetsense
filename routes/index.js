var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET root page -> redirect
router.get('/', function(req, res) {
  res.redirect('/topics');
});

module.exports = router;
