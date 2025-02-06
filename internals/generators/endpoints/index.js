const path = require('path');
const fs = require('fs');
// Get a list of all apps in the `apps` directory
const appsDir = path.join(__dirname, '../../../' + 'apps');
const apps = fs.readdirSync(appsDir).filter((file) => {
  return fs.statSync(path.join(appsDir, file)).isDirectory();
});

const endPointGenerator = {
  description: 'Generate E2E Endpoints',
  prompts: [
    {
      type: 'list',
      name: 'app',
      message: 'Which app do you want to create endpoints for?',
      choices: apps, // List of apps in the `apps` directory
    },
    {
      type: 'input',
      name: 'name',
      message: 'Endpoint Name, please!',
    },
    {
      type: 'input',
      name: 'rawFields',
      message:
        'Model fields (comma-separated, e.g., name:string,email:string):',
    },
  ],
  actions: (data) => {
    const appPath = `../apps/${data.app}/backend`;

    const fields = data.rawFields.split(',').map((field) => {
      const [name, type] = field.split(':');
      return { name, type };
    });

    return [
      {
        type: 'add',
        path: `${appPath}/controllers/{{lowerCase name}}.controller.js`,
        templateFile: './templates/endpoints/controller.hbs',
        force: true,
      },
      {
        type: 'add',
        path: `${appPath}/models/{{lowerCase name}}.model.js`,
        templateFile: './templates/endpoints/model.hbs',
        data: { fields: fields },
        force: true,
      },
      {
        type: 'add',
        path: `${appPath}/routes/{{lowerCase name}}.route.js`,
        templateFile: './templates/endpoints/route.hbs',
        force: true,
      },
      {
        type: 'modify',
        path: `${appPath}/models/index.js`,
        pattern: /(\/\/ Add models to db object here)/g,
        template: `$1\ndb.{{lowerCase name}} = require('./{{lowerCase name}}.model')(dbConnection, Sequalize);`,
      },
      {
        type: 'modify',
        path: `${appPath}/routes/index.js`,
        pattern: /(\/\/ Import Route Files)/g,
        template: `$1\nconst {{lowerCase name}}Routes = require('./{{lowerCase name}}.route');`,
      },
      {
        type: 'modify',
        path: `${appPath}/routes/index.js`,
        pattern: /(\/\/ Add Routes Here)/g,
        template: `$1\nrouter.use("/{{lowerCase name}}", {{lowerCase name}}Routes);`,
      },
      // {
      //   type: 'prettify',
      //   data: {
      //     path: `src/api/controllers/sequelize/${data.name.toLowerCase()}.controller.js`,
      //   },
      // },
      // {
      //   type: 'prettify',
      //   data: {
      //     path: `src/api/models/sequelize/${data.name.toLowerCase()}.model.js`,
      //   },
      // },
      // {
      //   type: 'prettify',
      //   data: {
      //     path: `src/api/routes/v1/${data.name.toLowerCase()}.route.js`,
      //   },
      // },
      // {
      //   type: 'prettify',
      //   data: {
      //     path: `src/api/models/sequelize/index.js`,
      //   },
      // },
      // {
      //   type: 'prettify',
      //   data: {
      //     path: `src/api/routes/v1/index.js`,
      //   },
      // },
    ];
  },
};

module.exports.endPointGenerator = endPointGenerator;
