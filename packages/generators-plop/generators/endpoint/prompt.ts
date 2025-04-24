import path from 'path';
import { listDirectories } from '../../utils/helpers';

const appsDir = path.resolve(__dirname, '../../../../../apps');

export const prompts: any = [
  {
    type: 'list',
    name: 'app',
    message: 'Which app should this slice go into?',
    choices: listDirectories(appsDir),
  },
  {
    type: 'input',
    name: 'name',
    message: 'Enter the name of the endpoint (e.g., user):',
    validate: (input) => !!input || 'Name is required',
  },
];
