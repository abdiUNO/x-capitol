import React from 'react';
import { Box, Container, jsx, Text, ThemeProvider } from 'theme-ui';
import theme from '../theme';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import UltimateFeatures from '../sections/ultimate-features';
import Features from '../sections/features';
import IntroVideo from '../sections/intro-video';
import UsefulFeatures from '../sections/useful-features';
import Pricing from '../sections/pricing';
import Faq from '../sections/faq';
import Image from '../components/image';
const banner = '../assets/about-us.svg';
const _banner = '../assets/services.svg';
import SectionHeading from '../components/section-heading';
import { LearnMore } from '../components/link';
import { NextSeo } from 'next-seo';

const checkFilledCircle = '../assets/images/icons/check-circle-filled.png';
import AnimateWhenVisible from '../components/AnimateWhenVisible';

const AboutUs = () => {
  return (
    <Box as="section" id="about-us" variant="section.aboutUs">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <AnimateWhenVisible
              variants={{
                hidden: { x: -200, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    damping: 15,
                    bounce: 0.4,
                    duration: 0.8,
                  },
                },
              }}>
              <Image src={banner} alt="widgets" />
            </AnimateWhenVisible>
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="About Us"
              description="At X Capitol we offer financial consulting at no cost only if a deal is funded."
            />

            <Text sx={styles.textItem}>
              Through our partner lenders we help you get the funding you deserve. Just
              send in the required information on the apply page and get a consultation
              for FREE. Working with a vast network of business owners and individuals, a
              one stop shop for all your funding needs.
            </Text>

            <Text sx={styles.textItem}>
              Our programs are designed to fund your business or project FAST and with
              MAXIMUM funding with the best options to maximize business ROI. With NO
              upfront cost or back door fees along with consultations that take a PERSONAL
              touch.
            </Text>
            <Text sx={styles.textItem}>
              Get the financing you need to keep growing TODAY! Don’t bother waiting weeks
              for a reply from your local bank. <br />
            </Text>

            <Text
              sx={{
                fontWeight: 600,
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                img: {
                  mr: '10px',
                },
                mb: '15px',
              }}>
              *We currently ONLY work with clients in the U.S. and Canada.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

const OurVision = () => {
  return (
    <Box as="section" id="our-vision" variant="section.ourVision">
      <Container>
        <Box
          sx={{
            gap: [0, 0, 0, 0, 10, 100],
            display: ['block', 'block', 'grid'],
            gridTemplateColumns: '2fr 1fr',
            alignItems: 'center',
          }}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title="Our Vision"
              description="Here at X CAPITOL we believe that EVERYONE has access to funding options regardless of their credit history."
            />

            <Text sx={styles.textItem}>
              Offering expertise in financial consultancy for our clients and delivering
              maximum success with our quick turn around processing. All consultations are
              FREE.
            </Text>

            <Box>
              <Text
                sx={{
                  fontWeight: 600,
                  fontSize: 16,
                  display: 'flex',
                  alignItems: 'center',
                  img: {
                    mr: '10px',
                  },
                  mb: 10,
                  textDecoration: 'underline',
                }}>
                With our help you can
              </Text>

              <Box sx={{ mt: 0 }}>
                <Text sx={styles.listItem} as="p">
                  <Image src={checkFilledCircle} alt="check icon" />
                  Renovate or change your real estate
                </Text>
                <Text sx={styles.listItem} as="p">
                  <Image src={checkFilledCircle} alt="check icon" />
                  Grow your business or ad campaign
                </Text>
                <Text sx={styles.listItem} as="p">
                  <Image src={checkFilledCircle} alt="check icon" />
                  Purchase inventory
                </Text>
                <Text sx={styles.listItem} as="p">
                  <Image src={checkFilledCircle} alt="check icon" />
                  Pay payroll
                </Text>
              </Box>
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <AnimateWhenVisible
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    damping: 15,
                    bounce: 0.4,
                    duration: 0.8,
                  },
                },
              }}>
              <Image src={'/our-vision.svg'} alt="widgets" />
            </AnimateWhenVisible>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default function AboutPage() {
  return (
    <Layout>
      <NextSeo title="About | X Capitol" />
      {/*<UltimateFeatures />*/}

      <AboutUs />
      <OurVision />

      {/*<Features />*/}
      {/*<Pricing />*/}
    </Layout>
  );
}

const styles = {
  contentWrapper: {
    pt: [200, 9, 7, 7, 7],
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 2fr',
    alignItems: 'center',
  },
  rightContent: {
    p: [15, 30, 50],
  },
  leftContent: {
    p: [15, 30, 50],
  },
  heading: {
    textAlign: 'left',
    marginBottom: [15, 15, 15, 30],
    fontWeight: 500,
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
    },
    p: {
      lineHeight: 1.8,
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  textItem: {
    fontWeight: 400,
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
    mb: '15px',
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
