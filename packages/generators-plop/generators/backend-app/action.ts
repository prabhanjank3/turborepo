import type { NodePlopAPI } from 'plop';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const backendActions = (plop: NodePlopAPI) => {
  return (answers: any) => {
    const basePath = `../../../backend/${answers.name}`;

    return [
      {
        type: 'addMany',
        destination: basePath,
        base: 'templates/backend-app',
        templateFiles: 'templates/backend-app/**/*',
        stripExtensions: ['hbs'],
        force: true,
      },
      {
        type: 'prettify',
        targetFolder: `backend/${answers.name}`,
      },
    ];
  };
};
