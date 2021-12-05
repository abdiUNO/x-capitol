import '../styles/globals.css';
import React, { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from '../analytics';
import '../components/modal/modal.css';
import 'typeface-dm-sans';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        defaultTitle={'X Capitol'}
        description={'Business Consultants'}
        language="English"
        additionalMetaTags={[
          {
            name: 'msapplication-TileColor',
            content: '#4736ca',
          },
          {
            name: 'application-name',
            content: 'X Capitol',
          },
          {
            name: 'theme-color',
            content: '#4736ca',
          },
          {
            name: 'keywords',
            content: 'outlaw, gang, federal agents',
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
        twitter={{
          handle: '@xcapitol',
          site: 'X Capitol',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
