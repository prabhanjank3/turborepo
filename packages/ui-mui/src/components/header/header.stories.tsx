// packages/my-component-library/src/Navbar.stories.tsx
import React from 'react';
import Navbar from './index'; // Adjust the import path as necessary
import { StoryObj, Meta } from '@storybook/react';
import { AcUnitOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

// Mock data for the PORTALDATA
const mockPortalData = {
  logo: <AcUnitOutlined fontSize="large" />, // Mock logo component
  name: 'My Portal',
  subLine: 'The best portal ever',
};

// Base arguments for all stories
const baseArgs = {
  appInfo: mockPortalData,
  menuItems: [
    {
      url: '#',
      label: 'Home',
      child: [
        { url: '#', label: 'Dashboard' },
        { url: '#', label: 'Profile' },
      ],
    },
    {
      url: '#',
      label: 'About',
      child: [
        { url: '#', label: 'Company' },
        { url: '#', label: 'Team' },
      ],
    },
  ],
  UserControls: (
    <Avatar sx={{ bgcolor: 'secondary.main', fontSize: 'medium' }}>OP</Avatar>
  ),
};

// Define component metadata
export default {
  component: Navbar,
  args: baseArgs,
} as Meta<typeof Navbar>;

type Story = StoryObj<typeof Navbar>;

// Create your default story
export const Default: Story = {};

// Create a story with mobile responsiveness
export const MobileView: Story = {
  args: {
    ...baseArgs,
    appInfo: {
      ...mockPortalData,
      name: 'My Mobile Portal', // Example name change
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};
