import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SidebarLayout, { SidebarItem } from '../index';
import {
  Home,
  Settings,
  AccountCircle,
  AcUnitOutlined,
} from '@mui/icons-material';

// Example components for testing
const HomeComponent = () => <div>Home Content</div>;
const ProfileComponent = () => <div>Profile Content</div>;
const AboutComponent = () => <div>About Content</div>;

// Test Sidebar Items
const sidebarItems: SidebarItem[] = [
  { label: 'Home', icon: <Home />, component: <HomeComponent /> },
  {
    label: 'Settings',
    icon: <Settings />,
    children: [
      {
        label: 'Profile',
        icon: <AccountCircle />,
        component: <ProfileComponent />,
      },
      { label: 'About', component: <AboutComponent /> },
    ],
  },
];

describe('SidebarLayout', () => {
  const appInfo = {
    logo: <AcUnitOutlined fontSize="large" />, // Mock logo component
    name: 'Development',
    subLine: 'Digital Platform',
  };
  test('renders all sidebar items, including nested ones', () => {
    render(
      <SidebarLayout
        sidebarItems={sidebarItems}
        defaultComponent={<HomeComponent />}
        appInfo={appInfo}
      />,
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.queryByText('Profile')).not.toBeInTheDocument(); // Nested items hidden by default
    expect(screen.queryByText('About')).not.toBeInTheDocument();
  });

  test('renders the default component on initial load', () => {
    render(
      <SidebarLayout
        sidebarItems={sidebarItems}
        defaultComponent={<HomeComponent />}
        appInfo={appInfo}
      />,
    );
    expect(screen.getByText('Home Content')).toBeInTheDocument();
  });

  test('renders the component associated with a clicked sidebar item', () => {
    render(
      <SidebarLayout
        sidebarItems={sidebarItems}
        defaultComponent={<HomeComponent />}
        appInfo={appInfo}
      />,
    );
    fireEvent.click(screen.getByText('Home'));
    expect(screen.getByText('Home Content')).toBeInTheDocument();
  });

  test('toggles nested menu items on click', async () => {
    render(
      <SidebarLayout
        sidebarItems={sidebarItems}
        defaultComponent={<HomeComponent />}
        appInfo={appInfo}
      />,
    );
    // Expand "Settings" menu
    fireEvent.click(screen.getByText('Settings'));
    await waitFor(() => {
      expect(screen.getByText('Profile')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
    });

    // Collapse "Settings" menu
    fireEvent.click(screen.getByText('Settings'));
    await waitFor(() => {
      expect(screen.queryByText('Profile')).not.toBeInTheDocument();
      expect(screen.queryByText('About')).not.toBeInTheDocument();
    });
  });

  test('renders the component associated with a nested sidebar item', () => {
    render(
      <SidebarLayout
        sidebarItems={sidebarItems}
        defaultComponent={<HomeComponent />}
        appInfo={appInfo}
      />,
    );
    fireEvent.click(screen.getByText('Settings'));
    fireEvent.click(screen.getByText('Profile'));
    expect(screen.getByText('Profile Content')).toBeInTheDocument();
  });

  test('does not render default component after item click', () => {
    render(
      <SidebarLayout
        sidebarItems={sidebarItems}
        defaultComponent={<HomeComponent />}
        appInfo={appInfo}
      />,
    );
    fireEvent.click(screen.getByText('Settings'));
    fireEvent.click(screen.getByText('About'));
    expect(screen.queryByText('Home Content')).not.toBeInTheDocument();
    expect(screen.getByText('About Content')).toBeInTheDocument();
  });

  test('handles empty sidebar items gracefully', () => {
    render(
      <SidebarLayout
        sidebarItems={[]}
        defaultComponent={<div>No Items Available</div>}
        appInfo={appInfo}
      />,
    );
    expect(screen.getByText('No Items Available')).toBeInTheDocument();
  });
});
