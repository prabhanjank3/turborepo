import type { NodePlopAPI } from 'plop';
import { prompts } from './prompt';
import { actions } from './action';

export const endpointGenerator = function (plop: NodePlopAPI) {
  return {
    description: 'Scaffold a new backend endpoint',
    prompts: prompts,
    actions: actions(plop),
  };
};
