import type { NodePlopAPI } from 'plop';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const rtqApiActions = (plop: NodePlopAPI) => {
  return (answers: any) => {
    const { app, apiName } = answers;
    const apiPath = `../../../apps/${app}/src/store/api/${apiName}`;
    const reducerPath = `../../../apps/${app}/src/store/index.ts`;

    return [
      {
        type: 'add',
        path: `${apiPath}/${apiName}Api.ts`,
        templateFile: 'templates/rtk-api/apiSlice.ts.hbs',
        data: {
          apiName,
        },
      },
      {
        type: 'modify',
        path: reducerPath,
        pattern: /(\/\/ import {{camelCase name}}Reducer.*)/g,
        template: `import { {{camelCase apiName }}Api } from './api/{{camelCase apiName}}/{{camelCase apiName}}Api';\n$1`,
      },
      {
        type: 'modify',
        path: reducerPath,
        pattern: /(\/\/ {{camelCase name}}: {{camelCase name}}Reducer)/g,
        template: `$1,\n  [{{camelCase apiName}}Api.reducerPath]: {{camelCase apiName}}Api.reducer`,
      },
      {
        type: 'modify',
        path: reducerPath,
        pattern: /(\/\/ INSERT MIDDLEWARES HERE)/g,
        template: `{{camelCase apiName}}Api.middleware,\n  $1`,
      },
      {
        type: 'prettify',
        targetFolder: `apps/${app}/src/store/api/${apiName}/**/*`,
      },
      {
        type: 'prettify',
        targetFolder: `apps/${app}/src/store/index.ts`,
      },
    ];
  };
};
