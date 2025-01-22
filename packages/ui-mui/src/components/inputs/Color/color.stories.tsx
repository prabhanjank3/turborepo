import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ColorPicker from '.'; // Adjust the path as needed
import { Button } from '@mui/material';

// Define metadata for the component in Storybook
export default {
  title: 'Components/Inputs/ColorPicker', // Title for the component in the Storybook sidebar
  component: ColorPicker, // The component being documented
  argTypes: {
    onChange: { action: 'colorChanged' }, // Log onChange action in Storybook
    color: { control: 'color' }, // Allow color to be controlled (select a color in Storybook)
    name: { control: 'text' }, // Control for the name property
  },
} as Meta<typeof ColorPicker>;

type Story = StoryObj<typeof ColorPicker>;

// Default story with no color selected
export const Default: Story = {
  args: {
    name: 'colorPicker',
    color: '#FF6347', // Tomato red as a default color
    onChange: (name: string, newColor: string) => {
      console.log('Color changed for', name, ':', newColor);
    },
    faceComponent: (
      <Button variant="contained" style={{ backgroundColor: '#FF6347' }}>
        Pick a color
      </Button>
    ), // Trigger button for color picker
  },
};

// Story with a different default color
export const WithDifferentColor: Story = {
  args: {
    name: 'colorPicker',
    color: '#4CAF50', // Green as a default color
    onChange: (name: string, newColor: string) => {
      console.log('Color changed for', name, ':', newColor);
    },
    faceComponent: (
      <Button variant="contained" style={{ backgroundColor: '#4CAF50' }}>
        Pick a color
      </Button>
    ), // Trigger button for color picker
  },
};

// Story with error handling or validation (can be expanded with validation messages)
export const WithErrorHandling: Story = {
  args: {
    name: 'colorPickerWithError',
    color: '#FF6347', // Tomato red as default color
    onChange: (name: string, newColor: string) => {
      console.log('Color changed for', name, ':', newColor);
    },
    faceComponent: (
      <Button variant="contained" style={{ backgroundColor: '#FF6347' }}>
        Pick a color
      </Button>
    ),
  },
};
