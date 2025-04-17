// packages/my-component-library/.storybook/preview.ts
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { theme as muiTheme } from './theme';

const theme = createTheme(muiTheme);

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    );
  },
];

// You can directly set parameters here if needed
export const parameters = {
  // Customize Storybook parameters here
};
