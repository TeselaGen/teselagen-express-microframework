const get = require('lodash/get');
const has = require('lodash/has');
const chalk = require('chalk');
const swaggerUi = require('swagger-ui-express');

const logger = require('../logger');
const cors = require('../security/cors');
const helmet = require('../security/helmet');
const routes = require('../routes');
const print = require('../print');

const env = require('./env');

/**
 * Setup express
 */
const setupExpress = (express, app, options) => {
  console.info(' Starting express configuration:\n');
  // add security tier
  cors(app);
  helmet(app);

  // add logger
  if (env.logger.enabled) logger(app);

  // add info routes
  app.use('/info', routes.infoRoutes(express));

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
