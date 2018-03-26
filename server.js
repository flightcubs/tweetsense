var app = require('./app');
var port = process.env.PORT || 3000;
const PID = process.pid;

var server = app.listen(port, function() {
  console.log(`Started process ${PID}`);
});
