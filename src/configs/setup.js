const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const bodyParser = require('body-parser');

const get = require('lodash/get');
const has = require('lodash/has');
const chalk = require('chalk');
const swaggerUi = require('swagger-ui-express');

const logger = require('../logger');
const cors = require('../security/cors');
const helmet = require('../security/helmet');
const routes = require('../routes');
const print = require('../print');
const errors = require('../errors');

const env = require('./env');

/**
 * Setup express
 */
const setupExpress = (express, app, options) => {
  console.info(' Starting express configuration:\n');
  
  // Add body parser
  app.use(bodyParser.urlencoded({ extended: false }));
  
  // add security tier
  cors(app);
  helmet(app);
  app.use(cookieParser());
  app.use(csrf({ cookie: true }));

  // add logger
  if (env.logger.enabled) logger(app);

  // add info routes
  app.use('/info', routes.infoRoutes(express));  

  // error handler
  app.use((err, req, res, next) => {
    if (err.code !== 'EBADCSRFTOKEN') return next(err);

    // handle CSRF token errors here
    return errors.error403(res);
  });

  const baseApi = env.app.base_endpoint;

  // add custom routes
  if (has(options, 'customRoutes')) {
    const customRoutes = get(options, 'customRoutes', []);
    if (customRoutes.length > 0) {
      console.info(' - Adding custom routes:\n');
      console.info(
        '\tBase endpoint:',
        chalk.yellow(`[${baseApi}]\n`)
      );
      app.use(
        baseApi,
        routes.customEndpoints(express, customRoutes)
      );
    }
  }

  // add swagger-ui
  if (has(options, 'swagger')) {
    print.routemap(
      ' - Added Swagger Config File ->',
      'api',
      'GET'
    );
    app.use(
      baseApi,
      swaggerUi.serve,
      swaggerUi.setup(get(options, 'swagger'))
    );
  }
};

module.exports = setupExpress;
