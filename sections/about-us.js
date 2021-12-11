import React, { useEffect } from 'react';
import { Box, Container, Message, Text } from 'theme-ui';
import Image from '../components/image';
import SectionHeading from '../components/section-heading';
import AnimateWhenVisible from '../components/AnimateWhenVisible';
import Widget from '../components/Widget';

const checkFilledCircle = '../assets/images/icons/check-circle-filled.png';

const AboutUs = () => {
  return (
    <Box as="section" id="about-us" variant="section.aboutUs">
      <Box sx={{ pt: 7 }}>
        <Widget
          style={{
            gap: [0, 0, 0, 0, 10, 100],
            display: ['block', 'block', 'block', 'grid'],
            gridTemplateColumns: '1fr 2fr',
            alignItems: 'center',
          }}
          illustration={
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
              <Box
                sx={{
                  p: [null, null, 5, 0],
                  pl: [null, null, 7, 0],
                  pr: [null, null, 7, 0],
                }}>
                <Image src="/assets/work.svg" alt="widgets" />
              </Box>
            </AnimateWhenVisible>
          }
          content={
            <>
              <SectionHeading
                sx={styles.heading}
                title="About Us"
                description="At X Capital we offer financial consulting at no cost to our clients."
              />

              <Text sx={styles.textItem}>
                Through our partner lenders we help your business get the funding it
                needs. Just send in the required information and get a consultation for
                free. We work with a vast network of business owners and individuals, a
                one stop shop for all your funding needs.
              </Text>

              <Text sx={styles.textItem}>
                Our programs are designed to fund your business or project fast and with
                maximum funding with the best options to maximize business ROI. With no
                upfront cost or back door fees along with consultations that take a
                personal touch were happy to help.
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
            </>
          }
        />
      </Box>
    </Box>
  );
};

export default AboutUs;

const styles = {
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
