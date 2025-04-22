import type { NodePlopAPI } from 'plop';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sliceActions = (plop: NodePlopAPI) => {
  return (answers: any): any[] => {
    const { app, name } = answers;

    const slicePath = `../../../apps/${app}/src/store/slices/${name}`;
    const reducerPath = `../../../apps/${app}/src/store/index.ts`;

    return [
      {
        type: 'add',
        path: `${slicePath}/{{camelCase name}}Slice.ts`,
        templateFile: 'templates/slice/slice.ts.hbs',
      },
      {
        type: 'modify',
        path: reducerPath,
        pattern: /(\/\/ import .*?\n)/, // Find the import placeholder
        template: `$1import {{camelCase name}}Reducer from './slices/{{camelCase name}}/{{camelCase name}}Slice';\n`,
      },
      {
        type: 'modify',
        path: reducerPath,
        pattern: /(\/\/ .*?: .*?Reducer,?\n)/, // Find the reducer placeholder
        template: `$1  {{camelCase name}}: {{camelCase name}}Reducer,\n`,
      },
      {
        type: 'prettify',
        targetFolder: `apps/${app}/src/store/slices/${name}/**/*`,
      },
      {
        type: 'prettify',
        targetFolder: `apps/${app}/src/store/index.ts`,
      },
    ];
  };
};
