import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ReusableModal from './'; // Adjust the import path
import { Button } from '@mui/material';

const ModalContent = (
  <div>
    <h2>Modal Content</h2> <p>This is an example of the modal content.</p>{' '}
    <Button onClick={() => {}}>Close</Button>{' '}
  </div>
);

// Modal Trigger Button
const TriggerComponent = <Button variant="contained">Open Modal</Button>;

// Define component metadata
export default {
  title: 'Components/Modal', // Title in Storybook
  component: ReusableModal, // The component you're showcasing
} as Meta<typeof ReusableModal>;

type Story = StoryObj<typeof ReusableModal>;

// Default story for the ReusableModal
export const Default: Story = {
  args: {
    TriggerComponent, // The button that triggers the modal
    ModalContent: ModalContent as unknown as React.ReactElement, // The content inside the modal
  },
};
