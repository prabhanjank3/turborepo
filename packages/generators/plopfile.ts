import { NodePlopAPI } from 'plop';
import appGenerator from './generators/app';

export default function (plop: NodePlopAPI) {
  plop.setGenerator('app', appGenerator(plop));
  // Future generators (e.g., package, slice) go here
}
