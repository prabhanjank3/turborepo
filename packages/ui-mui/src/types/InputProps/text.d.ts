interface TextFieldMeta {
  /**
   * setting isValid to false will show error on the field
   * @default false
   */
  isValid: boolean;
  /**
   * message will be displayed as helpertext on the field
   * @default ''
   */
  messages: Array<string>;
}

export interface TextFieldProps {
  name: string;
  defaultValue?: string;
  value?: string | null | undefined | unknown;
  label: string;
  placeholder?: string;
  extraAttributes?: Object;
  onChange: any;
  meta?: TextFieldMeta;
  helperText?: string;
}
