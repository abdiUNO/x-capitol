import { Box, Button, Container, Heading, Image, Text } from 'theme-ui';
import AnimateWhenVisible from '../components/AnimateWhenVisible';
import * as fbq from '../lib/fpixel';
import { debugEvent, logEvent } from '../analytics';

const Banner = () => {
  const handleClick = () => {
    debugEvent('Get Started Now');
    logEvent('Contact', 'Clicked CTO Button', 'Get Started Now');
    fbq.event('Contact');
  };

  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>Get your business funded today!</Heading>
            <Text as="p" sx={styles.text}>
              Apply. Fund. Grow.
            </Text>
            <Button
              variant="primary"
              data-tf-slider="WfMkBbaI"
              data-tf-iframe-props="title=X Capitol (Contact Us)"
              target="_blank"
              sx={styles.button}
              onClick={handleClick}>
              Get Started Now
            </Button>

            <Box sx={styles.clients}>
              {/*<Image src={paypal} alt="paypal" />*/}
              {/*<Image src={google} alt="google" />*/}
              {/*<Image src={dropbox} alt="dropbox" />*/}
            </Box>
          </Box>
          <Box sx={styles.illustration}>
            <AnimateWhenVisible
              variants={{
                hidden: { x: 35, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    type: 'spring',
                    bounce: 0.2,
                    duration: 0.6,
                  },
                },
              }}>
              <Image src="/assets/images/banner.png" alt="widgets" />
            </AnimateWhenVisible>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, 'flex', 'grid'],
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: [null, null, null, null, null, '100vh'],
    pt: [9, 9, 9, 120, 130, 120, 0],
    mb: [9, 8, 7, 6],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: 'bold',
    fontSize: ['30px', null, null, null, '42px', '40px', '60px'],
    lineHeight: 1.33,
    letterSpacing: '-1px',
    color: 'textSecondary',
  },
  text: {
    fontSize: ['14px', '14px', '14px', '16px', '16px', '18px'],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: 'textSecondary',
    mt: ['14px', '19px'],
  },
  button: {
    display: 'flex',
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: 'flex',
    alignItems: 'center',
    mt: ['20px', '45px', '45px', '30px', '45px'],
    img: {
      maxWidth: ['80px', '100%', '100%', '100%'],
      '+ img': {
        ml: ['14px', '28px', '28px', '20px'],
      },
    },
  },
  illustration: {
    display: ['block', 'block'],
    mt: ['30px', '30px', 0],
    mb: ['60px', '60px', 0],
    img: {
      maxWidth: ['100%', '100%', '100%', '100%', '90%', '90%', '100%'],
    },
  },
};
