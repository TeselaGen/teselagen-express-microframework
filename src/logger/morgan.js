const morgan = require('morgan');
const winston = require('./winston');

const useMorgan = (app) => {
  console.info(' - Logger enabled\n');
  app.use(morgan('combined', { stream: winston.stream }));
};

module.exports = useMorgan;
