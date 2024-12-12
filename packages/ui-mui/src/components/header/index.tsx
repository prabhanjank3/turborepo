/* eslint-disable no-console */
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ marginRight: 10 }}>
          <props.PORTALDATA.logo />
        </div>

        <div onClick={() => {}}>
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
        </div>
      </div>
      {/* {true && <NavMenu menulist={props.Menudata} />} */}
      <div style={{ marginLeft: 'auto' }}>
        {true ? (
          <div>Hello</div>
        ) : (
          <Link to={'/login'}>
            <Typography sx={{ color: 'secondary.main' }}>Login</Typography>
          </Link>
        )}
      </div>
    </Box>
  );
}
