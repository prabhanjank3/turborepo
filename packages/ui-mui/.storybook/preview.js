// packages/my-component-library/.storybook/preview.ts
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
  // Customize your MUI theme here if needed
});

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
