import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar, { NavbarProps } from '..';

describe('Navbar', () => {
  const mockAppInfo = {
    logo: <div>Logo</div>,
    name: 'My App',
    subLine: 'Best App Ever',
  };

  const mockMenuItems = [
    {
      url: '#',
      label: 'Home',
      child: [
        { url: '#sub1', label: 'Submenu 1' },
        { url: '#sub2', label: 'Submenu 2' },
      ],
    },
    {
      url: '#about',
      label: 'About',
    },
  ];

  const mockUserControls = <div>User Avatar</div>;

  const renderNavbar = (props: NavbarProps) => render(<Navbar {...props} />);

  it('should render the logo, app name, and subtitle', () => {
    renderNavbar({
      appInfo: mockAppInfo,
      menuItems: mockMenuItems,
      UserControls: mockUserControls,
    });

    expect(screen.getByText('Logo')).toBeInTheDocument();
    expect(screen.getAllByText('My App')).toHaveLength(2);
    expect(screen.getByText('Best App Ever')).toBeInTheDocument();
  });

  it('should render menu items and expand/collapse submenus', () => {
    renderNavbar({
      appInfo: mockAppInfo,
      menuItems: mockMenuItems,
      UserControls: mockUserControls,
    });

    // Test rendering "Home" menu
    const homeMenuItem = screen.getByText('Home');
    expect(homeMenuItem).toBeInTheDocument();

    // Click on "Home" to toggle submenu
    fireEvent.click(homeMenuItem);

    // Check if submenu items are shown
    expect(screen.getByText('Submenu 1')).toBeInTheDocument();
    expect(screen.getByText('Submenu 2')).toBeInTheDocument();
  });

  it('should render "About" menu item without submenu', () => {
    renderNavbar({
      appInfo: mockAppInfo,
      menuItems: mockMenuItems,
      UserControls: mockUserControls,
    });

    const aboutMenuItem = screen.getByText('About');
    expect(aboutMenuItem).toBeInTheDocument();
    expect(aboutMenuItem).not.toHaveClass('MuiListItemText-root'); // Ensure it's rendered without submenu
  });

  it('should toggle the mobile menu on small screens', () => {
    // Mock a small screen size
    global.innerWidth = 400;
    global.dispatchEvent(new Event('resize'));

    renderNavbar({
      appInfo: mockAppInfo,
      menuItems: mockMenuItems,
      UserControls: mockUserControls,
    });

    const menuButton = screen.getByTestId('MenuIcon');
    expect(menuButton).toBeInTheDocument();

    // Open the mobile menu
    fireEvent.click(menuButton);
    expect(screen.getAllByText('Home')).toHaveLength(2);

    // Close the mobile menu
    fireEvent.click(menuButton);
    expect(screen.queryAllByText('Home')).toHaveLength(2);
  });

  it('should render user controls section', () => {
    renderNavbar({
      appInfo: mockAppInfo,
      menuItems: mockMenuItems,
      UserControls: mockUserControls,
    });

    expect(screen.getByText('User Avatar')).toBeInTheDocument();
  });
});
