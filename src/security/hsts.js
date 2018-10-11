const helmet = require('helmet');
const env = require('../configs/env');

const useHelmet = (app) => {
  if (env.security.hsts.enabled) {
    app.use(
      helmet.hsts({ maxAge: env.security.hsts.max_age })
    );
  }
};

module.exports = useHelmet;
