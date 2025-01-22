import { Meta, StoryObj } from '@storybook/react';
import SelectField from '.';

export default {
  title: 'Components/Inputs/Select',
  component: SelectField,
  argTypes: {
    onChange: { action: 'changed' },
    extraAttributes: {
      control: 'object',
    },
    options: {
      control: 'object',
      defaultValue: [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ],
    },
    value: { control: 'text' }, // Allow the value to be controlled by Storybook
  },
} as Meta<typeof SelectField>;

type Story = StoryObj<typeof SelectField>;

// Default story with predefined options and value
export const Default: Story = {
  args: {
    name: 'dropdown',
    label: 'Select an Option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    value: 'option1', // default selected option
    onChange: (name: string, value: string) => console.log(name, value),
  },
};

// Story with a custom label and options
export const CustomOptions: Story = {
  args: {
    name: 'custom-dropdown',
    label: 'Choose a Custom Option',
    options: [
      { value: 'custom1', label: 'Custom Option 1' },
      { value: 'custom2', label: 'Custom Option 2' },
      { value: 'custom3', label: 'Custom Option 3' },
      { value: 'custom4', label: 'Custom Option 4' },
    ],
    value: 'custom2',
    onChange: (name: string, value: string) => console.log(name, value),
  },
};

// Story with icons in options (if icons are passed)
export const WithIcons: Story = {
  args: {
    name: 'dropdown-with-icons',
    label: 'Select Option with Icons',
    options: [
      { value: 'apple', label: 'Apple', icon: '🍎' },
      { value: 'banana', label: 'Banana', icon: '🍌' },
      { value: 'cherry', label: 'Cherry', icon: '🍒' },
    ],
    value: 'apple',
    onChange: (name: string, value: string) => console.log(name, value),
  },
};

// Story with error messages (you can display errors in the UI with meta prop)
export const WithError: Story = {
  args: {
    name: 'error-dropdown',
    label: 'Select an Option with Error',
    options: [
      { value: 'error1', label: 'Error Option 1' },
      { value: 'error2', label: 'Error Option 2' },
    ],
    value: 'error1',
    onChange: (name: string, value: string) => console.log(name, value),
  },
};
