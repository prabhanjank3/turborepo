import { dirname, join } from 'path';
const path = require('path');
const fs = require('fs');

const packageDirs = fs.readdirSync(path.resolve(__dirname, '../packages'));

const stories = packageDirs.map((dir) => {
  return `../packages/${dir}/src/**/*.stories.@(js|jsx|ts|tsx)`;
});

module.exports = {
  stories,
  addons: [
    getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@chromatic-com/storybook'),
    getAbsolutePath('@storybook/addon-interactions'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
    options: {},
  },

  docs: {
    autodocs: true,
  },
};

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')));
}
