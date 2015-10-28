'use strict';

// native dependencies
var path = require('path');
var http = require('http');

// external dependencies
var express = require('express');

function startStorageServer(options) {

  // instantiate express application
  var app = express();

  // route to get info about the machine
  app.get('/about.json', function (req, res) {
    res.json({
      is: 'maquina-storage',
      port: options.port,
    });
  });

  // instantiate http server and pass the express app as callback
  var server = http.createServer(app);

  // let server start
  server.listen(options.port, function () {
      console.log('listening at port ' + options.port);
  });
}

module.exports = startStorageServer;
