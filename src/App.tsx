import React from 'react';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import theme from './theme';
import MainPage from './components/page/Main.page';

export default () => (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  </React.Fragment>
);
