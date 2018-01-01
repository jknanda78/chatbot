#!/bin/env node

var express = require('express');
var bodyParser = require('body-parser');
var compression = require('compression');

//Routes
var chatbot = require('./mocks/sendMessage');

/**
 *  Define the application.
 */
var MockAPIServerApp = function() {
  //  Scope.
  var self = this;

  /**
   *  Set up server IP address and port # using env variables/defaults.
   */
  self.setupVariables = function() {
      //  Set the environment variables we need.
      self.port = process.env.MOCK_API_SERVER_PORT || 3000;
      self.domain = 'http://local.dev.com:3000';
  };

  /**
   *  Initialize the server (express) and create the routes and register
   *  the handlers.
   */
  self.initializeServer = function() {
      self.app = express();

      //Allow CORS
      self.app.use(self.setupCORS);

      //Compress using gzip
      self.app.use(compression());

      //Body Parser
      self.app.use(bodyParser.json());
      self.app.use(bodyParser.urlencoded({ extended: false }));

      //Routes
      self.app.options('/chatbot/sendMessage');
      self.app.post('/chatbot/sendMessage', chatbot.sendMessage);
  };

  /**
   *  Start the server (starts up the  application).
   */
  self.start = function() {
    //  Start the app on the specific interface (and port).
    self.app.listen(self.port, function() {
        console.log('%s: Node server started on %s:%d ...',
            Date(Date.now() ), self.port);
    });
  }

  /**
   *  Initializes the application.
   */
  self.initialize = function() {
      self.setupVariables();

      // Create the express server and routes.
      self.initializeServer();
  };

  //Setup CORS
  self.setupCORS = function(req, res, next){
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Origin, Authorization, X-Requested-With, X-Custom-Header');
      res.header('Access-Control-Allow-Credentials', 'true');
      res.header('Access-Control-Max-Age', 86400);
      res.sendStatus(200).end();
    }
    else {
      res.header('Access-Control-Allow-Origin', req.headers.origin);
      next();
    }
  };
};

var app = new MockAPIServerApp();
app.initialize();
app.start();
