import type { NodePlopAPI } from 'plop';
import { backendPrompts } from './prompt';
import { backendActions } from './action';

export default function (plop: NodePlopAPI) {
  return {
    description: 'Scaffold a new Node.js + Express + Sequelize backend app',
    prompts: backendPrompts,
    actions: backendActions(plop),
  };
}
