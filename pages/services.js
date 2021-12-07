import React from 'react';
import Layout from '../components/layout';
import CallToAction from '../sections/call-to-action';
import ServicesList from '../sections/serviceslist';
import { NextSeo } from 'next-seo';

export default function ServicesPage() {
  return (
    <Layout>
      <NextSeo title="Services | X Capitol" />
      <ServicesList />
      <CallToAction backgroundColor="background" />
    </Layout>
  );
}
