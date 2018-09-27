const winston = require('winston');
const env = require('../configs/env');

const options = {
  file: {
    level: 'info',
    filename: env.logger.file,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

logger.stream = {
  write(message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
