import React, { useEffect } from 'react';
import { Box, Container, Message, Text } from 'theme-ui';
import Layout from '../components/layout';
import CallToAction from '../sections/call-to-action';
import Image from '../components/image';
import SectionHeading from '../components/section-heading';
import { NextSeo } from 'next-seo';
import Script from 'next/script';
import AnimateWhenVisible from '../components/AnimateWhenVisible';
import BasicMeta from '../components/meta/BasicMeta';

const checkFilledCircle = '../assets/images/icons/check-circle-filled.png';

const AboutUs = () => {
  return (
    <Box as="section" id="about-us" variant="section.aboutUs">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContentAbout}>
            <AnimateWhenVisible
              variants={{
                hidden: { x: -50, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                  },
                },
              }}>
              <Image src="/assets/work.svg" alt="widgets" />
            </AnimateWhenVisible>
          </Box>
          <Box sx={styles.rightContentAbout}>
            <SectionHeading
              sx={styles.heading}
              title="About Us"
              description="At X Capital we offer financial consulting at no cost to our clients."
            />

            <Text sx={styles.textItem}>
              Through our partner lenders we help your business get the funding it needs.
              Just send in the required information and get a consultation for free. We
              work with a vast network of business owners and individuals, a one stop shop
              for all your funding needs.
            </Text>

            <Text sx={styles.textItem}>
              Our programs are designed to fund your business or project fast and with
              maximum funding with the best options to maximize business ROI. With no
              upfront cost or back door fees along with consultations that take a personal
              touch were happy to help.
            </Text>
            <Text sx={styles.textItem}>
              Get the funding you need to keep growing today! Don’t bother waiting weeks
              for a reply from your local bank. <br />
            </Text>

            <Text
              sx={{
                fontSize: 16,
                display: 'flex',
                alignItems: 'center',
                img: {
                  mr: '10px',
                },
                pt: 2,
                mb: '15px',
              }}>
              <Message sx={{ padding: '16px 12px', backgroundColor: 'borderColor' }}>
                We currently ONLY work with clients in the U.S. and Canada.
              </Message>
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
              description="Here at X Capital we believe that everyone should have access to funding options regardless of their credit history."
            />

            <Text sx={styles.textItem}>
              Offering expertise in financial consulting to our clients and delivering
              maximum success with our quick turn around processing. All consultations are
              free.
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
                hidden: { y: 50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.4,
                    duration: 0.8,
                  },
                },
              }}>
              <Image src={'/assets/team-work.svg'} alt="widgets" />
            </AnimateWhenVisible>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <BasicMeta url="/about" description={'about page'} title={'About'} />
      <Script src="//embed.typeform.com/next/embed.js" />
      <AboutUs />
      <CallToAction />
      <OurVision />
    </Layout>
  );
}

const styles = {
  contentWrapper: {
    pt: [175, 7, 7, 7, 8],
    gap: [0, 0, 0, 25, 25, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '0.9fr 2fr',
    alignItems: 'center',
  },
  rightContent: {
    p: [30, 50, 0],
  },
  leftContent: {
    p: [15, 50, 0],
  },

  rightContentAbout: {
    p: [30, 50, 0],
  },
  leftContentAbout: {
    p: [30, 60, 0],
  },
  heading: {
    textAlign: 'left',
    marginBottom: [15, 15, 15, 30],
    marginLeft: 0,
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
