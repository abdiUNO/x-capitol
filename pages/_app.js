import '../styles/globals.css';
import React, { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import '../components/modal/modal.css';
import 'typeface-dm-sans';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
