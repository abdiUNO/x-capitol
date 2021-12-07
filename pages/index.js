import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import UltimateFeatures from '../sections/ultimate-features';
import CallToAction from '../sections/call-to-action';
import OurServices from '../sections/our-services';
import WhoWeAre from '../sections/who-we-are';
import Faq from '../sections/faq';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import BasicMeta from '../components/meta/BasicMeta';

export default function IndexPage() {
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
      <UltimateFeatures />

      <CallToAction />

      <Faq />

      {/*<Features />*/}
      {/*<Pricing />*/}
    </Layout>
  );
}
