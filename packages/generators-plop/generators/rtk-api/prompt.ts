import path from 'path';
import { listDirectories } from '../../utils/helpers';

const appsDir = path.resolve(__dirname, '../../../../../apps');

export const rtqApiPrompts = [
  {
    type: 'list',
    name: 'app',
    message: 'Which app should this rtk-api go into?',
    choices: listDirectories(appsDir),
  },
  {
    type: 'input',
    name: 'apiName',
    message: 'API name (e.g., user, product):',
  },
];
