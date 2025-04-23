import { NodePlopAPI } from 'plop';
import appGenerator from './generators/app';
import backendApp from './generators/backend-app';
import { openCurlyHelper, closeCurlyHelper } from './utils/helpers';
import {
  installDependancies,
  prettifyActionType,
} from './utils/common-actions';
import { sliceGenerator } from './generators/slice';
import { rtkApiGenerator } from './generators/rtk-api';

module.exports = function (plop: NodePlopAPI) {
  plop.setGenerator('app', appGenerator(plop));
  plop.setGenerator('backend-app', backendApp(plop));
  plop.setGenerator('slice', sliceGenerator(plop));
  plop.setGenerator('rtk-api', rtkApiGenerator(plop));

  plop.setHelper('openCurly', openCurlyHelper);
  plop.setHelper('closeCurly', closeCurlyHelper);

  plop.setActionType('prettify', prettifyActionType);
  plop.setActionType('install', installDependancies);
};
