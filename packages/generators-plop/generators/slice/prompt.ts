export const prompts: any = [
  {
    type: 'input',
    name: 'app',
    message: 'Which app should this slice go into?',
    validate: (input) => !!input || 'App name is required',
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the slice?',
    validate: (input) => !!input || 'Slice name is required',
  },
];
