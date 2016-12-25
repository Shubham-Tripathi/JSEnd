'use strict';

/**
 * Module dependencies
 */
 var path = require('path');

module.exports = function (app) {

  app.get('/', function(req, res) {
    console.log("request received");
    res.sendFile(path.resolve('client/index.html'));
  });
};
