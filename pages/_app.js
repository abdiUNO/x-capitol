import '../styles/globals.css';
import React, { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import '../components/modal/modal.css';
import 'typeface-dm-sans';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import { DefaultSeo } from 'next-seo';
import { AnimatePresence } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}>
      <ThemeProvider theme={theme}>
        <DefaultSeo
          defaultTitle={'X Capitol'}
          description={'Business Consultants'}
          language="English"
          additionalMetaTags={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
              name: 'msapplication-TileColor',
              content: '#28ddb2',
            },
            {
              name: 'application-name',
              content: 'X Capitol',
            },
            {
              name: 'theme-color',
              content: '#28ddb2',
            },
          ]}
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://x-capitol.netlify.app',
            site_name: 'X Capitol',
            description: 'Business Consultants',
            image: 'https://x-capitol.netlify.app/assets/image/x-capitol-logo.png',
          }}
          // twitter={{
          //   handle: '@xcapitol',
          //   site: 'X Capitol',
          //   cardType: 'summary_large_image',
          // }}
        />

        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
