import React, { ReactNode } from 'react';
import { createRoot, Container } from 'react-dom/client'; // Import createRoot
import { Navbar } from '@achieve4sure/ui-mui';
import { AcUnitOutlined } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

const App = () => {
  return (
    <Navbar
      appInfo={{
        logo: () => <AcUnitOutlined fontSize="large" />, // Mock logo component
        name: 'My Portal',
        subLine: 'The best portal ever',
      }}
      menuItems={[
        { url: '', label: 'Daddy', child: [{ url: '', label: 'Son' }] },
      ]}
      UserControls={() => (
        <Avatar sx={{ bgcolor: 'secondary.main', fontSize: 'medium' }}>
          OP
        </Avatar>
      )}
    />
  );
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Container); // Create a root
root.render(<App />);
