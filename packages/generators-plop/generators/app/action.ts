export const generateAppActions = (answers: any) => {
  const actions: any[] = [];

  const appBasePath = `../../../apps/${answers.name}`;

  // Base files
  actions.push({
    type: 'addMany',
    destination: appBasePath,
    templateFiles: 'templates/app/**/*',
    base: 'templates/app',
    stripExtensions: ['hbs'],
    force: true,
  });

  actions.push({
    type: 'prettify',
    targetFolder: `apps/${answers.name}`,
  });

  return actions;
};
