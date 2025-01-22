import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import PopoverComponent from './'; // Adjust import path
import { Button } from '@mui/material';

// Define component metadata
export default {
  title: 'Components/Popover', // Storybook folder structure
  component: PopoverComponent, // Component being documented
} as Meta<typeof PopoverComponent>;

type Story = StoryObj<typeof PopoverComponent>;

// Default story for PopoverComponent
export const Default: Story = {
  args: {
    // The face component that triggers the popover
    faceComponent: (
      <Button variant="contained">Click me to open Popover</Button>
    ),

    // The component that will be displayed inside the popover
    component: (
      <div style={{ padding: '10px', minWidth: '200px' }}>
        <h4>This is Popover content</h4>
        <p>Some information or UI elements can go here.</p>
      </div>
    ),
  },
};
