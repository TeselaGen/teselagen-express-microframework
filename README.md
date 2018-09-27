# teselagen-express-microframework

Express-based microservice to help reduce boilerplate in TeselaGen's projects, also delivers useful tools.

## Install

First you need to have node & yarn installed in your computer.

Then install project dependencies by running the following command:

```
yarn
```

## Test install

To run the server you have to execute this command:

```
yarn start
```

You can look into `test.js` file and check how setup options are implemented.

## Import

To import this MicroFramework in your project, run:

(not available yet in npm)

```
yarn add teselagen-express-microframework
```

Then in your code, you have to import with:

```
const MicroFramework = require('teselagen-express-microframework);
```

## Example:

```
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
```

## Roadmap

In the future will be adding libraries to the following stack implementation:

### Base configuration
- [x] Express
- [x] Routes
- [x] Metrics
- [x] Swagger
- [x] Logger (winston + morgan)
- [x] DotEnv

### Security (not full implemented):
- [x] Helmet
- [x] Cors
- [ ] Others (...add more security libraries to this list)

### Database connectors:
- [ ] GraphQL
- [ ] ORM (TypeORM, others)