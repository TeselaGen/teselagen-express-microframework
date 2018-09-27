const basicAuth = require('basic-auth');
const env = require('../configs/env');

const basicAuthRestrict = () => (req, res, next) => {
  if (env.auth.noauth) return next();

  const user = basicAuth(req);

  if (
    !user ||
    user.name !== env.auth.username ||
    user.pass !== env.auth.password
  ) {
    res.set(
      'WWW-Authenticate',
      'Basic realm=Authorization Required'
    );
    return res.sendStatus(401);
  }
  return next();
};

module.exports = basicAuthRestrict;
