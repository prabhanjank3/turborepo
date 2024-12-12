// packages/my-component-library/src/Navbar.stories.tsx
import React from 'react';
import Navbar from './index'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';

// Mock data for the PORTALDATA
const mockPortalData = {
  logo: () => (
    <img
      src="data:image/png;base64,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"
      alt="Logo"
      style={{ width: '70px', height: '50px' }}
    />
  ), // Mock logo component
  name: 'My Portal',
  subline: 'The best portal ever',
};

// Base arguments for all stories
const baseArgs = {
  PORTALDATA: mockPortalData,
  Menudata: 'Menu Item 1, Menu Item 2, Menu Item 3',
};

// Define component metadata
export default {
  component: Navbar,
  args: baseArgs,
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

// Create your default story
export const Default: Story = {};

// Create Logged In Navbar story
export const LoggedIn: Story = {
  args: {
    ...baseArgs,
    // You can add additional properties if you have any
    // For example: isLoggedIn: true
  },
};

// Create Logged Out Navbar story
export const LoggedOut: Story = {
  args: {
    ...baseArgs,
    // Assuming there's a conditional rendering based on logged in state
    // You can modify PORTALDATA or other props to reflect this state
  },
};

// You can add more stories to test various configurations if needed
