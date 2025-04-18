import React, { useEffect } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  Autocomplete,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  FormControl,
  InputLabel,
  FormHelperText,
  AutocompleteProps,
  FormControlLabelProps,
  FormControlProps,
  FormHelperTextProps,
  InputLabelProps,
  MenuItemProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
  SwitchProps,
  TextFieldProps,
  Grid,
  Typography,
  Button,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
  DatePicker,
  DatePickerProps,
  TimePicker,
  TimePickerProps,
} from '@mui/x-date-pickers';
import { Field } from './types/field';
import { FormConfig } from './types/formConfig';

const renderField = (
  field: Field,
  value: any,
  onChange: (value: any) => void,
  error?: string
) => {
  const { type, label, placeholder, options, props } = field;

  switch (type) {
    case 'text':
      return (
        <FormControl fullWidth>
          <InputLabel {...(props as InputLabelProps)}>{label}</InputLabel>
          <TextField
            label={label}
            placeholder={placeholder}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value)
            }
            error={!!error}
            helperText={error}
            fullWidth
            {...(props as TextFieldProps)}
          />
        </FormControl>
      );

    case 'select':
      return (
        <FormControl fullWidth error={!!error} {...(props as FormControlProps)}>
          <InputLabel {...(props as InputLabelProps)}>{label}</InputLabel>
          <Select
            label={label}
            value={value}
            fullWidth
            // @ts-ignore
            onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
              onChange(e.target.value)
            }
            {...(props as SelectProps)}
          >
            {options?.map(
              (option: {
                value: React.Key | readonly string[] | null | undefined;
                label:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <MenuItem
                  // @ts-ignore
                  key={option.value}
                  value={option.value}
                  {...(props as MenuItemProps)}
                >
                  {option.label}
                </MenuItem>
              )
            )}
          </Select>
          {error && (
            <FormHelperText {...(props as FormHelperTextProps)}>
              {error}
            </FormHelperText>
          )}
        </FormControl>
      );

    case 'autocomplete':
      const [autocompleteOptions, setAutocompleteOptions] = React.useState<
        Array<{ label: string; value: any }>
      >(options || []);

      React.useEffect(() => {
        if (field.fetchOptions) {
          field
            .fetchOptions()
            .then((fetchedOptions) => setAutocompleteOptions(fetchedOptions))
            .catch((error) => console.error('Error fetching options:', error));
        }
      }, [field.fetchOptions]);

      return (
        <FormControl fullWidth>
          <InputLabel {...(props as InputLabelProps)}>{label}</InputLabel>

          <Autocomplete
            // @ts-ignore
            options={autocompleteOptions}
            freeSolo={field.freeSolo}
            multiple={field.multiple}
            value={value}
            onChange={(_: React.SyntheticEvent, newValue: any) =>
              onChange(newValue)
            }
            // @ts-ignore
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                placeholder={placeholder}
                error={!!error}
                helperText={error}
                fullWidth
              />
            )}
            {...(props as AutocompleteProps<any, boolean, boolean, boolean>)}
          />
        </FormControl>
      );

    case 'radio':
      return (
        <FormControl
          component="fieldset"
          error={!!error}
          {...(props as FormControlProps)}
        >
          <InputLabel {...(props as InputLabelProps)}>{label}</InputLabel>
          <RadioGroup
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange(e.target.value)
            }
            {...(props as RadioGroupProps)}
          >
            {options?.map(
              (option: {
                value: unknown;
                label:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined;
              }) => (
                <FormControlLabel
                  // @ts-ignore
                  key={option.value}
                  value={option.value}
                  // @ts-ignore
                  control={<Radio {...(props as RadioProps)} />}
                  // @ts-ignore
                  label={option.label}
                  {...(props as FormControlLabelProps)}
                />
              )
            )}
          </RadioGroup>
          {error && (
            <FormHelperText {...(props as FormHelperTextProps)}>
              {error}
            </FormHelperText>
          )}
        </FormControl>
      );

    case 'toggle':
      return (
        <FormControlLabel
          // @ts-ignore
          control={
            <Switch
              checked={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.checked)
              }
              {...(props as SwitchProps)}
            />
          }
          // @ts-ignore
          label={label}
          {...(props as FormControlLabelProps)}
        />
      );

    case 'file':
      return (
        <TextField
          type="file"
          label={label}
          InputLabelProps={{ shrink: true }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange((e.target as HTMLInputElement).files?.[0])
          }
          fullWidth
          {...(props as TextFieldProps)}
        />
      );

    case 'color':
      return (
        <TextField
          type="color"
          label={label}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          fullWidth
          {...(props as TextFieldProps)}
        />
      );

    case 'date':
      return (
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue: any) => onChange(newValue)}
          sx={{ width: '100%' }}
          // @ts-ignore
          renderInput={(params: any) => (
            <TextField
              {...params}
              error={!!error}
              helperText={error}
              fullWidth
            />
          )}
          {...(props as DatePickerProps<any>)}
        />
      );

    case 'time':
      return (
        <TimePicker
          label={label}
          value={value}
          sx={{ width: '100%' }}
          onChange={(newValue: any) => onChange(newValue)}
          // @ts-ignore
          renderInput={(params: any) => (
            <TextField {...params} error={!!error} helperText={error} />
          )}
          {...(props as TimePickerProps<any>)}
        />
      );

    default:
      return null;
  }
};

const DynamicForm: React.FC<{ config: FormConfig }> = ({ config }) => {
  const [formValues, setFormValues] = React.useState<Record<string, any>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  const handleChange = (fieldName: string) => (value: any) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: value }));
    setErrors((prev) => ({ ...prev, [fieldName]: '' }));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={2}>
        {/* Render form title if provided */}
        {config.title && (
          <Grid item xs={12}>
            <Typography sx={{ fontSize: '2rem' }} gutterBottom>
              {config.title}
            </Typography>
          </Grid>
        )}

        {/* Render form fields */}
        {config.fields.map((field) => (
          <Grid item key={field.name} {...field.gridProps}>
            {renderField(
              field,
              formValues[field.name] || field.defaultValue,
              handleChange(field.name),
              errors[field.name]
            )}
          </Grid>
        ))}

        {/* Render form controls if useControls is true */}
        {config.useControls && (
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={config.handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        )}
      </Grid>
    </LocalizationProvider>
  );
};

export default DynamicForm;
