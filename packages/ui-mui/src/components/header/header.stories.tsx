// packages/my-component-library/src/Navbar.stories.tsx
import React from 'react';
import Navbar from './index'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';
import { AcUnitOutlined } from '@mui/icons-material';

// Mock data for the PORTALDATA
const mockPortalData = {
  logo: () => <AcUnitOutlined fontSize="large" />, // Mock logo component
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
