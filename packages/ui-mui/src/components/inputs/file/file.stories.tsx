import { Meta, StoryObj } from '@storybook/react';
import FileField from '.'; // Adjust path to where FileField is located

// Define metadata for the component in Storybook
export default {
  title: 'Components/Inputs/File', // Title for the component in the Storybook sidebar
  component: FileField, // The component being documented
  argTypes: {
    onChange: { action: 'changed' }, // Log onChange action in Storybook
    extraAttributes: {
      control: 'object', // Control for any additional props passed
    },
    value: {
      control: 'object', // Allow value to be controlled
      defaultValue: null, // Set default value to null (no file selected initially)
    },
    label: { control: 'text' }, // Control for the label text
    meta: {
      control: 'object', // Allow meta validation or error messages
    },
  },
} as Meta<typeof FileField>;

type Story = StoryObj<typeof FileField>;

// Default story (no file selected)
export const Default: Story = {
  args: {
    label: 'Choose a file',
    value: null, // No file selected
    onChange: (name: string, file: File) => {
      console.log('Selected file:', file);
    },
  },
};

// Story with a pre-selected file
export const WithFile: Story = {
  args: {
    label: 'Selected file',
    value: new File(['dummy content'], 'example.txt', { type: 'text/plain' }), // Simulate a selected file
    onChange: (name: string, file: File) => {
      console.log('File selected:', file);
    },
  },
};

// Story with error state (using meta for validation)
export const WithError: Story = {
  args: {
    label: 'Choose a file with error',
    value: null, // No file selected
    meta: {
      isValid: false,
      messages: ['This field is required.'],
    },
    onChange: (name: string, file: File) => {
      console.log('File selected:', file);
    },
  },
};

// Story with custom attributes (e.g., disabled or required)
export const WithCustomAttributes: Story = {
  args: {
    label: 'Disabled File Upload',
    value: null, // No file selected
    extraAttributes: {
      disabled: true, // Disable the input field
    },
    onChange: (name: string, file: File) => {
      console.log('File selected:', file);
    },
  },
};
