import { Box, Container } from 'theme-ui';
import SectionHeader from '../components/section-heading';
import Accordion from '../components/accordion/accordion';
import AnimateWhenVisible from '../components/AnimateWhenVisible';

const banner = '/assets/services.svg';
const faqs = [
  {
    title: 'Where do the funds come from?',
    contents: (
      <div>
        Aliquid ut occaecati impedit odit. Et a aut ab facere cum maxime ducimus.
        Aspernatur ut est voluptatem commodi
      </div>
    ),
  },
  {
    title: 'Will I have access to funds at any time?',
    contents: (
      <div>
        Ea aliquid facilis ut magnam itaque. Voluptatibus occaecati veritatis aut qui
        dolorum dolor unde et. Optio ut qui.
      </div>
    ),
  },
  {
    title: `How long is the underwriting (approval) process?`,
    contents: (
      <div>
        Distinctio et ipsam ipsam enim quaerat dolore tempora rerum error. Qui laboriosam
        dicta consequatur.
      </div>
    ),
  },
  {
    title: `Why shouldn't I just go to a bank for a loan?`,
    contents: (
      <div>
        Totam modi molestias natus explicabo doloribus eius in. Dolore et asperiores ab.
        Quia voluptatibus placeat.
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
