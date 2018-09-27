const statusMonitor = require('express-status-monitor')();
const print = require('../print');

const monitor = (app) => {
  app.get(
    '/status',
    statusMonitor,
    statusMonitor.pageRoute
  );

  print.routemap(' - Monitor enabled ->', 'info/status', 'GET');
};

module.exports = monitor;
