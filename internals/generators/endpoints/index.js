// Generator for creating endpoints
const endPointGenerator = {
  description: 'Create a new API endpoint',
  prompts: [
    {
      type: 'list',
      name: 'app',
      message: 'Which app do you want to create endpoints for?',
      choices: apps, // List of apps in the `apps` directory
    },
    {
      type: 'input',
      name: 'endpointName',
      message: 'Enter the name of the endpoint (e.g., "users"):',
    },
  ],
  actions: (answers) => {
    const appPath = `apps/${answers.app}`;
    const endpointName = answers.endpointName.toLowerCase();

    return [
      {
        type: 'add',
        path: `${appPath}/backend/controllers/{{endpointName}}.ts`,
        templateFile: './internals/templates/endpoints/controller.hbs',
      },
    ];
  },
};

module.exports.endPointGenerator = endPointGenerator;
