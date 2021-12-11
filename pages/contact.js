import React, { useEffect } from 'react';
import Script from 'next/script';
import Head from 'next/head';
import { PopupButton } from 'react-calendly';
import Layout from '../components/layout';
import BasicMeta from '../components/meta/BasicMeta';
import SectionHeader from '../components/section-heading';
import { Container, Box, Text, Image, Heading, Divider } from 'theme-ui';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import SectionHeading from '../components/section-heading';

const ContactBlock = ({ data, iconComponent = null, ...props }) => {
  console.log(iconComponent);
  return (
    <Box sx={styles.blockItem} {...props}>
      <figure>{iconComponent}</figure>
      <Box>
        <Text as="p" sx={styles.blockText}>
          {data?.text}
        </Text>
      </Box>
    </Box>
  );
};

const data = [
  {
    id: 1,
    icon: <FaPhone color="#10132D" size="20px" />,
    text: (
      <a href="tel:402-909-1040" target="_blank" rel="noreferrer">
        Call us at
        <br />
        402-909-1040
      </a>
    ),
  },
  {
    id: 2,
    icon: <FaEnvelope color="#10132D" size="20px" />,
    title: '',
    text: (
      <a href="mailto:funding@xcapitol.net" target="_blank" rel="noreferrer">
        Email us at
        <br />
        funding@xcapitol.net
      </a>
    ),
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt color="#10132D" size="20px" />,
    text: (
      <a href="#">
        530 South 13th Street
        <br />
        Lincoln, NE
      </a>
    ),
  },
];

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <BasicMeta url="/contact" description="X Capital contact page" title={'Contact'} />
      <Script src="//embed.typeform.com/next/embed.js" />
      <Box as="section" id="contact" variant="section.contact">
        <Container>
          <SectionHeading
            title="Contact Us"
            sx={styles.heading}
            description="Have any questions? We'd love to hear from you."
          />

          <Box sx={styles.blocks}>
            {data?.map((item) => (
              <ContactBlock
                key={item.id}
                data={{
                  id: item.id,
                  text: item.text,
                }}
                iconComponent={item.icon}
              />
            ))}
          </Box>
        </Container>
      </Box>
      <Box as="section" id="book-call" variant="section.bookCall">
        <Container>
          <Box sx={{ pt: [7, 8, 150], pb: 5 }}>
            <SectionHeading
              sx={{
                maxWidth: '620px',
                mb: [5],
                h2: {
                  fontWeight: 'semi-bold',
                  fontSize: ['20px', null, '24px', '26px', '28px', '28px', '30px'],
                  pl: [3, 4, 1],
                  pr: [3, 4, 1],
                  lineHeight: 1.33,
                  textTransform: 'capitalize',
                  letterSpacing: 'heading',
                  color: 'headingSecondary',
                },
              }}
              title="Schedule a call for a free consultation."
            />
            <Box
              sx={{
                textAlign: ['center'],
              }}>
              <PopupButton
                sx={{
                  variant: 'buttons.primary',
                  minHeight: '50px',
                  px: '25px',
                  fontSize: [2, 3, '18px'],
                  lineHeight: '55px',
                  border: '1px #F3F4F5 solid',
                }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: true,
                  hideGdprBanner: true,
                  hideLandingPageDetails: true,
                  primaryColor: '28DDB2',
                  textColor: '343D48',
                }}
                url="https://calendly.com/x-capitol"
                text="Book Now"
              />
            </Box>
          </Box>
        </Container>
      </Box>
      <Divider sx={{ p: 0, m: 0 }} />
    </Layout>
  );
}

const styles = {
  heading: {
    marginBottom: [6, 6, 7],
    maxWidth: '620px',
    mb: [5],
    h2: {
      fontSize: ['25px', null, '30px', '32px', '37px', '40px', '45px'],
      pl: [3, 4, 1],
      pr: [3, 4, 1],
      lineHeight: 1.33,
      textTransform: 'capitalize',
      letterSpacing: 'heading',
      color: 'heading',
    },
    p: {
      fontWeight: 400,
      lineHeight: 1.8,
    },
  },
  blocks: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(3, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
  blockItem: {
    textAlign: ['center', 'center', 'center', 'center', 'center'],
    maxWidth: [230, 230, 230, 230, 'none'],
    margin: '0 auto',
    figure: {
      backgroundColor: 'white',
      boxShadow: '0px 8px 24px rgba(53, 95, 158, 0.1)',
      margin: ['0 auto 20px', '0 auto 20px', '0 auto 20px', '0 auto 20px', '0 auto 25px'],
      width: '70px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
    },
    h4: {
      fontSize: '18px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '20px',
    },
    p: {},
  },

  blockText: {
    fontSize: [3],
    fontWeight: 600,
    color: 'text',
    p: '0 4px',
    lineHeight: 1.9,
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
    fontSize: [15, 15, 16],
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
    mb: '15px',
  },
  listHeader: {
    fontSize: [15, 15, 16],
  },
  listWrapper: {
    fontSize: [15, 15, 16],
    marginTop: '0.5em',
  },
};
