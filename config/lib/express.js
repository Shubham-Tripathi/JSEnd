'use strict';

/**
 * Initialize the Express application
 */
module.exports.init = function (db) {
  // Initialize express app
  var app = express();

  // Initialize Express middleware
  this.initMiddleware(app);

  // Initialize modules server routes
  this.initModulesServerRoutes(app);

  return app;
}

/**
 * Initialize application middleware
 */
module.exports.initMiddleware = function (app) {

  // Initialize favicon middleware
  app.use(favicon(app.locals.favicon));

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

};
