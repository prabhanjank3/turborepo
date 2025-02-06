const fs = require('fs');
const path = require('path');
const { endPointGenerator } = require('./internals/generators/endpoints');

module.exports = function (plop) {
  // Get a list of all apps in the `apps` directory
  const appsDir = path.join(__dirname, 'apps');
  const apps = fs.readdirSync(appsDir).filter((file) => {
    return fs.statSync(path.join(appsDir, file)).isDirectory();
  });

  plop.setGenerator('endpoint', endPointGenerator);
};
