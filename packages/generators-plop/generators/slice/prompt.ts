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
    message: 'What is the name of the slice?',
    validate: (input) => !!input || 'Slice name is required',
  },
];
