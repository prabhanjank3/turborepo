import React from 'react';
import { createRoot, Container } from 'react-dom/client'; // Import createRoot
import MyComponent from '@achieve4sure/ui-mui';

const App = () => {
  return <MyComponent onClick={() => {}} label={'Click'} variant="contained" />;
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as Container); // Create a root
root.render(<App />);
