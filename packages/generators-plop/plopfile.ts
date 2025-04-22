import { NodePlopAPI } from 'plop';
import appGenerator from './generators/app';
import backendApp from './generators/backend-app';
import { openCurlyHelper, closeCurlyHelper } from './utils/helpers';
import { prettifyActionType } from './utils/common-actions';

module.exports = function (plop: NodePlopAPI) {
  plop.setGenerator('app', appGenerator(plop));
  plop.setGenerator('backend-app', backendApp(plop));

  plop.setHelper('openCurly', openCurlyHelper);
  plop.setHelper('closeCurly', closeCurlyHelper);

  plop.setActionType('prettify', prettifyActionType);
};
