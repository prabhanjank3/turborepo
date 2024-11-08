const BASE_PACKAGE_PATH = '../packages';
module.exports = function (plop) {
  plop.setGenerator('package', {
    description:
      'Create a new package with a React component and optional Storybook setup',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your package?',
        validate: (input) => !!input || 'Package name cannot be empty.',
      },
      {
        type: 'confirm',
        name: 'includeStorybook',
        message: 'Do you want to include Storybook setup?',
        default: false,
      },
    ],
    actions: [
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/src/{{pascalCase name}}.tsx`,
        templateFile: 'templates/componentTemplate.tsx.hbs',
      },
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/src/{{pascalCase name}}.test.tsx`,
        templateFile: 'templates/componentTemplate.test.tsx.hbs',
      },
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/src/stories/{{pascalCase name}}.stories.tsx`,
        templateFile: 'templates/componentTemplate.stories.tsx.hbs',
        skipIfExists: true,
        when: (answers) => answers.includeStorybook,
      },
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/package.json`,
        templateFile: 'templates/packageJsonTemplate.json.hbs',
      },
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/src/index.tsx`,
        templateFile: 'templates/indexTemplate.tsx.hbs',
      },
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/.storybook/main.js`,
        templateFile: 'templates/storybook.main.js.hbs',
      },
      {
        type: 'add',
        path: `${BASE_PACKAGE_PATH}/{{kebabCase name}}/.storybook/preview.js`,
        templateFile: 'templates/storybook.preview.js.hbs',
      },
    ],
  });
};
