import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hello from './components/hello';
import Counter from './components/counter';
import { DefaultLayout } from '@achieve4sure/layouts';
import { Navbar, Footer } from '@achieve4sure/ui-mui';
import { Lightbulb } from '@mui/icons-material';

const App: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout
            Navbar={
              <Navbar
                appInfo={{
                  logo: <Lightbulb />,
                  name: 'POWERHUB',
                  subLine: 'Digital Platform',
                }}
                menuItems={[{ label: 'Home', url: '/counter' }]}
                UserControls={undefined}
              />
            }
            Footer={<Footer />}
          />
        }
      >
        <Route path="" element={<Hello />} />
        <Route path="/counter" element={<Counter />} />
      </Route>
    </Routes>
  );
};

export default App;
