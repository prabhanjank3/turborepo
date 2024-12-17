import { Meta, StoryObj } from '@storybook/react';
import TimeFieldInput from '.'; // Adjust path to where TimeFieldInput is located
import { Dayjs } from 'dayjs';

// Define metadata for the component in Storybook
export default {
  title: 'Components/Inputs/Time', // Title to appear in the Storybook sidebar
  component: TimeFieldInput, // The component being documented
  argTypes: {
    onChange: { action: 'changed' }, // Log the onChange action in Storybook
    extraAttributes: {
      control: 'object', // Control for any additional props passed
    },
    value: { control: 'text' }, // Allow the value to be controlled by Storybook
    label: { control: 'text' }, // Allow label text to be customized
  },
} as Meta<typeof TimeFieldInput>;

type Story = StoryObj<typeof TimeFieldInput>;

// Default story with predefined value and label
export const Default: Story = {
  args: {
    name: 'timefield',
    label: 'Select Time',
    value: '12:00', // Default time value
    onChange: (name: string, value: Dayjs | null) => console.log(name, value),
  },
};

// Story with a custom time value
export const WithCustomTime: Story = {
  args: {
    name: 'timefield-custom',
    label: 'Custom Time',
    value: '15:30', // Custom time value
    onChange: (name: string, value: Dayjs | null) => console.log(name, value),
  },
};

// Story with error (showing helper text or validation state)
export const WithError: Story = {
  args: {
    name: 'timefield-error',
    label: 'Time with Error',
    value: '06:45', // Example error value
    onChange: (name: string, value: Dayjs | null) => console.log(name, value),
    meta: {
      isValid: false,
      messages: ['This time is not valid'],
    },
  },
};

// Story with custom attributes (like disabled)
export const WithCustomAttributes: Story = {
  args: {
    name: 'timefield-disabled',
    label: 'Disabled Time Field',
    value: '08:00',
    onChange: (name: string, value: Dayjs | null) => console.log(name, value),
    extraAttributes: {
      disabled: true,
    },
  },
};
