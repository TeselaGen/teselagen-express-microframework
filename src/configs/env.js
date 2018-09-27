require('dotenv').config();
const path = require('path');

const env = {
  app: {
    base_endpoint: process.env.BASE_ENDPOINT || '/api',
    port: parseInt(process.env.PORT, 10) || 5000,
    
  },
  auth:{
    noauth: process.env.NO_AUTH === 'true',
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
  logger: {
    enabled: process.env.LOGGER === 'true',
    endpoint_enabled:
      process.env.LOGGER_ENDPOINT_ENABLED === 'true',
    file: path.join(
      process.cwd(),
      process.env.LOGGER_FILE || 'app.log'
    ),
  },
  monitor: { enabled: process.env.MONITOR === 'true' },
};

module.exports = env;
