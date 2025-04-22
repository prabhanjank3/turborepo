export const backendPrompts: any = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the backend app?',
    validate: (input: string) =>
      /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(input)
        ? true
        : 'Name must start with a letter and only contain alphanumeric characters, underscores, or hyphens',
  },
];
