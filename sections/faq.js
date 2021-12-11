import { Box, Container } from 'theme-ui';
import SectionHeader from '../components/section-heading';
import Accordion from '../components/accordion/accordion';
import AnimateWhenVisible from '../components/AnimateWhenVisible';

const banner = '/assets/services.svg';
const faqs = [
  {
    title: 'Where do the funds come from?',
    contents: <div>Financing is through our partner lenders.</div>,
  },
  {
    title: 'Will I have access to funds at any time?',
    contents: (
      <div>
        Yes, once the deal is closed funds will be ready in a short amount of time with
        the availability to access funds anytime.
      </div>
    ),
  },
  {
    title: `How long is the underwriting (approval) process?`,
    contents: (
      <div>
        Generally speaking, it only takes a day or two to get the terms and approval
        figured out for most financing options. Yet options like an SBA naturally take
        longer on the contrary something of an MCA sort is very quick, within a day many
        times.
      </div>
    ),
  },
  {
    title: `Why shouldn't I just go to a bank for a loan?`,
    contents: (
      <div>
        Naturally it will take much longer and the bank system does not guarantee the best
        Return On Investment (ROI) because banks don't take a personalized approach. The
        bank system takes the best option for themselves and not the client with over 70%
        of applicants being denied while also waiting weeks for a reply.{' '}
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
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
          <SectionHeader
            title="Do you have any quesiton"
            // description="Our support team ready to help you, please contact with them"
          />
        </AnimateWhenVisible>
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
          <Box
            sx={{
              display: 'flex',
              width: ['100%', null, null, '650px', '745px'],
              flexDirection: 'column',
              mx: 'auto',
              my: -4,
            }}>
            <Accordion items={faqs} />
          </Box>
        </AnimateWhenVisible>
      </Container>
    </Box>
  );
}
