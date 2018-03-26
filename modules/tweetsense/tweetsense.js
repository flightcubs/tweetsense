// Load environment variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var tweetsearch = require('./tweetsearch');

function run() {
  console.log('running');
}

if (require.main == module) {
  // If running as script
  console.log('Running as script');
  tweetsearch;
} else {
  // Being required
  module.exports = run;
}
