export const appPrompts: any[] = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the new app?',
    validate: (input: string) => {
      if (!input) return 'App name is required';
      if (!/^[a-zA-Z][a-zA-Z0-9\-]+$/.test(input)) {
        return 'App name must be alphanumeric and start with a letter';
      }
      return true;
    },
  },
  {
    type: 'confirm',
    name: 'includeRedux',
    message: 'Do you want to include Redux Toolkit setup?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'includeRouter',
    message: 'Do you want to include React Router?',
    default: true,
  },
  {
    type: 'confirm',
    name: 'includeTailwind',
    message: 'Do you want to include Tailwind CSS?',
    default: true,
  },
];
