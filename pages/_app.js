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
import { useRouter } from 'next/router';
import * as fbq from '../lib/fpixel';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    initGA();
    logPageView();

    fbq.pageview();

    const handleRouteChange = () => {
      console.log('pageview');
      logPageView();
      fbq.pageview();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };

    // Router.events.on('routeChangeComplete', logPageView);
  }, [router.events]);

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
            url: 'https://xcapitalfunding.net/',
            site_name: 'X Capitol',
            description: 'Business Consultants',
            images: ['https://xcapitalfunding.net/assets/images/x-capitol-cover.jpeg'],
          }}
          twitter={{
            site: 'X Capitol',
            cardType: 'summary_large_image',
          }}
        />
        {/*<Script*/}
        {/*  id="facebook-pixel"*/}
        {/*  dangerouslySetInnerHTML={{*/}
        {/*    __html: `*/}
        {/*    !function(f,b,e,v,n,t,s)*/}
        {/*    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?*/}
        {/*    n.callMethod.apply(n,arguments):n.queue.push(arguments)};*/}
        {/*    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';*/}
        {/*    n.queue=[];t=b.createElement(e);t.async=!0;*/}
        {/*    t.src=v;s=b.getElementsByTagName(e)[0];*/}
        {/*    s.parentNode.insertBefore(t,s)}(window, document,'script',*/}
        {/*    'https://connect.facebook.net/en_US/fbevents.js');*/}
        {/*    fbq('init', ${fbq.FB_PIXEL_ID});*/}
        {/*  `,*/}
        {/*  }}*/}
        {/*/>*/}
        <Script id="facebook-pixel">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '583792236035545');
fbq('track', 'PageView')`}
        </Script>
        <div id="fb-root"></div>
        <div id="fb-customer-chat" className="fb-customerchat"></div>
        <div
          className="fb-customerchat"
          attribution="install_email"
          attribution_version="biz_inbox"
          page_id="100203922072384"
        />
        <Component {...pageProps} />

        <Script id="fb-chat">
          {`
            var chatbox = document.getElementById('fb-customer-chat');
            chatbox.setAttribute("page_id", "100203922072384");
            chatbox.setAttribute("attribution", "biz_inbox");
          `}
        </Script>
        <Script id="fb-chat-sdk">
          {`
            window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v12.0'
              });
            };

            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
          `}
        </Script>
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
