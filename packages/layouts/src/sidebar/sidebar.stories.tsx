import React from 'react';
import SidebarLayout, { SidebarItem, SidebarLayoutProps } from './index';
import { StoryObj, Meta } from '@storybook/react';
import {
  Home,
  Settings,
  Info,
  AccountCircle,
  AcUnitOutlined,
} from '@mui/icons-material';

// Example components for rendering
const HomeComponent = () => <div>Welcome to the Home Page</div>;
const SettingsComponent = () => <div>Here are your settings</div>;
const ProfileComponent = () => <div>Your profile details</div>;
const AboutComponent = () => <div>About this application</div>;

// Sidebar items for the stories
const sidebarItems: SidebarItem[] = [
  { icon: <Home />, label: 'Home', component: <HomeComponent /> },
  {
    icon: <Settings />,
    label: 'Settings',
    children: [
      {
        icon: <AccountCircle />,
        label: 'Profile',
        component: <ProfileComponent />,
      },
      { label: 'About', component: <AboutComponent /> },
    ],
  },
];

// Default props for the SidebarLayout
const baseArgs: SidebarLayoutProps = {
  sidebarItems,
  defaultComponent: <HomeComponent />,
  drawerWidth: 240,
  appInfo: {
    logo: <AcUnitOutlined fontSize="large" />, // Mock logo component
    name: 'Development',
    subLine: 'Digital Platform',
  },
};

// Storybook configuration
export default {
  title: 'Layouts/SidebarLayout',
  component: SidebarLayout,
  args: baseArgs,
} as Meta<typeof SidebarLayout>;

type Story = StoryObj<typeof SidebarLayout>;

// Default Sidebar Layout Story
export const Default: Story = {};

// Story with No Default Component
export const WithoutDefaultComponent: Story = {
  args: {
    ...baseArgs,
    defaultComponent: null,
  },
};

// Story with Custom Drawer Width
export const CustomDrawerWidth: Story = {
  args: {
    ...baseArgs,
    drawerWidth: 300,
  },
};

// Story with Empty Sidebar Items
export const EmptySidebar: Story = {
  args: {
    sidebarItems: [],
    defaultComponent: <div>No items available</div>,
    drawerWidth: 240,
  },
};
