const chalk = require('chalk');
const basicAuthRestrict = require('../middlewares/basicAuth');
const monitor = require('./monitor');
const logs = require('./logs');
const env = require('../configs/env');

/**
 * Add routes for info paths
 * @param {*} router
 */
const infoRoutes = (express) => {
  const router = express.Router();
  // add basic authentication
  router.use(basicAuthRestrict());

  // add base endpoints
  if (env.monitor.enabled) monitor(router);
  if (env.logger.endpoint_enabled) logs(router);

  return router;
};

/**
 * Add routes for custom endpoints
 * @param {*} router
 * @param {*} customEps
 */
const customEndpoints = (express, customEps) => {
  const router = express.Router();
  // add basic authentication
  router.use(basicAuthRestrict());

  customEps.forEach((ep) => {
    if (ep.method !== undefined) {
      router[ep.method](
        `/${ep.name}`,
        ep.handler.bind(this)
      );
      const methodName = ep.method;
      console.info(
        chalk.red('\t*'),
        'Route mapped ->',
        'Path:',
        chalk.yellow(`[/${ep.name}]`),
        'Method:',
        chalk.yellow(`[${methodName.toUpperCase()}]\n`)
      );
    }
  });

  return router;
};

module.exports = { infoRoutes, customEndpoints };
