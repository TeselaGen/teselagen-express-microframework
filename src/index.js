const express = require('express');

const env = require('./configs/env');
const setup = require('./configs/setup');
const print = require('./print');

const app = express();

/**
 * Setup and start express server
 */
const MicroFramework = (options) => {
  const { port } = env.app;
  print.banner();
  print.startingServer();
  setup(express, app, options);
  app.listen(port, () => {
    print.serverStarted(port);
  });
  return app;
};

module.exports = MicroFramework;
