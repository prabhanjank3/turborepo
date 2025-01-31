import { Field } from './field';

export type FormConfig = {
  title?: string; // Optional title for the form
  useControls?: boolean; // Whether to show form controls (e.g., submit button)
  fields: Field[];
  handleSubmit?: () => any;
};
