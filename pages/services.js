import React, { useEffect } from 'react';
import Layout from '../components/layout';
import CallToAction from '../sections/call-to-action';
import ServicesList from '../sections/serviceslist';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import BasicMeta from '../components/meta/BasicMeta';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <BasicMeta url="/services" description={'services page'} title={'Services'} />
      <Script src="//embed.typeform.com/next/embed.js" />

      <ServicesList />
      <CallToAction backgroundColor="background" />
    </Layout>
  );
}
