const MicroFramework = require('./src');

// Just for local test
const helloworld = (req, res, next) => {
  res.status(200).send('hello world');
  return next();
};

const swaggerConfig = require('./swagger.json');

MicroFramework({
  customRoutes: [
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
  ],
  swagger: swaggerConfig,
});
