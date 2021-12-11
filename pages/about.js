import React, { useEffect } from 'react';
import Layout from '../components/layout';
import CallToAction from '../sections/call-to-action';
import Script from 'next/script';
import BasicMeta from '../components/meta/BasicMeta';
import AboutUs from '../sections/about-us';
import OurVision from '../sections/our-vision';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <BasicMeta
        url="/about"
        description="At X Capital we offer financial consulting and funding at no cost to our clients. We take a personalized approach to our consultations to serve our clients and their various needs."
        title={'About'}
      />
      <Script src="//embed.typeform.com/next/embed.js" />
      <AboutUs />
      <CallToAction />
      <OurVision />
    </Layout>
  );
}
