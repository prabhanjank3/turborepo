const { execSync } = require('child_process');
const path = require('path');

const rootPath = path.resolve(__dirname, '../../../../');

export const prettifyActionType = function (answers, config) {
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

export const installDependancies = function (answers, config) {
  console.log(path.resolve(config.targetFolder));
  const folderPath = config.targetFolder;
  try {
    execSync(`cd ${folderPath} && yarn`, {
      cwd: rootPath,
      stdio: 'inherit',
    });

    return `Installed dependancies in ${folderPath}`;
  } catch (err) {
    throw new Error(
      `Install dependancies failed on ${folderPath}: ${err.message}`,
    );
  }
};
