const helmet = require('helmet');

const useHelmet = (app) => {
  app.use(helmet());
};

module.exports = useHelmet;
