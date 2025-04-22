const { execSync } = require('child_process');
const path = require('path');

export const prettifyActionType = function (answers, config) {
  const rootPath = path.resolve(__dirname, '../../../../');
  const folderPath = config.targetFolder;
  console.log('rootpath', rootPath);
  try {
    execSync(`yarn format "${folderPath}/**/*.{js,ts,jsx,tsx,json,md}"`, {
      cwd: rootPath,
      stdio: 'inherit',
    });

    return `Prettified files in ${folderPath}`;
  } catch (err) {
    throw new Error(`Prettier failed on ${folderPath}: ${err.message}`);
  }
};
