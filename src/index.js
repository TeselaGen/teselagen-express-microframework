const express = require('express');

const env = require('./configs/env');
const setup = require('./configs/setup');
const print = require('./print');

const expressApp = express();

/**
 * Setup and start express server
 */
const MicroFramework = (options) => {
  const { port } = env.app;
  print.banner();
  print.startingServer();
  setup(express, expressApp, options);
  expressApp.listen(port, () => {
    print.serverStarted(port);
  });
  return expressApp;
};

module.exports = MicroFramework;
