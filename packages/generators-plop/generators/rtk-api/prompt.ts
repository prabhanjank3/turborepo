export const rtqApiPrompts = [
  {
    type: 'input',
    name: 'app',
    message: 'Which app should this slice go into?',
    validate: (input) => !!input || 'App name is required',
  },
  {
    type: 'input',
    name: 'apiName',
    message: 'API name (e.g., user, product):',
  },
];
