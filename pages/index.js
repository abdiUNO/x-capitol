import React from 'react';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import UltimateFeatures from '../sections/ultimate-features';
import CallToAction from '../sections/call-to-action';
import OurServices from '../sections/our-services';
import AboutUs from '../sections/about-us';
import Faq from '../sections/faq';
import { NextSeo } from 'next-seo';

export default function IndexPage() {
  return (
    <Layout>
      <NextSeo title="X Capitol Home" />
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
