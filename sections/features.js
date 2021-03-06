import { Box, Container } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import UltimateFeature from '../components/cards/ultimate-feature';

const bulb = '/assets/images/icons/bulb.png';
const dart = '/assets/images/icons/dart.png';
const rocket = '/assets/images/icons/rocket.png';
const trophy = '/assets/images/icons/trophy.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'About Us',
    description:
      'At X Capital we offer financial consulting and funding at no cost to our clients. We take a personalized approach to our consultations to serve our clients and their various needs.',
  },
  {
    id: 2,
    icon: dart,
    title: 'Our Vision',
    description:
      "At X Capital we help any business owners and startups gain the financial funding they need. Taking a consultative manner to the lending world while delivering clients what they're looking for.",
  },
  {
    id: 3,
    icon: rocket,
    title: 'Services',
    description: (
      <div>
        <ul sx={{ textAlign: 'left' }}>
          <li>Financial Consulting.</li>
          <li>Business Funding.</li>
          <li>Credit Repair.</li>
          <li>Credit/Identity Monitoring</li>
        </ul>
      </div>
    ),
  },
];

const Features = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Funding & Capital"
          description="Here at X CAPITAL we work with any start up, business or individual who needs funding and access to capital."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
  },
};
