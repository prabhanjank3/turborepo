const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const packageName = process.argv[2];

console.log(packageName);
if (!packageName) {
  execSync('storybook dev -p 6006', { stdio: 'inherit' });
}
const packageJsonPath = path.join(
  __dirname,
  '../packages',
  packageName,
  'package.json'
);

const packageJson = require(packageJsonPath);

// Check if the start script exists
if (!packageJson.scripts || !packageJson.scripts.storybook) {
  console.error(
    `The package '${packageName}' does not have a storybook script defined.`
  );
  process.exit(1);
}

// Construct the command to start the app
const command = `yarn workspace @achieve4sure/${packageName} storybook dev -p 6006`;

try {
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.error(`Failed to start app: ${packageName}`);
  process.exit(1);
}
