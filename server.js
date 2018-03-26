var app = require('./app');
var port = process.env.PORT || 3000;
const PID = process.pid;

var server = app.listen(port, function() {
  console.log(`Started process ${PID}`);
  // listAllTopics();
});

// function listAllTopics () {
//   // var Topic = require('./controllers/topic-controller-old');
//   // console.log(topic.topic_list())
//   var mongoose = require('mongoose');
//   var Topic = require('./models/topic');
//   Topic.find({}, function(err, topic) {
//     if (err)
//       console.log(err);
//     console.log(topic);
//   });
// }
