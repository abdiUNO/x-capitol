import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import { LearnMore } from '../components/link';
import Image from '../components/image';
const banner = '/assets/personal-finance.svg';
import AnimateWhenVisible from '../components/AnimateWhenVisible';

const AboutUs = () => {
  return (
    <Box
      as="section"
      id="about-us"
      variant="section.aboutUs"
      style={{ overflow: 'scroll' }}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <div style={{ display: 'block' }}>
              <AnimateWhenVisible
                variants={{
                  hidden: { y: 100, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      delay: 0.1,
                      type: 'spring',
                      bounce: 0.4,
                      duration: 0.8,
                    },
                  },
                }}>
                <Image src={banner} alt="widgets" />
              </AnimateWhenVisible>
            </div>
          </Box>
          <Box sx={styles.rightContent}>
            <AnimateWhenVisible
              variants={{
                hidden: { y: 100, opacity: 0 },
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
              <SectionHeading
                sx={styles.heading}
                title="Who We Are"
                description="At X Capitol we offer financial consulting at no cost only if a deal is funded. We take the utmost care with consultations to serve our various client and their needs."
              />
              <Text sx={styles.textItem}>
                Get the financing you need to keep growing TODAY! Don’t bother waiting
                weeks for a reply from your local bank. <br />
              </Text>

              <Box sx={styles.explore}>
                <LearnMore path="/about" label="Explore More" />
              </Box>
            </AnimateWhenVisible>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  leftContent: {
    p: [15, 30, 50],
  },
  heading: {
    textAlign: 'left',
    mt: [0, 0, 0, 0, '-70px'],
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
