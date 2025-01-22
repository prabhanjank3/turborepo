import { Meta, StoryObj } from '@storybook/react';
import DateFieldInput from '.'; // Adjust path to the actual location of your DateFieldInput component

// Define component metadata
export default {
  title: 'Components/Inputs/Date', // The title for the Storybook sidebar
  component: DateFieldInput, // The component you're creating the story for
  argTypes: {
    onChange: { action: 'changed' }, // To log the onChange action in Storybook's action panel
    meta: { control: 'object' }, // Control the `meta` prop as an object
  },
} as Meta<typeof DateFieldInput>;

type Story = StoryObj<typeof DateFieldInput>;

// Default story
export const Default: Story = {
  args: {
    name: 'date',
    value: '2023-12-16',
    label: 'Select Date',
    inputFormat: 'DD-MM-YYYY',
    defaultValue: new Date('2023-12-16'),
    onChange: (name: string, value: string) => console.log(name, value),
    meta: { isValid: true, messages: [] },
  },
};

// Story with error messages
export const WithError: Story = {
  args: {
    name: 'date',
    value: '2023-12-16',
    label: 'Select Date',
    inputFormat: 'DD-MM-YYYY',
    defaultValue: new Date('2023-12-16'),
    onChange: (name: string, value: string) => console.log(name, value),
    meta: { isValid: false, messages: ['Invalid date format'] },
  },
};

// Story with a custom input format
export const CustomFormat: Story = {
  args: {
    name: 'date',
    value: '2023-12-16',
    label: 'Custom Format Date',
    inputFormat: 'YYYY/MM/DD',
    defaultValue: new Date('2023-12-16'),
    onChange: (name: string, value: string) => console.log(name, value),
    meta: { isValid: true, messages: [] },
  },
};

// Story with a custom default value
export const WithDefaultValue: Story = {
  args: {
    name: 'date',
    value: '2023-11-10',
    label: 'Default Value Date',
    inputFormat: 'DD-MM-YYYY',
    defaultValue: new Date('2023-12-16'),
    onChange: (name: string, value: string) => console.log(name, value),
    meta: { isValid: true, messages: [] },
  },
};
