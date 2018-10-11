const cors = require('cors');
const env = require('../configs/env');

const useCors = (app) => {
  if (env.security.cors.enabled) {
    app.options(env.security.cors.options, cors());
    app.use(cors());
  }
};

module.exports = useCors;
