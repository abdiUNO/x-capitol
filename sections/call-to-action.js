import { useState } from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Image from '../components/image';
import { LearnMore } from '../components/link';
const videoBanner = '/assets/images/video.png';
const Play = '/assets/images/icons/play.png';
import Modal, { CloseButton } from '../components/modal/modal';
import ResponsiveIframe from '../components/responsive-iframe';

const CallToAction = ({ backgroundColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="section"
      sx={{ backgroundColor: backgroundColor || 'backgroundSecondary' }}
      variant="section.callAction">
      <Container>
        <SectionHeading sx={styles.heading} title="Get your business funded today!" />
        <Box sx={styles.explore}>
          <Button
            as="a"
            variant="primaryMd"
            sx={{ fontSize: '22px', lineHeight: '55px' }}>
            Contact Us Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CallToAction;

const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      fontWeight: 'bold',
      fontSize: ['25px', null, '30px', '30px', '37px', '35px', '55px'],
      pl: [3, 4, 1],
      pr: [3, 4, 1],
      lineHeight: 1.33,
      textTransform: 'capitalize',
      letterSpacing: 'heading',
      color: 'textSecondary',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: [6],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
    },
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
};
