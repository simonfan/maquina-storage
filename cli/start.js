// external dependencies
var commander = require('commander');
var _         = require('lodash');

// internal dependencies
var startStorageServer = require('../');

commander
  .version('0.0.1')
  .option('-p, --port [port]', 'The port')
  .parse(process.argv);

var DEFAULT_OPTIONS = {
  port: process.env.STORAGE_PORT || 8000,
};

var options = _.defaults(commander, DEFAULT_OPTIONS);

// start the server
startStorageServer(commander);