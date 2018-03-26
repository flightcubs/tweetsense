var mongoose = require('mongoose');
dburi = 'mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@tweetsense-shard-00-00-yl4jr.mongodb.net:27017,tweetsense-shard-00-01-yl4jr.mongodb.net:27017,tweetsense-shard-00-02-yl4jr.mongodb.net:27017/test?ssl=true&replicaSet=tweetsense-shard-0&authSource=admin';
mongoose.connect(dburi);
