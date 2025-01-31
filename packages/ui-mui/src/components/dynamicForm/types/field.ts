import {
  TextFieldProps,
  SelectProps,
  AutocompleteProps,
  RadioGroupProps,
  SwitchProps,
  FormControlProps,
  InputLabelProps,
  FormHelperTextProps,
  MenuItemProps,
  FormControlLabelProps,
  RadioProps,
} from '@mui/material';
import { DatePickerProps, TimePickerProps } from '@mui/x-date-pickers';

export type Field = {
  type:
    | 'text'
    | 'select'
    | 'autocomplete'
    | 'radio'
    | 'toggle'
    | 'file'
    | 'color'
    | 'date'
    | 'time';
  name: string;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  options?: Array<{ label: string; value: any }>; // For select, autocomplete, radio
  validation?: {
    required?: boolean;
    min?: number;
    max?: number;
    pattern?: RegExp;
    customValidator?: (value: any) => string | undefined;
  };
  disabled?: boolean;
  hidden?: boolean;
  gridProps?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  // Field-specific properties
  freeSolo?: boolean; // For autocomplete
  multiple?: boolean; // For select, autocomplete
  accept?: string; // For file
  format?: string; // For date, time
  props?:
    | TextFieldProps
    | SelectProps
    | AutocompleteProps<any, boolean, boolean, boolean>
    | RadioGroupProps
    | SwitchProps
    | FormControlProps
    | InputLabelProps
    | FormHelperTextProps
    | MenuItemProps
    | FormControlLabelProps
    | RadioProps
    | DatePickerProps<any>
    | TimePickerProps<any>; // Props for the MUI component
  fetchOptions?: () => Promise<Array<{ label: string; value: any }>>; // For dynamic autocomplete options
};
