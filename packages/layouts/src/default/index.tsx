import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

export interface DefaultLayoutProps {
  Navbar?: ReactNode; // Allows customization of Navbar
  Footer?: ReactNode; // Allows customization of Footer
  children?: ReactNode; // Enables passing main content to the layout
}

export default function DefaultLayout({
  Navbar,
  Footer,
  children,
}: DefaultLayoutProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {Navbar}
      <Box className="main-content" sx={{ flexGrow: 1 }}>
        {children || <Outlet />}
      </Box>
      {Footer}
    </Box>
  );
}
