const fs = require('fs');
const print = require('../print');
const env = require('../configs/env');

const loggerData = (req, res) => {
  const logStream = fs.createReadStream(env.logger.file);
  logStream.pipe(res);
};

const logs = (app) => {
  app.get('/logs', loggerData);

  print.routemap(
    ' - Logger endpoint enabled ->',
    'info/logs',
    'GET'
  );
};

module.exports = logs;
