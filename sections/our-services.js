import { Box, Container, Text } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import { LearnMore } from '../components/link';
import Image from '../components/image';
import AnimateWhenVisible from '../components/AnimateWhenVisible';

const banner = '/assets/products.svg';
const checkFilledCircle = '/assets/images/icons/check-circle-filled.png';

const OurServices = () => {
  return (
    <Box as="section" id="our-vision" variant="section.ourVision">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <AnimateWhenVisible
              variants={{
                hidden: { y: 25, opacity: 0 },
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
              <SectionHeading
                sx={styles.heading}
                title="Our Services"
                description="Here at X CAPITOL we help any start up, business, or individual gain access to funding and capital. Understanding which funding options work best for your business is something we're happy to do."
              />
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
                  Through various products such as:
                </Text>

                <Box sx={{ mt: 0 }}>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Business lines of credit
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Merchant Cash Advance
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Invoice Factoring / Working Capital
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Funding through 401K / IRA
                  </Text>

                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Real Estate Financing
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Equipment Financing
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Term Loans
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    SBA Loans
                  </Text>
                  <Text sx={styles.listItem} as="p">
                    <Image src={checkFilledCircle} alt="check icon" />
                    Credit Repair & Monitoring services
                  </Text>
                </Box>
              </Box>

              <Box sx={styles.explore}>
                <LearnMore path="/services" label="Explore More" />
              </Box>
            </AnimateWhenVisible>
          </Box>
          <Box sx={styles.rightContent}>
            <AnimateWhenVisible
              variants={{
                hidden: { y: 25, opacity: 0 },
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
              <Image src={banner} alt="widgets" />
            </AnimateWhenVisible>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  rightContent: {
    p: [35, 30],
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
