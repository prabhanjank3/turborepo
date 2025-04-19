export const generateAppActions = (answers: any) => {
  console.log(answers);
  const actions: any[] = [];

  const appBasePath = `../../apps/${answers.name}`;

  // Base files
  actions.push({
    type: 'addMany',
    destination: appBasePath,
    templateFiles: 'templates/app/**/*',
    base: 'templates/app',
    stripExtensions: ['hbs'],
  });

  // Redux setup
  if (answers.includeRedux) {
    actions.push({
      type: 'addMany',
      destination: `${appBasePath}/src/store`,
      templateFiles: 'templates/app/redux/**/*',
      base: 'templates/app/redux',
      stripExtensions: ['.hbs'],
    });
  }

  // React Router setup
  if (answers.includeRouter) {
    actions.push({
      type: 'add',
      path: `${appBasePath}/src/routes/index.tsx`,
      templateFile: 'templates/app/router/routes.tsx.hbs',
    });
  }

  // Tailwind setup
  if (answers.includeTailwind) {
    actions.push({
      type: 'addMany',
      destination: appBasePath,
      templateFiles: 'templates/app/tailwind/**/*',
      base: 'templates/app/tailwind',
      stripExtensions: ['.hbs'],
      force: true,
    });
  }

  return actions;
};
