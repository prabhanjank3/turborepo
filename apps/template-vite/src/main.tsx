import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { theme as muiTheme } from './theme';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './App';

const theme = createTheme(muiTheme);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
