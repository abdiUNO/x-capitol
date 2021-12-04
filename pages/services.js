import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import UltimateFeatures from '../sections/ultimate-features';
import Features from '../sections/features';
import IntroVideo from '../sections/intro-video';
import UsefulFeatures from '../sections/useful-features';
import OurVision from '../sections/our-services';
import AboutUs from '../sections/about-us';
import Pricing from '../sections/pricing';
import ServicesList from '../sections/serviceslist';
import { NextSeo } from 'next-seo';

export default function ServicesPage() {
  return (
    <Layout>
      <NextSeo title="Services | X Capitol" />
      <ServicesList />
    </Layout>
  );
}
