import type { NodePlopAPI } from 'plop';
import { prompts } from './prompt';
import { sliceActions } from './action';

export const sliceGenerator = function (plop: NodePlopAPI) {
  return {
    description: 'Scaffold a new Node.js + Express + Sequelize backend app',
    prompts: prompts,
    actions: sliceActions(plop),
  };
};
