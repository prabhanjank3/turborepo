import { Meta, StoryObj } from '@storybook/react';
import AutocompleteInputField from '.'; // Adjust path to where AutocompleteInputField is located
import { CustomOption } from '../../../types/InputProps/autocomplete'; // Adjust path to AutoCompleteProps

// Define metadata for the component in Storybook
export default {
  title: 'Components/Inputs/Autocomplete', // Title to appear in the Storybook sidebar
  component: AutocompleteInputField, // The component being documented
  argTypes: {
    onChange: { action: 'changed' }, // Log the onChange action in Storybook
    extraAttributes: {
      control: 'object', // Control for any additional props passed
    },
    options: {
      // Correctly specify the control for options array
      control: 'object', // This should be 'object' for an array of objects
      defaultValue: [
        { id: 1, value: 'Option 1' },
        { id: 2, value: 'Option 2' },
        { id: 3, value: 'Option 3' },
      ] as unknown as CustomOption[], // Ensure options are typed as CustomOption[]
    },
    value: { control: 'object' }, // Allow the value to be controlled by Storybook
    label: { control: 'text' }, // Allow label text to be customized
    meta: {
      // Meta props for validation or error messages
      control: 'object',
    },
  },
} as Meta<typeof AutocompleteInputField>;

type Story = StoryObj<typeof AutocompleteInputField>;

// Default story with predefined options
export const Default: Story = {
  args: {
    label: 'Select an Option',
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    value: { id: 1, value: 'Option 1' }, // Set the default value to the first option
    onChange: (newValue: CustomOption | null) =>
      console.log('Selected:', newValue),
  },
};

// Story with a custom value selected
export const WithCustomValue: Story = {
  args: {
    label: 'Select a Custom Option',
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    value: { id: 2, value: 'Option 2' }, // Custom value selected
    onChange: (newValue: CustomOption | null) =>
      console.log('Selected:', newValue),
  },
};

// Story with error state (using meta for validation)
export const WithError: Story = {
  args: {
    label: 'Select an Option with Error',
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    value: { id: 1, value: 'Option 1' },
    meta: {
      isValid: false,
      messages: ['This field is required'],
    },
    onChange: (newValue: CustomOption | null) =>
      console.log('Selected:', newValue),
  },
};

// Story with custom attributes (e.g., disabled or required)
export const WithCustomAttributes: Story = {
  args: {
    label: 'Disabled Autocomplete',
    options: [
      { id: '1', value: 'Option 1' },
      { id: '2', value: 'Option 2' },
      { id: '3', value: 'Option 3' },
    ],
    value: { id: 1, value: 'Option 1' },
    extraAttributes: {
      disabled: true, // Disabled the autocomplete
    },
    onChange: (newValue: CustomOption | null) =>
      console.log('Selected:', newValue),
  },
};
