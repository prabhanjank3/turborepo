import { Meta, StoryObj } from '@storybook/react';
import TextFieldInput from '.'; // Adjust path to where TextFieldInput is located

// Define metadata for the component in Storybook
export default {
  title: 'Components/Inputs/Text', // Title to appear in the Storybook sidebar
  component: TextFieldInput, // The component being documented
  argTypes: {
    onChange: { action: 'changed' }, // Log the onChange action in Storybook
    extraAttributes: {
      control: 'object', // Control for any additional props passed
    },
    value: { control: 'text' }, // Allow the value to be controlled by Storybook
    label: { control: 'text' }, // Allow label text to be customized
    meta: {
      // Meta props for validation or error messages
      control: 'object',
    },
  },
} as Meta<typeof TextFieldInput>;

type Story = StoryObj<typeof TextFieldInput>;

// Default story with predefined value and label
export const Default: Story = {
  args: {
    name: 'textfield',
    label: 'Enter text',
    value: '',
    onChange: (name: string, value: string) => console.log(name, value),
  },
};

// Story with an error (showing helper text)
export const WithError: Story = {
  args: {
    name: 'textfield-error',
    label: 'Enter text with error',
    value: '',
    onChange: (name: string, value: string) => console.log(name, value),
    meta: {
      isValid: false,
      messages: ['This field is required'],
    },
  },
};

// Story with helper text (but no error)
export const WithHelperText: Story = {
  args: {
    name: 'textfield-helper',
    label: 'Enter text with helper text',
    value: '',
    onChange: (name: string, value: string) => console.log(name, value),
    helperText: 'This is some helper text.',
  },
};

// Story with custom attributes (e.g., disabled or required)
export const WithCustomAttributes: Story = {
  args: {
    name: 'textfield-disabled',
    label: 'Disabled Text Field',
    value: '',
    onChange: (name: string, value: string) => console.log(name, value),
    extraAttributes: {
      disabled: true,
    },
  },
};
