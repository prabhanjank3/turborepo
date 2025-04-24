import { NodePlopAPI } from 'plop';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const actions = (plop: NodePlopAPI) => (answers) => {
  const { app, name } = answers;
  const backendPath = '../../../backend';
  return [
    {
      type: 'add',
      path: `${backendPath}/${app}/src/controllers/${name}.controller.ts`,
      templateFile: `templates/endpoint/controller.ts.hbs`,
    },
    {
      type: 'add',
      path: `${backendPath}/${app}/src/db/${name}.model.ts`,
      templateFile: 'templates/endpoint/model.ts.hbs',
    },
    {
      type: 'add',
      path: `${backendPath}/${app}/src/routes/${name}.route.ts`,
      templateFile: 'templates/endpoint/route.ts.hbs',
    },
    {
      type: 'modify',
      path: `${backendPath}/${app}/src/routes/index.ts`,
      pattern: /(\/\/ PLOP IMPORT ROUTES)/,
      template: `import ${name}Routes from './${name}.route';\n$1`,
    },
    {
      type: 'modify',
      path: `${backendPath}/${app}/src/routes/index.ts`,
      pattern: /(\/\/ PLOP USE ROUTES)/,
      template: `router.use('/${name}', ${name}Routes);\n$1`,
    },
    {
      type: 'prettify',
      targetFolder: `backend/${app}/src`,
    },
  ];
};
