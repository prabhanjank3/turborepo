import { NodePlopAPI } from 'plop';
import appGenerator from './generators/app';

module.exports = function (plop: NodePlopAPI) {
  plop.setGenerator('app', appGenerator(plop));
  // Future generators (e.g., package, slice) go here
};
