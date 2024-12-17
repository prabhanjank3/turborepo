// packages/my-component-library/.storybook/preview.ts
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme as muiTheme } from './theme';

const theme = createTheme(muiTheme);

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </ThemeProvider>
    );
  },
];

// You can directly set parameters here if needed
export const parameters = {
  // Customize Storybook parameters here
};
