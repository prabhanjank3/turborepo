import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/default';
import SidebarLayout from './layouts/sidebar';
import Hello from './components/hello';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SidebarLayout views={[]} />}>
        <Route path="" element={<Hello />} />
      </Route>
    </Routes>
  );
};

export default App;
