import { Box, Typography } from '@mui/material';
import React from 'react';
import './index.css';
import { NavmenuItemProps } from './types';
import NavMenu from './navMenu';

interface PortalDataProps {
  logo: React.FC;
  name: string;
  subLine: string;
}

export default function Navbar({
  appInfo,
  menuItems,
  UserControls,
}: {
  appInfo: PortalDataProps;
  menuItems: NavmenuItemProps[];
  UserControls?: React.FC;
}) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'primary.contrastText',
      }}
      className="navbar-container"
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ marginRight: 2 }}>
          <appInfo.logo />
        </Box>

        <Box onClick={() => {}}>
          <Typography
            sx={{
              fontSize: 'logo.fontSize',
              fontFamily: 'logo.fontFamily',
              fontWeight: 'logo.fontWeight',
            }}
          >
            {appInfo.name}
          </Typography>
          <Typography sx={{ fontSize: '11px' }}>{appInfo.subLine}</Typography>
        </Box>
      </Box>
      {menuItems && <NavMenu menulist={menuItems} />}
      <Box sx={{ marginLeft: 'auto' }}>
        <Box>{UserControls ? <UserControls /> : null}</Box>
      </Box>
    </Box>
  );
}
