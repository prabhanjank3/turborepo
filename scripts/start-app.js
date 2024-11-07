const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const appName = process.argv[2];

if (!appName) {
  console.error('Please provide an app name as an argument.');
  process.exit(1);
}
const packageJsonPath = path.join(
  __dirname,
  '../apps',
  appName,
  'package.json'
);

const packageJson = require(packageJsonPath);

// Check if the start script exists
if (!packageJson.scripts || !packageJson.scripts.start) {
  console.error(
    `The package '${appName}' does not have a start script defined.`
  );
  process.exit(1);
}

// Construct the command to start the app
const command = `yarn workspace ${appName} start`; // Assuming each app has a start script defined

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error(`Failed to start app: ${appName}`);
  process.exit(1);
}
