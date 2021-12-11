import React, { useEffect } from 'react';
import { Box, Container, Message, Text } from 'theme-ui';
import Image from '../components/image';
import SectionHeading from '../components/section-heading';
import AnimateWhenVisible from '../components/AnimateWhenVisible';
import Widget from '../components/Widget';
const checkFilledCircle = '../assets/images/icons/check-circle-filled.png';

const OurVision = () => {
  return (
    <Box as="section" id="our-vision" variant="section.ourVision">
      <Widget
        reverse={true}
        columns="2fr 1fr"
        style={{
          gap: [0, 0, 0, 0, 10, 100],
          display: ['inline-flex', 'inline-flex', 'inline-flex', 'grid'],
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          flexWrap: 'wrap-reverse',
        }}
        illustration={
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
            <Box
              sx={{
                p: [null, null, 5, 0],
                pl: [null, null, 7, 0],
                pr: [null, null, 7, 0],
              }}>
              <Image src={'/assets/team-work.svg'} alt="widgets" />
            </Box>
          </AnimateWhenVisible>
        }
        content={
          <>
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
          </>
        }
      />
    </Box>
  );
};

export default OurVision;

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
