import type { NodePlopAPI } from 'plop';
import { appPrompts } from './prompts';
import { generateAppActions } from './action';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function appGenerator(plop: NodePlopAPI) {
  return {
    description: 'Generate a new Vite React app with optional features',
    prompts: appPrompts,
    actions: (answers: any) => {
      return generateAppActions(answers);
    },
  };
}
