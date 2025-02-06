const { endPointGenerator } = require('./generators/endpoints/index');

module.exports = function (plop) {
  plop.setGenerator('endpoint', endPointGenerator);
};
