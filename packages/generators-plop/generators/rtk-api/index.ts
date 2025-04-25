import type { NodePlopAPI } from 'plop';
import { rtqApiPrompts } from './prompt';
import { rtqApiActions } from './action';

export default function (plop: NodePlopAPI) {
  return {
    description: 'Scaffold a RTK Query Api',
    prompts: rtqApiPrompts,
    actions: rtqApiActions(plop),
  };
}
