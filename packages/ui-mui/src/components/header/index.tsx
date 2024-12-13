import { Box, Typography } from '@mui/material';
import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

interface PortalDataProps {
  logo: React.FC;
  name: string;
  subline: string;
}

interface NavbarProps {
  PORTALDATA: PortalDataProps;
  Menudata: string;
}
export default function Navbar(props: NavbarProps) {
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
          <props.PORTALDATA.logo />
        </Box>

        <Box onClick={() => {}}>
          <Typography
            sx={{
              fontSize: 'logo.fontSize',
              fontFamily: 'logo.fontFamily',
              fontWeight: 'logo.fontWeight',
            }}
          >
            {props.PORTALDATA.name}
          </Typography>
          <Typography sx={{ fontSize: '11px' }}>
            {props.PORTALDATA.subline}
          </Typography>
        </Box>
      </Box>
      {/* {true && <NavMenu menulist={props.Menudata} />} */}
      <Box sx={{ marginLeft: 'auto' }}>
        {true ? (
          <Box>Heello</Box>
        ) : (
          <Link to={'/login'}>
            <Typography sx={{ color: 'secondary.main' }}>Login</Typography>
          </Link>
        )}
      </Box>
    </Box>
  );
}
