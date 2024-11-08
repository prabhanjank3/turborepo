// packages/my-component-library/src/CustomButton.stories.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import CustomButton, { CustomButtonProps } from '.'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// Base arguments for all stories
const baseArgs: CustomButtonProps = {
  label: 'Click Me',
  disabled: false,
  size: 'small',
  bgColor: undefined,
  onClick: action('onClick'),
  variant: 'contained',
};

// Define component metadata
export default {
  component: CustomButton,
  args: baseArgs,
} as Meta<typeof CustomButton>;

type Story = StoryObj<typeof CustomButton>;

// Create your default story
export const Default: Story = {};

// Create Disabled Button story
export const Disabled: Story = {
  args: {
    ...baseArgs,
    disabled: true,
    label: 'Disabled Button',
    size: 'small',
  },
};

// Create Small Button story
export const Small: Story = {
  args: {
    ...baseArgs,
    size: 'small',
    label: 'Small Button',
  },
};

// Create Large Button story
export const Large: Story = {
  args: {
    ...baseArgs,
    size: 'large',
    label: 'Large Button',
  },
};

// Create Custom Color Button story
export const CustomColor: Story = {
  args: {
    ...baseArgs,
    label: 'Custom Color Button',
    bgColor: '#FF5733', // Custom hex color
  },
};

// Create Outlined Button story
export const Outlined: Story = {
  args: {
    ...baseArgs,
    variant: 'outlined',
    label: 'Outlined Button',
  },
};

// Create Text Button story
export const Text: Story = {
  args: {
    ...baseArgs,
    variant: 'text',
    label: 'Text Button',
  },
};
