import { ActionType } from 'plop';

export const copyTemplateFiles = (
  templateFolder: string,
  targetFolder: string,
): ActionType[] => [
  {
    type: 'addMany',
    destination: targetFolder,
    templateFiles: `packages/generators/templates/${templateFolder}/**/*`,
    base: `packages/generators/templates/${templateFolder}`,
  },
];
