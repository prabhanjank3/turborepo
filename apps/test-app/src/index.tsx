import React from 'react';
import { createRoot, Container } from 'react-dom/client'; // Import createRoot
import Component from '@achieve4sure/test-package';

const App = () => {
  return <Component />;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Container); // Create a root
root.render(<App />);
