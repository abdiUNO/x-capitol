import React, { useEffect } from 'react';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import UltimateFeatures from '../sections/ultimate-features';
import CallToAction from '../sections/call-to-action';
import OurServices from '../sections/our-services';
import AboutUs from '../sections/about-us';
import Faq from '../sections/faq';
import { NextSeo } from 'next-seo';
import Script from 'next/script';

export default function IndexPage() {
  useEffect(() => {
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
      <NextSeo title="X Capitol Home" />
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Banner />
      <AboutUs />

      <OurServices />
      <UltimateFeatures />

      <CallToAction />

      <Faq />

      {/*<Features />*/}
      {/*<Pricing />*/}
    </Layout>
  );
}
