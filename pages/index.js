import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import Features from '../sections/features';
import CallToAction from '../sections/call-to-action';
import OurServices from '../sections/our-services';
import WhoWeAre from '../sections/who-we-are';
import Faq from '../sections/faq';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import BasicMeta from '../components/meta/BasicMeta';
import * as fbq from '../lib/fpixel';

export default function IndexPage() {
  const handleClick = () => {
    fbq.event('Purchase', { currency: 'USD', value: 10 });
  };
  useEffect(() => {
    window.scrollTo(0, 0);

    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <Layout>
      <BasicMeta url="/" description={'x capitol home'} title={'Home'} />
      <Script src="//embed.typeform.com/next/embed.js" />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />

      <Banner />
      <WhoWeAre />

      <OurServices />
      <CallToAction />

      <Features />

      <Faq />

      {/*<Features />*/}
      {/*<Pricing />*/}
    </Layout>
  );
}
