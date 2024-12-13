// packages/my-component-library/.storybook/preview.ts
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

const theme = createTheme({
  // Customize your MUI theme here if needed
  palette: {
    primary: {
      main: '#49484A',
    },
    secondary: {
      main: '#6c757d',
    },
  },
  logo: {
    fontFamily: 'Roboto',
    fontSize: '24px',
  },
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
