const cors = require('cors');

const useCors = (app) => {
  app.options('*', cors());
  app.use(cors());
};

module.exports = useCors;
