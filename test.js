const MicroFramework = require('./src');

/**
 * If you use this Framework as dependency in your project,
 * import in your server: const MicroFramework = require('teselagen-express-microframework);
 */

// Just for local test

/**
 * Endpoints handlers
 * All handlers needs to implement these input parameters
 * @param {*} req
 * @param {*} res
 */
const helloworld = (req, res) => {
  res.status(200).send('hello world');
};

const foo = (req, res) => {
  res.status(200).send('foo');
};

const bar = (req, res) => {
  res.status(200).send('bar');
};

/**
 * Endpoint routes
 */
const routes = [
  {
    method: 'get',
    name: 'helloworld',
    handler: helloworld,
  },
  {
    method: 'post',
    name: 'hello-world',
    handler: helloworld,
  },
  {
    method: 'get',
    name: 'foo',
    handler: foo,
  },
  {
    method: 'get',
    name: 'bar',
    handler: bar,
  },
];

const swaggerConfig = require('./swagger.json');

/**
 * Options to add in Microframework setup
 */
const options = {
  /**
   * Add custom endpoints
   */
  customRoutes: routes,
  /**
   * Import swagger.json configuration file
   */
  swagger: swaggerConfig,
};

/**
 * This starts express server
 */

MicroFramework(options);
