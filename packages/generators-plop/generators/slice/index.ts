import type { NodePlopAPI } from 'plop';
import { prompts } from './prompt';
import { sliceActions } from './action';

export const sliceGenerator = function (plop: NodePlopAPI) {
  return {
    description: 'Scaffold a local state slice',
    prompts: prompts,
    actions: sliceActions(plop),
  };
};
