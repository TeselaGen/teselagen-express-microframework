const error400 = (res) =>
  res.status(400).send('<h1>400 Bad Request</h1>');
const error401 = (res) =>
  res.status(401).send('<h1>401 Unauthorized</h1><h2>You shall not pass!! 🧙‍♂️</h2>');
const error403 = (res) =>
  res.status(403).send('<h1>403 Forbidden</h1><h2>Nothing to see here, move along 👮‍♂️</h2>');
const error404 = (res) =>
  res.status(404).send('<h1>404 Not Found</h1><h2>You get lost 🕵️‍♂️</h2>');
const error500 = (res) =>
  res.status(500).send('<h1>500 Internal Server Error</h1><h2>Sometimes, things gets broken 🤷‍♂️</h2>');

module.exports = {
  error400,
  error401,
  error403,
  error404,
  error500,
};
