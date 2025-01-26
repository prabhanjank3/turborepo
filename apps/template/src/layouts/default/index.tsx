/**
 *
 * Default
 *
 */
import * as React from 'react';
import { Navbar, Footer } from '@achieve4sure/ui-mui';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './index.css';
import { AcUnitOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

export default function DefaultLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar
        appInfo={{
          logo: () => <AcUnitOutlined fontSize="large" />,
          name: 'SAMPLE',
          subLine: 'Digital Platform',
        }}
        menuItems={[]}
      />
      <Box className="main-content" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
