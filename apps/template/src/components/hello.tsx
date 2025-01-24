import React from 'react';
import { CustomButton } from '@achieve4sure/ui-mui';
import { AcUnitOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

const Hello: React.FC = () => {
  return (
    <CustomButton label="Click" onClick={() => {}} />
    // <Navbar
    //   appInfo={{
    //     logo: () => <AcUnitOutlined fontSize="large" />, // Mock logo component
    //     name: 'My Portal',
    //     subLine: 'The best portal ever',
    //   }}
    //   menuItems={[
    //     { url: '', label: 'Daddy', child: [{ url: '', label: 'Son' }] },
    //   ]}
    //   UserControls={() => (
    //     <Avatar sx={{ bgcolor: 'secondary.main', fontSize: 'medium' }}>
    //       OP
    //     </Avatar>
    //   )}
    // />
  );
};

export default Hello;
